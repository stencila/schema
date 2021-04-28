---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Date.schema.yaml
---

# Date

A date encoded as a ISO 8601 string.

## Properties

| Name      | @id                                                   | Type                                              | Description                         | Inherited from               |
| --------- | ----------------------------------------------------- | ------------------------------------------------- | ----------------------------------- | ---------------------------- |
| **type**  | [schema:type](https://schema.org/type)                | 'Date'                                            | The name of the type.               | [Entity](../other/Entity.md) |
| **value** | [schema:value](https://schema.org/value)              | Format 'date-time' _or_ Format 'date' _or_ string | The date as an ISO 8601 string.     | [Date](../data/Date.md)      |
| id        | [schema:id](https://schema.org/id)                    | string                                            | The identifier for this item.       | [Entity](../other/Entity.md) |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object                                            | Metadata associated with this item. | [Entity](../other/Entity.md) |

## Related

-   Parent: [Entity](../other/Entity.md)
-   Descendants: None

## Notes

1.  This type serves mainly to disambiguate an ISO 8601 date string from a plain string. It should generally be used instead of a date formatted string.
2.  Available as [JSON-LD](https://schema.stenci.la/Date.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Date.schema.json).
4.  This documentation was generated from [Date.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Date.schema.yaml).
