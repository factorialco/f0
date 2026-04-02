import { ZodTypeAny } from "zod"

import { isZodType, unwrapZodSchema } from "../../f0Schema"

/**
 * Constraints extracted from a date schema
 */
export interface DateSchemaConstraints {
  minDate?: Date
  maxDate?: Date
}

/**
 * Extract min/max date constraints from a date schema
 *
 * @example
 * ```ts
 * const schema = z.date().min(new Date("2020-01-01")).max(new Date("2030-12-31"))
 * const { minDate, maxDate } = extractDateConstraints(schema)
 * ```
 */
export function extractDateConstraints(
  schema: ZodTypeAny
): DateSchemaConstraints {
  const innerSchema = unwrapZodSchema(schema)

  if (!isZodType(innerSchema, "ZodDate")) {
    return {}
  }

  const checks = innerSchema._def.checks || []
  let minDate: Date | undefined
  let maxDate: Date | undefined

  for (const check of checks) {
    if (check.kind === "min") {
      minDate = new Date(check.value)
    } else if (check.kind === "max") {
      maxDate = new Date(check.value)
    }
  }

  return { minDate, maxDate }
}
