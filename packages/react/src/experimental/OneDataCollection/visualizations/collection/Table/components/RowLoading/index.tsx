import { forwardRef, useLayoutEffect, useRef } from "react"

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

import { Row, RowProps } from "../Row"

export const DEFAULT_LOADING_ROWS_COUNT = 5

const SingleLoadingRowInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  {
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
    shouldHideBorder,
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
    shouldHideBorder?: boolean
  },
  ref:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const loadingRowRef = useRef<HTMLTableRowElement | null>(null)
  const rowRefCurrent = rowRef?.current

  useLayoutEffect(() => {
    if (loadingRowRef.current && rowRefCurrent) {
      const height = rowRef.current.getBoundingClientRect().height
      loadingRowRef.current.style.height = `${height}px`
    }
  }, [rowRefCurrent, rowRef])

  const depth = nestedRowProps?.depth ?? 0

  const combinedRef = (element: HTMLTableRowElement | null) => {
    loadingRowRef.current = element

    if (typeof ref === "function") {
      ref(element)
    }
  }

  return (
    <Row
      source={{
        ...source,
        itemsWithChildren: () => false,
      }}
      item={item}
      key={`row-loading-${rowIndex}`}
      index={rowIndex}
      frozenColumnsLeft={frozenColumnsLeft}
      columns={columns}
      noBorder={shouldHideBorder ?? false}
      groupIndex={groupIndex}
      onCheckedChange={onCheckedChange}
      selectedItems={selectedItems}
      checkColumnWidth={checkColumnWidth}
      loading
      ref={combinedRef}
      nestedRowProps={{
        ...nestedRowProps,
        depth: nestedRowProps?.parentHasChildren ? depth + 1 : depth,
        hasLoadedChildren: false,
        expanded: false,
      }}
      tableWithChildren={tableWithChildren}
    />
  )
}

const SingleLoadingRow = forwardRef(SingleLoadingRowInner) as <
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
    rowRef: React.RefObject<HTMLTableRowElement>
    rowIndex: number
    shouldHideBorder?: boolean
  } & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
  }
) => JSX.Element

const RowLoadingInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  {
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
    shouldHideBorder?: boolean
  },
  ref:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
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

  return (
    <>
      {Array.from({ length: loadingRowsCount }).map((_, rowIndex) => {
        const isLastLoadingRow = rowIndex === loadingRowsCount - 1
        // Only show border on the last loading row if parent is isLastChild
        const rowShouldHideBorder = !isLastLoadingRow || props.shouldHideBorder

        return (
          <SingleLoadingRow
            key={`row-loading-${rowIndex}`}
            ref={ref}
            rowRef={rowRef}
            rowIndex={rowIndex}
            {...props}
            shouldHideBorder={rowShouldHideBorder}
          />
        )
      })}
    </>
  )
}

export const RowLoading = forwardRef(RowLoadingInner) as <
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
  } & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
    shouldHideBorder?: boolean
  }
) => JSX.Element
