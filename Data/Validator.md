---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Validator.schema.yaml
---

# Validator

A base for all validator types.

## Properties

| Name     | @id                                                   | Type                                                                                                                                                                | Description                         | Inherited from               |
| -------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **type** | [schema:type](https://schema.org/type)                | 'Validator', 'ArrayValidator', 'BooleanValidator', 'ConstantValidator', 'EnumValidator', 'IntegerValidator', 'NumberValidator', 'StringValidator', 'TupleValidator' | The name of the type.               | [Entity](../Other/Entity.md) |
| id       | [schema:id](https://schema.org/id)                    | string                                                                                                                                                              | The identifier for this item.       | [Entity](../Other/Entity.md) |
| meta     | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object                                                                                                                                                              | Metadata associated with this item. | [Entity](../Other/Entity.md) |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: [ArrayValidator](../Data/ArrayValidator.md), [BooleanValidator](../Data/BooleanValidator.md), [ConstantValidator](../Data/ConstantValidator.md), [EnumValidator](../Data/EnumValidator.md), [IntegerValidator](../Data/IntegerValidator.md), [NumberValidator](../Data/NumberValidator.md), [StringValidator](../Data/StringValidator.md), [TupleValidator](../Data/TupleValidator.md)

## Notes

1.  The main purpose of this type is to obtain a generated union type for all validators.
2.  Available as [JSON-LD](https://schema.stenci.la/Validator.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Validator.schema.json).
4.  This documentation was generated from [Validator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Validator.schema.yaml).
