import type { F0MoreInfoLink } from "../../f0Schema"
import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

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
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Checkbox Field Config and Type
// ============================================================================

/**
 * F0 config options specific to checkbox fields
 */
export interface F0CheckboxConfig {
  /**
   * Link displayed below the help text, typically pointing to external documentation.
   * @example
   * moreInfoLink: { href: "https://help.example.com/article", label: "Learn more" }
   */
  moreInfoLink?: F0MoreInfoLink
}

/**
 * Checkbox field with all properties for rendering
 */
export type F0CheckboxField = F0BaseField & {
  type: "checkbox"
  /** Link displayed below the help text, typically pointing to external documentation */
  moreInfoLink?: F0MoreInfoLink
  /** Conditional rendering based on another field's value */
  renderIf?: CheckboxFieldRenderIf
}
