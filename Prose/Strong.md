---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Strong.schema.yaml
---

# Strong

Strongly emphasised content.

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from               |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../Prose/InlineContent.md) | The content that is marked.         | [Mark](../Prose/Mark.md)     |
| **type**    | [schema:type](https://schema.org/type)                      | 'Strong'                                            | The name of the type.               | [Entity](../Other/Entity.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../Other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../Other/Entity.md) |

## Related

-   Parent: [Mark](../Prose/Mark.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Strong.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Strong.schema.json).
3.  This documentation was generated from [Strong.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Strong.schema.yaml).
