import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Number Field RenderIf Conditions
// ============================================================================

/**
 * Base for number-specific conditions
 */
interface NumberRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to number fields
 */
export type NumberRenderIfCondition = NumberRenderIfBase &
  (
    | { equalsTo: number }
    | { notEqualsTo: number }
    | { greaterThan: number }
    | { greaterThanOrEqual: number }
    | { lowerThan: number }
    | { lowerThanOrEqual: number }
    | { isEmpty: boolean }
  )

/**
 * All valid renderIf conditions for number fields
 */
export type NumberFieldRenderIf =
  | NumberRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Number Field Config and Type
// ============================================================================

/**
 * F0 config options specific to number fields
 *
 * Note: `min` and `max` are derived from the Zod schema:
 * - `z.number().min(n)` → min
 * - `z.number().max(n)` → max
 */
export interface F0NumberConfig {
  /** Step value for the number input */
  step?: number
  /** Locale for number formatting */
  locale?: string
}

/**
 * Number field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0NumberField = F0BaseField &
  F0NumberConfig & {
    type: "number"
    /** Minimum value (derived from z.number().min()) */
    min?: number
    /** Maximum value (derived from z.number().max()) */
    max?: number
    /** Conditional rendering based on another field's value */
    renderIf?: NumberFieldRenderIf
  }
