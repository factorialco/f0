import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { forwardRef, useLayoutEffect, useRef } from "react"
import { Row, RowProps } from "../Row"

export const DEFAULT_LOADING_ROWS_COUNT = 3

const LoadMoreRowInner = <
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
    onLoadMoreChildren: () => void
    rowRef: React.RefObject<HTMLTableRowElement>
  },
  ref:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const loadMoreRowRef = useRef<HTMLTableRowElement | null>(null)
  const rowRefCurrent = props.rowRef?.current

  useLayoutEffect(() => {
    if (loadMoreRowRef.current && rowRefCurrent) {
      const height = props.rowRef?.current?.getBoundingClientRect().height
      loadMoreRowRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, props.rowRef])

  const combinedRef = (element: HTMLTableRowElement | null) => {
    loadMoreRowRef.current = element

    if (typeof ref === "function") {
      ref(element)
    }
  }

  const depth = props.nestedRowProps?.depth ?? 0
  const formattedColumns = props.columns.map((column) => ({
    ...column,
    render: () => "",
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
        nestedVariant: "basic",
        onLoadMoreChildren: props.onLoadMoreChildren,
      }}
    />
  )
}

export const LoadMoreRow = forwardRef(LoadMoreRowInner) as <
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
    onLoadMoreChildren: () => void
    rowRef: React.RefObject<HTMLTableRowElement>
  } & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
  }
) => ReturnType<typeof LoadMoreRowInner>
