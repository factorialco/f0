import { z, ZodTypeAny } from "zod"

import type { NumberFieldDefinition } from "./types"

/**
 * Build a number field schema with min/max/step validations
 */
export function buildNumberFieldSchema(
  field: NumberFieldDefinition
): ZodTypeAny {
  let schema = z.number()

  // Validate minimum value
  if (field.min !== undefined) {
    schema = schema.min(field.min, {
      message: `Value must be at least ${field.min}`,
    })
  }

  // Validate maximum value
  if (field.max !== undefined) {
    schema = schema.max(field.max, {
      message: `Value must be at most ${field.max}`,
    })
  }

  // Validate step (must be divisible by step)
  if (field.step !== undefined && field.step > 0) {
    schema = schema.multipleOf(field.step, {
      message: `Value must be a multiple of ${field.step}`,
    })
  }

  return schema
}
