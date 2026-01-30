import type { F0BaseField, CommonRenderIfCondition } from "../types"

// ============================================================================
// Text Field RenderIf Conditions
// ============================================================================

/**
 * Base for text-specific conditions
 */
interface TextRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to text fields
 */
export type TextRenderIfCondition = TextRenderIfBase &
  (
    | { equalsTo: string }
    | { notEqualsTo: string }
    | { matches: RegExp }
    | { isEmpty: boolean }
  )

/**
 * All valid renderIf conditions for text fields
 */
export type TextFieldRenderIf = TextRenderIfCondition | CommonRenderIfCondition

// ============================================================================
// Text Field Config and Type
// ============================================================================

/**
 * F0 config options specific to text fields
 */
export interface F0TextConfig {
  /** HTML input type (text, email, password, etc.) */
  inputType?: "text" | "email" | "password" | "tel" | "url"
}

/**
 * Text field with all properties for rendering
 */
export type F0TextField = F0BaseField &
  F0TextConfig & {
    type: "text"
    /** Conditional rendering based on another field's value */
    renderIf?: TextFieldRenderIf
  }
