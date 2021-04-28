---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/StringValidator.schema.yaml
---

# StringValidator

A schema specifying constraints on a string node.

## Properties

| Name      | @id                                                             | Type              | Description                                                               | Inherited from                                |
| --------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------- | --------------------------------------------- |
| **type**  | [schema:type](https://schema.org/type)                          | 'StringValidator' | The name of the type.                                                     | [Entity](../other/Entity.md)                  |
| id        | [schema:id](https://schema.org/id)                              | string            | The identifier for this item.                                             | [Entity](../other/Entity.md)                  |
| maxLength | [stencila:maxLength](https://schema.stenci.la/maxLength.jsonld) | number            | The maximum length for a string node. See note [3](#notes).               | [StringValidator](../data/StringValidator.md) |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)           | object            | Metadata associated with this item.                                       | [Entity](../other/Entity.md)                  |
| minLength | [stencila:minLength](https://schema.stenci.la/minLength.jsonld) | number            | The minimum length for a string node. See note [4](#notes).               | [StringValidator](../data/StringValidator.md) |
| pattern   | [stencila:pattern](https://schema.stenci.la/pattern.jsonld)     | string            | A regular expression that a string node must match. See note [2](#notes). | [StringValidator](../data/StringValidator.md) |

## Related

-   Parent: [Validator](../data/Validator.md)
-   Descendants: None

## Notes

1.  A node will be valid against the schema if it is a string that meets the schemas `minLength`, `maxLength` and `pattern` properties. Analogous to the JSON Schema `string` validation [type](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.1).
2.  **pattern** : A string is valid if it is matched by the regular expression.
3.  **maxLength** : A string is valid if its length is less than, or exactly equal to, `maxLength`.
4.  **minLength** : A string is valid if its length is greater than, or exactly equal to, `minLength`.
5.  Available as [JSON-LD](https://schema.stenci.la/StringValidator.jsonld).
6.  Available as [JSON Schema](https://schema.stenci.la/v1/StringValidator.schema.json).
7.  This documentation was generated from [StringValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/StringValidator.schema.yaml).
