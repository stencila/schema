---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/BooleanValidator.schema.yaml
---

# BooleanValidator

A schema specifying that a node must be a boolean value.

## Properties

| Name | @id                                                   | Type   | Description                         | Inherited from      |
| ---- | ----------------------------------------------------- | ------ | ----------------------------------- | ------------------- |
| id   | [schema:id](https://schema.org/id)                    | string | The identifier for this item.       | [Entity](Entity.md) |
| meta | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object | Metadata associated with this item. | [Entity](Entity.md) |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Notes

1.  A node will be valid against this schema if it is either `true` or `false.
    Analogous to the JSON Schema `boolean\` validation [type](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.1).

## Available as

-   [JSON-LD](https://schema.stenci.la/BooleanValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/BooleanValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.BooleanValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/booleanvalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [BooleanValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/BooleanValidator.schema.yaml).
