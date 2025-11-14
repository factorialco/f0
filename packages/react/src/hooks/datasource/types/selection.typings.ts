import {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { WithGroupId } from "../useData"
import { RecordType } from "./records.typings"

export type SelectionId = number | string

export type SelectedState = {
  id: SelectionId
  checked: boolean
}

export type SelectedItemState<R extends RecordType> = SelectedState & {
  item?: WithGroupId<R>
}
/**
 * Represents the selected items by id
 */
export type SelectedItemsState<R extends RecordType> = {
  allSelected: boolean | "indeterminate"
  items: Map<SelectedItemState<R>["id"], SelectedItemState<R>>
  groups: Map<SelectedState["id"], SelectedState>
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
