---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Cite.schema.yaml
---

# Cite

A reference to a CreativeWork that is cited in another CreativeWork. 

## Properties

| Name           | @id                                                                       | Type                                                                                         | Description                                                                                            | Inherited from      |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------- |
| **target**     | [stencila:target](https://schema.stenci.la/target.jsonld)                 | string                                                                                       | The target of the citation (URL or reference ID).                                                      | [Cite](Cite.md)     |
| citationIntent | [stencila:citationIntent](https://schema.stenci.la/citationIntent.jsonld) | Array of [CitationIntentEnumeration](CitationIntentEnumeration.md)                           | The type/s of the citation, both factually and rhetorically.                                           | [Cite](Cite.md)     |
| citationMode   | [stencila:citationMode](https://schema.stenci.la/citationMode.jsonld)     | 'Parenthetical', 'Narrative', 'NarrativeAuthor', 'NarrativeYear', 'normal', 'suppressAuthor' | Determines how the citation is shown within the surrounding text. See note [3](#notes).                | [Cite](Cite.md)     |
| citationPrefix | [stencila:citationPrefix](https://schema.stenci.la/citationPrefix.jsonld) | string                                                                                       | Text to show before the citation. See note [2](#notes).                                                | [Cite](Cite.md)     |
| citationSuffix | [stencila:citationSuffix](https://schema.stenci.la/citationSuffix.jsonld) | string                                                                                       | Text to show after the citation. See note [1](#notes).                                                 | [Cite](Cite.md)     |
| content        | [stencila:content](https://schema.stenci.la/content.jsonld)               | Array of [InlineContent](InlineContent.md)                                                   | Optional structured content/text of this citation.                                                     | [Cite](Cite.md)     |
| id             | [schema:id](https://schema.org/id)                                        | string                                                                                       | The identifier for this item.                                                                          | [Entity](Entity.md) |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)                     | object                                                                                       | Metadata associated with this item.                                                                    | [Entity](Entity.md) |
| pageEnd        | [schema:pageEnd](https://schema.org/pageEnd)                              | integer _or_ string                                                                          | The page on which the work ends; for example "138" or "xvi".                                           | [Cite](Cite.md)     |
| pageStart      | [schema:pageStart](https://schema.org/pageStart)                          | integer _or_ string                                                                          | The page on which the work starts; for example "135" or "xiii".                                        | [Cite](Cite.md)     |
| pagination     | [schema:pagination](https://schema.org/pagination)                        | string                                                                                       | Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55".  | [Cite](Cite.md)     |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Notes

1.  **citationSuffix** : See comment on `citationPrefix` regarding naming.
2.  **citationPrefix** : Previously this was name `prefix` but for consistency with `citationMode` and `honorificPrefix`, to avoid ambiguity with other prefixes was renamed to `citationPrefix`.
3.  **citationMode** : There are two main citation modes: parenthetical and narrative (a.k.a textual). See <https://apastyle.apa.org/style-grammar-guidelines/citations/basic-principles/parenthetical-versus-narrative> for an explanation.

## Available as

-   [JSON-LD](https://schema.stenci.la/Cite.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Cite.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Cite)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/cite.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Cite.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Cite.schema.yaml).
