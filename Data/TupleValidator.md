---
custom_edit_url: >-
  https://github.com/stencila/schema/edit/master/schema/TupleValidator.schema.yaml
---

# TupleValidator

A validator specifying constraints on an array of heterogeneous items.

## Properties

| Name     | @id                                                          | Type                                                 | Description                                                                             | Inherited from                              |
| -------- | ------------------------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| **type** | [schema:type](https://schema.org/type)                       | 'TupleValidator'                                     | The name of the type.                                                                   | [Entity](../Other/Entity.md)                |
| id       | [schema:id](https://schema.org/id)                           | string                                               | The identifier for this item.                                                           | [Entity](../Other/Entity.md)                |
| items    | [schema:itemListElement](https://schema.org/itemListElement) | Array of [ValidatorTypes](../Data/ValidatorTypes.md) | An array of validators specifying the constraints on each successive item in the array. | [TupleValidator](../Data/TupleValidator.md) |
| meta     | [stencila:meta](https://schema.stenci.la/meta.jsonld)        | object                                               | Metadata associated with this item.                                                     | [Entity](../Other/Entity.md)                |

## Related

-   Parent: [Validator](../Data/Validator.md)
-   Descendants: None

## Notes

1.  Available as [JSON-LD](https://schema.stenci.la/TupleValidator.jsonld).
2.  Available as [JSON Schema](https://schema.stenci.la/v1/TupleValidator.schema.json).
3.  This documentation was generated from [TupleValidator.schema.yaml](https://github.com/stencila/schema/blob/master/schema/TupleValidator.schema.yaml).
