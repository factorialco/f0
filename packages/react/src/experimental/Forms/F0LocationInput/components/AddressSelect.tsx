import { useMemo } from "react"
import type { IconType } from "@/components/F0Icon"
import type { InputFieldStatus } from "@/components/F0InputField"
import type { F0SelectItemProps } from "@/components/F0Select"
import { F0Select } from "@/components/F0Select"
import type { CountryCode } from "@/lib/countries"
import { useI18n } from "@/lib/providers/i18n"
import { MIN_QUERY_LENGTH, usePlaceSearch } from "../hooks/usePlaceSearch"
import type {
  F0LocationInputProps,
  F0LocationSuggestion,
  LocationInputSize,
} from "../types"

/**
 * Stands for an address no suggestion covers: one the user typed, or one
 * loaded from the backend whose provider id is gone. `F0Select` resolves its
 * trigger through the options, the selection cache and `defaultItem`, so the
 * address needs a value there to be displayed at all.
 */
const UNLISTED_ADDRESS = "__unlisted_address__"

// The provider already ranked and matched the query; the built-in comparison
// is accent-sensitive, so "Colon" would drop "Carrer de Colón". Hoisted so its
// identity does not invalidate F0Select's data-source memo on every keystroke
const MATCH_ALL = () => true

type Props = {
  label: string
  hideLabel?: boolean
  labelIcon?: IconType
  placeholder?: string
  /** The address line as it should read on the trigger */
  text: string
  placeId?: string
  country: CountryCode | undefined
  searchPlaces: NonNullable<F0LocationInputProps["searchPlaces"]>
  onPick: (suggestion: F0LocationSuggestion) => void
  onClear: () => void
  status?: InputFieldStatus
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
  clearable?: boolean
  size: LocationInputSize
  name?: string
}

/**
 * The address line as an `F0Select` whose options are the provider's
 * suggestions: searching happens in the dropdown's own search box, and only a
 * suggestion can be chosen.
 */
export const AddressSelect = ({
  label,
  hideLabel,
  labelIcon,
  placeholder,
  text,
  placeId,
  country,
  searchPlaces,
  onPick,
  onClear,
  status: fieldStatus,
  required,
  disabled,
  readonly,
  loading,
  clearable,
  size,
  name,
}: Props) => {
  const i18n = useI18n()
  const noEdit = disabled || readonly
  const { suggestions, status, isSearching, query, search, reset } =
    usePlaceSearch({
      searchPlaces,
      country,
      enabled: !noEdit,
    })

  const options = useMemo<F0SelectItemProps<string>[]>(
    () =>
      suggestions.map((suggestion) => ({
        value: suggestion.id,
        // One line per suggestion: an address reads as a single string, and
        // splitting it across label and description makes the list twice as
        // tall for the same information
        label: [suggestion.label, suggestion.description]
          .filter(Boolean)
          .join(", "),
      })),
    [suggestions]
  )

  const selectedValue = text ? (placeId ?? UNLISTED_ADDRESS) : undefined
  // A fresh object here re-runs six of F0Select's memos on every keystroke
  const selectedItem = useMemo(
    () => (selectedValue ? { value: selectedValue, label: text } : undefined),
    [selectedValue, text]
  )

  const emptyMessage =
    status === "error"
      ? i18n.locationInput.searchError
      : isSearching
        ? i18n.locationInput.searching
        : query.trim().length < MIN_QUERY_LENGTH
          ? i18n.locationInput.searchHint
          : i18n.locationInput.noResults

  // The list's empty text is not read on change, so the search progress is
  // announced from a live region of its own
  const liveStatus =
    status === "searching" || status === "error" || status === "empty"
      ? emptyMessage
      : suggestions.length
        ? i18n.t(
            suggestions.length === 1
              ? "locationInput.resultsCount.one"
              : "locationInput.resultsCount.other",
            { count: suggestions.length }
          )
        : ""

  const shared = {
    label,
    hideLabel,
    labelIcon,
    placeholder: placeholder ?? i18n.locationInput.placeholder,
    options,
    searchFn: MATCH_ALL,
    value: selectedValue,
    defaultItem: selectedItem,
    onChange: (value: string) => {
      // F0Select re-emits when its `value` prop moves, so the resolved place
      // comes back once more after it has been applied; re-picking it would
      // resolve and emit a second time
      if (value === selectedValue) {
        return
      }
      const suggestion = suggestions.find((item) => item.id === value)
      if (suggestion) {
        onPick(suggestion)
      }
    },
    // The value is a searched address, not one of a handful of options: the
    // arrow would promise a list the user is meant to browse
    hideArrow: true,
    showSearchBox: true,
    searchBoxPlaceholder: i18n.locationInput.placeholder,
    searchEmptyMessage: emptyMessage,
    onSearchChange: search,
    // F0Select clears its own search box on close without saying so; without
    // this the next open lists the previous query's suggestions over an empty
    // box, and typing appends to the old query
    onOpenChange: (open: boolean) => {
      if (!open) {
        reset()
      }
    },
    status: fieldStatus,
    required,
    disabled: noEdit,
    loading: loading || isSearching,
    size,
    name,
  } as const

  const liveRegion = (
    <span className="sr-only" role="status" aria-live="polite">
      {liveStatus}
    </span>
  )

  // `clearable` discriminates F0Select's selection union, so it cannot be
  // handed over as a variable
  return (
    <>
      {clearable ? (
        <F0Select
          {...shared}
          clearable
          onChangeSelectedOption={(option, checked) => {
            // The trigger's clear button sends no option; clicking the
            // selected suggestion in the open list sends it back unchecked.
            // Both empty the select, so both have to empty the value
            if (!option || !checked) {
              onClear()
            }
          }}
        />
      ) : (
        <F0Select {...shared} />
      )}
      {liveRegion}
    </>
  )
}
