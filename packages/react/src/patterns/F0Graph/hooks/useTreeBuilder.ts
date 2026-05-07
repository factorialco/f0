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

function buildTree<T>(nodes: GraphNode<T>[]): TreeBuilderResult<T> {
  const nodeMap = new Map<string, TreeNode<T>>()
  const orphans: string[] = []
  const cycles: string[] = []

  // Step 1: Create TreeNode entries for every input node
  for (const node of nodes) {
    nodeMap.set(node.id, {
      id: node.id,
      parentId: node.parentId,
      data: node.data,
      children: [],
      depth: 0,
      childrenCount: node.childrenCount ?? 0,
      childrenLoaded: node.childrenLoaded ?? false,
    })
  }

  // Step 2: Detect self-referencing nodes (parentId === id) as cycles
  for (const node of nodes) {
    if (node.parentId === node.id) {
      cycles.push(node.id)
      const treeNode = nodeMap.get(node.id)!
      treeNode.parentId = null
    }
  }

  // Step 3: Attach children to parents, detect orphans
  const roots: TreeNode<T>[] = []

  for (const node of nodes) {
    const treeNode = nodeMap.get(node.id)!

    // Already promoted to root by cycle detection
    if (cycles.includes(node.id)) {
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
        // Orphan: parentId references non-existent node (ERR-002)
        orphans.push(node.id)
        treeNode.parentId = null
        roots.push(treeNode)
      }
    }
  }

  // Step 4: Cycle detection via DFS traversal
  const visited = new Set<string>()
  const inStack = new Set<string>()

  function detectCycles(node: TreeNode<T>): void {
    if (inStack.has(node.id)) {
      // Cycle found (ERR-003)
      cycles.push(node.id)
      return
    }
    if (visited.has(node.id)) return

    visited.add(node.id)
    inStack.add(node.id)

    // Filter out cyclic children in-place
    node.children = node.children.filter((child) => {
      if (inStack.has(child.id)) {
        cycles.push(child.id)
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
