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
 * Check kinds that imply a non-empty string is required
 * These validations will fail on empty strings
 */
const NON_EMPTY_CHECK_KINDS = new Set([
  "min", // .min(n) where n >= 1
  "email", // .email()
  "url", // .url()
  "uuid", // .uuid()
  "cuid", // .cuid()
  "cuid2", // .cuid2()
  "ulid", // .ulid()
  "regex", // .regex() - typically requires content
  "includes", // .includes() - requires the substring
  "startsWith", // .startsWith()
  "endsWith", // .endsWith()
])

/**
 * Check if a string schema requires non-empty content
 */
function hasNonEmptyConstraint(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  if (!isZodType(inner, "ZodString")) {
    return false
  }
  // Check for constraints that require non-empty content
  const checks = inner._def.checks || []
  return checks.some((check: { kind: string; value?: number }) => {
    // For min, only count if value >= 1
    if (check.kind === "min") {
      return (check.value ?? 0) >= 1
    }
    // Other checks implicitly require non-empty content
    return NON_EMPTY_CHECK_KINDS.has(check.kind)
  })
}

/**
 * Determine if a field should be marked as required (show asterisk).
 *
 * - Optional/nullable fields are never required
 * - String fields are required if they have constraints that need non-empty content
 *   (min >= 1, email, url, uuid, etc.)
 * - Rich text object schemas are not required if their "value" property is nullable
 * - Other field types are required if not optional/nullable
 *
 * @example
 * ```ts
 * isFieldRequired(z.string()) // false - empty string is valid
 * isFieldRequired(z.string().min(1)) // true - needs at least 1 char
 * isFieldRequired(z.string().url()) // true - needs valid URL
 * isFieldRequired(z.string().email()) // true - needs valid email
 * isFieldRequired(z.string().optional()) // false - optional
 * isFieldRequired(z.number()) // true - required
 * isFieldRequired(z.number().optional()) // false - optional
 * isFieldRequired(z.object({ value: z.string().nullable() })) // false - rich text with nullable value
 * isFieldRequired(z.object({ value: z.string().min(1) })) // true - rich text with required value
 * ```
 */
export function isFieldRequired(schema: ZodTypeAny): boolean {
  // Optional/nullable fields are never required
  if (isOptionalOrNullable(schema)) {
    return false
  }

  const inner = unwrapZodSchema(schema)

  // For string fields, required if there's a constraint requiring non-empty content
  if (isZodType(inner, "ZodString")) {
    return hasNonEmptyConstraint(schema)
  }

  // For object schemas (like rich text), check the "value" property
  if (isZodType(inner, "ZodObject")) {
    const shape = inner._def.shape()
    if (shape && "value" in shape) {
      // If the value property is nullable/optional, the field is not required
      if (isOptionalOrNullable(shape.value)) {
        return false
      }
      // If the value property is a string, require a non-empty constraint (e.g. min(1))
      if (isZodType(unwrapZodSchema(shape.value), "ZodString")) {
        return hasNonEmptyConstraint(shape.value)
      }
    }
  }

  // Other types are required if not optional/nullable
  return true
}
