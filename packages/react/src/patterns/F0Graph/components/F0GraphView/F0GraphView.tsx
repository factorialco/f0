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
  type ForwardedRef,
  type ReactNode,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n"

import type {
  F0GraphHandle,
  F0GraphNodeRenderContext,
  F0GraphProps,
} from "../../F0Graph"
import type {
  GraphEdge,
  GraphNode,
  LayoutDirection,
  PositionedNode,
  ZoomLevel,
} from "../../types"
import type { F0GraphNodeTagColumn } from "../F0GraphNode"

import {
  BACKGROUND_DOT_GAP,
  EMPTY_HIGHLIGHTED_NODES,
  EMPTY_TAG_COLUMNS,
  FIT_VIEW_PADDING_LOOSE,
  FIT_VIEW_PADDING_TIGHT,
  FOCUS_SETTLE_DELAY_MS,
  INITIAL_FOCUS_MAX_ZOOM,
  LARGE_GRAPH_SNAP_THRESHOLD,
  NODE_CLICK_DISTANCE_SQ,
  NODE_CLICK_ZOOM,
} from "../../constants"
import {
  F0GraphActionsContext,
  F0GraphExpandContext,
  F0GraphFocusContext,
  F0GraphRenderConfigContext,
  F0GraphSelectionContext,
  F0GraphStackHoverContext,
  F0GraphZoomContext,
  useF0GraphRenderConfigInternal,
} from "../../contexts"
import { useAccessibleTreeOwns } from "../../hooks/useAccessibleTreeOwns"
import { useDeferredMerge } from "../../hooks/useDeferredMerge"
import { useExpandState } from "../../hooks/useExpandState"
import { useGraphKeyboard } from "../../hooks/useGraphKeyboard"
import { useGraphRenderModel } from "../../hooks/useGraphRenderModel"
import { useGraphViewport } from "../../hooks/useGraphViewport"
import { useLazyTree } from "../../hooks/useLazyTree"
import { useSelectionFocus } from "../../hooks/useSelectionFocus"
import { useTreeBuilder } from "../../hooks/useTreeBuilder"
import { useViewportDataLoader } from "../../hooks/useViewportDataLoader"
import {
  F0GraphCollapserWrapper,
  F0GraphExpanderWrapper,
  F0GraphNodeWrapper,
  F0GraphStackGroupWrapper,
} from "../../internal/ReactFlowAdapters"
import {
  findStackHoverZoneAt,
  resolveInitialFitViewNodes,
  type StackHoverZone,
} from "../../utils"
import { F0GraphControls } from "../F0GraphControls"
import { type EdgeVariant, type F0GraphEdgeProps } from "../F0GraphEdge"
import { F0GraphEdgeBase } from "../F0GraphEdge/F0GraphEdge"

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
  stackGroup: F0GraphStackGroupWrapper as unknown as NodeTypes[string],
}

const defaultEdgeTypes: EdgeTypes = {
  graphEdge: F0GraphEdgeBase as unknown as EdgeTypes[string],
}

const customEdgeTypes: EdgeTypes = {
  graphEdge: F0GraphEdgeWrapper as unknown as EdgeTypes[string],
}

