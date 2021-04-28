---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Cite.schema.yaml
---

# Cite

A reference to a CreativeWork that is cited in another CreativeWork. 

## Properties

| Name           | @id                                                                       | Type                                                                                         | Description                                                                                            | Inherited from               |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------- |
| **target**     | [stencila:target](https://schema.stenci.la/target.jsonld)                 | string                                                                                       | The target of the citation (URL or reference ID).                                                      | [Cite](../prose/Cite.md)     |
| **type**       | [schema:type](https://schema.org/type)                                    | 'Cite'                                                                                       | The name of the type.                                                                                  | [Entity](../other/Entity.md) |
| citationIntent | [stencila:citationIntent](https://schema.stenci.la/citationIntent.jsonld) | Array of [CitationIntentEnumeration](../prose/CitationIntentEnumeration.md)                  | The type/s of the citation, both factually and rhetorically.                                           | [Cite](../prose/Cite.md)     |
| citationMode   | [stencila:citationMode](https://schema.stenci.la/citationMode.jsonld)     | 'Parenthetical', 'Narrative', 'NarrativeAuthor', 'NarrativeYear', 'normal', 'suppressAuthor' | Determines how the citation is shown within the surrounding text. See note [3](#notes).                | [Cite](../prose/Cite.md)     |
| citationPrefix | [stencila:citationPrefix](https://schema.stenci.la/citationPrefix.jsonld) | string                                                                                       | Text to show before the citation. See note [2](#notes).                                                | [Cite](../prose/Cite.md)     |
| citationSuffix | [stencila:citationSuffix](https://schema.stenci.la/citationSuffix.jsonld) | string                                                                                       | Text to show after the citation. See note [1](#notes).                                                 | [Cite](../prose/Cite.md)     |
| content        | [stencila:content](https://schema.stenci.la/content.jsonld)               | Array of [InlineContent](../prose/InlineContent.md)                                          | Optional structured content/text of this citation.                                                     | [Cite](../prose/Cite.md)     |
| id             | [schema:id](https://schema.org/id)                                        | string                                                                                       | The identifier for this item.                                                                          | [Entity](../other/Entity.md) |
| meta           | [stencila:meta](https://schema.stenci.la/meta.jsonld)                     | object                                                                                       | Metadata associated with this item.                                                                    | [Entity](../other/Entity.md) |
| pageEnd        | [schema:pageEnd](https://schema.org/pageEnd)                              | integer _or_ string                                                                          | The page on which the work ends; for example "138" or "xvi".                                           | [Cite](../prose/Cite.md)     |
| pageStart      | [schema:pageStart](https://schema.org/pageStart)                          | integer _or_ string                                                                          | The page on which the work starts; for example "135" or "xiii".                                        | [Cite](../prose/Cite.md)     |
| pagination     | [schema:pagination](https://schema.org/pagination)                        | string                                                                                       | Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55".  | [Cite](../prose/Cite.md)     |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  **citationSuffix** : See comment on `citationPrefix` regarding naming.
2.  **citationPrefix** : Previously this was name `prefix` but for consistency with `citationMode` and `honorificPrefix`, to avoid ambiguity with other prefixes was renamed to `citationPrefix`.
3.  **citationMode** : There are two main citation modes: parenthetical and narrative (a.k.a textual). See <https://apastyle.apa.org/style-grammar-guidelines/citations/basic-principles/parenthetical-versus-narrative> for an explanation.
4.  Available as [JSON-LD](https://schema.stenci.la/Cite.jsonld).
5.  Available as [JSON Schema](https://schema.stenci.la/v1/Cite.schema.json).
6.  This documentation was generated from [Cite.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Cite.schema.yaml).
