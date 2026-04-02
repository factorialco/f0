import type { F0MoreInfoLink } from "../../f0Schema"
import type { BooleanRenderIfCondition } from "../checkbox/types"
import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

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
  /**
   * When false, prevents this switch from being grouped with adjacent switches
   * into a single bordered container. Renders as a standalone field instead.
   * @default true
   */
  grouped?: boolean
}

/**
 * Switch field with all properties for rendering
 */
export type F0SwitchField = F0BaseField & {
  type: "switch"
  /** Link displayed below the help text, typically pointing to external documentation */
  moreInfoLink?: F0MoreInfoLink
  /** When false, renders as a standalone field instead of grouping with adjacent switches */
  grouped?: boolean
  /** Conditional rendering based on another field's value */
  renderIf?: SwitchFieldRenderIf
}
