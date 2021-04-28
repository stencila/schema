---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/CodeExpression.schema.yaml
---

# CodeExpression

An expression defined in programming language source code.

## Properties

| Name                | @id                                                                  | Type                                       | Description                                                                             | Inherited from                              |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| **text**            | [schema:text](https://schema.org/text)                               | string                                     | The text of the code.                                                                   | [Code](../code/Code.md)                     |
| **type**            | [schema:type](https://schema.org/type)                               | 'CodeExpression'                           | The name of the type.                                                                   | [Entity](../other/Entity.md)                |
| errors              | [stencila:errors](https://schema.stenci.la/errors.jsonld)            | Array of [CodeError](../code/CodeError.md) | Errors when compiling or executing the chunk.                                           | [CodeExpression](../code/CodeExpression.md) |
| format              | [schema:encodingFormat](https://schema.org/encodingFormat)           | string                                     | Media type, typically expressed using a MIME format, of the code. See note [1](#notes). | [Code](../code/Code.md)                     |
| id                  | [schema:id](https://schema.org/id)                                   | string                                     | The identifier for this item.                                                           | [Entity](../other/Entity.md)                |
| meta                | [stencila:meta](https://schema.stenci.la/meta.jsonld)                | object                                     | Metadata associated with this item.                                                     | [Entity](../other/Entity.md)                |
| output              | [stencila:output](https://schema.stenci.la/output.jsonld)            | [Node](../other/Node.md)                   | The value of the expression when it was last evaluated.                                 | [CodeExpression](../code/CodeExpression.md) |
| programmingLanguage | [schema:programmingLanguage](https://schema.org/programmingLanguage) | string                                     | The programming language of the code.                                                   | [Code](../code/Code.md)                     |

## Related

-   Parent: [CodeFragment](../code/CodeFragment.md)
-   Descendants: None

## Notes

1.  **format** : This property allows the differentiation of formats using the same programming language or variants of a programming language. An example is using `programmingLanguage` "json" and `encodingFormat` "application/ld+json" for JSON-LD code examples.
2.  Available as [JSON-LD](https://schema.stenci.la/CodeExpression.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/CodeExpression.schema.json).
4.  This documentation was generated from [CodeExpression.schema.yaml](https://github.com/stencila/schema/blob/master/schema/CodeExpression.schema.yaml).
