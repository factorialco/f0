import { useState } from "react"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  DropdownItem,
  DropdownItemSeparator,
} from "@/experimental/Navigation/Dropdown/internal"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  ActionDefinition,
  filterItemActions,
  ItemActionsDefinition,
} from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import { actionsToDropdownItems } from "../../visualizations/collection/utils"

type UseItemActionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  item: R
}

export type UseItemActions = {
  primaryItemActions: Exclude<ActionDefinition, DropdownItemSeparator>[]
  dropdownItemActions: DropdownItem[]
  mobileDropdownItemActions: DropdownItem[]
  handleDropDownOpenChange: (open: boolean) => void
  dropDownOpen: boolean
  setDropDownOpen: (open: boolean) => void
}

export const useItemActions = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  item,
}: UseItemActionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>): UseItemActions => {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [dropDownOpenTimeout, setDropDownOpenTimeout] =
    useState<NodeJS.Timeout | null>(null)

  if (!source.itemActions) {
    return {
      primaryItemActions: [],
      dropdownItemActions: [],
      mobileDropdownItemActions: [],
      handleDropDownOpenChange: () => {},
      dropDownOpen: false,
      setDropDownOpen: () => {},
    }
  }

  const itemActions = filterItemActions(source.itemActions, item)

  // gets the primary item actions (max 2)
  const primaryItemActions = itemActions
    .filter(
      (action): action is Exclude<ActionDefinition, DropdownItemSeparator> =>
        action.type === "primary"
    )
    .slice(0, 2)

  // the rest of the actions go to the dropdown
  const dropdownItemActions = actionsToDropdownItems(
    itemActions.filter(
      (action) =>
        action.type === "separator" || !primaryItemActions.includes(action)
    )
  )

  // mobile dropdown includes primary actions
  const mobileDropdownItemActions = actionsToDropdownItems([
    ...primaryItemActions,
    ...itemActions.filter(
      (action) =>
        action.type === "separator" || !primaryItemActions.includes(action)
    ),
  ])

  const handleDropDownOpenChange = (open: boolean) => {
    // When the dropdown is closed, we wait 100ms before closing it to avoid losing the reference element to position the dropdown
    if (!open) {
      setDropDownOpenTimeout(
        setTimeout(() => {
          setDropDownOpen(false)
        }, 100)
      )
      return
    }

    if (dropDownOpenTimeout) {
      clearTimeout(dropDownOpenTimeout)
      setDropDownOpenTimeout(null)
    }
    setDropDownOpen(true)
  }

  return {
    primaryItemActions,
    dropdownItemActions,
    mobileDropdownItemActions,
    handleDropDownOpenChange,
    dropDownOpen,
    setDropDownOpen,
  }
}
