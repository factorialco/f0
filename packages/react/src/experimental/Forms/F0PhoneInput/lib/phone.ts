import type { CountryCode as PhoneCountry } from "libphonenumber-js"
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js"

import type { CountryCode } from "@/lib/countries"

import type { F0PhoneInputChangeMeta, F0PhoneInputValue } from "../types"

const DIAL_CODE_PATTERN = /^\+\d{1,4}$/

/**
 * Deterministic tie-break for dial codes shared by several territories,
 * used only when the number itself cannot resolve the exact country.
 */
const MAIN_COUNTRY_FOR_DIAL_CODE: Record<string, PhoneCountry> = {
  "1": "US",
  "7": "RU",
  "39": "IT",
  "44": "GB",
  "47": "NO",
  "61": "AU",
  "64": "NZ",
  "212": "MA",
  "262": "RE",
  "290": "SH",
  "358": "FI",
  "590": "GP",
  "596": "MQ",
  "599": "CW",
}

const onlyDigits = (value: string): string => value.replace(/\D/g, "")

export const toPhoneCountry = (
  code: CountryCode | undefined
): PhoneCountry | undefined => {
  if (!code) return undefined
  const upper = code.toUpperCase() as PhoneCountry
  return getCountries().includes(upper) ? upper : undefined
}

export const toCountryCode = (
  country: PhoneCountry | undefined
): CountryCode | undefined =>
  country ? (country.toLowerCase() as CountryCode) : undefined

export const dialCodeFor = (country: PhoneCountry): string =>
  `+${getCountryCallingCode(country)}`

export const countryForDialCode = (
  dialCode: string
): PhoneCountry | undefined => {
  if (!DIAL_CODE_PATTERN.test(dialCode.trim())) return undefined
  const digits = onlyDigits(dialCode)
  return (
    MAIN_COUNTRY_FOR_DIAL_CODE[digits] ??
    getCountries().find((country) => getCountryCallingCode(country) === digits)
  )
}

/**
 * Normalizes any stored `{ prefix, number }` shape — including legacy ones
 * where `number` holds a full international number, or where the national
 * number still carries a trunk prefix — into the E.164-ish string
 * react-phone-number-input works with.
 */
export const valueToE164 = (
  value: F0PhoneInputValue | undefined,
  fallbackCountry?: PhoneCountry
): string | undefined => {
  if (!value) return undefined
  const raw = value.number?.trim() ?? ""
  const prefix = value.prefix?.trim()

  // A full international number stored in `number` wins over the prefix
  if (raw.startsWith("+")) {
    const parsed = parsePhoneNumberFromString(raw)
    if (parsed) return parsed.number
    const digits = onlyDigits(raw)
    return digits ? `+${digits}` : undefined
  }

  if (!raw) return undefined

  if (prefix && DIAL_CODE_PATTERN.test(prefix)) {
    const country = countryForDialCode(prefix)
    // Parsing with the country strips trunk prefixes (e.g. GB "07911…")
    const parsed = country
      ? parsePhoneNumberFromString(raw, country)
      : parsePhoneNumberFromString(`${prefix}${onlyDigits(raw)}`)
    if (parsed) return parsed.number
    return `${prefix}${onlyDigits(raw)}`
  }

  if (fallbackCountry) {
    const parsed = parsePhoneNumberFromString(raw, fallbackCountry)
    if (parsed) return parsed.number
    const digits = onlyDigits(raw)
    return digits
      ? `+${getCountryCallingCode(fallbackCountry)}${digits}`
      : undefined
  }

  return undefined
}

/**
 * Converts the internal E.164-ish string back to the structured pair.
 * Partial numbers fall back to the currently selected country's dial code;
 * numbers with an unknown dial code are passed through untouched.
 * A bare dial code with no national digits is an empty value — the country
 * selection lives in the component's country state, not in the pair.
 */
export const e164ToValue = (
  e164: string | undefined,
  country: PhoneCountry | undefined
): F0PhoneInputValue | undefined => {
  if (!e164) return undefined

  const parsed = parsePhoneNumberFromString(e164)
  if (parsed) {
    return {
      prefix: `+${parsed.countryCallingCode}`,
      number: parsed.nationalNumber,
    }
  }

  if (country) {
    const prefix = dialCodeFor(country)
    if (e164.startsWith(prefix)) {
      const number = e164.slice(prefix.length)
      return number ? { prefix, number } : undefined
    }
  }

  return { prefix: undefined, number: e164 }
}

export const buildMeta = (
  e164: string | undefined,
  country: PhoneCountry | undefined
): F0PhoneInputChangeMeta => {
  const parsed = e164 ? parsePhoneNumberFromString(e164) : undefined
  return {
    country: toCountryCode(parsed?.country ?? country),
    e164: e164 || undefined,
    isValid: parsed?.isValid() ?? false,
    isPossible: parsed?.isPossible() ?? false,
  }
}

/**
 * Country to pre-select for an incoming value: the number's own country when
 * derivable, the stored prefix's country otherwise.
 */
export const countryForValue = (
  value: F0PhoneInputValue | undefined
): PhoneCountry | undefined => {
  if (!value) return undefined
  const e164 = valueToE164(value)
  const parsed = e164 ? parsePhoneNumberFromString(e164) : undefined
  if (parsed?.country) return parsed.country
  if (value.prefix) return countryForDialCode(value.prefix)
  return undefined
}
