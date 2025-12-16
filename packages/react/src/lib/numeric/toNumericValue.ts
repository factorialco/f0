import { Numeric, NumericValue } from "./types"

/**
 * Converts a numeric value to a NumericValue object.
 * @param value - The numeric value to convert.
 * @returns The numeric value as a NumericValue object.
 */
export const toNumericValue = (value: Numeric): NumericValue => {
  if (value === null || value === undefined) {
    return {
      value: undefined,
    }
  }

  if (typeof value === "number") {
    return { value }
  }

  return value
}
