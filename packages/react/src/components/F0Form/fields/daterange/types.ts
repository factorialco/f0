import type { DatePreset } from "@/components/F0DatePicker"

import type { F0BaseField, CommonRenderIfCondition } from "../types"
import type { DateGranularity } from "../date/types"

// ============================================================================
// Date Range Field RenderIf Conditions
// ============================================================================

/**
 * Base for date range-specific conditions
 */
interface DateRangeRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to date range fields
 */
export type DateRangeRenderIfCondition = DateRangeRenderIfBase & {
  isEmpty: boolean
}

/**
 * All valid renderIf conditions for date range fields
 */
export type DateRangeFieldRenderIf =
  | DateRangeRenderIfCondition
  | CommonRenderIfCondition

// ============================================================================
// Date Range Field Config and Type
// ============================================================================

/**
 * The value type for a date range field
 */
export interface DateRangeValue {
  from: Date
  to: Date
}

/**
 * F0 config options specific to date range fields
 *
 * Note: `minDate`, `maxDate`, and `clearable` are derived from the Zod schema
 */
export interface F0DateRangeConfig {
  /** Label for the "from" date input */
  fromLabel?: string
  /** Label for the "to" date input */
  toLabel?: string
  /** Available granularities for the date picker */
  granularities?: DateGranularity[]
  /** Preset date options to display */
  presets?: DatePreset[]
}

/**
 * Date range field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0DateRangeField = F0BaseField &
  F0DateRangeConfig & {
    type: "daterange"
    /** Minimum selectable date (derived from z.date().min() on the from field) */
    minDate?: Date
    /** Maximum selectable date (derived from z.date().max() on the to field) */
    maxDate?: Date
    /** Whether the date range can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: DateRangeFieldRenderIf
  }
