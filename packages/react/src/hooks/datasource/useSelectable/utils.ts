import { RecordType, SelectedItemsState } from "../types"

/**
 * Convert the selected state to a selection state map
 */
export const parseSelectedState = <R extends RecordType>(
  selectedState: SelectedItemsState<R> | undefined
): SelectedItemsState<R> => {
  return {
    allSelected: selectedState?.allSelected ?? false,
    items: selectedState?.items ?? new Map(),
    groups: selectedState?.groups ?? new Map(),
  }
}
