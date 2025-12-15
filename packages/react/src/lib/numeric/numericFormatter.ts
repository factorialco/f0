import { NumericFormatterOptions, NumericValue } from "./types"

export const numericFormatter = (
  value: NumericValue,
  options: NumericFormatterOptions = {}
) => {
  options = {
    locale: "en-US",
    decimalPlaces: 2,
    ...options,
  }

  const valueToFormat = "value" in value ? value.value : value.value_x100 / 100

  const formattedValue = new Intl.NumberFormat(options.locale, {
    maximumFractionDigits: options.decimalPlaces,
    useGrouping: false,
  }).format(valueToFormat)

  if (!value.units) {
    return formattedValue
  }

  return value.unitsPosition === "prepend"
    ? `${value.units}${formattedValue}`
    : `${formattedValue}${value.units}`
}
