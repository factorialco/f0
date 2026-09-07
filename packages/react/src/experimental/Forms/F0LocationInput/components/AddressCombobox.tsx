import { forwardRef, useId } from "react"

import type { InputFieldStatus } from "@/components/F0InputField"
import type { IconType } from "@/components/F0Icon"
import type { CountryCode } from "@/lib/countries"

import { useDialogPortalContainer } from "@/patterns/F0Dialog/components/F0DialogProvider"
import { Input } from "@/ui/input"
import { Popover, PopoverAnchor, PopoverContent } from "@/ui/popover"

import type {
  F0LocationInputProps,
  F0LocationSuggestion,
  LocationInputSize,
} from "../types"

import { usePlaceSearch } from "../hooks/usePlaceSearch"
import { SuggestionListbox } from "./SuggestionListbox"

type Props = {
  label: string
  hideLabel?: boolean
  labelIcon?: IconType
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  onPick: (suggestion: F0LocationSuggestion) => void
  onClear: () => void
  searchPlaces: F0LocationInputProps["searchPlaces"]
  country: CountryCode | undefined
  status?: InputFieldStatus
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
  clearable?: boolean
  size: LocationInputSize
  name?: string
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

const preventDefault = (event: Event) => event.preventDefault()

/**
 * The address line as a combobox: a text field that drives a listbox it does
 * not contain. Focus never leaves the input; the popover is anchored, not
 * triggered, so the field keeps its own click and keyboard behaviour.
 */
export const AddressCombobox = forwardRef<HTMLInputElement, Props>(
  function AddressCombobox(
    {
      label,
      hideLabel,
      labelIcon,
      placeholder,
      value,
      onChangeText,
      onPick,
      onClear,
      searchPlaces,
      country,
      status,
      required,
      disabled,
      readonly,
      loading,
      clearable,
      size,
      name,
      autoFocus,
      onFocus,
      onBlur,
    },
    ref
  ) {
    const listboxId = `${useId()}-listbox`
    const optionId = (index: number) => `${listboxId}-option-${index}`

    const canSuggest = !!searchPlaces && !disabled && !readonly
    const {
      suggestions,
      isSearching,
      hasSearched,
      open,
      setOpen,
      activeIndex,
      setActiveIndex,
      search,
      close,
      reset,
    } = usePlaceSearch({ searchPlaces, country, enabled: canSuggest })
    const portalContainer = useDialogPortalContainer()

    const isOpen =
      canSuggest &&
      open &&
      (suggestions.length > 0 || isSearching || hasSearched)

    const pick = (suggestion: F0LocationSuggestion) => {
      close()
      onPick(suggestion)
    }

    const handleChange = (text: string) => {
      onChangeText(text)
      search(text)
    }

    const handleClear = () => {
      reset()
      onClear()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!canSuggest) return
      const count = suggestions.length

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault()
          if (!isOpen) {
            if (count > 0) setOpen(true)
            return
          }
          if (count > 0) setActiveIndex((activeIndex + 1) % count)
          return
        case "ArrowUp":
          event.preventDefault()
          if (isOpen && count > 0) {
            setActiveIndex((activeIndex - 1 + count) % count)
          }
          return
        case "Enter": {
          const active = isOpen ? suggestions[activeIndex] : undefined
          // Without an active option Enter keeps its form meaning
          if (active) {
            event.preventDefault()
            pick(active)
          }
          return
        }
        case "Escape":
          if (isOpen) {
            // Stop here, or the surrounding dialog reads it as its own close
            event.preventDefault()
            event.stopPropagation()
            close()
          }
          return
        case "Tab":
          if (isOpen) close()
          return
        default:
          return
      }
    }

    return (
      <Popover open={isOpen} modal={false}>
        <PopoverAnchor asChild>
          <div className="w-full min-w-0">
            <Input
              ref={ref}
              label={label}
              hideLabel={hideLabel}
              labelIcon={labelIcon}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={onFocus}
              onBlur={() => {
                close()
                onBlur?.()
              }}
              // A combobox that can never open would misannounce the field
              role={canSuggest ? "combobox" : undefined}
              aria-autocomplete={canSuggest ? "list" : undefined}
              aria-expanded={isOpen}
              aria-controls={isOpen ? listboxId : undefined}
              aria-activedescendant={
                isOpen && activeIndex >= 0 ? optionId(activeIndex) : undefined
              }
              autoComplete="off"
              status={status}
              size={size}
              clearable={clearable}
              onClear={handleClear}
              loading={loading}
              disabled={disabled}
              readonly={readonly}
              required={required}
              name={name}
              autoFocus={autoFocus}
              data-testid="location-input-address"
            />
          </div>
        </PopoverAnchor>
        <PopoverContent
          align="start"
          sideOffset={4}
          container={portalContainer}
          className="w-[var(--radix-popover-trigger-width)] min-w-64 p-0"
          onOpenAutoFocus={preventDefault}
          onCloseAutoFocus={preventDefault}
        >
          <SuggestionListbox
            id={listboxId}
            suggestions={suggestions}
            activeIndex={activeIndex}
            isSearching={isSearching}
            hasSearched={hasSearched}
            optionId={optionId}
            onPick={pick}
            onHover={setActiveIndex}
          />
        </PopoverContent>
      </Popover>
    )
  }
)
