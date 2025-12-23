import type { FiltersDefinition, FiltersState } from "../OneFilterPicker/types"

/**
 * Shared styling and behavior props used by both public and internal components.
 * Internal type - not exported to external consumers.
 * @template Filters - The type defining the structure of available filters
 */
export interface FilterPickerBaseProps<Filters extends FiltersDefinition> {
  /** The schema defining available filters and their configurations */
  filters: Filters
  /** Height of the content panel */
  height?: number
  /** Optional className for the container */
  className?: string
  /** Whether to show the apply button (default: true) */
  showApplyButton?: boolean
  /** Custom label for the apply button */
  applyButtonLabel?: string
}

/**
 * Props for the FilterPickerInternal component.
 * This is an internal component used by both F0FilterPickerContent and FiltersControls.
 */
export interface FilterPickerInternalProps<Filters extends FiltersDefinition>
  extends FilterPickerBaseProps<Filters> {
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
}
