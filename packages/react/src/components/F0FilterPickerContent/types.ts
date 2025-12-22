import type { FiltersDefinition, FiltersState } from "../OneFilterPicker/types"

/**
 * Props for the F0FilterPickerContent component.
 * @template Filters - The type defining the structure of available filters
 */
export interface F0FilterPickerContentProps<Filters extends FiltersDefinition> {
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
