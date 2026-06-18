import type { GraphEdge, TreeNode } from "./types"

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
