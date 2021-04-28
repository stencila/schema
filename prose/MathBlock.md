---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/MathBlock.schema.yaml
---

# MathBlock

A block of math, e.g an equation, to be treated as block content.

## Properties

| Name         | @id                                                                   | Type            | Description                                                                | Inherited from                     |
| ------------ | --------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- | ---------------------------------- |
| **text**     | [schema:text](https://schema.org/text)                                | string          | The text of the equation in the language.                                  | [Math](../prose/Math.md)           |
| **type**     | [schema:type](https://schema.org/type)                                | 'MathBlock'     | The name of the type.                                                      | [Entity](../other/Entity.md)       |
| errors       | [stencila:errors](https://schema.stenci.la/errors.jsonld)             | Array of string | Errors that occurred when parsing the math equation. See note [1](#notes). | [Math](../prose/Math.md)           |
| id           | [schema:id](https://schema.org/id)                                    | string          | The identifier for this item.                                              | [Entity](../other/Entity.md)       |
| label        | [stencila:label](https://schema.stenci.la/label.jsonld)               | string          | A short label for the math block.                                          | [MathBlock](../prose/MathBlock.md) |
| mathLanguage | [stencila:mathLanguage](https://schema.stenci.la/mathLanguage.jsonld) | string          | The language used for the equation e.g tex, mathml, asciimath.             | [Math](../prose/Math.md)           |
| meta         | [stencila:meta](https://schema.stenci.la/meta.jsonld)                 | object          | Metadata associated with this item.                                        | [Entity](../other/Entity.md)       |

## Related

-   Parent: [Math](../prose/Math.md)
-   Descendants: None

## Notes

1.  **errors** : This property is an array of strings. Compare this to `CodeChunk.errors` which is an array of `CodeError` nodes. Strings are considered to be sufficient for math parsing errors which usually won't have stack traces, line numbers etc.
2.  Available as [JSON-LD](https://schema.stenci.la/MathBlock.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/MathBlock.schema.json).
4.  This documentation was generated from [MathBlock.schema.yaml](https://github.com/stencila/schema/blob/master/schema/MathBlock.schema.yaml).
