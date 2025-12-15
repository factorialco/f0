export const numberFormat = (value: number, decimalPlaces: number, locale: string = "en-US") => {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: decimalPlaces,
    useGrouping: false,
  }).format(value)
}
