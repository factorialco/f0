import { numericFormatter } from "./numericFormatter"
import {
  Numeric,
  NumericFormatter,
  NumericFormatterOptions,
  NumericWithFormatter,
} from "./types"

/*
 * Converts a numeric value (number, Numeric or NumericWithFormatter) to a NumericWithFormatter object.
 * @param value - The numeric value to convert.
 * @param defaults - The default formatter and options to use.
 * @returns The numeric value as a NumericWithFormatter object or undefined if the value is null or undefined.
 */
export const normalizeNumericWithFormatter = (
  value: Numeric | NumericWithFormatter,
  defaults?: {
    formatter?: NumericFormatter
    formatterOptions?: NumericFormatterOptions
  }
): Required<NumericWithFormatter> => {
  if (value === null || value === undefined) {
    return {
      value: undefined,
      formatter: defaults?.formatter || numericFormatter,
      formatterOptions: defaults?.formatterOptions || {},
    }
  }

  const _defaults = {
    formatter: defaults?.formatter || numericFormatter,
    formatterOptions: defaults?.formatterOptions || {},
  }
  if (typeof value === "number") {
    return { value, ..._defaults }
  }

  if (typeof value === "object" && value !== null && "value" in value) {
    return { ..._defaults, value: value.value }
  }

  return { ..._defaults, value }
}
