import type { IconType } from "@/components/F0Icon"
import type { InputFieldStatus } from "@/components/F0InputField"
import { INPUTFIELD_SIZES } from "@/components/F0InputField"
import type { CountryCode } from "@/lib/countries"

export const locationInputSizes = INPUTFIELD_SIZES
export type LocationInputSize = (typeof locationInputSizes)[number]

/** Every part the manual entry block renders, in the order it renders them */
export const locationParts = [
  "country",
  "addressLine1",
  "addressLine2",
  "city",
  "state",
  "postalCode",
] as const
export type LocationPart = (typeof locationParts)[number]

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
  /** Region, state or province, as free text */
  state?: string
  postalCode?: string
  country?: CountryCode
  /**
   * Provider id of the picked place. Cleared as soon as a part that describes
   * where the pin is gets edited; `addressLine2` does not, since a floor
   * number stays inside the same building.
   */
  placeId?: string
  latitude?: number
  longitude?: number
  /** Carried through from `resolvePlace`, never derived here */
  timezone?: string
}

export type F0LocationSuggestion = {
  id: string
  label: string
  /** Appended to the label, so each suggestion reads as one line */
  description?: string
}

export type F0LocationSearchContext = {
  /** Country to scope the search to, when one is selected or implied */
  country?: CountryCode
}

export type F0LocationInputChangeMeta = {
  /**
   * `"picked"` when a suggestion was chosen *and* resolved into a full value.
   * `"typed"` in every other case, which includes a suggestion that could not
   * be resolved, so do not read `"typed"` as "the user did not use the list".
   * `isResolved` is what says whether the value can be trusted.
   */
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
   * Renders the whole address as separate fields the user can fill in by
   * hand: country, address line 1 and 2, city, region and postal code.
   * Changing the country clears the other parts, since they described a
   * place in the previous one. Without it the component is the address
   * field alone.
   * @default false
   */
  manualEntry?: boolean
  /** Overrides for the per-part labels, which default to translated copy */
  partLabels?: Partial<Record<LocationPart, string>>
  /** Restricts the country selector. A single entry also scopes the search */
  countries?: CountryCode[]
  /**
   * Country the search is scoped to. The value's own country is never used
   * for this: the search only exists without manual entry, where nothing on
   * screen would show or undo that scope, so the first picked address would
   * silently lock every later search to its country.
   */
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
  /**
   * Resolves a picked suggestion into a full value. Every field of
   * `F0LocationInputValue` is optional, so two thresholds are worth knowing:
   * the value needs `formatted` or `addressLine1` to be shown at all, and
   * `placeId` plus both coordinates to report `isResolved: true`. Returning a
   * provider's formatted address without its granular parts is supported.
   */
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
