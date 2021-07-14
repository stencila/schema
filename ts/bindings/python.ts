/**
 * Generate Python language bindings.
 */

import { strict as assert } from 'assert'
import crypto from 'crypto'
import fs from 'fs-extra'
import path from 'path'
import {
  autogeneratedHeader,
  filterInterfaceSchemas,
  filterUnionSchemas,
  filterEnumSchemas,
  getSchemaProperties,
  readSchemas,
} from '../util/helpers'
import { JsonSchema } from '../JsonSchema'

const MAX_LINE_LENGTH = 75 // Desired max length - 4 to allow for indent

/**
 * Run `build()` when this file is run as a Node script
 */
// eslint-disable-next-line @typescript-eslint/no-floating-promises
if (require.main) build()

/**
 * A list of global definitions required for enums
 */
let globals: string[] = []

/**
 * Mapping between an enum signature (MD5 unique ID) and index
 */
const enumSignatures: Record<string, number> = {}

/**
 * Generate `python/types.py` from schemas.
 */
async function build(): Promise<void> {
  const schemas = await readSchemas()

  globals = []
  const classesCode = filterInterfaceSchemas(schemas)
    .map(classGenerator)
    .join('\n\n')
  const enumsCode = filterEnumSchemas(schemas).map(enumGenerator).join('\n\n')
  const unionsCode = filterUnionSchemas(schemas)
    .map(unionGenerator)
    .join('\n\n')
  const globalsCode = globals.join('\n')

  const code = `${autogeneratedHeader(
    'build:python',
    path.basename(__filename),
    '#'
  )}
"""Python classes for schema types."""

# List is imported as Array to avoid conflict with the schema's List type
from typing import Any, Dict, List as Array, Optional, Union
from enum import Enum

Null = None
Boolean = bool
Number = float
Integer = int
String = str
Object = Dict[str, Any]

${globalsCode}

${classesCode}

${enumsCode}

${unionsCode}
`

  await fs.writeFile(
    path.join(
      __dirname,
      '..',
      '..',
      'python',
      'stencila',
      'schema',
      'types.py'
    ),
    code
  )
}

/**
 * Split a description into lines < MAX_LINE_LENGTH for PEP8 compliance.
 * @param description
 */
function formatDocstring(description: string): string {
  const lines: string[] = []
  description = description.replace('\n', ' ').trim()

  while (description.length > MAX_LINE_LENGTH) {
    let splitIndex = MAX_LINE_LENGTH
    for (; splitIndex > 0; --splitIndex) {
      if (description.substr(splitIndex, 1) === ' ') {
        lines.push(description.substring(0, splitIndex))
        description = description.substring(splitIndex + 1)
        break
      }
    }
    if (splitIndex === 0) {
      // reached the end without finding a space, split in the middle of word if we have to
      description = description.substring(0, MAX_LINE_LENGTH)
      if (description.length > MAX_LINE_LENGTH) {
        // not at the end so push here and continue trimming
        lines.push(description)
      }
    }
  }
  lines.push(description)
  return lines.join('\n    ')
}

/**
 * Generate a `class`.
 */
export function classGenerator(schema: JsonSchema): string {
  const { title, extends: parent, description } = schema
  assert(title !== undefined)

  const { inherited, own, required, optional } = getSchemaProperties(schema)

  const base = parent !== undefined ? '(' + parent + ')' : ''

  let docString = ''
  if (description !== undefined) {
    const formattedDescription = formatDocstring(description)
    if (formattedDescription.length <= MAX_LINE_LENGTH - 6) {
      docString = `    """${formattedDescription}"""\n\n` // docstring should fit on one line if it can
    } else {
      docString = `    """\n    ${formattedDescription}\n    """\n\n`
    }
  }

  const clas = `class ${title}${base}:\n${docString}`

  const attrs = own
    .map(({ name, schema, optional, override }) => {
      const type = schemaToType(schema)
      const attrType =
        (optional ? `Optional[${type}] = None` : type) +
        (override ? ' # type: ignore' : '')
      const { description = name } = schema
      return `    ${name}: ${attrType}\n    """${description}"""\n`
    })
    .join('\n')

  const initPars =
    '\n' +
    [
      '        self',
      ...required.map(
        ({ name, schema }) => `        ${name}: ${schemaToType(schema)}`
      ),
      ...optional.map(
        ({ name, schema }) =>
          `        ${name}: Optional[${schemaToType(schema)}] = None`
      ),
    ].join(',\n') +
    '\n    '

  const superArgs =
    '\n' +
    inherited.map(({ name }) => `            ${name}=${name}`).join(',\n') +
    '\n        '
  const superCall = `        super().__init__(${superArgs})`

  const initSetters = own
    .map(
      ({ name }) =>
        `        if ${name} is not None:\n            self.${name} = ${name}`
    )
    .join('\n')

  const init = `    def __init__(${initPars}) -> None:\n${superCall}\n${initSetters}`

  return clas + (attrs.length > 0 ? attrs + '\n\n' : '') + init + '\n'
}

