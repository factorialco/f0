import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"
import type { F0FormSetValueOptions } from "../../useF0Form"

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
  | F0BaseFieldRenderIfFunction

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
 * Imperative form helpers exposed to money onValueChange callbacks.
 */
export interface F0MoneyFieldFormController {
  /** Get all current form values */
  getValues: () => Record<string, unknown>
  /** Set a specific field value */
  setValue: (
    fieldName: string,
    value: unknown,
    options?: F0FormSetValueOptions
  ) => void
  /** Trigger validation for one field or the whole form */
  trigger: (fieldName?: string) => Promise<boolean>
}

/**
 * Context passed to money onValueChange callbacks.
 */
export interface F0MoneyFieldOnValueChangeContext {
  /** New value produced by the money input */
  value: number | null
  /** Current form values after the change */
  values: Record<string, unknown>
  /** Imperative form helpers */
  form: F0MoneyFieldFormController
}

/**
 * Callback for money field value changes.
 */
export type F0MoneyFieldOnValueChange = (
  context: F0MoneyFieldOnValueChangeContext
) => void

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
    /** Maximum decimal places (0 for integers, derived from z.number().int()) */
    maxDecimals?: number
    /** Units suffix shown inside the input (e.g. "%") */
    units?: string
    /** Called when a money field value changes */
    onValueChange?: F0MoneyFieldOnValueChange
    /**
     * When false, the field bypasses RHF's immediate validation on change.
     * Product code must call `form.trigger()` manually to validate.
     * @default true
     */
    validateOnChange?: boolean
    /** Whether the field can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: NumberFieldRenderIf
  }
