---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/DefinedTerm.schema.yaml
---

# DefinedTerm

A word, name, acronym, phrase, etc. with a formal definition.

## Properties

| Name           | @id                                                      | Type                                                                                                                   | Description                                                         | Inherited from                         |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| **name**       | [schema:name](https://schema.org/name)                   | string                                                                                                                 | The name of the item.                                               | [Thing](../Other/Thing.md)             |
| **type**       | [schema:type](https://schema.org/type)                   | 'DefinedTerm'                                                                                                          | The name of the type.                                               | [Entity](../Other/Entity.md)           |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                                        | Alternate names (aliases) for the item.                             | [Thing](../Other/Thing.md)             |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](../Prose/BlockContent.md) _or_ Array of [InlineContent](../Prose/InlineContent.md) _or_ string | A description of the item. See note [2](#notes).                    | [Thing](../Other/Thing.md)             |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                                                 | The identifier for this item.                                       | [Entity](../Other/Entity.md)           |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](../Other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [3](#notes). | [Thing](../Other/Thing.md)             |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](../Media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                 | [Thing](../Other/Thing.md)             |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                                                 | Metadata associated with this item.                                 | [Entity](../Other/Entity.md)           |
| termCode       | [schema:termCode](https://schema.org/termCode)           | string                                                                                                                 | A code that identifies this DefinedTerm within a DefinedTermSet     | [DefinedTerm](../Other/DefinedTerm.md) |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                                           | The URL of the item.                                                | [Thing](../Other/Thing.md)             |

## Related

-   Parent: [Thing](../Other/Thing.md)
-   Descendants: None

## Notes

1.  Often used in the context of category or subject classification,  glossaries or dictionaries, product or creative work types, etc. Use the `name` property for the term being defined, use `termCode`. If the term has an alpha-numeric code allocated, use description to provide the definition of the term.
2.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
3.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
4.  Available as [JSON-LD](https://schema.stenci.la/DefinedTerm.jsonld).
5.  Available as [JSON Schema](https://schema.stenci.la/v1/DefinedTerm.schema.json).
6.  This documentation was generated from [DefinedTerm.schema.yaml](https://github.com/stencila/schema/blob/master/schema/DefinedTerm.schema.yaml).
