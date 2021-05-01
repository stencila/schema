---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Note.schema.yaml
---

# Note

Additional content which is not part of the main content of a document.

## Properties

| Name        | @id                                                           | Type                                              | Description                                                         | Inherited from               |
| ----------- | ------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------- |
| **content** | [stencila:content](https://schema.stenci.la/content.jsonld)   | Array of [BlockContent](../Prose/BlockContent.md) | Content of the note, usually a paragraph. See note [2](#notes).     | [Note](../Prose/Note.md)     |
| **type**    | [schema:type](https://schema.org/type)                        | 'Note'                                            | The name of the type.                                               | [Entity](../Other/Entity.md) |
| id          | [schema:id](https://schema.org/id)                            | string                                            | The identifier for this item.                                       | [Entity](../Other/Entity.md) |
| meta        | [stencila:meta](https://schema.stenci.la/meta.jsonld)         | object                                            | Metadata associated with this item.                                 | [Entity](../Other/Entity.md) |
| noteType    | [stencila:noteType](https://schema.stenci.la/noteType.jsonld) | 'Footnote', 'Endnote', 'Sidenote'                 | Determines where the note content is displayed within the document. | [Note](../Prose/Note.md)     |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  A note is usually associated with a word or paragraph using a number or other symbol. 
    It can be displayed as a footnote, endnote, or side note, or in interactive elements. For analogues, see 
2.  **content** : Most notes will have a single paragraph but could have multiple paragraphs, tables and even figures.
3.  Available as [JSON-LD](https://schema.stenci.la/Note.jsonld).
4.  Available as [JSON Schema](https://schema.stenci.la/v1/Note.schema.json).
5.  This documentation was generated from [Note.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Note.schema.yaml).
