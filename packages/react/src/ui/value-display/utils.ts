/**
 * Checks if a value object has a placeholder property
 */
export function hasPlaceholder(args: unknown): args is { placeholder: string } {
  return (
    typeof args === "object" &&
    args !== null &&
    "placeholder" in args &&
    typeof args.placeholder === "string"
  )
}

/**
 * Type for objects with a dynamic key
 */
interface DynamicArgObject {
  [arg: string]: unknown
}

/**
 * Determines if we should show placeholder styling
 * This happens when:
 * 1. The args object has a placeholder property
 * 2. The value for the specified key is undefined
 */
export function isShowingPlaceholder(args: unknown, valueKey: string): boolean {
  if (!hasPlaceholder(args)) {
    return false
  }

  if (typeof args === "object" && args !== null && valueKey in args) {
    const value = (args as DynamicArgObject)[valueKey]
    return value === undefined
  }

  return true
}

/**
 * Resolves the display value from a cell value object
 * Returns the actual value if present, the placeholder if defined, or undefined
 */
export function resolveValue<T>(
  args: unknown,
  valueKey: string
): T | string | undefined {
  if (args !== undefined && typeof args !== "object") {
    return args as T
  }

  if (!args || typeof args !== "object") {
    return undefined
  }

  const valueExists = valueKey in args
  const value = valueExists ? (args as DynamicArgObject)[valueKey] : undefined

  const hasAPlaceholder = hasPlaceholder(args)
  const placeholder = hasAPlaceholder ? args.placeholder : undefined

  if (value !== undefined) {
    // If we're expecting a Date and it looks like date data but lost its prototype
    if (
      valueKey === "date" &&
      value !== null &&
      typeof value === "object" &&
      "getTime" in value
    ) {
      return new Date((value as Date).getTime()) as unknown as T
    }
    return value as T
  }

  if (placeholder !== undefined) {
    return placeholder
  }

  return undefined
}

/**
 * Formats a date value from various input types to a string representation.
 *
 * This function handles multiple date input scenarios:
 * 1. Direct Date objects or date-like objects with date methods
 * 2. Objects containing a 'date' property
 * 3. String values (returned as-is)
 * 4. Any other non-null values (converted to string)
 *
 * It uses the browser's toLocaleDateString() for proper date formatting when
 * possible, and falls back to string conversions when necessary.
 *
 * @param value - The value to format, which can be a Date object, an object
 *                containing a date property, or any other value
 * @returns A formatted string representation of the date, or an empty string
 *          if no valid date value could be extracted
 *
 * @example
 * // Format a direct Date object
 * formatDateValue(new Date(2023, 0, 15)) // "1/15/2023" (locale-dependent)
 *
 * // Format an object with a date property
 * formatDateValue({ date: new Date(2023, 0, 15) }) // "1/15/2023"
 *
 * // Handle a string value
 * formatDateValue({ date: "2023-01-15" }) // "2023-01-15"
 *
 * // Format with a placeholder
 * formatDateValue({ date: undefined, placeholder: "No date" }) // "No date"
 */
export function formatDateValue(value: unknown): string {
  // Case 1: Direct Date object
  if (isDateLike(value)) {
    try {
      return (value as Date).toLocaleDateString()
    } catch {
      return String(value)
    }
  }

  // Case 2: Object with date property
  const resolvedValue = resolveValue<unknown>(value, "date")

  if (isDateLike(resolvedValue)) {
    try {
      return (resolvedValue as Date).toLocaleDateString()
    } catch {
      return String(resolvedValue)
    }
  } else if (typeof resolvedValue === "string") {
    return resolvedValue
  } else if (resolvedValue != null) {
    return String(resolvedValue)
  }

  return ""
}

/**
 * Determines whether a given value is date-like. A value is considered date-like if it is an instance of `Date`
 * or if it is an object containing specific date-related properties such as `toLocaleDateString` or `getTime`.
 *
 * @param {unknown} value - The value to check if it is date-like.
 * @return {boolean} Returns `true` if the value is date-like, otherwise `false`.
 */
function isDateLike(value: unknown): boolean {
  return Boolean(
    value instanceof Date ||
    (value &&
      typeof value === "object" &&
      ("toLocaleDateString" in value || "getTime" in value))
  )
}

import DOMPurify from "dompurify"

/** Strip HTML tags from a string */
export function stripHtmlTags(html: string): string {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] })
}
