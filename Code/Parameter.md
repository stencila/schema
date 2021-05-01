---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Parameter.schema.yaml
---

# Parameter

A parameter that can be set and used in evaluated code.

## Properties

| Name         | @id                                                                   | Type                                        | Description                                                                                   | Inherited from                    |
| ------------ | --------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------- |
| **name**     | [schema:name](https://schema.org/name)                                | string                                      | The name of the variable. See note [1](#notes).                                               | [Variable](../Code/Variable.md)   |
| **type**     | [schema:type](https://schema.org/type)                                | 'Parameter'                                 | The name of the type.                                                                         | [Entity](../Other/Entity.md)      |
| default      | [schema:defaultValue](https://schema.org/defaultValue)                | [Node](../Other/Node.md)                    | The default value of the parameter.                                                           | [Parameter](../Code/Parameter.md) |
| id           | [schema:id](https://schema.org/id)                                    | string                                      | The identifier for this item.                                                                 | [Entity](../Other/Entity.md)      |
| isExtensible | [stencila:isExtensible](https://schema.stenci.la/isExtensible.jsonld) | boolean                                     | Indicates that this parameter is variadic and can accept multiple named arguments.            | [Parameter](../Code/Parameter.md) |
| isReadonly   | [schema:readonlyValue](https://schema.org/readonlyValue)              | boolean                                     | Whether or not a property is mutable. Default is false. See note [2](#notes).                 | [Variable](../Code/Variable.md)   |
| isRequired   | [schema:valueRequired](https://schema.org/valueRequired)              | boolean                                     | Is this parameter required, if not it should have a default or default is assumed to be null. | [Parameter](../Code/Parameter.md) |
| isVariadic   | [stencila:isVariadic](https://schema.stenci.la/isVariadic.jsonld)     | boolean                                     | Indicates that this parameter is variadic and can accept multiple arguments.                  | [Parameter](../Code/Parameter.md) |
| meta         | [stencila:meta](https://schema.stenci.la/meta.jsonld)                 | object                                      | Metadata associated with this item.                                                           | [Entity](../Other/Entity.md)      |
| validator    | [stencila:validator](https://schema.stenci.la/validator.jsonld)       | [ValidatorTypes](../Data/ValidatorTypes.md) | The validator that the value is validated against.                                            | [Variable](../Code/Variable.md)   |
| value        | [schema:value](https://schema.org/value)                              | [Node](../Other/Node.md)                    | The value of the variable.                                                                    | [Variable](../Code/Variable.md)   |

## Related

-   Parent: [Variable](../Code/Variable.md)
-   Descendants: None

## Notes

1.  **name** : This regex allows for snake_case and camelCase names but excludes PascalCase for names.
2.  **isReadonly** : If `isReadonly` is `true` and `value` is defined then changes to `value` should not be allowed.
3.  Available as [JSON-LD](https://schema.stenci.la/Parameter.jsonld).
4.  Available as [JSON Schema](https://schema.stenci.la/v1/Parameter.schema.json).
5.  This documentation was generated from [Parameter.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Parameter.schema.yaml).