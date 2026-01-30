import { z, ZodTypeAny } from "zod"

import { unwrapSchema } from "../schema"

/**
 * Constraints extracted from a string schema (for textarea)
 */
export interface TextareaSchemaConstraints {
  maxLength?: number
}

/**
 * Extract maxLength constraint from a string schema
 *
 * @example
 * ```ts
 * const schema = z.string().max(500)
 * const { maxLength } = extractTextareaConstraints(schema)
 * // maxLength = 500
 * ```
 */
export function extractTextareaConstraints(
  schema: ZodTypeAny
): TextareaSchemaConstraints {
  const innerSchema = unwrapSchema(schema)

  if (!(innerSchema instanceof z.ZodString)) {
    return {}
  }

  const checks = innerSchema._def.checks || []
  let maxLength: number | undefined

  for (const check of checks) {
    if (check.kind === "max") {
      maxLength = check.value
    }
  }

  return { maxLength }
}
