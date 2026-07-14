import { useEffect, useRef } from "react"

import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import {
  F0Graph,
  F0GraphNode,
  F0GraphSkeleton,
  tagColumn,
} from "@/patterns/F0Graph"

import { useDataCollectionSettings } from "../../../Settings/SettingsProvider"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { resolveGraphReveal } from "./reveal"
import { GraphVisualizationOptions } from "./types"
import { useDataCollectionTreeData } from "./useDataCollectionTreeData"

export type { GraphVisualizationOptions } from "./types"

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
  focusOnEntry,
  loadNodePath,
  getParentId,
  loadNodeData,
  liveUpdate,
  zoomPreset,
  minZoom,
  maxZoom,
  showControls,
  enableNodeWindowing,
  nodeWindowPadding,
  loadVisibleNodeData,
  visibleDataDebounceMs,
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
    loadVisibleNodeData: hydrateVisibleNodeData,
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
      loadNodeData,
      liveUpdate,
      focusOnEntry,
      zoomPreset,
      showControls,
    },
    { onLoadData, onLoadError }
  )

  // Reveal driver. The graph never auto-focuses on entry via this path: the
  // initial `revealNodeId` is adopted as "already handled", and only LATER
  // changes (a fresh search selection) reveal — with the smooth pan. Entry
  // focus is handled instead by `focusOnEntry`, which the tree-data hook
  // pre-resolves before first paint so F0Graph opens framed on it (no pan).
  // The decision lives in the pure `resolveGraphReveal`.
  const lastRevealedRef = useRef<string | undefined>(undefined)
  const initialRevealConsumedRef = useRef(false)
  useEffect(() => {
    if (isInitialLoading) return
    const decision = resolveGraphReveal({
      isInitialLoading,
      initialConsumed: initialRevealConsumedRef.current,
      revealNodeId,
      lastRevealed: lastRevealedRef.current,
    })
    if (decision.consumeInitial) initialRevealConsumedRef.current = true
    lastRevealedRef.current = decision.lastRevealed
    if (decision.revealId) void revealNode(decision.revealId)
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
            orderedTagTypes.indexOf(tagColumn(a)) -
            orderedTagTypes.indexOf(tagColumn(b))
        )
    : undefined

  // Wait for the whole initial load (roots + their pre-loaded levels) to finish
  // before mounting F0Graph, so ReactFlow's initial `fitView` frames the full
  // tree at once instead of re-fitting as nodes stream in.

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col border-solid border-t border-0 border-f1-border-secondary bg-[hsl(var(--neutral-3))]">
      {isInitialLoading ? (
        <F0GraphSkeleton showTags={tags !== undefined} />
      ) : (
        <F0Graph<Record>
          nodes={nodes}
          expandedNodes={expandedNodes}
          onExpandedNodesChange={setExpandedNodes}
          focusedNode={focusedNode}
          // Open framed on the entry target (pre-resolved above) with no
          // fit-then-pan. Falls back to fit-to-all when it isn't resolvable.
          initialFocusNodeId={focusOnEntry}
          highlightedNodes={highlightedNodes}
          selectionMode="single"
          showControls={showControls ?? true}
          zoomPreset={zoomPreset}
          minZoom={minZoom}
          maxZoom={maxZoom}
          enableNodeWindowing={enableNodeWindowing}
          nodeWindowPadding={nodeWindowPadding}
          // The hook's own hydration loader (two-phase mode) wins; otherwise
          // fall back to a loader supplied directly in the visualization options.
          loadVisibleNodeData={hydrateVisibleNodeData ?? loadVisibleNodeData}
          visibleDataDebounceMs={visibleDataDebounceMs}
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
                // Show the node skeleton while its rich data is being fetched
                // (two-phase hydration); `ctx.dataLoading` is undefined otherwise.
                loading={ctx.dataLoading}
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
