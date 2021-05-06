---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/ConstantValidator.schema.yaml
---

# ConstantValidator

A validator specifying a constant value that a node must have.

## Properties

| Name  | @id                                                   | Type            | Description                         | Inherited from                            |
| ----- | ----------------------------------------------------- | --------------- | ----------------------------------- | ----------------------------------------- |
| id    | [schema:id](https://schema.org/id)                    | string          | The identifier for this item.       | [Entity](Entity.md)                       |
| meta  | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object          | Metadata associated with this item. | [Entity](Entity.md)                       |
| value | [schema:value](https://schema.org/value)              | [Node](Node.md) | The value that the node must have.  | [ConstantValidator](ConstantValidator.md) |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Notes

1.  A node will be valid against this validator if it is equal to the `value` property. Analogous to the JSON Schema [`const` keyword](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.3).

## Available as

-   [JSON-LD](https://schema.stenci.la/ConstantValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/ConstantValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.ConstantValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/constantvalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [ConstantValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/ConstantValidator.schema.yaml).
