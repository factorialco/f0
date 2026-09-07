import type { InputFieldStatus } from "@/components/F0InputField"
import { INPUTFIELD_SIZES } from "@/components/F0InputField"
import type { IconType } from "@/components/F0Icon"
import type { CountryCode } from "@/lib/countries"

export const locationInputSizes = INPUTFIELD_SIZES
export type LocationInputSize = (typeof locationInputSizes)[number]

/**
 * Parts that can be shown below the address field in detailed mode. The
 * address line itself is not listed: it is always rendered, because it is the
 * autocomplete field in both modes.
 */
export const locationFields = [
  "country",
  "addressLine2",
  "city",
  "state",
  "postalCode",
] as const
export type LocationField = (typeof locationFields)[number]

/** Recommended detailed preset. `addressLine2` is opt-in. */
export const detailedLocationFields = [
  "country",
  "city",
  "state",
  "postalCode",
] as const satisfies readonly LocationField[]

/**
 * Canonical address shape. Deliberately camelCase with a lowercase ISO-2
 * country so every consumer stores the same thing.
 */
export type F0LocationInputValue = {
  /** Display string. Comes from `resolvePlace` when picked, assembled locally once edited */
  formatted?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  /** State, province or region, as free text */
  state?: string
  postalCode?: string
  country?: CountryCode
  /** Provider id of the picked place. Cleared as soon as any part is edited */
  placeId?: string
  latitude?: number
  longitude?: number
  /** Carried through from `resolvePlace`, never derived here */
  timezone?: string
}

export type F0LocationSuggestion = {
  id: string
  label: string
  description?: string
}

export type F0LocationSearchContext = {
  /** Country to scope the search to, when one is selected or implied */
  country?: CountryCode
}

export type F0LocationInputChangeMeta = {
  /** `"picked"` right after a suggestion is chosen, `"typed"` once any part is edited */
  source: "picked" | "typed"
  /** Whether the value still carries trustworthy coordinates and place id */
  isResolved: boolean
}

export interface F0LocationInputProps {
  label: string
  /** Controlled value */
  value?: F0LocationInputValue
  /** Initial value when uncontrolled */
  defaultValue?: F0LocationInputValue
  onChange?: (
    value: F0LocationInputValue | undefined,
    meta: F0LocationInputChangeMeta
  ) => void
  /**
   * Omit for the address field alone (simple mode). Pass the parts to render
   * below it (detailed mode). Order is fixed by the component.
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
   * stand alone as plain fields. Called with the current country so the
   * consumer can restrict the provider (e.g. Places `componentRestrictions`).
   */
  searchPlaces?: (
    query: string,
    context: F0LocationSearchContext
  ) => Promise<F0LocationSuggestion[]>
  /** Resolves a picked suggestion into a full value. */
  resolvePlace?: (id: string) => Promise<F0LocationInputValue | undefined>
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
  size?: LocationInputSize
  name?: string
  id?: string
  autoFocus?: boolean
  onBlur?: () => void
  onFocus?: () => void
}
