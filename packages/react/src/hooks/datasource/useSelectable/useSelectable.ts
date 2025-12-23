import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  GroupingDefinition,
  RecordType,
  SelectedItemsState,
  SelectedItemState,
  SelectionId,
} from "../types"
import type { SortingsDefinition } from "../types/sortings.typings"
import { GROUP_ID_SYMBOL, GroupRecord, WithGroupId } from "../useData"
import {
  AllSelectionStatus,
  SelectionStatus,
  UseSelectableProps,
  UseSelectableReturn,
} from "./typings"
import { isGroupRecord, isRecordItem, parseSelectedState } from "./utils"

/**
 * Custom hook to manage selection state for items and groups in a data table
 * Supports single/multi selection, grouped data, pagination, and filtering
 */
export function useSelectable<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  data,
  paginationInfo,
  source,
  selectionMode = "multi",
  selectedState,
  onSelectItems,
  disableSelectAll = false,
  isSearchActive = false,
  pageOnlySelection,
}: UseSelectableProps<R, Filters, Sortings, Grouping>): UseSelectableReturn<
  R,
  Filters
> {
  // Configuration
  const isGrouped = data.type === "grouped"
  const isMultiSelection = selectionMode === "multi"
  const getSelectable = source.selectable
  // Use pageOnlySelection from props, falling back to source.pageOnlySelection, default true
  const isPageOnlySelection =
    pageOnlySelection ?? source.pageOnlySelection ?? true

  // State & Refs

  const [localSelectedState, setLocalSelectedState] = useState<
    SelectedItemsState<R>
  >(parseSelectedState(selectedState))

  const [groupsState, setGroupsState] = useState<
    Map<string, { group: GroupRecord<R>; checked: boolean }>
  >(new Map())

  const [allSelectedCheck, setAllSelectedCheck] = useState(false)
  const [selectAllTotal, setSelectAllTotal] = useState<number | null>(null)

  // Refs for tracking state changes and avoiding unnecessary re-renders
  const wasExplicitSelectAll = useRef(false)
  const previousSelectedStateKey = useRef<string>("")
  const hasInitialized = useRef(false)
  const isInitialMount = useRef(true)
  const previousFilters = useRef(source.currentFilters)
  const previousDataRecordsKey = useRef<string>("")
  const previousSelectionState = useRef<string>("")
  const isAllSelectedRef = useRef(false)
  // Track current page/cursor for pageOnlySelection mode - initialized as undefined
  const previousPageIdentifierRef = useRef<string | number | null | undefined>(
    undefined
  )

  // Computed Values

  const totalKnownItemsCount = useMemo(() => {
    // In pageOnlySelection mode, only count items in current page
    if (isPageOnlySelection) {
      return data.records?.length || 0
    }
    return paginationInfo ? paginationInfo.total : data.records?.length
  }, [paginationInfo, data.records?.length, isPageOnlySelection])

  // Extract page identifier for tracking page changes
  const currentPageIdentifier = useMemo(() => {
    if (!paginationInfo) return null
    if ("type" in paginationInfo && paginationInfo.type === "pages") {
      return paginationInfo.currentPage
    }
    if ("cursor" in paginationInfo) {
      return paginationInfo.cursor
    }
    return null
  }, [paginationInfo])

  const [checkedItems, uncheckedItems] = useMemo(() => {
    const checked = new Map()
    const unchecked = new Map()
    for (const [id, value] of localSelectedState.items?.entries() || []) {
      if (value.checked) {
        checked.set(id, value.item)
      } else {
        unchecked.set(id, value.item)
      }
    }
    return [checked, unchecked]
  }, [localSelectedState.items])

  const checkedCount = checkedItems.size
  const uncheckedCount = uncheckedItems.size

  const areAllKnownItemsSelected = useMemo(
    () => checkedCount === totalKnownItemsCount && totalKnownItemsCount > 0,
    [totalKnownItemsCount, checkedCount]
  )

  const isAllSelected = useMemo(() => {
    if (disableSelectAll) return false
    if (isSearchActive) return allSelectedCheck && checkedCount > 0
    return (allSelectedCheck || areAllKnownItemsSelected) && checkedCount > 0
  }, [
    disableSelectAll,
    allSelectedCheck,
    areAllKnownItemsSelected,
    checkedCount,
    isSearchActive,
  ])

  const allSelectedState = useMemo(() => {
    if (disableSelectAll) return false
    if (isSearchActive && !wasExplicitSelectAll.current) return false
    if (!allSelectedCheck) return false
    return uncheckedCount === 0 ? true : "indeterminate"
  }, [disableSelectAll, allSelectedCheck, uncheckedCount, isSearchActive])

  const isPartiallySelected = allSelectedState === "indeterminate"

  const checkedGroups = useMemo(() => {
    const checked = new Map()
    for (const [id, value] of groupsState.entries()) {
      if (value.checked) {
        checked.set(id, value.group)
      }
    }
    return checked
  }, [groupsState])

  const groupAllSelectedStatus = useMemo((): Record<
    string,
    AllSelectionStatus
  > => {
    if (!isGrouped || data.type !== "grouped") return {}

    const result: Record<string, AllSelectionStatus> = {}

    for (const group of data.groups) {
      const groupItemIds = group.records
        .map((record) => getSelectable?.(record))
        .filter((id): id is SelectionId => id !== undefined)

      let selectedCount = 0
      let unselectedCount = 0

      for (const itemId of groupItemIds) {
        const itemState = localSelectedState.items?.get(itemId)
        if (itemState?.checked) {
          selectedCount++
        } else {
          unselectedCount++
        }
      }

      const totalItems = groupItemIds.length
      const isAllGroupItemsSelected =
        selectedCount === totalItems && totalItems > 0
      const isPartiallySelected =
        selectedCount > 0 && selectedCount < totalItems

      result[group.key] = {
        checked: isAllGroupItemsSelected || isPartiallySelected,
        indeterminate: isPartiallySelected,
        selectedCount,
        unselectedCount,
      }
    }

    return result
  }, [isGrouped, data, localSelectedState.items, getSelectable])

  const selectedItemsCount = useMemo(() => {
    if (isGrouped) {
      return Object.values(groupAllSelectedStatus).reduce(
        (acc, curr) => acc + (curr.selectedCount || 0),
        0
      )
    }
    if (allSelectedCheck && selectAllTotal !== null) {
      return selectAllTotal - uncheckedCount
    }
    return checkedCount
  }, [
    groupAllSelectedStatus,
    selectAllTotal,
    uncheckedCount,
    checkedCount,
    isGrouped,
    allSelectedCheck,
  ])

  const { itemsStatus, selectedIds } = useMemo(() => {
    const items = localSelectedState.items || new Map()

    // In pageOnlySelection mode, only include items from current page
    const currentPageItemIds = isPageOnlySelection
      ? new Set(
          data.records
            .map((record) => getSelectable?.(record))
            .filter((id): id is SelectionId => id !== undefined)
        )
      : null

    const itemsStatus = Array.from(items.values())
      .filter((itemState) => {
        if (itemState.item === undefined) return false
        // Filter to only current page items in pageOnlySelection mode
        if (isPageOnlySelection && currentPageItemIds) {
          return currentPageItemIds.has(itemState.id)
        }
        return true
      })
      .map(({ item, checked }) => ({ item: item as R, checked }))

    const selectedIds = Array.from(items.entries())
      .filter(([id, itemState]) => {
        if (!itemState.checked) return false
        // Filter to only current page items in pageOnlySelection mode
        if (isPageOnlySelection && currentPageItemIds) {
          return currentPageItemIds.has(id)
        }
        return true
      })
      .map(([id]) => id)

    return { itemsStatus, selectedIds }
  }, [
    localSelectedState.items,
    isPageOnlySelection,
    data.records,
    getSelectable,
  ])

  const groupsStatus = useMemo(
    () =>
      Object.fromEntries(
        Array.from(groupsState.values()).map(({ group, checked }) => [
          group.key,
          !!checked,
        ])
      ),
    [groupsState]
  )

  const selectionStatus = useMemo((): SelectionStatus<R, Filters> => {
    return {
      allChecked: allSelectedState,
      itemsStatus,
      selectedIds,
      checkedItems: Array.from(checkedItems.values()),
      uncheckedItems: Array.from(uncheckedItems.values()),
      groupsStatus,
      filters: source.currentFilters || {},
      selectedCount: selectedItemsCount,
      totalKnownItemsCount,
    }
  }, [
    allSelectedState,
    itemsStatus,
    selectedIds,
    checkedItems,
    uncheckedItems,
    groupsStatus,
    source.currentFilters,
    selectedItemsCount,
    totalKnownItemsCount,
  ])

  const allSelectedStatus: AllSelectionStatus = {
    checked: allSelectedCheck || isPartiallySelected,
    indeterminate: isPartiallySelected,
    selectedCount: selectedItemsCount,
    unselectedCount: uncheckedCount,
  }

  // Helper Functions

  const getItemById = useCallback(
    (id: SelectionId) => {
      return (
        localSelectedState.items?.get(id)?.item ??
        data.records.find((record) => {
          const itemId = getSelectable?.(record)
          return itemId !== undefined && itemId === id
        })
      )
    },
    [localSelectedState.items, data.records, getSelectable]
  )

  const getAllRecords = useCallback(() => {
    if (data.type === "grouped") {
      return data.groups.flatMap((group) => group.records)
    }
    return data.records
  }, [data])

  const getSelectedStateKey = useCallback(
    (state: SelectedItemsState<R> | undefined): string => {
      if (!state) return ""
      const itemsKeys = Array.from(state.items?.entries() || [])
        .map(([id, item]) => `${id}:${item.checked}`)
        .sort()
        .join(",")
      const groupsKeys = Array.from(state.groups?.entries() || [])
        .map(([id, group]) => `${id}:${group.checked}`)
        .sort()
        .join(",")
      return `${state.allSelected}|${itemsKeys}|${groupsKeys}`
    },
    []
  )

  /**
   * Merges external selected state with local state, preserving user selections
   */
  const updateLocalSelectedState = useCallback(
    (selectedState: SelectedItemsState<R> | undefined) => {
      const newSelectedState = parseSelectedState(selectedState)

      setLocalSelectedState((current) => {
        const mergedItems = new Map<
          SelectedItemState<R>["id"],
          SelectedItemState<R>
        >()

        for (const [id, itemState] of current.items?.entries() || []) {
          mergedItems.set(id, itemState)
        }

        for (const [
          itemStateId,
          itemState,
        ] of newSelectedState.items?.entries() || []) {
          const existingItem = mergedItems.get(itemStateId)
          const item = getItemById(itemStateId)

          if (!existingItem) {
            mergedItems.set(itemStateId, {
              id: itemStateId,
              checked: itemState.checked,
              item,
            })
          } else if (existingItem.item === undefined && item !== undefined) {
            mergedItems.set(itemStateId, {
              ...existingItem,
              item,
            })
          }
        }

        for (const record of data.records) {
          const id = getSelectable?.(record)
          if (id && !mergedItems.has(id)) {
            mergedItems.set(id, {
              id,
              checked: allSelectedCheck,
              item: record,
            })
          }
        }

        const mergedGroups = new Map<string, SelectedItemState<R>>()
        for (const [
          groupId,
          groupState,
        ] of newSelectedState.groups?.entries() || []) {
          mergedGroups.set(String(groupId), {
            id: groupId,
            checked: groupState.checked,
          })
        }

        return {
          allSelected: current.allSelected,
          items: mergedItems,
          groups: mergedGroups,
        }
      })
    },
    [data.records, getSelectable, allSelectedCheck, getItemById]
  )

  // Selection Handlers (Internal)

  /**
   * Internal handler for item selection by IDs
   * @param onlyIfNotPreviousState - Only applies state if item doesn't have previous state
   */
  const handleSelectItemChangeInternal = useCallback(
    (
      itemId: SelectionId | readonly SelectionId[],
      checked: boolean,
      onlyIfNotPreviousState: boolean = false
    ) => {
      const itemIds = (Array.isArray(itemId) ? itemId : [itemId]).slice(
        0,
        isMultiSelection ? undefined : 1
      )

      setLocalSelectedState((current) => {
        // Single selection: replace previous selection entirely
        const newItemsState =
          !isMultiSelection && checked ? new Map() : new Map(current.items)

        let updated = 0

        for (const id of itemIds) {
          if (onlyIfNotPreviousState && newItemsState.has(id)) {
            continue
          }

          updated++
          const existingItem = current.items?.get(id)?.item
          const item =
            existingItem ??
            data.records.find((record) => {
              const recordId = getSelectable?.(record)
              return recordId !== undefined && recordId === id
            })

          newItemsState.set(id, { id, checked, item })
        }

        if (updated === 0) return current

        return {
          ...current,
          items: newItemsState,
        }
      })
    },
    [isMultiSelection, data.records, getSelectable]
  )

  /**
   * Handles group selection by selecting/deselecting all items within the group(s)
   */
  const handleSelectGroupChange = useCallback(
    (
      groupOrId: GroupRecord<R> | SelectionId | readonly SelectionId[],
      checked: boolean
    ) => {
      if (!isGrouped || data.type !== "grouped") return

      const groupIds: SelectionId[] = isGroupRecord(groupOrId)
        ? [groupOrId.key]
        : Array.isArray(groupOrId)
          ? [...groupOrId]
          : [groupOrId]

      const groups = data.groups.filter((group) => groupIds.includes(group.key))
      if (groups.length === 0) return

      const groupItemIds = groups.flatMap((group) =>
        group.records
          .map((record) => getSelectable?.(record))
          .filter((id): id is SelectionId => id !== undefined)
      )

      if (groupItemIds.length > 0) {
        handleSelectItemChangeInternal(groupItemIds, checked)
      }

      setGroupsState((current) => {
        const newState = new Map(current)
        for (const group of groups) {
          newState.set(group.key, { group, checked })
        }
        return newState
      })
    },
    [isGrouped, data, getSelectable, handleSelectItemChangeInternal]
  )

  // Public Selection Handlers

  /**
   * Public handler for item selection
   * Accepts either item IDs or the items themselves
   */
  const handleSelectItemChange = useCallback(
    (itemOrId: R | SelectionId | readonly SelectionId[], checked: boolean) => {
      if (isRecordItem(itemOrId, getSelectable !== undefined)) {
        const id = getSelectable?.(itemOrId)
        if (id !== undefined) {
          handleSelectItemChangeInternal(id, checked)
        }
        return
      }

      handleSelectItemChangeInternal(itemOrId, checked)
    },
    [getSelectable, handleSelectItemChangeInternal]
  )

  /**
   * Handles "Select All" functionality
   * Supports both grouped and flat data structures
   */
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (!isMultiSelection) return

      setAllSelectedCheck(checked)
      wasExplicitSelectAll.current = checked

      if (checked) {
        setSelectAllTotal(totalKnownItemsCount)
      } else {
        setSelectAllTotal(null)
      }

      if (isGrouped && data.type === "grouped") {
        const allGroupIds = data.groups.map((group) => group.key)
        if (allGroupIds.length > 0) {
          handleSelectGroupChange(allGroupIds, checked)
        }
      } else {
        const allItemIds = data.records
          .map((record) => getSelectable?.(record))
          .filter((id): id is SelectionId => id !== undefined)

        if (allItemIds.length > 0) {
          handleSelectItemChangeInternal(allItemIds, checked)
        }

        // Update items not in current page (e.g., items selected before pagination/filtering)
        setLocalSelectedState((current) => {
          const newItems = new Map(current.items)
          let hasChanges = false

          for (const [id, itemState] of newItems.entries()) {
            if (itemState.checked !== checked) {
              newItems.set(id, { ...itemState, checked })
              hasChanges = true
            }
          }

          if (!hasChanges) return current

          return {
            ...current,
            allSelected: checked ? true : false,
            items: newItems,
          }
        })
      }
    },
    [
      isMultiSelection,
      totalKnownItemsCount,
      isGrouped,
      data,
      getSelectable,
      handleSelectGroupChange,
      handleSelectItemChangeInternal,
    ]
  )

  /**
   * Clears all selections
   */
  const clearSelectedItems = useCallback(() => {
    setAllSelectedCheck(false)
    wasExplicitSelectAll.current = false
    setSelectAllTotal(null)
    setGroupsState(new Map())
    setLocalSelectedState(() => ({
      allSelected: false,
      items: new Map(),
      groups: new Map(),
    }))
  }, [])

  // Sync allSelected state back to localSelectedState
  useEffect(() => {
    setLocalSelectedState((current) => ({
      ...current,
      allSelected: allSelectedState,
    }))
  }, [allSelectedState])

  // Sync external selectedState with local state
  useEffect(() => {
    const currentKey = getSelectedStateKey(selectedState)

    if (!hasInitialized.current) {
      hasInitialized.current = true
      previousSelectedStateKey.current = currentKey
      return
    }

    if (currentKey === previousSelectedStateKey.current) return

    previousSelectedStateKey.current = currentKey
    updateLocalSelectedState(selectedState)
  }, [selectedState, getSelectedStateKey, updateLocalSelectedState])

  // Clear selections when filters change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      previousFilters.current = source.currentFilters
      return
    }

    // Deep comparison of filters to detect changes
    const currentFiltersKey = JSON.stringify(source.currentFilters)
    const previousFiltersKey = JSON.stringify(previousFilters.current)

    if (currentFiltersKey !== previousFiltersKey) {
      clearSelectedItems()
      previousFilters.current = source.currentFilters
    }
  }, [source.currentFilters, clearSelectedItems])

  // Clear selections when page changes in pageOnlySelection mode
  useEffect(() => {
    if (!isPageOnlySelection) return

    const previousPageIdentifier = previousPageIdentifierRef.current

    // Skip on initial mount
    if (previousPageIdentifier === undefined) {
      previousPageIdentifierRef.current = currentPageIdentifier
      return
    }

    // Clear selection if page changed
    if (currentPageIdentifier !== previousPageIdentifier) {
      clearSelectedItems()
    }

    // Always update the ref to track the current page
    previousPageIdentifierRef.current = currentPageIdentifier
  }, [currentPageIdentifier, isPageOnlySelection, clearSelectedItems])

  // Store isAllSelected in ref to avoid circular dependencies
  useEffect(() => {
    isAllSelectedRef.current = isAllSelected
  }, [isAllSelected])

  // Sync selection state when data changes
  useEffect(() => {
    const allRecords = getAllRecords()
    if (allRecords.length === 0) return

    const recordIds = allRecords
      .map((record) => getSelectable?.(record))
      .filter((id) => id !== undefined)

    const currentKey = recordIds.join(",")

    if (currentKey === previousDataRecordsKey.current) {
      return
    }
    previousDataRecordsKey.current = currentKey

    if (isGrouped) {
      for (const record of allRecords) {
        const recordId = getSelectable?.(record)
        if (recordId === undefined) continue

        const groupId = (record as WithGroupId<R>)[GROUP_ID_SYMBOL] as
          | string
          | undefined
        if (groupId) {
          const groupState = groupsState.get(groupId)
          if (groupState?.checked) {
            handleSelectItemChangeInternal(recordId, true, true)
          }
        }
      }
    } else {
      if (isMultiSelection && !isPageOnlySelection) {
        handleSelectItemChangeInternal(
          recordIds,
          isAllSelectedRef.current,
          true
        )
      }
    }

    // Populate item references for pre-selected items (selected before data loaded)
    setLocalSelectedState((current) => {
      let hasChanges = false
      const updatedItems = new Map(current.items)

      for (const [id, itemState] of updatedItems.entries()) {
        if (itemState.item === undefined) {
          const foundItem = allRecords.find((record) => {
            const recordId = getSelectable?.(record)
            return recordId !== undefined && recordId === id
          })
          if (foundItem) {
            updatedItems.set(id, {
              ...itemState,
              item: foundItem as WithGroupId<R>,
            })
            hasChanges = true
          }
        }
      }

      if (!hasChanges) {
        return current
      }

      return {
        ...current,
        items: updatedItems,
      }
    })
  }, [
    data.records,
    data.groups,
    getSelectable,
    getAllRecords,
    isGrouped,
    groupsState,
    isMultiSelection,
    handleSelectItemChangeInternal,
    isPageOnlySelection,
  ])

  // Reset "all selected" state when empty
  useEffect(() => {
    if (checkedCount === 0) {
      setAllSelectedCheck(false)
      wasExplicitSelectAll.current = false
    }
  }, [checkedCount])

  // Notify parent component when selection changes
  useEffect(() => {
    const stateKey = JSON.stringify({
      allSelectedCheck,
      allSelectedState,
      itemsCount: localSelectedState.items?.size ?? 0,
      checkedCount,
    })

    if (stateKey === previousSelectionState.current) {
      return
    }
    previousSelectionState.current = stateKey

    onSelectItems?.(
      {
        allSelected: allSelectedState,
        itemsStatus,
        selectedIds,
        groupsStatus,
        filters: source.currentFilters || {},
        selectedCount: selectedItemsCount,
      },
      clearSelectedItems
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    allSelectedCheck,
    allSelectedState,
    itemsStatus,
    selectedIds,
    groupsStatus,
    selectedItemsCount,
    checkedCount,
  ])

  return {
    isAllSelected,
    isPartiallySelected,
    selectedItems: checkedItems,
    selectedGroups: checkedGroups,
    allSelectedStatus,
    clearSelection: clearSelectedItems,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
    selectionMeta: {
      selectedItemsCount,
      totalKnownItemsCount,
      checkedItems: Array.from(checkedItems.values()),
      uncheckedItems: Array.from(uncheckedItems.values()),
    },
    groupAllSelectedStatus,
    selectionStatus,
    selectedState: localSelectedState,
  }
}
