import type { FiltersDefinition, FiltersState } from "../OneFilterPicker/types"
import type { FilterPickerBaseProps } from "./internal-types"

/**
 * Props for the F0FilterPickerContent component.
 * @template Filters - The type defining the structure of available filters
 */
export interface F0FilterPickerContentProps<
  Filters extends FiltersDefinition,
> extends FilterPickerBaseProps<Filters> {
  /** Current state of applied filters */
  value: FiltersState<Filters>
  /**
   * Callback fired when filters change.
   * - With apply button (default): called when Apply button is clicked
   * - Without apply button: called immediately on every selection
   */
  onChange: (value: FiltersState<Filters>) => void
  /** Width of the content panel */
  width?: number
}
