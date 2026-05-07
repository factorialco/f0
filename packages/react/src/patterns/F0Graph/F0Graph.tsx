import {
  Background,
  BackgroundVariant,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Node as RFNode,
  type Edge as RFEdge,
  type NodeTypes,
  type EdgeTypes,
  type NodeProps,
  type Viewport,
} from "@xyflow/react"
import { motion } from "motion/react"
import {
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react"

import { F0Button } from "@/components/F0Button"
import { Minimize } from "@/icons/app"
import { cn } from "@/lib/utils"

import type {
  GraphEdge,
  GraphNode,
  LayoutDirection,
  TreeNode,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
} from "./types"

import { Search } from "../OneDataCollection/components/Search/Search"
import { ClickSpark } from "./ClickSpark"
import { F0GraphContext, type F0GraphContextValue } from "./context"
import {
  F0GraphZoomContext,
  F0GraphExpandContext,
  F0GraphSelectionContext,
  F0GraphActionsContext,
} from "./context/index"
import { F0GraphControls } from "./F0GraphControls"
import { F0GraphEdge } from "./F0GraphEdge"
import { F0GraphExpander } from "./F0GraphExpander"
import { F0GraphNode } from "./F0GraphNode"
import "./F0Graph.css"
import { useGraphZoomLevel } from "./hooks/useGraphZoomLevel"
import { useLayoutEngine } from "./hooks/useLayoutEngine"
import { useLazyTree } from "./hooks/useLazyTree"
import { useTreeBuilder } from "./hooks/useTreeBuilder"

// ─── Props ─────────────────────────────────────────────────────
export interface F0GraphProps<T = unknown> {
  // ---- Data (full tree mode) ----
  nodes?: GraphNode<T>[]
  edges?: GraphEdge[]

  // ---- Data (lazy tree mode) ----
  rootNodes?: GraphNode<T>[]
  loadChildren?: (nodeId: string) => Promise<GraphNode<T>[]>

  // ---- Rendering ----
  renderNode: (node: GraphNode<T>, zoomLevel: ZoomLevel) => ReactNode
  direction?: LayoutDirection
  defaultDirection?: LayoutDirection

  // ---- Zoom ----
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  defaultZoom?: number
  minZoom?: number
  maxZoom?: number

  // ---- Expand/collapse ----
  expandedNodes?: Set<string>
  defaultExpandedNodes?: Set<string>
  defaultExpandDepth?: number
  onExpandToggle?: (nodeId: string, expanded: boolean) => void

  // ---- Selection ----
  selectionMode?: "single" | "multi" | "none"
  selectedNodes?: Set<string>
  onNodeSelect?: (nodeId: string, selected: boolean) => void

  // ---- Navigation ----
  focusedNode?: string
  highlightedNodes?: Set<string>

  // ---- Layout ----
  fullScreen?: boolean

  // ---- Search ----
  searchValue?: string
  onSearchChange?: (value: string | undefined) => void
  searchLoading?: boolean

  // ---- Controls ----
  showControls?: boolean
  showMinimap?: boolean

  // ---- Callbacks ----
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
  onVisibleNodesChange?: (count: number) => void
}

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
interface GraphNodeData extends Record<string, unknown> {
  graphNode: GraphNode<unknown>
  renderNode: (node: GraphNode<unknown>, zoomLevel: ZoomLevel) => ReactNode
}

type GraphRFNode = RFNode<GraphNodeData>

// Discrete zoom compensation: fixed scale per zoom level, animated by motion.dev.
// Nodes stay constant size within a level — only change at boundaries.
const ZOOM_SCALE: Record<ZoomLevel, number> = {
  detail: 1,
  compact: 1,
  dot: 1,
}

function F0GraphNodeWrapperInner({ data, id }: NodeProps<GraphRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const expandCtx = useF0GraphExpandInternal()
  const selectionCtx = useF0GraphSelectionInternal()
  const actionsCtx = useF0GraphActionsInternal()
  if (!zoomCtx || !expandCtx || !selectionCtx || !actionsCtx) return null

  const { zoomLevel } = zoomCtx
  const { expandedNodes } = expandCtx
  const { selectedNodes, highlightedNodes } = selectionCtx
  const { toggleExpand, selectNode } = actionsCtx
  const { graphNode, renderNode } = data as GraphNodeData
  const compensationScale = ZOOM_SCALE[zoomLevel]

  const isExpanded = expandedNodes.has(id)
  const isSelected = selectedNodes.has(id)
  const isHighlighted = highlightedNodes.has(id)

  const nodeState = isSelected
    ? "selected"
    : isHighlighted
      ? "highlighted"
      : "default"

  const variant =
    zoomLevel === "dot" ? "dot" : zoomLevel === "compact" ? "compact" : "detail"

  const hasChildren = (graphNode.childrenCount ?? 0) > 0

  return (
    <>
      <Handle type="target" position={Position.Top} className="!invisible" />
      <div
        className="pointer-events-none flex items-center justify-center"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          className="pointer-events-auto"
          animate={{ scale: compensationScale }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            transformOrigin: "center center",
            maxWidth: "calc(100% - 20px)",
          }}
        >
          <F0GraphNode
            variant={variant}
            state={nodeState}
            expanded={isExpanded}
            level={1}
            hasChildren={hasChildren}
            childrenCount={graphNode.childrenCount}
            onExpandToggle={() => toggleExpand(id)}
            onClick={() => {
              selectNode(id)
            }}
          >
            {renderNode(graphNode, zoomLevel)}
          </F0GraphNode>
        </motion.div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!invisible" />
    </>
  )
}

