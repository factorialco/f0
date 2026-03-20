import { forwardRef } from "react"

import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import { PrimaryActionItemDefinition } from "../../../../../actions"
import { type AddRowAction, type RowProps } from "../Row"
import { NestedActionRow } from "../NestedActionRow"

type AddRowRowProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = RowProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> & {
  addRowActions: PrimaryActionItemDefinition[]
  addRowLabel?: string
  rowRef: React.RefObject<HTMLTableRowElement>
}

const AddRowRowInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: AddRowRowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  ref:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const actions: AddRowAction[] = props.addRowActions.map((action) => ({
    label: action.label,
    icon: action.icon,
    description: action.description,
    onClick: action.onClick,
    loading: action.loading,
    disabled: action.disabled,
  }))

  return (
    <NestedActionRow
      {...props}
      ref={ref}
      nestedRowPropsOverride={{
        onAddRow: {
          actions,
          label: props.addRowLabel,
        },
      }}
    />
  )
}

export const AddRowRow = forwardRef(AddRowRowInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: AddRowRowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
  }
) => ReturnType<typeof AddRowRowInner>
;(AddRowRow as { displayName?: string }).displayName = "AddRowRow"
