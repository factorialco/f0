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

import { motion, MotionProps } from "motion/react"
import { forwardRef, useCallback, useEffect, useRef } from "react"

import type { TableVisualizationType } from "@/patterns/OneDataCollection/types"

import {
  GroupingDefinition,
  RecordType,
  SelectionId,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useReducedMotion } from "@/lib/a11y"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import type {
  CellRendererProps,
  RowWrapperProps,
  TableColumnDefinition,
} from "../types"

import { PrimaryActionItemDefinition } from "../../../../actions"
import { useAddRow } from "../../EditableTable/context/AddRowContext"
import { getExpandAnimationVariants } from "../nested/animations"
import { useCalculateConectorHeight } from "../hooks/useCalculateConectorHeight"
import { HeaderGroupEntry } from "../hooks/useHeaderGroups"
import { useLoadChildren } from "../hooks/useLoadChildren"
import { useStickyParentRow } from "../hooks/useStickyParentRow"
import { useNestedDataContext } from "../providers/NestedProvider"
import { AddRowRow } from "./AddRow"
import { LoadMoreRow } from "./LoadMore"
import { NestedRowProps, Row } from "./Row"
import { RowLoading } from "./RowLoading"

const normalizeAddRowActions = (
  result:
    | PrimaryActionItemDefinition
    | PrimaryActionItemDefinition[]
    | undefined
): PrimaryActionItemDefinition[] => {
  if (!result) return []
  return (Array.isArray(result) ? result : [result]).filter(
    (item): item is PrimaryActionItemDefinition => item !== undefined
  )
}

/**
 * Stagger index for row mount animations. Depth contributes to the delay so
 * that when a whole cached subtree mounts in a single commit (re-expansion
 * without network waterfalls), the reveal still cascades level by level
 * instead of appearing all at once.
 */
const mountStaggerIndex = (index: number, depth: number) => index + depth * 2

/**
 * Motion-wrapped Row shared by every animated nested row, created lazily on
 * first use. motion's proxy does not cache custom components, so creating
 * this inside the row component would allocate one distinct wrapper type per
 * rendered row. Generics are type-level only, so a single runtime wrapper
 * serves every table; prop safety is preserved by the parallel plain-`Row`
 * branch at each call site, which receives the same props fully typed.
 */
type SharedMotionRow = React.ForwardRefExoticComponent<
  MotionProps &
    Record<string, unknown> &
    React.RefAttributes<HTMLTableRowElement>
