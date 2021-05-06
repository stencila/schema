---
category: Prose
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/BlockContent.schema.yaml
---

# BlockContent

Union type for valid block content.

## Members

| @id                                                                     | Type                              | Description                                                                                             |
| ----------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [schema:Claim](https://schema.org/Claim)                                | [Claim](Claim.md)                 | A claim represents specific reviewable facts or statements.                                             |
| [stencila:CodeBlock](https://schema.stenci.la/CodeBlock.jsonld)         | [CodeBlock](CodeBlock.md)         | A code block.                                                                                           |
| [stencila:CodeChunk](https://schema.stenci.la/CodeChunk.jsonld)         | [CodeChunk](CodeChunk.md)         | A executable chunk of code.                                                                             |
| [schema:Collection](https://schema.org/Collection)                      | [Collection](Collection.md)       | A created collection of CreativeWorks or other artefacts.                                               |
| [stencila:Figure](https://schema.stenci.la/Figure.jsonld)               | [Figure](Figure.md)               | Encapsulates one or more images, videos, tables, etc, and provides captions and labels for them.        |
| [stencila:Heading](https://schema.stenci.la/Heading.jsonld)             | [Heading](Heading.md)             | Heading                                                                                                 |
| [schema:ItemList](https://schema.org/ItemList)                          | [List](List.md)                   | A list of items.                                                                                        |
| [schema:ListItem](https://schema.org/ListItem)                          | [ListItem](ListItem.md)           | A single item in a list.                                                                                |
| [stencila:MathBlock](https://schema.stenci.la/MathBlock.jsonld)         | [MathBlock](MathBlock.md)         | A block of math, e.g an equation, to be treated as block content.                                       |
| [stencila:Paragraph](https://schema.stenci.la/Paragraph.jsonld)         | [Paragraph](Paragraph.md)         | Paragraph                                                                                               |
| [stencila:QuoteBlock](https://schema.stenci.la/QuoteBlock.jsonld)       | [QuoteBlock](QuoteBlock.md)       | A section quoted from somewhere else.                                                                   |
| [schema:Table](https://schema.org/Table)                                | [Table](Table.md)                 | A table.                                                                                                |
| [stencila:ThematicBreak](https://schema.stenci.la/ThematicBreak.jsonld) | [ThematicBreak](ThematicBreak.md) | A thematic break, such as a scene change in a story, a transition to another topic, or a new document.  |

## Available as

-   [JSON-LD](https://schema.stenci.la/stencila.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/BlockContent.schema.json)

## Source

This documentation was generated from [BlockContent.schema.yaml](https://github.com/stencila/schema/blob/master/schema/BlockContent.schema.yaml).
