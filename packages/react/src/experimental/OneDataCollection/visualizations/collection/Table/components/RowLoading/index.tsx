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

export const DEFAULT_LOADING_ROWS_COUNT = 5

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
  nestedRowProps,
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
      columns={columns}
      noBorder
      groupIndex={groupIndex}
      onCheckedChange={onCheckedChange}
      selectedItems={selectedItems}
      checkColumnWidth={checkColumnWidth}
      loading
      ref={loadingRowRef}
      nestedRowProps={{
        ...nestedRowProps,
        depth: (nestedRowProps?.depth ?? 0) + 1,
        hasLoadedChildren: false,
      }}
      tableWithChildren={tableWithChildren}
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
  paginationInfo?: ChildrenPaginationInfo
}) => {
  const childrenCount = props.source.childrenCount?.({
    item: props.item,
    pagination: props.paginationInfo,
  })

  const paginatedChildrenCount = props.paginationInfo
    ? props.paginationInfo.total
      ? Math.min(
          props.paginationInfo.perPage,
          props.paginationInfo.total -
            props.paginationInfo.currentPage * props.paginationInfo.perPage
        )
      : props.paginationInfo.perPage
    : undefined

  const loadingRowsCount =
    childrenCount ?? paginatedChildrenCount ?? DEFAULT_LOADING_ROWS_COUNT

  return Array.from({ length: loadingRowsCount }).map((_, rowIndex) => (
    <SingleLoadingRow
      key={`row-loading-${rowIndex}`}
      rowRef={rowRef}
      rowIndex={rowIndex}
      {...props}
    />
  ))
}
