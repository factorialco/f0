import { useMemo } from "react"

import type {
  GraphEdge,
  LayoutDirection,
  LayoutEngine,
  LayoutResult,
  PositionedEdge,
  PositionedNode,
  TreeNode,
} from "../types"

/**
 * F0Graph layout engine — custom hierarchical tree layout.
 *
 * **Why not dagre / ELK?**
 * React Flow's official layouting guide recommends dagre for trees
 * (https://reactflow.dev/learn/layouting/layouting). We deliberately do not
 * use it. Dagre's barycenter pass re-derives sibling order from edge
 * structure, which causes siblings to shuffle whenever nodes are expanded
 * or collapsed. For an org chart, stable sibling order across expand /
 * collapse is a hard UX requirement — a manager's reports must not reorder
 * just because a peer's subtree opened.
 *
 * **What this engine does**
 * A deterministic, cursor-based post-order traversal that positions each
 * node under its canonical parent and preserves the input sibling order
 * exactly as provided by the consumer. Same input → same layout, every time.
 *
 * **Trade-off**
 * We accept the maintenance cost of a custom layout (and give up automatic
 * DAG optimization) in exchange for sibling stability and predictable output.
 *
 * **Escape hatch**
 * Consumers that need DAG-aware layout can pass a custom `layoutEngine` prop
 * to `<F0Graph>` wrapping dagre, ELK, or d3-dag. This hook is the default
 * implementation and the fallback.
 */

const DEFAULT_NODE_WIDTH = 256
const DEFAULT_NODE_HEIGHT = 56
const DEFAULT_EXPANDER_WIDTH = 120
const DEFAULT_EXPANDER_HEIGHT = 36
const DEFAULT_RANK_SEP = 130
const DEFAULT_NODE_SEP = 40
const DEFAULT_ROOT_SEP = 80

interface UseLayoutEngineOptions {
  nodeWidth?: number
  nodeHeight?: number
  rankSep?: number
  nodeSep?: number
  rootSep?: number
  /**
   * When > 0, node centers are snapped to this pixel grid so columns/rows line
   * up with the canvas background dots and edges stay crisp. `0` only rounds to
   * integers. Defaults to `0`.
   */
  snapGrid?: number
}

/**
 * Built-in tree layout engine hook.
 *
 * This engine is intentionally tree-focused: it positions each node under its
 * canonical parent only. When a `TreeNode` has `dagParentIds`, the extra
 * parents are ignored for positioning — the node is laid out under its first
 * parent (the canonical one).
 *
 * **DAG consumers:** For layouts where edges to all parents affect node
 * positioning, provide a custom `layoutEngine` prop to F0Graph that wraps a
 * DAG layout library (dagre, ELK, d3-dag). The custom engine receives the
 * original `nodes` + `edges` arrays and computes its own `LayoutResult`.
 * This hook serves as the reference implementation and fallback.
 */
export function useLayoutEngine(
  options?: UseLayoutEngineOptions
): LayoutEngine {
  const nodeWidth = options?.nodeWidth ?? DEFAULT_NODE_WIDTH
  const nodeHeight = options?.nodeHeight ?? DEFAULT_NODE_HEIGHT
  const rankSep = options?.rankSep ?? DEFAULT_RANK_SEP
  const nodeSep = options?.nodeSep ?? DEFAULT_NODE_SEP
  const rootSep = options?.rootSep ?? DEFAULT_ROOT_SEP
  const snapGrid = options?.snapGrid ?? 0

  return useMemo(
    (): LayoutEngine => ({
      computeLayout(
        nodes: TreeNode[],
        edges: GraphEdge[],
        dir: LayoutDirection
      ): LayoutResult {
        return computeTreeLayout(
          nodes,
          edges,
          dir,
          nodeWidth,
          nodeHeight,
          rankSep,
          nodeSep,
          rootSep,
          snapGrid
        )
      },
    }),
    [nodeWidth, nodeHeight, rankSep, nodeSep, rootSep, snapGrid]
  )
}

