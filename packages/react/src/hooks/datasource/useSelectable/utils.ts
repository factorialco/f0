import type { GroupRecord } from "../useData"

import { RecordType, SelectedItemsState, SelectionId } from "../types"

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

/**
 * Type guard to check if a value is a GroupRecord
 */
export const isGroupRecord = <R extends RecordType>(
  value: GroupRecord<R> | SelectionId | readonly SelectionId[]
): value is GroupRecord<R> => {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    "key" in value &&
    "records" in value
  )
}

/**
 * Type guard to check if a value is a RecordType (item)
 */
export const isRecordItem = <R extends RecordType>(
  value: R | SelectionId | readonly SelectionId[],
  hasSelectable: boolean
): value is R => {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    hasSelectable
  )
}
