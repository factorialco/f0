import { z, ZodTypeAny } from "zod"

import type { TextareaFieldDefinition } from "./types"

/**
 * Build a textarea field schema with maxLength validation
 */
export function buildTextareaFieldSchema(
  field: TextareaFieldDefinition
): ZodTypeAny {
  let schema = z.string()

  // Validate maximum length
  if (field.maxLength !== undefined) {
    schema = schema.max(field.maxLength, {
      message: `Text must be at most ${field.maxLength} characters`,
    })
  }

  return schema
}
