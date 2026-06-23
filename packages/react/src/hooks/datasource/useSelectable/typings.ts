import {
  DataSource,
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
  source: DataSource<R, Filters, Sortings, Grouping>
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
  /**
   * When true, selection spans across all pages (cross-page selection).
   * - Selection state persists when navigating between pages
   * - itemStatus includes items from all pages
   *
   * When false (default), selection is scoped to the current page only:
   * - Selection state resets when navigating between pages
   * - itemStatus only includes items from the current page
   */
  allPagesSelection?: boolean
  /**
   * When true (default), clears selection when navigating to a different page
   * in page-based pagination (unless all items are selected via the
   * "Select all N items" banner). Set to false to persist selections across
   * page changes unconditionally.
   *
   * This flag has no effect on infinite-scroll pagination: loadMore() advances
   * the cursor but the list is cumulative, so selections are always preserved
   * across loadMore() calls regardless of this flag.
   */
  resetOnPageChange?: boolean
  /**
   * When true, preserves selection when the dataset identity changes
   * (filters, sortings, or search query). Useful for select/picker
   * components where the user searches and filters to find items to
   * add to an existing selection, not to view a different dataset.
   *
   * @default false
   */
  preserveSelectionOnDatasetChange?: boolean
  /**
   * Selectable rows currently rendered (incl. nested children), so "select all"
   * reaches rows absent from `data.records`. Falls back to `data.records`.
   */
  getRenderedSelectableEntries?: () => Array<[SelectionId, R]>
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
   * Handles "select all" for the current page only
   */
  handleSelectAll: (checked: boolean) => void
  /**
   * Handles "select all items" across all pages (full dataset).
   * Only meaningful when allPagesSelection is enabled.
   */
  handleSelectAllItems: (checked: boolean) => void
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
