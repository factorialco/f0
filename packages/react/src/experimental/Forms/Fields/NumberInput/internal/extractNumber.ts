// eslint-disable-next-line no-useless-escape
const COMPLETE_NUMBER_FORMAT = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/

interface ExtractedNumber {
  formattedValue: string
  value: number | null
}

export interface Options {
  /**
   * The maximum number of decimals to allow. Set to 0 to only allow integers.
   */
  maxDecimals?: number
}

/**
 *
 * @param input The text from which to extract a number
 * @returns an object with the formatted number and the value as a number
 *
 * TODO: Make internationalization-friendly to support grouping character
 */
export function extractNumber(input: string, { maxDecimals }: Options): ExtractedNumber | null {
  if (!input || input === "-") {
    return {
      formattedValue: input ?? "",
      value: null,
    }
  }

  const match = input.match(COMPLETE_NUMBER_FORMAT)
  if (!match) return null

  // eslint-disable-next-line prefer-const
  let [_, sign, integers, separator, decimals] = match
  if (maxDecimals && (decimals?.length ?? 0) > maxDecimals) {
    decimals = decimals?.slice(0, maxDecimals)
  } else if (maxDecimals === 0) {
    decimals = ""
  }

  integers = integers?.replace(/^0+(\d)/, (_substring, firstDigit) => firstDigit) ?? ""

  const formattedValue = `${sign}${integers}${
    maxDecimals !== 0 ? `${separator ?? ""}${decimals ?? ""}` : ""
  }`
  const valueAsNumber = parseFloat(formattedValue.replace(",", "."))

  return {
    formattedValue: formattedValue,
    value: !Number.isNaN(valueAsNumber) ? valueAsNumber : null,
  }
}
