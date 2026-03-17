import { forwardRef, useLayoutEffect, useRef } from "react"

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
import { AddRowAction, Row, RowProps } from "../Row"

const AddRowRowInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
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
  },
  ref:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const addRowRowRef = useRef<HTMLTableRowElement | null>(null)
  const rowRefCurrent = props.rowRef?.current

  useLayoutEffect(() => {
    if (addRowRowRef.current && rowRefCurrent) {
      const height = props.rowRef?.current?.getBoundingClientRect().height
      addRowRowRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, props.rowRef])

  const combinedRef = (element: HTMLTableRowElement | null) => {
    addRowRowRef.current = element

    if (typeof ref === "function") {
      ref(element)
    }
  }

  const depth = props.nestedRowProps?.depth ?? 0
  const formattedColumns = props.columns.map((column) => ({
    ...column,
    render: () => "",
    editType: () => "display-only" as const,
  }))

  const actions: AddRowAction[] = props.addRowActions.map((action) => ({
    label: action.label,
    icon: action.icon,
    description: action.description,
    onClick: action.onClick,
    loading: action.loading,
    disabled: action.disabled,
  }))

  return (
    <Row
      {...props}
      columns={formattedColumns}
      ref={combinedRef}
      noBorder={depth > 0}
      nestedRowProps={{
        ...props.nestedRowProps,
        depth: depth + 1,
        hasLoadedChildren: false,
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
  props: RowProps<
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
  } & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
  }
) => ReturnType<typeof AddRowRowInner>
