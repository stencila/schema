---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/TableRow.schema.yaml
---

# TableRow

A row within a Table.

## Properties

| Name      | @id                                                         | Type                                        | Description                                                                          | Inherited from                   |
| --------- | ----------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------- |
| **cells** | [stencila:cells](https://schema.stenci.la/cells.jsonld)     | Array of [TableCell](../Prose/TableCell.md) | An array of cells in the row.                                                        | [TableRow](../Prose/TableRow.md) |
| **type**  | [schema:type](https://schema.org/type)                      | 'TableRow'                                  | The name of the type.                                                                | [Entity](../Other/Entity.md)     |
| id        | [schema:id](https://schema.org/id)                          | string                                      | The identifier for this item.                                                        | [Entity](../Other/Entity.md)     |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                      | Metadata associated with this item.                                                  | [Entity](../Other/Entity.md)     |
| rowType   | [stencila:rowType](https://schema.stenci.la/rowType.jsonld) | 'header', 'footer'                          | If present, indicates that all cells in this row should be treated as header cells.  | [TableRow](../Prose/TableRow.md) |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/TableRow.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/TableRow.schema.json).
3.  This documentation was generated from [TableRow.schema.yaml](https://github.com/stencila/schema/blob/master/schema/TableRow.schema.yaml).
