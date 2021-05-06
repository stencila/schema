---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/TupleValidator.schema.yaml
---

# TupleValidator

A validator specifying constraints on an array of heterogeneous items.

## Properties

| Name  | @id                                                          | Type                                         | Description                                                                             | Inherited from                      |
| ----- | ------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------- |
| id    | [schema:id](https://schema.org/id)                           | string                                       | The identifier for this item.                                                           | [Entity](Entity.md)                 |
| items | [schema:itemListElement](https://schema.org/itemListElement) | Array of [ValidatorTypes](ValidatorTypes.md) | An array of validators specifying the constraints on each successive item in the array. | [TupleValidator](TupleValidator.md) |
| meta  | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                                       | Metadata associated with this item.                                                     | [Entity](Entity.md)                 |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/TupleValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/TupleValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.TupleValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/tuplevalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [TupleValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/TupleValidator.schema.yaml).
