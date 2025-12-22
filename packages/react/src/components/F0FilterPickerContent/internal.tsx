"use client"

import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { FilterContent } from "../OneFilterPicker/components/FilterContent"
import { FilterList } from "../OneFilterPicker/components/FilterList"
import type { FiltersDefinition } from "../OneFilterPicker/types"
import type { FilterPickerInternalProps } from "./internal-types"

/**
 * Internal component that renders the filter picker content.
 * Used by both F0FilterPickerContent and FiltersControls to avoid code duplication.
 */
export function FilterPickerInternal<Filters extends FiltersDefinition>({
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
}: FilterPickerInternalProps<Filters>) {
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

FilterPickerInternal.displayName = "FilterPickerInternal"
