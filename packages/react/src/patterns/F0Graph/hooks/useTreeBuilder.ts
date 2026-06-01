import { useMemo } from "react"

import type { GraphNode, TreeNode } from "../types"

interface TreeBuilderResult<T> {
  roots: TreeNode<T>[]
  nodeMap: Map<string, TreeNode<T>>
  orphans: string[]
  cycles: string[]
}

export function useTreeBuilder<T>(nodes: GraphNode<T>[]): TreeBuilderResult<T> {
  return useMemo(() => buildTree(nodes), [nodes])
}

/**
 * Resolve the canonical parent ID for a node.
 *
 * Resolution rule:
 * - If `parentIds` is present and non-empty, use the first entry.
 * - Otherwise fall back to `parentId`.
 */
function resolveCanonicalParent<T>(node: GraphNode<T>): string | null {
  if (node.parentIds && node.parentIds.length > 0) {
    return node.parentIds[0]
  }
  return node.parentId
}

function buildTree<T>(nodes: GraphNode<T>[]): TreeBuilderResult<T> {
  const nodeMap = new Map<string, TreeNode<T>>()
  const orphans: string[] = []
  const cycles: string[] = []
  // Mirror of `cycles` for O(1) membership checks. Both are kept in sync so
  // the external `cycles` array shape (TreeBuilderResult.cycles) is preserved.
  const cycleSet = new Set<string>()

  // Step 1: Create TreeNode entries for every input node.
  //         When `parentIds` is provided it takes precedence over `parentId`.
  //         The first entry becomes the canonical layout parent; the full list
  //         is stored as `dagParentIds`.
  for (const node of nodes) {
    const canonicalParent = resolveCanonicalParent(node)
    const dagParentIds =
      node.parentIds && node.parentIds.length > 0 ? node.parentIds : undefined

    const treeNode: TreeNode<T> = {
      id: node.id,
      parentId: canonicalParent,
      data: node.data,
      children: [],
      depth: 0,
      childrenCount: node.childrenCount ?? 0,
      childrenLoaded: node.childrenLoaded ?? false,
    }
    if (dagParentIds) {
      treeNode.dagParentIds = dagParentIds
    }
    nodeMap.set(node.id, treeNode)
  }

  // Step 2: Detect self-referencing nodes (canonical parentId === id) as cycles
  for (const [id, treeNode] of nodeMap) {
    if (treeNode.parentId === id) {
      cycles.push(id)
      cycleSet.add(id)
      treeNode.parentId = null
    }
  }

  // Step 3: Attach children to their canonical parent, detect orphans.
  //         In a DAG, a node may list multiple parents but is attached to the
  //         canonical (first) parent only. The additional parents are recorded
  //         in `dagParentIds` for consumers that need the full topology.
  const roots: TreeNode<T>[] = []

  for (const [id, treeNode] of nodeMap) {
    // Already promoted to root by cycle detection
    if (cycleSet.has(id)) {
      roots.push(treeNode)
      continue
    }

    if (treeNode.parentId === null) {
      roots.push(treeNode)
    } else {
      const parent = nodeMap.get(treeNode.parentId)
      if (parent) {
        parent.children.push(treeNode)
      } else {
        // Orphan: canonical parentId references non-existent node (ERR-002)
        orphans.push(id)
        treeNode.parentId = null
        roots.push(treeNode)
      }
    }
  }

  // Step 4: Cycle detection via DFS on the canonical-parent tree.
  //         DAG multi-parent edges don't create tree cycles — a node appearing
  //         under multiple parents is valid. Only reachability cycles in the
  //         canonical parent chain are errors.
  const visited = new Set<string>()
  const inStack = new Set<string>()

  function detectCycles(node: TreeNode<T>): void {
    if (inStack.has(node.id)) {
      // Cycle found (ERR-003)
      cycles.push(node.id)
      cycleSet.add(node.id)
      return
    }
    if (visited.has(node.id)) return

    visited.add(node.id)
    inStack.add(node.id)

    // Filter out cyclic children in-place
    node.children = node.children.filter((child) => {
      if (inStack.has(child.id)) {
        cycles.push(child.id)
        cycleSet.add(child.id)
        // Promote cyclic child to root
        child.parentId = null
        roots.push(child)
        return false
      }
      return true
    })

    for (const child of node.children) {
      detectCycles(child)
    }

    inStack.delete(node.id)
  }

  for (const root of [...roots]) {
    detectCycles(root)
  }

  // Step 4b: Catch any remaining nodes never reached from a root.
  //          Pure cycles with no `parentId === null` entry (e.g. A→B→C→A) leave
  //          `roots` empty, so the previous loop never visits them. Iterate
  //          every node still unvisited to flag those cycles too.
  for (const treeNode of nodeMap.values()) {
    if (!visited.has(treeNode.id)) {
      detectCycles(treeNode)
    }
  }

  // Step 5: Compute depths via BFS
  function setDepths(node: TreeNode<T>, depth: number): void {
    node.depth = depth
    for (const child of node.children) {
      setDepths(child, depth + 1)
    }
  }

  for (const root of roots) {
    setDepths(root, 0)
  }

  return { roots, nodeMap, orphans, cycles }
}
