import { useEffect, useRef } from "react"

import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { F0Graph, F0GraphNode } from "@/patterns/F0Graph"
import { Skeleton } from "@/ui/skeleton"

import { useDataCollectionSettings } from "../../../Settings/SettingsProvider"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { GraphVisualizationOptions } from "./types"
import { useDataCollectionTreeData } from "./useDataCollectionTreeData"

export type { GraphVisualizationOptions } from "./types"

/** A single node-card placeholder: avatar + name/role lines, like a real node. */
const SkeletonNodeCard = () => (
  <div className="flex h-[52px] w-64 items-center gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3">
    <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
    <div className="flex flex-1 flex-col gap-1.5">
      <Skeleton className="h-3 w-28 rounded" />
      <Skeleton className="h-2.5 w-20 rounded" />
    </div>
  </div>
)

const SkeletonReportsPill = () => <Skeleton className="h-5 w-20 rounded-full" />

const SkeletonExpander = () => <Skeleton className="h-7 w-10 rounded-lg" />

// Connecting bus (riser + horizontal bus + droppers) drawn to align with the
// three children below. Width matches the children row: 3·256 + 2·40 = 848.
const SkeletonConnectors = () => (
  <svg width={848} height={40} viewBox="0 0 848 40" fill="none" aria-hidden>
    <path
      d="M424 0 V20"
      className="stroke-f1-border-secondary"
      strokeWidth={1.5}
    />
    <path
      d="M128 40 V28 Q128 20 136 20 H712 Q720 20 720 28 V40"
      className="stroke-f1-border-secondary"
      strokeWidth={1.5}
    />
    <path
      d="M424 20 V40"
      className="stroke-f1-border-secondary"
      strokeWidth={1.5}
    />
  </svg>
)

/**
 * Placeholder that mirrors the org chart about to appear: a root node with its
 * reports pill, the connecting bus, and a row of child nodes (each with a
 * reports pill and an expander), so the loading state matches the real shape.
 */
const GraphSkeleton = () => (
  <div className="flex h-full min-h-0 flex-1 flex-col items-center justify-center pb-4">
    <div className="flex flex-col items-center gap-2">
      <SkeletonNodeCard />
      <SkeletonReportsPill />
    </div>

    <SkeletonConnectors />

    <div className="flex items-start gap-10">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <SkeletonNodeCard />
          <SkeletonReportsPill />
          <SkeletonExpander />
        </div>
      ))}
    </div>
  </div>
)

export type GraphCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  GraphVisualizationOptions<Record, Filters, Sortings>
>

