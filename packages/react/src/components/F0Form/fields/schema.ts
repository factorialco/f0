import { ZodTypeAny } from "zod"

import { isZodType, unwrapZodSchema } from "../f0Schema"

/**
 * Unwrap optional, nullable, default wrappers to get the inner schema
 * @deprecated Use unwrapZodSchema from f0Schema instead
 */
export const unwrapSchema = unwrapZodSchema

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
    isZodType(schema, "ZodOptional") ||
    isZodType(schema, "ZodNullable") ||
    (isZodType(schema, "ZodDefault") &&
      isOptionalOrNullable(schema._def.innerType))
  )
}
