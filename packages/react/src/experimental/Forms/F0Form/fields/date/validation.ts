import { z, ZodTypeAny } from "zod"

import type { DateFieldDefinition } from "./types"

/**
 * Schema for DatePickerValue with optional refinements for date constraints
 */
const dateRangeCompleteSchema = z.object({
  from: z.date(),
  to: z.date(),
})

const baseDatePickerValueSchema = z.object({
  value: dateRangeCompleteSchema.optional(),
  granularity: z.string(),
})

/**
 * Build a date field schema with all applicable validations
 */
export function buildDateFieldSchema(field: DateFieldDefinition): ZodTypeAny {
  let schema: ZodTypeAny = baseDatePickerValueSchema

  // Validate granularity against allowed granularities
  if (field.granularities && field.granularities.length > 0) {
    schema = schema.refine(
      (val) =>
        val.granularity === undefined ||
        field.granularities!.includes(
          val.granularity as (typeof field.granularities)[number]
        ),
      {
        message: `Granularity must be one of: ${field.granularities.join(", ")}`,
      }
    )
  }

  // Validate minDate constraint
  if (field.minDate) {
    schema = schema.refine(
      (val) => {
        if (!val.value?.from) return true
        return val.value.from >= field.minDate!
      },
      {
        message: `Date must be on or after ${field.minDate.toLocaleDateString()}`,
      }
    )
  }

  // Validate maxDate constraint
  if (field.maxDate) {
    schema = schema.refine(
      (val) => {
        if (!val.value?.to) return true
        return val.value.to <= field.maxDate!
      },
      {
        message: `Date must be on or before ${field.maxDate.toLocaleDateString()}`,
      }
    )
  }

  return schema
}
