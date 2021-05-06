---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/NumberValidator.schema.yaml
---

# NumberValidator

A validator specifying the constraints on a numeric node.

## Properties

| Name             | @id                                                                           | Type   | Description                                                               | Inherited from                        |
| ---------------- | ----------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- | ------------------------------------- |
| exclusiveMaximum | [stencila:exclusiveMaximum](https://schema.stenci.la/exclusiveMaximum.jsonld) | number | The exclusive upper limit for a numeric node. See note [3](#notes).       | [NumberValidator](NumberValidator.md) |
| exclusiveMinimum | [stencila:exclusiveMinimum](https://schema.stenci.la/exclusiveMinimum.jsonld) | number | The exclusive lower limit for a numeric node. See note [4](#notes).       | [NumberValidator](NumberValidator.md) |
| id               | [schema:id](https://schema.org/id)                                            | string | The identifier for this item.                                             | [Entity](Entity.md)                   |
| maximum          | [stencila:maximum](https://schema.stenci.la/maximum.jsonld)                   | number | The inclusive upper limit for a numeric node. See note [5](#notes).       | [NumberValidator](NumberValidator.md) |
| meta             | [stencila:meta](https://schema.stenci.la/meta.jsonld)                         | object | Metadata associated with this item.                                       | [Entity](Entity.md)                   |
| minimum          | [stencila:minimum](https://schema.stenci.la/minimum.jsonld)                   | number | The inclusive lower limit for a numeric node. See note [6](#notes).       | [NumberValidator](NumberValidator.md) |
| multipleOf       | [stencila:multipleOf](https://schema.stenci.la/multipleOf.jsonld)             | number | A number that a numeric node must be a multiple of. See note [2](#notes). | [NumberValidator](NumberValidator.md) |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Notes

1.  A node will be valid if it is a number that meets the `maximum`, `multipleOf` etc properties. Analogous to the JSON Schema `number` validation [type](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.1). Note that the `IntegerValidator` type extends this validator with the additional constraint that the number have no fractional part.
2.  **multipleOf** : A number is valid only if division by this value results in an integer.
3.  **exclusiveMaximum** : A number is valid only if it has a value less than (not equal to) `exclusiveMaximum`.
4.  **exclusiveMinimum** : A number is valid only if it has a value greater than (not equal to) `exclusiveMinimum`.
5.  **maximum** : A number is valid if it is less than, or exactly equal to, `maximum`.
6.  **minimum** : A number is valid if it is greater than, or exactly equal to, `minimum`.

## Available as

-   [JSON-LD](https://schema.stenci.la/NumberValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/NumberValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.NumberValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/numbervalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [NumberValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/NumberValidator.schema.yaml).
