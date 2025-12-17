import { Numeric, NumericFormatter, NumericFormatterOptions } from "../types"
import { isEmptyNumeric } from "./isEmptyNumeric"
import { numericFinalValue } from "./numericFinalValue"

/**
 * Formats a numeric value according to the provided options.
 * @param value - The numeric value to format.
 * @param options - The formatting options.
 * @returns The formatted value as a string.
 */
export const numericFormatter: NumericFormatter = (
  value: Numeric,
  options: NumericFormatterOptions = {}
) => {
  if (isEmptyNumeric(value)) {
    return options.emptyPlaceholder || ""
  }

  options = {
    locale: "en-US",
    decimalPlaces: 2,
    hideUnits: false,
    compact: false,
    emptyPlaceholder: "",
    useGrouping: true,
    unitsSpaced: false,
    ...options,
  }

  if (typeof value === "number") {
    value = { value }
  }

  const valueToFormat = numericFinalValue(value)

  if (valueToFormat === undefined) {
    return options.emptyPlaceholder || ""
  }

  const formattedValue = new Intl.NumberFormat(options.locale, {
    maximumFractionDigits: options.decimalPlaces,
    notation: options.compact ? "compact" : "standard",
    compactDisplay: options.compact ? "short" : undefined,
    useGrouping: options.useGrouping,
  }).format(valueToFormat)

  if (options.hideUnits || !value.units) {
    return formattedValue
  }

  const space = options.unitsSpaced ? " " : ""

  return value.unitsPosition === "prepend"
    ? `${value.units}${space}${formattedValue}`
    : `${formattedValue}${space}${value.units}`
}
