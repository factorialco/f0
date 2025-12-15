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
  /** Status of items that have been loaded. Items not yet loaded won't appear here. */
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  /** All selected item IDs, including those not yet loaded */
  selectedIds: ReadonlyArray<SelectionId>
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
  /**
   * Disables the automatic "Select All" state when all items are manually selected.
   * When true, allSelected will always be false even if all items are checked.
   */
  disableSelectAll?: boolean
  /**
   * Indicates if search is currently active.
   * When true, selecting all visible items won't trigger "all selected" state,
   * because the visible items are a filtered subset.
   */
  isSearchActive?: boolean
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
   * Handles the change of the selected item.
   * Accepts either SelectionId(s) or the item itself (R).
   * When passing an item, the ID will be extracted using source.selectable.
   */
  handleSelectItemChange: (
    itemOrId: R | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void
  /**
   * Handles the change of the selected all items
   */
  handleSelectAll: (checked: boolean) => void
  /**
   * Handles the change of the selected group.
   * Accepts either SelectionId(s) or a GroupRecord.
   * When passing a GroupRecord, the key will be used as the ID.
   */
  handleSelectGroupChange: (
    groupOrId: GroupRecord<R> | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void
}
