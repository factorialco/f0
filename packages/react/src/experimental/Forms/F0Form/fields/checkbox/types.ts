import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Boolean Field RenderIf Conditions (shared by checkbox and switch)
// ============================================================================

/**
 * Base for boolean-specific conditions
 */
interface BooleanRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to boolean fields
 */
export type BooleanRenderIfCondition = BooleanRenderIfBase &
  ({ equalsTo: boolean } | { notEqualsTo: boolean } | { isEmpty: boolean })

/**
 * All valid renderIf conditions for checkbox fields
 */
export type CheckboxFieldRenderIf =
  | BooleanRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Checkbox Field Config and Type
// ============================================================================

/**
 * F0 config options specific to checkbox fields
 * (checkbox has no additional options beyond base config)
 */
export interface F0CheckboxConfig {
  // No additional options - using empty interface instead of Record<string, never>
  // to avoid intersection type issues
}

/**
 * Checkbox field with all properties for rendering
 */
export type F0CheckboxField = F0BaseField & {
  type: "checkbox"
  /** Conditional rendering based on another field's value */
  renderIf?: CheckboxFieldRenderIf
}
