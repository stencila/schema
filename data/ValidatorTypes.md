---
custom_edit_url: https://github.com/stencila/schema
---

# ValidatorTypes

All type schemas that are derived from Validator

## Members

| @id                                                                             | Type                                              | Description                                                            |
| ------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| [stencila:Validator](https://schema.stenci.la/Validator.jsonld)                 | [Validator](../data/Validator.md)                 | A base for all validator types.                                        |
| [stencila:ArrayValidator](https://schema.stenci.la/ArrayValidator.jsonld)       | [ArrayValidator](../data/ArrayValidator.md)       | A validator specifying constraints on an array node.                   |
| [stencila:BooleanValidator](https://schema.stenci.la/BooleanValidator.jsonld)   | [BooleanValidator](../data/BooleanValidator.md)   | A schema specifying that a node must be a boolean value.               |
| [stencila:ConstantValidator](https://schema.stenci.la/ConstantValidator.jsonld) | [ConstantValidator](../data/ConstantValidator.md) | A validator specifying a constant value that a node must have.         |
| [stencila:EnumValidator](https://schema.stenci.la/EnumValidator.jsonld)         | [EnumValidator](../data/EnumValidator.md)         | A schema specifying that a node must be one of several values.         |
| [stencila:IntegerValidator](https://schema.stenci.la/IntegerValidator.jsonld)   | [IntegerValidator](../data/IntegerValidator.md)   | A validator specifying the constraints on an integer node.             |
| [stencila:NumberValidator](https://schema.stenci.la/NumberValidator.jsonld)     | [NumberValidator](../data/NumberValidator.md)     | A validator specifying the constraints on a numeric node.              |
| [stencila:StringValidator](https://schema.stenci.la/StringValidator.jsonld)     | [StringValidator](../data/StringValidator.md)     | A schema specifying constraints on a string node.                      |
| [stencila:TupleValidator](https://schema.stenci.la/TupleValidator.jsonld)       | [TupleValidator](../data/TupleValidator.md)       | A validator specifying constraints on an array of heterogeneous items. |

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/undefined.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/ValidatorTypes.schema.json).
