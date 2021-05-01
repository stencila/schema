---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Code.schema.yaml
---

# Code

Base type for code nodes e.g. \`CodeBlock\`, \`CodeExpression\`.

## Properties

| Name                | @id                                                                  | Type                                                               | Description                                                                             | Inherited from               |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ---------------------------- |
| **text**            | [schema:text](https://schema.org/text)                               | string                                                             | The text of the code.                                                                   | [Code](../Code/Code.md)      |
| **type**            | [schema:type](https://schema.org/type)                               | 'Code', 'CodeBlock', 'CodeChunk', 'CodeExpression', 'CodeFragment' | The name of the type.                                                                   | [Entity](../Other/Entity.md) |
| format              | [schema:encodingFormat](https://schema.org/encodingFormat)           | string                                                             | Media type, typically expressed using a MIME format, of the code. See note [1](#notes). | [Code](../Code/Code.md)      |
| id                  | [schema:id](https://schema.org/id)                                   | string                                                             | The identifier for this item.                                                           | [Entity](../Other/Entity.md) |
| meta                | [stencila:meta](https://schema.stenci.la/meta.jsonld)                | object                                                             | Metadata associated with this item.                                                     | [Entity](../Other/Entity.md) |
| programmingLanguage | [schema:programmingLanguage](https://schema.org/programmingLanguage) | string                                                             | The programming language of the code.                                                   | [Code](../Code/Code.md)      |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: [CodeBlock](../Code/CodeBlock.md), [CodeChunk](../Code/CodeChunk.md), [CodeExpression](../Code/CodeExpression.md), [CodeFragment](../Code/CodeFragment.md)

## Notes

1.  **format** : This property allows the differentiation of formats using the same programming language or variants of a programming language. An example is using `programmingLanguage` "json" and `encodingFormat` "application/ld+json" for JSON-LD code examples.
2.  Available as [JSON-LD](https://schema.stenci.la/Code.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Code.schema.json).
4.  This documentation was generated from [Code.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Code.schema.yaml).