import {
  Position,
  type Edge as RFEdge,
  type Node as RFNode,
} from "@xyflow/react"
import {
  type MutableRefObject,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"

import type { F0GraphNodeTagColumn } from "../components/F0GraphNode"
import type { F0GraphNodeRenderContext } from "../F0Graph"
import type {
  GraphEdge,
  GraphNode,
  LayoutDirection,
  LayoutEngine,
  PositionedNode,
  TreeNode,
  ZoomLevel,
} from "../types"

import {
  BACKGROUND_DOT_GAP,
  COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM,
  STACKED_NODE_HEIGHT,
} from "../constants"
import {
  EXPANDER_Y_OFFSET_BY_ZOOM,
  EXPANDER_Y_OFFSET_STACKED_BY_ZOOM,
  type CollapserNodeData,
  type ExpanderNodeData,
  type GraphNodeData,
} from "../internal/ReactFlowAdapters"
import {
  collectVisibleNodes,
  computeLayoutBounds,
  deriveEdgesFromTree,
  nodeIntersectsRect,
  resolveStackedParents,
} from "../utils"
import { useLayoutEngine } from "./useLayoutEngine"
import { useViewportGeometry } from "./useViewportGeometry"

// Extra vertical room for the tags below the pill. Each row of small F0Tag
// pills is ~`TAG_ROW_HEIGHT`; when several tag types are visible they wrap to
// multiple rows, so we reserve height per estimated row to keep the expander
// (and the next rank) below the metadata instead of overlapping it.
const TAG_ROW_HEIGHT = 36
const ESTIMATED_TAGS_PER_ROW = 2

interface UseGraphRenderModelOptions<T> {
  roots: TreeNode<T>[]
  nodeMap: Map<string, TreeNode<T>>
  expandedNodes: Set<string>
  anchorNodeRef: MutableRefObject<string | null>
  /**
   * Called (before paint) when a toggle-driven reflow repositions the anchor
   * node by `(dx, dy)` in flow-space. The owner translates the viewport by the
   * same amount so the anchor stays visually fixed — node positions stay raw.
   */
  onAnchorReflow?: (dx: number, dy: number) => void
  resolvedEdgesProp?: GraphEdge[]
  stableRenderNode: (
    node: GraphNode<unknown>,
    ctx: F0GraphNodeRenderContext
  ) => ReactNode
  nodeTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  visibleTagTypesSet: Set<F0GraphNodeTagColumn>
  reserveTagRow?: boolean
  nodeWidthProp?: number
  nodeHeightProp?: number
  stackedNodeHeightProp?: number
  stackedNodeGapProp?: number
  layoutEngineProp?: LayoutEngine
  zoomLevel: ZoomLevel
  direction: LayoutDirection
  controlLabels?: { collapseChildren?: string }
  hoveredEdgeId: string | null
  /**
   * Opt-in node-array windowing: when true, only the React Flow nodes whose
   * layout box intersects the current viewport (plus `nodeWindowPadding`) are
   * materialized. The layout itself is still computed over every visible node,
   * so positions, bounds and fit-view stay correct.
   */
  enableNodeWindowing?: boolean
  /** Flow-space px grown around the viewport when windowing. */
  nodeWindowPadding?: number
}

export interface UseGraphRenderModelResult<T> {
  visibleTreeNodes: TreeNode<T>[]
  rfNodes: RFNode[]
  rfEdges: RFEdge[]
  reservedTagHeight: number
  tagsAffectLayout: boolean
  /**
   * Number of `graphNode` React Flow nodes actually handed to React Flow. Equals
   * the visible count when windowing is off; approximates the on-screen count
   * when `enableNodeWindowing` is on.
   */
  renderedNodeCount: number
  /** Ids of those `graphNode`s — for viewport-driven data loading. */
  renderedNodeIds: string[]
  /** Bounding box of the full layout (`null` when empty), for fit-view. */
  contentBounds: { x: number; y: number; width: number; height: number } | null
  /** Layout position of a node id, regardless of whether it is windowed out. */
  getNodePosition: (id: string) => PositionedNode | undefined
}

/**
 * Turns the resolved tree + interaction state into the React Flow render model:
 * visible nodes, edges (rewritten through expanders), the computed layout, the
 * viewport anchor offset that keeps the view stable on expand/collapse, and the
 * final `rfNodes` / `rfEdges` arrays.
 */
export function useGraphRenderModel<T>({
  roots,
  nodeMap,
  expandedNodes,
  anchorNodeRef,
  onAnchorReflow,
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
  enableNodeWindowing,
  nodeWindowPadding,
}: UseGraphRenderModelOptions<T>): UseGraphRenderModelResult<T> {
  // ── Visible nodes (respecting expand state) ──
  const visibleTreeNodes = useMemo(
    () => collectVisibleNodes(roots, expandedNodes),
    [roots, expandedNodes]
  )

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

  // ── Expander data ──
  // An expander is shown for a node with children that is either collapsed
  // (click to open) OR expanded but still waiting for its children to arrive
  // (shown with a spinner). Keeping it visible during that load avoids the
  // blank gap between the expand click and the children appearing.
  const expanderMap = useMemo(() => {
    const map = new Map<
      string,
      {
        expanderId: string
        avatars: { firstName: string; lastName: string; src?: string }[]
        count: number
        loading: boolean
      }
    >()

    for (const treeNode of visibleTreeNodes) {
      if (treeNode.childrenCount === 0) continue
      const expanded = expandedNodes.has(treeNode.id)
      const loading = expanded && treeNode.children.length === 0
      if (!expanded || loading) {
        map.set(treeNode.id, {
          expanderId: `expander-${treeNode.id}`,
          avatars: [],
          count: treeNode.childrenCount,
          loading,
        })
      }
    }

    return map
  }, [visibleTreeNodes, expandedNodes])

  // ── Stacked groups ── Single source of truth for "does this group stack?",
  // shared by the layout input, the edge pass and the node render context.
  const { stackedParentIds, stackedChildIndex } = useMemo(
    () => resolveStackedParents(visibleTreeNodes),
    [visibleTreeNodes]
  )

  // ── Edges ──
  const resolvedEdges = useMemo((): GraphEdge[] => {
    if (resolvedEdgesProp && resolvedEdgesProp.length > 0)
      return resolvedEdgesProp
    return deriveEdgesFromTree(roots)
  }, [resolvedEdgesProp, roots])

  // ── Visible edges + expander nodes ──
  const { visibleEdges, expanderNodes } = useMemo(() => {
    const visibleIds = new Set(visibleTreeNodes.map((n) => n.id))
    const edges: GraphEdge[] = []
    const expNodes: Array<{
      id: string
      parentId: string
      avatars: { firstName: string; lastName: string; src?: string }[]
      count: number
      loading: boolean
    }> = []

    // An expander hangs below every visible collapsed parent that HAS children
    // (per `childrenCount`). This is driven by `expanderMap`, NOT by edges, so
    // a node shows its expander even when its children have not been loaded yet
    // (lazy trees, or consumers that load children on demand). Relying on a
    // derived parent→child edge would hide the affordance until a fetch ran.
    const parentsWithExpanders = new Set(expanderMap.keys())
    for (const [parentId, exp] of expanderMap) {
      if (!visibleIds.has(parentId)) continue
      edges.push({
        id: `${parentId}->${exp.expanderId}`,
        source: parentId,
        target: exp.expanderId,
      })
      expNodes.push({
        id: exp.expanderId,
        parentId,
        avatars: exp.avatars,
        count: exp.count,
        loading: exp.loading,
      })
    }

    // Plain edges between two visible nodes. Skip any whose source is collapsed
    // (its children are hidden behind the expander created above).
    for (const edge of resolvedEdges) {
      if (parentsWithExpanders.has(edge.source)) continue
      if (visibleIds.has(edge.source) && visibleIds.has(edge.target)) {
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
    // Hand the engine the RESOLVED flag, never the raw request: a group whose
    // children can expand falls back to the normal fan-out, and the engine must
    // not see `stackChildren` on it (it would lay the children out as a column
    // with nowhere to hang their subtrees). Copies are made only for the nodes
    // whose flag actually changes, so identity — and the layout memo — holds for
    // every other node.
    const treeNodes = visibleTreeNodes.map((node) => {
      const stacked = stackedParentIds.has(node.id)
      if (Boolean(node.stackChildren) === stacked) return node
      return { ...node, stackChildren: stacked }
    })
    return [...treeNodes, ...expanderTreeNodes]
  }, [visibleTreeNodes, expanderNodes, stackedParentIds])

  // ── Layout edges: include expander edges so the engine sees the full graph ──
  const layoutEdges = useMemo(() => visibleEdges, [visibleEdges])

  // The tag row only contributes to layout when the consumer opts into the
  // popover (`nodeTagTypes`) and at least one type is currently visible, or
  // when `reserveTagRow` is explicitly set (e.g. tags rendered via
  // `renderNode` without using the popover). Inflating the box otherwise
  // would push the source handle and the expander below the pill.
  const tagsAffectLayout =
    reserveTagRow ?? (nodeTagTypes ? visibleTagTypesSet.size > 0 : false)
  // Same-type tags collapse to a single pill, so the visible tag-type count is
  // a good proxy for how many pills (and therefore rows) are rendered.
  const visibleTagCount = nodeTagTypes ? visibleTagTypesSet.size : 1
  const tagRowCount = tagsAffectLayout
    ? Math.max(1, Math.ceil(visibleTagCount / ESTIMATED_TAGS_PER_ROW))
    : 0
  const reservedTagHeight = tagRowCount * TAG_ROW_HEIGHT
  const effectiveNodeHeight = (nodeHeightProp ?? 56) + reservedTagHeight
  // A stacked row's band takes the same tag reservation as a card's rect. The
  // strip itself stays `stackedNodeHeight` (the render config publishes that
  // untouched); the extra room is where the tags below it go, so the next row
  // starts under them instead of on top of them.
  const effectiveStackedHeight =
    (stackedNodeHeightProp ?? STACKED_NODE_HEIGHT) + reservedTagHeight

  const builtInEngine = useLayoutEngine({
    nodeWidth: nodeWidthProp,
    nodeHeight: effectiveNodeHeight,
    stackedNodeHeight: effectiveStackedHeight,
    stackedNodeGap: stackedNodeGapProp,
    snapGrid: BACKGROUND_DOT_GAP,
  })
  const layoutEngine = layoutEngineProp ?? builtInEngine
  const layout = useMemo(
    () => layoutEngine.computeLayout(layoutNodes, layoutEdges, direction),
    [layoutEngine, layoutNodes, layoutEdges, direction]
  )

  // Positions keyed by id — shared by rfNodes, windowing and navigation.
  const positionMap = useMemo(
    () => new Map(layout.nodes.map((pn) => [pn.id, pn])),
    [layout.nodes]
  )

  // Bounding box of the whole layout, so fit-view / fly-to can target the full
  // graph even when windowing has removed off-screen nodes from React Flow.
  const contentBounds = useMemo(
    () => computeLayoutBounds(layout.nodes),
    [layout.nodes]
  )

  const getNodePosition = useCallback(
    (id: string): PositionedNode | undefined => positionMap.get(id),
    [positionMap]
  )

  // Padded viewport rect in flow-space (null when windowing off or pre-measure).
  const viewportRect = useViewportGeometry({
    enabled: enableNodeWindowing ?? false,
    padding: nodeWindowPadding,
  })

  // Place expanders at the midpoint between parent bottom and where children would be.
  // Scales per zoom level (+100% each step) so the larger expander button remains
  // visually centered in its lane.
  const EXPANDER_Y_OFFSET = EXPANDER_Y_OFFSET_BY_ZOOM[zoomLevel]
  // A stacked column hangs in a shortened lane, so its affordance is centered
  // in that shorter gap instead of the full rank one.
  const EXPANDER_Y_OFFSET_STACKED = EXPANDER_Y_OFFSET_STACKED_BY_ZOOM[zoomLevel]
  const COLLAPSER_OFFSET_ADJUSTMENT =
    COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM[zoomLevel]

  // ── Anchor: keep the toggled node's position stable across reflows ──
  const prevPositionsRef = useRef<Map<string, { x: number; y: number }>>(
    new Map()
  )

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
  }, [layout.nodes, anchorNodeRef])

  // Keep the toggled node visually fixed across a reflow by translating the
  // VIEWPORT (not the node positions). When the layout engine repositions the
  // anchor — e.g. dagre re-centers a parent over its children, so collapsing
  // shifts the parent's x — the anchor's (dx, dy) delta is handed to
  // `onAnchorReflow`, which pans the camera by the same amount before paint.
  // Node positions stay raw, so `getNodePosition`/`contentBounds` (reveal, fit)
  // stay consistent, and there is no offset to "release" (the old node-offset
  // held the node for one commit then snapped back on the next — e.g. a node
  // windowing settle — leaving the root jumping to its natural position).
  //
  // In lazy mode an expand resolves in two phases (node marked expanded, then
  // children arrive asynchronously); the anchor is kept across both so the big
  // reflow when children appear is compensated too.
  useLayoutEffect(() => {
    const { dx, dy } = anchorOffset
    prevPositionsRef.current = new Map(
      layout.nodes.map((pn) => [pn.id, { x: pn.x, y: pn.y }])
    )
    const anchorId = anchorNodeRef.current
    if (anchorId) {
      if (dx !== 0 || dy !== 0) onAnchorReflow?.(dx, dy)
      const anchorNode = nodeMap.get(anchorId)
      const stillExpanding =
        anchorNode !== undefined &&
        expandedNodes.has(anchorId) &&
        anchorNode.childrenCount > 0 &&
        anchorNode.children.length === 0
      if (!stillExpanding) {
        anchorNodeRef.current = null
      }
    }
  }, [
    layout.nodes,
    anchorOffset,
    nodeMap,
    expandedNodes,
    anchorNodeRef,
    onAnchorReflow,
  ])

  // ── Node-array windowing ──
  // Ids of the LAYOUT nodes (graph pills + expanders) whose box intersects the
  // padded viewport. `null` means "no windowing" (feature off, or viewport not
  // yet measured) → render everything, which is also what the initial `fitView`
  // needs to frame the whole graph before the camera settles.
  //
  // Computed from the cheap layout positions (not the built rf nodes) so that
  // the rf-node construction below can materialize ONLY the windowed nodes —
  // keeping per-interaction work proportional to what's on screen, not to the
  // whole (potentially thousands-of-nodes) tree. This is the key to smooth
  // pan/zoom on large graphs: without it every pan cell-crossing and every
  // zoom-level change would rebuild an object per visible node.
  const windowedIds = useMemo((): Set<string> | null => {
    if (!enableNodeWindowing || !viewportRect) return null
    const fallbackWidth = nodeWidthProp ?? 256
    const ids = new Set<string>()
    for (const pn of layout.nodes) {
      if (
        nodeIntersectsRect(
          pn.x,
          pn.y,
          pn.width || fallbackWidth,
          pn.height || effectiveNodeHeight,
          viewportRect
        )
      ) {
        ids.add(pn.id)
      }
    }
    // Keep every windowed node connected to its ancestry: walk each windowed
    // node's parent chain up to the root and materialize those ancestors too,
    // even when they sit outside the viewport window. An edge only renders when
    // BOTH endpoints are windowed (see `rfEdges`), and a node only renders when
    // it is windowed (see `rfNodes`) — so without this a node whose parent
    // scrolled off-window loses its incoming edge and looks like a detached root
    // (the reporting line up to the CEO disappears). Bounded by tree DEPTH, not
    // breadth: windowed siblings share ancestors, so this adds a thin spine, not
    // a subtree. The walk stops as soon as it reaches an id already in the set,
    // so each ancestor is visited at most once (and it is cycle-safe).
    const base = Array.from(ids)
    for (const startId of base) {
      let parentId = nodeMap.get(startId)?.parentId ?? null
      while (parentId !== null && !ids.has(parentId)) {
        ids.add(parentId)
        parentId = nodeMap.get(parentId)?.parentId ?? null
      }
    }

    // Draw every edge that passes through the window. An edge's path enters the
    // viewport only when one of its endpoints sits inside it, so for each visible
    // edge with exactly one endpoint IN THE VIEWPORT (not merely materialized via
    // the ancestry spine), pull the other endpoint in too — React Flow can then
    // route the edge even when the layout pushed that endpoint off-viewport. This
    // keeps a visible parent's line to an off-screen child: expanding a wide node
    // spreads its siblings past the screen edge, and without this the parent
    // would look connected only to the child that stayed on screen. The reverse
    // (a visible child's line up to an off-screen parent) is already covered by
    // the ancestry walk above. Keyed on the VIEWPORT set — not `ids` — so an
    // off-screen spine ancestor does not drag in all of its children at every
    // level. A collapsed parent contributes only its expander-stub edge (its real
    // children aren't in `visibleEdges`), so closed subtrees stay windowed out.
    const viewportIds = new Set(base)
    for (const edge of visibleEdges) {
      const sourceIn = viewportIds.has(edge.source)
      const targetIn = viewportIds.has(edge.target)
      if (sourceIn !== targetIn) {
        ids.add(edge.source)
        ids.add(edge.target)
      }
    }
    return ids
  }, [
    enableNodeWindowing,
    viewportRect,
    visibleEdges,
    layout.nodes,
    nodeWidthProp,
    effectiveNodeHeight,
    nodeMap,
  ])

  // Identity-stable projections of tree nodes into the shape node wrappers
  // receive, keyed by node id. One entry per node ever materialized — the same
  // order of magnitude the tree itself already holds.
  const graphNodeCacheRef = useRef(new Map<string, GraphNode<T>>())

  // ── React Flow nodes ── Only the windowed nodes are materialized (all of them
  // when windowing is off). Building here — rather than building everything and
  // filtering — is what makes the work O(on-screen) instead of O(visible tree).
  const rfNodes = useMemo((): RFNode[] => {
    const BASE_W = nodeWidthProp ?? 256
    const BASE_H = effectiveNodeHeight
    const yStretch = 1
    // Collapsers aren't in `layout.nodes`; they sit adjacent to their parent
    // (well within the window padding), so they follow the parent's membership.
    const inWindow = (id: string): boolean =>
      !windowedIds || windowedIds.has(id)

    // Whether windowing is actually driving this render (a viewport is measured
    // and the feature is on). Only then do we seed `handles`/dimensions on the
    // nodes — see the handle geometry below. With windowing off, React Flow's own
    // `onlyRenderVisibleElements` is active, and marking nodes measured up front
    // would let it cull them before their real size is known; leaving it as-is
    // keeps the original non-windowed behavior untouched.
    const windowingActive = windowedIds !== null

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

    // Precomputed handle geometry so React Flow can route a node's edges on the
    // very commit the node is added — before its DOM handles are measured.
    // Without a `handles` array React Flow has no handle bounds for a freshly
    // windowed-in node, so `getEdgePosition` returns null and every edge touching
    // it is dropped from the DOM for that frame — connecting/reporting lines
    // flicker or vanish while panning a large/flat/deep tree. Providing the port
    // offsets lets React Flow derive the endpoint immediately; the real measured
    // handle bounds take over once the node's DOM mounts. Node dimensions are
    // supplied below (`width`/`height`) so the node also counts as "initialized".
    //
    // Built per box size rather than once, because a stacked row is shorter
    // than a node card — seeding it with the card's height would anchor its
    // handles below the row and bend the trunk edge into it.
    const handlesForBox = (w: number, h: number): RFNode["handles"] => {
      const handleOffset = (p: Position): { x: number; y: number } =>
        p === Position.Top
          ? { x: w / 2, y: 0 }
          : p === Position.Bottom
            ? { x: w / 2, y: h }
            : p === Position.Left
              ? { x: 0, y: h / 2 }
              : { x: w, y: h / 2 }
      return [
        {
          type: "source" as const,
          position: sourcePos,
          ...handleOffset(sourcePos),
          width: 1,
          height: 1,
        },
        {
          type: "target" as const,
          position: targetPos,
          ...handleOffset(targetPos),
          width: 1,
          height: 1,
        },
      ] as RFNode["handles"]
    }
    const graphNodeHandles = handlesForBox(BASE_W, BASE_H)

    const nodes: RFNode[] = []

    for (const treeNode of visibleTreeNodes) {
      if (!inWindow(treeNode.id)) continue
      const pos = positionMap.get(treeNode.id)

      // The node wrapper's `memo` compares `data.graphNode` by identity, so
      // building a fresh projection on every rebuild made that check fail
      // unconditionally — every windowing recompute re-rendered every on-screen
      // node, even when nothing about the node had changed. Reuse the previous
      // object whenever all projected fields are equal.
      const cached = graphNodeCacheRef.current.get(treeNode.id)
      let graphNode: GraphNode<T>
      if (
        cached !== undefined &&
        cached.parentId === treeNode.parentId &&
        cached.data === treeNode.data &&
        cached.childrenCount === treeNode.childrenCount &&
        cached.childrenLoaded === treeNode.childrenLoaded &&
        cached.dataLoaded === treeNode.dataLoaded
      ) {
        graphNode = cached
      } else {
        graphNode = {
          id: treeNode.id,
          parentId: treeNode.parentId,
          data: treeNode.data,
          childrenCount: treeNode.childrenCount,
          childrenLoaded: treeNode.childrenLoaded,
          dataLoaded: treeNode.dataLoaded,
        }
        graphNodeCacheRef.current.set(treeNode.id, graphNode)
      }
      const aria = ariaTreeInfo.get(treeNode.id)

      // aria-owns: only for expanded nodes, and only the children still in the
      // window (an entry pointing at a windowed-out node would be a dangling ref).
      let visibleChildIds: string[] | undefined
      if (expandedNodes.has(treeNode.id) && treeNode.children.length > 0) {
        const kept = treeNode.children
          .map((c) => c.id)
          .filter((id) => inWindow(id))
        visibleChildIds = kept.length > 0 ? kept : undefined
      }

      // A stacked row carries its own (shorter) box from the layout; every
      // other node uses the shared card size.
      const isStacked = stackedChildIndex.has(treeNode.id)
      const boxW = isStacked ? (pos?.width ?? BASE_W) : BASE_W
      const boxH = isStacked ? (pos?.height ?? BASE_H) : BASE_H

      nodes.push({
        id: treeNode.id,
        type: "graphNode",
        position: {
          x: pos?.x ?? 0,
          y: (pos?.y ?? 0) * yStretch,
        },
        width: boxW,
        // Only while windowing drives the render: seed the node's size and port
        // handles so React Flow can route its edges on the commit it is added,
        // before the DOM is measured (otherwise a freshly windowed-in node's
        // connecting lines drop for that frame). Omitted when windowing is off so
        // React Flow's own viewport culling keeps its original behavior.
        ...(windowingActive
          ? {
              height: boxH,
              handles: isStacked ? handlesForBox(boxW, boxH) : graphNodeHandles,
            }
          : null),
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        data: {
          graphNode,
          renderNode: stableRenderNode,
          ariaLevel: aria?.level ?? 1,
          ariaSetSize: aria?.setSize ?? 1,
          ariaPosInSet: aria?.posInSet ?? 1,
          visibleChildIds,
          stacked: isStacked || undefined,
        } as GraphNodeData,
      })
    }

    // Expanders are not part of the layout tree; they're positioned
    // manually adjacent to their parent on the "outgoing" edge of the layout.
    for (const exp of expanderNodes) {
      if (!inWindow(exp.id)) continue
      const parentPos = positionMap.get(exp.parentId)
      const parentNode = parentPos ?? {
        x: 0,
        y: 0,
        width: BASE_W,
        height: BASE_H,
      }
      const pw = parentNode.width ?? BASE_W
      const ph = parentNode.height ?? BASE_H
      const laneOffset = stackedParentIds.has(exp.parentId)
        ? EXPANDER_Y_OFFSET_STACKED
        : EXPANDER_Y_OFFSET
      const expX = isHorizontal
        ? direction === "LR"
          ? parentNode.x + pw + laneOffset
          : parentNode.x - pw
        : parentNode.x
      const expY = isHorizontal
        ? parentNode.y * yStretch
        : direction === "TB"
          ? parentNode.y * yStretch + ph + laneOffset
          : parentNode.y * yStretch - ph
      nodes.push({
        id: exp.id,
        type: "expanderNode",
        position: { x: expX, y: expY },
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        data: {
          avatars: exp.avatars,
          count: exp.count,
          expanded: expandedNodes.has(exp.parentId),
          parentId: exp.parentId,
          parentWidth: BASE_W,
          loading: exp.loading,
        } as ExpanderNodeData,
      })
    }

    // Collapser buttons for expanded parents with visible children.
    for (const parent of visibleTreeNodes) {
      if (!expandedNodes.has(parent.id) || parent.children.length === 0)
        continue
      if (!inWindow(parent.id)) continue
      const parentPos = positionMap.get(parent.id)
      const px = parentPos?.x ?? 0
      const py = parentPos?.y ?? 0
      const pw = parentPos?.width ?? BASE_W
      const ph = parentPos?.height ?? BASE_H
      const laneOffset = stackedParentIds.has(parent.id)
        ? EXPANDER_Y_OFFSET_STACKED
        : EXPANDER_Y_OFFSET
      const colX = isHorizontal
        ? direction === "LR"
          ? px + pw + laneOffset + COLLAPSER_OFFSET_ADJUSTMENT
          : px - pw
        : px
      const colY = isHorizontal
        ? py * yStretch
        : direction === "TB"
          ? py * yStretch + ph + laneOffset + COLLAPSER_OFFSET_ADJUSTMENT
          : py * yStretch - ph
      nodes.push({
        id: `collapser-${parent.id}`,
        type: "collapserNode",
        zIndex: 10,
        position: { x: colX, y: colY },
        sourcePosition: sourcePos,
        targetPosition: targetPos,
        data: {
          parentId: parent.id,
          parentWidth: BASE_W,
          collapseLabel: controlLabels?.collapseChildren,
          stacked: stackedParentIds.has(parent.id),
        } as CollapserNodeData,
      })
    }

    return nodes
  }, [
    windowedIds,
    positionMap,
    visibleTreeNodes,
    expanderNodes,
    expandedNodes,
    stableRenderNode,
    EXPANDER_Y_OFFSET,
    EXPANDER_Y_OFFSET_STACKED,
    COLLAPSER_OFFSET_ADJUSTMENT,
    stackedParentIds,
    nodeWidthProp,
    effectiveNodeHeight,
    direction,
    ariaTreeInfo,
    stackedChildIndex,
    controlLabels?.collapseChildren,
  ])

  // Ids of the graphNodes actually handed to React Flow (post-windowing) — feeds
  // the rendered-count callback and viewport-driven data loading.
  const renderedNodeIds = useMemo(
    () => rfNodes.filter((n) => n.type === "graphNode").map((n) => n.id),
    [rfNodes]
  )

  // ── Build React Flow edges ──
  const rfEdges = useMemo((): RFEdge[] => {
    // Parents that have a collapser button sitting on their outgoing edges
    const parentsWithCollapsers = new Set(
      visibleTreeNodes
        .filter((n) => expandedNodes.has(n.id) && n.children.length > 0)
        .map((n) => n.id)
    )

    // When windowing, drop edges whose endpoints aren't both materialized —
    // React Flow can't route an edge to a node that isn't in its store.
    const inWindow = (edge: GraphEdge): boolean =>
      !windowedIds ||
      (windowedIds.has(edge.source) && windowedIds.has(edge.target))

    // A stacked group is drawn as one trunk into the top of the column, not a
    // line per row: the rows read as a list belonging to the parent, and a
    // connector into each 40px row would be a ladder of stubs. Filtered HERE
    // rather than out of `visibleEdges` — the layout engine derives its
    // parent→child adjacency from that same list, so removing the edges earlier
    // would orphan every row below the first and scatter it as its own root.
    const drawn = (edge: GraphEdge): boolean =>
      (stackedChildIndex.get(edge.target) ?? 0) === 0

    return visibleEdges
      .filter(inWindow)
      .filter(drawn)
      .map((edge): RFEdge => {
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
  }, [
    visibleEdges,
    visibleTreeNodes,
    expandedNodes,
    hoveredEdgeId,
    windowedIds,
    stackedChildIndex,
  ])

  return {
    visibleTreeNodes,
    rfNodes,
    rfEdges,
    reservedTagHeight,
    tagsAffectLayout,
    renderedNodeCount: renderedNodeIds.length,
    renderedNodeIds,
    contentBounds,
    getNodePosition,
  }
}
