---
category: Data
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/ArrayValidator.schema.yaml
---

# ArrayValidator

A validator specifying constraints on an array node.

## Properties

| Name           | @id                                                                       | Type                                | Description                                                                                   | Inherited from                      |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------- |
| contains       | [stencila:contains](https://schema.stenci.la/contains.jsonld)             | [ValidatorTypes](ValidatorTypes.md) | An array node is valid if at least one of its items is valid against the \`contains\` schema. | [ArrayValidator](ArrayValidator.md) |
| id             | [schema:id](https://schema.org/id)                                        | string                              | The identifier for this item.                                                                 | [Entity](Entity.md)                 |
| itemsValidator | [stencila:itemsValidator](https://schema.stenci.la/itemsValidator.jsonld) | [ValidatorTypes](ValidatorTypes.md) | Another validator node specifying the constraints on all items in the array.                  | [ArrayValidator](ArrayValidator.md) |
| maxItems       | [stencila:maxItems](https://schema.stenci.la/maxItems.jsonld)             | number                              | An array node is valid if its size is less than, or equal to, this value.                     | [ArrayValidator](ArrayValidator.md) |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)                     | object                              | Metadata associated with this item.                                                           | [Entity](Entity.md)                 |
| minItems       | [stencila:minItems](https://schema.stenci.la/minItems.jsonld)             | number                              | An array node is valid if its size is greater than, or equal to, this value.                  | [ArrayValidator](ArrayValidator.md) |
| uniqueItems    | [stencila:uniqueItems](https://schema.stenci.la/uniqueItems.jsonld)       | boolean                             | A flag to indicate that each value in the array should be unique.                             | [ArrayValidator](ArrayValidator.md) |

## Related

-   Parent: [Validator](Validator.md)
-   Descendants: None

## Available as

-   [JSON-LD](https://schema.stenci.la/ArrayValidator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/ArrayValidator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.ArrayValidator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/arrayvalidator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [ArrayValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/ArrayValidator.schema.yaml).