/**
 * Generate a Python `Enum` class.
 */
export function enumGenerator(schema: JsonSchema): string {
  const { title = '', description = title, anyOf = [] } = schema
  return `class ${title}(Enum):
    """
    ${formatDocstring(description)}
    """${anyOf
      .map(
        ({ description = '', const: const_ = '' }) => `
    # ${description}
    ${const_ as string} = "${const_ as string}"
`
      )
      .join('')}
`
}

/**
 * Generate a `Union` type.
 */
export function unionGenerator(schema: JsonSchema): string {
  const { title = '', description } = schema
  let code = ''
  if (description !== undefined) {
    code += `"""\n${formatDocstring(description)}\n"""\n`
  }
  code += `${title} = ${schemaToType(schema)}\n`
  return code
}

/**
 * Convert a schema definition to a Python type.
 *
 * To avoid cyclic type definitions in MyPy, the type `Node` is converted
 * to a Python `Any`. See https://github.com/python/mypy/issues/731
 */
function schemaToType(schema: JsonSchema): string {
  const { type, anyOf, allOf, $ref } = schema

  if ($ref !== undefined) {
    const title = $ref.replace('.schema.json', '')
    if (title === 'Null') return 'None'
    else if (title === 'Node') return 'Any'
    else return `"${title}"`
  }

  if (anyOf !== undefined) return anyOfToType(anyOf)
  if (allOf !== undefined) return allOfToType(allOf)
  if (schema.enum !== undefined) return enumToType(schema['@id'], schema.enum)

  if (type === 'null') return 'Null'
  if (type === 'boolean') return 'Boolean'
  if (type === 'number') return 'Number'
  if (type === 'integer') return 'Integer'
  if (type === 'string') return 'String'
  if (type === 'array') return arrayToType(schema)
  if (type === 'object') return 'Object'

  throw new Error(`Unhandled schema: ${JSON.stringify(schema)}`)
}

/**
 * Convert a schema with the `anyOf` property to a Python `Union` type.
 */
function anyOfToType(anyOf: JsonSchema[]): string {
  const types = anyOf
    .map((schema) => schemaToType(schema))
    .reduce(
      (prev: string[], curr) => (prev.includes(curr) ? prev : [...prev, curr]),
      []
    )
  if (types.length === 0) return ''
  if (types.length === 1) return types[0]
  return `Union[${types.join(', ')}]`
}

/**
 * Convert a schema with the `allOf` property to a Python type.
 *
 * If the `allOf` is singular then just use that (this usually arises
 * because the `allOf` is used for a property with a `$ref`). Otherwise,
 * use the last schema (this is usually because one or more codecs can be
 * used on a property and the last schema is the final, expected, type of
 * the property).
 */
function allOfToType(allOf: JsonSchema[]): string {
  if (allOf.length === 1) return schemaToType(allOf[0])
  else return schemaToType(allOf[allOf.length - 1])
}

/**
 * Convert a schema with the `array` property to a Python `Array` type.
 */
function arrayToType(schema: JsonSchema): string {
  const items = Array.isArray(schema.items)
    ? anyOfToType(schema.items)
    : schema.items !== undefined
    ? schemaToType(schema.items)
    : 'Any'
  return `Array[${items}]`
}

/**
 * Convert a schema with the `enum` property to a Python `Enum`.
 */
export function enumToType(
  id: string | undefined,
  enu: (string | number)[]
): string {
  const splitId = (id !== undefined ? id : '').split(':')
  let enumName = splitId[splitId.length - 1]
  enumName = enumName.charAt(0).toUpperCase() + enumName.slice(1)

  const values = enu
    .map((schema) => {
      return JSON.stringify(schema)
    })
    .join(', ')
  const signature = crypto.createHash('md5').update(values).digest('hex')

  const enumIndex = Object.keys(enumSignatures).length
  let enumExists = false

  if (enumSignatures[signature] !== undefined) {
    enumExists = true
  } else {
    enumSignatures[signature] = enumIndex
  }

  if (!enumExists) {
    const defn = `E${enumName} = Enum("${enumName}", [${values}])\n`

    if (!globals.includes(defn)) globals.push(defn)
  }

  return `"E${enumName}"`
}
