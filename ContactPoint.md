# ContactPoint

A contact point, for example, a R&D department.

## Properties

| Name                  | @id                                                              | Type                                                                                                         | Description                                                                                                     | Inherited from                 |
| --------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **type _(required)_** | [schema:type](https://schema.org/type)                           | `enum{`​`ContactPoint`, `PostalAddress`​`}`                                                                  | The name of the type.                                                                                           | [Entity](./Entity)             |
| alternateNames        | [schema:alternateName](https://schema.org/alternateName)         | `array[`​`string`​`]`                                                                                        | Alternate names (aliases) for the item.                                                                         | [Thing](./Thing)               |
| availableLanguages    | [schema:availableLanguage](https://schema.org/availableLanguage) | `array[`​`string`​`]`                                                                                        | Languages (human not programming) in which it is possible to communicate with the organization/department etc.  | [ContactPoint](./ContactPoint) |
| description           | [schema:description](https://schema.org/description)             | `array[`​[`BlockContent`](./BlockContent)​`]` \| `array[`​[`InlineContent`](./InlineContent)​`]` \| `string` | A description of the item.                                                                                      | [Thing](./Thing)               |
| emails                | [schema:email](https://schema.org/email)                         | `array[`​`string:email`​`]`                                                                                  | Email address for correspondence.                                                                               | [ContactPoint](./ContactPoint) |
| id                    | [schema:id](https://schema.org/id)                               | `string`                                                                                                     | The identifier for this item.                                                                                   | [Entity](./Entity)             |
| identifiers           | [schema:identifier](https://schema.org/identifier)               | `array[`​[`PropertyValue`](./PropertyValue) \| `string`​`]`                                                  | Any kind of identifier for any kind of Thing.                                                                   | [Thing](./Thing)               |
| images                | [schema:image](https://schema.org/image)                         | `array[`​[`ImageObject`](./ImageObject) \| `string:uri`​`]`                                                  | Images of the item.                                                                                             | [Thing](./Thing)               |
| meta                  | [stencila:meta](https://schema.stenci.la/meta.jsonld)            | `object`                                                                                                     | Metadata associated with this item.                                                                             | [Entity](./Entity)             |
| name                  | [schema:name](https://schema.org/name)                           | `string`                                                                                                     | The name of the item.                                                                                           | [Thing](./Thing)               |
| telephoneNumbers      | [schema:telephone](https://schema.org/telephone)                 | `array[`​`string`​`]`                                                                                        | Telephone numbers for the contact point.                                                                        | [ContactPoint](./ContactPoint) |
| url                   | [schema:url](https://schema.org/url)                             | `string:uri`                                                                                                 | The URL of the item.                                                                                            | [Thing](./Thing)               |

## Related

-   Parent: [Thing](./Thing)
-   Descendants: [PostalAddress](./PostalAddress)

 This documentation was autogenerated from [`ContactPoint.schema.yaml`](https://github.com/stencila/schema/blob/master/schema/ContactPoint.schema.yaml). This type is also available in [JSON-LD](https://schema.org/ContactPoint) and [JSON Schema](https://schema.stenci.la/ContactPoint.schema.json).
