import {
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  OnSelectItemsCallback,
  PaginationInfo,
  RecordType,
  SelectedItemsState,
  SelectionId,
  SortingsDefinition,
} from "../types"
import { Data, GroupRecord } from "../useData"

export type AllSelectionStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}

export type SelectionStatus<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = {
  allChecked: boolean | "indeterminate"
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  checkedItems: ReadonlyArray<R>
  uncheckedItems: ReadonlyArray<R>
  groupsStatus: Record<string, boolean>
  filters: FiltersState<Filters>
  selectedCount: number
  totalKnownItemsCount: number
}

export type UseSelectableProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  data: Data<R>
  paginationInfo: PaginationInfo | null
  source: DataSourceDefinition<R, Filters, Sortings, Grouping>
  onSelectItems?: OnSelectItemsCallback<R, Filters>
  selectionMode?: "multi" | "single"
  selectedState?: SelectedItemsState<R>
}

export type SelectionMeta<R extends RecordType> = {
  selectedItemsCount: number
  totalKnownItemsCount: number
  checkedItems: ReadonlyArray<R>
  uncheckedItems: ReadonlyArray<R>
}

export type UseSelectableReturn<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = {
  isAllSelected: boolean
  selectedItems: Map<SelectionId, R>
  selectedGroups: Map<SelectionId, GroupRecord<R>>
  isPartiallySelected: boolean
  groupAllSelectedStatus: Record<SelectionId, AllSelectionStatus>
  allSelectedStatus: AllSelectionStatus
  selectionStatus: SelectionStatus<R, Filters>
  // TODO Probaby we should remove the previous return values

  /**
   * The current selected state
   */
  selectedState: SelectedItemsState<R>
  /**
   * The meta data about the selection
   */
  selectionMeta: SelectionMeta<R>
  /**
   * Clears the selection
   */
  clearSelection: () => void
  /**
   * Handles the change of the selected item
   */
  handleSelectItemChange: (
    id: SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void
  /**
   * Handles the change of the selected all items
   */
  handleSelectAll: (checked: boolean) => void
  /**
   * Handles the change of the selected group
   */
  handleSelectGroupChange: (
    id: SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void
}
