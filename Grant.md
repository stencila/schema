---
category: Other
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Grant.schema.yaml
---

# Grant

A grant, typically financial or otherwise quantifiable, of resources.

This type is an extension of [schema:Grant](https://schema.org/Grant).

## Properties

| Name           | @id                                                      | Type                                                                                                 | Description                                                                                                                | Inherited from      |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                      | Alternate names (aliases) for the item.                                                                                    | [Thing](Thing.md)   |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](BlockContent.md) _or_ Array of [InlineContent](InlineContent.md) _or_ string | A description of the item. See note [3](#notes).                                                                           | [Thing](Thing.md)   |
| fundedItems    | [schema:fundedItem](https://schema.org/fundedItem)       | Array of [Thing](Thing.md)                                                                           | Indicates an item funded or sponsored through a Grant. See note [1](#notes).                                               | [Grant](Grant.md)   |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                               | The identifier for this item.                                                                                              | [Entity](Entity.md) |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](PropertyValue.md) _or_ string)                                             | Any kind of identifier for any kind of Thing. See note [4](#notes).                                                        | [Thing](Thing.md)   |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](ImageObject.md) _or_ Format 'uri')                                           | Images of the item.                                                                                                        | [Thing](Thing.md)   |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                               | Metadata associated with this item.                                                                                        | [Entity](Entity.md) |
| name           | [schema:name](https://schema.org/name)                   | string                                                                                               | The name of the item.                                                                                                      | [Thing](Thing.md)   |
| sponsors       | [schema:sponsor](https://schema.org/sponsor)             | Array of ([Person](Person.md) _or_ [Organization](Organization.md))                                  | A person or organization that supports a thing through a pledge, promise, or financial contribution. See note [2](#notes). | [Grant](Grant.md)   |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                         | The URL of the item.                                                                                                       | [Thing](Thing.md)   |

## Related

-   Parent: [Thing](Thing.md)
-   Descendants: [MonetaryGrant](MonetaryGrant.md)

## Notes

1.  **fundedItems** : An array because a grant may have more than one funded item.
2.  **sponsors** : An array because a grant may have more than one sponsor.
3.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
4.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).

## Available as

-   [JSON-LD](https://schema.stenci.la/Grant.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Grant.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Grant)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/grant.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Grant.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Grant.schema.yaml).
