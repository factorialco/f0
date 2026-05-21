import {
  Background,
  BackgroundVariant,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Node as RFNode,
  type Edge as RFEdge,
  type EdgeProps as RFEdgeProps,
  type NodeTypes,
  type EdgeTypes,
  type Viewport,
} from "@xyflow/react"
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type {
  F0GraphNodeTagType,
  GraphNodeState,
  GraphNodeVariant,
} from "./F0GraphNode"
import type {
  DeferredNodesPayload,
  GraphEdge,
  GraphNode,
  LayoutDirection,
  LayoutEngine,
  TreeNode,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
} from "./types"

import {
  F0GraphZoomContext,
  F0GraphExpandContext,
  F0GraphSelectionContext,
  F0GraphActionsContext,
  F0GraphRenderConfigContext,
  F0GraphFocusContext,
  useF0GraphRenderConfigInternal,
} from "./contexts"
import { F0GraphControls } from "./F0GraphControls"
import {
  F0GraphDetailPanel,
  type F0GraphDetailPanelProps,
} from "./F0GraphDetailPanel"
import { type EdgeVariant, type F0GraphEdgeProps } from "./F0GraphEdge"
import { F0GraphEdgeBase } from "./F0GraphEdge/F0GraphEdge"
import { F0GraphSearch, useGraphSearch, type Searchable } from "./F0GraphSearch"
import { useDeferredMerge } from "./hooks/useDeferredMerge"
import { useGraphZoomLevel } from "./hooks/useGraphZoomLevel"
import "./F0Graph.css"
import { useLayoutEngine } from "./hooks/useLayoutEngine"
import { useLazyTree } from "./hooks/useLazyTree"
import { useTreeBuilder } from "./hooks/useTreeBuilder"
import { ClickSpark } from "./internal/ClickSpark"
import { Search } from "./internal/Search"

// Singleton empty set used as a stable default for `highlightedNodes`.
// A fresh Set per render would invalidate the selection context and
// re-render every node wrapper.
const EMPTY_HIGHLIGHTED_NODES: Set<string> = new Set<string>()

// ─── Props ─────────────────────────────────────────────────────
export interface F0GraphProps<T = unknown> {
  // ---- Data (full tree mode) ----
  nodes?: GraphNode<T>[]
  edges?: GraphEdge[]

  // ---- Data (lazy tree mode) ----
  rootNodes?: GraphNode<T>[]
  /** Async callback to lazily load children when a node is expanded. Used with `rootNodes` for on-demand tree loading instead of providing the full `nodes` array upfront. */
  loadChildren?: (nodeId: string) => Promise<GraphNode<T>[]>

  // ---- Data (staged / progressive loading) ----
  /**
   * A second batch of nodes (and optional edges) loaded after the initial
   * paint. Pass a Promise that resolves with additional nodes, or a thunk
   * that returns one (invoked after first paint). Only applies to full-tree
   * mode — ignored when `rootNodes`/`loadChildren` are used.
   *
   * Deferred nodes are deduplicated by `id`; on conflict the deferred
   * version wins. Edges are appended (deduped by `id`).
   */
  deferredNodes?:
    | Promise<DeferredNodesPayload<T>>
    | (() => Promise<DeferredNodesPayload<T>>)
  /** Fired once when the deferred batch merges successfully. */
  onDeferredLoadComplete?: () => void
  /** Fired if the deferred promise rejects. */
  onDeferredLoadError?: (error: Error) => void

  // ---- Rendering ----
  /**
   * Required callback to render each node. Receives the node data and a context
   * object describing how F0Graph wants the node to behave (zoom variant,
   * selection state, expand callbacks, etc.).
   *
   * For the default pill-style node, spread `ctx` into `<F0GraphNode>`:
   * ```tsx
   * renderNode={(node, ctx) => (
   *   <F0GraphNode {...ctx} avatar={...} title={...} subtitle={...} />
   * )}
   * ```
   *
   * For fully custom nodes, return any ReactNode and use `ctx` to wire up
   * behavior (state, click, expand) however you like.
   */
  renderNode: (node: GraphNode<T>, ctx: F0GraphNodeRenderContext) => ReactNode
  /** Optional callback to render custom edges. Receives the edge and its variant (`"default" | "highlighted" | "dimmed"`). Falls back to default edge rendering when omitted. */
  renderEdge?: (edge: GraphEdge, variant: EdgeVariant) => ReactNode | null

  // ---- Zoom ----
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  /** Initial zoom level. `1` = 100%. Defaults to `1`. */
  defaultZoom?: number
  /**
   * Smallest zoom level the user can pan to (the "zoom-out" limit).
   * `1` = 100%, `0.05` = 5% (graph appears tiny / dot view).
   *
   * Defaults to `0.05`. Lower values allow extreme zoom-out where nodes
   * collapse into dots; consumers with very large graphs that need a true
   * birds-eye view can drop this to `0.01` or lower.
   */
  minZoom?: number
  /**
   * Largest zoom level the user can pan to (the "zoom-in" limit).
   * `1` = 100%, `2` = 200%. Defaults to `2`.
   */
  maxZoom?: number

  // ---- Expand/collapse ----
  expandedNodes?: Set<string>
  defaultExpandedNodes?: Set<string>
  defaultExpandDepth?: number
  onExpandToggle?: (nodeId: string, expanded: boolean) => void
  /** Fired with the complete new Set on every expand/collapse, in both controlled and uncontrolled mode. */
  onExpandedNodesChange?: (next: Set<string>) => void

  // ---- Selection ----
  selectionMode?: "single" | "multi" | "none"
  selectedNodes?: Set<string>
  onNodeSelect?: (nodeId: string, selected: boolean) => void
  /** Fired with the complete new Set on every selection change, in both controlled and uncontrolled mode. */
  onSelectedNodesChange?: (next: Set<string>) => void

  // ---- Navigation ----
  focusedNode?: string
  highlightedNodes?: Set<string>

  // ---- Layout ----
  fullScreen?: boolean
  /** Layout sizing hint passed to the built-in layout engine. Defaults to 256. Override for compact nodes (icons, file rows). */
  nodeWidth?: number
  /** Layout sizing hint passed to the built-in layout engine. Defaults to 56. Override for compact nodes (icons, file rows). */
  nodeHeight?: number
  /** Optional custom layout engine. When provided, overrides the built-in tree layout. */
  layoutEngine?: LayoutEngine

  // ---- Search ----
  /**
   * Raw controlled search input. Renders the bare expandable search pill
   * with no popover. Mutually exclusive with `searchable`.
   */
  searchValue?: string
  onSearchChange?: (value: string | undefined) => void
  searchLoading?: boolean
  /**
   * Declarative search-with-popover. F0Graph builds the index from the
   * source `nodes`/`rootNodes`, filters/sorts results, and on select:
   * (1) auto-expands collapsed ancestors, (2) selects the node,
   * (3) fly-to/fitView. Mutually exclusive with `searchValue`/`onSearchChange`.
   */
  searchable?: Searchable<T>
  /** Optional observability callback when a search result is picked. */
  onSearchResultSelect?: (id: string) => void

  // ---- Canvas actions ----
  /**
   * Optional action buttons rendered below the search input, aligned to the
   * left edge of the canvas. Consumers provide their own `<F0Button>` elements
   * (use `size="md"` to match the navigation controls).
   */
  canvasActions?: ReactNode

