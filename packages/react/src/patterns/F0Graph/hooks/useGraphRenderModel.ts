import {
  Position,
  type Edge as RFEdge,
  type Node as RFNode,
} from "@xyflow/react"
import {
  type MutableRefObject,
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"

import {
  BACKGROUND_DOT_GAP,
  COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM,
} from "../constants"
import type { F0GraphNodeRenderContext } from "../F0Graph"
import type { F0GraphNodeTagType } from "../components/F0GraphNode"
import {
  EXPANDER_Y_OFFSET_BY_ZOOM,
  type CollapserNodeData,
  type ExpanderNodeData,
  type GraphNodeData,
} from "../internal/ReactFlowAdapters"
import type {
  GraphEdge,
  GraphNode,
  LayoutDirection,
  LayoutEngine,
  TreeNode,
  ZoomLevel,
} from "../types"
import { collectVisibleNodes, deriveEdgesFromTree } from "../utils"
import { useLayoutEngine } from "./useLayoutEngine"

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
  isLazyMode: boolean
  resolvedEdgesProp?: GraphEdge[]
  stableRenderNode: (
    node: GraphNode<unknown>,
    ctx: F0GraphNodeRenderContext
  ) => ReactNode
  nodeTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  visibleTagTypesSet: Set<F0GraphNodeTagType>
  reserveTagRow?: boolean
  nodeWidthProp?: number
  nodeHeightProp?: number
  layoutEngineProp?: LayoutEngine
  zoomLevel: ZoomLevel
  direction: LayoutDirection
  controlLabels?: { collapseChildren?: string }
  hoveredEdgeId: string | null
}

export interface UseGraphRenderModelResult<T> {
  visibleTreeNodes: TreeNode<T>[]
  rfNodes: RFNode[]
  rfEdges: RFEdge[]
  reservedTagHeight: number
  tagsAffectLayout: boolean
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
  isLazyMode,
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

  const builtInEngine = useLayoutEngine({
    nodeWidth: nodeWidthProp,
    nodeHeight: effectiveNodeHeight,
    snapGrid: BACKGROUND_DOT_GAP,
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

  // Persist positions and clear the anchor once the toggle has settled (safe for
  // strict mode). In lazy mode an expand resolves in two phases: the node is
  // marked expanded first, then its children arrive asynchronously. Clearing the
  // anchor on the first commit would leave the big reflow (when many children
  // appear) uncompensated and the view would jump. So keep the anchor until the
  // toggled node's children are actually loaded.
  useLayoutEffect(() => {
    const { dx, dy } = anchorOffset
    prevPositionsRef.current = new Map(
      layout.nodes.map((pn) => [pn.id, { x: pn.x + dx, y: pn.y + dy }])
    )
    const anchorId = anchorNodeRef.current
    if (anchorId) {
      const anchorNode = nodeMap.get(anchorId)
      const stillExpanding =
        isLazyMode &&
        anchorNode !== undefined &&
        expandedNodes.has(anchorId) &&
        !anchorNode.childrenLoaded
      if (!stillExpanding) {
        anchorNodeRef.current = null
      }
    }
  }, [
    layout.nodes,
    anchorOffset,
    nodeMap,
    expandedNodes,
    isLazyMode,
    anchorNodeRef,
  ])

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
    COLLAPSER_OFFSET_ADJUSTMENT,
    nodeWidthProp,
    effectiveNodeHeight,
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

  return {
    visibleTreeNodes,
    rfNodes,
    rfEdges,
    reservedTagHeight,
    tagsAffectLayout,
  }
}
