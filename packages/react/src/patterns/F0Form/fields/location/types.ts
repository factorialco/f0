import type {
  F0LocationInputValue,
  F0LocationSearchContext,
  F0LocationSuggestion,
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
 * F0 config options specific to location fields
 */
export interface F0LocationConfig {
  /**
   * Renders the whole address as separate fields the user fills in by hand:
   * country, address line 1 and 2, city, region and postal code. Manual
   * entry is typed, not searched, so it leaves `searchPlaces` and
   * `resolvePlace` unused. Without it the field is the address line alone.
   * @default false
   */
  manualEntry?: boolean
  /** Overrides for the per-part labels, which default to translated copy */
  partLabels?: Partial<Record<LocationPart, string>>
  /** Restricts the country selector. A single entry also scopes the search */
  allowedCountries?: CountryCode[]
  /** Scopes the search. Never read from the value's own country */
  defaultCountry?: CountryCode
  /**
   * Suggestion provider, which turns the address line into an autocomplete.
   * Without it the address line is plainly typed.
   */
  searchPlaces?: (
    query: string,
    context: F0LocationSearchContext
  ) => Promise<F0LocationSuggestion[]>
  /**
   * Resolves a picked suggestion into a full value with coordinates. Without
   * it the suggestion label is kept as the address line and the value stays
   * unresolved.
   */
  resolvePlace?: (id: string) => Promise<F0LocationInputValue | undefined>
}

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
