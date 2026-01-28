import type { BaseFieldDefinition } from "../types"

/**
 * Toggle group option
 */
export interface ToggleOption {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Toggle group field definition (renders ToggleGroup component)
 */
export interface ToggleFieldDefinition extends BaseFieldDefinition {
  type: "toggle"
  /** Options for the toggle group */
  options: ToggleOption[]
  /** Toggle group variant */
  variant?: "default" | "outline"
}
