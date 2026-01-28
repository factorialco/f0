import { z, ZodTypeAny } from "zod"

import type { RichTextFieldDefinition } from "./types"

/**
 * Base schema for RichTextValue
 */
const baseRichTextValueSchema = z.object({
  value: z.string().nullable(),
  mentionIds: z.array(z.number()).optional(),
})

/**
 * Build a rich text field schema with maxCharacters validation
 */
export function buildRichTextFieldSchema(
  field: RichTextFieldDefinition
): ZodTypeAny {
  let schema: ZodTypeAny = baseRichTextValueSchema

  // Validate maximum characters (based on HTML length)
  if (field.maxCharacters !== undefined) {
    schema = schema.refine(
      (val) => {
        if (!val.value) return true
        // Strip HTML tags for character count
        const textContent = val.value.replace(/<[^>]*>/g, "")
        return textContent.length <= field.maxCharacters!
      },
      {
        message: `Content must be at most ${field.maxCharacters} characters`,
      }
    )
  }

  return schema
}