export const GraphCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  title,
  subtitle,
  avatar,
  tags,
  nodeActions,
  nodeTagTypes,
  defaultVisibleTagTypes,
  pinnedTagTypes,
  currentUserNodeId,
  getNodeId,
  getChildrenCount,
  childrenFilters,
  defaultExpandDepth,
  revealNodeId,
  loadNodePath,
  getParentId,
  zoomPreset,
  showControls,
  onLoadData,
  onLoadError,
}: GraphCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const {
    nodes,
    expandedNodes,
    setExpandedNodes,
    focusedNode,
    highlightedNodes,
    revealNode,
    clearFocus,
    isInitialLoading,
  } = useDataCollectionTreeData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(
    source,
    {
      title,
      subtitle,
      avatar,
      tags,
      getNodeId,
      getChildrenCount,
      childrenFilters,
      defaultExpandDepth,
      loadNodePath,
      getParentId,
      zoomPreset,
      showControls,
    },
    { onLoadData, onLoadError }
  )

  // Reveal a node selected from the shared Data Collection search — but NEVER on
  // entry: opening the graph must not auto-focus anyone (a consistent default
  // view + clean search). We adopt whatever `revealNodeId` exists when the tree
  // first becomes ready as "already handled", then only react to LATER changes
  // (a fresh search selection). "Find me" reveals directly via the controls and
  // is unaffected.
  const lastRevealedRef = useRef<string | undefined>(undefined)
  const initialRevealConsumedRef = useRef(false)
  useEffect(() => {
    if (isInitialLoading) return
    if (!initialRevealConsumedRef.current) {
      initialRevealConsumedRef.current = true
      lastRevealedRef.current = revealNodeId
      return
    }
    if (revealNodeId && revealNodeId !== lastRevealedRef.current) {
      lastRevealedRef.current = revealNodeId
      void revealNode(revealNodeId)
    }
  }, [revealNodeId, revealNode, isInitialLoading])

  // Clear the shared header search when ENTERING and LEAVING the graph view, so
  // it never points at a node here (the graph is a tree, not a filtered list).
  // Mount/unmount only — typing a search while in the graph must not be wiped.
  const setCurrentSearchRef = useRef(source.setCurrentSearch)
  setCurrentSearchRef.current = source.setCurrentSearch
  useEffect(() => {
    setCurrentSearchRef.current(undefined)
    return () => setCurrentSearchRef.current(undefined)
  }, [])

  // Metadata visibility + order are configured from the shared Data Collection
  // settings (the same SortAndHideList as table columns), not F0Graph's controls.
  const { settings } = useDataCollectionSettings()
  const graphSettings = settings.visualization.graph
  const allTagTypes = nodeTagTypes ? [...nodeTagTypes] : []
  const defaultVisibleSet = new Set(defaultVisibleTagTypes ?? allTagTypes)
  const pinnedSet = new Set<string>(pinnedTagTypes ?? [])
  const hiddenSet = new Set(
    graphSettings?.hidden ??
      allTagTypes.filter((type) => !defaultVisibleSet.has(type))
  )
  const order = graphSettings?.order ?? allTagTypes
  const orderedTagTypes = allTagTypes.sort(
    (a, b) =>
      (order.indexOf(a) === -1 ? Infinity : order.indexOf(a)) -
      (order.indexOf(b) === -1 ? Infinity : order.indexOf(b))
  )
  const visibleTagTypes = orderedTagTypes.filter(
    (type) => pinnedSet.has(type) || !hiddenSet.has(type)
  )

  // Reorder each node's tags to match the configured metadata order.
  const orderedTags = tags
    ? (record: Record) =>
        [...tags(record)].sort(
          (a, b) =>
            orderedTagTypes.indexOf(a.type) - orderedTagTypes.indexOf(b.type)
        )
    : undefined

  // Wait for the whole initial load (roots + their pre-loaded levels) to finish
  // before mounting F0Graph, so ReactFlow's initial `fitView` frames the full
  // tree at once instead of re-fitting as nodes stream in.

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col border-solid border-t border-0 border-f1-border-secondary bg-[hsl(var(--neutral-3))]">
      {isInitialLoading ? (
        <GraphSkeleton />
      ) : (
        <F0Graph<Record>
          nodes={nodes}
          expandedNodes={expandedNodes}
          onExpandedNodesChange={setExpandedNodes}
          focusedNode={focusedNode}
          highlightedNodes={highlightedNodes}
          selectionMode="single"
          showControls={showControls ?? true}
          zoomPreset={zoomPreset}
          reserveTagRow={tags !== undefined}
          nodeTagTypes={nodeTagTypes}
          visibleTagTypes={visibleTagTypes}
          currentUserNodeId={currentUserNodeId}
          onFocusUser={
            // Return the reveal promise so the "Find me" button shows a loading
            // spinner while it loads the path, expands and centers the node.
            currentUserNodeId ? () => revealNode(currentUserNodeId) : undefined
          }
          onPaneClick={clearFocus}
          renderNode={(node, ctx) => {
            const itemOnClick = source.itemOnClick?.(node.data)
            return (
              <F0GraphNode
                {...ctx}
                avatar={avatar?.(node.data)}
                title={title(node.data)}
                subtitle={subtitle?.(node.data)}
                tags={orderedTags?.(node.data)}
                actions={nodeActions?.(node.data)}
                hoverCard
                onClick={() => {
                  ctx.onClick()
                  itemOnClick?.()
                }}
              />
            )
          }}
        />
      )}
    </div>
  )
}