  // ---- Detail panel ----
  /**
   * When provided, clicking a node opens a right-side detail panel and
   * centers the node in the remaining canvas space (offset by the panel
   * width). Returns the full panel configuration for the given node —
   * either the `default` variant (with title/description/alert/menu) or the
   * `resource` variant (with custom header + primary/secondary action row).
   */
  detailPanel?: (
    node: GraphNode<T>
  ) => Omit<F0GraphDetailPanelProps, "open" | "onClose" | "width" | "ariaLabel">
  /** Optional aria-label for the panel landmark. */
  detailPanelAriaLabel?: string
  /** Initial width of the detail panel in pixels. Defaults to 384 (matches F0 spec). If the user has resized the panel, the persisted width takes precedence. */
  detailPanelWidth?: number
  /** Stable identifier used to scope persisted detail-panel width in localStorage. Defaults to `"default"`. */
  graphId?: string

  // ---- Controls ----
  showControls?: boolean
  /**
   * Optional id of the node that represents the current user. When provided,
   * a "Find me" button is rendered as the first control and clicking it
   * centers the viewport on that node. When omitted, the button is hidden.
   */
  currentUserNodeId?: string
  /** Override default English labels for interactive controls. */
  controlLabels?: {
    zoomIn?: string
    zoomOut?: string
    fitView?: string
    findMe?: string
    collapseChildren?: string
    metadataSettings?: string
    graphCanvas?: string
    graphView?: string
  }

  // ---- Tag metadata ----
  /**
   * Tag types present on the rendered nodes. When provided, a Sliders
   * popover toggle is added to the controls bar that lets the user toggle
   * each type's visibility individually. When omitted, no toggle is
   * shown and tags render unfiltered.
   *
   * Order is preserved in the popover.
   */
  nodeTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /**
   * Controlled set of currently visible tag types. When omitted, falls
   * back to `defaultVisibleTagTypes`.
   */
  visibleTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /**
   * Initial visible tag types for uncontrolled usage. Defaults to all of
   * `nodeTagTypes`.
   */
  defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /** Fired when the visible tag types change (in either mode). */
  onVisibleTagTypesChange?: (next: ReadonlyArray<F0GraphNodeTagType>) => void
  /** Optional friendly labels per tag type, used in the popover toggles. */
  nodeTagTypeLabels?: Partial<Record<F0GraphNodeTagType, string>>
  /**
   * Whether the layout should reserve vertical room for one tag row beneath
   * each node so the source handle (and outgoing edges) anchors below the
   * tags rather than between the pill and the tags.
   *
   * Defaults:
   * - When `nodeTagTypes` is provided: `true` only while at least one type is
   *   currently visible (auto-collapses when all types are toggled off).
   * - When `nodeTagTypes` is omitted: `false`. Set to `true` if you render
   *   `tags` via `renderNode` and want the layout to leave room for them.
   */
  reserveTagRow?: boolean

  // ---- Callbacks ----
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
  onVisibleNodesChange?: (count: number) => void
}

// Visual nudge to keep the collapser button optically aligned with the
// node it sits next to. Determined empirically.
const COLLAPSER_OFFSET_ADJUSTMENT = -6

// Delay used after a layout-affecting change before calling `fitView`,
// so React Flow can settle the new node positions in its store.
// Replace with deterministic coordination if the timing-fix track lands.
const FOCUS_SETTLE_DELAY_MS = 100

// fitView paddings used in different fly-to scenarios.
const FIT_VIEW_PADDING_TIGHT = 0.1
const FIT_VIEW_PADDING_LOOSE = 0.5

// Fallback dimensions when React Flow has not yet measured a node.
const DEFAULT_NODE_WIDTH_FALLBACK = 240
const DEFAULT_NODE_HEIGHT_FALLBACK = 80

// Squared pixel threshold matching React Flow's `nodeClickDistance` so a
// pan drag ending over a node does not register as a click.
const NODE_CLICK_DISTANCE_SQ = 4 * 4

// Above this rendered-node count we skip variant transitions on every node
// (chrome opacity, avatar transform, text reveal). Animating thousands of
// pills on a single zoomLevel change overwhelms the compositor; snapping
// trades polish for responsiveness on large graphs. Tuned by feel — the
// 200-node case still animates, the 4000-node case stays interactive.
const LARGE_GRAPH_SNAP_THRESHOLD = 700

// ─── Helper: compute initial expanded set from depth ───────────
function computeExpandedByDepth<T>(
  roots: TreeNode<T>[],
  depth: number
): Set<string> {
  const expanded = new Set<string>()

  function walk(node: TreeNode<T>, currentDepth: number): void {
    if (currentDepth < depth && node.children.length > 0) {
      expanded.add(node.id)
      for (const child of node.children) {
        walk(child, currentDepth + 1)
      }
    }
  }

  for (const root of roots) {
    walk(root, 0)
  }
  return expanded
}

// ─── Helper: collect all expandable node ids (eager mode) ──────
// A node is "expandable" when it has children to reveal. In eager mode the
// tree is fully known, so `children.length > 0` is sufficient.
function collectExpandableNodeIds<T>(roots: TreeNode<T>[]): Set<string> {
  const ids = new Set<string>()

  function walk(node: TreeNode<T>): void {
    if (node.children.length > 0) {
      ids.add(node.id)
      for (const child of node.children) {
        walk(child)
      }
    }
  }

  for (const root of roots) {
    walk(root)
  }
  return ids
}

// ─── Helper: derive edges from tree structure ──────────────────
function deriveEdgesFromTree<T>(roots: TreeNode<T>[]): GraphEdge[] {
  const edges: GraphEdge[] = []

  function walk(node: TreeNode<T>): void {
    for (const child of node.children) {
      edges.push({
        id: `${node.id}->${child.id}`,
        source: node.id,
        target: child.id,
      })
      walk(child)
    }
  }

  for (const root of roots) {
    walk(root)
  }
  return edges
}

// ─── Helper: collect visible nodes (respect expand state) ──────
function collectVisibleNodes<T>(
  roots: TreeNode<T>[],
  expandedNodes: Set<string>
): TreeNode<T>[] {
  const visible: TreeNode<T>[] = []

  function walk(node: TreeNode<T>): void {
    visible.push(node)
    if (expandedNodes.has(node.id)) {
      for (const child of node.children) {
        walk(child)
      }
    }
  }

  for (const root of roots) {
    walk(root)
  }
  return visible
}

// ─── Custom Node Type for React Flow ───────────────────────────
/**
 * Behavior context passed to consumer's `renderNode`. Describes how F0Graph
 * wants the node to behave for the current viewport / state. Spread into
 * `<F0GraphNode>` for default rendering, or use individual fields when
 * implementing a fully custom node.
 */
export interface F0GraphNodeRenderContext {
  zoomLevel: ZoomLevel
  variant: GraphNodeVariant
  state: GraphNodeState
  expanded: boolean
  hasChildren: boolean
  childrenCount?: number
  level: number
  tabIndex: 0 | -1
  setSize: number
  posInSet: number
  nodeId: string
  ariaOwns?: string
  onExpandToggle: () => void
  onClick: () => void
  nodeRef: (el: HTMLDivElement | null) => void
  /**
   * Set of tag types currently visible. When undefined, all tag types are
   * rendered. Driven by the `visibleTagTypes` / `nodeTagTypes` props and
   * the popover toggle in the controls bar.
   */
  visibleTagTypes?: ReadonlySet<F0GraphNodeTagType>
  /**
   * `true` while a deferred payload is still loading and this node
   * may receive additional children once resolved.
   */
  deferredLoading?: boolean
}

