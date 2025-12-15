/**
 * NestedRow Component
 *
 * This component handles the rendering of table rows with hierarchical/nested data structures.
 * It provides the following functionality:
 *
 * 1. **Expandable/Collapsible Rows**: Allows users to expand rows to reveal nested child data.
 * 2. **Lazy Loading**: Children are loaded on-demand when a row is expanded for the first time,
 *    improving performance for large datasets.
 * 3. **Recursive Nesting**: Supports unlimited nesting levels by recursively rendering NestedRow
 *    components for children that themselves have children.
 * 4. **Pagination Support**: Handles paginated children with a "Load More" functionality.
 * 5. **Visual Connectors**: Calculates and renders visual tree connectors to show parent-child
 *    relationships.
 * 6. **State Management**: Manages expansion state, loading state, and child data caching at each level.
 *
 */

import { forwardRef, useCallback, useRef, useState } from "react"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"

import { GroupingDefinition, RecordType, SortingsDefinition } from "@/hooks/datasource"
import { useCalculateConectorHeight } from "../hooks/useCalculateConectorHeight"
import { useLoadChildren } from "../hooks/useLoadChildren"
import { NestedDataProvider } from "../providers/NestedProvider"
import { TableColumnDefinition } from "../types"
import { LoadMoreRow } from "./LoadMore"
import { NestedRowProps, Row } from "./Row"
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
  nestedRowProps?: NestedRowProps
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
  props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>,
  externalRef:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const [open, setOpen] = useState(false)

  const internalRowRef = useRef<HTMLTableRowElement | null>(null)

  const rowId = `${props.nestedRowProps?.depth ?? 0}-${"id" in props.item ? props.item.id : props.index}`

  /**
   * useLoadChildren hook manages:
   * - Children data fetching and caching
   * - Loading state
   * - Pagination information
   * - Determining if children are "nested" (have their own children) or "flat"
   */
  const { children, loadChildren, isLoading, childrenType, paginationInfo } = useLoadChildren({
    rowId: rowId,
    item: props.item,
    source: props.source,
  })

  /**
   * useCalculateConectorHeight manages the visual tree connector lines
   * It calculates the height between first and last visible child to draw
   * the vertical line connecting them to their parent
   */
  const { calculatedHeight, setFirstChildRef, setLastChildRef } =
    useCalculateConectorHeight(childrenType)

  const shouldShowLoading = open && isLoading
  const shouldShowChildren = open
  const shouldShowLoadMore = open && paginationInfo?.hasMore

  /**
   * Combine internal and external refs
   *
   * We need both because:
   * - Internal ref: Used by LoadMore and RowLoading components for positioning
   * - External ref: Passed from parent for connector height calculations
   *
   * This pattern ensures both internal and external consumers can access the DOM element
   */
  const combinedRowRef = useCallback(
    (element: HTMLTableRowElement | null) => {
      internalRowRef.current = element

      if (typeof externalRef === "function") {
        externalRef(element)
      }
    },
    [externalRef]
  )

  const handleExpand = () => {
    const isExpanding = !open
    setOpen(isExpanding)

    if (isExpanding && !children.length) {
      loadChildren()
    }
  }

  const sharedNestedRowProps = {
    depth: props.nestedRowProps?.depth ?? 0,
    expanded: open,
    onExpand: handleExpand,
    nestedVariant: childrenType,
    connectorHeight: calculatedHeight,
  }

  return (
    <>
      <Row
        {...props}
        noBorder={open || (props.nestedRowProps?.depth ?? 0) > 0}
        ref={combinedRowRef}
        nestedRowProps={{
          ...sharedNestedRowProps,
          // If nestedRowProps.parentHasChildren is not provided, we need to set it to true if the parent has children
          // This nestedRowProps.parentHasChildren is provided on children iteration
          parentHasChildren: props.nestedRowProps?.parentHasChildren ?? children.length > 0,
          hasLoadedChildren: false,
        }}
        tableWithChildren={props.tableWithChildren}
      />

      {shouldShowChildren &&
        children.map((child, childIndex) => {
          const childItem = child as R
          const childHasChildren = props.source.itemsWithChildren?.(childItem)
          const isFirstChild = childIndex === 0
          const isLastChild = childIndex === children.length - 1

          const depth = (props.nestedRowProps?.depth ?? 0) + 1

          /**
           * Get the appropriate ref for connector height calculations
           *
           * We only need refs for the first and last children to calculate
           * the connector line height. Other children don't need refs.
           *
           * Special case: If there's a "Load More" button, the last child
           * doesn't get the ref because the LoadMore component will be the
           * actual last element.
           */
          const getChildRef = () => {
            if (isFirstChild) {
              return (el: HTMLTableRowElement | null) => {
                setFirstChildRef(el)
              }
            } else if (isLastChild && !shouldShowLoadMore) {
              return (el: HTMLTableRowElement | null) => {
                setLastChildRef(el)
              }
            }
            return undefined
          }

          // Recursive case: Child has its own children
          if (childHasChildren) {
            return (
              <NestedRow
                {...props}
                key={`nested-row-${props.groupIndex}-${child.id}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                tableWithChildren={props.tableWithChildren}
                ref={getChildRef()}
                nestedRowProps={{
                  ...props.nestedRowProps,
                  parentHasChildren: true,
                  depth: depth,
                }}
              />
            )
          } else {
            // Base case: Leaf node with no children
            return (
              <Row
                {...props}
                key={`row-${props.groupIndex}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                noBorder
                ref={getChildRef()}
                nestedRowProps={{
                  ...props.nestedRowProps,
                  depth: (props.nestedRowProps?.depth ?? 0) + 1,
                  parentHasChildren: true,
                  nestedVariant: childrenType,
                  onExpand: handleExpand,
                }}
                tableWithChildren={props.tableWithChildren}
              />
            )
          }
        })}

      {shouldShowLoading && (
        <RowLoading
          {...props}
          rowRef={internalRowRef}
          nestedRowProps={{
            ...sharedNestedRowProps,
            parentHasChildren: children.length > 0,
          }}
          paginationInfo={paginationInfo}
          ref={setLastChildRef}
        />
      )}

      {shouldShowLoadMore && !isLoading && (
        <LoadMoreRow
          {...props}
          rowRef={internalRowRef}
          onLoadMoreChildren={loadChildren}
          ref={setLastChildRef}
          nestedRowProps={{
            ...props.nestedRowProps,
            parentHasChildren: true,
            nestedVariant: childrenType,
          }}
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
  props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>,
  ref: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null
) => {
  // Only wrap with Provider at the root level (depth === 0 or undefined)
  // This ensures we have a single shared context for the entire tree
  if ((props.nestedRowProps?.depth ?? 0) === 0) {
    return (
      <NestedDataProvider>
        <NestedRowContentWithRef {...props} ref={ref} />
      </NestedDataProvider>
    )
  }

  // Nested children render without additional provider wrapping
  return <NestedRowContentWithRef {...props} ref={ref} />
}

const NestedRowContentWithRef = forwardRef(NestedRowContent) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?:
      | ((element: HTMLTableRowElement | null) => void)
      | React.RefObject<HTMLTableRowElement>
      | null
  }
) => ReturnType<typeof NestedRowContent>

const NestedRow = forwardRef(NestedRowComponentInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>
  }
) => ReturnType<typeof NestedRowComponentInner>

export { NestedRow }
