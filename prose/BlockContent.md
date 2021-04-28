---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/BlockContent.schema.yaml
---

# BlockContent

Union type for valid block content.

## Members

| @id                                                                     | Type                                       | Description                                                                                             |
| ----------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| [schema:Claim](https://schema.org/Claim)                                | [Claim](../prose/Claim.md)                 | A claim represents specific reviewable facts or statements.                                             |
| [stencila:CodeBlock](https://schema.stenci.la/CodeBlock.jsonld)         | [CodeBlock](../code/CodeBlock.md)          | A code block.                                                                                           |
| [stencila:CodeChunk](https://schema.stenci.la/CodeChunk.jsonld)         | [CodeChunk](../code/CodeChunk.md)          | A executable chunk of code.                                                                             |
| [schema:Collection](https://schema.org/Collection)                      | [Collection](../other/Collection.md)       | A created collection of CreativeWorks or other artefacts.                                               |
| [stencila:Figure](https://schema.stenci.la/Figure.jsonld)               | [Figure](../prose/Figure.md)               | Encapsulates one or more images, videos, tables, etc, and provides captions and labels for them.        |
| [stencila:Heading](https://schema.stenci.la/Heading.jsonld)             | [Heading](../prose/Heading.md)             | Heading                                                                                                 |
| [schema:ItemList](https://schema.org/ItemList)                          | [List](../prose/List.md)                   | A list of items.                                                                                        |
| [schema:ListItem](https://schema.org/ListItem)                          | [ListItem](../prose/ListItem.md)           | A single item in a list.                                                                                |
| [stencila:MathBlock](https://schema.stenci.la/MathBlock.jsonld)         | [MathBlock](../prose/MathBlock.md)         | A block of math, e.g an equation, to be treated as block content.                                       |
| [stencila:Paragraph](https://schema.stenci.la/Paragraph.jsonld)         | [Paragraph](../prose/Paragraph.md)         | Paragraph                                                                                               |
| [stencila:QuoteBlock](https://schema.stenci.la/QuoteBlock.jsonld)       | [QuoteBlock](../prose/QuoteBlock.md)       | A section quoted from somewhere else.                                                                   |
| [schema:Table](https://schema.org/Table)                                | [Table](../prose/Table.md)                 | A table.                                                                                                |
| [stencila:ThematicBreak](https://schema.stenci.la/ThematicBreak.jsonld) | [ThematicBreak](../prose/ThematicBreak.md) | A thematic break, such as a scene change in a story, a transition to another topic, or a new document.  |

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/undefined.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/BlockContent.schema.json).
3.  This documentation was generated from [BlockContent.schema.yaml](https://github.com/stencila/schema/blob/master/schema/BlockContent.schema.yaml).
