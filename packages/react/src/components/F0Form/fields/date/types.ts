import type { DatePreset } from "@/components/F0DatePicker"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

/**
 * Valid granularity keys for date pickers
 */
export type DateGranularity =
  | "day"
  | "week"
  | "month"
  | "quarter"
  | "halfyear"
  | "year"
  | "range"

// ============================================================================
// Date Field RenderIf Conditions
// ============================================================================

/**
 * Base for date-specific conditions
 */
interface DateRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to date fields
 */
export type DateRenderIfCondition = DateRenderIfBase &
  (
    | { equalsTo: Date }
    | { notEqualsTo: Date }
    | { greaterThan: Date }
    | { greaterThanOrEqual: Date }
    | { lowerThan: Date }
    | { lowerThanOrEqual: Date }
    | { isEmpty: boolean }
  )

/**
 * All valid renderIf conditions for date fields
 */
export type DateFieldRenderIf = DateRenderIfCondition | CommonRenderIfCondition

// ============================================================================
// Date Field Config and Type
// ============================================================================

/**
 * F0 config options specific to date fields
 *
 * Note: `minDate`, `maxDate`, and `clearable` are derived from the Zod schema:
 * - `z.date().min(date)` → minDate
 * - `z.date().max(date)` → maxDate
 * - `z.date().optional()` or `z.date().nullable()` → clearable
 */
export interface F0DateConfig {
  /** Available granularities for the date picker */
  granularities?: DateGranularity[]
  /** Preset date options to display */
  presets?: DatePreset[]
}

/**
 * Date field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0DateField = F0BaseField &
  F0DateConfig & {
    type: "date"
    /** Minimum selectable date (derived from z.date().min()) */
    minDate?: Date
    /** Maximum selectable date (derived from z.date().max()) */
    maxDate?: Date
    /** Whether the date can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: DateFieldRenderIf
  }
