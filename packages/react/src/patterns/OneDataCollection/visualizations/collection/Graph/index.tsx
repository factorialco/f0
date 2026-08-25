import { useCallback, useEffect, useRef, useState } from "react"

import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import {
  F0Graph,
  type F0GraphHandle,
  F0GraphNode,
  F0GraphSkeleton,
  tagColumn,
} from "@/patterns/F0Graph"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { useDataCollectionSettings } from "../../../Settings/SettingsProvider"
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
  lockedTagTypes,
  currentUserNodeId,
  getNodeId,
  getChildrenCount,
  stackNodes,
  stackedTrailing,
  childrenFilters,
  defaultExpandDepth,
  revealNodeId,
  searchSelectionNonce,
  focusOnEntry,
  initialSelectedNodeId,
  loadNodePath,
  getParentId,
  loadNodeData,
  liveUpdate,
  zoomPreset,
  minZoom,
  maxZoom,
  centerOnNodeClick,
  nodeClickZoom,
  viewportInset,
  showControls,
  canvasFooterActions,
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
      stackNodes,
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

  // Imperative handle to the graph, for actions the declarative props can't
  // express: re-centering on a node that is already the focus target (the
  // `focusedNode` prop only reacts to value changes), and dropping the click
  // selection when a reveal marks a node via `highlightedNodes` instead.
  const graphRef = useRef<F0GraphHandle>(null)

  // Entry selection. When `initialSelectedNodeId` is set we run F0Graph's
  // selection in CONTROLLED mode, seeded with that node so a deep link arrives
  // already marked (the click-selection ring), and mirror every later change
  // back into this state so clicks/keyboard keep moving the selection normally.
  // The control mode is decided ONCE at mount (a stable boolean) so we never
  // flip controlled/uncontrolled; consumers that omit the option keep the
  // previous uncontrolled behavior (`selectedNodes` stays `undefined`).
  const [controlSelection] = useState(() => initialSelectedNodeId !== undefined)
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(() =>
    initialSelectedNodeId ? new Set([initialSelectedNodeId]) : new Set()
  )

  // Reveal + focus a node: load/expand it (declarative `focusedNode` handles
  // the first fly, with the right async + settle timing), then imperatively
  // re-center — so re-searching the SAME node after panning still flies — and
  // clear the click selection so it doesn't stay marked alongside the reveal
  // highlight.
  const revealAndFocus = useCallback(
    async (nodeId: string): Promise<void> => {
      await revealNode(nodeId)
      graphRef.current?.clearSelection()
      graphRef.current?.focusNode(nodeId)
    },
    [revealNode]
  )

  // Reveal driver. The graph never auto-focuses on entry via this path: the
  // initial `revealNodeId` is adopted as "already handled", and only LATER
  // changes (a fresh search selection) reveal — with the smooth pan. Entry
  // focus is handled instead by `focusOnEntry`, which the tree-data hook
  // pre-resolves before first paint so F0Graph opens framed on it (no pan).
  // The decision lives in the pure `resolveGraphReveal`.
  // `searchSelectionNonce` bumps on every shared-search pick, so re-selecting
  // the SAME node still re-reveals/re-centers (the id alone wouldn't change).
  const lastRevealedRef = useRef<string | undefined>(undefined)
  const lastNonceRef = useRef<number | undefined>(undefined)
  const initialRevealConsumedRef = useRef(false)
  useEffect(() => {
    if (isInitialLoading) return
    const decision = resolveGraphReveal({
      isInitialLoading,
      initialConsumed: initialRevealConsumedRef.current,
      revealNodeId,
      lastRevealed: lastRevealedRef.current,
      revealNonce: searchSelectionNonce,
      lastNonce: lastNonceRef.current,
    })
    if (decision.consumeInitial) initialRevealConsumedRef.current = true
    lastRevealedRef.current = decision.lastRevealed
    lastNonceRef.current = decision.lastNonce
    if (decision.revealId) void revealAndFocus(decision.revealId)
  }, [revealNodeId, searchSelectionNonce, revealAndFocus, isInitialLoading])

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
  // Columns the actor can't see: never rendered on a node, whatever the saved
  // visibility says (their settings toggle is locked OFF + disabled too).
  const lockedSet = new Set<string>(Object.keys(lockedTagTypes ?? {}))
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
    (type) =>
      !lockedSet.has(type) && (pinnedSet.has(type) || !hiddenSet.has(type))
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
    <div className="flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary bg-[hsl(var(--neutral-3))]">
      {isInitialLoading ? (
        <F0GraphSkeleton showTags={tags !== undefined} />
      ) : (
        <F0Graph<Record>
          ref={graphRef}
          nodes={nodes}
          expandedNodes={expandedNodes}
          onExpandedNodesChange={setExpandedNodes}
          focusedNode={focusedNode}
          // Open framed on the entry target (pre-resolved above) with no
          // fit-then-pan. Falls back to fit-to-all when it isn't resolvable.
          initialFocusNodeId={focusOnEntry}
          highlightedNodes={highlightedNodes}
          selectionMode="single"
          // Controlled only when an entry selection was requested (see
          // `controlSelection`); otherwise `undefined` keeps F0Graph's own
          // uncontrolled selection, unchanged for existing consumers.
          selectedNodes={controlSelection ? selectedNodes : undefined}
          // Selecting a node marks it via the selection ring; drop the reveal
          // highlight (search / "Find me") so only one node stays marked. Fires
          // with the new set — a non-empty set means a real selection (an empty
          // set is a pane click or our own `clearSelection()` on reveal, which
          // must NOT wipe the highlight we just set). Centering lives on the
          // node's own click (below) so a click on the empty canvas never
          // re-centers. When controlled we also mirror the set so clicks keep
          // moving the ring past the seeded entry selection.
          onSelectedNodesChange={(next) => {
            if (controlSelection) setSelectedNodes(next)
            if (next.size > 0) clearFocus()
          }}
          showControls={showControls ?? true}
          canvasFooterActions={canvasFooterActions}
          zoomPreset={zoomPreset}
          minZoom={minZoom}
          maxZoom={maxZoom}
          // Fly-to on click is F0Graph's default; centers + zooms in close on the
          // clicked node and offsets for the side panel via `viewportInset`.
          centerOnNodeClick={centerOnNodeClick}
          nodeClickZoom={nodeClickZoom}
          viewportInset={viewportInset}
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
            // `revealAndFocus` also re-centers on repeat presses and clears any
            // click selection so it doesn't stay marked alongside the reveal.
            currentUserNodeId
              ? () => revealAndFocus(currentUserNodeId)
              : undefined
          }
          onPaneClick={clearFocus}
          renderNode={(node, ctx) => {
            const itemOnClick = source.itemOnClick?.(node.data)
            // One call for both shapes. When the graph sets `ctx.stacked` this
            // renders as a row, which mirrors the card's anatomy (same box, same
            // leading avatar, same title) so a column reads as a continuation of
            // its parent. The card-only extras below — subtitle, tags, the
            // selection toolbar, the hover card — are ignored for a row, where
            // `trailing` takes their place.
            return (
              <F0GraphNode
                {...ctx}
                // Show the node skeleton while its rich data is being fetched
                // (two-phase hydration); `ctx.dataLoading` is undefined otherwise.
                loading={ctx.dataLoading}
                avatar={avatar?.(node.data)}
                title={title(node.data)}
                trailing={stackedTrailing?.(node.data)}
                subtitle={subtitle?.(node.data)}
                tags={orderedTags?.(node.data)}
                actions={nodeActions?.(node.data)}
                hoverCard
                onClick={() => {
                  // Select + fly-to is handled by F0Graph's default
                  // `centerOnNodeClick` (closer zoom, panel-aware offset), so we
                  // no longer center imperatively here. `ctx.onClick()` keeps
                  // keyboard (Enter) selection working, where there's no pointer
                  // click for F0Graph's own click path to catch.
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
