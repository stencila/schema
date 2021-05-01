---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Math.schema.yaml
---

# Math

A mathematical variable or equation.

## Properties

| Name         | @id                                                                   | Type                                | Description                                                                | Inherited from               |
| ------------ | --------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------- | ---------------------------- |
| **text**     | [schema:text](https://schema.org/text)                                | string                              | The text of the equation in the language.                                  | [Math](../Prose/Math.md)     |
| **type**     | [schema:type](https://schema.org/type)                                | 'Math', 'MathBlock', 'MathFragment' | The name of the type.                                                      | [Entity](../Other/Entity.md) |
| errors       | [stencila:errors](https://schema.stenci.la/errors.jsonld)             | Array of string                     | Errors that occurred when parsing the math equation. See note [2](#notes). | [Math](../Prose/Math.md)     |
| id           | [schema:id](https://schema.org/id)                                    | string                              | The identifier for this item.                                              | [Entity](../Other/Entity.md) |
| mathLanguage | [stencila:mathLanguage](https://schema.stenci.la/mathLanguage.jsonld) | string                              | The language used for the equation e.g tex, mathml, asciimath.             | [Math](../Prose/Math.md)     |
| meta         | [stencila:meta](https://schema.stenci.la/meta.jsonld)                 | object                              | Metadata associated with this item.                                        | [Entity](../Other/Entity.md) |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: [MathBlock](../Prose/MathBlock.md), [MathFragment](../Prose/MathFragment.md)

## Notes

1.  This is a base type for `MathFragment` and `MathBlock` and should not normally be instantiated. This type has a similar structure and purpose to `Code` which is a base type for `CodeFragment`, `CodeBlock` etc.
2.  **errors** : This property is an array of strings. Compare this to `CodeChunk.errors` which is an array of `CodeError` nodes. Strings are considered to be sufficient for math parsing errors which usually won't have stack traces, line numbers etc.
3.  Available as [JSON-LD](https://schema.stenci.la/Math.jsonld).
4.  Available as [JSON Schema](https://schema.stenci.la/v1/Math.schema.json).
5.  This documentation was generated from [Math.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Math.schema.yaml).