F0GraphNodeWrapperInner.displayName = "F0GraphNodeWrapper"

const F0GraphNodeWrapper = memo(F0GraphNodeWrapperInner, (prev, next) => {
  if (prev.id !== next.id) return false
  const prevData = prev.data as GraphNodeData
  const nextData = next.data as GraphNodeData
  if (prevData.graphNode !== nextData.graphNode) return false
  // renderNode is stabilized by Fix 2 — always the same reference
  if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
  if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
  return true
})

// ─── Expander Node for React Flow ──────────────────────────────
interface ExpanderNodeData {
  [key: string]: unknown
  avatars: { firstName: string; lastName: string; src?: string }[]
  count: number
  expanded: boolean
  parentId: string
  parentWidth: number
}

type ExpanderRFNode = RFNode<ExpanderNodeData>

const EXPANDER_SIZE: Record<ZoomLevel, number> = {
  detail: 32,
  compact: 48,
  dot: 72,
}

const EXPANDER_Y_OFFSET_BY_ZOOM: Record<ZoomLevel, number> = {
  detail: 18,
  compact: 18,
  dot: 72,
}

function F0GraphExpanderWrapperInner({
  data,
  id: _id,
}: NodeProps<ExpanderRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const expandCtx = useF0GraphExpandInternal()
  const actionsCtx = useF0GraphActionsInternal()
  if (!zoomCtx || !expandCtx || !actionsCtx) return null

  const { avatars, count, parentId, parentWidth } = data as ExpanderNodeData
  const expanded = expandCtx.expandedNodes.has(parentId)
  const expanderSize = EXPANDER_SIZE[zoomCtx.zoomLevel]

  return (
    <>
      <Handle type="target" position={Position.Top} className="!invisible" />
      <div
        className="pointer-events-auto flex items-start justify-center"
        style={{ width: parentWidth, height: 80 }}
      >
        <F0GraphExpander
          avatars={avatars}
          count={count}
          expanded={expanded}
          size={expanderSize}
          onClick={() => actionsCtx.toggleExpand(parentId)}
        />
      </div>
      <Handle type="source" position={Position.Bottom} className="!invisible" />
    </>
  )
}

F0GraphExpanderWrapperInner.displayName = "F0GraphExpanderWrapper"

const F0GraphExpanderWrapper = memo(
  F0GraphExpanderWrapperInner,
  (prev, next) => {
    if (prev.id !== next.id) return false
    const prevData = prev.data as ExpanderNodeData
    const nextData = next.data as ExpanderNodeData
    if (prevData.parentId !== nextData.parentId) return false
    if (prevData.count !== nextData.count) return false
    if (prevData.parentWidth !== nextData.parentWidth) return false
    if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
    if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
    return true
  }
)

// ─── Collapser Node for React Flow ─────────────────────────────
interface CollapserNodeData {
  [key: string]: unknown
  parentId: string
  parentWidth: number
}

type CollapserRFNode = RFNode<CollapserNodeData>

function F0GraphCollapserWrapperInner({ data }: NodeProps<CollapserRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const actionsCtx = useF0GraphActionsInternal()
  if (!zoomCtx || !actionsCtx) return null

  const { parentId, parentWidth } = data as CollapserNodeData
  if (zoomCtx.zoomLevel === "dot") return null

  return (
    <>
      <Handle type="target" position={Position.Top} className="!invisible" />
      <div
        className="group pointer-events-auto flex items-start justify-center pt-2"
        style={{ width: parentWidth, height: 80 }}
      >
        <div className="invisible backdrop-blur-[120px] group-hover:visible">
          <F0Button
            variant="neutral"
            size="sm"
            label="Collapse children"
            icon={Minimize}
            hideLabel
            onClick={() => actionsCtx.toggleExpand(parentId)}
          />
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!invisible" />
    </>
  )
}

