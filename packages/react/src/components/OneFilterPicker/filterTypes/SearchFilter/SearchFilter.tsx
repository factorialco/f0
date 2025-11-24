"use client"

import { InputInternal } from "@/experimental/Forms/Fields/Input/internal"
import { Equal, EqualAproximately } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useMemo, useState } from "react"
import { FilterTypeComponentProps } from "../types"

export type SearchFilterOptions =
  | {
      /**
       * Shows a strict toggle button to clear the search value
       **/
      strictToggle?: false
    }
  | {
      strictToggle: true
      defaultStrict?: boolean
    }

/**
 * Props for the SearchFilter component.
 */
export type SearchFilterComponentProps = FilterTypeComponentProps<
  string | { value: string; strict: boolean },
  SearchFilterOptions,
  true
>

/**
 * A search filter component that provides free-text search functionality.
 * Renders an input field with appropriate placeholder text based on the filter label.
 *
 * @example
 * ```tsx
 * <SearchFilter
 *   filter={{ type: "search", label: "Name" }}
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 * />
 * ```
 */
export function SearchFilter({
  schema,
  value,
  onChange,
}: SearchFilterComponentProps) {
  const userOptions = "options" in schema ? schema.options : undefined
  const defaultStrict =
    (userOptions &&
      "defaultStrict" in userOptions &&
      userOptions.defaultStrict) ??
    false

  const options = {
    strictToggle: userOptions ? userOptions.strictToggle : false,
    defaultStrict: userOptions ? defaultStrict : false,
    ...schema.options,
  }
  const i18n = useI18n()

  const handleChange = (value: string) => {
    if (options.strictToggle) {
      onChange({
        value,
        strict: isStrict,
      })
    } else {
      onChange(value)
    }
  }

  const handleStrictChange = (value: boolean) => {
    setIsStrict(value)
    onChange({
      value: localValue ?? "",
      strict: value,
    })
  }

  const [isStrict, setIsStrict] = useState(options.defaultStrict)

  const localValue = useMemo(() => {
    if (typeof value === "object" && "value" in value) {
      return value.value
    }
    return value ?? ""
  }, [value])

  return (
    <div className="space-y-4 p-3">
      <InputInternal
        label={`Search ${schema.label.toLowerCase()}...`}
        hideLabel
        placeholder={`Search ${schema.label.toLowerCase()}...`}
        value={localValue}
        onChange={handleChange}
        clearable
        buttonToggle={
          options.strictToggle
            ? {
                label: [
                  i18n.filters.search.relaxed,
                  i18n.filters.search.strict,
                ],
                icon: [EqualAproximately, Equal],
                selected: isStrict,
                onChange: handleStrictChange,
              }
            : undefined
        }
      />
    </div>
  )
}
