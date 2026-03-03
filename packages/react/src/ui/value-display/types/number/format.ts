export type UnitsPosition = "left" | "right"

export interface NumberFormatArgs {
  number: number | string | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number
  unitsSpaced?: boolean
}

export interface FormattedNumberParts {
  value: string
  units: string
  unitsPosition: UnitsPosition
}

export const formatNumberParts = (
  args: NumberFormatArgs
): FormattedNumberParts => {
  const unitsPosition = args.unitsPosition ?? "right"
  const units = args.units ?? ""
  const value =
    args.decimalPlaces !== undefined && typeof args.number === "number"
      ? args.number.toFixed(args.decimalPlaces)
      : (args.number?.toString() ?? "")

  return {
    value,
    units,
    unitsPosition,
  }
}

export const formatNumberText = (args: NumberFormatArgs): string => {
  const number = formatNumberParts(args)

  if (!number.units) {
    return number.value
  }

  const space = args.unitsSpaced ? " " : ""

  return number.unitsPosition === "left"
    ? `${number.units}${space}${number.value}`
    : `${number.value}${space}${number.units}`
}
