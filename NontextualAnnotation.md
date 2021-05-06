---
category: Prose
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/NontextualAnnotation.schema.yaml
---

# NontextualAnnotation

Inline text that has a non-textual annotation.

## Properties

| Name        | @id                                                         | Type                                       | Description                         | Inherited from      |
| ----------- | ----------------------------------------------------------- | ------------------------------------------ | ----------------------------------- | ------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](InlineContent.md) | The content that is marked.         | [Mark](Mark.md)     |
| id          | [schema:id](https://schema.org/id)                          | string                                     | The identifier for this item.       | [Entity](Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                     | Metadata associated with this item. | [Entity](Entity.md) |

## Related

-   Parent: [Mark](Mark.md)
-   Descendants: None

## Notes

1.  Use cases include annotating spelling errors, denoting proper names in Chinese text, representing underline text, and other forms of annotation. See

## Available as

-   [JSON-LD](https://schema.stenci.la/NontextualAnnotation.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/NontextualAnnotation.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.NontextualAnnotation)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/nontextualannotation.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [NontextualAnnotation.schema.yaml](https://github.com/stencila/schema/blob/master/schema/NontextualAnnotation.schema.yaml).
