import type {
  GraphEdge,
  LayoutDirection,
  PositionedNode,
  TreeNode,
} from "./types"

import {
  NODE_BOX_INSET,
  STACKED_GROUP_PADDING,
  STACKED_NODE_WIDTH_INSET,
} from "./constants"

/**
 * React Flow `fitViewOptions.nodes` for the initial frame: `[{ id }]` to open
 * centered on `initialFocusNodeId`, or `undefined` to fit the whole graph.
 * Returns `undefined` (fit-all fallback) when no target is given or the target
 * isn't among the present nodes — so a missing node never leaves a blank frame.
 */
export function resolveInitialFitViewNodes(
  initialFocusNodeId: string | undefined,
  childIds: readonly string[],
  presentNodeIds: ReadonlySet<string>
): Array<{ id: string }> | undefined {
  if (!initialFocusNodeId || !presentNodeIds.has(initialFocusNodeId)) {
    return undefined
  }
  // Frame the target together with its direct (present) children, so the
  // initial view shows the top of the branch — the node and its first level —
  // rather than zooming in on the single node.
  const ids = [
    initialFocusNodeId,
    ...childIds.filter((id) => presentNodeIds.has(id)),
  ]
  return ids.map((id) => ({ id }))
}

/** Axis-aligned rectangle in flow-space coordinates. */
export interface ViewportRect {
  minX: number
  minY: number
  maxX: number
  maxY: number
}

/**
 * Whether a node box (top-left `x`/`y`, size `width`/`height`) overlaps `rect`.
 * Pure AABB intersection — the core predicate behind node-array windowing.
 */
export function nodeIntersectsRect(
  x: number,
  y: number,
  width: number,
  height: number,
  rect: ViewportRect
): boolean {
  return (
    x <= rect.maxX &&
    x + width >= rect.minX &&
    y <= rect.maxY &&
    y + height >= rect.minY
  )
}

/** One stacked column's group box, plus its rows' offsets inside it. */
export interface StackGroupBox {
  id: string
  x: number
  y: number
  width: number
  height: number
  /** Row boxes relative to the group's own origin, keyed by row id. */
  rows: Map<string, { x: number; y: number; width: number; height: number }>
}

/**
 * Turns each stacked parent's rows into the React Flow sub-flow that renders
 * them (see https://reactflow.dev/learn/layouting/sub-flows): a group box, the
 * rows' offsets inside it, and the chain that says which row a row's connector
 * comes from.
 *
 * The group's box is the union of its rows grown by `STACKED_GROUP_PADDING`, so
 * the padding is real geometry rather than CSS — the rows sit inside it at
 * exactly that offset. The rows are narrowed off the layout box by the same
 * cross-axis inset the card wrapper used to apply in CSS, which keeps a row's
 * CENTER on the parent's axis (the inset comes off both edges) while making its
 * box the width it actually paints.
 *
 * Pure: same inputs, same boxes. Lives here rather than inside the render model
 * so it can be exercised without standing up the whole hook.
 */
export function computeStackGroups<T>(
  visibleTreeNodes: TreeNode<T>[],
  stackedNodeIndex: Map<string, number>,
  positionMap: Map<string, PositionedNode>,
  direction: LayoutDirection
): {
  groups: Map<string, StackGroupBox>
  groupOf: Map<string, string>
  previousRow: Map<string, string>
} {
  const rowsByParent = new Map<string, string[]>()
  for (const node of visibleTreeNodes) {
    if (!stackedNodeIndex.has(node.id) || node.parentId === null) continue
    const siblings = rowsByParent.get(node.parentId)
    if (siblings) siblings.push(node.id)
    else rowsByParent.set(node.parentId, [node.id])
  }

  const isHorizontal = direction === "LR" || direction === "RL"
  const inset = NODE_BOX_INSET + STACKED_NODE_WIDTH_INSET
  const groups = new Map<string, StackGroupBox>()
  const groupOf = new Map<string, string>()
  // Row id → the row above it, which is where its connector starts.
  const previousRow = new Map<string, string>()

  for (const [parentId, rowIds] of rowsByParent) {
    if (rowIds.some((id) => positionMap.get(id) === undefined)) continue

    // Order the column by the coordinate the layout actually produced, not by
    // the order this traversal happened to see the rows in. A row's slot comes
    // from the edge list (`stackedNodeIndex`, built from `childrenMap`) while
    // this loop walks `children` — the same order only when the edges were
    // derived from the tree. With a consumer-supplied `edges` array sorted
    // differently, chaining in traversal order connects rows that are not
    // vertically adjacent and the spine crosses itself.
    rowIds.sort((a, b) => {
      const pa = positionMap.get(a) as PositionedNode
      const pb = positionMap.get(b) as PositionedNode
      return isHorizontal ? pa.x - pb.x : pa.y - pb.y
    })
    const boxes = rowIds.map((id) => positionMap.get(id))

    // Absolute row boxes: the layout box, less the cross-axis inset.
    const absolute = boxes.map((box) => {
      const b = box as PositionedNode
      return isHorizontal
        ? {
            x: b.x,
            y: b.y + inset / 2,
            width: b.width,
            height: Math.max(0, b.height - inset),
          }
        : {
            x: b.x + inset / 2,
            y: b.y,
            width: Math.max(0, b.width - inset),
            height: b.height,
          }
    })

    const minX = Math.min(...absolute.map((r) => r.x))
    const minY = Math.min(...absolute.map((r) => r.y))
    const maxX = Math.max(...absolute.map((r) => r.x + r.width))
    const maxY = Math.max(...absolute.map((r) => r.y + r.height))
    const pad = STACKED_GROUP_PADDING
    const group: StackGroupBox = {
      id: `stack-${parentId}`,
      x: minX - pad,
      y: minY - pad,
      width: maxX - minX + 2 * pad,
      height: maxY - minY + 2 * pad,
      rows: new Map(),
    }
    rowIds.forEach((id, index) => {
      const r = absolute[index]!
      group.rows.set(id, {
        x: r.x - group.x,
        y: r.y - group.y,
        width: r.width,
        height: r.height,
      })
      groupOf.set(id, group.id)
      if (index > 0) previousRow.set(id, rowIds[index - 1]!)
    })
    groups.set(parentId, group)
  }

  return { groups, groupOf, previousRow }
}

