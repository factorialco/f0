import { z, ZodTypeAny } from "zod"

/**
 * Unwrap optional, nullable, default wrappers to get the inner schema
 */
export function unwrapSchema(schema: ZodTypeAny): ZodTypeAny {
  let innerSchema = schema
  while (
    innerSchema instanceof z.ZodOptional ||
    innerSchema instanceof z.ZodNullable ||
    innerSchema instanceof z.ZodDefault
  ) {
    innerSchema = innerSchema._def.innerType
  }
  return innerSchema
}

/**
 * Check if schema is optional or nullable (for clearable fields)
 *
 * @example
 * ```ts
 * isOptionalOrNullable(z.string().optional()) // true
 * isOptionalOrNullable(z.string().nullable()) // true
 * isOptionalOrNullable(z.string()) // false
 * ```
 */
export function isOptionalOrNullable(schema: ZodTypeAny): boolean {
  return (
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    (schema instanceof z.ZodDefault &&
      isOptionalOrNullable(schema._def.innerType))
  )
}
