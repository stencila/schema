---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/List.schema.yaml
---

# List

A list of items. 

This type is an extension of [schema:ItemList](https://schema.org/ItemList).

## Properties

| Name      | @id                                                          | Type                                   | Description                         | Inherited from      |
| --------- | ------------------------------------------------------------ | -------------------------------------- | ----------------------------------- | ------------------- |
| **items** | [schema:itemListElement](https://schema.org/itemListElement) | Array of [ListItem](ListItem.md)       | The items in the list               | [List](List.md)     |
| id        | [schema:id](https://schema.org/id)                           | string                                 | The identifier for this item.       | [Entity](Entity.md) |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                                 | Metadata associated with this item. | [Entity](Entity.md) |
| order     | [schema:itemListOrder](https://schema.org/itemListOrder)     | 'ascending', 'descending', 'unordered' | Type of ordering.                   | [List](List.md)     |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/ItemList.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/List.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.ItemList)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/itemlist.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [List.schema.yaml](https://github.com/stencila/schema/blob/master/schema/List.schema.yaml).
