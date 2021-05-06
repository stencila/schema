---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/TableRow.schema.yaml
---

# TableRow

A row within a Table.

## Properties

| Name      | @id                                                         | Type                               | Description                                                                          | Inherited from          |
| --------- | ----------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| **cells** | [stencila:cells](https://schema.stenci.la/cells.jsonld)     | Array of [TableCell](TableCell.md) | An array of cells in the row.                                                        | [TableRow](TableRow.md) |
| id        | [schema:id](https://schema.org/id)                          | string                             | The identifier for this item.                                                        | [Entity](Entity.md)     |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                             | Metadata associated with this item.                                                  | [Entity](Entity.md)     |
| rowType   | [stencila:rowType](https://schema.stenci.la/rowType.jsonld) | 'header', 'footer'                 | If present, indicates that all cells in this row should be treated as header cells.  | [TableRow](TableRow.md) |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/TableRow.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/TableRow.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.TableRow)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/tablerow.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [TableRow.schema.yaml](https://github.com/stencila/schema/blob/master/schema/TableRow.schema.yaml).
