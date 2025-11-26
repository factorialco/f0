import { forwardRef, useRef, useState } from "react"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"

import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useLoadChildren } from "../hooks/useLoadChildren"
import { NestedDataProvider } from "../providers/NestedProvider"
import { TableColumnDefinition } from "../types"
import { LoadMoreRow } from "./LoadMore"
import { Row } from "./Row"
import { DEFAULT_LOADING_ROWS_COUNT, RowLoading } from "./RowLoading"

export type RowProps<
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
  index: number
  groupIndex: number
  onCheckedChange: (checked: boolean) => void
  selectedItems: Map<string | number, R>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  frozenColumnsLeft: number
  checkColumnWidth: number
  tableWithChildren: boolean
  depth?: number
  onChildrenExpand?: (count: number, isExpanding: boolean) => void
  isLastOfRoot?: boolean
  expandedLevels?: number
}

const NestedRowContent = <
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
  >
) => {
  const [expandedChildrenCount, setExpandedChildrenCount] = useState(0)
  const [totalExpandedCount, setTotalExpandedCount] = useState(0)
  const [open, setOpen] = useState(false)
  const rowRef = useRef<HTMLTableRowElement>(null)

  const { children, loadChildren, isLoading, childrenType, paginationInfo } =
    useLoadChildren({
      rowId: `${props.depth}-${"id" in props.item ? props.item.id : props.index}`,
      item: props.item,
      source: props.source,
    })

  const typeDetailed = childrenType === "detailed"
  const shouldShowLoading = open && isLoading
  const shouldShowChildren = open
  const shouldShowLoadMore = open && paginationInfo?.hasMore

  const updateCounts = (
    visualDelta: number,
    totalDelta: number = visualDelta
  ) => {
    setExpandedChildrenCount((prev) => Math.max(0, prev + visualDelta))
    setTotalExpandedCount((prev) => Math.max(0, prev + totalDelta))
  }

  const calculateNextChildrenCount = () => {
    const childrenCount = children.length

    if (!paginationInfo) {
      const sourceChildrenCount =
        props.source.childrenCount?.(props.item) || DEFAULT_LOADING_ROWS_COUNT
      return sourceChildrenCount + childrenCount
    }

    const remainingChildren = (paginationInfo?.total || 0) - childrenCount
    const estimatedNextPageCount = Math.min(
      remainingChildren,
      paginationInfo?.perPage || DEFAULT_LOADING_ROWS_COUNT
    )
    return estimatedNextPageCount + childrenCount
  }

  const handleChildExpand =
    (childIndex: number) => (count: number, isExpanding: boolean) => {
      const isLastChild = childIndex === children.length - 1
      const delta = isExpanding ? count : -count

      // Last child: only update total (not visual), still propagate up
      updateCounts(isLastChild ? 0 : delta, delta)
      props.onChildrenExpand?.(count, isExpanding)
    }

  const handleExpand = () => {
    const isExpanding = !open
    setOpen(isExpanding)

    if (isExpanding) {
      handleLoadMoreChildren()
    } else {
      props.onChildrenExpand?.(totalExpandedCount, false)
      updateCounts(-expandedChildrenCount, -totalExpandedCount)
    }
  }

  const handleLoadMoreChildren = () => {
    const loadingRowsCount = calculateNextChildrenCount()

    props.onChildrenExpand?.(loadingRowsCount, true)

    loadChildren().then((loadedChildren) => {
      const childrenCount = loadedChildren?.length || 0

      const delta = childrenCount - loadingRowsCount
      updateCounts(childrenCount, childrenCount)
      props.onChildrenExpand?.(delta, delta !== 0)
    })
  }

  return (
    <>
      <Row
        {...props}
        hasLoadedChildren={false}
        noBorder={open || (props.depth ?? 0) > 0}
        expandedLevels={expandedChildrenCount + (shouldShowLoadMore ? 1 : 0)}
        onExpand={handleExpand}
        ref={rowRef}
        nestedVariant={childrenType}
      />

      {shouldShowChildren &&
        children.map((child, childIndex) => {
          const childItem = child as R
          const childHasChildren = props.source.itemsWithChildren?.(childItem)
          const isLastChild = childIndex === children.length - 1
          // Mark as last of root if parent is already last of root OR this is the last expandable child
          // This ensures the entire subtree blocks notifications to grandparent
          const childIsLastOfRoot =
            props.isLastOfRoot || (isLastChild && childHasChildren)

          if (childHasChildren) {
            return (
              <NestedRow
                {...props}
                key={`nested-row-${props.groupIndex}-${child.id}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                depth={(props.depth ?? 0) + 1}
                onChildrenExpand={handleChildExpand(childIndex)}
                isLastOfRoot={childIsLastOfRoot}
              />
            )
          } else {
            return (
              <Row
                {...props}
                key={`row-${props.groupIndex}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                depth={typeDetailed ? props.depth : (props.depth ?? 0) + 1}
                noBorder
                onExpand={handleExpand}
                nestedVariant={childrenType}
              />
            )
          }
        })}

      {shouldShowLoading && <RowLoading {...props} rowRef={rowRef} />}

      {shouldShowLoadMore && (
        <LoadMoreRow
          {...props}
          rowRef={rowRef}
          onLoadMoreChildren={handleLoadMoreChildren}
        />
      )}
    </>
  )
}

const NestedRowComponentInner = <
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
  >
) => {
  // Only wrap with Provider at the root level (depth === 0 or undefined)
  if ((props.depth ?? 0) === 0) {
    return (
      <NestedDataProvider>
        <NestedRowContent {...props} />
      </NestedDataProvider>
    )
  }

  return <NestedRowContent {...props} />
}

const NestedRow = forwardRef(NestedRowComponentInner) as <
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
  >
) => ReturnType<typeof NestedRowComponentInner>

export { NestedRow }
