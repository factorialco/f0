import { ZodTypeAny } from "zod"

import { isZodType, unwrapZodSchema } from "../f0Schema"

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

/**
 * Check if a string schema has a minimum length constraint >= 1
 */
function hasMinLengthConstraint(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  if (!isZodType(inner, "ZodString")) {
    return false
  }
  // Check for min length in the string's checks array
  const checks = inner._def.checks || []
  return checks.some(
    (check: { kind: string; value?: number }) =>
      check.kind === "min" && (check.value ?? 0) >= 1
  )
}

/**
 * Determine if a field should be marked as required (show asterisk).
 *
 * - Optional/nullable fields are never required
 * - String fields are only required if they have .min(1) or greater
 * - Other field types are required if not optional/nullable
 *
 * @example
 * ```ts
 * isFieldRequired(z.string()) // false - empty string is valid
 * isFieldRequired(z.string().min(1)) // true - needs at least 1 char
 * isFieldRequired(z.string().optional()) // false - optional
 * isFieldRequired(z.number()) // true - required
 * isFieldRequired(z.number().optional()) // false - optional
 * ```
 */
export function isFieldRequired(schema: ZodTypeAny): boolean {
  // Optional/nullable fields are never required
  if (isOptionalOrNullable(schema)) {
    return false
  }

  const inner = unwrapZodSchema(schema)

  // For string fields, only required if min length >= 1
  if (isZodType(inner, "ZodString")) {
    return hasMinLengthConstraint(schema)
  }

  // Other types are required if not optional/nullable
  return true
}
