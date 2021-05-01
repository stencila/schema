---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/CiteGroup.schema.yaml
---

# CiteGroup

A group of \`Cite\` nodes

## Properties

| Name      | @id                                                          | Type                              | Description                                                          | Inherited from                     |
| --------- | ------------------------------------------------------------ | --------------------------------- | -------------------------------------------------------------------- | ---------------------------------- |
| **items** | [schema:itemListElement](https://schema.org/itemListElement) | Array of [Cite](../Prose/Cite.md) | One or more \`Cite\`s to be referenced in the same surrounding text. | [CiteGroup](../Prose/CiteGroup.md) |
| **type**  | [schema:type](https://schema.org/type)                       | 'CiteGroup'                       | The name of the type.                                                | [Entity](../Other/Entity.md)       |
| id        | [schema:id](https://schema.org/id)                           | string                            | The identifier for this item.                                        | [Entity](../Other/Entity.md)       |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                            | Metadata associated with this item.                                  | [Entity](../Other/Entity.md)       |

## Related

-   Parent: [Entity](../Other/Entity.md)
-   Descendants: None

## Notes

1.  This type allows us to group associated citations together. At present we do not give a `citationMode` property to a `CiteGroup` since they will almost always be parenthetical as opposed to narrative. In other words, it usually only makes sense for individual `Cite` nodes to be narrative (although they may be connected together within `content` using words such as "and").
2.  Available as [JSON-LD](https://schema.stenci.la/CiteGroup.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/CiteGroup.schema.json).
4.  This documentation was generated from [CiteGroup.schema.yaml](https://github.com/stencila/schema/blob/master/schema/CiteGroup.schema.yaml).
