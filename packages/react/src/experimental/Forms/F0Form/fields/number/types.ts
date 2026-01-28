import type { BaseFieldDefinition } from "../types"

/**
 * Number field definition (renders NumberInput component)
 */
export interface NumberFieldDefinition extends BaseFieldDefinition {
  type: "number"
  /** Step value for the number input */
  step?: number
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Locale for number formatting */
  locale?: string
}
