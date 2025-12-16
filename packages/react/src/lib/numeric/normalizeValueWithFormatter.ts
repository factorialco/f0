import { numericFormatter } from "./numericFormatter"
import { toNumericValue } from "./toNumericValue"
import {
  Numeric,
  NumericFormatter,
  NumericFormatterOptions,
  NumericWithFormatter,
  RelaxedNumericWithFormatter,
} from "./types"

/*
 * Converts a numeric value (number, Numeric or NumericWithFormatter) to a NumericWithFormatter object.
 * @param value - The numeric value to convert.
 * @param defaults - The default formatter and options to use.
 * @returns The numeric value as a NumericWithFormatter object or undefined if the value is null or undefined.
 */
export const normalizeNumericWithFormatter = (
  value: Numeric | RelaxedNumericWithFormatter,
  defaults?: {
    formatter?: NumericFormatter
    formatterOptions?: NumericFormatterOptions
  }
): Required<NumericWithFormatter> => {
  if (value === null || value === undefined) {
    return {
      numericValue: { value: undefined },
      formatter: defaults?.formatter || numericFormatter,
      formatterOptions: defaults?.formatterOptions || {},
    }
  }

  const _defaults = {
    formatter: defaults?.formatter || numericFormatter,
    formatterOptions: defaults?.formatterOptions || {},
  }

  if (typeof value === "number") {
    return { numericValue: { value }, ..._defaults }
  }

  // Is a NumericWithFormatter object
  if (typeof value === "object" && value !== null && "numericValue" in value) {
    return {
      numericValue: toNumericValue(value.numericValue),
      formatter: value.formatter ? value.formatter : _defaults.formatter,
      formatterOptions: {
        ..._defaults.formatterOptions,
        ...value.formatterOptions,
      },
    }
  }

  // Is a Numeric object
  return { ..._defaults, numericValue: value }
}
