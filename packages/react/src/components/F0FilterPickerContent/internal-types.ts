"use client"

import type { FiltersDefinition, FiltersState } from "../OneFilterPicker/types"

/**
 * Props for the FilterPickerInternal component.
 * This is an internal component used by both F0FilterPickerContent and FiltersControls.
 */
export interface FilterPickerInternalProps<Filters extends FiltersDefinition> {
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
