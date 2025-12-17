import { Numeric } from "../types"

/*
 * Checks if a numeric value is empty.
 * @param value - The numeric value to check.
 * @returns True if the value is empty, false otherwise.
 */
export const isEmptyNumeric = (value: Numeric): value is null | undefined => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" &&
      "value" in value &&
      (value.value === undefined || value.value === null) &&
      // ----
      typeof value === "object" &&
      "value_x100" in value &&
      (value.value_x100 === undefined || value.value_x100 === null))
  )
}
