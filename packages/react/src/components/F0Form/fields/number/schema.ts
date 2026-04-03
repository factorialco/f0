import { ZodTypeAny } from "zod"

import { isZodType, unwrapZodSchema } from "../../f0Schema"

/**
 * Constraints extracted from a number schema
 */
export interface NumberSchemaConstraints {
  min?: number
  max?: number
  isInteger?: boolean
}

/**
 * Extract min/max constraints from a number schema
 *
 * @example
 * ```ts
 * const schema = z.number().min(0).max(100)
 * const { min, max } = extractNumberConstraints(schema)
 * // min = 0, max = 100
 * ```
 */
export function extractNumberConstraints(
  schema: ZodTypeAny
): NumberSchemaConstraints {
  const innerSchema = unwrapZodSchema(schema)

  if (!isZodType(innerSchema, "ZodNumber")) {
    return {}
  }

  const checks = innerSchema._def.checks || []
  let min: number | undefined
  let max: number | undefined
  let isInteger = false

  for (const check of checks) {
    if (check.kind === "min") {
      min = check.value
    } else if (check.kind === "max") {
      max = check.value
    } else if (check.kind === "int") {
      isInteger = true
    }
  }

  return { min, max, isInteger }
}
