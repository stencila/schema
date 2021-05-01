---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Brand.schema.yaml
---

# Brand

A brand used by an organization or person for labeling a product, product group, or similar. 

## Properties

| Name           | @id                                                      | Type                                                                                                                   | Description                                                         | Inherited from               |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------- |
| **name**       | [schema:name](https://schema.org/name)                   | string                                                                                                                 | The name of the item.                                               | [Thing](../Other/Thing.md)   |
| **type**       | [schema:type](https://schema.org/type)                   | 'Brand'                                                                                                                | The name of the type.                                               | [Entity](../Other/Entity.md) |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                                        | Alternate names (aliases) for the item.                             | [Thing](../Other/Thing.md)   |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](../Prose/BlockContent.md) _or_ Array of [InlineContent](../Prose/InlineContent.md) _or_ string | A description of the item. See note [1](#notes).                    | [Thing](../Other/Thing.md)   |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                                                 | The identifier for this item.                                       | [Entity](../Other/Entity.md) |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](../Other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [2](#notes). | [Thing](../Other/Thing.md)   |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](../Media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                 | [Thing](../Other/Thing.md)   |
| logo           | [schema:logo](https://schema.org/logo)                   | [ImageObject](../Media/ImageObject.md) _or_ Format 'uri'                                                               | A logo associated with the brand.                                   | [Brand](../Other/Brand.md)   |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                                                 | Metadata associated with this item.                                 | [Entity](../Other/Entity.md) |
| reviews        | [schema:review](https://schema.org/review)               | Array of string                                                                                                        | Reviews of the brand.                                               | [Brand](../Other/Brand.md)   |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                                           | The URL of the item.                                                | [Thing](../Other/Thing.md)   |

## Related

-   Parent: [Thing](../Other/Thing.md)
-   Descendants: None

## Notes

1.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
2.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
3.  Available as [JSON-LD](https://schema.stenci.la/Brand.jsonld).
4.  Available as [JSON Schema](https://schema.stenci.la/v1/Brand.schema.json).
5.  This documentation was generated from [Brand.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Brand.schema.yaml).