// ─── Custom Edge Wrapper (supports renderEdge override via context) ────────
import {
  F0GraphNodeWrapper,
  F0GraphExpanderWrapper,
  F0GraphCollapserWrapper,
  EXPANDER_Y_OFFSET_BY_ZOOM,
  type GraphNodeData,
  type ExpanderNodeData,
  type CollapserNodeData,
} from "./internal/ReactFlowAdapters"

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

// ─── Inner component (needs ReactFlow hooks) ───────────────────
function F0GraphInner<T = unknown>(props: F0GraphProps<T>) {
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
    focusedNode,
    highlightedNodes: highlightedProp,
    fullScreen = true,
    nodeWidth: nodeWidthProp,
    nodeHeight: nodeHeightProp,
    searchValue,
    onSearchChange,
    searchLoading,
    searchable,
    onSearchResultSelect,
    canvasActions,
    showControls = false,
    onZoomLevelChange,
    onViewportChange,
    renderEdge,
    nodeTagTypes,
    visibleTagTypes: controlledVisibleTagTypes,
    defaultVisibleTagTypes,
    onVisibleTagTypesChange,
    nodeTagTypeLabels,
    reserveTagRow,
    onVisibleNodesChange,
    layoutEngine: layoutEngineProp,
    controlLabels,
    currentUserNodeId,
  } = props

  const i18n = useI18n()
  const reactFlow = useReactFlow()

  // ── Viewport zoom (tracked via onViewportChange to avoid useViewport re-render churn) ──
  const [currentZoom, setCurrentZoom] = useState(defaultZoom)
  const [hoveredEdgeId, setHoveredEdgeId] = useState<string | null>(null)

  // ── Direction ── (hardcoded to TB; layout engine still supports other values internally)
  const direction = "TB" as LayoutDirection

  // ── Per-type tag visibility state (controlled / uncontrolled) ──
  // When `nodeTagTypes` is undefined the popover is hidden and tags render
  // unfiltered (no visibleTagTypes set is published into context).
  const initialVisibleTagTypes = useMemo<ReadonlyArray<F0GraphNodeTagType>>(
    () => defaultVisibleTagTypes ?? nodeTagTypes ?? [],
    // Initial only — don't recompute on prop changes; consumers should use
    // the controlled API to update visibility.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const [internalVisibleTagTypes, setInternalVisibleTagTypes] = useState<
    ReadonlyArray<F0GraphNodeTagType>
  >(initialVisibleTagTypes)
  const visibleTagTypesArr =
    controlledVisibleTagTypes ?? internalVisibleTagTypes
  const visibleTagTypesSet = useMemo(
    () => new Set<F0GraphNodeTagType>(visibleTagTypesArr),
    [visibleTagTypesArr]
  )
  const setVisibleTagTypes = useCallback(
    (next: ReadonlyArray<F0GraphNodeTagType>) => {
      if (controlledVisibleTagTypes === undefined) {
        setInternalVisibleTagTypes(next)
      }
      onVisibleTagTypesChange?.(next)
    },
    [controlledVisibleTagTypes, onVisibleTagTypesChange]
  )
  const toggleTagType = useCallback(
    (type: F0GraphNodeTagType) => {
      const has = visibleTagTypesSet.has(type)
      const next = has
        ? visibleTagTypesArr.filter((t) => t !== type)
        : [...visibleTagTypesArr, type]
      setVisibleTagTypes(next)
    },
    [visibleTagTypesSet, visibleTagTypesArr, setVisibleTagTypes]
  )

  // ── Stabilize renderNode: store in ref so rfNodes deps don't include the function ──
  const renderNodeRef = useRef(renderNode)
  renderNodeRef.current = renderNode

  // ── Stabilize renderEdge: select edge type registry ──
  const edgeTypes = renderEdge ? customEdgeTypes : defaultEdgeTypes

  const stableRenderNode = useCallback(
    (node: GraphNode<unknown>, ctx: F0GraphNodeRenderContext): ReactNode =>
      renderNodeRef.current(node as GraphNode<T>, ctx),
    []
  )

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

  // ── Resolve flat node list ──
  // When deferredNodes is provided in full-tree mode, merge initial + deferred.
  const deferredMerge = useDeferredMerge<T>({
    initialNodes: nodesProp ?? [],
    initialEdges: edgesProp ?? [],
    deferredNodes: isLazyMode ? undefined : deferredNodes,
  })

  // Fire deferred callbacks
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

  // ── Initial expanded set from depth ──
  const initialExpandedRef = useRef<Set<string> | null>(null)
  if (initialExpandedRef.current === null) {
    if (defaultExpandedNodes) {
      initialExpandedRef.current = defaultExpandedNodes
    } else if (defaultExpandDepth !== undefined) {
      initialExpandedRef.current = computeExpandedByDepth(
        roots,
        defaultExpandDepth
      )
    } else {
      // Expand all root nodes by default
      initialExpandedRef.current = new Set(roots.map((r) => r.id))
    }
  }

  // ── Expanded state (controlled / uncontrolled) ──
  const [internalExpanded, setInternalExpanded] = useState<Set<string>>(
    () => initialExpandedRef.current!
  )
  const expandedNodes = controlledExpanded ?? internalExpanded

  // ── Anchor: track last toggled node to preserve position ──
  const anchorNodeRef = useRef<string | null>(null)
  const prevPositionsRef = useRef<Map<string, { x: number; y: number }>>(
    new Map()
  )

  // ── Selected state (controlled / uncontrolled) ──
  const [internalSelected, setInternalSelected] = useState<Set<string>>(
    new Set()
  )
  const selectedNodes = controlledSelected ?? internalSelected

  // ── Highlighted nodes ──
  const highlightedNodes = highlightedProp ?? EMPTY_HIGHLIGHTED_NODES

  // ── Focus state (roving tabindex) ──
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(() => {
    const visible = collectVisibleNodes(roots, expandedNodes)
    return visible.length > 0 ? visible[0].id : null
  })
  const focusedNodeIdRef = useRef(focusedNodeId)
  useEffect(() => {
    focusedNodeIdRef.current = focusedNodeId
  }, [focusedNodeId])

  // Node ref map for imperative .focus() calls
  const nodeRefsMapRef = useRef(new Map<string, HTMLElement>())
  const registerNodeRef = useCallback(
    (nodeId: string, el: HTMLElement | null) => {
      if (el) {
        nodeRefsMapRef.current.set(nodeId, el)
      } else {
        nodeRefsMapRef.current.delete(nodeId)
      }
    },
    []
  )

  // ── Zoom level ──
  const zoomLevel = useGraphZoomLevel(currentZoom, {
    preset: zoomPreset,
    thresholds: zoomThresholds,
  })

  const prevZoomLevel = useRef(zoomLevel)
  useEffect(() => {
    if (prevZoomLevel.current !== zoomLevel) {
      prevZoomLevel.current = zoomLevel
      onZoomLevelChange?.(zoomLevel)
    }
  }, [zoomLevel, onZoomLevelChange])

  // ── Visible nodes (respecting expand state) ──
  const visibleTreeNodes = useMemo(
    () => collectVisibleNodes(roots, expandedNodes),
    [roots, expandedNodes]
  )

  // ── Flat visible order (DFS) for keyboard navigation ──
  // Includes expander/collapser pseudo-node IDs for roving tabindex
  const flatVisibleOrder = useMemo(() => {
    const order: string[] = []

    function walk(nodes: TreeNode<unknown>[]): void {
      for (const node of nodes) {
        order.push(node.id)
        if (expandedNodes.has(node.id) && node.children.length > 0) {
          walk(node.children)
          order.push(`collapser-${node.id}`)
        } else if (node.childrenCount > 0) {
          order.push(`expander-${node.id}`)
        }
      }
    }

    for (const root of roots) {
      walk([root])
    }
    return order
  }, [roots, expandedNodes])
  const flatVisibleOrderSet = useMemo(
    () => new Set(flatVisibleOrder),
    [flatVisibleOrder]
  )
  const flatVisibleOrderRef = useRef(flatVisibleOrder)
  useEffect(() => {
    flatVisibleOrderRef.current = flatVisibleOrder
  }, [flatVisibleOrder])

  // ── Initialize / repair focused node ──
  useEffect(() => {
    if (flatVisibleOrder.length === 0) return
    if (focusedNodeId === null || !flatVisibleOrderSet.has(focusedNodeId)) {
      // On initial mount, prefer first selected node if any are visible
      const firstSelected =
        focusedNodeId === null
          ? flatVisibleOrder.find((id) => selectedNodes.has(id))
          : undefined
      setFocusedNodeId(firstSelected ?? flatVisibleOrder[0])
    }
  }, [flatVisibleOrder, focusedNodeId, selectedNodes])

  // ── ARIA tree info (level, setSize, posInSet) ──
  const ariaTreeInfo = useMemo(() => {
    const info = new Map<
      string,
      { level: number; setSize: number; posInSet: number }
    >()
    const byParent = new Map<string | null, typeof visibleTreeNodes>()
    for (const tn of visibleTreeNodes) {
      const key = tn.parentId
      if (!byParent.has(key)) byParent.set(key, [])
      byParent.get(key)!.push(tn)
    }
    for (const siblings of byParent.values()) {
      for (let i = 0; i < siblings.length; i++) {
        info.set(siblings[i].id, {
          level: siblings[i].depth + 1,
          setSize: siblings.length,
          posInSet: i + 1,
        })
      }
    }
    return info
  }, [visibleTreeNodes])

  // Notify parent of visible node count changes
  useEffect(() => {
    onVisibleNodesChange?.(visibleTreeNodes.length)
  }, [visibleTreeNodes.length, onVisibleNodesChange])

  // ── Expander data: for each visible parent with children, create an expander ──
  const expanderMap = useMemo(() => {
    const map = new Map<
      string,
      {
        expanderId: string
        avatars: { firstName: string; lastName: string; src?: string }[]
        count: number
      }
    >()

    for (const treeNode of visibleTreeNodes) {
      if (treeNode.childrenCount > 0 && !expandedNodes.has(treeNode.id)) {
        map.set(treeNode.id, {
          expanderId: `expander-${treeNode.id}`,
          avatars: [],
          count: treeNode.childrenCount,
        })
      }
    }

    return map
  }, [visibleTreeNodes, expandedNodes])

  // ── Edges ──
  const resolvedEdges = useMemo((): GraphEdge[] => {
    if (resolvedEdgesProp && resolvedEdgesProp.length > 0)
      return resolvedEdgesProp
    return deriveEdgesFromTree(roots)
  }, [resolvedEdgesProp, roots])

  // ── Visible edges rewritten through expanders ──
  const { visibleEdges, expanderNodes } = useMemo(() => {
    const visibleIds = new Set(visibleTreeNodes.map((n) => n.id))
    const edges: GraphEdge[] = []
    const expNodes: Array<{
      id: string
      parentId: string
      avatars: { firstName: string; lastName: string; src?: string }[]
      count: number
    }> = []

    // Collect parents that have expanders
    const parentsWithExpanders = new Set(expanderMap.keys())

    for (const edge of resolvedEdges) {
      // If the source has an expander, rewrite edges
      if (parentsWithExpanders.has(edge.source)) {
        const exp = expanderMap.get(edge.source)!
        // We only add parent→expander edge once
        if (
          !edges.some(
            (e) => e.source === edge.source && e.target === exp.expanderId
          )
        ) {
          edges.push({
            id: `${edge.source}->${exp.expanderId}`,
            source: edge.source,
            target: exp.expanderId,
          })
          expNodes.push({
            id: exp.expanderId,
            parentId: edge.source,
            avatars: exp.avatars,
            count: exp.count,
          })
        }
        // If child is visible, add expander→child edge
        if (visibleIds.has(edge.target)) {
          edges.push({
            id: `${exp.expanderId}->${edge.target}`,
            source: exp.expanderId,
            target: edge.target,
          })
        }
      } else if (visibleIds.has(edge.source) && visibleIds.has(edge.target)) {
        edges.push(edge)
      }
    }

    return { visibleEdges: edges, expanderNodes: expNodes }
  }, [resolvedEdges, visibleTreeNodes, expanderMap])

  // ── Layout nodes: visible tree nodes + expanders (passed through for completeness) ──
  const layoutNodes = useMemo((): TreeNode[] => {
    const expanderTreeNodes: TreeNode[] = expanderNodes.map((exp) => ({
      id: exp.id,
      parentId: exp.parentId,
      data: null as unknown,
      children: [],
      depth: 0,
      childrenCount: 0,
      childrenLoaded: true,
    }))
    return [...visibleTreeNodes, ...expanderTreeNodes]
  }, [visibleTreeNodes, expanderNodes])

  // ── Layout edges: include expander edges so the engine sees the full graph ──
  const layoutEdges = useMemo(() => visibleEdges, [visibleEdges])

  // Extra vertical room for the tag row when any tag types are visible.
  // Approximates one row of small F0Tag pills; multi-row wrap will overlap
  // the next rank gap (still readable) — refine to per-node measurement
  // in a follow-up.
  const TAG_ROW_HEIGHT = 36
  // The tag row only contributes to layout when the consumer opts into the
  // popover (`nodeTagTypes`) and at least one type is currently visible, or
  // when `reserveTagRow` is explicitly set (e.g. tags rendered via
  // `renderNode` without using the popover). Inflating the box otherwise
  // would push the source handle and the expander below the pill.
  const tagsAffectLayout =
    reserveTagRow ?? (nodeTagTypes ? visibleTagTypesSet.size > 0 : false)
  const effectiveNodeHeight =
    (nodeHeightProp ?? 56) + (tagsAffectLayout ? TAG_ROW_HEIGHT : 0)

  const builtInEngine = useLayoutEngine({
    nodeWidth: nodeWidthProp,
    nodeHeight: effectiveNodeHeight,
  })
  const layoutEngine = layoutEngineProp ?? builtInEngine
  const layout = useMemo(
    () => layoutEngine.computeLayout(layoutNodes, layoutEdges, direction),
    [layoutEngine, layoutNodes, layoutEdges, direction]
  )

  // Place expanders at the midpoint between parent bottom and where children would be.
  // Scales per zoom level (+100% each step) so the larger expander button remains
  // visually centered in its lane.
  const EXPANDER_Y_OFFSET = EXPANDER_Y_OFFSET_BY_ZOOM[zoomLevel]

  // Compute anchor offset (pure — no ref mutations)
  const anchorOffset = useMemo(() => {
    const anchorId = anchorNodeRef.current
    if (!anchorId) return { dx: 0, dy: 0 }

    const newPos = layout.nodes.find((pn) => pn.id === anchorId)
    const oldPos = prevPositionsRef.current.get(anchorId)
    if (oldPos && newPos) {
      return { dx: oldPos.x - newPos.x, dy: oldPos.y - newPos.y }
    }
    return { dx: 0, dy: 0 }
  }, [layout.nodes])

  // Persist positions and clear anchor after commit (safe for strict mode)
  useLayoutEffect(() => {
    const { dx, dy } = anchorOffset
    prevPositionsRef.current = new Map(
      layout.nodes.map((pn) => [pn.id, { x: pn.x + dx, y: pn.y + dy }])
    )
    anchorNodeRef.current = null
  }, [layout.nodes, anchorOffset])

  const rfNodes = useMemo((): RFNode[] => {
    const { dx: anchorDx, dy: anchorDy } = anchorOffset
    const positionMap = new Map(layout.nodes.map((pn) => [pn.id, pn]))

    // Node dimensions (constant — compensation scale is applied inside the wrapper via context)
    const BASE_W = nodeWidthProp ?? 256
    const BASE_H = effectiveNodeHeight

    const yStretch = 1

    // Direction-aware port positions for React Flow edge routing
    const isHorizontal = direction === "LR" || direction === "RL"
    const sourcePos =
      direction === "TB"
        ? Position.Bottom
        : direction === "BT"
          ? Position.Top
          : direction === "LR"
            ? Position.Right
            : Position.Left
    const targetPos =
      direction === "TB"
        ? Position.Top
        : direction === "BT"
          ? Position.Bottom
          : direction === "LR"
            ? Position.Left
            : Position.Right

    const graphRfNodes: RFNode[] = visibleTreeNodes.map((treeNode): RFNode => {
      const pos = positionMap.get(treeNode.id)
      const graphNode: GraphNode<T> = {
        id: treeNode.id,
        parentId: treeNode.parentId,
        data: treeNode.data,
        childrenCount: treeNode.childrenCount,
        childrenLoaded: treeNode.childrenLoaded,
      }
      const aria = ariaTreeInfo.get(treeNode.id)

      // aria-owns: only for expanded nodes with visible children
      const visibleChildIds =
        expandedNodes.has(treeNode.id) && treeNode.children.length > 0
          ? treeNode.children.map((c) => c.id)
          : undefined

      return {
        id: treeNode.id,
        type: "graphNode",
        position: {
          x: (pos?.x ?? 0) + anchorDx,
          y: (pos?.y ?? 0) * yStretch + anchorDy,
        },
        width: BASE_W,
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        data: {
          graphNode,
          renderNode: stableRenderNode,
          ariaLevel: aria?.level ?? 1,
          ariaSetSize: aria?.setSize ?? 1,
          ariaPosInSet: aria?.posInSet ?? 1,
          visibleChildIds,
        } as GraphNodeData,
      }
    })

    // Expanders are not part of the layout tree; they're positioned
    // manually adjacent to their parent on the "outgoing" edge of the layout
    const expanderRfNodes: RFNode[] = expanderNodes.map((exp): RFNode => {
      const parentPos = positionMap.get(exp.parentId)
      const parentNode = parentPos ?? {
        x: 0,
        y: 0,
        width: BASE_W,
        height: BASE_H,
      }
      const pw = parentNode.width ?? BASE_W
      const ph = parentNode.height ?? BASE_H
      const expX = isHorizontal
        ? direction === "LR"
          ? parentNode.x + pw + EXPANDER_Y_OFFSET
          : parentNode.x - pw
        : parentNode.x
      const expY = isHorizontal
        ? parentNode.y * yStretch
        : direction === "TB"
          ? parentNode.y * yStretch + ph + EXPANDER_Y_OFFSET
          : parentNode.y * yStretch - ph
      return {
        id: exp.id,
        type: "expanderNode",
        position: {
          x: expX + anchorDx,
          y: expY + anchorDy,
        },
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        data: {
          avatars: exp.avatars,
          count: exp.count,
          expanded: expandedNodes.has(exp.parentId),
          parentId: exp.parentId,
          parentWidth: BASE_W,
          parentName: exp.parentId,
        } as ExpanderNodeData,
      }
    })

    // Collapser buttons for expanded parents with visible children
    const collapserRfNodes: RFNode[] = visibleTreeNodes
      .filter((n) => expandedNodes.has(n.id) && n.children.length > 0)
      .map((parent): RFNode => {
        const parentPos = positionMap.get(parent.id)
        const px = parentPos?.x ?? 0
        const py = parentPos?.y ?? 0
        const pw = parentPos?.width ?? BASE_W
        const ph = parentPos?.height ?? BASE_H
        const colX = isHorizontal
          ? direction === "LR"
            ? px + pw + EXPANDER_Y_OFFSET + COLLAPSER_OFFSET_ADJUSTMENT
            : px - pw
          : px
        const colY = isHorizontal
          ? py * yStretch
          : direction === "TB"
            ? py * yStretch +
              ph +
              EXPANDER_Y_OFFSET +
              COLLAPSER_OFFSET_ADJUSTMENT
            : py * yStretch - ph

        return {
          id: `collapser-${parent.id}`,
          type: "collapserNode",
          zIndex: 10,
          position: {
            x: colX + anchorDx,
            y: colY + anchorDy,
          },
          sourcePosition: sourcePos,
          targetPosition: targetPos,
          data: {
            parentId: parent.id,
            parentWidth: BASE_W,
            collapseLabel: controlLabels?.collapseChildren,
            parentName: parent.id,
          } as CollapserNodeData,
        }
      })

    return [...graphRfNodes, ...expanderRfNodes, ...collapserRfNodes]
  }, [
    layout.nodes,
    visibleTreeNodes,
    expanderNodes,
    expandedNodes,
    stableRenderNode,
    anchorOffset,
    EXPANDER_Y_OFFSET,
    nodeWidthProp,
    nodeHeightProp,
    direction,
    ariaTreeInfo,
    controlLabels?.collapseChildren,
  ])

  // ── Build React Flow edges ──
  const rfEdges = useMemo((): RFEdge[] => {
    // Parents that have a collapser button sitting on their outgoing edges
    const parentsWithCollapsers = new Set(
      visibleTreeNodes
        .filter((n) => expandedNodes.has(n.id) && n.children.length > 0)
        .map((n) => n.id)
    )

    return visibleEdges.map((edge): RFEdge => {
      const isInteractive = Boolean(edge.onEdgeClick || edge.onEdgeHover)
      const isHovered = isInteractive && edge.id === hoveredEdgeId
      const baseData = edge.data as Record<string, unknown> | undefined
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: "graphEdge",
        data: {
          ...baseData,
          graphEdge: edge,
          // Interactive edges shift to the `hover` variant on pointer-enter.
          // Consumer-provided `variant` in edge.data still wins when not hovered.
          ...(isHovered ? { variant: "hover" as const } : null),
          showDot:
            !edge.target.startsWith("expander-") &&
            !edge.source.startsWith("expander-") &&
            !parentsWithCollapsers.has(edge.source),
        },
      }
    })
  }, [visibleEdges, visibleTreeNodes, expandedNodes, hoveredEdgeId])

  // ── Expand / collapse (stable via ref pattern to avoid context cascade) ──
  const expandedNodesRef = useRef(expandedNodes)
  useEffect(() => {
    expandedNodesRef.current = expandedNodes
  }, [expandedNodes])

  const toggleExpand = useCallback(
    (nodeId: string) => {
      const current = expandedNodesRef.current
      const wasExpanded = current.has(nodeId)
      const next = new Set(current)
      if (wasExpanded) {
        next.delete(nodeId)
      } else {
        next.add(nodeId)
      }

      // Track which node to anchor
      anchorNodeRef.current = nodeId

      if (!controlledExpanded) {
        setInternalExpanded(next)
      }

      // Lazy mode: trigger fetch when expanding
      if (isLazyMode && !wasExpanded) {
        const treeNode = nodeMap.get(nodeId)
        if (treeNode && !treeNode.childrenLoaded) {
          lazyTree.expandNode(nodeId)
        }
      }

      onExpandToggle?.(nodeId, !wasExpanded)
      onExpandedNodesChange?.(next)
    },
    [
      controlledExpanded,
      onExpandToggle,
      onExpandedNodesChange,
      isLazyMode,
      nodeMap,
      lazyTree,
    ]
  )

  // ── Bulk expand / collapse (refs so async closures see latest data) ──
  // `rootsRef` and `lazyNodesRef` keep the bulk callbacks stable while still
  // exposing fresh tree data — important for lazy-mode BFS, which must read
  // newly-loaded children between awaits.
  const rootsRef = useRef(roots)
  useEffect(() => {
    rootsRef.current = roots
  }, [roots])

  const lazyNodesRef = useRef(lazyTree.nodes)
  useEffect(() => {
    lazyNodesRef.current = lazyTree.nodes
  }, [lazyTree.nodes])

  const expandAll = useCallback(async (): Promise<void> => {
    // ── Eager mode: full tree is known synchronously ──
    if (!isLazyMode) {
      const next = collectExpandableNodeIds(rootsRef.current)
      if (!controlledExpanded) {
        setInternalExpanded(next)
      }
      onExpandedNodesChange?.(next)
      return
    }

    // ── Lazy mode: BFS, awaiting loadChildren level by level ──
    // We drive the BFS off the children returned directly by
    // `lazyTree.expandNode()` rather than reading rendered state — this
    // avoids any dependency on React commit timing between awaits.
    // Single state write at the end honors the "one onExpandedNodesChange
    // per bulk action" contract documented on F0GraphActionsContextValue.
    const accumulated = new Set<string>(expandedNodesRef.current)
    const visited = new Set<string>()

    // Seed the frontier with current root ids that have children.
    let frontier: string[] = []
    for (const node of lazyNodesRef.current) {
      if (node.parentId === null && (node.childrenCount ?? 0) > 0) {
        frontier.push(node.id)
        visited.add(node.id)
      }
    }

    while (frontier.length > 0) {
      // Mark every frontier id as expanded.
      for (const id of frontier) {
        accumulated.add(id)
      }

      // Load each frontier node in parallel. `expandNode` resolves with the
      // freshly loaded (or cached) children so we can build the next
      // frontier from the result without waiting on React commits. Errors
      // are swallowed per-node so one failing branch does not abort the
      // cascade.
      const results = await Promise.all(
        frontier.map((id) =>
          lazyTree
            .expandNode(id)
            .then((children) => ({ id, children }))
            .catch(() => ({ id, children: [] as typeof lazyTree.nodes }))
        )
      )

      // Build the next frontier from the returned children.
      const next: string[] = []
      for (const { children } of results) {
        for (const child of children) {
          if (visited.has(child.id)) continue
          visited.add(child.id)
          if ((child.childrenCount ?? 0) > 0) {
            next.push(child.id)
          }
        }
      }
      frontier = next
    }

    if (!controlledExpanded) {
      setInternalExpanded(accumulated)
    }
    onExpandedNodesChange?.(accumulated)
  }, [isLazyMode, controlledExpanded, onExpandedNodesChange, lazyTree])

  const collapseAll = useCallback((): void => {
    const empty = new Set<string>()
    if (!controlledExpanded) {
      setInternalExpanded(empty)
    }
    onExpandedNodesChange?.(empty)
  }, [controlledExpanded, onExpandedNodesChange])

  // ── Detail panel state ──
  const {
    detailPanel,
    detailPanelAriaLabel,
    detailPanelWidth = 384,
    graphId,
  } = props
  const detailPanelEnabled = Boolean(detailPanel)
  const [detailNodeId, setDetailNodeId] = useState<string | null>(null)
  const detailNode = useMemo<GraphNode<T> | null>(() => {
    if (!detailNodeId) return null
    const entry = nodeMap.get(detailNodeId)
    if (!entry) return null
    return {
      id: detailNodeId,
      parentId: entry.parentId ?? null,
      data: entry.data,
      childrenCount: entry.childrenCount,
      childrenLoaded: entry.childrenLoaded,
    }
  }, [detailNodeId, nodeMap])
  const detailOpen = detailPanelEnabled && detailNode !== null

  // Canvas ref — wraps the ReactFlow viewport plus overlays (controls,
  // search, detail panel). Declared here so it can be read by the
  // panel-aware centering callback below; the same ref is attached to the
  // canvas element further down.
  const canvasRef = useRef<HTMLDivElement>(null)

  // Read the actual rendered detail-panel width from the DOM. The panel
  // persists its width to localStorage and may differ from the
  // `detailPanelWidth` prop after the user resizes. Falling back to the
  // prop value covers the first-paint case before the panel is measurable.
  const getActualPanelWidth = useCallback((): number => {
    const root = canvasRef.current
    if (!root) return detailPanelWidth
    const panel = root.querySelector<HTMLElement>('[role="complementary"]')
    if (!panel) return detailPanelWidth
    const measured = panel.getBoundingClientRect().width
    return measured > 0 ? measured : detailPanelWidth
  }, [detailPanelWidth])

  const centerNodeWithPanelOffset = useCallback(
    (id: string, panelOpen: boolean) => {
      const rfNode = reactFlow.getNode(id)
      if (!rfNode) return
      const nodeWidth = rfNode.width ?? DEFAULT_NODE_WIDTH_FALLBACK
      const nodeHeight = rfNode.height ?? DEFAULT_NODE_HEIGHT_FALLBACK
      const targetZoom = Math.max(reactFlow.getZoom(), 1)
      const panelWidth = panelOpen ? getActualPanelWidth() : 0
      const offsetWorldX = panelWidth / 2 / targetZoom
      const cx = rfNode.position.x + nodeWidth / 2 + offsetWorldX
      const cy = rfNode.position.y + nodeHeight / 2
      reactFlow.setCenter(cx, cy, { zoom: targetZoom, duration: 400 })
    },
    [reactFlow, getActualPanelWidth]
  )

  // ── Selection (focus semantics: click selects, click again keeps, pane click clears) ──
  const selectedNodesRef = useRef(selectedNodes)
  useEffect(() => {
    selectedNodesRef.current = selectedNodes
  }, [selectedNodes])

  const selectNode = useCallback(
    (nodeId: string) => {
      // Update roving tabindex focus (sync ref for immediate reads)
      focusedNodeIdRef.current = nodeId
      setFocusedNodeId(nodeId)

      if (selectionMode !== "none") {
        const current = selectedNodesRef.current
        const wasSelected = current.has(nodeId)

        if (!wasSelected) {
          const next =
            selectionMode === "single"
              ? new Set([nodeId])
              : new Set([...current, nodeId])

          if (!controlledSelected) {
            setInternalSelected(next)
          }
          onNodeSelect?.(nodeId, true)
          onSelectedNodesChange?.(next)
        }
      }

      // Open detail panel + center accounting for offset
      if (detailPanelEnabled) {
        setDetailNodeId(nodeId)
        // Defer centering to next frame so the panel width is committed.
        window.requestAnimationFrame(() => {
          centerNodeWithPanelOffset(nodeId, true)
        })
      }
    },
    [
      selectionMode,
      controlledSelected,
      onNodeSelect,
      onSelectedNodesChange,
      detailPanelEnabled,
      centerNodeWithPanelOffset,
    ]
  )

  const containerRef = useRef<HTMLDivElement>(null)

  // Tracks pointerdown coordinates so we can distinguish a click on a node
  // from a pan drag that happens to end over a node. Mirrors React Flow's
  // own `nodeClickDistance` threshold below.
  const pointerDownRef = useRef<{
    x: number
    y: number
    id: number
  } | null>(null)

  // ── Escape to clear focus and selection ──
  const clearSelection = useCallback(() => {
    const current = selectedNodesRef.current
    if (!controlledSelected) {
      setInternalSelected(new Set())
    }
    if (current.size > 0) {
      onSelectedNodesChange?.(new Set())
    }
    setDetailNodeId(null)
    setFocusedNodeId(null)
    canvasRef.current?.focus()
  }, [controlledSelected, onSelectedNodesChange])

  // ── Ref for nodeMap (used in keyboard handler without re-creating) ──
  const nodeMapRef = useRef(nodeMap)
  useEffect(() => {
    nodeMapRef.current = nodeMap
  }, [nodeMap])

  const handleTreeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        clearSelection()
        return
      }

      // Zoom shortcuts work even when a node is focused
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      switch (e.key) {
        case "+":
        case "=":
          e.preventDefault()
          reactFlow.zoomIn({ duration: reducedMotion ? 0 : 300 })
          return
        case "-":
          e.preventDefault()
          reactFlow.zoomOut({ duration: reducedMotion ? 0 : 300 })
          return
        case "0":
          e.preventDefault()
          reactFlow.fitView({
            duration: reducedMotion ? 0 : 400,
            padding: FIT_VIEW_PADDING_TIGHT,
          })
          return
      }

      const currentId = focusedNodeIdRef.current
      if (!currentId) return

      const order = flatVisibleOrderRef.current
      const currentIndex = order.indexOf(currentId)
      if (currentIndex === -1) return

      let targetId: string | null = null

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          e.stopPropagation()
          if (currentIndex < order.length - 1) {
            targetId = order[currentIndex + 1]
          }
          break
        case "ArrowUp":
          e.preventDefault()
          e.stopPropagation()
          if (currentIndex > 0) {
            targetId = order[currentIndex - 1]
          }
          break
        case "ArrowRight": {
          e.preventDefault()
          e.stopPropagation()
          const node = nodeMapRef.current.get(currentId)
          const hasKids =
            node !== undefined &&
            (node.children.length > 0 || node.childrenCount > 0)
          if (hasKids) {
            if (!expandedNodesRef.current.has(currentId)) {
              toggleExpand(currentId)
            } else if (currentIndex < order.length - 1) {
              targetId = order[currentIndex + 1]
            }
          }
          break
        }
        case "ArrowLeft": {
          e.preventDefault()
          e.stopPropagation()
          const node = nodeMapRef.current.get(currentId)
          const hasKidsL =
            node !== undefined &&
            (node.children.length > 0 || node.childrenCount > 0)
          if (node && expandedNodesRef.current.has(currentId) && hasKidsL) {
            toggleExpand(currentId)
          } else if (node?.parentId) {
            targetId = node.parentId
          }
          break
        }
        case "Home":
          e.preventDefault()
          e.stopPropagation()
          if (order.length > 0) {
            targetId = order[0]
          }
          break
        case "End":
          e.preventDefault()
          e.stopPropagation()
          if (order.length > 0) {
            targetId = order[order.length - 1]
          }
          break
        case "Enter":
        case " ":
          e.preventDefault()
          e.stopPropagation()
          if (
            currentId.startsWith("expander-") ||
            currentId.startsWith("collapser-")
          ) {
            toggleExpand(currentId.replace(/^(expander|collapser)-/, ""))
          } else {
            selectNode(currentId)
          }
          break
        default:
          return
      }

      if (targetId) {
        focusedNodeIdRef.current = targetId
        setFocusedNodeId(targetId)
        const targetEl = nodeRefsMapRef.current.get(targetId)
        if (targetEl) {
          targetEl.focus()
          // Fly-to focused node respecting reduced motion
          const rm = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
          reactFlow.fitView({
            nodes: [{ id: targetId.replace(/^(expander|collapser)-/, "") }],
            duration: rm ? 0 : 300,
            padding: FIT_VIEW_PADDING_LOOSE,
          })
        }
      }
    },
    [clearSelection, toggleExpand, selectNode, reactFlow]
  )

  // ── Canvas keyboard handler (pan/zoom when no node is focused) ──
  const handleCanvasKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Only handle when the canvas wrapper itself has focus
      if (e.target !== e.currentTarget) return

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      const duration = reducedMotion ? 0 : 200
      const PAN_STEP = e.shiftKey ? 200 : 50

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x, y: vp.y + PAN_STEP, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowDown":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x, y: vp.y - PAN_STEP, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowLeft":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x + PAN_STEP, y: vp.y, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowRight":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x - PAN_STEP, y: vp.y, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "+":
        case "=":
          e.preventDefault()
          reactFlow.zoomIn({ duration: reducedMotion ? 0 : 300 })
          break
        case "-":
          e.preventDefault()
          reactFlow.zoomOut({ duration: reducedMotion ? 0 : 300 })
          break
        case "0":
          e.preventDefault()
          reactFlow.fitView({
            duration: reducedMotion ? 0 : 400,
            padding: FIT_VIEW_PADDING_TIGHT,
          })
          break
        default:
          return
      }
    },
    [reactFlow]
  )

  // ── Focus node ──
  useEffect(() => {
    if (focusedNode) {
      // Slight delay to allow layout to settle
      const timer = setTimeout(() => {
        reactFlow.fitView({
          nodes: [{ id: focusedNode }],
          duration: 300,
          padding: FIT_VIEW_PADDING_LOOSE,
        })
      }, FOCUS_SETTLE_DELAY_MS)
      return () => clearTimeout(timer)
    }
  }, [focusedNode, reactFlow])

  // ── Viewport change callback ──
  const handleViewportChange = useCallback(
    (vp: Viewport) => {
      setCurrentZoom(vp.zoom)
      onViewportChange?.({ x: vp.x, y: vp.y, zoom: vp.zoom })
    },
    [onViewportChange]
  )

  // ── Controls callbacks ──
  const handleZoomIn = useCallback(() => {
    reactFlow.zoomIn({ duration: 300 })
  }, [reactFlow])

  const handleZoomOut = useCallback(() => {
    reactFlow.zoomOut({ duration: 300 })
  }, [reactFlow])

  const handleFitView = useCallback(() => {
    reactFlow.fitView({ duration: 400, padding: FIT_VIEW_PADDING_TIGHT })
  }, [reactFlow])

  const handleFocusUser = useCallback(() => {
    if (!currentUserNodeId) return
    centerNodeWithPanelOffset(currentUserNodeId, detailOpen)
  }, [currentUserNodeId, centerNodeWithPanelOffset, detailOpen])

  // ── Internal search-with-popover state ──
  const [internalSearchQuery, setInternalSearchQuery] = useState("")
  const searchFlyTimerRef = useRef<number | null>(null)
  const clearSearchFlyTimer = useCallback(() => {
    if (searchFlyTimerRef.current !== null) {
      window.clearTimeout(searchFlyTimerRef.current)
      searchFlyTimerRef.current = null
    }
  }, [])
  const {
    results: searchResults,
    hasQuery: hasSearchQuery,
    pending: searchPending,
  } = useGraphSearch(resolvedNodes, internalSearchQuery, searchable)

  const handleSearchResultSelect = useCallback(
    (id: string) => {
      // 1) Auto-expand collapsed ancestors so the node becomes visible.
      const current = expandedNodesRef.current
      const ancestorsToExpand: string[] = []
      let cursor = nodeMap.get(id)?.parentId ?? null
      while (cursor) {
        if (!current.has(cursor)) ancestorsToExpand.push(cursor)
        cursor = nodeMap.get(cursor)?.parentId ?? null
      }
      if (ancestorsToExpand.length > 0) {
        const next = new Set(current)
        for (const ancestorId of ancestorsToExpand) next.add(ancestorId)
        if (!controlledExpanded) {
          setInternalExpanded(next)
        }
        for (const ancestorId of ancestorsToExpand) {
          onExpandToggle?.(ancestorId, true)
        }
        onExpandedNodesChange?.(next)
      }

      // 2) Select the node (no-op if selectionMode === "none").
      selectNode(id)

      // 3) Fly to it once the next layout pass has settled.
      clearSearchFlyTimer()
      searchFlyTimerRef.current = window.setTimeout(() => {
        searchFlyTimerRef.current = null
        if (detailPanelEnabled) {
          centerNodeWithPanelOffset(id, true)
        } else {
          reactFlow.fitView({
            nodes: [{ id }],
            duration: 300,
            padding: FIT_VIEW_PADDING_LOOSE,
          })
        }
      }, FOCUS_SETTLE_DELAY_MS)

      onSearchResultSelect?.(id)
    },
    [
      nodeMap,
      expandedNodes,
      controlledExpanded,
      onExpandToggle,
      selectNode,
      reactFlow,
      onSearchResultSelect,
      detailPanelEnabled,
      centerNodeWithPanelOffset,
      clearSearchFlyTimer,
    ]
  )

  // Clean up the search-fly timer on unmount.
  useEffect(() => {
    return clearSearchFlyTimer
  }, [clearSearchFlyTimer])

  // ── Split context values (for performance — wrappers subscribe to only what they need) ──
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
      // Otherwise leave it undefined so F0GraphNode renders all tags.
      visibleTagTypes: nodeTagTypes ? visibleTagTypesSet : undefined,
      deferredLoading: isDeferredLoading || undefined,

      // Tells the node wrapper how much extra height the layout reserved
      // for tags. In compact/dot (where tags are hidden) the wrapper uses
      // this to top-align the pill and pull the source Handle up.
      tagRowHeight: tagsAffectLayout ? TAG_ROW_HEIGHT : 0,
      // Snap variant transitions when the rendered tree exceeds this
      // threshold. Animating thousands of pills (chrome opacity, avatar
      // transform, text reveal, backdrop-blur activation) on a single
      // zoomLevel change overwhelms the compositor; snapping keeps the
      // dot↔compact / compact↔detail change instant in those cases.
      largeGraph: visibleTreeNodes.length > LARGE_GRAPH_SNAP_THRESHOLD,
    }),
    [
      renderEdge,
      nodeTagTypes,
      visibleTagTypesSet,
      isDeferredLoading,
      visibleTreeNodes.length,
      tagsAffectLayout,
    ]
  )

  const focusContextValue = useMemo(
    () => ({ focusedNodeId, setFocusedNodeId, registerNodeRef }),
    [focusedNodeId, registerNodeRef]
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
                    className={cn(
                      "f0-graph relative bg-f1-background-tertiary outline-none",
                      fullScreen
                        ? "h-full w-full"
                        : "mx-3 my-3 h-[calc(100%-24px)] w-[calc(100%-24px)] overflow-hidden rounded-xl border border-solid border-f1-border-secondary"
                    )}
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
                        // moved (i.e. it was a click, not a pan drag). React
                        // Flow's own onNodeClick is suppressed past
                        // nodeClickDistance; we mirror that here so a pan
                        // ending over a node does not trigger selection +
                        // centering.
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
                        onPaneClick={clearSelection}
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
                          gap={32}
                          size={4}
                          color="var(--f0-graph-bg-dot)"
                        />
                      </ReactFlow>
                    </div>

                    {searchable ? (
                      <div
                        className="absolute left-3 top-3 z-10 flex w-[240px] flex-col gap-2"
                        data-no-spark
                      >
                        <F0GraphSearch
                          value={internalSearchQuery}
                          onChange={setInternalSearchQuery}
                          results={searchResults}
                          hasQuery={hasSearchQuery}
                          pending={searchPending}
                          loading={searchLoading}
                          placeholder={searchable.placeholder}
                          noResultsLabel={searchable.noResultsLabel}
                          onSelect={handleSearchResultSelect}
                        />
                        {canvasActions && (
                          <div className="flex w-fit flex-col gap-2 rounded-md backdrop-blur-[140px]">
                            {canvasActions}
                          </div>
                        )}
                      </div>
                    ) : (
                      onSearchChange && (
                        <div
                          className="absolute left-3 top-3 z-10 flex w-[240px] flex-col gap-2"
                          data-no-spark
                        >
                          <Search
                            value={searchValue}
                            onChange={onSearchChange}
                            loading={searchLoading}
                          />
                          {canvasActions && (
                            <div className="flex w-fit flex-col gap-2 rounded-md backdrop-blur-[140px]">
                              {canvasActions}
                            </div>
                          )}
                        </div>
                      )
                    )}

                    {!searchable && !onSearchChange && canvasActions && (
                      <div
                        className="absolute left-3 top-3 z-10 flex flex-col gap-2 rounded-md backdrop-blur-[140px]"
                        data-no-spark
                      >
                        {canvasActions}
                      </div>
                    )}

                    {showControls && (
                      <div
                        className="absolute bottom-3 left-3 z-10"
                        data-no-spark
                      >
                        <F0GraphControls
                          onZoomIn={handleZoomIn}
                          onZoomOut={handleZoomOut}
                          onFitView={handleFitView}
                          onFocusUser={
                            currentUserNodeId && nodeMap.has(currentUserNodeId)
                              ? handleFocusUser
                              : undefined
                          }
                          tagTypes={nodeTagTypes}
                          visibleTagTypes={visibleTagTypesSet}
                          onToggleTagType={toggleTagType}
                          tagTypeLabels={nodeTagTypeLabels}
                          labels={controlLabels}
                        />
                      </div>
                    )}

                    {detailPanelEnabled &&
                      detailNode &&
                      detailPanel &&
                      (() => {
                        const config = detailPanel(detailNode as GraphNode<T>)
                        // TS can't narrow discriminated unions through JSX
                        // spreads — config has the correct variant props, the
                        // assertion is safe.
                        const panelProps = {
                          ...config,
                          open: detailOpen,
                          initialWidth: detailPanelWidth,
                          graphId,
                          ariaLabel: detailPanelAriaLabel,
                          onClose: () => setDetailNodeId(null),
                        } as F0GraphDetailPanelProps
                        return (
                          <div data-no-spark>
                            <F0GraphDetailPanel {...panelProps} />
                          </div>
                        )
                      })()}
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

// ─── Public component (wraps in ReactFlowProvider) ─────────────
export function F0Graph<T = unknown>(props: F0GraphProps<T>) {
  return (
    <ReactFlowProvider>
      <F0GraphInner {...props} />
    </ReactFlowProvider>
  )
}

F0Graph.displayName = "F0Graph"
