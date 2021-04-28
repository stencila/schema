---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Include.schema.yaml
---

# Include

A directive to include content from an external source (e.g. file, URL) or content. 

## Properties

| Name       | @id                                                         | Type                                              | Description                                                                 | Inherited from                 |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------ |
| **source** | [stencila:source](https://schema.stenci.la/source.jsonld)   | string                                            | The source of the content, a URL or file path, or the content itself.       | [Include](../other/Include.md) |
| **type**   | [schema:type](https://schema.org/type)                      | 'Include'                                         | The name of the type.                                                       | [Entity](../other/Entity.md)   |
| content    | [stencila:content](https://schema.stenci.la/content.jsonld) | Array of [BlockContent](../prose/BlockContent.md) | The content to be included. See note [1](#notes).                           | [Include](../other/Include.md) |
| format     | [schema:encodingFormat](https://schema.org/encodingFormat)  | string                                            | Media type, typically expressed using a MIME format, of the source content. | [Include](../other/Include.md) |
| id         | [schema:id](https://schema.org/id)                          | string                                            | The identifier for this item.                                               | [Entity](../other/Entity.md)   |
| meta       | [stencila:meta](https://schema.stenci.la/meta.jsonld)       | object                                            | Metadata associated with this item.                                         | [Entity](../other/Entity.md)   |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  **content** : Currently assumes that included content will be block content. This presumes that there will be limited instance where a user would want to use an `Include` node to transclude inline content.
2.  Available as [JSON-LD](https://schema.stenci.la/Include.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Include.schema.json).
4.  This documentation was generated from [Include.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Include.schema.yaml).
