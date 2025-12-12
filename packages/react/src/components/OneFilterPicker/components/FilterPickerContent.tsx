"use client"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useEffect, useMemo, useState } from "react"
import { getFilterType } from "../filterTypes"
import type { FilterTypeContext, FilterTypeSchema } from "../filterTypes/types"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterPickerInner } from "./FilterPickerInner"

const DEFAULT_FORM_HEIGHT = 388

/**
 * Props for the FilterPickerContent component.
 * @template Filters - The type defining the structure of available filters
 */
export interface FilterPickerContentProps<Filters extends FiltersDefinition> {
  /** The schema defining available filters and their configurations */
  filters: Filters
  /** Current state of applied filters */
  value: FiltersState<Filters>
  /**
   * Callback fired when filters change.
   * - With apply button (default): called when Apply button is clicked
   * - Without apply button: called immediately on every selection
   */
  onChange: (value: FiltersState<Filters>) => void
  /** Height of the content panel */
  height?: number
  /** Width of the content panel */
  width?: number
  /** Optional className for the container */
  className?: string
  /** Whether to show the apply button (default: true) */
  showApplyButton?: boolean
  /** Custom label for the apply button */
  applyButtonLabel?: string
}

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
 * <FilterPickerContent
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
export function FilterPickerContent<Filters extends FiltersDefinition>({
  filters,
  value,
  onChange,
  height,
  width = 600,
  className,
  showApplyButton = true,
  applyButtonLabel,
}: FilterPickerContentProps<Filters>) {
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
      style={{ width }}
    >
      <FilterPickerInner
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

FilterPickerContent.displayName = "FilterPickerContent"
