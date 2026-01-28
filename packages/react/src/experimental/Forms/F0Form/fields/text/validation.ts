import { z, ZodTypeAny } from "zod"

import type { TextFieldDefinition } from "./types"

/**
 * Build a text field schema with validations based on inputType
 */
export function buildTextFieldSchema(field: TextFieldDefinition): ZodTypeAny {
  let schema = z.string()

  // Add email validation for email input type
  if (field.inputType === "email") {
    schema = schema.email({ message: "Invalid email address" })
  }

  // Add URL validation for url input type
  if (field.inputType === "url") {
    schema = schema.url({ message: "Invalid URL" })
  }

  return schema
}