// ─── View (consumes ReactFlow hooks via the provider in the shell) ─────────
export function F0GraphView<T = unknown>(
  props: F0GraphProps<T> & { handleRef?: ForwardedRef<F0GraphHandle> }
) {
  const {
    handleRef,
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
    initialFocusNodeId,
    centerOnNodeClick = true,
    nodeClickZoom,
    viewportInset,
    highlightedNodes: highlightedProp,
    nodeWidth: nodeWidthProp,
    nodeHeight: nodeHeightProp,
    stackedNodeHeight: stackedNodeHeightProp,
    stackedNodeGap: stackedNodeGapProp,
    canvasActions,
    canvasFooterActions,
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

  // Which stacked column the pointer is inside, so that column's parent can
  // reveal its collapse affordance from anywhere within it. The ref mirrors the
  // state so the pointer handler can drop the ~60 moves a second that stay inside
  // one region without doing any React work at all.
  const [hoveredStackParentId, setHoveredStackParentId] = useState<
    string | null
  >(null)
  const hoveredStackRef = useRef<string | null>(null)
  // Last known pointer position, so a camera move can re-run the same test from
  // where the pointer already is. Cleared when the pointer leaves the canvas.
  const lastPointerRef = useRef<{
    x: number
    y: number
    pointerType?: string
  } | null>(null)

  // Direction is hardcoded to TB; the layout engine still supports other values.
  const direction = "TB" as LayoutDirection

  // ── Per-type tag visibility (controlled by the consumer) ──
  const visibleTagTypesArr =
    controlledVisibleTagTypes ??
    defaultVisibleTagTypes ??
    nodeTagTypes ??
    EMPTY_TAG_COLUMNS
  const visibleTagTypesSet = useMemo(
    () => new Set<F0GraphNodeTagColumn>(visibleTagTypesArr),
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
  const treeRef = useRef<HTMLDivElement>(null)
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
  const stackHoverZonesRef = useRef<StackHoverZone[]>([])
  const zoomLevelRef = useRef<ZoomLevel>("detail")
  const getContentBounds = useMemo(() => () => contentBoundsRef.current, [])
  const getNodePositionStable = useMemo(
    () => (id: string) => getNodePositionRef.current(id),
    []
  )

  // ── Viewport zoom + control handlers ──
  const {
    zoomLevel,
    viewportReady,
    handleViewportChange,
    handleZoomIn,
    handleZoomOut,
    handleFitView,
    handleFocusUser,
    centerOnNode,
    getFitPadding,
    hasViewportInset,
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
    viewportInset,
  })

  // Windowing only actually drives the render once the first viewport has settled
  // (before then the mount-time fit needs every node — see the gate on the render
  // model below). Computed once and reused for BOTH the render model AND React
  // Flow's own `onlyRenderVisibleElements`: when F0 is windowing it already hands
  // React Flow just the nodes near the viewport (grown by `nodeWindowPadding`), so
  // React Flow must render ALL of them. Letting React Flow run its own viewport
  // culling on top re-drops that padding band — nodes pop in at the viewport edge,
  // and edges whose (windowed-in) endpoint sits just outside the exact viewport are
  // dropped entirely, so connecting lines vanish while panning a large/deep tree.
  const nodeWindowingActive = (enableNodeWindowing ?? false) && viewportReady

  // ── Selection + roving-tabindex focus ──
  const {
    selectedNodes,
    focusedNodeId,
    setFocusedNodeId,
    focusedNodeIdRef,
    registerNodeRef,
    requestNodeFocus,
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

  // Keep the toggled node visually fixed on collapse/expand: when the layout
  // repositions the anchor, pan the camera by the same delta (in screen px)
  // rather than offsetting node positions — no snap-back, and reveal/fit keep
  // reading raw positions. Runs before paint (React Flow's `setViewport` is
  // synchronous), so there is no flicker.
  const handleAnchorReflow = useCallback(
    (dx: number, dy: number) => {
      const vp = reactFlow.getViewport()
      reactFlow.setViewport({
        x: vp.x + dx * vp.zoom,
        y: vp.y + dy * vp.zoom,
        zoom: vp.zoom,
      })
    },
    [reactFlow]
  )

  // ── React Flow render model (layout + anchor + rf nodes/edges) ──
  const {
    visibleTreeNodes,
    rfNodes,
    rfEdges,
    reservedTagHeight,
    renderedNodeCount,
    renderedNodeIds,
    contentBounds,
    getNodePosition,
    stackHoverZones,
  } = useGraphRenderModel<T>({
    roots,
    nodeMap,
    expandedNodes,
    anchorNodeRef,
    onAnchorReflow: handleAnchorReflow,
    resolvedEdgesProp,
    stableRenderNode,
    nodeTagTypes,
    visibleTagTypesSet,
    reserveTagRow,
    nodeWidthProp,
    nodeHeightProp,
    stackedNodeHeightProp,
    stackedNodeGapProp,
    layoutEngineProp,
    zoomLevel,
    direction,
    controlLabels,
    hoveredEdgeId,
    // Gate windowing on the first settled viewport so the mount-time `fitView`
    // frames the whole graph before the camera decides which nodes to keep.
    enableNodeWindowing: nodeWindowingActive,
    nodeWindowPadding,
  })

  // Expose the full layout to the windowing-aware navigation handlers above.
  contentBoundsRef.current = contentBounds
  getNodePositionRef.current = getNodePosition
  stackHoverZonesRef.current = stackHoverZones
  zoomLevelRef.current = zoomLevel

  // Which stacked column the pointer is inside. Resolved from geometry rather
  // than from a hover on the column itself: React Flow renders nodes flat, so no
  // CSS relationship exists between a column's rows, its group node and the
  // collapse affordance, and making the group hit-testable would let a click in
  // the gap between two rows select the group (see [[findStackHoverZoneAt]]).
  //
  // One listener on the canvas covers everything — the group's own div is
  // `pointer-events-none`, so a move over a gap targets the pane and still
  // bubbles here, as do moves over the card, the rows and the affordance itself.
  const resolveStackHover = useCallback(
    (clientX: number, clientY: number, pointerType?: string) => {
      // Hover affordances are for mouse and pen; a touch pan would otherwise
      // reveal collapsers under the finger.
      if (pointerType === "touch") return
      // Before touching React Flow: a graph with no stacked column pays one
      // comparison, and `screenToFlowPosition` is absent from the hand-written
      // `useReactFlow` mocks in some tests.
      const zones = stackHoverZonesRef.current
      if (zones.length === 0) return
      // The affordance does not render at dot zoom, so nothing can be revealed.
      if (zoomLevelRef.current === "dot") return
      const point = reactFlow.screenToFlowPosition({ x: clientX, y: clientY })
      const next = findStackHoverZoneAt(zones, point.x, point.y)
      if (hoveredStackRef.current === next) return
      hoveredStackRef.current = next
      setHoveredStackParentId(next)
    },
    [reactFlow]
  )

  const handleCanvasPointerMove = useCallback(
    (e: React.PointerEvent) => {
      lastPointerRef.current = {
        x: e.clientX,
        y: e.clientY,
        pointerType: e.pointerType,
      }
      resolveStackHover(e.clientX, e.clientY, e.pointerType)
    },
    [resolveStackHover]
  )

  // A camera move slides the graph under a stationary pointer, so the same
  // screen position now maps to a different flow point and the revealed column
  // is stale. Re-resolving here covers every path that moves the camera —
  // wheel, the zoom buttons, keyboard zoom and panning, fit-view and fly-to —
  // rather than only the one (wheel) that is an event on this element. React
  // Flow calls this on every camera frame, so the resolve is deliberately cheap:
  // it bails before any measurement when there are no stacked columns, and the
  // ref gate means a frame that does not change the answer does no React work.
  const handleViewportChangeWithHover = useCallback(
    (viewport: Parameters<typeof handleViewportChange>[0]) => {
      handleViewportChange(viewport)
      const last = lastPointerRef.current
      if (last) resolveStackHover(last.x, last.y, last.pointerType)
    },
    [handleViewportChange, resolveStackHover]
  )

  // Fires only when the pointer genuinely leaves the canvas: `pointerleave` does
  // not fire when moving between children.
  const handleCanvasPointerLeave = useCallback(() => {
    lastPointerRef.current = null
    if (hoveredStackRef.current === null) return
    hoveredStackRef.current = null
    setHoveredStackParentId(null)
  }, [])

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
    requestNodeFocus,
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
    // Frame the node together with its (present) direct children and cap the
    // zoom, so navigation lands with surrounding context instead of zooming a
    // single node to `maxZoom` (2×) — same framing as the `initialFocusNodeId`
    // first frame.
    const childIds = nodeMap.get(id)?.children.map((c) => c.id) ?? []
    const framed = resolveInitialFitViewNodes(
      id,
      childIds,
      new Set(renderedNodeIds)
    )
    reactFlow.fitView({
      nodes: framed ?? [{ id }],
      duration: 300,
      padding: getFitPadding(FIT_VIEW_PADDING_LOOSE),
      maxZoom: Math.min(INITIAL_FOCUS_MAX_ZOOM, maxZoom),
    })
  }

  // ── Fly to a clicked node ──
  // Unlike `flyToFocusedRef` (which frames the node with its children at a capped
  // zoom for context), a click is a deliberate "take me here", so it centers on
  // the node alone and lands closer (`nodeClickZoom` / `NODE_CLICK_ZOOM`, clamped
  // to `maxZoom`) regardless of the current zoom. Read via a ref so `handleNodeClick`
  // stays stable and always sees the latest props. `centerOnNode` uses the node's
  // layout position, so it works even for a node windowed out of the store and
  // applies the `viewportInset` offset; the id-based fit is an unreachable
  // fallback (a just-clicked node always has a position).
  const flyToNodeClickRef = useRef<(id: string) => void>(() => {})
  flyToNodeClickRef.current = (id: string) => {
    const zoom = Math.min(nodeClickZoom ?? NODE_CLICK_ZOOM, maxZoom)
    if (centerOnNode(id, 300, zoom)) return
    reactFlow.fitView({
      nodes: [{ id }],
      duration: 300,
      padding: getFitPadding(FIT_VIEW_PADDING_TIGHT),
      maxZoom: zoom,
    })
  }

  // Click handler shared by both selection paths: select the node, then (unless
  // opted out) fly to it. Kept out of `selectNode` itself so keyboard navigation
  // — which also calls `selectNode` — never moves the camera.
  //
  // The fly is deferred by the same settle delay the `focusedNode` path uses,
  // because the consumer's side panel usually opens *as a result of* this click:
  // its `viewportInset` only reaches us on a later render, so flying synchronously
  // would read an empty inset and center on the full canvas — the very case the
  // inset exists for — and the panel would then open over the node.
  const nodeClickFlyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )
  useEffect(
    () => () => {
      if (nodeClickFlyTimerRef.current) {
        clearTimeout(nodeClickFlyTimerRef.current)
      }
    },
    []
  )

  const handleNodeClick = useCallback(
    (id: string) => {
      selectNode(id)
      // Fly only for real data nodes. The canvas pointer-up also fires for the
      // expander/collapser pseudo-nodes (their `.react-flow__node` wrappers carry
      // `expander-`/`collapser-` ids, absent from `nodeMap`); flying to one would
      // chase the toggle's position as it shifts on expand/collapse. Gating on
      // `nodeMap` leaves the toggle itself untouched.
      if (!centerOnNodeClick || !nodeMap.has(id)) return
      // A second click supersedes a still-pending fly rather than queueing both.
      if (nodeClickFlyTimerRef.current) {
        clearTimeout(nodeClickFlyTimerRef.current)
      }
      nodeClickFlyTimerRef.current = setTimeout(
        () => flyToNodeClickRef.current(id),
        FOCUS_SETTLE_DELAY_MS
      )
    },
    [selectNode, centerOnNodeClick, nodeMap]
  )

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

  // ── Initial frame (entry) ──
  // When `initialFocusNodeId` is set, arrive framed on that node in the same
  // state a node click leaves: fly to it via the click path (`flyToNodeClickRef`,
  // centered at the node-click zoom, `viewportInset`-aware). The fly is DEFERRED
  // by the same settle delay the click/focused paths use — an immediate fly runs
  // before React Flow has measured its container and never takes (which is why a
  // mount-time frame missed while re-clicking the node worked). With no focus
  // target it is a plain whole-graph fit (unchanged), applied immediately.
  //
  // The deferred fly is scheduled ONCE (ref-guarded) and is NOT torn down on
  // re-render: the first renders after mount churn `renderedNodeIds` (two-phase
  // hydration, an entry side panel opening), and an effect cleanup keyed on that
  // would clear the pending timer while the ref-guard blocks re-scheduling — so
  // the fly would silently never run. The timer is cleared only on unmount.
  const initialFrameTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )
  const didInitialFrameRef = useRef(false)
  useEffect(() => {
    if (didInitialFrameRef.current || renderedNodeIds.length === 0) return
    didInitialFrameRef.current = true
    if (!initialFocusNodeId) {
      reactFlow.fitView(
        hasViewportInset
          ? { padding: getFitPadding(FIT_VIEW_PADDING_TIGHT) }
          : undefined
      )
      return
    }
    const target = initialFocusNodeId
    initialFrameTimerRef.current = setTimeout(
      () => flyToNodeClickRef.current(target),
      FOCUS_SETTLE_DELAY_MS
    )
    // One-shot (ref-guarded); `hasViewportInset` / `getFitPadding` are read fresh
    // and the timer is torn down on unmount (below), so deps stay minimal.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedNodeIds.length, initialFocusNodeId, reactFlow])
  useEffect(
    () => () => {
      if (initialFrameTimerRef.current)
        clearTimeout(initialFrameTimerRef.current)
    },
    []
  )

  // Imperative API: `focusNode` fires on every call, independent of prop
  // values, so a consumer's search can re-center on the same node the user
  // picks twice (the `focusedNode` prop can't — an unchanged value never
  // re-runs its effect). `clearSelection` lets the consumer drop the click ring
  // when it marks a node another way (e.g. a search / "Find me" highlight).
  const clearSelectionRef = useRef<() => void>(() => {})
  clearSelectionRef.current = clearSelection
  useImperativeHandle(
    handleRef,
    () => ({
      focusNode: (nodeId: string) => flyToFocusedRef.current(nodeId),
      clearSelection: () => clearSelectionRef.current(),
    }),
    []
  )

  // ── Split context values (wrappers subscribe to only what they need) ──
  // `currentZoom` is intentionally NOT published: it changes on every zoom frame
  // and would invalidate this context — and with it every node wrapper — 60×/s.
  const zoomContextValue = useMemo(
    () => ({ zoomLevel, direction }),
    [zoomLevel, direction]
  )

  const expandContextValue = useMemo(() => ({ expandedNodes }), [expandedNodes])

  const selectionContextValue = useMemo(
    () => ({ selectedNodes, highlightedNodes }),
    [selectedNodes, highlightedNodes]
  )

  // Read by the collapse affordance only — see the note on the context itself.
  const stackHoverContextValue = useMemo(
    () => ({ hoveredStackParentId }),
    [hoveredStackParentId]
  )

  const actionsContextValue = useMemo(
    () => ({ toggleExpand, selectNode, expandAll, collapseAll }),
    [toggleExpand, selectNode, expandAll, collapseAll]
  )

  const isDeferredLoading =
    !isLazyMode &&
    deferredNodes !== undefined &&
    deferredMerge.deferredStatus === "loading"

  // Depend on the derived flag, not the raw count: every node wrapper consumes
  // this context, so keying it on `visibleTreeNodes.length` re-rendered all of
  // them on every expansion (measured during a search-and-reveal navigation)
  // even though only the threshold crossing changes what anything renders.
  const isLargeGraph = visibleTreeNodes.length > LARGE_GRAPH_SNAP_THRESHOLD

  const renderConfigContextValue = useMemo(
    () => ({
      renderEdge,
      // Only publish a Set when the consumer opted in via `nodeTagTypes`.
      visibleTagTypes: nodeTagTypes ? visibleTagTypesSet : undefined,
      deferredLoading: isDeferredLoading || undefined,
      dataLoadingEnabled: loadVisibleNodeData !== undefined || undefined,
      tagRowHeight: reservedTagHeight,
      stackedNodeHeight: stackedNodeHeightProp,
      largeGraph: isLargeGraph,
    }),
    [
      renderEdge,
      nodeTagTypes,
      visibleTagTypesSet,
      isDeferredLoading,
      loadVisibleNodeData,
      isLargeGraph,
      reservedTagHeight,
      stackedNodeHeightProp,
    ]
  )

  const focusContextValue = useMemo(
    () => ({ focusedNodeId, setFocusedNodeId, registerNodeRef }),
    [focusedNodeId, setFocusedNodeId, registerNodeRef]
  )

  // The `role="tree"` element is a sibling of the canvas, not an ancestor, and
  // claims the treeitems by reference. `aria-owns` and `aria-busy` are written
  // imperatively from the DOM because React Flow culls painted nodes on its own
  // schedule; see `useAccessibleTreeOwns` for the measured reason why neither
  // the placement nor the DOM read is optional.
  useAccessibleTreeOwns(treeRef, containerRef)

  return (
    <F0GraphActionsContext.Provider value={actionsContextValue}>
      <F0GraphRenderConfigContext.Provider value={renderConfigContextValue}>
        <F0GraphFocusContext.Provider value={focusContextValue}>
          <F0GraphZoomContext.Provider value={zoomContextValue}>
            <F0GraphExpandContext.Provider value={expandContextValue}>
              <F0GraphSelectionContext.Provider value={selectionContextValue}>
                <F0GraphStackHoverContext.Provider
                  value={stackHoverContextValue}
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
                      ref={treeRef}
                      role="tree"
                      aria-label={controlLabels?.graphView ?? i18n.graph.view}
                      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
                    />
                    <div
                      ref={containerRef}
                      onKeyDown={handleTreeKeyDown}
                      onPointerMove={handleCanvasPointerMove}
                      onPointerLeave={handleCanvasPointerLeave}
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
                        // Opt-out affordances inside a node (e.g. the tag row)
                        // are marked `data-no-node-select`: a pointerup on one
                        // must not select the node. Checked before the node
                        // lookup because this fires regardless of any inner
                        // `onClick` stopPropagation.
                        if (target?.closest("[data-no-node-select]")) return
                        const nodeEl =
                          target?.closest<HTMLElement>(".react-flow__node")
                        if (!nodeEl) return
                        const id = nodeEl.getAttribute("data-id")
                        // select + fly-to (the fly is opt-out via
                        // `centerOnNodeClick`). This is the click-only path;
                        // keyboard selection goes through `selectNode` directly.
                        if (id) handleNodeClick(id)
                      }}
                      className="h-full w-full"
                    >
                      <ReactFlow
                        nodes={rfNodes}
                        edges={rfEdges}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        // With F0 node windowing active, F0 already limits the
                        // node array to the padded viewport, so React Flow must
                        // render everything it is handed — a second, tighter
                        // viewport cull here would drop the padding band and the
                        // edges crossing the viewport edge (vanishing nodes/lines
                        // on pan). Keep React Flow's own culling only when F0 is
                        // NOT windowing (the original large-graph safeguard).
                        onlyRenderVisibleElements={!nodeWindowingActive}
                        minZoom={minZoom}
                        maxZoom={maxZoom}
                        defaultViewport={{ x: 0, y: 0, zoom: defaultZoom }}
                        onViewportChange={handleViewportChangeWithHover}
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
                        // No `fitView` prop: the initial frame is applied once,
                        // imperatively (see `didInitialFitRef` above), so a later
                        // layout change can never re-fire React Flow's queued fit.
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
                      <div className="absolute left-6 top-3 z-10 flex flex-col gap-2 rounded-md backdrop-blur-[140px]">
                        {canvasActions}
                      </div>
                    )}

                    {canvasFooterActions && (
                      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2">
                        {canvasFooterActions}
                      </div>
                    )}

                    {showControls && (
                      <div className="absolute bottom-6 left-6 z-10">
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
                </F0GraphStackHoverContext.Provider>
              </F0GraphSelectionContext.Provider>
            </F0GraphExpandContext.Provider>
          </F0GraphZoomContext.Provider>
        </F0GraphFocusContext.Provider>
      </F0GraphRenderConfigContext.Provider>
    </F0GraphActionsContext.Provider>
  )
}
