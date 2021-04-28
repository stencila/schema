---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/PostalAddress.schema.yaml
---

# PostalAddress

A physical mailing address.

## Properties

| Name                | @id                                                                  | Type                                                                                                                   | Description                                                                                                     | Inherited from                             |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **type**            | [schema:type](https://schema.org/type)                               | 'PostalAddress'                                                                                                        | The name of the type.                                                                                           | [Entity](../other/Entity.md)               |
| addressCountry      | [schema:addressCountry](https://schema.org/addressCountry)           | string                                                                                                                 | The country. See note [1](#notes).                                                                              | [PostalAddress](../other/PostalAddress.md) |
| addressLocality     | [schema:addressLocality](https://schema.org/addressLocality)         | string                                                                                                                 | The locality in which the street address is, and which is in the region. See note [2](#notes).                  | [PostalAddress](../other/PostalAddress.md) |
| addressRegion       | [schema:addressRegion](https://schema.org/addressRegion)             | string                                                                                                                 | The region in which the locality is, and which is in the country. See note [3](#notes).                         | [PostalAddress](../other/PostalAddress.md) |
| alternateNames      | [schema:alternateName](https://schema.org/alternateName)             | Array of string                                                                                                        | Alternate names (aliases) for the item.                                                                         | [Thing](../other/Thing.md)                 |
| availableLanguages  | [schema:availableLanguage](https://schema.org/availableLanguage)     | Array of string                                                                                                        | Languages (human not programming) in which it is possible to communicate with the organization/department etc.  | [ContactPoint](../other/ContactPoint.md)   |
| description         | [schema:description](https://schema.org/description)                 | Array of [BlockContent](../prose/BlockContent.md) _or_ Array of [InlineContent](../prose/InlineContent.md) _or_ string | A description of the item. See note [6](#notes).                                                                | [Thing](../other/Thing.md)                 |
| emails              | [schema:email](https://schema.org/email)                             | Array of Format 'email'                                                                                                | Email address for correspondence.                                                                               | [ContactPoint](../other/ContactPoint.md)   |
| id                  | [schema:id](https://schema.org/id)                                   | string                                                                                                                 | The identifier for this item.                                                                                   | [Entity](../other/Entity.md)               |
| identifiers         | [schema:identifier](https://schema.org/identifier)                   | Array of ([PropertyValue](../other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [7](#notes).                                             | [Thing](../other/Thing.md)                 |
| images              | [schema:image](https://schema.org/image)                             | Array of ([ImageObject](../media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                                                             | [Thing](../other/Thing.md)                 |
| meta                | [stencila:meta](https://schema.stenci.la/meta.jsonld)                | object                                                                                                                 | Metadata associated with this item.                                                                             | [Entity](../other/Entity.md)               |
| name                | [schema:name](https://schema.org/name)                               | string                                                                                                                 | The name of the item.                                                                                           | [Thing](../other/Thing.md)                 |
| postOfficeBoxNumber | [schema:postOfficeBoxNumber](https://schema.org/postOfficeBoxNumber) | string                                                                                                                 | The post office box number.                                                                                     | [PostalAddress](../other/PostalAddress.md) |
| postalCode          | [schema:postalCode](https://schema.org/postalCode)                   | string                                                                                                                 | The postal code. See note [4](#notes).                                                                          | [PostalAddress](../other/PostalAddress.md) |
| streetAddress       | [schema:streetAddress](https://schema.org/streetAddress)             | string                                                                                                                 | The street address. See note [5](#notes).                                                                       | [PostalAddress](../other/PostalAddress.md) |
| telephoneNumbers    | [schema:telephone](https://schema.org/telephone)                     | Array of string                                                                                                        | Telephone numbers for the contact point.                                                                        | [ContactPoint](../other/ContactPoint.md)   |
| url                 | [schema:url](https://schema.org/url)                                 | Format 'uri'                                                                                                           | The URL of the item.                                                                                            | [Thing](../other/Thing.md)                 |

## Related

-   Parent: [ContactPoint](../other/ContactPoint.md)
-   Descendants: None

## Notes

1.  **addressCountry** : For example, United Kingdom. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
2.  **addressLocality** : For example, London.
3.  **addressRegion** : For example, California or another appropriate first-level Administrative division
4.  **postalCode** : For example, 94043.
5.  **streetAddress** : For example, 10 Downing Street.
6.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
7.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
8.  Available as [JSON-LD](https://schema.stenci.la/PostalAddress.jsonld).
9.  Available as [JSON Schema](https://schema.stenci.la/v1/PostalAddress.schema.json).
10. This documentation was generated from [PostalAddress.schema.yaml](https://github.com/stencila/schema/blob/master/schema/PostalAddress.schema.yaml).
