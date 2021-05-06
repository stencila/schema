---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Delete.schema.yaml
---

# Delete

Content that is marked for deletion

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

-   [JSON-LD](https://schema.stenci.la/Delete.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Delete.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Delete)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/delete.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Delete.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Delete.schema.yaml).
