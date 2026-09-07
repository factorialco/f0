import type {
  F0LocationInputValue,
  F0LocationSearchContext,
  F0LocationSuggestion,
  LocationField,
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
   * Omit for the address field alone. Pass the parts to render below it;
   * the order is fixed by the component.
   */
  fields?: readonly LocationField[]
  /** Overrides for the per-part labels, which default to translated copy */
  partLabels?: Partial<Record<LocationField | "addressLine1", string>>
  /** Restricts the country selector. A single entry also scopes the search */
  countries?: CountryCode[]
  /** Country used to scope the search while the value has none */
  defaultCountry?: CountryCode
  /**
   * Suggestion provider. Without it there is no autocomplete and the parts
   * stand alone as plain fields.
   */
  searchPlaces?: (
    query: string,
    context: F0LocationSearchContext
  ) => Promise<F0LocationSuggestion[]>
  /** Resolves a picked suggestion into a full value */
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
