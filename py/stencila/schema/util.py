"""Utility functions for schema to/from JSON."""

import json
import typing

from . import types
from .types import Node, Entity, Datatable, DatatableColumn, BooleanSchema, IntegerSchema, NumberSchema, StringSchema, \
    ArraySchema

try:
    from pandas import DataFrame
    import numpy

    pandas_available = True
except ImportError:
    class DataFrame:
        pass

    pandas_available = False


def data_frame_to_data_table(df: DataFrame) -> Datatable:
    columns = []

    for column_name in df.columns:
        column = df[column_name]
        values = column.tolist()
        if column.dtype in (numpy.bool_, numpy.bool8):
            schema = BooleanSchema()
            values = [bool(row) for row in values]
        elif column.dtype in (numpy.int8, numpy.int16, numpy.int32, numpy.int64):
            schema = IntegerSchema()
            values = [int(row) for row in values]
        elif column.dtype in (numpy.float16, numpy.float32, numpy.float64):
            schema = NumberSchema()
            values = [float(row) for row in values]
        elif column.dtype in (numpy.str_, numpy.unicode_,):
            schema = StringSchema()
        else:
            schema = None

        columns.append(
            DatatableColumn(column_name, values, schema=ArraySchema(items=schema))
        )

    return Datatable(columns)


def to_dict(node: typing.Any) -> dict:
    """Convert an Entity node to a dictionary"""
    if pandas_available:
        if isinstance(node, DataFrame):
            node = data_frame_to_data_table(node)

    node_dict = {
        "type": node.__class__.__name__
    }
    node_dict.update(node.__dict__)
    return node_dict


def from_dict(node_dict: dict) -> typing.Union[dict, Node]:
    """Convert a dictionary to an Entity node (if it has a `type` item)."""
    if "type" not in node_dict:
        return node_dict

    node_type = node_dict.pop("type")
    class_ = getattr(types, node_type, None)

    if class_ is None:
        return node_dict

    node_kwargs = {}

    for key, val in node_dict.items():
        if isinstance(val, dict):
            val = from_dict(val)
        elif isinstance(val, list):
            processed_list = []
            for sub_val in val:
                if isinstance(sub_val, dict):
                    processed_list.append(from_dict(sub_val))
                else:
                    processed_list.append(sub_val)
            val = processed_list

        node_kwargs[key] = val

    return class_(**node_kwargs)


def to_json(node: Node) -> str:
    """Convert a node to JSON"""
    return json.dumps(node, default=to_dict, indent=2)


def from_json(serialized: str) -> typing.Union[dict, Node]:
    """Convert JSON to a Node"""
    node = json.loads(serialized)
    return from_dict(node) if isinstance(node, dict) else node
