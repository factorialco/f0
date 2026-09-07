import { useMemo } from "react"

import type { InputFieldStatus } from "@/components/F0InputField"
import type { IconType } from "@/components/F0Icon"
import type { F0SelectItemProps } from "@/components/F0Select"
import type { CountryCode } from "@/lib/countries"

import { F0Select } from "@/components/F0Select"
import { useI18n } from "@/lib/providers/i18n"

import type {
  F0LocationInputProps,
  F0LocationSuggestion,
  LocationInputSize,
} from "../types"

import { MIN_QUERY_LENGTH, usePlaceSearch } from "../hooks/usePlaceSearch"

/**
 * Stands for an address no suggestion covers: one the user typed, or one
 * loaded from the backend whose provider id is gone. `F0Select` resolves its
 * trigger through the options, the selection cache and `defaultItem`, so the
 * address needs a value there to be displayed at all.
 */
const UNLISTED_ADDRESS = "__unlisted_address__"

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
  onTyped: (text: string) => void
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
 * suggestions: searching happens in the dropdown's own search box, and the
 * create action keeps an address the provider does not know.
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
  onTyped,
  onClear,
  status,
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
  const { suggestions, isSearching, query, search } = usePlaceSearch({
    searchPlaces,
    country,
    enabled: !noEdit,
  })

  const options = useMemo<F0SelectItemProps<string>[]>(
    () =>
      suggestions.map((suggestion) => ({
        value: suggestion.id,
        label: suggestion.label,
        description: suggestion.description,
      })),
    [suggestions]
  )

  const selectedValue = text ? (placeId ?? UNLISTED_ADDRESS) : undefined
  const selectedItem = text
    ? { value: selectedValue as string, label: text }
    : undefined

  const emptyMessage = isSearching
    ? i18n.locationInput.searching
    : query.trim().length < MIN_QUERY_LENGTH
      ? i18n.locationInput.searchHint
      : i18n.locationInput.noResults

  const shared = {
    label,
    hideLabel,
    labelIcon,
    placeholder: placeholder ?? i18n.locationInput.placeholder,
    options,
    // The provider already ranked and matched the query; the built-in
    // comparison is accent-sensitive, so "Colon" would drop "Carrer de Colón"
    searchFn: () => true,
    value: selectedValue,
    defaultItem: selectedItem,
    onChange: (value: string) => {
      const suggestion = suggestions.find((item) => item.id === value)
      if (suggestion) onPick(suggestion)
    },
    showSearchBox: true,
    searchBoxPlaceholder: i18n.locationInput.placeholder,
    searchEmptyMessage: emptyMessage,
    onSearchChange: search,
    onCreate: (value: string) => onTyped(value),
    status,
    required,
    disabled: noEdit,
    loading,
    size,
    name,
    "data-testid": "location-input-address",
  } as const

  // `clearable` discriminates F0Select's selection union, so it cannot be
  // handed over as a variable
  return clearable ? (
    <F0Select<string>
      {...shared}
      clearable
      onChangeSelectedOption={(option) => {
        if (!option) onClear()
      }}
    />
  ) : (
    <F0Select<string> {...shared} />
  )
}
