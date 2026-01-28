import { z, ZodTypeAny } from "zod"

import type { SelectFieldDefinition } from "./types"

/**
 * Build a select field schema with options validation
 */
export function buildSelectFieldSchema(
  field: SelectFieldDefinition
): ZodTypeAny {
  // Extract valid option values, filtering out separators
  const validValues = field.options
    .filter(
      (opt): opt is Exclude<typeof opt, { type: "separator" }> =>
        !("type" in opt && opt.type === "separator")
    )
    .map((opt) => opt.value)

  if (field.multiple) {
    // For multiple select, validate array of strings against valid options
    return z
      .array(z.string())
      .refine((values) => values.every((val) => validValues.includes(val)), {
        message: "Invalid selection",
      })
  }

  // For single select, validate string against valid options
  // If clearable, allow empty string or undefined
  if (field.clearable) {
    return z
      .string()
      .optional()
      .refine(
        (val) => val === undefined || val === "" || validValues.includes(val),
        {
          message: "Invalid selection",
        }
      )
  }

  return z.string().refine((val) => validValues.includes(val), {
    message: "Invalid selection",
  })
}
