---
category: Data
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Date.schema.yaml
---

# Date

A date encoded as a ISO 8601 string.

This type is an extension of [schema:Date](https://schema.org/Date).

## Properties

| Name      | @id                                                   | Type                                              | Description                         | Inherited from      |
| --------- | ----------------------------------------------------- | ------------------------------------------------- | ----------------------------------- | ------------------- |
| **value** | [schema:value](https://schema.org/value)              | Format 'date-time' _or_ Format 'date' _or_ string | The date as an ISO 8601 string.     | [Date](Date.md)     |
| id        | [schema:id](https://schema.org/id)                    | string                                            | The identifier for this item.       | [Entity](Entity.md) |
| meta      | [stencila:meta](https://schema.stenci.la/meta.jsonld) | object                                            | Metadata associated with this item. | [Entity](Entity.md) |

## Related

-   Parent: [Entity](Entity.md)
-   Descendants: None

## Notes

1.  This type serves mainly to disambiguate an ISO 8601 date string from a plain string. It should generally be used instead of a date formatted string.

## Available as

-   [JSON-LD](https://schema.stenci.la/Date.jsonld)
-   [JSON Schema](https://schema.stenci.la/v1/Date.schema.json)
-   [Python class](https://stencila.github.io/schema/py/docs/types.html#schema.types.Date)
-   [TypeScript class](https://stencila.github.io/schema/ts/docs/interfaces/date.html)
-   [R class](https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf)

## Source

This documentation was generated from [Date.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Date.schema.yaml).
