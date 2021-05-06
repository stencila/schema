---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/EnumValidator.schema.yaml
---

# EnumValidator

A schema specifying that a node must be one of several values.

## Properties

| Name   | @id                                                       | Type                     | Description                                            | Inherited from                    |
| ------ | --------------------------------------------------------- | ------------------------ | ------------------------------------------------------ | --------------------------------- |
| id     | [schema:id](https://schema.org/id)                        | string                   | The identifier for this item.                          | [Entity](Entity.md)               |
| meta   | [stencila:meta](https://schema.stenci.la/meta.jsonld)     | object                   | Metadata associated with this item.                    | [Entity](Entity.md)               |
| values | [stencila:values](https://schema.stenci.la/values.jsonld) | Array of [Node](Node.md) | A node is valid if it is equal to any of these values. | [EnumValidator](EnumValidator.md) |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Notes

1.  Analogous to the JSON Schema [`enum` keyword](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.2).

## Available as

-   [JSON-LD](https://schema.stenci.la/EnumValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/EnumValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.EnumValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/enumvalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [EnumValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/EnumValidator.schema.yaml).
