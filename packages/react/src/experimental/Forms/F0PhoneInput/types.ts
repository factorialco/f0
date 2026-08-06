import type { InputFieldStatus } from "@/components/F0InputField"
import { INPUTFIELD_SIZES } from "@/components/F0InputField"
import type { IconType } from "@/components/F0Icon"
import type { CountryCode } from "@/lib/countries"

export const phoneInputSizes = INPUTFIELD_SIZES
export type PhoneInputSize = (typeof phoneInputSizes)[number]

/**
 * Structured phone value matching how backends store the pair:
 * a dial code plus the national number. Consumers never need to
 * split or join the two parts themselves.
 */
export type F0PhoneInputValue = {
  /** Dial code including the leading `+`, e.g. `"+34"` */
  prefix: string | undefined
  /**
   * National significant number (digits only, no trunk prefix) — or the raw
   * stored string when it cannot be parsed (legacy data is passed through
   * untouched until the user edits it).
   */
  number: string
}

export type F0PhoneInputChangeMeta = {
  /** Country resolved for the current value, e.g. `"es"` */
  country: CountryCode | undefined
  /** Full E.164 representation when derivable, e.g. `"+34674897945"` */
  e164: string | undefined
  /** libphonenumber validity — informative only, never enforced */
  isValid: boolean
  isPossible: boolean
}

export interface F0PhoneInputProps {
  label: string
  /** Controlled value */
  value?: F0PhoneInputValue
  /** Initial value when uncontrolled */
  defaultValue?: F0PhoneInputValue
  onChange?: (
    value: F0PhoneInputValue | undefined,
    meta: F0PhoneInputChangeMeta
  ) => void
  onCountryChange?: (country: CountryCode | undefined) => void
  /** Country pre-selected while the input is empty */
  defaultCountry?: CountryCode
  /** Countries listed first in the selector, in the given order */
  pinnedCountries?: CountryCode[]
  /** Restricts both the selector and typed/pasted country detection */
  allowedCountries?: CountryCode[]
  /**
   * Defaults to a national example number (`612 34 56 78`) for the selected
   * country, or an international one (`+34 612 34 56 78`) while no country
   * is selected
   */
  placeholder?: string
  hideLabel?: boolean
  labelIcon?: IconType
  hint?: string
  error?: string | boolean
  status?: InputFieldStatus
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
  clearable?: boolean
  size?: PhoneInputSize
  name?: string
  id?: string
  autoFocus?: boolean
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
}
