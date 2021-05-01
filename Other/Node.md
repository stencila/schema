---
custom_edit_url: https://github.com/stencila/schema/edit/master/schema/Node.schema.yaml
---

# Node

Union type for all valid nodes.

## Members

| @id                                                       | Type                         | Description                                                                     |
| --------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| [stencila:Entity](https://schema.stenci.la/Entity.jsonld) | [Entity](../Other/Entity.md) | The most simple compound (ie. non-atomic like \`number\`, \`string\` etc) type. |
|                                                           | null                         |                                                                                 |
|                                                           | boolean                      |                                                                                 |
|                                                           | integer                      |                                                                                 |
|                                                           | number                       |                                                                                 |
|                                                           | string                       |                                                                                 |
|                                                           | object                       |                                                                                 |
|                                                           | array                        |                                                                                 |

## Notes

1.  The order of these types is important because it determines the order of attempted coercion (ie. parsing and reshaping to arrays)
2.  Available as [JSON-LD](https://schema.stenci.la/undefined.jsonld).
3.  Available as [JSON Schema](https://schema.stenci.la/v1/Node.schema.json).
4.  This documentation was generated from [Node.schema.yaml](https://github.com/stencila/schema/blob/master/schema/Node.schema.yaml).
