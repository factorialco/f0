import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
  NumberRenderIfCondition,
} from "../types"

// ============================================================================
// AmountCalculator Field RenderIf Conditions
// ============================================================================

export type AmountCalculatorRenderIfCondition = NumberRenderIfCondition

export type AmountCalculatorFieldRenderIf =
  | AmountCalculatorRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// AmountCalculator Field Config and Type
// ============================================================================

export interface F0AmountCalculatorConfig {
  /** Units suffix shown inside the input (e.g. "%", "€") */
  units?: string
  /** Step value for the number input */
  step?: number
  /** Locale for number formatting (e.g. "en-US") */
  locale?: string
  /** Whether the field can be cleared */
  clearable?: boolean
  /**
   * CSS width of the inner input element.
   * "auto" (default) shrinks to content.
   */
  inputWidth?: string
  /**
   * Contextual text rendered to the right of the input (e.g. "of 300,00 €").
   * Note: in F0Form this is a static string, not a ReactNode.
   */
  extraContent?: string
  /** Whether the field is readonly */
  readonly?: boolean
}

export type F0AmountCalculatorField = F0BaseField &
  F0AmountCalculatorConfig & {
    type: "amountCalculator"
    /** Minimum value (derived from z.number().min()) */
    min?: number
    /** Maximum value (derived from z.number().max()) */
    max?: number
    /** Maximum decimal places (0 for integers, derived from z.number().int()) */
    maxDecimals?: number
    /** Conditional rendering based on another field's value */
    renderIf?: AmountCalculatorFieldRenderIf
  }
