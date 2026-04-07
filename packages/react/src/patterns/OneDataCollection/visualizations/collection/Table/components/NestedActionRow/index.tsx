import { forwardRef, useLayoutEffect, useRef } from "react"

import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import { type NestedRowProps, Row, type RowProps } from "../Row"

export type NestedActionRowProps<
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
  rowRef: React.RefObject<HTMLTableRowElement>
  nestedRowPropsOverride: Partial<NestedRowProps>
}

const NestedActionRowInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: NestedActionRowProps<
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
  const internalRef = useRef<HTMLTableRowElement | null>(null)
  const rowRefCurrent = props.rowRef?.current

  useLayoutEffect(() => {
    if (internalRef.current && rowRefCurrent) {
      const height = props.rowRef?.current?.getBoundingClientRect().height
      internalRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, props.rowRef])

  const combinedRef = (element: HTMLTableRowElement | null) => {
    internalRef.current = element

    if (typeof ref === "function") {
      ref(element)
    } else if (ref) {
      ;(ref as React.MutableRefObject<HTMLTableRowElement | null>).current =
        element
    }
  }

  const depth = props.nestedRowProps?.depth ?? 0
  const formattedColumns = props.columns.map((column) => ({
    ...column,
    render: () => "",
    editType: () => "display-only" as const,
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
        ...props.nestedRowPropsOverride,
      }}
    />
  )
}

export const NestedActionRow = forwardRef(NestedActionRowInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: NestedActionRowProps<
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
) => ReturnType<typeof NestedActionRowInner>
