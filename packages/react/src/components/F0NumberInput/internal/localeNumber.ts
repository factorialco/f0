/**
 * Locale-aware helpers shared by the number input's parsing (`extractNumber`)
 * and its display.
 *
 * The field keeps a *plain* string as its editing value — the locale's decimal
 * separator, no thousands separators — and grouping is layered on top of that
 * string for the resting (blurred) display. Grouping the string instead of
 * re-formatting the parsed number is what keeps the decimals the user typed
 * intact: `Intl.NumberFormat` rounds to `maximumFractionDigits` (3 when
 * unset), which turns `50000.50` into `50,000.5` and `1.23456` into `1.235`.
 */

/** The characters a locale uses to separate groups and decimals. */
export interface NumberSeparators {
  group: string
  decimal: string
}

interface LocaleNumberFormat extends NumberSeparators {
  /** Characters that start the decimal part in this locale. */
  decimalSeparators: string[]
  /** Matches a complete or partially typed number in this locale. */
  pattern: RegExp
}

const formatsByLocale = new Map<string, LocaleNumberFormat>()

const escapeForRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

function getLocaleNumberFormat(locale: string): LocaleNumberFormat {
  const cached = formatsByLocale.get(locale)
  if (cached) return cached

  // A 7-digit sample guarantees a `group` part in every locale, including
  // those that only start grouping past four digits.
  const parts = new Intl.NumberFormat(locale, {
    useGrouping: true,
  }).formatToParts(1234567.8)

  const group = parts.find((part) => part.type === "group")?.value ?? ","
  const decimal = parts.find((part) => part.type === "decimal")?.value ?? "."

  // Both `.` and `,` start the decimal part unless the locale groups with
  // them: `,` groups in en-US and `.` groups in es-ES, while fr-FR groups with
  // a space so either key still reaches its comma decimal separator.
  const decimalSeparators = [decimal, ".", ","].filter(
    (char, index, chars) => char !== group && chars.indexOf(char) === index
  )

  const format: LocaleNumberFormat = {
    group,
    decimal,
    decimalSeparators,
    pattern: new RegExp(
      `^(-?)([0-9]+)?(?:(${decimalSeparators
        .map(escapeForRegExp)
        .join("|")})([0-9]+)?)?$`
    ),
  }

  formatsByLocale.set(locale, format)
  return format
}

export function getNumberSeparators(locale: string): NumberSeparators {
  const { group, decimal } = getLocaleNumberFormat(locale)
  return { group, decimal }
}

/** Whether typing `char` should start the decimal part in this locale. */
export function isDecimalSeparator(char: string, locale: string): boolean {
  return getLocaleNumberFormat(locale).decimalSeparators.includes(char)
}

/** Matches a complete or partially typed number ("", "-", "17,") in `locale`. */
export function getNumberPattern(locale: string): RegExp {
  return getLocaleNumberFormat(locale).pattern
}

/**
 * Drops the locale's thousands separators, which carry no value: `50,000`
 * (en-US) and `50.000` (es-ES) both mean fifty thousand. This is what lets a
 * grouped number be typed or pasted straight into the field.
 */
export function stripGroupSeparators(input: string, locale: string): string {
  const { group } = getLocaleNumberFormat(locale)
  // fr-FR and ru-RU group with (narrow) no-break spaces, which paste easily
  // but can't be typed — any whitespace stands in for them.
  return /\s/.test(group)
    ? input.replace(/\s/g, "")
    : input.split(group).join("")
}

const MAX_FRACTION_DIGITS = 20

/**
 * How many decimals the value actually carries, so `toEditableString` can show
 * all of them rather than falling back to Intl's default cap of 3.
 */
function countDecimals(value: number): number {
  const decimals = String(value).split(".")[1]
  return decimals ? Math.min(decimals.length, MAX_FRACTION_DIGITS) : 0
}

/**
 * Renders a number the way the field holds it while being edited: the locale's
 * decimal separator, no grouping, and no decimals silently dropped.
 */
export function toEditableString(
  value: number,
  locale: string,
  maxDecimals?: number
): string {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxDecimals ?? countDecimals(value),
    useGrouping: false,
  }).format(value)
}

const groupingFormattersByLocale = new Map<string, Intl.NumberFormat>()

function getGroupingFormatter(locale: string): Intl.NumberFormat {
  const cached = groupingFormattersByLocale.get(locale)
  if (cached) return cached

  const formatter = new Intl.NumberFormat(locale, {
    useGrouping: true,
    maximumFractionDigits: 0,
  })
  groupingFormattersByLocale.set(locale, formatter)
  return formatter
}

const INTEGER_PART = /^(-?)([0-9]+)$/

/**
 * Adds the locale's thousands separators to an editable string, leaving its
 * decimals exactly as typed — trailing zeros and a dangling separator
 * included. Input with nothing to group (`""`, `"-"`, `".45"`) is returned
 * untouched.
 */
export function withGroupSeparators(
  editableValue: string,
  locale: string
): string {
  const { decimal } = getLocaleNumberFormat(locale)

  const decimalIndex = editableValue.indexOf(decimal)
  const integers =
    decimalIndex === -1 ? editableValue : editableValue.slice(0, decimalIndex)
  const decimals = decimalIndex === -1 ? "" : editableValue.slice(decimalIndex)

  const match = integers.match(INTEGER_PART)
  if (!match) return editableValue

  const [, sign, digits] = match

  // BigInt keeps long integer parts exact, and Intl applies the locale's own
  // grouping rules (en-IN groups 1234567 as 12,34,567).
  return `${sign}${getGroupingFormatter(locale).format(BigInt(digits))}${decimals}`
}
