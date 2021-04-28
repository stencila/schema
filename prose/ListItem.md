---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/ListItem.schema.yaml
---

# ListItem

A single item in a list.

## Properties

| Name           | @id                                                             | Type                                                                                                                   | Description                                                         | Inherited from                   |
| -------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------- |
| **type**       | [schema:type](https://schema.org/type)                          | 'ListItem'                                                                                                             | The name of the type.                                               | [Entity](../other/Entity.md)     |
| alternateNames | [schema:alternateName](https://schema.org/alternateName)        | Array of string                                                                                                        | Alternate names (aliases) for the item.                             | [Thing](../other/Thing.md)       |
| content        | [stencila:content](https://schema.stenci.la/content.jsonld)     | Array of [Node](../other/Node.md)                                                                                      | The content of the list item. See note [2](#notes).                 | [ListItem](../prose/ListItem.md) |
| description    | [schema:description](https://schema.org/description)            | Array of [BlockContent](../prose/BlockContent.md) _or_ Array of [InlineContent](../prose/InlineContent.md) _or_ string | A description of the item. See note [1](#notes).                    | [Thing](../other/Thing.md)       |
| id             | [schema:id](https://schema.org/id)                              | string                                                                                                                 | The identifier for this item.                                       | [Entity](../other/Entity.md)     |
| identifiers    | [schema:identifier](https://schema.org/identifier)              | Array of ([PropertyValue](../other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [4](#notes). | [Thing](../other/Thing.md)       |
| images         | [schema:image](https://schema.org/image)                        | Array of ([ImageObject](../media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                 | [Thing](../other/Thing.md)       |
| isChecked      | [stencila:isChecked](https://schema.stenci.la/isChecked.jsonld) | boolean                                                                                                                | A flag to indicate if this list item is checked.                    | [ListItem](../prose/ListItem.md) |
| item           | [schema:item](https://schema.org/item)                          | [Node](../other/Node.md)                                                                                               | The item represented by this list item. See note [3](#notes).       | [ListItem](../prose/ListItem.md) |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)           | object                                                                                                                 | Metadata associated with this item.                                 | [Entity](../other/Entity.md)     |
| name           | [schema:name](https://schema.org/name)                          | string                                                                                                                 | The name of the item.                                               | [Thing](../other/Thing.md)       |
| position       | [schema:position](https://schema.org/position)                  | number                                                                                                                 | The position of the item in a series or sequence of items.          | [ListItem](../prose/ListItem.md) |
| url            | [schema:url](https://schema.org/url)                            | Format 'uri'                                                                                                           | The URL of the item.                                                | [Thing](../other/Thing.md)       |

## Related

-   Parent: [Thing](../other/Thing.md)
-   Descendants: None

## Notes

1.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
2.  **content** : Use either `content` or `item`, not both.
3.  **item** : Use either `item` or `content`, not both.
4.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
5.  Available as [JSON-LD](https://schema.stenci.la/ListItem.jsonld).
6.  Available as [JSON Schema](https://schema.stenci.la/v1/ListItem.schema.json).
7.  This documentation was generated from [ListItem.schema.yaml](https://github.com/stencila/schema/blob/master/schema/ListItem.schema.yaml).
