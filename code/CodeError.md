---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/CodeError.schema.yaml
---

# CodeError

An error that occurred when parsing, compiling or executing a Code node.

## Properties

| Name             | @id                                                                   | Type        | Description                                                                      | Inherited from                    |
| ---------------- | --------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------- | --------------------------------- |
| **errorMessage** | [stencila:errorMessage](https://schema.stenci.la/errorMessage.jsonld) | string      | The error message or brief description of the error.                             | [CodeError](../code/CodeError.md) |
| **type**         | [schema:type](https://schema.org/type)                                | 'CodeError' | The name of the type.                                                            | [Entity](../other/Entity.md)      |
| errorType        | [stencila:errorType](https://schema.stenci.la/errorType.jsonld)       | string      | The type of error e.g. "SyntaxError", "ZeroDivisionError". See note [1](#notes). | [CodeError](../code/CodeError.md) |
| id               | [schema:id](https://schema.org/id)                                    | string      | The identifier for this item.                                                    | [Entity](../other/Entity.md)      |
| meta             | [stencila:meta](https://schema.stenci.la/meta.jsonld)                 | object      | Metadata associated with this item.                                              | [Entity](../other/Entity.md)      |
| stackTrace       | [stencila:stackTrace](https://schema.stenci.la/stackTrace.jsonld)     | string      | Stack trace leading up to the error.                                             | [CodeError](../code/CodeError.md) |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  **errorType** : Many languages have the concept of alternative types of errors. For example, Python has various [classes of exceptions](https://docs.python.org/3/tutorial/errors.html). This property is intended to be used for storing these type names as additional information that maybe useful to the user attempting to resolve the error.
2.  Available as [JSON-LD](https://schema.stenci.la/CodeError.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/CodeError.schema.json).
4.  This documentation was generated from [CodeError.schema.yaml](https://github.com/stencila/schema/blob/master/schema/CodeError.schema.yaml).
