---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/QuoteBlock.schema.yaml
---

# QuoteBlock

A section quoted from somewhere else. 

## Properties

| Name        | @id                                                         | Type                                              | Description                         | Inherited from                       |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------- | ----------------------------------- | ------------------------------------ |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [BlockContent](../prose/BlockContent.md) | The content of the quote.           | [QuoteBlock](../prose/QuoteBlock.md) |
| **type**    | [schema:type](https://schema.org/type)                      | 'QuoteBlock'                                      | The name of the type.               | [Entity](../other/Entity.md)         |
| cite        | [stencila:cite](https://schema.stenci.la/cite.jsonld)       | [Cite](../prose/Cite.md) _or_ Format 'uri'        | The source of the quote.            | [QuoteBlock](../prose/QuoteBlock.md) |
| id          | [schema:id](https://schema.org/id)                          | string                                            | The identifier for this item.       | [Entity](../other/Entity.md)         |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                            | Metadata associated with this item. | [Entity](../other/Entity.md)         |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/QuoteBlock.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/QuoteBlock.schema.json).
3.  This documentation was generated from [QuoteBlock.schema.yaml](https://github.com/stencila/schema/blob/master/schema/QuoteBlock.schema.yaml).
