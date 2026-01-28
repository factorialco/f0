import type { BaseFieldDefinition } from "../types"

/**
 * Checkbox field definition (renders F0Checkbox component)
 */
export interface CheckboxFieldDefinition extends BaseFieldDefinition {
  type: "checkbox"
}
