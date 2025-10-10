import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { RecordType } from "./records.typings"

/**
 * Represents the selected items by id
 */
export type SelectedItemsState = {
  allSelected?: boolean | "indeterminate"
  items?: ReadonlyArray<{ id: string; checked: boolean }>
  groups?: ReadonlyArray<{ groupId: string; checked: boolean }>
}

export type SelectedItemsDetailedStatus<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = {
  allSelected: boolean | "indeterminate"
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  groupsStatus: Record<string, boolean>
  filters: FiltersState<Filters>
  selectedCount: number
}

export type OnSelectItemsCallback<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = (
  selectedItems: SelectedItemsDetailedStatus<R, Filters> & {
    byLane?: Record<string, SelectedItemsDetailedStatus<R, Filters>>
  },
  clearSelectedItems: () => void
) => void
