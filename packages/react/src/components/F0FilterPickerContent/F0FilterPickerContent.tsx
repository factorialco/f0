"use client"

/**
 * Public implementation of the FilterPickerInternal component.
 * F0FilterPickerContent component.
 */
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useEffect, useMemo, useState } from "react"
import { getFilterType } from "../OneFilterPicker/filterTypes"
import type {
  FilterTypeContext,
  FilterTypeSchema,
} from "../OneFilterPicker/filterTypes/types"
import type { FiltersDefinition, FiltersState } from "../OneFilterPicker/types"
import { FilterPickerInternal } from "./internal"
import type { F0FilterPickerContentProps } from "./types"

const DEFAULT_FORM_HEIGHT = 388

/**
 * A standalone dual-pane filter picker content component.
 *
 * This component renders the filter picker interface (left panel with filter list,
 * right panel with filter content) without any popover wrapper, allowing it to be
 * embedded directly in modals, sidebars, or other containers.
 *
 * Features:
 * - Left panel showing filter categories with search
 * - Right panel showing filter options for the selected filter
 * - Multi-select with checkboxes for "in" type filters
 * - Support for search, date, number, and custom filter types
 * - Select All and Clear actions
 *
 * @template Filters - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Embed directly in a modal or page
 * <F0FilterPickerContent
 *   filters={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: {
 *         options: [
 *           { value: "engineering", label: "Engineering" },
 *           { value: "marketing", label: "Marketing" },
 *         ]
 *       }
 *     },
 *     location: {
 *       type: "in",
 *       label: "Location",
 *       options: {
 *         options: [
 *           { value: "nyc", label: "New York" },
 *           { value: "sf", label: "San Francisco" },
 *         ]
 *       }
 *     }
 *   }}
 *   value={selectedFilters}
 *   onChange={setSelectedFilters}
 * />
 * ```
 */
export function F0FilterPickerContent<Filters extends FiltersDefinition>({
  filters,
  value,
  onChange,
  height,
  width = 600,
  className,
  showApplyButton = true,
  applyButtonLabel,
}: F0FilterPickerContentProps<Filters>) {
  const i18n = useI18n()

  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Filters | null
  >(null)
  const [localFiltersValue, setLocalFiltersValue] =
    useState<FiltersState<Filters>>(value)

  // Sync local value with prop
  useEffect(() => {
    setLocalFiltersValue(value)
  }, [value])

  // Auto-select first filter or first filter with value
  useEffect(() => {
    if (!selectedFilterKey && filters) {
      const filterKeys = Object.keys(filters) as (keyof Filters)[]
      if (filterKeys.length > 0) {
        // Try to find first filter with a value
        const firstFilterWithValue = filterKeys.find((key) => {
          const filterValue = localFiltersValue[key]
          // TODO: Make this type better (same as FiltersControls.tsx)
          const filterType = getFilterType(filters[key].type) as unknown as {
            isEmpty: (value: unknown, context: FilterTypeContext) => boolean
          }
          return (
            filterValue !== undefined &&
            !filterType.isEmpty(filterValue, {
              schema: filters[key] as unknown as FilterTypeSchema,
              i18n,
            })
          )
        })
        setSelectedFilterKey(firstFilterWithValue ?? filterKeys[0])
      }
    }
  }, [filters, selectedFilterKey, localFiltersValue, i18n])

  const updateFilterValue = (key: keyof Filters, newValue: unknown): void => {
    const updatedFilters = {
      ...localFiltersValue,
      [key]: newValue,
    }
    setLocalFiltersValue(updatedFilters)

    // When there's no apply button, call onChange immediately on every selection
    if (!showApplyButton) {
      onChange(updatedFilters)
    }
  }

  const handleApplyFilters = () => {
    onChange(localFiltersValue)
  }

  // Calculate form height based on filter types
  const formHeight = useMemo(() => {
    if (height) return height
    const maxHeight = Object.entries(filters).reduce((max, [_, value]) => {
      const filterType = getFilterType(value.type)
      return Math.max(max, filterType?.formHeight || DEFAULT_FORM_HEIGHT)
    }, 0)
    return maxHeight
  }, [filters, height])

  if (!filters || Object.keys(filters).length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        className
      )}
      style={{ maxWidth: width }}
    >
      <FilterPickerInternal
        filters={filters}
        tempFilters={localFiltersValue}
        selectedFilterKey={selectedFilterKey}
        onFilterSelect={setSelectedFilterKey}
        onFilterChange={updateFilterValue}
        onApply={handleApplyFilters}
        height={formHeight}
        showApplyButton={showApplyButton}
        applyButtonLabel={applyButtonLabel}
      />
    </div>
  )
}

F0FilterPickerContent.displayName = "F0FilterPickerContent"
