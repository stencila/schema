---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/QuoteBlock.schema.yaml
---

# QuoteBlock

A section quoted from somewhere else. 

## Properties

| Name        | @id                                                         | Type                                     | Description                         | Inherited from              |
| ----------- | ----------------------------------------------------------- | ---------------------------------------- | ----------------------------------- | --------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [BlockContent](BlockContent.md) | The content of the quote.           | [QuoteBlock](QuoteBlock.md) |
| cite        | [stencila:cite](https://schema.stenci.la/cite.jsonld)       | [Cite](Cite.md) _or_ Format 'uri'        | The source of the quote.            | [QuoteBlock](QuoteBlock.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                   | The identifier for this item.       | [Entity](Entity.md)         |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                   | Metadata associated with this item. | [Entity](Entity.md)         |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/QuoteBlock.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/QuoteBlock.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.QuoteBlock)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/quoteblock.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [QuoteBlock.schema.yaml](https://github.com/stencila/schema/blob/master/schema/QuoteBlock.schema.yaml).
