/**
 * Converts a single value or an array of values to an array of values
 * @param value - The value to convert
 * @returns The array of values
 */
export const toArray = <T>(value: T | T[] | undefined): T[] => {
  if (value === undefined) {
    return []
  }
  return Array.isArray(value) ? value : [value]
}