>
let sharedMotionRow: SharedMotionRow | undefined
const getMotionRow = (): SharedMotionRow => {
  sharedMotionRow ??= motion.create(
    Row as unknown as React.ComponentType<Record<string, unknown>>
  ) as unknown as SharedMotionRow
  return sharedMotionRow
}

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
  onItemCheckedChange?: (item: R, checked: boolean) => void
  selectedItems: Map<string | number, R>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  frozenColumnsLeft: number
  checkColumnWidth: number
  tableWithChildren: boolean
  nestedRowProps?: NestedRowProps
  /** Optional predicate to apply a row-level visual variant. */
  referenceRowType?: (item: R) => "none" | "striped" | "striked"
  /** Custom cell renderer, passed through from Table to Row */
  cellRenderer?: React.ComponentType<CellRendererProps<R, Sortings, Summaries>>
  /** Row wrapper for child rows (provides per-row context, e.g. editing state) */
  rowWrapper?: React.ComponentType<RowWrapperProps<R>>
  fromVisualization?: TableVisualizationType
  headerGroups: HeaderGroupEntry[] | null
  registerSelectable?: (id: SelectionId, item: R) => void
  unregisterSelectable?: (id: SelectionId) => void
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
  const internalRowRef = useRef<HTMLTableRowElement | null>(null)
  const sentinelRef = useRef<HTMLTableCellElement | null>(null)
  const addRow = useAddRow()

  // Data identity resolved the same way as the rest of the collection
  // (Kanban's getKey, item navigation): `source.idProvider` when the source
  // defines one, otherwise the item's `id`. Undefined for id-less items,
  // which key by position and cannot be targeted by id from the controller.
  const itemKey = props.source.idProvider
    ? String(props.source.idProvider(props.item, props.index))
    : "id" in props.item &&
        props.item.id !== undefined &&
        props.item.id !== null
      ? String(props.item.id)
      : undefined

  // Row identity for the expansion overrides, the children cache and the
  // controller registry: the parent row's id (or the group for roots)
  // namespaces the item's own identity, so equal positions in different
  // branches or groups can never collide and — unlike a positional key —
  // the expansion survives sibling reorders. Identities must be unique
  // among siblings; id-less items fall back to their position.
  const parentKey = props.nestedRowProps?.parentRowId ?? `g${props.groupIndex}`
  const rowId = `${parentKey}/${itemKey ?? `i${props.index}`}`

  const {
    setRowExpanded,
    resolveRowExpansion,
    registerNestedRow,
    expandAnimation,
  } = useNestedDataContext()

  const depth = props.nestedRowProps?.depth ?? 0

  /**
   * Expansion is resolved declaratively: an explicit override (user click or
   * controller call) wins, otherwise the active auto-expansion policy is
   * evaluated. This lets policies cascade to rows revealed by lazy loading.
   */
  const { expanded: open, eager } = resolveRowExpansion(
    rowId,
    props.item,
    depth
  )

  // Register so imperative controller operations can target this row.
  // `props.item` is included so the registry entry stays fresh after a
  // refetch recreates item objects: controller predicates, getExpandedItems
  // and onExpandedChange must see current field values, not the first-render
  // snapshot. Re-registering on item identity change is two cheap Map ops.
  useEffect(
    () => registerNestedRow(rowId, props.item, depth, itemKey),
    [registerNestedRow, rowId, props.item, depth, itemKey]
  )

  /**
   * useLoadChildren hook manages:
   * - Children data fetching and caching
   * - Loading state
   * - Pagination information
   * - Determining if children are "nested" (have their own children) or "flat"
   */
  const {
    children,
    loadChildren,
    isLoading,
    hasError,
    childrenType,
    paginationInfo,
    hasFetched,
  } = useLoadChildren({
    rowId: rowId,
    item: props.item,
    source: props.source,
  })

  /**
   * Lazy loading is driven by the resolved `open` state (not by the click
   * handler) so rows opened programmatically or by a policy also fetch their
   * children. The ref makes each open-session request the first page once,
   * avoiding retry loops when a fetch errors.
   */
  const autoLoadRequestedRef = useRef(false)

  // Re-arm the request guard when the children cache is invalidated (e.g. a
  // filters change) so rows kept open by a policy reload their children. A
  // reset can also cancel an in-flight FIRST fetch — `isLoading` drops back
  // to `false` with nothing cached and no error — which must re-arm too,
  // since `hasFetched` never became true in that case.
  const previousHasFetchedRef = useRef(hasFetched)
  const previousIsLoadingRef = useRef(isLoading)
  useEffect(() => {
    const fetchInvalidated = previousHasFetchedRef.current && !hasFetched
    const fetchCancelled =
      previousIsLoadingRef.current && !isLoading && !hasFetched && !hasError
    previousHasFetchedRef.current = hasFetched
    previousIsLoadingRef.current = isLoading
    if (fetchInvalidated || fetchCancelled) {
      autoLoadRequestedRef.current = false
    }
  }, [hasFetched, isLoading, hasError])

  useEffect(() => {
    if (!open) {
      autoLoadRequestedRef.current = false
      return
    }
    if (autoLoadRequestedRef.current || isLoading || hasFetched) return
    autoLoadRequestedRef.current = true
    loadChildren()
  }, [open, isLoading, hasFetched, loadChildren])

  /**
   * Restores the pre-`hasFetched` behavior for rows whose cached children
   * are empty: re-expanding used to refetch (the old guard was
   * `!children.length`), but the `hasFetched` guard above now also blocks a
   * legitimate empty result from ever being retried. Only refetch on a fresh
   * collapsed→expanded transition (tracked via `previousOpenRef`), not on
   * every render while the row stays open, so a genuinely empty result
   * cannot cause a fetch loop. The ref starts as `false` so a row that
   * remounts already-open (e.g. revealed by re-expanding a collapsed
   * ancestor) with cached empty children also counts as a transition and
   * retries once, matching the behavior of toggling the row itself.
   */
  const previousOpenRef = useRef(false)
  useEffect(() => {
    const wasOpen = previousOpenRef.current
    previousOpenRef.current = open
    if (
      open &&
      !wasOpen &&
      hasFetched &&
      !isLoading &&
      !hasError &&
      children.length === 0
    ) {
      loadChildren()
    }
  }, [open, hasFetched, isLoading, hasError, children.length, loadChildren])

  /**
   * Eager pagination (`children: "all"`): keeps fetching pages until the
   * adapter reports no more. The adapter fully drives when to stop — loading
   * halts on `hasMore: false`, on reaching `total`, or on a fetch error, so a
   * failing adapter cannot cause a retry loop and remaining pages fall back
   * to the "show more" row.
   */
  const eagerLoadPending =
    open &&
    eager &&
    hasFetched &&
    !hasError &&
    !!paginationInfo?.hasMore &&
    (paginationInfo.total === undefined ||
      children.length < paginationInfo.total)

  useEffect(() => {
    if (!eagerLoadPending || isLoading) return
    loadChildren()
  }, [eagerLoadPending, isLoading, loadChildren])

  const shouldShowLoading = open && isLoading
  const shouldShowChildren = open
  const shouldShowLoadMore =
    open && paginationInfo?.hasMore && !eagerLoadPending

  const addRowActions =
    open && !isLoading
      ? normalizeAddRowActions(addRow?.addNestedRowActions?.(props.item))
      : []
  const hasAddRowActions = addRowActions.length > 0

  const firstRow = (props.nestedRowProps?.depth ?? 0) === 0

  const { isSticky } = useStickyParentRow(
    open && firstRow,
    internalRowRef,
    sentinelRef
  )

  /**
   * useCalculateConectorHeight manages the visual tree connector lines
   * It calculates the height between first and last visible child to draw
   * the vertical line connecting them to their parent
   */
  const { calculatedHeight, setFirstChildRef, setLastChildRef } =
    useCalculateConectorHeight({
      nestedVariant: childrenType,
      withHasMore: !!shouldShowLoadMore,
      withAddRowActions: hasAddRowActions,
      isSticky,
    })

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

  // Children fetching reacts to the resolved `open` state (see effects above),
  // so toggling only needs to record the explicit override.
  const handleExpand = () => {
    setRowExpanded(rowId, !open)
  }

  const sharedNestedRowProps = {
    depth,
    expanded: open,
    onExpand: handleExpand,
    nestedVariant: childrenType,
    connectorHeight: calculatedHeight,
  }

  /**
   * Optional mount animation for rows revealed on expansion (see
   * `nested/animations.ts` for the variants); collapsing stays instant.
   */
  const shouldReduceMotion = useReducedMotion()
  const hasAnimation = expandAnimation !== "none"
  const animated = hasAnimation && !shouldReduceMotion
  // Lazy: only pay for the motion-wrapped component when an animation is
  // actually configured — rows using the default "none" animation render the
  // plain `Row` instead (see usages below).
  const MotionRow = hasAnimation ? getMotionRow() : undefined
  const mountAnimationProps = hasAnimation
    ? {
        variants: getExpandAnimationVariants(expandAnimation),
        initial: "hidden" as const,
        animate: "visible" as const,
      }
    : {}

  const isTableVisualization = props.fromVisualization === "table"

  /**
   * Border logic for hierarchical rows:
   * - Border should only appear on the "last visible element" of the tree
   * - If this item is the last child and is closed → show border (noBorder = false)
   * - If this item is the last child and is open → hide border (noBorder = true), its children will show the border
   * - If this item is NOT the last child → hide border (noBorder = true)
   */
  const isLastChild = (props.nestedRowProps?.isLastChild || firstRow) ?? false
  const shouldHideBorder = (open || !isLastChild) && isTableVisualization

  const selfRowProps = {
    ...props,
    disableHover: !props.source.itemOnClick,
    noBorder: shouldHideBorder,
    nestedRowProps: {
      ...sharedNestedRowProps,
      // If nestedRowProps.parentHasChildren is not provided, we need to set it to true if the parent has children
      // This nestedRowProps.parentHasChildren is provided on children iteration
      parentHasChildren:
        (props.nestedRowProps?.parentHasChildren ?? children.length > 0) ||
        hasAddRowActions,
      hasLoadedChildren: false,
      isLastChild,
      stickyRow: isSticky,
    },
    tableWithChildren: props.tableWithChildren,
    fromVisualization: props.fromVisualization,
  }

  return (
    <>
      {animated && props.nestedRowProps?.animateMount && MotionRow ? (
        <MotionRow
          {...selfRowProps}
          {...mountAnimationProps}
          custom={mountStaggerIndex(props.index, depth)}
          ref={combinedRowRef}
        />
      ) : (
        <Row {...selfRowProps} ref={combinedRowRef} />
      )}

      {shouldShowChildren &&
        children.map((child, childIndex) => {
          const childItem = child as R
          const childHasChildren = props.source.itemsWithChildren?.(childItem)
          const isFirstChild = childIndex === 0
          const isLastChildInLevel = childIndex === children.length - 1

          const childDepth = depth + 1

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
            } else if (
              isLastChildInLevel &&
              !shouldShowLoadMore &&
              !hasAddRowActions
            ) {
              return (el: HTMLTableRowElement | null) => {
                setLastChildRef(el)
              }
            }
            return undefined
          }

          /**
           * Determine if this child is the last visible element in the tree
           *
           * A child is the "last in tree" only if:
           * 1. It's the last child in its current level
           * 2. Its parent is also the last in the tree (isLastChild from props)
           * 3. There's no LoadMore button (which would add more elements)
           *
           * This ensures the border "bubbles down" to the deepest last visible element
           */
          const childIsLastInTree =
            isLastChildInLevel && isLastChild && !shouldShowLoadMore

          const RowWrapper = props.rowWrapper

          // Recursive case: Child has its own children
          if (childHasChildren) {
            const nestedChild = (
              <NestedRow
                {...props}
                key={`nested-row-${props.groupIndex}-${child.id}-${props.index}-${childIndex}`}
                index={childIndex}
                item={childItem}
                onCheckedChange={(checked) => {
                  props.onItemCheckedChange?.(childItem, checked)
                }}
                tableWithChildren={props.tableWithChildren}
                ref={getChildRef()}
                nestedRowProps={{
                  ...props.nestedRowProps,
                  parentHasChildren: true,
                  parentRowId: rowId,
                  depth: childDepth,
                  isLastChild: childIsLastInTree,
                  animateMount: animated,
                }}
                fromVisualization={props.fromVisualization}
              />
            )

            if (RowWrapper) {
              return (
                <RowWrapper
                  key={`nested-row-${props.groupIndex}-${child.id}-${props.index}-${childIndex}`}
                  item={childItem}
                  index={childIndex}
                >
                  {nestedChild}
                </RowWrapper>
              )
            }

            return nestedChild
          } else {
            // Base case: Leaf node with no children
            // For leaf nodes, border is shown only if it's the last visible element in the tree
            const leafShouldHideBorder =
              !childIsLastInTree && isTableVisualization

            const leafRowProps = {
              ...props,
              index: childIndex,
              item: childItem,
              onCheckedChange: (checked: boolean) => {
                props.onItemCheckedChange?.(childItem, checked)
              },
              noBorder: leafShouldHideBorder,
              nestedRowProps: {
                ...props.nestedRowProps,
                depth: childDepth,
                parentHasChildren: true,
                nestedVariant: childrenType,
                onExpand: handleExpand,
                isLastChild: childIsLastInTree,
              },
              fromVisualization: props.fromVisualization,
              tableWithChildren: props.tableWithChildren,
            }

            const leafChild =
              animated && MotionRow ? (
                <MotionRow
                  {...leafRowProps}
                  {...mountAnimationProps}
                  custom={mountStaggerIndex(childIndex, childDepth)}
                  key={`row-${props.groupIndex}-${props.index}-${childIndex}`}
                  ref={getChildRef()}
                />
              ) : (
                <Row
                  {...leafRowProps}
                  key={`row-${props.groupIndex}-${props.index}-${childIndex}`}
                  ref={getChildRef()}
                />
              )

            if (RowWrapper) {
              return (
                <RowWrapper
                  key={`row-${props.groupIndex}-${props.index}-${childIndex}`}
                  item={childItem}
                  index={childIndex}
                >
                  {leafChild}
                </RowWrapper>
              )
            }

            return leafChild
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
          shouldHideBorder={!isLastChild}
        />
      )}

      {shouldShowLoadMore && !isLoading && (
        <LoadMoreRow
          {...props}
          disableHover={true}
          rowRef={internalRowRef}
          onLoadMoreChildren={loadChildren}
          ref={hasAddRowActions ? undefined : setLastChildRef}
          nestedRowProps={{
            ...props.nestedRowProps,
            parentHasChildren: true,
            nestedVariant: childrenType,
            isLastChild,
          }}
        />
      )}

      {hasAddRowActions && (
        <AddRowRow
          {...props}
          disableHover={true}
          rowRef={internalRowRef}
          addRowActions={addRowActions}
          addRowLabel={addRow?.addNestedRowActionsLabel}
          ref={(el: HTMLTableRowElement | null) => {
            if (children.length === 0) setFirstChildRef(el)
            setLastChildRef(el)
          }}
          nestedRowProps={{
            ...props.nestedRowProps,
            parentHasChildren: true,
            nestedVariant: childrenType,
          }}
        />
      )}

      {/* Invisible sentinel row used by useStickyParentRow to detect when
          all children have been scrolled past and the parent should unstick. */}
      {open && (
        <tr aria-hidden="true" className="h-0 border-none p-0">
          <td
            ref={sentinelRef}
            colSpan={
              props.columns.length +
              (props.source.selectable ? 1 : 0) +
              (props.source.itemActions ? 2 : 0)
            }
            className="h-0 border-none p-0"
          />
        </tr>
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
  // Provider is mounted unconditionally at Table level, so we never wrap
  // here. This keeps expansion state and fetched data in a single context
  // that survives parent re-renders (e.g. GraphQL refetch).
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
    fromVisualization?: TableVisualizationType
  }
) => ReturnType<typeof NestedRowComponentInner>

export { NestedRow }
