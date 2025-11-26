import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useDeepCompareEffect } from "@reactuses/core"
import { useCallback, useEffect, useMemo, useState } from "react"
import {
  GroupingDefinition,
  RecordType,
  SelectedItemsState,
  SelectedItemState,
  SelectionId,
} from "../types"
import type { SortingsDefinition } from "../types/sortings.typings"
import { GroupRecord } from "../useData"
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
  const isPaginated = paginationInfo !== null
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
        return itemId && itemId === id
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
    () => checkedCount === totalKnownItemsCount,
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

  // Sync external selectedState prop with internal localSelectedState
  // Only run when selectedState changes, NOT when data.records changes
  // Data changes are handled by the separate effect below
  useDeepCompareEffect(() => {
    updateLocalSelectedState(selectedState)
  }, [selectedState])

  // // Update the localSelectedState based on the localSelectionState
  // //This structure contains the itemState and also the item itself if was loaded
  // useDeepCompareEffect(() => {
  //   // For items, we need to update the localSelectedState with the item if it was loaded

  //   const newItems = new Map<SelectedItemState<R>["id"], SelectedItemState<R>>()

  //   for (const [
  //     itemStateId,
  //     itemState,
  //   ] of localSelectedState.items?.entries() || []) {
  //     // Try to get the item from a previous item state if not found, try to get it from the data records
  //     const item =
  //       localSelectedState.items?.get(itemStateId)?.item ??
  //       data.records.find((record) => {
  //         const id = source.selectable && source.selectable(record)
  //         return id && id === itemStateId
  //       })

  //     newItemsState.set(itemStateId, {
  //       id: itemStateId,
  //       checked: itemState.checked,
  //       item: item,
  //     })
  //   }
  //   setItemsState(newItemsState)
  // }, [selectionStateMap, data.records])

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
   * Handle the change of the selected groups
   */
  const handleSelectGroupChange = (
    groupId: SelectionId | SelectionId[],
    checked: boolean
  ) => {
    if (!isGrouped) {
      return
    }

    // const groupIds = Array.isArray(groupId) ? groupId : [groupId]

    // // Select/deselect all items in the group
    // const groupItems = [
    //   ...groups.flatMap((group) => group.records),
    //   ...Array.from(localSelectedState.items?.values() || [])
    //     .filter(
    //       (item) =>
    //         item.item?.[GROUP_ID_SYMBOL] &&
    //         groups.some((group) => group.key === item.item?.[GROUP_ID_SYMBOL])
    //     )
    //     .map((item) => item.item),
    // ]
    // handleSelectItemChange(
    //   groupItems
    //     .map((item) => item?.id)
    //     .filter((id): id is SelectionId => id !== undefined),
    //   checked
    // )

    // setGroupsState((current) => {
    //   const newState = new Map(current)
    //   for (const group of groups) {
    //     newState.set(group.key, { group, checked })
    //   }
    //   return newState
    // })
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
   * Get the allSelectedCheck and isPartiallySelected status for each group
   */
  const [groupAllSelectedStatus, setGroupAllSelectedStatus] = useState<
    Record<string, AllSelectionStatus>
  >({})

  /************************************************************
   *                                                          *
   *                       TODO                               *
   *                                                          *
   ************************************************************/
  // useEffect(() => {
  //   const getGroupAllSelectedStatus = async () => {
  //     if (!isGrouped) {
  //       return {}
  //     }

  //     const groupsStatuses = Object.fromEntries(
  //       await Promise.all(
  //         data.groups.map(async (group) => {
  //           const groupStatus = groupsState.get(group.key)

  //           const groupItemsStatus = Array.from(itemsState.values()).filter(
  //             (item) => item.item[GROUP_ID_SYMBOL] === group.key
  //           )

  //           const knownItemsCount = isPaginated
  //             ? (await group.itemCount) || groupItemsStatus.length
  //             : group.records.length

  //           const groupSelectedItemCount = groupItemsStatus.filter(
  //             (item) => item.checked
  //           ).length

  //           const groupUnselectedItemCount = groupItemsStatus.filter(
  //             (item) => !item.checked
  //           ).length

  //           const areAllKnownGroupItemsSelected =
  //             knownItemsCount ===
  //             groupSelectedItemCount - groupUnselectedItemCount

  //           const isGroupAllItemsSelected =
  //             (groupStatus?.checked || areAllKnownGroupItemsSelected) &&
  //             groupSelectedItemCount > 0

  //           const isGroupPartiallySelected =
  //             (groupSelectedItemCount > 0 && !isGroupAllItemsSelected) ||
  //             (isGroupAllItemsSelected && groupUnselectedItemCount > 0)

  //           return [
  //             group.key,
  //             {
  //               checked: isGroupAllItemsSelected || isGroupPartiallySelected,
  //               indeterminate: isGroupPartiallySelected,
  //               selectedCount:
  //                 isGroupAllItemsSelected && !isGroupPartiallySelected
  //                   ? knownItemsCount
  //                   : knownItemsCount - groupUnselectedItemCount,
  //               unselectedCount: groupUnselectedItemCount,
  //               knownItemsCount,
  //             },
  //           ] as const
  //         })
  //       )
  //     )

  //     setGroupAllSelectedStatus(groupsStatuses)
  //   }

  //   getGroupAllSelectedStatus()

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [
  //   isGrouped,
  //   isGrouped && data.groups,
  //   groupsState,
  //   localSelectedState.items,
  // ])

  const handleSelectItemChange = (
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
            return recordId && recordId === id
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

  const handleSelectAll = (checked: boolean) => {
    if (!isMultiSelection) {
      return
    }
    setAllSelectedCheck(checked)
    if (isGrouped) {
      handleSelectGroupChange(
        Array.from(groupsState.keys()).map((groupId) => String(groupId)),
        checked
      )
    } else {
      handleSelectItemChange(
        Array.from(localSelectedState.items?.keys() || []),
        checked
      )
    }
  }

  // If the filters change, we need to reset the selected items
  useEffect(() => {
    clearSelectedItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clearSelected is a stable function
  }, [source.currentFilters])

  /**
   * Handle the data changes to update the selected items status
   * This effect runs when data loads or changes to:
   * 1. Apply selection state to new items (with onlyIfNotPreviousState = true)
   * 2. Populate the `item` field for items that were selected before data loaded
   */
  useDeepCompareEffect(() => {
    {
      // For the flattened data, we need to check if the item was loaded before
      const itemIds = data.records
        .map((record) => {
          const id = source.selectable && source.selectable(record)
          return id
        })
        .filter((id) => id !== undefined)
      handleSelectItemChange(itemIds, isAllSelected, true)

      // Also update items that have checked=true but item=undefined
      // This happens when items are pre-selected before data loads
      setLocalSelectedState((current) => {
        let hasChanges = false
        const updatedItems = new Map(current.items)

        for (const [id, itemState] of updatedItems.entries()) {
          // If item is undefined but we have data loaded, try to find it
          if (itemState.item === undefined) {
            const foundItem = data.records.find((record) => {
              const recordId = source.selectable && source.selectable(record)
              return recordId && recordId === id
            })
            if (foundItem) {
              updatedItems.set(id, { ...itemState, item: foundItem })
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
    }
  }, [data, isGrouped])

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

  useEffect(() => {
    // Notify the parent component about the selected items
    onSelectItems?.(
      {
        // allSelected:
        //   uncheckedCount === 0
        //     ? allSelectedCheck
        //     : allSelectedCheck
        //       ? "indeterminate"
        //       : false,
        // itemsStatus: Array.from(localSelectedState.items?.values() || []),
        // groupsStatus: Object.fromEntries(
        //   Array.from(groupsState.values()).map(({ group, checked }) => [
        //     group.key,
        //     !!checked,
        //   ])
        // ),
        filters: source.currentFilters || {},
        selectedCount: selectedItemsCount,
        status: localSelectedState,
        //statusMap: selectionStateMapToSelectionState(selectionStateMap),
      },
      clearSelectedItems
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps  --  We intentionally omit clearSelectedItems, onSelectItems, selectedCount, source.currentFilters, and unselectedCount
  }, [
    allSelectedCheck,
    localSelectedState,
    groupsState,
    groupAllSelectedStatus,
    paginationInfo?.total,
    data.records?.length,
  ])

  const selectionStatus = useMemo((): SelectionStatus<R, Filters> => {
    return {
      ...localSelectedState,
      // allChecked: isPartiallySelected ? "indeterminate" : allSelectedCheck,
      // itemsStatus: Array.from(localSelectedState.items?.values() || []),
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
    allSelectedCheck,
    localSelectedState,
    groupsState,
    selectedItemsCount,
    totalKnownItemsCount,
    source.currentFilters,
    checkedItems,
    uncheckedItems,
  ])

  return {
    selectedItems: checkedItems,
    selectedGroups: checkedGroups,
    // allSelectedStatus: {
    //   //checked: allSelectedCheck || isPartiallySelected,
    //   //indeterminate: isPartiallySelected,
    //   selectedCount: selectedItemsCount,
    //   unselectedCount: uncheckedCount,
    // },
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
