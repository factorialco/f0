import { NumericValue } from "./types"

/**
 * Gets the final value of a numeric value independent the usage of value or value_x100
 * @param numericValue
 * @returns
 */
export const numericFinalValue = (
  numericValue: NumericValue
): number | undefined => {
  return "value" in numericValue
    ? numericValue.value
    : numericValue.value_x100
      ? numericValue.value_x100 / 100
      : undefined
}
