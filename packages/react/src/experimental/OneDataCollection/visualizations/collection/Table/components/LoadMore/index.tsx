import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useLayoutEffect, useRef } from "react"
import { Row, RowProps } from "../Row"

export const DEFAULT_LOADING_ROWS_COUNT = 3

export const LoadMoreRow = <
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
  }
) => {
  const loadMoreRowRef = useRef<HTMLTableRowElement>(null)
  const rowRefCurrent = props.rowRef?.current

  useLayoutEffect(() => {
    if (loadMoreRowRef.current && rowRefCurrent) {
      const height = props.rowRef?.current?.getBoundingClientRect().height
      loadMoreRowRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, props.rowRef])

  return (
    <Row
      {...props}
      depth={props.depth ?? 0 + 1}
      columns={props.columns.map((column) => ({
        ...column,
        render: () => "",
      }))}
      onLoadMoreChildren={props.onLoadMoreChildren}
      hasLoadedChildren={false}
      ref={loadMoreRowRef}
    />
  )
}
