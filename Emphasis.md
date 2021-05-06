---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Emphasis.schema.yaml
---

# Emphasis

Emphasised content.

## Properties

| Name        | @id                                                         | Type                                       | Description                         | Inherited from      |
| ----------- | ----------------------------------------------------------- | ------------------------------------------ | ----------------------------------- | ------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](InlineContent.md) | The content that is marked.         | [Mark](Mark.md)     |
| id          | [schema:id](https://schema.org/id)                          | string                                     | The identifier for this item.       | [Entity](Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                     | Metadata associated with this item. | [Entity](Entity.md) |

## Related

-   Parent: [Mark](Mark.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/Emphasis.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Emphasis.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Emphasis)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/emphasis.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Emphasis.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Emphasis.schema.yaml).
