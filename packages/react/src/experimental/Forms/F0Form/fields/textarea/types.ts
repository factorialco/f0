import type { F0BaseField, CommonRenderIfCondition } from "../types"
import type { TextRenderIfCondition } from "../text/types"

// ============================================================================
// Textarea Field RenderIf Conditions
// Textarea uses the same conditions as text fields
// ============================================================================

/**
 * All valid renderIf conditions for textarea fields
 */
export type TextareaFieldRenderIf =
  | TextRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Textarea Field Config and Type
// ============================================================================

/**
 * F0 config options specific to textarea fields
 *
 * Note: `maxLength` is derived from the Zod schema:
 * - `z.string().max(n)` → maxLength
 */
export interface F0TextareaConfig {
  /** Number of rows for the textarea */
  rows?: number
}

/**
 * Textarea field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0TextareaField = F0BaseField &
  F0TextareaConfig & {
    type: "textarea"
    /** Maximum character length (derived from z.string().max()) */
    maxLength?: number
    /** Conditional rendering based on another field's value */
    renderIf?: TextareaFieldRenderIf
  }