/**
 * Deterministic top-down tree layout (cursor-based).
 *
 * Why not dagre? Dagre is a DAG layout engine. It re-derives sibling order
 * from edge structure on every run via barycenter passes, which means
 * collapsing or expanding a node can shuffle unrelated siblings to reduce
 * crossings. For a strict tree (one parent per node) we can do better:
 * sibling order is fixed by the input tree, and a simple post-order pass
 * produces a stable, readable layout that never reorders nodes across
 * expand/collapse cycles.
 *
 * Algorithm (TB direction):
 *  1. Build a parent→children map from edges (preserving edge order).
 *     Skip expander targets — they're drawn under their parent visually
 *     and don't participate in layout.
 *  2. Find roots (nodes with no incoming non-expander edge).
 *  3. For each root, recursively place its subtree:
 *     - Leaf: occupy one node-width starting at the cursor.
 *     - Branch: lay out each child subtree left-to-right; center the
 *       parent over the midpoint of first and last child centers.
 *  4. Stack ranks vertically by depth (y = depth * (nodeHeight + rankSep)).
 *  5. Expanders inherit their parent's position (F0Graph repositions them
 *     manually using parent coords, so the layout output is just a
 *     placeholder).
 *
 *  DAG note: When nodes have `dagParentIds`, this function positions them
 *  under the canonical parent only. DAG-aware engines should receive the
 *  original `nodes` + `edges` (not the tree projection) and compute their
 *  own positions — see the `LayoutEngine` interface JSDoc in types.ts.
 */
