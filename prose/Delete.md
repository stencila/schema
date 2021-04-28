---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Delete.schema.yaml
---

# Delete

Content that is marked for deletion

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from               |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../prose/InlineContent.md) | The content that is marked.         | [Mark](../prose/Mark.md)     |
| **type**    | [schema:type](https://schema.org/type)                      | 'Delete'                                            | The name of the type.               | [Entity](../other/Entity.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../other/Entity.md) |

## Related

-   Parent: [Mark](../prose/Mark.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Delete.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Delete.schema.json).
3.  This documentation was generated from [Delete.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Delete.schema.yaml).
