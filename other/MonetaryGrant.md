---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/MonetaryGrant.schema.yaml
---

# MonetaryGrant

A monetary grant.

## Properties

| Name           | @id                                                      | Type                                                                                                                   | Description                                                                                                                     | Inherited from                             |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **type**       | [schema:type](https://schema.org/type)                   | 'MonetaryGrant'                                                                                                        | The name of the type.                                                                                                           | [Entity](../other/Entity.md)               |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                                        | Alternate names (aliases) for the item.                                                                                         | [Thing](../other/Thing.md)                 |
| amounts        | [schema:amount](https://schema.org/amount)               | number                                                                                                                 | The amount of money. See note [3](#notes).                                                                                      | [MonetaryGrant](../other/MonetaryGrant.md) |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](../prose/BlockContent.md) _or_ Array of [InlineContent](../prose/InlineContent.md) _or_ string | A description of the item. See note [4](#notes).                                                                                | [Thing](../other/Thing.md)                 |
| fundedItems    | [schema:fundedItem](https://schema.org/fundedItem)       | Array of [Thing](../other/Thing.md)                                                                                    | Indicates an item funded or sponsored through a Grant. See note [1](#notes).                                                    | [Grant](../other/Grant.md)                 |
| funders        | [schema:funder](https://schema.org/funder)               | Array of ([Person](../other/Person.md) _or_ [Organization](../other/Organization.md))                                  | A person or organization that supports (sponsors) something through some kind of financial contribution.  See note [5](#notes). | [MonetaryGrant](../other/MonetaryGrant.md) |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                                                 | The identifier for this item.                                                                                                   | [Entity](../other/Entity.md)               |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](../other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [6](#notes).                                                             | [Thing](../other/Thing.md)                 |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](../media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                                                                             | [Thing](../other/Thing.md)                 |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                                                 | Metadata associated with this item.                                                                                             | [Entity](../other/Entity.md)               |
| name           | [schema:name](https://schema.org/name)                   | string                                                                                                                 | The name of the item.                                                                                                           | [Thing](../other/Thing.md)                 |
| sponsors       | [schema:sponsor](https://schema.org/sponsor)             | Array of ([Person](../other/Person.md) _or_ [Organization](../other/Organization.md))                                  | A person or organization that supports a thing through a pledge, promise, or financial contribution. See note [2](#notes).      | [Grant](../other/Grant.md)                 |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                                           | The URL of the item.                                                                                                            | [Thing](../other/Thing.md)                 |

## Related

-   Parent: [Grant](../other/Grant.md)
-   Descendants: None

## Notes

1.  **fundedItems** : An array because a grant may have more than one funded item.
2.  **sponsors** : An array because a grant may have more than one sponsor.
3.  **amounts** : This property is an array, to allow for multiple amounts, possibly, but not necessarily, from multiple `funders`.
4.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
5.  **funders** : Often a `MonetaryGrant` will have a single funder. This property is an array to be consistent with `funders` on other types e.g. `CreativeWork`.
6.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
7.  Available as [JSON-LD](https://schema.stenci.la/MonetaryGrant.jsonld).
8.  Available as [JSON Schema](https://schema.stenci.la/v1/MonetaryGrant.schema.json).
9.  This documentation was generated from [MonetaryGrant.schema.yaml](https://github.com/stencila/schema/blob/master/schema/MonetaryGrant.schema.yaml).
