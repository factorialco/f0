/**
 * Represents a numeric value that can be formatted with optional units.
 *
 * The value can be provided in two formats:
 * - `value`: Direct numeric value (e.g., 123.45)
 * - `value_x100`: Value stored as integer multiplied by 100 (e.g., 12345 represents 123.45)
 *
 * @example
 * ```ts
 * // Direct value
 * const directValue: NumericValue = { value: 123.45, units: "€" }
 *
 * // Value stored as x100 (useful for avoiding floating point precision issues)
 * const x100Value: NumericValue = { value_x100: 12345, units: "€" }
 * ```
 */
export type NumericValue = {
  /**
   * Optional unit string to append or prepend to the formatted number.
   * Common examples: "€", "$", "kg", "%", etc.
   */
  units?: string
  /**
   * Position of the units relative to the number.
   * - "prepend": Units appear before the number (e.g., "$123.45")
   * - "append": Units appear after the number (e.g., "123.45€")
   *
   * @default "append"
   */
  unitsPosition?: "prepend" | "append"
} & (
  | {
      /**
       * Direct numeric value to format.
       */
      value: number | undefined
    }
  | {
      /**
       * Numeric value stored as an integer multiplied by 100.
       * This format is useful for avoiding floating-point precision issues.
       * The formatter will automatically divide by 100 before formatting.
       *
       * @example
       * value_x100: 12345 represents 123.45
       */
      value_x100: number | undefined
    }
)

export type Numeric = NumericValue | number | undefined | null

/**
 * Configuration options for the numeric formatter.
 */
export type NumericFormatterOptions = {
  /**
   * Locale string for number formatting (e.g., "en-US", "es-ES", "de-DE").
   * Determines the decimal separator and other locale-specific formatting rules.
   *
   * @default "en-US"
   */
  locale?: string
  /**
   * Maximum number of decimal places to display.
   * The formatter will round the number to this precision.
   *
   * @default 2
   */
  decimalPlaces?: number

  /**
   * Whether to hide the units from the formatted value.
   *
   * @default false
   */
  hideUnits?: boolean

  /**
   * Whether to use compact notation for the formatted value.
   *
   * @default false
   */
  compact?: boolean

  /**
   *
   */
  emptyPlaceholder?: string

  /**
   * Whether to use grouping for the formatted value.
   *
   * @default true
   */
  useGrouping?: boolean
}

/**
 * Formats a numeric value according to the provided options.
 *
 * @param value - The numeric value to format.
 * @param options - The formatting options.
 * @returns The formatted value as a string.
 */
export type NumericFormatter = (
  value: Numeric,
  options: NumericFormatterOptions
) => string

/**
 * A numeric value that can be formatted with an optional formatter and options.
 *
 * @param value - The numeric value to format.
 * @param formatter - The formatter to use.
 * @param formatterOptions - The formatting options.
 */
export type NumericWithFormatter = {
  value: Numeric
  formatter?: NumericFormatter
  formatterOptions?: NumericFormatterOptions
}
