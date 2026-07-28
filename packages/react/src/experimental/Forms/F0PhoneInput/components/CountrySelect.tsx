import type { CountryCode as PhoneCountry } from "libphonenumber-js"
import { useMemo } from "react"

import { F0Icon } from "@/components/F0Icon"
import type { F0SelectItemProps } from "@/components/F0Select"
import { F0Select } from "@/components/F0Select"
import { flagsMap } from "@/flags"
import { ChevronDown } from "@/icons/app"
import type { CountryCode } from "@/lib/countries"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { dialCodeFor, toCountryCode } from "../lib/phone"
import type { PhoneInputSize } from "../types"
import { CountryFlag } from "./CountryFlag"

/**
 * Option shape react-phone-number-input passes to its `countrySelectComponent`
 */
export type CountrySelectOption = {
  value?: PhoneCountry
  label: string
  divider?: boolean
}

type CountrySelectProps = {
  value?: PhoneCountry
  options: CountrySelectOption[]
  onChange: (value?: PhoneCountry) => void
  disabled?: boolean
  readOnly?: boolean
  size: PhoneInputSize
}

export const CountrySelect = ({
  value,
  options,
  onChange,
  disabled,
  readOnly,
  size,
}: CountrySelectProps) => {
  const i18n = useI18n()

  const selectOptions = useMemo(
    () =>
      options.flatMap((option): F0SelectItemProps<PhoneCountry>[] => {
        if (option.divider) {
          return [{ type: "separator" }]
        }
        // The value-less "International" option — the globe trigger covers it
        if (!option.value) {
          return []
        }
        const code = toCountryCode(option.value)
        return [
          {
            value: option.value,
            label: option.label,
            metadata: { type: "dialCode", dialCode: dialCodeFor(option.value) },
            avatar:
              code && code in flagsMap
                ? { type: "flag", flag: code as CountryCode }
                : undefined,
          },
        ]
      }),
    [options]
  )

  const selectedCode = toCountryCode(value)
  const triggerLabel = value
    ? i18n.t("phoneInput.countryWithDialCode", {
        country: (selectedCode && i18n.countries[selectedCode]) ?? value,
        dialCode: dialCodeFor(value),
      })
    : i18n.phoneInput.country

  return (
    <div className="h-full shrink-0">
      <F0Select<PhoneCountry>
        label={triggerLabel}
        hideLabel
        size={size}
        options={selectOptions}
        value={value}
        onChange={(next) => onChange(next)}
        disabled={disabled || readOnly}
        showSearchBox
        searchBoxPlaceholder={i18n.phoneInput.searchCountry}
        searchEmptyMessage={i18n.phoneInput.noResults}
        // The default search only matches labels — dial codes live in `metadata`
        searchFn={(option, search) => {
          if (!search) return true
          if (!("value" in option) || !option.value) return false
          const query = search.trim().toLowerCase()
          const dialCode =
            option.metadata?.type === "dialCode" ? option.metadata.dialCode : ""
          return (
            option.label.toLowerCase().includes(query) ||
            dialCode.toLowerCase().includes(query.replace(/\s/g, ""))
          )
        }}
      >
        <span
          className={cn(
            "flex h-full items-center gap-1 pr-1",
            size === "md" ? "pl-3" : "pl-2",
            !disabled && !readOnly && "cursor-pointer"
          )}
          data-testid="phone-input-country-trigger"
        >
          <CountryFlag country={value} />
          {value && (
            <span className="whitespace-nowrap text-f1-foreground">
              {dialCodeFor(value)}
            </span>
          )}
          <F0Icon
            icon={ChevronDown}
            size="sm"
            color="default"
            aria-hidden="true"
          />
        </span>
      </F0Select>
    </div>
  )
}
