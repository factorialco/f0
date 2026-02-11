import type { F0BaseField, CommonRenderIfCondition } from "../types"
import type { BooleanRenderIfCondition } from "../checkbox/types"

// ============================================================================
// Switch Field RenderIf Conditions
// Switch uses the same conditions as checkbox (boolean fields)
// ============================================================================

/**
 * All valid renderIf conditions for switch fields
 */
export type SwitchFieldRenderIf =
  | BooleanRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Switch Field Config and Type
// ============================================================================

/**
 * F0 config options specific to switch fields
 * (switch has no additional options beyond base config)
 */
export interface F0SwitchConfig {
  // No additional options - using empty interface instead of Record<string, never>
  // to avoid intersection type issues
}

/**
 * Switch field with all properties for rendering
 */
export type F0SwitchField = F0BaseField & {
  type: "switch"
  /** Conditional rendering based on another field's value */
  renderIf?: SwitchFieldRenderIf
}
