import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useReactFlow,
  type EdgeProps as RFEdgeProps,
  type EdgeTypes,
  type NodeTypes,
} from "@xyflow/react"
import {
  type ReactNode,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n"

import {
  BACKGROUND_DOT_GAP,
  EMPTY_HIGHLIGHTED_NODES,
  FIT_VIEW_PADDING_LOOSE,
  FOCUS_SETTLE_DELAY_MS,
  LARGE_GRAPH_SNAP_THRESHOLD,
  NODE_CLICK_DISTANCE_SQ,
} from "../../constants"
import {
  F0GraphActionsContext,
  F0GraphExpandContext,
  F0GraphFocusContext,
  F0GraphRenderConfigContext,
  F0GraphSelectionContext,
  F0GraphZoomContext,
  useF0GraphRenderConfigInternal,
} from "../../contexts"
import type { F0GraphNodeRenderContext, F0GraphProps } from "../../F0Graph"
import { useExpandState } from "../../hooks/useExpandState"
import { useGraphKeyboard } from "../../hooks/useGraphKeyboard"
import { useGraphRenderModel } from "../../hooks/useGraphRenderModel"
import { useGraphViewport } from "../../hooks/useGraphViewport"
import { useSelectionFocus } from "../../hooks/useSelectionFocus"
import { useDeferredMerge } from "../../hooks/useDeferredMerge"
import { useLazyTree } from "../../hooks/useLazyTree"
import { useTreeBuilder } from "../../hooks/useTreeBuilder"
import { useViewportDataLoader } from "../../hooks/useViewportDataLoader"
import { ClickSpark } from "../../internal/ClickSpark"
import {
  F0GraphCollapserWrapper,
  F0GraphExpanderWrapper,
  F0GraphNodeWrapper,
} from "../../internal/ReactFlowAdapters"
import type {
  GraphEdge,
  GraphNode,
  LayoutDirection,
  PositionedNode,
} from "../../types"
import { F0GraphControls } from "../F0GraphControls"
import { type EdgeVariant, type F0GraphEdgeProps } from "../F0GraphEdge"
import { F0GraphEdgeBase } from "../F0GraphEdge/F0GraphEdge"
import type { F0GraphNodeTagType } from "../F0GraphNode"

// ─── Custom Edge Wrapper (supports renderEdge override via context) ────────
interface GraphEdgeData extends Record<string, unknown> {
  graphEdge?: GraphEdge
  variant?: EdgeVariant
}

function F0GraphEdgeWrapperInner(props: RFEdgeProps) {
  const edgeData = props.data as GraphEdgeData | undefined
  const graphEdge = edgeData?.graphEdge
  const variant: EdgeVariant = edgeData?.variant ?? "default"
  const renderConfig = useF0GraphRenderConfigInternal()
  const renderEdgeFn = renderConfig?.renderEdge

  if (renderEdgeFn && graphEdge) {
    const custom = renderEdgeFn(graphEdge, variant)
    if (custom !== null) {
      return <>{custom}</>
    }
  }

  return (
    <F0GraphEdgeBase
      {...(props as F0GraphEdgeProps & RFEdgeProps)}
      variant={variant}
    />
  )
}

F0GraphEdgeWrapperInner.displayName = "F0GraphEdgeWrapper"

const F0GraphEdgeWrapper = memo(F0GraphEdgeWrapperInner, (prev, next) => {
  if (prev.id !== next.id) return false
  if (prev.data?.showDot !== next.data?.showDot) return false
  if (prev.data?.variant !== next.data?.variant) return false
  if (prev.data?.graphEdge !== next.data?.graphEdge) return false
  if (prev.sourceX !== next.sourceX) return false
  if (prev.sourceY !== next.sourceY) return false
  if (prev.targetX !== next.targetX) return false
  if (prev.targetY !== next.targetY) return false
  if (prev.sourcePosition !== next.sourcePosition) return false
  if (prev.targetPosition !== next.targetPosition) return false
  return true
})

// ─── Node & edge type maps ─────────────────────────────────────
const nodeTypes: NodeTypes = {
  graphNode: F0GraphNodeWrapper as unknown as NodeTypes[string],
  expanderNode: F0GraphExpanderWrapper as unknown as NodeTypes[string],
  collapserNode: F0GraphCollapserWrapper as unknown as NodeTypes[string],
}

const defaultEdgeTypes: EdgeTypes = {
  graphEdge: F0GraphEdgeBase as unknown as EdgeTypes[string],
}

const customEdgeTypes: EdgeTypes = {
  graphEdge: F0GraphEdgeWrapper as unknown as EdgeTypes[string],
}

// ─── View (consumes ReactFlow hooks via the provider in the shell) ─────────
export function F0GraphView<T = unknown>(props: F0GraphProps<T>) {
  const {
    nodes: nodesProp,
    edges: edgesProp,
    rootNodes,
    loadChildren,
    deferredNodes,
    onDeferredLoadComplete,
    onDeferredLoadError,
    renderNode,
    zoomPreset,
    zoomThresholds,
    defaultZoom = 1,
    minZoom = 0.05,
    maxZoom = 2,
    expandedNodes: controlledExpanded,
    defaultExpandedNodes,
    defaultExpandDepth,
    onExpandToggle,
    onExpandedNodesChange,
    selectionMode = "single",
    selectedNodes: controlledSelected,
    onNodeSelect,
    onSelectedNodesChange,
    onPaneClick: onPaneClickProp,
    focusedNode,
    highlightedNodes: highlightedProp,
    nodeWidth: nodeWidthProp,
    nodeHeight: nodeHeightProp,
    canvasActions,
    showControls = false,
    onZoomLevelChange,
    onViewportChange,
    renderEdge,
    nodeTagTypes,
    visibleTagTypes: controlledVisibleTagTypes,
    defaultVisibleTagTypes,
    reserveTagRow,
    onVisibleNodesChange,
    onRenderedNodesChange,
    enableNodeWindowing,
    nodeWindowPadding,
    loadVisibleNodeData,
    visibleDataDebounceMs,
    layoutEngine: layoutEngineProp,
    controlLabels,
    currentUserNodeId,
    onFocusUser: onFocusUserProp,
  } = props

  const i18n = useI18n()
  const reactFlow = useReactFlow()

  const [hoveredEdgeId, setHoveredEdgeId] = useState<string | null>(null)

  // Direction is hardcoded to TB; the layout engine still supports other values.
  const direction = "TB" as LayoutDirection

  // ── Per-type tag visibility (controlled by the consumer) ──
  const visibleTagTypesArr =
    controlledVisibleTagTypes ?? defaultVisibleTagTypes ?? nodeTagTypes ?? []
  const visibleTagTypesSet = useMemo(
    () => new Set<F0GraphNodeTagType>(visibleTagTypesArr),
    [visibleTagTypesArr]
  )

  // ── Stabilize renderNode: store in ref so rfNodes deps don't include the fn ──
  const renderNodeRef = useRef(renderNode)
  renderNodeRef.current = renderNode
  const stableRenderNode = useMemo(
    () =>
      (node: GraphNode<unknown>, ctx: F0GraphNodeRenderContext): ReactNode =>
        renderNodeRef.current(node as GraphNode<T>, ctx),
    []
  )

  const edgeTypes = renderEdge ? customEdgeTypes : defaultEdgeTypes

  // ── Lazy tree mode ──
  const isLazyMode = rootNodes !== undefined && loadChildren !== undefined
  const emptyNodes = useRef<GraphNode<T>[]>([]).current
  const emptyLoader = useRef<(id: string) => Promise<GraphNode<T>[]>>(
    async () => []
  ).current
  const lazyTree = useLazyTree<T>({
    rootNodes: isLazyMode ? rootNodes! : emptyNodes,
    loadChildren: isLazyMode ? loadChildren! : emptyLoader,
  })

  // ── Resolve flat node list (merge deferred batch in full-tree mode) ──
  const deferredMerge = useDeferredMerge<T>({
    initialNodes: nodesProp ?? [],
    initialEdges: edgesProp ?? [],
    deferredNodes: isLazyMode ? undefined : deferredNodes,
  })

  const prevDeferredStatus = useRef(deferredMerge.deferredStatus)
  useEffect(() => {
    const prev = prevDeferredStatus.current
    const curr = deferredMerge.deferredStatus
    prevDeferredStatus.current = curr

    if (prev !== "resolved" && curr === "resolved") {
      onDeferredLoadComplete?.()
    }
    if (prev !== "error" && curr === "error" && deferredMerge.error) {
      onDeferredLoadError?.(deferredMerge.error)
    }
  }, [
    deferredMerge.deferredStatus,
    deferredMerge.error,
    onDeferredLoadComplete,
    onDeferredLoadError,
  ])

  const resolvedNodes: GraphNode<T>[] = isLazyMode
    ? lazyTree.nodes
    : deferredNodes
      ? deferredMerge.mergedNodes
      : (nodesProp ?? [])

  const resolvedEdgesProp = isLazyMode
    ? edgesProp
    : deferredNodes
      ? deferredMerge.mergedEdges
      : edgesProp

  // ── Build tree ──
  const { roots, nodeMap } = useTreeBuilder(resolvedNodes)

  // ── Refs for the canvas / pointer tracking ──
  const canvasRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // Distinguishes a click on a node from a pan drag ending over one.
  const pointerDownRef = useRef<{ x: number; y: number; id: number } | null>(
    null
  )

  // ── Expand / collapse state ──
  const {
    expandedNodes,
    expandedNodesRef,
    anchorNodeRef,
    toggleExpand,
    expandAll,
    collapseAll,
  } = useExpandState<T>({
    roots,
    nodeMap,
    isLazyMode,
    lazyTree,
    controlledExpanded,
    defaultExpandedNodes,
    defaultExpandDepth,
    onExpandToggle,
    onExpandedNodesChange,
  })

  // Full-layout accessors for windowing-aware navigation. Populated from the
  // render model below; read through refs so `useGraphViewport` (called first,
  // to break the zoomLevel⇄bounds cycle) always sees the latest values.
  const contentBoundsRef = useRef<{
    x: number
    y: number
    width: number
    height: number
  } | null>(null)
  const getNodePositionRef = useRef<(id: string) => PositionedNode | undefined>(
    () => undefined
  )
  const getContentBounds = useMemo(() => () => contentBoundsRef.current, [])
  const getNodePositionStable = useMemo(
    () => (id: string) => getNodePositionRef.current(id),
    []
  )

  // ── Viewport zoom + control handlers ──
  const {
    currentZoom,
    zoomLevel,
    viewportReady,
    handleViewportChange,
    handleZoomIn,
    handleZoomOut,
    handleFitView,
    handleFocusUser,
    centerOnNode,
  } = useGraphViewport({
    defaultZoom,
    zoomPreset,
    zoomThresholds,
    currentUserNodeId,
    onZoomLevelChange,
    onViewportChange,
    nodeWindowingActive: enableNodeWindowing ?? false,
    getContentBounds,
    getNodePosition: getNodePositionStable,
  })

  // ── Selection + roving-tabindex focus ──
  const {
    selectedNodes,
    focusedNodeId,
    setFocusedNodeId,
    focusedNodeIdRef,
    registerNodeRef,
    nodeRefsMapRef,
    flatVisibleOrderRef,
    selectNode,
    clearSelection,
  } = useSelectionFocus<T>({
    roots,
    expandedNodes,
    selectionMode,
    controlledSelected,
    onNodeSelect,
    onSelectedNodesChange,
    canvasRef,
  })

  const highlightedNodes = highlightedProp ?? EMPTY_HIGHLIGHTED_NODES

  // ── React Flow render model (layout + anchor + rf nodes/edges) ──
  const {
    visibleTreeNodes,
    rfNodes,
    rfEdges,
    reservedTagHeight,
    tagsAffectLayout,
    renderedNodeCount,
    renderedNodeIds,
    contentBounds,
    getNodePosition,
  } = useGraphRenderModel<T>({
    roots,
    nodeMap,
    expandedNodes,
    anchorNodeRef,
    resolvedEdgesProp,
    stableRenderNode,
    nodeTagTypes,
    visibleTagTypesSet,
    reserveTagRow,
    nodeWidthProp,
    nodeHeightProp,
    layoutEngineProp,
    zoomLevel,
    direction,
    controlLabels,
    hoveredEdgeId,
    // Gate windowing on the first settled viewport so the mount-time `fitView`
    // frames the whole graph before the camera decides which nodes to keep.
    enableNodeWindowing: (enableNodeWindowing ?? false) && viewportReady,
    nodeWindowPadding,
  })

  // Expose the full layout to the windowing-aware navigation handlers above.
  contentBoundsRef.current = contentBounds
  getNodePositionRef.current = getNodePosition

  // Empty-canvas click: clear our own selection/focus and let the consumer
  // clear any controlled highlight/focus (e.g. a search/"find me" reveal).
  const handlePaneClick = useMemo(
    () => () => {
      clearSelection()
      onPaneClickProp?.()
    },
    [clearSelection, onPaneClickProp]
  )

  // ── Keyboard navigation ──
  const { handleTreeKeyDown, handleCanvasKeyDown } = useGraphKeyboard<T>({
    nodeMap,
    clearSelection,
    toggleExpand,
    selectNode,
    focusedNodeIdRef,
    setFocusedNodeId,
    flatVisibleOrderRef,
    expandedNodesRef,
    nodeRefsMapRef,
  })

  // Notify parent of visible node count changes
  useEffect(() => {
    onVisibleNodesChange?.(visibleTreeNodes.length)
  }, [visibleTreeNodes.length, onVisibleNodesChange])

  // Notify parent of the count actually handed to React Flow (post-windowing)
  useEffect(() => {
    onRenderedNodesChange?.(renderedNodeCount)
  }, [renderedNodeCount, onRenderedNodesChange])

  // Viewport-driven data loading: request rich data for on-screen nodes.
  // With windowing, hold off until the viewport has settled — before then
  // `renderedNodeIds` is the full (un-windowed) set, and flushing it would
  // request the whole tree on mount instead of just what's on screen.
  useViewportDataLoader({
    nodeIds: renderedNodeIds,
    loadVisibleNodeData,
    debounceMs: visibleDataDebounceMs,
    enabled: !enableNodeWindowing || viewportReady,
  })

  // ── Fly to the consumer-controlled focused node ──
  // Latest fly-to logic, read via a ref so the effect below depends ONLY on
  // `focusedNode`. Otherwise the effect would re-run on every layout-affecting
  // change (collapse/expand recomputes `centerOnNode`'s identity) and re-center
  // on the same node even though the focus never changed.
  const flyToFocusedRef = useRef<(id: string) => void>(() => {})
  flyToFocusedRef.current = (id: string) => {
    // Windowing: the target may be off-screen and absent from React Flow's
    // store, so center on its layout position instead of an id-based fitView
    // (which silently no-ops for a missing node).
    if (enableNodeWindowing && centerOnNode(id, 300)) return
    reactFlow.fitView({
      nodes: [{ id }],
      duration: 300,
      padding: FIT_VIEW_PADDING_LOOSE,
    })
  }
  useEffect(() => {
    if (!focusedNode) return
    // Fires only when `focusedNode` transitions to a new value (entry,
    // search-select, "Find me") — never on layout re-renders while it's
    // unchanged. Slight delay so the layout settles before flying.
    const target = focusedNode
    const timer = setTimeout(
      () => flyToFocusedRef.current(target),
      FOCUS_SETTLE_DELAY_MS
    )
    return () => clearTimeout(timer)
  }, [focusedNode])

  // ── Split context values (wrappers subscribe to only what they need) ──
  const zoomContextValue = useMemo(
    () => ({ zoomLevel, currentZoom, direction }),
    [zoomLevel, currentZoom, direction]
  )

  const expandContextValue = useMemo(() => ({ expandedNodes }), [expandedNodes])

  const selectionContextValue = useMemo(
    () => ({ selectedNodes, highlightedNodes }),
    [selectedNodes, highlightedNodes]
  )

  const actionsContextValue = useMemo(
    () => ({ toggleExpand, selectNode, expandAll, collapseAll }),
    [toggleExpand, selectNode, expandAll, collapseAll]
  )

  const isDeferredLoading =
    !isLazyMode &&
    deferredNodes !== undefined &&
    deferredMerge.deferredStatus === "loading"

  const renderConfigContextValue = useMemo(
    () => ({
      renderEdge,
      // Only publish a Set when the consumer opted in via `nodeTagTypes`.
      visibleTagTypes: nodeTagTypes ? visibleTagTypesSet : undefined,
      deferredLoading: isDeferredLoading || undefined,
      dataLoadingEnabled: loadVisibleNodeData !== undefined || undefined,
      tagRowHeight: reservedTagHeight,
      largeGraph: visibleTreeNodes.length > LARGE_GRAPH_SNAP_THRESHOLD,
    }),
    [
      renderEdge,
      nodeTagTypes,
      visibleTagTypesSet,
      isDeferredLoading,
      loadVisibleNodeData,
      visibleTreeNodes.length,
      tagsAffectLayout,
      reservedTagHeight,
    ]
  )

  const focusContextValue = useMemo(
    () => ({ focusedNodeId, setFocusedNodeId, registerNodeRef }),
    [focusedNodeId, setFocusedNodeId, registerNodeRef]
  )

  return (
    <F0GraphActionsContext.Provider value={actionsContextValue}>
      <F0GraphRenderConfigContext.Provider value={renderConfigContextValue}>
        <F0GraphFocusContext.Provider value={focusContextValue}>
          <F0GraphZoomContext.Provider value={zoomContextValue}>
            <F0GraphExpandContext.Provider value={expandContextValue}>
              <F0GraphSelectionContext.Provider value={selectionContextValue}>
                <ClickSpark
                  sparkColor="var(--f0-graph-spark)"
                  sparkSize={10}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={400}
                >
                  <div
                    ref={canvasRef}
                    tabIndex={0}
                    aria-label={controlLabels?.graphCanvas ?? i18n.graph.canvas}
                    onKeyDown={handleCanvasKeyDown}
                    data-zoom-level={zoomLevel}
                    className="f0-graph relative h-full w-full outline-none"
                  >
                    <div
                      ref={containerRef}
                      role="tree"
                      aria-label={controlLabels?.graphView ?? i18n.graph.view}
                      onKeyDown={handleTreeKeyDown}
                      onPointerDown={(e) => {
                        pointerDownRef.current = {
                          x: e.clientX,
                          y: e.clientY,
                          id: e.pointerId,
                        }
                      }}
                      onPointerUp={(e) => {
                        // Select node on mouseup only if the pointer barely
                        // moved (i.e. it was a click, not a pan drag).
                        const start = pointerDownRef.current
                        pointerDownRef.current = null
                        if (!start || start.id !== e.pointerId) return
                        const dx = e.clientX - start.x
                        const dy = e.clientY - start.y
                        if (dx * dx + dy * dy > NODE_CLICK_DISTANCE_SQ) return
                        const target = e.target as HTMLElement | null
                        const nodeEl =
                          target?.closest<HTMLElement>(".react-flow__node")
                        if (!nodeEl) return
                        const id = nodeEl.getAttribute("data-id")
                        if (id) selectNode(id)
                      }}
                      className="h-full w-full"
                    >
                      <ReactFlow
                        nodes={rfNodes}
                        edges={rfEdges}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        onlyRenderVisibleElements
                        minZoom={minZoom}
                        maxZoom={maxZoom}
                        defaultViewport={{ x: 0, y: 0, zoom: defaultZoom }}
                        onViewportChange={handleViewportChange}
                        onPaneClick={handlePaneClick}
                        onEdgeMouseEnter={(_, edge) => {
                          const ge = (edge.data as GraphEdgeData | undefined)
                            ?.graphEdge
                          if (!ge?.onEdgeClick && !ge?.onEdgeHover) return
                          setHoveredEdgeId(edge.id)
                          ge.onEdgeHover?.(ge)
                        }}
                        onEdgeMouseLeave={(_, edge) => {
                          const ge = (edge.data as GraphEdgeData | undefined)
                            ?.graphEdge
                          if (!ge?.onEdgeClick && !ge?.onEdgeHover) return
                          setHoveredEdgeId((current) =>
                            current === edge.id ? null : current
                          )
                          ge.onEdgeHover?.(null)
                        }}
                        onEdgeClick={(_, edge) => {
                          const ge = (edge.data as GraphEdgeData | undefined)
                            ?.graphEdge
                          ge?.onEdgeClick?.(ge)
                        }}
                        proOptions={{ hideAttribution: true }}
                        fitView
                        nodesDraggable={false}
                        nodesConnectable={false}
                        elementsSelectable={false}
                        nodeClickDistance={4}
                        panOnDrag
                        zoomOnScroll
                        zoomOnPinch
                      >
                        <Background
                          id="f0-graph-bg"
                          variant={BackgroundVariant.Dots}
                          gap={BACKGROUND_DOT_GAP}
                          size={4}
                          color="var(--f0-graph-bg-dot)"
                        />
                      </ReactFlow>
                    </div>

                    {canvasActions && (
                      <div
                        className="absolute left-6 top-3 z-10 flex flex-col gap-2 rounded-md backdrop-blur-[140px]"
                        data-no-spark
                      >
                        {canvasActions}
                      </div>
                    )}

                    {showControls && (
                      <div
                        className="absolute bottom-6 left-6 z-10"
                        data-no-spark
                      >
                        <F0GraphControls
                          onZoomIn={handleZoomIn}
                          onZoomOut={handleZoomOut}
                          onFitView={handleFitView}
                          onFocusUser={
                            !currentUserNodeId
                              ? undefined
                              : // A consumer handler can reveal a collapsed /
                                // not-yet-loaded node, so keep the button enabled
                                // even when it isn't on screen. Without one, fall
                                // back to fitView, which needs a visible node.
                                (onFocusUserProp ??
                                (nodeMap.has(currentUserNodeId)
                                  ? handleFocusUser
                                  : undefined))
                          }
                          labels={controlLabels}
                        />
                      </div>
                    )}
                  </div>
                </ClickSpark>
              </F0GraphSelectionContext.Provider>
            </F0GraphExpandContext.Provider>
          </F0GraphZoomContext.Provider>
        </F0GraphFocusContext.Provider>
      </F0GraphRenderConfigContext.Provider>
    </F0GraphActionsContext.Provider>
  )
}
