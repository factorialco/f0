import type { BaseFieldDefinition } from "../types"

/**
 * Textarea field definition (renders Textarea component)
 */
export interface TextareaFieldDefinition extends BaseFieldDefinition {
  type: "textarea"
  /** Number of rows for the textarea */
  rows?: number
  /** Maximum character length */
  maxLength?: number
}
