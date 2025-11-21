"use client"

import { Input } from "@/ui/input"

import { Placeholder, Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { FilterTypeComponentProps } from "../types"

export type SearchFilterOptions = {
  /**
   * Shows a strict toggle button to clear the search value
   **/
  strictToggle?: boolean
}

/**
 * Props for the SearchFilter component.
 */
export type SearchFilterComponentProps = FilterTypeComponentProps<
  string,
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
  const options = {
    strictToggle: schema.options?.strictToggle ?? false,
    ...schema.options,
  }
  const i18n = useI18n()
  return (
    <div className="space-y-4 p-3">
      <Input
        label={`Search ${schema.label.toLowerCase()}...`}
        hideLabel
        placeholder={`Search ${schema.label.toLowerCase()}...`}
        value={value}
        onChange={onChange}
        clearable
        buttonToggle={
          options.strictToggle
            ? {
                label: [
                  i18n.filters.search.relaxed,
                  i18n.filters.search.strict,
                ],
                icon: [Search, Placeholder],
                selected: false,
                onChange: () => onChange(""),
              }
            : undefined
        }
      />
    </div>
  )
}
