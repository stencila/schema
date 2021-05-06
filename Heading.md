---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Heading.schema.yaml
---

# Heading

Heading

## Properties

| Name        | @id                                                         | Type                                       | Description                         | Inherited from        |
| ----------- | ----------------------------------------------------------- | ------------------------------------------ | ----------------------------------- | --------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](InlineContent.md) | Content of the heading.             | [Heading](Heading.md) |
| depth       | [stencila:depth](https://schema.stenci.la/depth.jsonld)     | number                                     | The depth of the heading.           | [Heading](Heading.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                     | The identifier for this item.       | [Entity](Entity.md)   |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                     | Metadata associated with this item. | [Entity](Entity.md)   |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/Heading.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Heading.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Heading)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/heading.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Heading.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Heading.schema.yaml).
