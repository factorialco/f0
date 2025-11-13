import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useDeepCompareEffect } from "@reactuses/core"
import { useCallback, useEffect, useMemo, useState } from "react"
import {
  DataSourceDefinition,
  GroupingDefinition,
  OnSelectItemsCallback,
  PaginationInfo,
  RecordType,
  SelectedItemsState,
} from "./types"
import type { SortingsDefinition } from "./types/sortings.typings"
import { Data, GROUP_ID_SYMBOL, GroupRecord, WithGroupId } from "./useData"

export type AllSelectionStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}

export type UseSelectable<R extends RecordType> = {
  isAllSelected: boolean
  selectedItems: Map<number | string, R>
  selectedGroups: Map<string, GroupRecord<R>>
  isPartiallySelected: boolean
  handleSelectItemChange: (item: R, checked: boolean) => void
  handleSelectAll: (checked: boolean) => void
  handleSelectGroupChange: (group: GroupRecord<R>, checked: boolean) => void
  groupAllSelectedStatus: Record<string, AllSelectionStatus>
  allSelectedStatus: AllSelectionStatus
}

export function useSelectable<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  data: Data<R>,
  paginationInfo: PaginationInfo | null,
  source: DataSourceDefinition<R, Filters, Sortings, Grouping>,
  onSelectItems: OnSelectItemsCallback<R, Filters> | undefined,
  defaultSelectedItems?: SelectedItemsState | undefined
): UseSelectable<R> {
  const isGrouped = data.type === "grouped"
  const isPaginated = paginationInfo !== null
  /**
   * Items state and list of selected and unselected items
   */
  // itemsState is the state of the selected items
  type ItemState = {
    item: WithGroupId<R>
    groupId?: unknown
    checked: boolean
  }
  const [itemsState, setItemsState] = useState<Map<number | string, ItemState>>(
    new Map()
  )

  /**
   * Set the default selected items and groups
   */
  useEffect(() => {
    if (!defaultSelectedItems) {
      return
    }

    if (isGrouped) {
      for (const defaultGroup of defaultSelectedItems.groups || []) {
        const group = data.groups.find(
          (group) => group.key === defaultGroup.groupId
        )
        if (group) {
          handleSelectGroupChange(group, defaultGroup.checked)
        }
      }
    }

    for (const item of defaultSelectedItems.items || []) {
      const record = data.records.find((record) => record.id === item.id)
      if (record) {
        handleSelectItemChange(record, item.checked)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking deeply the defaultSelectedItems
  }, [JSON.stringify(defaultSelectedItems), data.records])

  /**
   * Get the list of selected and unselected items from the itemsState for performance reasons
   */
  const [selectedItems, unselectedItems] = useMemo(() => {
    const selected = new Map()
    const unselected = new Map()
    for (const [id, value] of itemsState.entries()) {
      if (value.checked) {
        selected.set(id, value.item)
      } else {
        unselected.set(id, value.item)
      }
    }
    return [selected, unselected]
  }, [itemsState])

  /**
   * Groups state and list of selected and unselected groups
   */
  const [groupsState, setGroupsState] = useState<
    Map<string, { group: GroupRecord<R>; checked: boolean }>
  >(new Map())

  const [selectedGroups] = useMemo(() => {
    const selected = new Map()
    const unselected = new Map()

    for (const [id, value] of groupsState.entries()) {
      if (value.checked) {
        selected.set(id, value.group)
      } else {
        unselected.set(id, value.group)
      }
    }
    return [selected, unselected]
  }, [groupsState])

  /**
   * Handle the change of the selected groups
   */
  const handleSelectGroupChange = (
    group: GroupRecord<R> | GroupRecord<R>[],
    checked: boolean
  ) => {
    if (!isGrouped) {
      return
    }

    const groups = Array.isArray(group) ? group : [group]

    // Select/deselect all items in the group
    const groupItems = [
      ...groups.flatMap((group) => group.records),
      ...Array.from(itemsState.values())
        .filter(
          (item) =>
            item.item[GROUP_ID_SYMBOL] &&
            groups.some((group) => group.key === item.item[GROUP_ID_SYMBOL])
        )
        .map((item) => item.item),
    ]
    handleSelectItemChange(groupItems, checked)

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
    setItemsState(new Map())
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleSelectAll is a stable function
  }, [])

  /**
   * Get the allSelectedCheck and isPartiallySelected status for each group
   */
  const [groupAllSelectedStatus, setGroupAllSelectedStatus] = useState<
    Record<string, AllSelectionStatus>
  >({})

  useEffect(() => {
    const getGroupAllSelectedStatus = async () => {
      if (!isGrouped) {
        return {}
      }

      const groupsStatuses = Object.fromEntries(
        await Promise.all(
          data.groups.map(async (group) => {
            const groupStatus = groupsState.get(group.key)

            const groupItemsStatus = Array.from(itemsState.values()).filter(
              (item) => item.item[GROUP_ID_SYMBOL] === group.key
            )

            const knownItemsCount = isPaginated
              ? (await group.itemCount) || groupItemsStatus.length
              : group.records.length

            const groupSelectedItemCount = groupItemsStatus.filter(
              (item) => item.checked
            ).length

            const groupUnselectedItemCount = groupItemsStatus.filter(
              (item) => !item.checked
            ).length

            const areAllKnownGroupItemsSelected =
              knownItemsCount ===
              groupSelectedItemCount - groupUnselectedItemCount

            const isGroupAllItemsSelected =
              (groupStatus?.checked || areAllKnownGroupItemsSelected) &&
              groupSelectedItemCount > 0

            const isGroupPartiallySelected =
              (groupSelectedItemCount > 0 && !isGroupAllItemsSelected) ||
              (isGroupAllItemsSelected && groupUnselectedItemCount > 0)

            return [
              group.key,
              {
                checked: isGroupAllItemsSelected || isGroupPartiallySelected,
                indeterminate: isGroupPartiallySelected,
                selectedCount:
                  isGroupAllItemsSelected && !isGroupPartiallySelected
                    ? knownItemsCount
                    : knownItemsCount - groupUnselectedItemCount,
                unselectedCount: groupUnselectedItemCount,
                knownItemsCount,
              },
            ] as const
          })
        )
      )

      setGroupAllSelectedStatus(groupsStatuses)
    }

    getGroupAllSelectedStatus()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGrouped, isGrouped && data.groups, groupsState, itemsState])

  /**
   * Selected items count
   */
  const selectedCount = selectedItems.size
  const unselectedCount = unselectedItems.size

  /**
   * All selected check
   */
  const [allSelectedCheck, setAllSelectedCheck] = useState(false)

  const clearSelected = useCallback(() => {
    handleSelectAll(false)
    setGroupsState(new Map())
    setItemsState(new Map())
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleSelectAll is a stable function
  }, [])

  const handleSelectItemChange = (
    item: R | readonly R[],
    checked: boolean,
    // Only applies the checked state if the item has no state set yet
    onlyIfNotSelected: boolean = false
  ) => {
    const items = Array.isArray(item) ? item : [item]

    let updated = 0
    for (const item of items) {
      const id = source.selectable && source.selectable(item)
      if (id === undefined) {
        return
      }

      // If the item is already selected, we don't need to update the state if onlyIfNotSelected is true
      if (onlyIfNotSelected && itemsState.has(id)) {
        return
      }

      updated++
      itemsState.set(id, { item, checked })
    }

    if (updated > 0) {
      setItemsState((current) => new Map(current))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    setAllSelectedCheck(checked)
    if (isGrouped) {
      handleSelectGroupChange(
        Array.from(groupsState.values()).map(({ group }) => group),
        checked
      )
    } else {
      handleSelectItemChange(
        Array.from(itemsState.values()).map(({ item }) => item),
        checked
      )
    }
  }

  const totalKnownItemsCount = useMemo(() => {
    return paginationInfo ? paginationInfo.total : data.records?.length
  }, [paginationInfo, data.records?.length])

  // Try to determine if all items are selected when we select one by one
  // If there is pagination, we need to check if the selected items are less than the total number of items
  // If there is no pagination, we need to check if the selected items are less than the total number of items
  const areAllKnownItemsSelected = useMemo(
    () => selectedCount === totalKnownItemsCount,
    [totalKnownItemsCount, selectedCount]
  )

  const isAllSelected = useMemo(() => {
    return (allSelectedCheck || areAllKnownItemsSelected) && selectedCount > 0
  }, [allSelectedCheck, areAllKnownItemsSelected, selectedCount])

  const isPartiallySelected = useMemo(
    () =>
      (selectedCount > 0 && !isAllSelected) ||
      (isAllSelected && unselectedCount > 0),
    [selectedCount, isAllSelected, unselectedCount]
  )

  // If the filters change, we need to reset the selected items
  useEffect(() => {
    clearSelected()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clearSelected is a stable function
  }, [source.currentFilters])

  /**
   * Handle the data changes to update the selected items status
   */
  useDeepCompareEffect(() => {
    if (isGrouped) {
      for (const group of data.groups) {
        // If the group was loaded before, we can't change the state
        const groupChecked =
          groupAllSelectedStatus[group.key]?.checked || isAllSelected
        if (!groupsState.has(group.key)) {
          setGroupsState((current) => {
            const newState = new Map(current)
            newState.set(group.key, { group, checked: groupChecked })
            return newState
          })
        }

        // Apply the status to the new loaded group items
        handleSelectItemChange(group.records, groupChecked, true)
      }
    } else {
      // For the flattened data, we need to check if the item was loaded before
      handleSelectItemChange(data.records, isAllSelected, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleItemStateChange is a stable function
  }, [data, isAllSelected, isGrouped])

  // Control the allSelectedCheck state
  // If all items are selected, we need to set the allSelectedCheck state to true
  // If there are no selected items, we need to set the allSelectedCheck state to false
  // If some items are selected, we need to keep the state as is to know if we will need to check the next page items
  useEffect(() => {
    if (areAllKnownItemsSelected) {
      setAllSelectedCheck(true)
    }

    if (selectedCount === 0) {
      setAllSelectedCheck(false)
    }
  }, [areAllKnownItemsSelected, selectedCount])

  const selectedItemsCount = useMemo(() => {
    if (isGrouped) {
      return Object.values(groupAllSelectedStatus).reduce(
        (acc, curr) => acc + (curr.selectedCount || 0),
        0
      )
    } else {
      return totalKnownItemsCount - unselectedCount
    }
  }, [groupAllSelectedStatus, totalKnownItemsCount, unselectedCount, isGrouped])

  useEffect(() => {
    // Notify the parent component about the selected items
    onSelectItems?.(
      {
        allSelected:
          unselectedCount === 0
            ? allSelectedCheck
            : allSelectedCheck
              ? "indeterminate"
              : false,
        itemsStatus: Array.from(itemsState.values()),
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
    itemsState,
    groupsState,
    groupAllSelectedStatus,
    paginationInfo?.total,
    data.records?.length,
  ])

  return {
    selectedItems,
    selectedGroups,
    allSelectedStatus: {
      checked: allSelectedCheck || isPartiallySelected,
      indeterminate: isPartiallySelected,
      selectedCount: selectedItemsCount,
      unselectedCount,
    },
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
    groupAllSelectedStatus,
  }
}
