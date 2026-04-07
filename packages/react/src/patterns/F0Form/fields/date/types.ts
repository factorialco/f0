import type { DatePreset } from "@/components/F0DatePicker"

import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

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
// Dynamic Date Constraint Types
// ============================================================================

/**
 * Function type for dynamic date constraint evaluation based on form values.
 * Used for minDate/maxDate that depend on other field values.
 *
 * @example
 * ```ts
 * // End date must be after start date
 * minDate: ({ values }) => values.startDate
 * ```
 */
export type F0DateConstraintFunction = (context: {
  values: Record<string, unknown>
}) => Date | undefined

/**
 * Date constraint can be a static Date or a function that receives form values
 */
export type F0DateConstraintProp = Date | F0DateConstraintFunction

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
export type DateFieldRenderIf =
  | DateRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Date Field Config and Type
// ============================================================================

/**
 * F0 config options specific to date fields
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.date().optional()` or `z.date().nullable()` → clearable
 *
 * Static minDate/maxDate can also be derived from the Zod schema:
 * - `z.date().min(date)` → minDate
 * - `z.date().max(date)` → maxDate
 *
 * For dynamic constraints based on other fields, use function syntax:
 * @example
 * ```ts
 * endDate: f0FormField(z.date(), {
 *   label: "End Date",
 *   minDate: ({ values }) => values.startDate, // Dynamic: after start date
 * })
 * ```
 */
export interface F0DateConfig {
  /** Available granularities for the date picker */
  granularities?: DateGranularity[]
  /** Preset date options to display */
  presets?: DatePreset[]
  /**
   * Minimum selectable date.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   * Overrides z.date().min() if provided.
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
   * Overrides z.date().max() if provided.
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
 * Date field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0DateField = F0BaseField &
  F0DateConfig & {
    type: "date"
    /** Whether the date can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: DateFieldRenderIf
  }

// ============================================================================
// Time Field Config and Type
// ============================================================================

/**
 * F0 config options specific to time fields
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.string().optional()` or `z.string().nullable()` → clearable
 */
export interface F0TimeConfig {
  /**
   * Minimum selectable time.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   */
  minDate?: F0DateConstraintProp
  /**
   * Maximum selectable time.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   */
  maxDate?: F0DateConstraintProp
}

/**
 * Time field with all properties for rendering
 * Stores time as a Date object, displays as HH:mm format
 */
export type F0TimeField = F0BaseField &
  F0TimeConfig & {
    type: "time"
    /** Whether the time can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: DateFieldRenderIf
  }

// ============================================================================
// DateTime Field Config and Type
// ============================================================================

/**
 * F0 config options specific to datetime fields
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.date().optional()` or `z.date().nullable()` → clearable
 */
export interface F0DateTimeConfig {
  /** Granularities for the date picker portion */
  granularities?: DateGranularity[]
  /** Preset date options to display in the date picker */
  presets?: DatePreset[]
  /**
   * Minimum selectable datetime.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   * Overrides z.date().min() if provided.
   */
  minDate?: F0DateConstraintProp
  /**
   * Maximum selectable datetime.
   * Can be a static Date or a function that receives form values for dynamic constraints.
   * Overrides z.date().max() if provided.
   */
  maxDate?: F0DateConstraintProp
}

/**
 * DateTime field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0DateTimeField = F0BaseField &
  F0DateTimeConfig & {
    type: "datetime"
    /** Whether the datetime can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: DateFieldRenderIf
  }

// ============================================================================
// Resolved Field Types (after evaluating dynamic constraints)
// ============================================================================

/**
 * Date field after dynamic constraints have been evaluated.
 * Used internally by renderers.
 */
export type ResolvedDateField = Omit<
  F0DateField,
  "disabled" | "minDate" | "maxDate"
> & {
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}

/**
 * Time field after dynamic constraints have been evaluated.
 * Used internally by renderers.
 */
export type ResolvedTimeField = Omit<
  F0TimeField,
  "disabled" | "minDate" | "maxDate"
> & {
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}

/**
 * DateTime field after dynamic constraints have been evaluated.
 * Used internally by renderers.
 */
export type ResolvedDateTimeField = Omit<
  F0DateTimeField,
  "disabled" | "minDate" | "maxDate"
> & {
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}
