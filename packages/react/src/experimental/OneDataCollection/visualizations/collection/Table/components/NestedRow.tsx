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
import { TableColumnDefinition } from "../types"
import { Row } from "./Row"
import { RowLoading } from "./RowLoading"

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
  onExpand?: () => void
}

const NestedRowComponentInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  item,
  onCheckedChange,
  selectedItems,
  columns,
  frozenColumnsLeft,
  checkColumnWidth,
  index,
  groupIndex,
  tableWithChildren,
  depth = 0,
  onChildrenExpand,
  isLastOfRoot = false,
}: RowProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const [expandedChildrenCount, setExpandedChildrenCount] = useState(0)
  const [totalExpandedCount, setTotalExpandedCount] = useState(0)
  const [open, setOpen] = useState(false)
  const rowRef = useRef<HTMLTableRowElement>(null)

  const { children, loadChildren, isLoading } = useLoadChildren({
    item,
    filters: source.currentFilters,
    fetchChildren: source.fetchChildren,
  })

  const updateCounts = (
    visualDelta: number,
    totalDelta: number = visualDelta
  ) => {
    setExpandedChildrenCount((prev) => Math.max(0, prev + visualDelta))
    setTotalExpandedCount((prev) => Math.max(0, prev + totalDelta))
  }

  const handleChildExpand =
    (childIndex: number) => (count: number, isExpanding: boolean) => {
      const isLastChild = childIndex === children.length - 1
      const delta = isExpanding ? count : -count

      // Last child: only update total (not visual), still propagate up
      updateCounts(isLastChild ? 0 : delta, delta)
      onChildrenExpand?.(count, isExpanding)
    }

  const handleExpand = () => {
    const isExpanding = !open
    setOpen(isExpanding)

    if (isExpanding) {
      const loadingRowsCount = 3

      onChildrenExpand?.(loadingRowsCount, true)

      loadChildren().then((loadedChildren) => {
        const childrenCount = loadedChildren?.length || 0

        const delta = childrenCount - loadingRowsCount
        updateCounts(childrenCount, childrenCount)
        onChildrenExpand?.(delta, delta !== 0)
      })
    } else {
      onChildrenExpand?.(totalExpandedCount, false)
      updateCounts(-expandedChildrenCount, -totalExpandedCount)
    }
  }

  return (
    <>
      <Row
        source={source}
        item={item}
        index={index}
        groupIndex={groupIndex}
        onCheckedChange={onCheckedChange}
        selectedItems={selectedItems}
        columns={columns}
        frozenColumnsLeft={frozenColumnsLeft}
        checkColumnWidth={checkColumnWidth}
        tableWithChildren={tableWithChildren}
        depth={depth}
        hasLoadedChildren={false}
        noBorder={open || depth > 0}
        expandedLevels={expandedChildrenCount}
        onExpand={handleExpand}
        ref={rowRef}
      />

      {open && isLoading && (
        <RowLoading
          source={source}
          item={item}
          index={index}
          groupIndex={groupIndex}
          onCheckedChange={onCheckedChange}
          selectedItems={selectedItems}
          columns={columns}
          checkColumnWidth={checkColumnWidth}
          tableWithChildren={tableWithChildren}
          depth={depth}
          frozenColumnsLeft={frozenColumnsLeft}
          rowRef={rowRef}
        />
      )}

      {open && !isLoading && (
        <>
          {children.map((child, childIndex) => {
            const childItem = child as R
            const childHasChildren = source.itemsWithChildren?.(childItem)
            const isLastChild = childIndex === children.length - 1
            // Mark as last of root if parent is already last of root OR this is the last expandable child
            // This ensures the entire subtree blocks notifications to grandparent
            const childIsLastOfRoot =
              isLastOfRoot || (isLastChild && childHasChildren)

            if (childHasChildren) {
              return (
                <>
                  <NestedRow
                    key={`nested-row-${groupIndex}-${index}-${childIndex}`}
                    source={source}
                    item={childItem}
                    index={childIndex}
                    groupIndex={groupIndex}
                    onCheckedChange={onCheckedChange}
                    selectedItems={selectedItems}
                    columns={columns}
                    frozenColumnsLeft={frozenColumnsLeft}
                    checkColumnWidth={checkColumnWidth}
                    tableWithChildren={tableWithChildren}
                    depth={depth + 1}
                    onChildrenExpand={handleChildExpand(childIndex)}
                    isLastOfRoot={childIsLastOfRoot}
                    onExpand={handleExpand}
                  />
                </>
              )
            } else {
              return (
                <Row
                  key={`row-${groupIndex}-${index}-${childIndex}`}
                  source={source}
                  item={childItem}
                  index={childIndex}
                  groupIndex={groupIndex}
                  onCheckedChange={onCheckedChange}
                  selectedItems={selectedItems}
                  columns={columns}
                  frozenColumnsLeft={frozenColumnsLeft}
                  checkColumnWidth={checkColumnWidth}
                  tableWithChildren={tableWithChildren}
                  depth={depth + 1}
                  noBorder
                  onExpand={handleExpand}
                />
              )
            }
          })}
        </>
      )}
    </>
  )
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
  > & { ref?: React.ForwardedRef<HTMLTableRowElement> }
) => ReturnType<typeof NestedRowComponentInner>

export { NestedRow }
