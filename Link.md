---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Link.schema.yaml
---

# Link

A hyperlink to other pages, sections within the same document, resources, or any URL.

## Properties

| Name        | @id                                                               | Type                                       | Description                                                                            | Inherited from      |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld)       | Array of [InlineContent](InlineContent.md) | The textual content of the link.                                                       | [Link](Link.md)     |
| **target**  | [stencila:target](https://schema.stenci.la/target.jsonld)         | Format 'uri-reference'                     | The target of the link.                                                                | [Link](Link.md)     |
| exportFrom  | [stencila:exportFrom](https://schema.stenci.la/exportFrom.jsonld) | string                                     | A compilation directive giving the name of the variable to export to the link target.  | [Link](Link.md)     |
| id          | [schema:id](https://schema.org/id)                                | string                                     | The identifier for this item.                                                          | [Entity](Entity.md) |
| importTo    | [stencila:importTo](https://schema.stenci.la/importTo.jsonld)     | string                                     | A compilation directive giving the name of the variable to import the link target as.  | [Link](Link.md)     |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)             | object                                     | Metadata associated with this item.                                                    | [Entity](Entity.md) |
| relation    | [schema:linkRelationship](https://schema.org/linkRelationship)    | string                                     | The relation between the target and the current thing.                                 | [Link](Link.md)     |
| title       | [schema:headline](https://schema.org/headline)                    | string                                     | A title for the link. See note [1](#notes).                                            | [Link](Link.md)     |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Notes

1.  **title** : This property is analogous to the HTML `title` global attribute which represents ["advisory information related to the element"](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)

## Available as

-   [JSON-LD](https://schema.stenci.la/Link.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Link.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Link)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/link.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Link.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Link.schema.yaml).
