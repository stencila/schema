---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/ContactPoint.schema.yaml
---

# ContactPoint

A contact point, for example, a R&D department.

## Properties

| Name               | @id                                                              | Type                                                                                                                   | Description                                                                                                     | Inherited from                           |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **type**           | [schema:type](https://schema.org/type)                           | 'ContactPoint', 'PostalAddress'                                                                                        | The name of the type.                                                                                           | [Entity](../other/Entity.md)             |
| alternateNames     | [schema:alternateName](https://schema.org/alternateName)         | Array of string                                                                                                        | Alternate names (aliases) for the item.                                                                         | [Thing](../other/Thing.md)               |
| availableLanguages | [schema:availableLanguage](https://schema.org/availableLanguage) | Array of string                                                                                                        | Languages (human not programming) in which it is possible to communicate with the organization/department etc.  | [ContactPoint](../other/ContactPoint.md) |
| description        | [schema:description](https://schema.org/description)             | Array of [BlockContent](../prose/BlockContent.md) _or_ Array of [InlineContent](../prose/InlineContent.md) _or_ string | A description of the item. See note [1](#notes).                                                                | [Thing](../other/Thing.md)               |
| emails             | [schema:email](https://schema.org/email)                         | Array of Format 'email'                                                                                                | Email address for correspondence.                                                                               | [ContactPoint](../other/ContactPoint.md) |
| id                 | [schema:id](https://schema.org/id)                               | string                                                                                                                 | The identifier for this item.                                                                                   | [Entity](../other/Entity.md)             |
| identifiers        | [schema:identifier](https://schema.org/identifier)               | Array of ([PropertyValue](../other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [2](#notes).                                             | [Thing](../other/Thing.md)               |
| images             | [schema:image](https://schema.org/image)                         | Array of ([ImageObject](../media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                                                             | [Thing](../other/Thing.md)               |
| meta               | [stencila:meta](https://schema.stenci.la/meta.jsonld)            | object                                                                                                                 | Metadata associated with this item.                                                                             | [Entity](../other/Entity.md)             |
| name               | [schema:name](https://schema.org/name)                           | string                                                                                                                 | The name of the item.                                                                                           | [Thing](../other/Thing.md)               |
| telephoneNumbers   | [schema:telephone](https://schema.org/telephone)                 | Array of string                                                                                                        | Telephone numbers for the contact point.                                                                        | [ContactPoint](../other/ContactPoint.md) |
| url                | [schema:url](https://schema.org/url)                             | Format 'uri'                                                                                                           | The URL of the item.                                                                                            | [Thing](../other/Thing.md)               |

## Related

-   Parent: [Thing](../other/Thing.md)
-   Descendants: [PostalAddress](../other/PostalAddress.md)

## Notes

1.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
2.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
3.  Available as [JSON-LD](https://schema.stenci.la/ContactPoint.jsonld).
4.  Available as [JSON Schema](https://schema.stenci.la/v1/ContactPoint.schema.json).
5.  This documentation was generated from [ContactPoint.schema.yaml](https://github.com/stencila/schema/blob/master/schema/ContactPoint.schema.yaml).
