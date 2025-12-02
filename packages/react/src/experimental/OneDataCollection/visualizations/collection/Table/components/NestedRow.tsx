import { forwardRef, useCallback, useRef, useState } from "react"

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
  isLastOfRoot?: boolean
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
  >,
  externalRef:
    | ((element: HTMLTableRowElement | null) => void)
    | React.RefObject<HTMLTableRowElement>
    | null
) => {
  const [open, setOpen] = useState(false)
  const internalRowRef = useRef<HTMLTableRowElement | null>(null)
  const rowId = `${props.nestedRowProps?.depth ?? 0}-${"id" in props.item ? props.item.id : props.index}`

  const { children, loadChildren, isLoading, childrenType, paginationInfo } =
    useLoadChildren({
      rowId: rowId,
      item: props.item,
      source: props.source,
    })

  const { calculatedHeight, setFirstChildRef, setLastChildRef } =
    useCalculateConectorHeight(childrenType)

  const typeDetailed = childrenType === "detailed"
  const shouldShowLoading = open && isLoading
  const shouldShowChildren = open
  const shouldShowLoadMore = open && paginationInfo?.hasMore

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
          // Mark as last of root if parent is already last of root OR this is the last expandable child
          // This ensures the entire subtree blocks notifications to grandparent
          const childIsLastOfRoot =
            props.isLastOfRoot || (isLastChild && childHasChildren)
          const depth = (props.nestedRowProps?.depth ?? 0) + 1

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

          if (childHasChildren) {
            return (
              <NestedRow
                {...props}
                key={`nested-row-${props.groupIndex}-${child.id}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                tableWithChildren={props.tableWithChildren}
                isLastOfRoot={childIsLastOfRoot}
                ref={getChildRef()}
                nestedRowProps={{
                  ...props.nestedRowProps,
                  depth: depth,
                }}
              />
            )
          } else {
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
                  depth: typeDetailed
                    ? (props.nestedRowProps?.depth ?? 0) + 1
                    : (props.nestedRowProps?.depth ?? 0) + 1,
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
          nestedRowProps={sharedNestedRowProps}
          paginationInfo={paginationInfo}
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
  props: RowProps<
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
  // Only wrap with Provider at the root level (depth === 0 or undefined)
  if ((props.nestedRowProps?.depth ?? 0) === 0) {
    return (
      <NestedDataProvider>
        <NestedRowContentWithRef {...props} ref={ref} />
      </NestedDataProvider>
    )
  }

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
  props: RowProps<
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
  props: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & {
    ref?: React.ForwardedRef<HTMLTableRowElement>
  }
) => ReturnType<typeof NestedRowComponentInner>

export { NestedRow }
