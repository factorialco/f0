import type {
  F0LocationInputShapeProps,
  F0LocationInputValue,
  LocationPart,
} from "@/experimental/Forms/F0LocationInput"
import type { CountryCode } from "@/lib/countries"
import type {
  CommonRenderIfCondition,
  F0BaseField,
  F0BaseFieldRenderIfFunction,
} from "../types"

/**
 * All valid renderIf conditions for location fields
 */
export type LocationFieldRenderIf =
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

/**
 * F0 config options specific to location fields. The shape props come
 * straight from the component, so the field inherits its rule: manual entry
 * is typed rather than searched, and rules out a suggestion provider instead
 * of accepting one it would never call.
 */
export type F0LocationConfig = {
  /** Overrides for the per-part labels, which default to translated copy */
  partLabels?: Partial<Record<LocationPart, string>>
  /** Restricts the country selector. A single entry also scopes the search */
  allowedCountries?: CountryCode[]
  /** Scopes the search. Never read from the value's own country */
  defaultCountry?: CountryCode
} & F0LocationInputShapeProps

/**
 * Location field with all properties for rendering
 */
export type F0LocationField = F0BaseField &
  F0LocationConfig & {
    type: "location"
    /** Whether the field can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: LocationFieldRenderIf
  }

export type { F0LocationInputValue }
