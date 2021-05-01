---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/PropertyValue.schema.yaml
---

# PropertyValue

A property-value pair.

## Properties

| Name           | @id                                                      | Type                                                                                                                   | Description                                                                    | Inherited from                             |
| -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| **type**       | [schema:type](https://schema.org/type)                   | 'PropertyValue'                                                                                                        | The name of the type.                                                          | [Entity](../Other/Entity.md)               |
| **value**      | [schema:value](https://schema.org/value)                 | boolean _or_ integer _or_ number _or_ string                                                                           | The value of the property. See note [3](#notes).                               | [PropertyValue](../Other/PropertyValue.md) |
| alternateNames | [schema:alternateName](https://schema.org/alternateName) | Array of string                                                                                                        | Alternate names (aliases) for the item.                                        | [Thing](../Other/Thing.md)                 |
| description    | [schema:description](https://schema.org/description)     | Array of [BlockContent](../Prose/BlockContent.md) _or_ Array of [InlineContent](../Prose/InlineContent.md) _or_ string | A description of the item. See note [2](#notes).                               | [Thing](../Other/Thing.md)                 |
| id             | [schema:id](https://schema.org/id)                       | string                                                                                                                 | The identifier for this item.                                                  | [Entity](../Other/Entity.md)               |
| identifiers    | [schema:identifier](https://schema.org/identifier)       | Array of ([PropertyValue](../Other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [4](#notes).            | [Thing](../Other/Thing.md)                 |
| images         | [schema:image](https://schema.org/image)                 | Array of ([ImageObject](../Media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                            | [Thing](../Other/Thing.md)                 |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)    | object                                                                                                                 | Metadata associated with this item.                                            | [Entity](../Other/Entity.md)               |
| name           | [schema:name](https://schema.org/name)                   | string                                                                                                                 | The name of the item.                                                          | [Thing](../Other/Thing.md)                 |
| propertyID     | [schema:propertyID](https://schema.org/propertyID)       | string                                                                                                                 | A commonly used identifier for the characteristic represented by the property. | [PropertyValue](../Other/PropertyValue.md) |
| url            | [schema:url](https://schema.org/url)                     | Format 'uri'                                                                                                           | The URL of the item.                                                           | [Thing](../Other/Thing.md)                 |

## Related

-   Parent: [Thing](../Other/Thing.md)
-   Descendants: None

## Notes

1.  Always use specific properties when they exist and you can populate them. Using `PropertyValue` as a substitute will typically not convey as much semantic information as using the specific property.
2.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
3.  **value** : This follows the expected types of <https://schema.org/value> except for `StructuredValue`, which at the time of writing was not implemented in this schema.
4.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
5.  Available as [JSON-LD](https://schema.stenci.la/PropertyValue.jsonld).
6.  Available as [JSON Schema](https://schema.stenci.la/v1/PropertyValue.schema.json).
7.  This documentation was generated from [PropertyValue.schema.yaml](https://github.com/stencila/schema/blob/master/schema/PropertyValue.schema.yaml).
