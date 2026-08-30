/**
 * Checks if a value object has a placeholder property
 */
export declare function hasPlaceholder(args: unknown): args is {
    placeholder: string;
};
/**
 * Determines if we should show placeholder styling
 * This happens when:
 * 1. The args object has a placeholder property
 * 2. The value for the specified key is undefined
 */
export declare function isShowingPlaceholder(args: unknown, valueKey: string): boolean;
/**
 * Resolves the display value from a cell value object
 * Returns the actual value if present, the placeholder if defined, or undefined
 */
export declare function resolveValue<T>(args: unknown, valueKey: string): T | string | undefined;
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
export declare function formatDateValue(value: unknown): string;
/** Strip HTML tags from a string */
export declare function stripHtmlTags(html: string): string;
