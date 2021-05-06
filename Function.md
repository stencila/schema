---
category: Code
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Function.schema.yaml
---

# Function

A function with a name, which might take Parameters and return a value of a certain type.

## Properties

| Name       | @id                                                               | Type                                | Description                                     | Inherited from          |
| ---------- | ----------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------- | ----------------------- |
| id         | [schema:id](https://schema.org/id)                                | string                              | The identifier for this item.                   | [Entity](Entity.md)     |
| meta       | [stencila:meta](https://schema.stenci.la/meta.jsonld)             | object                              | Metadata associated with this item.             | [Entity](Entity.md)     |
| name       | [schema:name](https://schema.org/name)                            | string                              | The name of the function. See note [1](#notes). | [Function](Function.md) |
| parameters | [stencila:parameters](https://schema.stenci.la/parameters.jsonld) | Array of [Parameter](Parameter.md)  | The parameters of the function.                 | [Function](Function.md) |
| returns    | [stencila:returns](https://schema.stenci.la/returns.jsonld)       | [ValidatorTypes](ValidatorTypes.md) | The return type of the function.                | [Function](Function.md) |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Notes

1.  **name** : The name property is not required; this allows for anonymous functions (although these are not yet implemented in Stencila interpreters). The regex allows for snake_case and camelCase names but excludes PascalCase for parameter names.

## Available as

-   [JSON-LD](https://schema.stenci.la/Function.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Function.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Function)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/function.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Function.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Function.schema.yaml).
