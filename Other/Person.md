---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Person.schema.yaml
---

# Person

A person (alive, dead, undead, or fictional).

## Properties

| Name             | @id                                                          | Type                                                                                                                   | Description                                                                                               | Inherited from               |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **type**         | [schema:type](https://schema.org/type)                       | 'Person'                                                                                                               | The name of the type.                                                                                     | [Entity](../Other/Entity.md) |
| address          | [schema:address](https://schema.org/address)                 | [PostalAddress](../Other/PostalAddress.md) _or_ string                                                                 | Postal address for the person.                                                                            | [Person](../Other/Person.md) |
| affiliations     | [schema:affiliation](https://schema.org/affiliation)         | Array of [Organization](../Other/Organization.md)                                                                      | Organizations that the person is affiliated with.                                                         | [Person](../Other/Person.md) |
| alternateNames   | [schema:alternateName](https://schema.org/alternateName)     | Array of string                                                                                                        | Alternate names (aliases) for the item.                                                                   | [Thing](../Other/Thing.md)   |
| description      | [schema:description](https://schema.org/description)         | Array of [BlockContent](../Prose/BlockContent.md) _or_ Array of [InlineContent](../Prose/InlineContent.md) _or_ string | A description of the item. See note [3](#notes).                                                          | [Thing](../Other/Thing.md)   |
| emails           | [schema:email](https://schema.org/email)                     | Array of Format 'email'                                                                                                | Email addresses for the person.                                                                           | [Person](../Other/Person.md) |
| familyNames      | [schema:familyName](https://schema.org/familyName)           | Parser 'ssi' _and_ Array of string                                                                                     | Family name. In the U.S., the last name of a person. See note [1](#notes).                                | [Person](../Other/Person.md) |
| funders          | [schema:funder](https://schema.org/funder)                   | Array of ([Organization](../Other/Organization.md) _or_ [Person](../Other/Person.md))                                  | A person or organization that supports (sponsors) something through some kind of financial contribution.  | [Person](../Other/Person.md) |
| givenNames       | [schema:givenName](https://schema.org/givenName)             | Parser 'ssi' _and_ Array of string                                                                                     | Given name. In the U.S., the first name of a person. See note [2](#notes).                                | [Person](../Other/Person.md) |
| honorificPrefix  | [schema:honorificPrefix](https://schema.org/honorificPrefix) | string                                                                                                                 | An honorific prefix preceding a person's name such as Dr/Mrs/Mr.                                          | [Person](../Other/Person.md) |
| honorificSuffix  | [schema:honorificSuffix](https://schema.org/honorificSuffix) | string                                                                                                                 | An honorific suffix after a person's name such as MD/PhD/MSCSW.                                           | [Person](../Other/Person.md) |
| id               | [schema:id](https://schema.org/id)                           | string                                                                                                                 | The identifier for this item.                                                                             | [Entity](../Other/Entity.md) |
| identifiers      | [schema:identifier](https://schema.org/identifier)           | Array of ([PropertyValue](../Other/PropertyValue.md) _or_ string)                                                      | Any kind of identifier for any kind of Thing. See note [4](#notes).                                       | [Thing](../Other/Thing.md)   |
| images           | [schema:image](https://schema.org/image)                     | Array of ([ImageObject](../Media/ImageObject.md) _or_ Format 'uri')                                                    | Images of the item.                                                                                       | [Thing](../Other/Thing.md)   |
| jobTitle         | [schema:jobTitle](https://schema.org/jobTitle)               | string                                                                                                                 | The job title of the person (for example, Financial Manager).                                             | [Person](../Other/Person.md) |
| memberOf         | [schema:memberOf](https://schema.org/memberOf)               | Array of [Organization](../Other/Organization.md)                                                                      | An organization (or program membership) to which this person belongs.                                     | [Person](../Other/Person.md) |
| meta             | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                                                                                                                 | Metadata associated with this item.                                                                       | [Entity](../Other/Entity.md) |
| name             | [schema:name](https://schema.org/name)                       | string                                                                                                                 | The name of the item.                                                                                     | [Thing](../Other/Thing.md)   |
| telephoneNumbers | [schema:telephone](https://schema.org/telephone)             | Array of string                                                                                                        | Telephone numbers for the person.                                                                         | [Person](../Other/Person.md) |
| url              | [schema:url](https://schema.org/url)                         | Format 'uri'                                                                                                           | The URL of the item.                                                                                      | [Thing](../Other/Thing.md)   |

## Related

-   Parent: [Thing](../Other/Thing.md)
-   Descendants: None

## Examples

```json
{
  "type": "Person",
  "honorificPrefix": "Dr",
  "givenNames": [
    "Marie",
    "Skłodowska"
  ],
  "familyNames": [
    "Curie"
  ],
  "honorificSuffix": "PhD"
}
```

## Notes

1.  **familyNames** : This can be used along with givenName instead of the name property.
2.  **givenNames** : This can be used along with familyName instead of the name property.
3.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
4.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
5.  Available as [JSON-LD](https://schema.stenci.la/Person.jsonld).
6.  Available as [JSON Schema](https://schema.stenci.la/v1/Person.schema.json).
7.  This documentation was generated from [Person.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Person.schema.yaml).
