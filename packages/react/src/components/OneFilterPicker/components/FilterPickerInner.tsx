"use client"

import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterContent } from "./FilterContent"
import { FilterList } from "./FilterList"

/**
 * Props for the FilterPickerInner component.
 * This is an internal component used by both FilterPickerContent and FiltersControls.
 */
export interface FilterPickerInnerProps<Filters extends FiltersDefinition> {
  /** The schema defining available filters */
  filters: Filters
  /** Current temporary state of filters being configured */
  tempFilters: FiltersState<Filters>
  /** Currently selected filter key */
  selectedFilterKey: keyof Filters | null
  /** Callback when a filter is selected */
  onFilterSelect: (key: keyof Filters) => void
  /** Callback when a filter value changes */
  onFilterChange: (key: keyof Filters, value: unknown) => void
  /** Callback when apply button is clicked */
  onApply: () => void
  /** Height of the inner content */
  height?: number
  /** Whether to show the apply button */
  showApplyButton?: boolean
  /** Custom label for the apply button */
  applyButtonLabel?: string
  /** Optional className */
  className?: string
}

/**
 * Internal component that renders the filter picker content.
 * Used by both FilterPickerContent and FiltersControls to avoid code duplication.
 */
export function FilterPickerInner<Filters extends FiltersDefinition>({
  filters,
  tempFilters,
  selectedFilterKey,
  onFilterSelect,
  onFilterChange,
  onApply,
  height,
  showApplyButton = true,
  applyButtonLabel,
  className,
}: FilterPickerInnerProps<Filters>) {
  const i18n = useI18n()

  return (
    <div
      className={cn("flex flex-col transition-all", className)}
      style={{ height }}
    >
      <div className="flex min-h-0 flex-1">
        <FilterList
          definition={filters}
          tempFilters={tempFilters}
          selectedFilterKey={selectedFilterKey}
          onFilterSelect={onFilterSelect}
          onClickApplyFilters={onApply}
        />
        {selectedFilterKey && (
          <FilterContent
            selectedFilterKey={selectedFilterKey}
            definition={filters}
            tempFilters={tempFilters}
            onFilterChange={onFilterChange}
          />
        )}
      </div>
      {showApplyButton && (
        <div className="flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background p-2">
          <F0Button
            onClick={onApply}
            label={applyButtonLabel ?? i18n.filters.applyFilters}
          />
        </div>
      )}
    </div>
  )
}

FilterPickerInner.displayName = "FilterPickerInner"
