import { Numeric, NumericFormatterOptions } from "./types"

export const numericFormatter = (
  value: Numeric,
  options: NumericFormatterOptions = {}
) => {
  options = {
    locale: "en-US",
    decimalPlaces: 2,
    hideUnits: false,
    compact: false,
    emptyPlaceholder: "",
    ...options,
  }

  if (value === undefined || value === null) {
    return options.emptyPlaceholder
  }

  if (typeof value === "number") {
    value = { value }
  }

  const valueToFormat = "value" in value ? value.value : value.value_x100 / 100

  const formattedValue = new Intl.NumberFormat(options.locale, {
    maximumFractionDigits: options.decimalPlaces,
    notation: options.compact ? "compact" : "standard",
    compactDisplay: options.compact ? "short" : undefined,
    useGrouping: false,
  }).format(valueToFormat)

  if (options.hideUnits || !value.units) {
    return formattedValue
  }

  return value.unitsPosition === "prepend"
    ? `${value.units}${formattedValue}`
    : `${formattedValue}${value.units}`
}