/**
 * The region that belongs to one stacked parent: its card, the lane under it and
 * the whole column below that, as one rect in flow coordinates.
 */
export interface StackHoverZone {
  parentId: string
  x: number
  y: number
  width: number
  height: number
}

/**
 * Which stacked parent's region contains a point, or `null` for none.
 *
 * Point-in-rect rather than the rect-vs-rect [[nodeIntersectsRect]] above, and
 * answered geometrically rather than by hit-testing, for two reasons. React Flow
 * renders every node flat as siblings, so a sub-flow's rows are not DOM children
 * of their group and no `group-hover` variant can connect the rows, the group and
 * the collapse affordance. And making the group hit-testable instead would break
 * selection: the canvas `onPointerUp` handler resolves
 * `target.closest(".react-flow__node")` and selects whatever it finds, so a click
 * in the gap between two rows would select the group node and report that to the
 * consumer, besides suppressing `onPaneClick` over every column.
 *
 * Inclusive on all four edges. Zones cannot overlap (one per stacked parent, each
 * inside its parent's own lane), so the first match wins.
 */
export function findStackHoverZoneAt(
  zones: readonly StackHoverZone[],
  x: number,
  y: number
): string | null {
  for (const zone of zones) {
    if (
      x >= zone.x &&
      x <= zone.x + zone.width &&
      y >= zone.y &&
      y <= zone.y + zone.height
    ) {
      return zone.parentId
    }
  }
  return null
}

/**
 * Bounding box of every positioned node, as an `{ x, y, width, height }` rect
 * suitable for `reactFlow.fitBounds`. Returns `null` for an empty layout.
 * Lets navigation (fit-view, fly-to) target the full graph even when node-array
 * windowing has removed off-screen nodes from the React Flow store.
 */
export function computeLayoutBounds(
  nodes: PositionedNode[]
): { x: number; y: number; width: number; height: number } | null {
  if (nodes.length === 0) return null
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const node of nodes) {
    minX = Math.min(minX, node.x)
    minY = Math.min(minY, node.y)
    maxX = Math.max(maxX, node.x + node.width)
    maxY = Math.max(maxY, node.y + node.height)
  }
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY }
}

/** Compute the initial expanded set by expanding every node above `depth`. */
export function computeExpandedByDepth<T>(
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

/**
 * Collect every expandable node id (eager mode). A node is "expandable" when it
 * has children to reveal; in eager mode the tree is fully known, so
 * `children.length > 0` is sufficient.
 */
export function collectExpandableNodeIds<T>(roots: TreeNode<T>[]): Set<string> {
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

/** Derive parent→child edges from the tree structure. */
export function deriveEdgesFromTree<T>(roots: TreeNode<T>[]): GraphEdge[] {
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

/**
 * Ids of the nodes whose children actually render as a vertical stack, and the
 * ids of the stacked nodes themselves.
 *
 * `stackNodes` is a request, not a guarantee: a stacked row is a compact
 * strip with no lane beneath it, so a child that can expand has nowhere to put
 * its own subtree. Such a group falls back to the normal horizontal fan-out.
 * Emptiness is the other fallback — an as-yet-unloaded group (children not
 * fetched, or collapsed) stacks nothing and is left to the standard path until
 * its children arrive.
 *
 * Resolved once per render and shared by the layout engine input and the node
 * render context, so "is this stacked?" has a single answer everywhere.
 */
export function resolveStackedParents<T>(nodes: TreeNode<T>[]): {
  stackedParentIds: Set<string>
  /** Stacked node id → its 0-based position in the column. */
  stackedNodeIndex: Map<string, number>
} {
  const stackedParentIds = new Set<string>()
  const stackedNodeIndex = new Map<string, number>()

  for (const node of nodes) {
    if (!node.stackNodes || node.children.length === 0) continue
    // Both signals matter. `childrenCount` is what a lazy consumer declares
    // before its children arrive, but it is optional on the public `GraphNode`
    // and the tree builder defaults it to 0 — so a child that already HAS
    // children can still report none. The layout needs a lane for anything with
    // children either way, and it never visits a stacked parent's grandchildren,
    // so a column built over one would drop them at the flow origin.
    if (
      node.children.some(
        (child) => child.childrenCount > 0 || child.children.length > 0
      )
    )
      continue
    stackedParentIds.add(node.id)
    node.children.forEach((child, index) => {
      stackedNodeIndex.set(child.id, index)
    })
  }

  return { stackedParentIds, stackedNodeIndex }
}

/** Collect the nodes currently visible, respecting the expanded set. */
export function collectVisibleNodes<T>(
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
