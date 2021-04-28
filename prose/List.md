---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/List.schema.yaml
---

# List

A list of items. 

## Properties

| Name      | @id                                                          | Type                                      | Description                         | Inherited from               |
| --------- | ------------------------------------------------------------ | ----------------------------------------- | ----------------------------------- | ---------------------------- |
| **items** | [schema:itemListElement](https://schema.org/itemListElement) | Array of [ListItem](../prose/ListItem.md) | The items in the list               | [List](../prose/List.md)     |
| **type**  | [schema:type](https://schema.org/type)                       | 'List'                                    | The name of the type.               | [Entity](../other/Entity.md) |
| id        | [schema:id](https://schema.org/id)                           | string                                    | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                                    | Metadata associated with this item. | [Entity](../other/Entity.md) |
| order     | [schema:itemListOrder](https://schema.org/itemListOrder)     | 'ascending', 'descending', 'unordered'    | Type of ordering.                   | [List](../prose/List.md)     |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/ItemList.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/List.schema.json).
3.  This documentation was generated from [List.schema.yaml](https://github.com/stencila/schema/blob/master/schema/List.schema.yaml).