function computeTreeLayout(
  treeNodes: TreeNode[],
  edges: GraphEdge[],
  direction: LayoutDirection,
  nodeWidth: number,
  nodeHeight: number,
  rankSep: number,
  nodeSep: number,
  rootSep: number,
  snapGrid: number
): LayoutResult {
  if (treeNodes.length === 0) {
    return { nodes: [], edges: [], width: 0, height: 0 }
  }

  // 1. Build parent→children adjacency from edges, preserving edge order.
  //    Expander targets are excluded — they live outside the layout tree.
  const childrenMap = new Map<string, string[]>()
  const parentOf = new Map<string, string>()
  for (const edge of edges) {
    if (edge.target.startsWith("expander-")) continue
    const list = childrenMap.get(edge.source) ?? []
    list.push(edge.target)
    childrenMap.set(edge.source, list)
    parentOf.set(edge.target, edge.source)
  }

  // 2. Roots = layout nodes that aren't a child of another layout node.
  //    Preserve input order (which is DFS visible order from F0Graph).
  const roots: string[] = []
  for (const node of treeNodes) {
    if (node.id.startsWith("expander-")) continue
    if (!parentOf.has(node.id)) roots.push(node.id)
  }

  const isHorizontal = direction === "LR" || direction === "RL"
  const flipMain = direction === "BT" || direction === "RL"

  // Cross axis = sibling spread (X for TB/BT, Y for LR/RL)
  // Main axis  = depth         (Y for TB/BT, X for LR/RL)
  const mainSize = isHorizontal ? nodeWidth : nodeHeight
  const crossSize = isHorizontal ? nodeHeight : nodeWidth
  const mainStep = mainSize + rankSep // distance between rank centers
  const subtreeGap = nodeSep * 2 // gap between subtrees of different parents

  type LayoutPos = { cross: number; depth: number }
  const positions = new Map<string, LayoutPos>()

  // Returns the cross-axis end of the laid-out subtree (exclusive of trailing
  // separation) and the cross-axis center of the root node.
  function layoutSubtree(
    nodeId: string,
    crossStart: number,
    depth: number
  ): { crossEnd: number; centerCross: number } {
    const children = childrenMap.get(nodeId) ?? []

    if (children.length === 0) {
      const center = crossStart + crossSize / 2
      positions.set(nodeId, { cross: center, depth })
      return { crossEnd: crossStart + crossSize, centerCross: center }
    }

    let cursor = crossStart
    let firstCenter = 0
    let lastCenter = 0
    children.forEach((childId, idx) => {
      const result = layoutSubtree(childId, cursor, depth + 1)
      if (idx === 0) firstCenter = result.centerCross
      lastCenter = result.centerCross
      // Use larger gap after branch children (their kids are "siblings of different parents")
      const isBranch = (childrenMap.get(childId)?.length ?? 0) > 0
      cursor = result.crossEnd + (isBranch ? subtreeGap : nodeSep)
    })
    const lastChild = children[children.length - 1]
    const lastIsBranch = (childrenMap.get(lastChild)?.length ?? 0) > 0
    const subtreeEnd = cursor - (lastIsBranch ? subtreeGap : nodeSep)

    let center = (firstCenter + lastCenter) / 2

    // Guarantee the parent doesn't visually overflow its subtree.
    // If the children span is narrower than the parent itself (single
    // child), expand the subtree to fit the parent centered.
    const parentLeft = center - crossSize / 2
    const parentRight = center + crossSize / 2
    let actualEnd = subtreeEnd
    if (parentLeft < crossStart) {
      const shift = crossStart - parentLeft
      // Shift this whole subtree right by `shift` so the parent fits.
      shiftSubtree(nodeId, shift)
      center += shift
      actualEnd = subtreeEnd + shift
    }
    if (parentRight > actualEnd) {
      actualEnd = parentRight
    }

    positions.set(nodeId, { cross: center, depth })
    return { crossEnd: actualEnd, centerCross: center }
  }

  // Shift every positioned node within `nodeId`'s subtree by `delta` on cross axis.
  function shiftSubtree(nodeId: string, delta: number): void {
    const stack = [nodeId]
    while (stack.length > 0) {
      const id = stack.pop()!
      const pos = positions.get(id)
      if (pos) pos.cross += delta
      const kids = childrenMap.get(id)
      if (kids) for (const k of kids) stack.push(k)
    }
  }

  // 3. Lay out each root independently from cross=0, then stack bounding
  //    boxes along the cross axis with rootSep gaps. This isolates roots so
  //    expanding/collapsing one root never shifts another.
  interface RootExtent {
    rootId: string
    minCross: number
    maxCross: number
  }
  const rootExtents: RootExtent[] = []

  for (const rootId of roots) {
    layoutSubtree(rootId, 0, 0)

    // Compute cross-axis bounding box for this root's subtree.
    let minCross = Infinity
    let maxCross = -Infinity
    const walk = (nodeId: string) => {
      const pos = positions.get(nodeId)
      if (pos) {
        const left = pos.cross - crossSize / 2
        const right = pos.cross + crossSize / 2
        if (left < minCross) minCross = left
        if (right > maxCross) maxCross = right
      }
      const kids = childrenMap.get(nodeId)
      if (kids) for (const k of kids) walk(k)
    }
    walk(rootId)

    rootExtents.push({ rootId, minCross, maxCross })
  }

  // Translate each root's subtree so bounding boxes sit end-to-end.
  let crossCursor = 0
  for (const { rootId, minCross, maxCross } of rootExtents) {
    const shift = crossCursor - minCross
    if (shift !== 0) shiftSubtree(rootId, shift)
    crossCursor += maxCross - minCross + rootSep
  }

  // 4. Compute total main-axis extent for BT/RL flipping.
  let maxDepth = 0
  for (const pos of positions.values()) {
    if (pos.depth > maxDepth) maxDepth = pos.depth
  }

  // 5. Materialize PositionedNode entries for ALL input nodes.
  //    Expanders inherit their parent's position (F0Graph re-positions them
  //    manually relative to the parent — the layout value is unused but we
  //    return it for completeness and safety).
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  // Snap the cross axis (sibling spread) to the background grid so node columns
  // line up with the dots. The main axis (depth) is only rounded to whole pixels
  // — snapping it too would make rank spacing uneven. Without a grid, both axes
  // are just rounded for crisp edges.
  const snapCross = (value: number) =>
    snapGrid > 0 ? Math.round(value / snapGrid) * snapGrid : Math.round(value)

  const positionedNodes: PositionedNode[] = treeNodes.map((node) => {
    const isExpander = node.id.startsWith("expander-")
    const width = isExpander ? DEFAULT_EXPANDER_WIDTH : nodeWidth
    const height = isExpander ? DEFAULT_EXPANDER_HEIGHT : nodeHeight

    let pos: LayoutPos | undefined = positions.get(node.id)
    if (!pos && isExpander && node.parentId) {
      pos = positions.get(node.parentId)
    }
    const cross = pos?.cross ?? 0
    const depth = pos?.depth ?? 0

    let mainCenter = depth * mainStep + mainSize / 2
    if (flipMain) {
      mainCenter = (maxDepth - depth) * mainStep + mainSize / 2
    }

    // Snap the cross axis to the grid; round the main (depth) axis only.
    // Expanders inherit their parent's position in F0Graph, so leave them raw.
    const snappedCross = isExpander ? cross : snapCross(cross)
    const roundedMain = Math.round(mainCenter)
    const centerX = isHorizontal ? roundedMain : snappedCross
    const centerY = isHorizontal ? snappedCross : roundedMain

    const x = Math.round(centerX - width / 2)
    const y = Math.round(centerY - height / 2)

    if (x < minX) minX = x
    if (y < minY) minY = y
    if (x + width > maxX) maxX = x + width
    if (y + height > maxY) maxY = y + height

    return { id: node.id, x, y, width, height }
  })

  // 6. Edges: ReactFlow re-routes from node positions, so points can be empty.
  const positionedEdges: PositionedEdge[] = edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    points: [],
  }))

  return {
    nodes: positionedNodes,
    edges: positionedEdges,
    width: maxX === -Infinity ? 0 : maxX - minX,
    height: maxY === -Infinity ? 0 : maxY - minY,
  }
}
