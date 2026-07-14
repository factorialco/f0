import type { GraphEdge, PositionedNode, TreeNode } from "./types"

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
