---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Function.schema.yaml
---

# Function

A function with a name, which might take Parameters and return a value of a certain type.

## Properties

| Name       | @id                                                               | Type                                        | Description                                     | Inherited from                  |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------- | ------------------------------- |
| **type**   | [schema:type](https://schema.org/type)                            | 'Function'                                  | The name of the type.                           | [Entity](../other/Entity.md)    |
| id         | [schema:id](https://schema.org/id)                                | string                                      | The identifier for this item.                   | [Entity](../other/Entity.md)    |
| meta       | [stencila:meta](https://schema.stenci.la/meta.jsonld)             | object                                      | Metadata associated with this item.             | [Entity](../other/Entity.md)    |
| name       | [schema:name](https://schema.org/name)                            | string                                      | The name of the function. See note [1](#notes). | [Function](../code/Function.md) |
| parameters | [stencila:parameters](https://schema.stenci.la/parameters.jsonld) | Array of [Parameter](../code/Parameter.md)  | The parameters of the function.                 | [Function](../code/Function.md) |
| returns    | [stencila:returns](https://schema.stenci.la/returns.jsonld)       | [ValidatorTypes](../data/ValidatorTypes.md) | The return type of the function.                | [Function](../code/Function.md) |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  **name** : The name property is not required; this allows for anonymous functions (although these are not yet implemented in Stencila interpreters). The regex allows for snake_case and camelCase names but excludes PascalCase for parameter names.
2.  Available as [JSON-LD](https://schema.stenci.la/Function.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Function.schema.json).
4.  This documentation was generated from [Function.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Function.schema.yaml).
