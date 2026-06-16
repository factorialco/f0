import type { DatePreset } from "@/components/F0DatePicker"
import type { DateStringFormat } from "@/components/OneCalendar/granularities/types"

import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"
import type { DateGranularity, F0DateConstraintProp } from "../date/types"

// ============================================================================
// Period Field RenderIf Conditions
// ============================================================================

/**
 * Base for period-specific conditions
 */
interface PeriodRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to period fields.
 * The value is a `DatePickerValue` object, so only `isEmpty` is meaningful
 * (same approach as date range fields).
 */
export type PeriodRenderIfCondition = PeriodRenderIfBase & {
  isEmpty: boolean
}

/**
 * All valid renderIf conditions for period fields
 */
export type PeriodFieldRenderIf =
  | PeriodRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Period Field Config and Type
// ============================================================================

/**
 * F0 config options specific to period fields.
 *
 * A period field reuses `F0DatePicker` exactly like the `date` field, but keeps
 * the full `DatePickerValue` (`{ value: { from, to }, granularity }`) as the
 * form value instead of collapsing it to a single `Date`. This lets a form
 * declare a real "period" selector (Year / Half year / Quarter / Month / Range).
 *
 * Note: `clearable` is derived from the Zod schema (optional/nullable).
 */
export interface F0PeriodConfig {
  /** Available granularities for the period picker */
  granularities?: DateGranularity[]
  /** Preset period options to display */
  presets?: DatePreset[]
  /**
   * Controls how the selected period is displayed in the input.
   * Defaults to "long" (e.g. "01 Aug 2025"). Use "default" for dd/MM/yyyy.
   */
  displayFormat?: DateStringFormat
  /**
   * Minimum selectable date.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   * @example
   * // Static constraint
   * minDate: new Date("2024-01-01")
   *
   * // Dynamic constraint based on another field
   * minDate: ({ values }) => values.startDate
   */
  minDate?: F0DateConstraintProp
  /**
   * Maximum selectable date.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   * @example
   * // Static constraint
   * maxDate: new Date("2025-12-31")
   *
   * // Dynamic constraint based on another field
   * maxDate: ({ values }) => values.endDate
   */
  maxDate?: F0DateConstraintProp
}

/**
 * Period field with all properties for rendering.
 * Includes properties derived from the Zod schema.
 */
export type F0PeriodField = F0BaseField &
  F0PeriodConfig & {
    type: "period"
    /** Whether the period can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: PeriodFieldRenderIf
  }

// ============================================================================
// Resolved Field Type (after evaluating dynamic constraints)
// ============================================================================

/**
 * Period field after dynamic constraints have been evaluated.
 * Used internally by the renderer.
 */
export type ResolvedPeriodField = Omit<
  F0PeriodField,
  "disabled" | "minDate" | "maxDate"
> & {
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}
