---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/InlineContent.schema.yaml
---

# InlineContent

Union type for valid inline content.

## Members

| @id                                                                                   | Type                                                     | Description                                                                                                 |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [schema:AudioObject](https://schema.org/AudioObject)                                  | [AudioObject](../media/AudioObject.md)                   | An audio file                                                                                               |
| [stencila:Cite](https://schema.stenci.la/Cite.jsonld)                                 | [Cite](../prose/Cite.md)                                 | A reference to a CreativeWork that is cited in another CreativeWork.                                        |
| [stencila:CiteGroup](https://schema.stenci.la/CiteGroup.jsonld)                       | [CiteGroup](../prose/CiteGroup.md)                       | A group of \`Cite\` nodes                                                                                   |
| [stencila:CodeExpression](https://schema.stenci.la/CodeExpression.jsonld)             | [CodeExpression](../code/CodeExpression.md)              | An expression defined in programming language source code.                                                  |
| [stencila:CodeFragment](https://schema.stenci.la/CodeFragment.jsonld)                 | [CodeFragment](../code/CodeFragment.md)                  | Inline code.                                                                                                |
| [stencila:Delete](https://schema.stenci.la/Delete.jsonld)                             | [Delete](../prose/Delete.md)                             | Content that is marked for deletion                                                                         |
| [stencila:Emphasis](https://schema.stenci.la/Emphasis.jsonld)                         | [Emphasis](../prose/Emphasis.md)                         | Emphasised content.                                                                                         |
| [schema:ImageObject](https://schema.org/ImageObject)                                  | [ImageObject](../media/ImageObject.md)                   | An image file.                                                                                              |
| [stencila:Link](https://schema.stenci.la/Link.jsonld)                                 | [Link](../prose/Link.md)                                 | A hyperlink to other pages, sections within the same document, resources, or any URL.                       |
| [stencila:MathFragment](https://schema.stenci.la/MathFragment.jsonld)                 | [MathFragment](../prose/MathFragment.md)                 | A fragment of math, e.g a variable name, to be treated as inline content.                                   |
| [schema:MediaObject](https://schema.org/MediaObject)                                  | [MediaObject](../media/MediaObject.md)                   | A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset.  |
| [stencila:NontextualAnnotation](https://schema.stenci.la/NontextualAnnotation.jsonld) | [NontextualAnnotation](../prose/NontextualAnnotation.md) | Inline text that has a non-textual annotation.                                                              |
| [stencila:Note](https://schema.stenci.la/Note.jsonld)                                 | [Note](../prose/Note.md)                                 | Additional content which is not part of the main content of a document.                                     |
| [stencila:Quote](https://schema.stenci.la/Quote.jsonld)                               | [Quote](../prose/Quote.md)                               | Inline, quoted content.                                                                                     |
| [stencila:Strong](https://schema.stenci.la/Strong.jsonld)                             | [Strong](../prose/Strong.md)                             | Strongly emphasised content.                                                                                |
| [stencila:Subscript](https://schema.stenci.la/Subscript.jsonld)                       | [Subscript](../prose/Subscript.md)                       | Subscripted content.                                                                                        |
| [stencila:Superscript](https://schema.stenci.la/Superscript.jsonld)                   | [Superscript](../prose/Superscript.md)                   | Superscripted content.                                                                                      |
| [schema:VideoObject](https://schema.org/VideoObject)                                  | [VideoObject](../media/VideoObject.md)                   | A video file.                                                                                               |
|                                                                                       | null                                                     |                                                                                                             |
|                                                                                       | boolean                                                  |                                                                                                             |
|                                                                                       | integer                                                  |                                                                                                             |
|                                                                                       | number                                                   |                                                                                                             |
|                                                                                       | string                                                   |                                                                                                             |

## Notes

1.  Note that this definition currently does not include `array` and `object` nodes (which are included in `Node`). This seems incongruent, and may be changed in the future. The order of these types is important because it determines the order of attempted coercion (particularly important for primitive types).
2.  Available as [JSON-LD](https://schema.stenci.la/undefined.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/InlineContent.schema.json).
4.  This documentation was generated from [InlineContent.schema.yaml](https://github.com/stencila/schema/blob/master/schema/InlineContent.schema.yaml).
