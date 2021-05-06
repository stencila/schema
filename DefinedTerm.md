---
category: Other
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/DefinedTerm.schema.yaml
---

# DefinedTerm

A word, name, acronym, phrase, etc. with a formal definition.

This type is an extension of [schema:DefinedTerm](https://schema.org/DefinedTerm).

## Properties

| Name           | @id                                                      | Type                                                                                                 | Description                                                         | Inherited from                |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------- |
| **name**       | [schema:name](https://schema.org/name)                   | string                                                                                               | The name of the item.                                               | [Thing](Thing.md)             |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                      | Alternate names (aliases) for the item.                             | [Thing](Thing.md)             |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](BlockContent.md) _or_ Array of [InlineContent](InlineContent.md) _or_ string | A description of the item. See note [2](#notes).                    | [Thing](Thing.md)             |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                               | The identifier for this item.                                       | [Entity](Entity.md)           |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](PropertyValue.md) _or_ string)                                             | Any kind of identifier for any kind of Thing. See note [3](#notes). | [Thing](Thing.md)             |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](ImageObject.md) _or_ Format 'uri')                                           | Images of the item.                                                 | [Thing](Thing.md)             |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                               | Metadata associated with this item.                                 | [Entity](Entity.md)           |
| termCode       | [schema:termCode](https://schema.org/termCode)           | string                                                                                               | A code that identifies this DefinedTerm within a DefinedTermSet     | [DefinedTerm](DefinedTerm.md) |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                         | The URL of the item.                                                | [Thing](Thing.md)             |

## Related

-   Parent: [Thing](Thing.md)
-   Descendants: None

## Notes

1.  Often used in the context of category or subject classification,  glossaries or dictionaries, product or creative work types, etc. Use the `name` property for the term being defined, use `termCode`. If the term has an alpha-numeric code allocated, use description to provide the definition of the term.
2.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
3.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).

## Available as

-   [JSON-LD](https://schema.stenci.la/DefinedTerm.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/DefinedTerm.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.DefinedTerm)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/definedterm.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [DefinedTerm.schema.yaml](https://github.com/stencila/schema/blob/master/schema/DefinedTerm.schema.yaml).
