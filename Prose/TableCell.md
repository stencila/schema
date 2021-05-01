---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/TableCell.schema.yaml
---

# TableCell

A cell within a \`Table\`. 

## Properties

| Name        | @id                                                           | Type                              | Description                                                           | Inherited from                     |
| ----------- | ------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld)   | Array of [Node](../Other/Node.md) | Contents of the table cell.                                           | [TableCell](../Prose/TableCell.md) |
| **type**    | [schema:type](https://schema.org/type)                        | 'TableCell'                       | The name of the type.                                                 | [Entity](../Other/Entity.md)       |
| cellType    | [stencila:cellType](https://schema.stenci.la/cellType.jsonld) | 'data', 'header'                  | Indicates whether the cell is a header or data. See note [4](#notes). | [TableCell](../Prose/TableCell.md) |
| colspan     | [stencila:colspan](https://schema.stenci.la/colspan.jsonld)   | integer                           | How many columns the cell extends.  See note [2](#notes).             | [TableCell](../Prose/TableCell.md) |
| id          | [schema:id](https://schema.org/id)                            | string                            | The identifier for this item.                                         | [Entity](../Other/Entity.md)       |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)         | object                            | Metadata associated with this item.                                   | [Entity](../Other/Entity.md)       |
| name        | [schema:name](https://schema.org/name)                        | string                            | The name of the cell. See note [1](#notes).                           | [TableCell](../Prose/TableCell.md) |
| rowspan     | [stencila:rowspan](https://schema.stenci.la/rowspan.jsonld)   | integer                           | How many columns the cell extends. See note [3](#notes).              | [TableCell](../Prose/TableCell.md) |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  **name** : Cell's have an implicit name derived from their position in the table e.g. `C4` for the cell in the third column and fourth row. However this name can be overridden with an explicit name, e.g. `rate`.
2.  **colspan** : Based on the HTML `colspan` attribute for [table cells](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).
3.  **rowspan** : Based on the HTML `rowspan` attribute for [table cells](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).
4.  **cellType** : When `header`, the cell is similar to the HTML [`<th>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)). When `data`, the cell is similar to the HTML [`<td>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)).
5.  Available as [JSON-LD](https://schema.stenci.la/TableCell.jsonld).
6.  Available as [JSON Schema](https://schema.stenci.la/v1/TableCell.schema.json).
7.  This documentation was generated from [TableCell.schema.yaml](https://github.com/stencila/schema/blob/master/schema/TableCell.schema.yaml).
