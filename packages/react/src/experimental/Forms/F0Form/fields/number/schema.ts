import { z, ZodTypeAny } from "zod"

import { unwrapSchema } from "../schema"

/**
 * Constraints extracted from a number schema
 */
export interface NumberSchemaConstraints {
  min?: number
  max?: number
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
  const innerSchema = unwrapSchema(schema)

  if (!(innerSchema instanceof z.ZodNumber)) {
    return {}
  }

  const checks = innerSchema._def.checks || []
  let min: number | undefined
  let max: number | undefined

  for (const check of checks) {
    if (check.kind === "min") {
      min = check.value
    } else if (check.kind === "max") {
      max = check.value
    }
  }

  return { min, max }
}
