---
category: Data
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Validator.schema.yaml
---

# Validator

A base for all validator types.

## Properties

| Name | @id                                                   | Type   | Description                         | Inherited from      |
| ---- | ----------------------------------------------------- | ------ | ----------------------------------- | ------------------- |
| id   | [schema:id](https://schema.org/id)                    | string | The identifier for this item.       | [Entity](Entity.md) |
| meta | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object | Metadata associated with this item. | [Entity](Entity.md) |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: [ArrayValidator](ArrayValidator.md), [BooleanValidator](BooleanValidator.md), [ConstantValidator](ConstantValidator.md), [EnumValidator](EnumValidator.md), [IntegerValidator](IntegerValidator.md), [NumberValidator](NumberValidator.md), [StringValidator](StringValidator.md), [TupleValidator](TupleValidator.md)

## Notes

1.  The main purpose of this type is to obtain a generated union type for all validators.

## Available as

-   [JSON-LD](https://schema.stenci.la/Validator.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Validator.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Validator)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/validator.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Validator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Validator.schema.yaml).
