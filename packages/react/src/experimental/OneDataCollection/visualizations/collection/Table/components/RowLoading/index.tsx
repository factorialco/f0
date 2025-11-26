import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { ChildrenPaginationInfo } from "@/hooks/datasource/types/nested.typings"
import { useLayoutEffect, useRef } from "react"
import { Row, RowProps } from "../Row"

export const DEFAULT_LOADING_ROWS_COUNT = 3

const SingleLoadingRow = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  rowRef,
  rowIndex,
  source,
  item,
  columns,
  frozenColumnsLeft,
  depth,
  groupIndex,
  onCheckedChange,
  selectedItems,
  checkColumnWidth,
  tableWithChildren,
}: RowProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> & {
  rowRef: React.RefObject<HTMLTableRowElement>
  rowIndex: number
}) => {
  const loadingRowRef = useRef<HTMLTableRowElement>(null)
  const rowRefCurrent = rowRef?.current

  useLayoutEffect(() => {
    if (loadingRowRef.current && rowRefCurrent) {
      const height = rowRef.current.getBoundingClientRect().height
      loadingRowRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, rowRef])

  return (
    <Row
      source={source}
      item={item}
      key={`row-loading-${rowIndex}`}
      index={rowIndex}
      frozenColumnsLeft={frozenColumnsLeft}
      depth={depth}
      columns={columns}
      hasLoadedChildren={false}
      noBorder
      groupIndex={groupIndex}
      onCheckedChange={onCheckedChange}
      selectedItems={selectedItems}
      checkColumnWidth={checkColumnWidth}
      tableWithChildren={tableWithChildren}
      loading
      ref={loadingRowRef}
    />
  )
}

export const RowLoading = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  rowRef,
  ...props
}: RowProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> & {
  rowRef: React.RefObject<HTMLTableRowElement>
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  paginationInfo?: ChildrenPaginationInfo<R>
}) => {
  const loadingRowsCount =
    props.source.childrenCount?.(props.item, props.paginationInfo) ??
    DEFAULT_LOADING_ROWS_COUNT

  return Array.from({ length: loadingRowsCount }).map((_, rowIndex) => (
    <SingleLoadingRow
      key={`row-loading-${rowIndex}`}
      rowRef={rowRef}
      rowIndex={rowIndex}
      {...props}
    />
  ))
}
