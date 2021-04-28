---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Validator.schema.yaml
---

# Validator

A base for all validator types.

## Properties

| Name     | @id                                                   | Type                                                                                                                                                                | Description                         | Inherited from               |
| -------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **type** | [schema:type](https://schema.org/type)                | 'Validator', 'ArrayValidator', 'BooleanValidator', 'ConstantValidator', 'EnumValidator', 'IntegerValidator', 'NumberValidator', 'StringValidator', 'TupleValidator' | The name of the type.               | [Entity](../other/Entity.md) |
| id       | [schema:id](https://schema.org/id)                    | string                                                                                                                                                              | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta     | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object                                                                                                                                                              | Metadata associated with this item. | [Entity](../other/Entity.md) |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: [ArrayValidator](../data/ArrayValidator.md), [BooleanValidator](../data/BooleanValidator.md), [ConstantValidator](../data/ConstantValidator.md), [EnumValidator](../data/EnumValidator.md), [IntegerValidator](../data/IntegerValidator.md), [NumberValidator](../data/NumberValidator.md), [StringValidator](../data/StringValidator.md), [TupleValidator](../data/TupleValidator.md)

## Notes

1.  The main purpose of this type is to obtain a generated union type for all validators.
2.  Available as [JSON-LD](https://schema.stenci.la/Validator.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Validator.schema.json).
4.  This documentation was generated from [Validator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Validator.schema.yaml).
