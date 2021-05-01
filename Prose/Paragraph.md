---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Paragraph.schema.yaml
---

# Paragraph

Paragraph

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from                     |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ---------------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../Prose/InlineContent.md) | The contents of the paragraph.      | [Paragraph](../Prose/Paragraph.md) |
| **type**    | [schema:type](https://schema.org/type)                      | 'Paragraph'                                         | The name of the type.               | [Entity](../Other/Entity.md)       |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../Other/Entity.md)       |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../Other/Entity.md)       |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Paragraph.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Paragraph.schema.json).
3.  This documentation was generated from [Paragraph.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Paragraph.schema.yaml).