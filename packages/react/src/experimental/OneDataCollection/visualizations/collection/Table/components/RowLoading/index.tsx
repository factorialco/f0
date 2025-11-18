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
}) => {
  return Array.from({ length: 3 }).map((_, rowIndex) => (
    <SingleLoadingRow
      key={`row-loading-${rowIndex}`}
      rowRef={rowRef}
      rowIndex={rowIndex}
      {...props}
    />
  ))
}
