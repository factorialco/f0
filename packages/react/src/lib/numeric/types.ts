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
      value: number
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
      value_x100: number
    }
)

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
}
