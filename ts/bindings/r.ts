/** `
 * Module for generating R language bindings.
 */

import fs from 'fs-extra'
import path from 'path'
import {
  autogeneratedHeader,
  filterInterfaceSchemas,
  filterUnionSchemas,
  getSchemaProperties,
  readSchemas,
  Schema,
} from '../helpers'

/**
 * Run `build()` when this file is run as a Node script
 */
// eslint-disable-next-line @typescript-eslint/no-floating-promises
if (module.parent === null) build()

/**
 * Generate `../../r/R/types.R` from schemas.
 */
async function build(): Promise<void> {
  const schemas = await readSchemas()

  const classesCode = filterInterfaceSchemas(schemas)
    .map(classGenerator)
    .join('\n')
  const unionsCode = filterUnionSchemas(schemas).map(unionGenerator).join('\n')

  const header = autogeneratedHeader('build:r', path.basename(__filename), '#')

  const code = `${header}

#' @include typing.R
NULL

${classesCode}

${unionsCode}
`

  await fs.writeFile(
    path.join(__dirname, '..', '..', 'r', 'R', 'types.R'),
    code
  )
}

/**
 * Generate a constructor function for a normal type.
 */
export function classGenerator(schema: Schema): string {
  const { title = 'Untitled', extends: parent, description = title } = schema
  const { all, inherited, own } = getSchemaProperties(schema)

  let code = docComment(description, [
    `@name ${title}`,
    ...all.map(
      ({ name, schema, optional }) =>
        `@param ${name} ${schema.description ?? ''} ${
          !optional ? `\\bold{Required}.` : ''
        }`
    ),
    ...(parent !== undefined ? [`@seealso \\code{\\link{${parent}}}`] : []),
    '@export',
  ])
  code += `${title} <- function(\n`
  code += all.map(({ name }) => `  ${name}`).join(',\n')
  code += `\n){\n`

  if (parent === undefined) {
    code += `  self <- list()\n`
  } else {
    code += `  self <- ${parent}(\n`
    code += inherited.map(({ name }) => `    ${name} = ${name}`).join(',\n')
    code += '\n  )\n'
  }

  code += `  self$type <- as_scalar("${title}")\n`

  code += own
    .map(({ name, optional, schema }) => {
      const type = schemaToType(schema)
      return `  self[["${name}"]] <- check_property("${title}", "${name}", ${
        optional ? 'FALSE' : 'TRUE'
      }, missing(${name}), ${type}, ${name})`
    })
    .join('\n')

  code += `\n  class(self) <- c(class(self), "${title}")`

  code += `\n  self`
  code += `\n}\n\n`

  return code
}

/**
 * Generate a `Union` type.
 */
export function unionGenerator(schema: Schema): string {
  const { title = '', description = title } = schema
  let code = docComment(description, ['@export'])
  code += `${title} <- ${schemaToType(schema)}\n\n`
  return code
}

/**
 * Generate a [roxygen](https://github.com/klutometis/roxygen) style
 * doc comments
 */
function docComment(description: string, tags: string[] = []): string {
  return (
    "#' " +
    description.trim().replace(/[\n\r]+/g, ' ') +
    '\n' +
    "#'\n" +
    tags.map((tag) => "#' " + tag.trim().replace(/[\n\r]+/g, ' ')).join('\n') +
    '\n'
  )
}

/**
 * Convert a schema definition to a R class
 */
function schemaToType(schema: Schema): string {
  const { type, anyOf, allOf, $ref } = schema

  if ($ref !== undefined) return `${$ref.replace('.schema.json', '')}`
  if (anyOf !== undefined) return anyOfToType(anyOf)
  if (allOf !== undefined) return allOfToType(allOf)
  if (schema.enum !== undefined) return enumToType(schema.enum)

  if (type === 'null') return '"NULL"'
  if (type === 'boolean') return '"logical"'
  if (type === 'number') return '"numeric"'
  if (type === 'integer') return '"numeric"'
  if (type === 'string') return '"character"'
  if (type === 'array') return arrayToType(schema)
  if (type === 'object') return '"list"'

  throw new Error(`Unhandled schema: ${JSON.stringify(schema)}`)
}

/**
 * Convert a schema with the `anyOf` property to a `Union` type checker.
 */
function anyOfToType(anyOf: Schema[]): string {
  const types = anyOf
    .map((schema) => schemaToType(schema))
    .reduce(
      (prev: string[], curr) => (prev.includes(curr) ? prev : [...prev, curr]),
      []
    )
  if (types.length === 0) return ''
  if (types.length === 1) return types[0]
  return `Union(${types.join(', ')})`
}

/**
 * Convert a schema with the `allOf` property to a type.
 */
function allOfToType(allOf: Schema[]): string {
  if (allOf.length === 1) return schemaToType(allOf[0])
  else return schemaToType(allOf[allOf.length - 1])
}

/**
 * Convert a schema with the `array` property to an `Array` type checker.
 */
function arrayToType(schema: Schema): string {
  const items = Array.isArray(schema.items)
    ? anyOfToType(schema.items)
    : schema.items !== undefined
    ? schemaToType(schema.items)
    : 'Any()'
  return `Array(${items})`
}

/**
 * Convert a schema with the `enum` property to an `Enum` type checker.
 */
export function enumToType(enu: (string | number)[]): string {
  const values = enu
    .map((schema) => {
      return JSON.stringify(schema)
    })
    .join(', ')
  return `Enum(${values})`
}
