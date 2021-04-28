---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Emphasis.schema.yaml
---

# Emphasis

Emphasised content.

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from               |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../prose/InlineContent.md) | The content that is marked.         | [Mark](../prose/Mark.md)     |
| **type**    | [schema:type](https://schema.org/type)                      | 'Emphasis'                                          | The name of the type.               | [Entity](../other/Entity.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../other/Entity.md) |

## Related

-   Parent: [Mark](../prose/Mark.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Emphasis.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Emphasis.schema.json).
3.  This documentation was generated from [Emphasis.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Emphasis.schema.yaml).
