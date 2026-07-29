import {
  getNumberPattern,
  getNumberSeparators,
  stripGroupSeparators,
} from "./localeNumber"

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
  /**
   * When set, parsing follows the locale's own conventions: its thousands
   * separator is accepted and dropped (so a grouped `50,000` can be typed or
   * pasted in en-US), and the decimal separator is normalised to the locale's
   * own, so the field always reads back the way the locale formats numbers.
   *
   * Without a locale both `.` and `,` are read as decimal separators and
   * echoed back as typed.
   */
  locale?: string
}

/**
 *
 * @param input The text from which to extract a number
 * @returns an object with the formatted number and the value as a number
 */
export function extractNumber(
  input: string,
  { maxDecimals, locale }: Options
): ExtractedNumber | null {
  const text = locale ? stripGroupSeparators(input, locale) : input

  if (!text || text === "-") {
    return {
      formattedValue: text,
      value: null,
    }
  }

  const match = text.match(
    locale ? getNumberPattern(locale) : COMPLETE_NUMBER_FORMAT
  )
  if (!match) return null

  // eslint-disable-next-line prefer-const
  let [_, sign, integers, separator, decimals] = match
  if (maxDecimals && (decimals?.length ?? 0) > maxDecimals) {
    decimals = decimals?.slice(0, maxDecimals)
  } else if (maxDecimals === 0) {
    decimals = ""
  }

  integers =
    integers?.replace(/^0+(\d)/, (_substring, firstDigit) => firstDigit) ?? ""

  const localeDecimalSeparator = locale
    ? getNumberSeparators(locale).decimal
    : undefined
  // Whichever separator was typed reads back as the locale's own, so the field
  // never shows a separator the locale wouldn't format with.
  const decimalSeparator = separator
    ? (localeDecimalSeparator ?? separator)
    : ""

  const formattedValue = `${sign}${integers}${
    maxDecimals !== 0 ? `${decimalSeparator}${decimals ?? ""}` : ""
  }`
  const valueAsNumber = parseFloat(
    formattedValue.replace(localeDecimalSeparator ?? ",", ".")
  )

  return {
    formattedValue: formattedValue,
    value: !Number.isNaN(valueAsNumber) ? valueAsNumber : null,
  }
}