F0GraphCollapserWrapperInner.displayName = "F0GraphCollapserWrapper"

const F0GraphCollapserWrapper = memo(
  F0GraphCollapserWrapperInner,
  (prev, next) => {
    if (prev.id !== next.id) return false
    const prevData = prev.data as CollapserNodeData
    const nextData = next.data as CollapserNodeData
    if (prevData.parentId !== nextData.parentId) return false
    if (prevData.parentWidth !== nextData.parentWidth) return false
    if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
    if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
    return true
  }
)

// ─── Internal context hooks (non-throwing, for node wrappers) ──
import {
  useF0GraphZoomInternal,
  useF0GraphExpandInternal,
  useF0GraphSelectionInternal,
  useF0GraphActionsInternal,
} from "./context/index"

// ─── Node & edge type maps ─────────────────────────────────────
const nodeTypes: NodeTypes = {
  graphNode: F0GraphNodeWrapper as unknown as NodeTypes[string],
  expanderNode: F0GraphExpanderWrapper as unknown as NodeTypes[string],
  collapserNode: F0GraphCollapserWrapper as unknown as NodeTypes[string],
}

const edgeTypes: EdgeTypes = {
  graphEdge: F0GraphEdge as unknown as EdgeTypes[string],
}

// ─── Inner component (needs ReactFlow hooks) ───────────────────
function F0GraphInner<T = unknown>(props: F0GraphProps<T>) {
  const {
    nodes: nodesProp,
    edges: edgesProp,
    rootNodes,
    loadChildren,
    renderNode,
    direction: controlledDirection,
    defaultDirection = "TB",
    zoomPreset,
    zoomThresholds,
    defaultZoom = 1,
    minZoom = 0.01,
    maxZoom = 2,
    expandedNodes: controlledExpanded,
    defaultExpandedNodes,
    defaultExpandDepth,
    onExpandToggle,
    selectionMode = "single",
    selectedNodes: controlledSelected,
    onNodeSelect,
    focusedNode,
    highlightedNodes: highlightedProp,
    fullScreen = true,
    searchValue,
    onSearchChange,
    searchLoading,
    showControls = false,
    showMinimap = false,
    onZoomLevelChange,
    onViewportChange,
  } = props

  const reactFlow = useReactFlow()

  // ── Viewport zoom (tracked via onViewportChange to avoid useViewport re-render churn) ──
  const [currentZoom, setCurrentZoom] = useState(defaultZoom)

  // ── Direction state ──
  const [internalDirection] = useState<LayoutDirection>(defaultDirection)
  const direction = controlledDirection ?? internalDirection

  // ── Stabilize renderNode: store in ref so rfNodes deps don't include the function ──
  const renderNodeRef = useRef(renderNode)
  renderNodeRef.current = renderNode

  const stableRenderNode = useCallback(
    (node: GraphNode<unknown>, zl: ZoomLevel): ReactNode =>
      renderNodeRef.current(node as GraphNode<T>, zl),
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
  const resolvedNodes: GraphNode<T>[] = isLazyMode
    ? lazyTree.nodes
    : (nodesProp ?? [])

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
  const highlightedNodes = highlightedProp ?? new Set<string>()

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

  // Notify parent of visible node count changes
  useEffect(() => {
    props.onVisibleNodesChange?.(visibleTreeNodes.length)
  }, [visibleTreeNodes.length, props.onVisibleNodesChange])

  // ── Expander data: for each visible parent with children, create an expander ──
  const expanderMap = useMemo(() => {
    const map = new Map<
      string,
      {
        expanderId: string
        avatars: { firstName: string; lastName: string; src?: string }[]
        count: number
        childIds: string[]
      }
    >()

    for (const treeNode of visibleTreeNodes) {
      if (treeNode.childrenCount > 0 && !expandedNodes.has(treeNode.id)) {
        const childIds = expandedNodes.has(treeNode.id)
          ? treeNode.children.map((c) => c.id)
          : []
        map.set(treeNode.id, {
          expanderId: `expander-${treeNode.id}`,
          avatars: [],
          count: treeNode.childrenCount,
          childIds,
        })
      }
    }

    return map
  }, [visibleTreeNodes, expandedNodes])

  // ── Edges ──
  const resolvedEdges = useMemo((): GraphEdge[] => {
    if (edgesProp && edgesProp.length > 0) return edgesProp
    return deriveEdgesFromTree(roots)
  }, [edgesProp, roots])

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

  const layoutEngine = useLayoutEngine({ direction })
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
    const BASE_W = 256
    const BASE_H = 56

    const yStretch = 1

    const graphRfNodes: RFNode[] = visibleTreeNodes.map((treeNode): RFNode => {
      const pos = positionMap.get(treeNode.id)
      const graphNode: GraphNode<T> = {
        id: treeNode.id,
        parentId: treeNode.parentId,
        data: treeNode.data,
        childrenCount: treeNode.childrenCount,
        childrenLoaded: treeNode.childrenLoaded,
      }

      return {
        id: treeNode.id,
        type: "graphNode",
        position: {
          x: (pos?.x ?? 0) + anchorDx,
          y: (pos?.y ?? 0) * yStretch + anchorDy,
        },
        width: BASE_W,
        height: BASE_H,
        data: {
          graphNode,
          renderNode: stableRenderNode,
        } as GraphNodeData,
      }
    })

    // Expanders are not part of the layout tree; they're positioned
    // manually below their parent for visual consistency
    const expanderRfNodes: RFNode[] = expanderNodes.map((exp): RFNode => {
      const parentPos = positionMap.get(exp.parentId)
      const parentNode = parentPos ?? { x: 0, y: 0, width: 256, height: 56 }
      const ph = parentNode.height ?? 56
      return {
        id: exp.id,
        type: "expanderNode",
        position: {
          x: parentNode.x + anchorDx,
          y: parentNode.y * yStretch + ph + EXPANDER_Y_OFFSET + anchorDy,
        },
        data: {
          avatars: exp.avatars,
          count: exp.count,
          expanded: expandedNodes.has(exp.parentId),
          parentId: exp.parentId,
          parentWidth: BASE_W,
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
        const ph = parentPos?.height ?? 56

        return {
          id: `collapser-${parent.id}`,
          type: "collapserNode",
          zIndex: 10,
          position: {
            x: px + anchorDx,
            y: py * yStretch + ph + EXPANDER_Y_OFFSET - 6 + anchorDy,
          },
          data: {
            parentId: parent.id,
            parentWidth: BASE_W,
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
  ])

  // ── Build React Flow edges ──
  const rfEdges = useMemo((): RFEdge[] => {
    // Parents that have a collapser button sitting on their outgoing edges
    const parentsWithCollapsers = new Set(
      visibleTreeNodes
        .filter((n) => expandedNodes.has(n.id) && n.children.length > 0)
        .map((n) => n.id)
    )

    return visibleEdges.map(
      (edge): RFEdge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: "graphEdge",
        data: {
          showDot:
            !edge.target.startsWith("expander-") &&
            !edge.source.startsWith("expander-") &&
            !parentsWithCollapsers.has(edge.source),
        },
      })
    )
  }, [visibleEdges, visibleTreeNodes, expandedNodes])

  // ── Expand / collapse ──
  const toggleExpand = useCallback(
    (nodeId: string) => {
      const wasExpanded = expandedNodes.has(nodeId)

      // Track which node to anchor
      anchorNodeRef.current = nodeId

      if (!controlledExpanded) {
        setInternalExpanded((prev) => {
          const next = new Set(prev)
          if (wasExpanded) {
            next.delete(nodeId)
          } else {
            next.add(nodeId)
          }
          return next
        })
      }

      // Lazy mode: trigger fetch when expanding
      if (isLazyMode && !wasExpanded) {
        const treeNode = nodeMap.get(nodeId)
        if (treeNode && !treeNode.childrenLoaded) {
          lazyTree.expandNode(nodeId)
        }
      }

      onExpandToggle?.(nodeId, !wasExpanded)
    },
    [
      expandedNodes,
      controlledExpanded,
      onExpandToggle,
      isLazyMode,
      nodeMap,
      lazyTree,
    ]
  )

  // ── Selection (focus semantics: click selects, click again keeps, pane click clears) ──
  const selectNode = useCallback(
    (nodeId: string) => {
      if (selectionMode === "none") return

      const wasSelected = selectedNodes.has(nodeId)
      if (wasSelected) return // already focused — no toggle

      if (!controlledSelected) {
        setInternalSelected((prev) => {
          if (selectionMode === "single") {
            return new Set([nodeId])
          }
          // multi
          const next = new Set(prev)
          next.add(nodeId)
          return next
        })
      }

      onNodeSelect?.(nodeId, true)
    },
    [selectionMode, selectedNodes, controlledSelected, onNodeSelect]
  )

  // ── Interaction mode (select vs pan) ──
  const [interactionMode, setInteractionMode] = useState<"select" | "pan">(
    "select"
  )

  const containerRef = useRef<HTMLDivElement>(null)

  // ── Escape to clear focus and selection ──
  const clearSelection = useCallback(() => {
    if (!controlledSelected) {
      setInternalSelected(new Set())
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }, [controlledSelected])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        clearSelection()
      }
    },
    [clearSelection]
  )

  // ── Focus node ──
  useEffect(() => {
    if (focusedNode) {
      // Slight delay to allow layout to settle
      const timer = setTimeout(() => {
        reactFlow.fitView({
          nodes: [{ id: focusedNode }],
          duration: 300,
          padding: 0.5,
        })
      }, 100)
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
    reactFlow.fitView({ duration: 400, padding: 0.1 })
  }, [reactFlow])

  // ── Split context values (for performance — wrappers subscribe to only what they need) ──
  const zoomContextValue = useMemo(
    () => ({ zoomLevel, currentZoom }),
    [zoomLevel, currentZoom]
  )

  const expandContextValue = useMemo(() => ({ expandedNodes }), [expandedNodes])

  const selectionContextValue = useMemo(
    () => ({ selectedNodes, highlightedNodes }),
    [selectedNodes, highlightedNodes]
  )

  const actionsContextValue = useMemo(
    () => ({ toggleExpand, selectNode }),
    [toggleExpand, selectNode]
  )

  // ── Composite context value (legacy — re-renders on any change) ──
  const contextValue = useMemo(
    (): F0GraphContextValue => ({
      zoomLevel,
      currentZoom,
      expandedNodes,
      selectedNodes,
      highlightedNodes,
      toggleExpand,
      selectNode,
    }),
    [
      zoomLevel,
      currentZoom,
      expandedNodes,
      selectedNodes,
      highlightedNodes,
      toggleExpand,
      selectNode,
    ]
  )

  return (
    <F0GraphActionsContext.Provider value={actionsContextValue}>
      <F0GraphZoomContext.Provider value={zoomContextValue}>
        <F0GraphExpandContext.Provider value={expandContextValue}>
          <F0GraphSelectionContext.Provider value={selectionContextValue}>
            <F0GraphContext.Provider value={contextValue}>
              <ClickSpark
                sparkColor="hsl(var(--neutral-40))"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
                <div
                  ref={containerRef}
                  className={cn(
                    "f0-graph relative bg-f1-background-tertiary",
                    fullScreen
                      ? "h-full w-full"
                      : "mx-3 my-1 h-[calc(100%-8px)] w-[calc(100%-24px)] overflow-hidden rounded-xl border border-f1-border-secondary"
                  )}
                  role="tree"
                  aria-label="Graph view"
                  onKeyDown={handleKeyDown}
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
                    proOptions={{ hideAttribution: true }}
                    fitView
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={false}
                    panOnDrag
                    zoomOnScroll
                    zoomOnPinch
                    className={
                      interactionMode === "pan"
                        ? "f0-graph--pan-mode"
                        : undefined
                    }
                  >
                    <Background
                      id="f0-graph-bg"
                      variant={BackgroundVariant.Dots}
                      gap={32}
                      size={4}
                      bgColor="hsl(var(--neutral-5) / 0.7)"
                      color="hsl(var(--neutral-10))"
                    />
                    {showMinimap && (
                      <MiniMap nodeStrokeWidth={3} pannable zoomable />
                    )}
                  </ReactFlow>

                  {onSearchChange && (
                    <div className="absolute left-3 top-3 z-10">
                      <Search
                        value={searchValue}
                        onChange={onSearchChange}
                        loading={searchLoading}
                      />
                    </div>
                  )}

                  {showControls && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <F0GraphControls
                        mode={interactionMode}
                        onModeChange={setInteractionMode}
                        onZoomIn={handleZoomIn}
                        onZoomOut={handleZoomOut}
                        onFitView={handleFitView}
                      />
                    </div>
                  )}
                </div>
              </ClickSpark>
            </F0GraphContext.Provider>
          </F0GraphSelectionContext.Provider>
        </F0GraphExpandContext.Provider>
      </F0GraphZoomContext.Provider>
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
