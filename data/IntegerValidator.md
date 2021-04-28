---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/IntegerValidator.schema.yaml
---

# IntegerValidator

A validator specifying the constraints on an integer node.

## Properties

| Name     | @id                                                   | Type               | Description                         | Inherited from               |
| -------- | ----------------------------------------------------- | ------------------ | ----------------------------------- | ---------------------------- |
| **type** | [schema:type](https://schema.org/type)                | 'IntegerValidator' | The name of the type.               | [Entity](../other/Entity.md) |
| id       | [schema:id](https://schema.org/id)                    | string             | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta     | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object             | Metadata associated with this item. | [Entity](../other/Entity.md) |

## Related

-   Parent: [Validator](../data/Validator.md)
-   Descendants: None

## Notes

1.  A node will be valid if it is a number with no fractional part and meets any additional constraints, such as `multipleOf`, specified in the validator. Analogous to the JSON Schema `integer` validation [type](https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.1).
2.  Available as [JSON-LD](https://schema.stenci.la/IntegerValidator.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/IntegerValidator.schema.json).
4.  This documentation was generated from [IntegerValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/IntegerValidator.schema.yaml).
