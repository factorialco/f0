import type { F0MoreInfoLink } from "../../f0Schema"
import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"
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
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Switch Field Config and Type
// ============================================================================

/**
 * F0 config options specific to switch fields
 * (switch has no additional options beyond base config)
 */
export interface F0SwitchConfig {
  /**
   * Link displayed below the help text, typically pointing to external documentation.
   * @example
   * moreInfoLink: { href: "https://help.example.com/article", label: "Learn more" }
   */
  moreInfoLink?: F0MoreInfoLink
}

/**
 * Switch field with all properties for rendering
 */
export type F0SwitchField = F0BaseField & {
  type: "switch"
  /** Link displayed below the help text, typically pointing to external documentation */
  moreInfoLink?: F0MoreInfoLink
  /** Conditional rendering based on another field's value */
  renderIf?: SwitchFieldRenderIf
}
