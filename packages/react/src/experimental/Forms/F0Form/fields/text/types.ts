import type { BaseFieldDefinition } from "../types"

/**
 * Text field definition (renders Input component)
 */
export interface TextFieldDefinition extends BaseFieldDefinition {
  type: "text"
  /** HTML input type (text, email, password, etc.) */
  inputType?: "text" | "email" | "password" | "tel" | "url"
}
