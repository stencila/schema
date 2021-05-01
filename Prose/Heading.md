---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Heading.schema.yaml
---

# Heading

Heading

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from                 |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ------------------------------ |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../Prose/InlineContent.md) | Content of the heading.             | [Heading](../Prose/Heading.md) |
| **type**    | [schema:type](https://schema.org/type)                      | 'Heading'                                           | The name of the type.               | [Entity](../Other/Entity.md)   |
| depth       | [stencila:depth](https://schema.stenci.la/depth.jsonld)     | number                                              | The depth of the heading.           | [Heading](../Prose/Heading.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../Other/Entity.md)   |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../Other/Entity.md)   |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Heading.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Heading.schema.json).
3.  This documentation was generated from [Heading.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Heading.schema.yaml).
