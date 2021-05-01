---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/ArrayValidator.schema.yaml
---

# ArrayValidator

A validator specifying constraints on an array node.

## Properties

| Name           | @id                                                                       | Type                                        | Description                                                                                   | Inherited from                              |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **type**       | [schema:type](https://schema.org/type)                                    | 'ArrayValidator'                            | The name of the type.                                                                         | [Entity](../Other/Entity.md)                |
| contains       | [stencila:contains](https://schema.stenci.la/contains.jsonld)             | [ValidatorTypes](../Data/ValidatorTypes.md) | An array node is valid if at least one of its items is valid against the \`contains\` schema. | [ArrayValidator](../Data/ArrayValidator.md) |
| id             | [schema:id](https://schema.org/id)                                        | string                                      | The identifier for this item.                                                                 | [Entity](../Other/Entity.md)                |
| itemsValidator | [stencila:itemsValidator](https://schema.stenci.la/itemsValidator.jsonld) | [ValidatorTypes](../Data/ValidatorTypes.md) | Another validator node specifying the constraints on all items in the array.                  | [ArrayValidator](../Data/ArrayValidator.md) |
| maxItems       | [stencila:maxItems](https://schema.stenci.la/maxItems.jsonld)             | number                                      | An array node is valid if its size is less than, or equal to, this value.                     | [ArrayValidator](../Data/ArrayValidator.md) |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)                     | object                                      | Metadata associated with this item.                                                           | [Entity](../Other/Entity.md)                |
| minItems       | [stencila:minItems](https://schema.stenci.la/minItems.jsonld)             | number                                      | An array node is valid if its size is greater than, or equal to, this value.                  | [ArrayValidator](../Data/ArrayValidator.md) |
| uniqueItems    | [stencila:uniqueItems](https://schema.stenci.la/uniqueItems.jsonld)       | boolean                                     | A flag to indicate that each value in the array should be unique.                             | [ArrayValidator](../Data/ArrayValidator.md) |

## Related

-   Parent: [Validator](../Data/Validator.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/ArrayValidator.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/ArrayValidator.schema.json).
3.  This documentation was generated from [ArrayValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/ArrayValidator.schema.yaml).
