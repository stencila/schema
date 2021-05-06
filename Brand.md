---
category: Other
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Brand.schema.yaml
---

# Brand

A brand used by an organization or person for labeling a product, product group, or similar. 

This type is an extension of [schema:Brand](https://schema.org/Brand).

## Properties

| Name           | @id                                                      | Type                                                                                                 | Description                                                         | Inherited from      |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------- |
| **name**       | [schema:name](https://schema.org/name)                   | string                                                                                               | The name of the item.                                               | [Thing](Thing.md)   |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                      | Alternate names (aliases) for the item.                             | [Thing](Thing.md)   |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](BlockContent.md) _or_ Array of [InlineContent](InlineContent.md) _or_ string | A description of the item. See note [1](#notes).                    | [Thing](Thing.md)   |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                               | The identifier for this item.                                       | [Entity](Entity.md) |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](PropertyValue.md) _or_ string)                                             | Any kind of identifier for any kind of Thing. See note [2](#notes). | [Thing](Thing.md)   |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](ImageObject.md) _or_ Format 'uri')                                           | Images of the item.                                                 | [Thing](Thing.md)   |
| logo           | [schema:logo](https://schema.org/logo)                   | [ImageObject](ImageObject.md) _or_ Format 'uri'                                                      | A logo associated with the brand.                                   | [Brand](Brand.md)   |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                               | Metadata associated with this item.                                 | [Entity](Entity.md) |
| reviews        | [schema:review](https://schema.org/review)               | Array of string                                                                                      | Reviews of the brand.                                               | [Brand](Brand.md)   |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                         | The URL of the item.                                                | [Thing](Thing.md)   |

## Related

-   Parent: [Thing](Thing.md)
-   Descendants: None

## Notes

1.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
2.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).

## Available as

-   [JSON-LD](https://schema.stenci.la/Brand.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Brand.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Brand)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/brand.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Brand.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Brand.schema.yaml).
