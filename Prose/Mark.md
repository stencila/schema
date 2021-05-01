---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Mark.schema.yaml
---

# Mark

A base class for nodes that mark some other inline content in some way (e.g. as being emphasised, or quoted). 

## Properties

| Name        | @id                                                         | Type                                                                                                | Description                         | Inherited from               |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../Prose/InlineContent.md)                                                 | The content that is marked.         | [Mark](../Prose/Mark.md)     |
| **type**    | [schema:type](https://schema.org/type)                      | 'Mark', 'Delete', 'Emphasis', 'NontextualAnnotation', 'Quote', 'Strong', 'Subscript', 'Superscript' | The name of the type.               | [Entity](../Other/Entity.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                                                                              | The identifier for this item.       | [Entity](../Other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                                                                              | Metadata associated with this item. | [Entity](../Other/Entity.md) |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: [Delete](../Prose/Delete.md), [Emphasis](../Prose/Emphasis.md), [NontextualAnnotation](../Prose/NontextualAnnotation.md), [Quote](../Prose/Quote.md), [Strong](../Prose/Strong.md), [Subscript](../Prose/Subscript.md), [Superscript](../Prose/Superscript.md)

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Mark.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Mark.schema.json).
3.  This documentation was generated from [Mark.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Mark.schema.yaml).