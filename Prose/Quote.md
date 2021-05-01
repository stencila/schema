---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Quote.schema.yaml
---

# Quote

Inline, quoted content.

## Properties

| Name        | @id                                                         | Type                                                | Description                         | Inherited from               |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [InlineContent](../Prose/InlineContent.md) | The content that is marked.         | [Mark](../Prose/Mark.md)     |
| **type**    | [schema:type](https://schema.org/type)                      | 'Quote'                                             | The name of the type.               | [Entity](../Other/Entity.md) |
| cite        | [stencila:cite](https://schema.stenci.la/cite.jsonld)       | [Cite](../Prose/Cite.md) _or_ Format 'uri'          | The source of the quote.            | [Quote](../Prose/Quote.md)   |
| id          | [schema:id](https://schema.org/id)                          | string                                              | The identifier for this item.       | [Entity](../Other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                              | Metadata associated with this item. | [Entity](../Other/Entity.md) |

## Related

-   Parent: [Mark](../Prose/Mark.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/Quote.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/Quote.schema.json).
3.  This documentation was generated from [Quote.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Quote.schema.yaml).
