---
category: Code
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/SoftwareSourceCode.schema.yaml
---

# SoftwareSourceCode

Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. 

This type is an extension of [schema:SoftwareSourceCode](https://schema.org/SoftwareSourceCode).

## Properties

| Name                 | @id                                                                    | Type                                                                                                                  | Description                                                                                                              | Inherited from                              |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| about                | [schema:about](https://schema.org/about)                               | Array of [Thing](Thing.md)                                                                                            | The subject matter of the content. See note [7](#notes).                                                                 | [CreativeWork](CreativeWork.md)             |
| alternateNames       | [schema:alternateName](https://schema.org/alternateName)               | Array of string                                                                                                       | Alternate names (aliases) for the item.                                                                                  | [Thing](Thing.md)                           |
| authors              | [schema:author](https://schema.org/author)                             | Parser 'csi' _and_ Array of ([Person](Person.md) _or_ [Organization](Organization.md))                                | The authors of this creative work.                                                                                       | [CreativeWork](CreativeWork.md)             |
| codeRepository       | [schema:codeRepository](https://schema.org/codeRepository)             | Format 'uri'                                                                                                          | Link to the repository where the un-compiled, human readable code and related code is located.                           | [SoftwareSourceCode](SoftwareSourceCode.md) |
| codeSampleType       | [schema:codeSampleType](https://schema.org/codeSampleType)             | string                                                                                                                | What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.                   | [SoftwareSourceCode](SoftwareSourceCode.md) |
| comments             | [schema:comment](https://schema.org/comment)                           | Array of [Comment](Comment.md)                                                                                        | Comments about this creative work.                                                                                       | [CreativeWork](CreativeWork.md)             |
| content              | [stencila:content](https://schema.stenci.la/content.jsonld)            | Array of [Node](Node.md)                                                                                              | The structured content of this creative work c.f. property \`text\`.                                                     | [CreativeWork](CreativeWork.md)             |
| dateAccepted         | [stencila:dateAccepted](https://schema.stenci.la/dateAccepted.jsonld)  | [Date](Date.md)                                                                                                       | Date/time of acceptance. See note [3](#notes).                                                                           | [CreativeWork](CreativeWork.md)             |
| dateCreated          | [schema:dateCreated](https://schema.org/dateCreated)                   | [Date](Date.md)                                                                                                       | Date/time of creation.                                                                                                   | [CreativeWork](CreativeWork.md)             |
| dateModified         | [schema:dateModified](https://schema.org/dateModified)                 | [Date](Date.md)                                                                                                       | Date/time of most recent modification.                                                                                   | [CreativeWork](CreativeWork.md)             |
| datePublished        | [schema:datePublished](https://schema.org/datePublished)               | [Date](Date.md)                                                                                                       | Date of first publication.                                                                                               | [CreativeWork](CreativeWork.md)             |
| dateReceived         | [schema:dateReceived](https://schema.org/dateReceived)                 | [Date](Date.md)                                                                                                       | Date/time that work was received.                                                                                        | [CreativeWork](CreativeWork.md)             |
| description          | [schema:description](https://schema.org/description)                   | Array of [BlockContent](BlockContent.md) _or_ Array of [InlineContent](InlineContent.md) _or_ string                  | A description of the item. See note [2](#notes).                                                                         | [Thing](Thing.md)                           |
| editors              | [schema:editor](https://schema.org/editor)                             | Array of [Person](Person.md)                                                                                          | People who edited the \`CreativeWork\`.                                                                                  | [CreativeWork](CreativeWork.md)             |
| fundedBy             | [stencila:fundedBy](https://schema.stenci.la/fundedBy.jsonld)          | Array of ([Grant](Grant.md) _or_ [MonetaryGrant](MonetaryGrant.md))                                                   | Grants that funded the \`CreativeWork\`; reverse of \`fundedItems\`. See note [8](#notes).                               | [CreativeWork](CreativeWork.md)             |
| funders              | [schema:funder](https://schema.org/funder)                             | Array of ([Person](Person.md) _or_ [Organization](Organization.md))                                                   | People or organizations that funded the \`CreativeWork\`.                                                                | [CreativeWork](CreativeWork.md)             |
| genre                | [schema:genre](https://schema.org/genre)                               | Array of string                                                                                                       | Genre of the creative work, broadcast channel or group.                                                                  | [CreativeWork](CreativeWork.md)             |
| id                   | [schema:id](https://schema.org/id)                                     | string                                                                                                                | The identifier for this item.                                                                                            | [Entity](Entity.md)                         |
| identifiers          | [schema:identifier](https://schema.org/identifier)                     | Array of ([PropertyValue](PropertyValue.md) _or_ string)                                                              | Any kind of identifier for any kind of Thing. See note [4](#notes).                                                      | [Thing](Thing.md)                           |
| images               | [schema:image](https://schema.org/image)                               | Array of ([ImageObject](ImageObject.md) _or_ Format 'uri')                                                            | Images of the item.                                                                                                      | [Thing](Thing.md)                           |
| isPartOf             | [schema:isPartOf](https://schema.org/isPartOf)                         | [CreativeWorkTypes](CreativeWorkTypes.md)                                                                             | An item or other CreativeWork that this CreativeWork is a part of.                                                       | [CreativeWork](CreativeWork.md)             |
| keywords             | [schema:keywords](https://schema.org/keywords)                         | Parser 'csi' _and_ Array of string                                                                                    | Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.   | [CreativeWork](CreativeWork.md)             |
| licenses             | [schema:license](https://schema.org/license)                           | Array of ([CreativeWorkTypes](CreativeWorkTypes.md) _or_ Format 'uri')                                                | License documents that applies to this content, typically indicated by URL.                                              | [CreativeWork](CreativeWork.md)             |
| maintainers          | [schema:maintainer](https://schema.org/maintainer)                     | Array of ([Person](Person.md) _or_ [Organization](Organization.md))                                                   | The people or organizations who maintain this CreativeWork. See note [1](#notes).                                        | [CreativeWork](CreativeWork.md)             |
| meta                 | [stencila:meta](https://schema.stenci.la/meta.jsonld)                  | object                                                                                                                | Metadata associated with this item.                                                                                      | [Entity](Entity.md)                         |
| name                 | [schema:name](https://schema.org/name)                                 | string                                                                                                                | The name of the item.                                                                                                    | [Thing](Thing.md)                           |
| parts                | [schema:hasParts](https://schema.org/hasParts)                         | Array of [CreativeWorkTypes](CreativeWorkTypes.md)                                                                    | Elements of the collection which can be a variety of different elements, such as Articles, Datatables, Tables and more.  | [CreativeWork](CreativeWork.md)             |
| programmingLanguage  | [schema:programmingLanguage](https://schema.org/programmingLanguage)   | string                                                                                                                | The computer programming language.                                                                                       | [SoftwareSourceCode](SoftwareSourceCode.md) |
| publisher            | [schema:publisher](https://schema.org/publisher)                       | [Person](Person.md) _or_ [Organization](Organization.md)                                                              | A publisher of the CreativeWork.                                                                                         | [CreativeWork](CreativeWork.md)             |
| references           | [schema:citation](https://schema.org/citation)                         | Array of ([CreativeWorkTypes](CreativeWorkTypes.md) _or_ string)                                                      | References to other creative works, such as another publication, web page, scholarly article, etc.                       | [CreativeWork](CreativeWork.md)             |
| runtimePlatform      | [schema:runtimePlatform](https://schema.org/runtimePlatform)           | Array of string                                                                                                       | Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).                  | [SoftwareSourceCode](SoftwareSourceCode.md) |
| softwareRequirements | [schema:softwareRequirements](https://schema.org/softwareRequirements) | Array of ([SoftwareSourceCode](SoftwareSourceCode.md) _or_ [SoftwareApplication](SoftwareApplication.md) _or_ string) | Dependency requirements for the software.                                                                                | [SoftwareSourceCode](SoftwareSourceCode.md) |
| targetProducts       | [schema:targetProduct](https://schema.org/targetProduct)               | Array of [SoftwareApplication](SoftwareApplication.md)                                                                | Target operating system or product to which the code applies.                                                            | [SoftwareSourceCode](SoftwareSourceCode.md) |
| text                 | [schema:text](https://schema.org/text)                                 | string                                                                                                                | The textual content of this creative work.                                                                               | [CreativeWork](CreativeWork.md)             |
| title                | [schema:headline](https://schema.org/headline)                         | Array of [InlineContent](InlineContent.md) _or_ string                                                                | The title of the creative work. See note [5](#notes).                                                                    | [CreativeWork](CreativeWork.md)             |
| url                  | [schema:url](https://schema.org/url)                                   | Format 'uri'                                                                                                          | The URL of the item.                                                                                                     | [Thing](Thing.md)                           |
| version              | [schema:version](https://schema.org/version)                           | string _or_ number                                                                                                    | The version of the creative work. See note [6](#notes).                                                                  | [CreativeWork](CreativeWork.md)             |

## Related

-   Parent: [CreativeWork](CreativeWork.md)
-   Descendants: None

## Notes

1.  **maintainers** : A maintainer of a Dataset, SoftwareApplication, or other CreativeWork. A maintainer is a Person or Organization that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When maintainer is applied to a specific version of something e.g. a particular version or packaging of a Dataset, it is always possible that the upstream source has a different maintainer. The isBasedOn property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
2.  **description** : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The `minItems` restriction avoids a string being coerced into an array with a single string item.
3.  **dateAccepted** : This is not yet a schema.org property but the term is used [in Dublin Core](http://purl.org/dc/terms/dateAccepted).
4.  **identifiers** : Some identifiers have specific properties e.g the `issn` property for the `Periodical` type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a `PropertyValue` will usually be better because it allows for `propertyID` (i.e. the type of identifier).
5.  **title** : Allows for the title to include inline content (e.g `Strong`, `Math`) or a string. The title can not be block content e.g `Paragraph`. The `minItems` restriction avoids a string being coerced into an array with a single string item.
6.  **version** : In this case `string` is listed as an alternative before `number` to avoid semantic version numbers e.g. `1.0` being parsed, and subsequently encoded, as `1` thereby resulting in loss of information.
7.  **about** : Consistent with <https://schema.org/about>, this property allows for linking to one of more `Thing` nodes. This could for example include a `Person` (e.g for a bibliography) or a `DefinedTerm` (e.g. for subject areas the creative work relates to).
8.  **fundedBy** : This follows the proposal [here](https://github.com/schemaorg/schemaorg/issues/2258) for a property that is the reverse of `fundedItems`. It is an any because a `CreativeWork` may have been funded through more than one `Grant`.

## Available as

-   [JSON-LD](https://schema.stenci.la/SoftwareSourceCode.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/SoftwareSourceCode.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.SoftwareSourceCode)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/softwaresourcecode.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [SoftwareSourceCode.schema.yaml](https://github.com/stencila/schema/blob/master/schema/SoftwareSourceCode.schema.yaml).