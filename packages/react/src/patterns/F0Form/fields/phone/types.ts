import type { F0PhoneInputValue } from "@/experimental/Forms/F0PhoneInput"
import type { CountryCode } from "@/lib/countries"

import type {
  CommonRenderIfCondition,
  F0BaseField,
  F0BaseFieldRenderIfFunction,
} from "../types"

/**
 * All valid renderIf conditions for phone fields
 */
export type PhoneFieldRenderIf =
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

/**
 * F0 config options specific to phone fields
 */
export interface F0PhoneConfig {
  /** Country pre-selected while the input is empty */
  defaultCountry?: CountryCode
  /** Countries listed first in the selector, in the given order */
  pinnedCountries?: CountryCode[]
  /** Restricts both the selector and typed/pasted country detection */
  allowedCountries?: CountryCode[]
}

/**
 * Phone field with all properties for rendering
 */
export type F0PhoneField = F0BaseField &
  F0PhoneConfig & {
    type: "phone"
    /** Whether the field can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: PhoneFieldRenderIf
  }

export type { F0PhoneInputValue }
