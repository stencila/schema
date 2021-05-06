---
category: Code
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/CodeBlock.schema.yaml
---

# CodeBlock

A code block.

## Properties

| Name                | @id                                                                  | Type   | Description                                                                                            | Inherited from            |
| ------------------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| **text**            | [schema:text](https://schema.org/text)                               | string | The text of the code.                                                                                  | [Code](Code.md)           |
| exportFrom          | [stencila:exportFrom](https://schema.stenci.la/exportFrom.jsonld)    | string | A compilation directive giving the name of the variable to export into the content of the code block.  | [CodeBlock](CodeBlock.md) |
| format              | [schema:encodingFormat](https://schema.org/encodingFormat)           | string | Media type, typically expressed using a MIME format, of the code. See note [1](#notes).                | [Code](Code.md)           |
| id                  | [schema:id](https://schema.org/id)                                   | string | The identifier for this item.                                                                          | [Entity](Entity.md)       |
| importTo            | [stencila:importTo](https://schema.stenci.la/importTo.jsonld)        | string | A compilation directive giving the name of the variable to import the content of the code block as.    | [CodeBlock](CodeBlock.md) |
| meta                | [stencila:meta](https://schema.stenci.la/meta.jsonld)                | object | Metadata associated with this item.                                                                    | [Entity](Entity.md)       |
| programmingLanguage | [schema:programmingLanguage](https://schema.org/programmingLanguage) | string | The programming language of the code.                                                                  | [Code](Code.md)           |

## Related

-   Parent: [Code](Code.md)
-   Descendants: [CodeChunk](CodeChunk.md)

## Notes

1.  **format** : This property allows the differentiation of formats using the same programming language or variants of a programming language. An example is using `programmingLanguage` "json" and `encodingFormat` "application/ld+json" for JSON-LD code examples.

## Available as

-   [JSON-LD](https://schema.stenci.la/CodeBlock.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/CodeBlock.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.CodeBlock)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/codeblock.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [CodeBlock.schema.yaml](https://github.com/stencila/schema/blob/master/schema/CodeBlock.schema.yaml).
