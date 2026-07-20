import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

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
export type TextFieldRenderIf =
  | TextRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Text Field Config and Type
// ============================================================================

/**
 * F0 config options specific to text fields
 */
export interface F0TextConfig {
  /**
   * Input type. `"private"` is a non-HTML F0 subtype for sensitive,
   * non-credential data — masked like a password but with no lock icon, an
   * eye toggle, and password managers disabled.
   */
  inputType?: "text" | "email" | "password" | "tel" | "url" | "private"
}

/**
 * Text field with all properties for rendering
 */
export type F0TextField = F0BaseField &
  F0TextConfig & {
    type: "text"
    /** Whether the field can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: TextFieldRenderIf
  }
