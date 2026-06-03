import { useEffect } from "react"

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

/**
 * Placeholder tree shown while the graph loads. One row per visible level
 * (roots + `depth` levels of children), each row wider than the one above, so
 * the skeleton roughly matches the tree that is about to appear.
 */
const GraphSkeleton = ({ depth }: { depth: number }) => {
  const rowSizes = [2]
  for (let level = 1; level <= Math.max(0, depth); level++) {
    rowSizes.push(Math.min(3 + level * 3, 9))
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col items-center justify-center gap-10 pb-4">
      {rowSizes.map((count, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: count }).map((_, index) => (
            <Skeleton
              key={index}
              className={
                "h-14 rounded-xl " + (rowIndex === 0 ? "w-52" : "w-40")
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}

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

  // Reveal a node selected from the shared Data Collection search.
  useEffect(() => {
    if (revealNodeId) {
      void revealNode(revealNodeId)
    }
  }, [revealNodeId, revealNode])

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
        <GraphSkeleton depth={defaultExpandDepth ?? 1} />
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
            currentUserNodeId
              ? () => void revealNode(currentUserNodeId)
              : undefined
          }
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
