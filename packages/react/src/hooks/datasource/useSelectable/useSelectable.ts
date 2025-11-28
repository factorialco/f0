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
import { parseSelectedState } from "./utils"

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
}: UseSelectableProps<R, Filters, Sortings, Grouping>): UseSelectableReturn<
  R,
  Filters
> {
  const isGrouped = data.type === "grouped"
  const isMultiSelection = selectionMode === "multi"

  const [localSelectedState, setLocalSelectedState] = useState<
    SelectedItemsState<R>
  >(parseSelectedState(selectedState))

  const totalKnownItemsCount = useMemo(() => {
    return paginationInfo ? paginationInfo.total : data.records?.length
  }, [paginationInfo, data.records?.length])

  /**
   * Get the item by id from the local selected state or the data records
   * @param id
   * @returns
   */
  const getItemById = (id: SelectionId) => {
    const item =
      localSelectedState.items?.get(id)?.item ??
      data.records.find((record) => {
        const itemId = source.selectable && source.selectable(record)
        return itemId !== undefined && itemId === id
      })
    return item
  }

  /**
   * Get the list of selected and unselected items from the itemsState for performance reasons
   */
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

  /**
   * Checked items count
   */
  const checkedCount = checkedItems.size
  const uncheckedCount = uncheckedItems.size

  /**
   * Try to determine if all items are selected when we select one by one
   * If there is pagination, we need to check if the selected items are less than the total number of items
   */
  const areAllKnownItemsSelected = useMemo(
    () => checkedCount === totalKnownItemsCount && totalKnownItemsCount > 0,
    [totalKnownItemsCount, checkedCount]
  )

  const [allSelectedCheck, setAllSelectedCheck] = useState(false)

  /**
   * Determine the status of the all selected checkbox
   */
  const isAllSelected = useMemo(() => {
    return (allSelectedCheck || areAllKnownItemsSelected) && checkedCount > 0
  }, [allSelectedCheck, areAllKnownItemsSelected, checkedCount])

  const allSelectedState = useMemo(() => {
    const isPartiallySelected =
      (checkedCount > 0 && !isAllSelected) ||
      (isAllSelected && uncheckedCount > 0)

    return isAllSelected
      ? isPartiallySelected
        ? "indeterminate"
        : true
      : false
  }, [isAllSelected, checkedCount, uncheckedCount])

  useEffect(() => {
    setLocalSelectedState((current) => ({
      ...current,
      allSelected: allSelectedState,
    }))
  }, [allSelectedState])

  /**
   * Update the local selected state from external selectedState prop.
   * IMPORTANT: This should only be called when the external prop changes (e.g., value prop changes).
   * It preserves user changes that exist in localSelectedState but not in the incoming selectedState.
   */
  const updateLocalSelectedState = useCallback(
    (selectedState: SelectedItemsState<R> | undefined) => {
      const newSelectedState = parseSelectedState(selectedState)

      setLocalSelectedState((current) => {
        const mergedItems = new Map<
          SelectedItemState<R>["id"],
          SelectedItemState<R>
        >()

        // First, preserve ALL existing items from current state (user changes)
        for (const [id, itemState] of current.items?.entries() || []) {
          mergedItems.set(id, itemState)
        }

        // Then, update/add items from the incoming selectedState
        // Only update if the item doesn't exist OR if we're updating the item data
        for (const [
          itemStateId,
          itemState,
        ] of newSelectedState.items?.entries() || []) {
          const existingItem = mergedItems.get(itemStateId)
          const item = getItemById(itemStateId)

          if (!existingItem) {
            // New item from props - add it
            mergedItems.set(itemStateId, {
              id: itemStateId,
              checked: itemState.checked,
              item,
            })
          } else if (existingItem.item === undefined && item !== undefined) {
            // Existing item but we now have the item data - update only the item field
            mergedItems.set(itemStateId, {
              ...existingItem,
              item,
            })
          }
          // Otherwise, keep the existing item state (preserve user changes)
        }

        // Add missing records from data.records
        for (const record of data.records) {
          const id = source.selectable && source.selectable(record)
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
          allSelected: current.allSelected, // Preserve current allSelected state
          items: mergedItems,
          groups: mergedGroups,
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.records, source.selectable, allSelectedCheck]
  )

  /**
   * Create a stable key from selectedState for comparison.
   * This is used to detect real changes in the selectedState prop,
   * avoiding false positives from Map object reference changes.
   */
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

  // Track the previous selectedState key to detect real changes
  const previousSelectedStateKey = useRef<string>("")
  const hasInitialized = useRef(false)

  // Sync external selectedState prop with internal localSelectedState
  // Only run when the actual content of selectedState changes
  useEffect(() => {
    const currentKey = getSelectedStateKey(selectedState)

    // Skip on initial mount - useState already handles initialization
    if (!hasInitialized.current) {
      hasInitialized.current = true
      previousSelectedStateKey.current = currentKey
      return
    }

    // Skip if the content hasn't actually changed
    if (currentKey === previousSelectedStateKey.current) {
      return
    }

    previousSelectedStateKey.current = currentKey
    updateLocalSelectedState(selectedState)
  }, [selectedState, getSelectedStateKey, updateLocalSelectedState])

  /**
   * Groups state and list of selected and unselected groups
   */
  const [groupsState, setGroupsState] = useState<
    Map<string, { group: GroupRecord<R>; checked: boolean }>
  >(new Map())

  const [checkedGroups] = useMemo(() => {
    const checked = new Map()
    const unchecked = new Map()

    for (const [id, value] of groupsState.entries()) {
      if (value.checked) {
        checked.set(id, value.group)
      } else {
        unchecked.set(id, value.group)
      }
    }
    return [checked, unchecked]
  }, [groupsState])

  /**
   * Helper to check if a value is a GroupRecord
   */
  const isGroupRecord = (
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
   * Handle the change of the selected groups.
   * Accepts either SelectionId(s) or a GroupRecord.
   */
  const handleSelectGroupChange = (
    groupOrId: GroupRecord<R> | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => {
    if (!isGrouped || data.type !== "grouped") {
      return
    }

    // Resolve group IDs from input
    const groupIds: SelectionId[] = isGroupRecord(groupOrId)
      ? [groupOrId.key]
      : Array.isArray(groupOrId)
        ? [...groupOrId]
        : [groupOrId]

    // Find all groups that match the IDs
    const groups = data.groups.filter((group) => groupIds.includes(group.key))

    if (groups.length === 0) {
      return
    }

    // Select/deselect all items in the groups
    const groupItemIds = groups.flatMap((group) =>
      group.records
        .map((record) => source.selectable?.(record))
        .filter((id): id is SelectionId => id !== undefined)
    )

    if (groupItemIds.length > 0) {
      handleSelectItemChangeInternal(groupItemIds, checked)
    }

    // Update group state
    setGroupsState((current) => {
      const newState = new Map(current)
      for (const group of groups) {
        newState.set(group.key, { group, checked })
      }
      return newState
    })
  }

  const clearSelectedItems = useCallback(() => {
    handleSelectAll(false)
    setLocalSelectedState(() => ({
      allSelected: false,
      items: new Map(),
      groups: new Map(),
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleSelectAll is a stable function
  }, [])

  /**
   * Calculate the selection status for each group
   */
  const groupAllSelectedStatus = useMemo((): Record<
    string,
    AllSelectionStatus
  > => {
    if (!isGrouped || data.type !== "grouped") {
      return {}
    }

    const result: Record<string, AllSelectionStatus> = {}

    for (const group of data.groups) {
      // Get all item IDs in this group
      const groupItemIds = group.records
        .map((record) => source.selectable?.(record))
        .filter((id): id is SelectionId => id !== undefined)

      // Count selected and unselected items in this group
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only need source.selectable, not the entire source object
  }, [isGrouped, data, localSelectedState.items, source.selectable])

  /**
   * Helper to check if a value is a RecordType (item)
   */
  const isRecordItem = (
    value: R | SelectionId | readonly SelectionId[]
  ): value is R => {
    return (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      source.selectable !== undefined
    )
  }

  /**
   * Internal function to handle selection by IDs
   */
  const handleSelectItemChangeInternal = (
    itemId: SelectionId | readonly SelectionId[],
    checked: boolean,
    // Only applies the checked state if the item has no state set yet
    onlyIfNotPreviousState: boolean = false
  ) => {
    // If is not multi selection, we only select the first item
    const itemIds = (Array.isArray(itemId) ? itemId : [itemId]).slice(
      0,
      isMultiSelection ? undefined : 1
    )

    // Use setState callback to ensure we always have the latest state
    setLocalSelectedState((current) => {
      // For single selection when checking a new item, start with empty map
      // to replace the previous selection entirely
      const newItemsState =
        !isMultiSelection && checked ? new Map() : new Map(current.items)

      let updated = 0

      for (const id of itemIds) {
        // If the item already has state, skip it when onlyIfNotPreviousState is true
        if (onlyIfNotPreviousState && newItemsState.has(id)) {
          continue // Skip this item, don't exit the entire function
        }

        updated++
        // Try to get item from current state first, then from data records
        const existingItem = current.items?.get(id)?.item
        const item =
          existingItem ??
          data.records.find((record) => {
            const recordId = source.selectable && source.selectable(record)
            return recordId !== undefined && recordId === id
          })

        newItemsState.set(id, { id, checked, item })
      }

      // If nothing was updated, return the same state to avoid unnecessary re-renders
      if (updated === 0) {
        return current
      }

      return {
        ...current,
        items: newItemsState,
      }
    })
  }

  /**
   * Handle the change of the selected item.
   * Accepts either SelectionId(s) or the item itself (R).
   * When passing an item, the ID will be extracted using source.selectable.
   */
  const handleSelectItemChange = (
    itemOrId: R | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => {
    // If it's a record item, extract the ID
    if (isRecordItem(itemOrId)) {
      const id = source.selectable?.(itemOrId)
      if (id !== undefined) {
        handleSelectItemChangeInternal(id, checked)
      }
      return
    }

    // Otherwise it's already an ID or array of IDs
    handleSelectItemChangeInternal(itemOrId, checked)
  }

  const handleSelectAll = (checked: boolean) => {
    if (!isMultiSelection) {
      return
    }
    setAllSelectedCheck(checked)

    if (isGrouped && data.type === "grouped") {
      // Select/deselect all groups using data.groups (not groupsState which might be empty)
      const allGroupIds = data.groups.map((group) => group.key)
      if (allGroupIds.length > 0) {
        handleSelectGroupChange(allGroupIds, checked)
      }
    } else {
      // Select/deselect all items from data.records (not localSelectedState which might be empty)
      const allItemIds = data.records
        .map((record) => source.selectable?.(record))
        .filter((id): id is SelectionId => id !== undefined)

      if (allItemIds.length > 0) {
        handleSelectItemChangeInternal(allItemIds, checked)
      }

      // Apply the same checked state to ALL items in localSelectedState
      // This handles items that were previously selected but are not in current data.records
      // (e.g., items selected while filtering that are not in the current page)
      setLocalSelectedState((current) => {
        const newItems = new Map(current.items)
        let hasChanges = false

        for (const [id, itemState] of newItems.entries()) {
          if (itemState.checked !== checked) {
            newItems.set(id, { ...itemState, checked })
            hasChanges = true
          }
        }

        if (!hasChanges) {
          return current
        }

        return {
          ...current,
          allSelected: checked ? true : false,
          items: newItems,
        }
      })
    }
  }

  // Track if this is the initial mount to avoid clearing default selected items
  const isInitialMount = useRef(true)
  const previousFilters = useRef(source.currentFilters)

  // If the filters change (not on initial mount), reset the selected items
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      previousFilters.current = source.currentFilters
      return
    }

    // Only clear if filters actually changed
    if (previousFilters.current !== source.currentFilters) {
      clearSelectedItems()
      previousFilters.current = source.currentFilters
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clearSelected is a stable function
  }, [source.currentFilters])

  // Keep a ref of isAllSelected to avoid adding it as a dependency
  const isAllSelectedRef = useRef(isAllSelected)
  useEffect(() => {
    isAllSelectedRef.current = isAllSelected
  }, [isAllSelected])

  // Track previous data records key to detect real changes
  const previousDataRecordsKey = useRef<string>("")

  /**
   * Get all records from data, handling both flat and grouped data
   */
  const getAllRecords = useCallback(() => {
    if (data.type === "grouped") {
      return data.groups.flatMap((group) => group.records)
    }
    return data.records
  }, [data])

  /**
   * Handle the data changes to update the selected items status
   * This effect runs when data loads or changes to:
   * 1. Apply selection state to new items (with onlyIfNotPreviousState = true)
   * 2. Populate the `item` field for items that were selected before data loaded
   */
  useEffect(() => {
    const allRecords = getAllRecords()
    if (allRecords.length === 0) return

    // Create a stable key from record IDs
    const recordIds = allRecords
      .map((record) => source.selectable?.(record))
      .filter((id) => id !== undefined)

    const currentKey = recordIds.join(",")

    // Skip if records haven't actually changed
    if (currentKey === previousDataRecordsKey.current) {
      return
    }
    previousDataRecordsKey.current = currentKey

    // For grouped data, check if each record's group is selected
    // For flat data, use the global isAllSelected state
    if (isGrouped) {
      // Process each record and check if its group is selected
      for (const record of allRecords) {
        const recordId = source.selectable?.(record)
        if (recordId === undefined) continue

        const groupId = (record as WithGroupId<R>)[GROUP_ID_SYMBOL] as
          | string
          | undefined
        if (groupId) {
          const groupState = groupsState.get(groupId)
          if (groupState?.checked) {
            // The group is selected, so select this new item
            handleSelectItemChangeInternal(recordId, true, true)
          }
        }
      }
    } else {
      // Use the ref value to avoid dependency on isAllSelected
      handleSelectItemChangeInternal(recordIds, isAllSelectedRef.current, true)
    }

    // Also update items that have checked=true but item=undefined
    // This happens when items are pre-selected before data loads
    setLocalSelectedState((current) => {
      let hasChanges = false
      const updatedItems = new Map(current.items)

      for (const [id, itemState] of updatedItems.entries()) {
        // If item is undefined but we have data loaded, try to find it
        if (itemState.item === undefined) {
          const foundItem = allRecords.find((record) => {
            const recordId = source.selectable && source.selectable(record)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we use refs and stable keys
  }, [
    data.records,
    data.groups,
    source.selectable,
    getAllRecords,
    isGrouped,
    groupsState,
  ])

  // Control the allSelectedCheck state
  // If all items are selected, we need to set the allSelectedCheck state to true
  // If there are no selected items, we need to set the allSelectedCheck state to false
  // If some items are selected, we need to keep the state as is to know if we will need to check the next page items
  useEffect(() => {
    if (areAllKnownItemsSelected) {
      setAllSelectedCheck(true)
    }
  }, [areAllKnownItemsSelected])

  useEffect(() => {
    if (checkedCount === 0) {
      setAllSelectedCheck(false)
    }
  }, [checkedCount])

  const selectedItemsCount = useMemo(() => {
    if (isGrouped) {
      return Object.values(groupAllSelectedStatus).reduce(
        (acc, curr) => acc + (curr.selectedCount || 0),
        0
      )
    } else {
      return allSelectedCheck
        ? totalKnownItemsCount - uncheckedCount
        : checkedCount
    }
  }, [
    groupAllSelectedStatus,
    totalKnownItemsCount,
    uncheckedCount,
    checkedCount,
    isGrouped,
    allSelectedCheck,
  ])

  // Track the previous state to avoid unnecessary onSelectItems calls
  const previousSelectionState = useRef<string>("")

  useEffect(() => {
    // Create a stable key to compare selection state
    const stateKey = JSON.stringify({
      allSelectedCheck,
      allSelectedState,
      itemsCount: localSelectedState.items?.size ?? 0,
      checkedCount,
    })

    // Skip if nothing changed
    if (stateKey === previousSelectionState.current) {
      return
    }
    previousSelectionState.current = stateKey

    // Notify the parent component about the selected items
    const itemsStatus = Array.from(localSelectedState.items?.values() || [])
      .filter((itemState) => itemState.item !== undefined)
      .map(({ item, checked }) => ({ item: item as R, checked }))

    // Get all selected IDs (including items not yet loaded)
    const selectedIds = Array.from(localSelectedState.items?.entries() || [])
      .filter(([, itemState]) => itemState.checked)
      .map(([id]) => id)

    onSelectItems?.(
      {
        allSelected: allSelectedState,
        itemsStatus,
        selectedIds,
        groupsStatus: Object.fromEntries(
          Array.from(groupsState.values()).map(({ group, checked }) => [
            group.key,
            !!checked,
          ])
        ),
        filters: source.currentFilters || {},
        selectedCount: selectedItemsCount,
      },
      clearSelectedItems
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps  --  We intentionally omit clearSelectedItems, onSelectItems, selectedCount, source.currentFilters, and unselectedCount
  }, [
    allSelectedCheck,
    allSelectedState,
    localSelectedState,
    groupsState,
    groupAllSelectedStatus,
    paginationInfo?.total,
    data.records?.length,
    checkedCount,
  ])

  const selectionStatus = useMemo((): SelectionStatus<R, Filters> => {
    const itemsStatus = Array.from(localSelectedState.items?.values() || [])
      .filter((itemState) => itemState.item !== undefined)
      .map(({ item, checked }) => ({ item: item as R, checked }))

    // Get all selected IDs (including items not yet loaded)
    const selectedIds = Array.from(localSelectedState.items?.entries() || [])
      .filter(([, itemState]) => itemState.checked)
      .map(([id]) => id)

    return {
      allChecked: allSelectedState,
      itemsStatus,
      selectedIds,
      checkedItems: Array.from(checkedItems.values()),
      uncheckedItems: Array.from(uncheckedItems.values()),
      groupsStatus: Object.fromEntries(
        Array.from(groupsState.values()).map(({ group, checked }) => [
          group.key,
          !!checked,
        ])
      ),
      filters: source.currentFilters || {},
      selectedCount: selectedItemsCount,
      totalKnownItemsCount: totalKnownItemsCount,
    }
  }, [
    allSelectedState,
    localSelectedState,
    groupsState,
    selectedItemsCount,
    totalKnownItemsCount,
    source.currentFilters,
    checkedItems,
    uncheckedItems,
  ])

  const isPartiallySelected = allSelectedState === "indeterminate"

  const allSelectedStatus: AllSelectionStatus = {
    checked: allSelectedCheck || isPartiallySelected,
    indeterminate: isPartiallySelected,
    selectedCount: selectedItemsCount,
    unselectedCount: uncheckedCount,
  }

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
