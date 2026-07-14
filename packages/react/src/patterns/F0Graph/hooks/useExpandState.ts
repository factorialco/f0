import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import type { GraphNode, TreeNode } from "../types"
import { collectExpandableNodeIds, computeExpandedByDepth } from "../utils"

interface LazyTreeLike<T> {
  nodes: GraphNode<T>[]
  expandNode: (nodeId: string) => Promise<GraphNode<T>[]>
}

interface UseExpandStateOptions<T> {
  roots: TreeNode<T>[]
  nodeMap: Map<string, TreeNode<T>>
  isLazyMode: boolean
  lazyTree: LazyTreeLike<T>
  controlledExpanded?: Set<string>
  defaultExpandedNodes?: Set<string>
  defaultExpandDepth?: number
  onExpandToggle?: (nodeId: string, expanded: boolean) => void
  onExpandedNodesChange?: (next: Set<string>) => void
}

export interface UseExpandStateResult {
  expandedNodes: Set<string>
  expandedNodesRef: MutableRefObject<Set<string>>
  /** Set on every toggle to the node whose position should stay anchored. */
  anchorNodeRef: MutableRefObject<string | null>
  toggleExpand: (nodeId: string) => void
  expandAll: () => Promise<void>
  collapseAll: () => void
}

/**
 * Owns the expand/collapse state (controlled or uncontrolled): the expanded
 * set, the single-node `toggleExpand` (which also collapses the subtree so
 * re-expanding reveals only the immediate level), and the bulk
 * `expandAll`/`collapseAll`. Also exposes `anchorNodeRef`, written on every
 * toggle and read by `useGraphRenderModel` to keep the viewport stable.
 */
export function useExpandState<T>({
  roots,
  nodeMap,
  isLazyMode,
  lazyTree,
  controlledExpanded,
  defaultExpandedNodes,
  defaultExpandDepth,
  onExpandToggle,
  onExpandedNodesChange,
}: UseExpandStateOptions<T>): UseExpandStateResult {
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

  const [internalExpanded, setInternalExpanded] = useState<Set<string>>(
    () => initialExpandedRef.current!
  )
  const expandedNodes = controlledExpanded ?? internalExpanded

  // ── Anchor: track last toggled node to preserve position ──
  const anchorNodeRef = useRef<string | null>(null)

  // ── Stable ref to the latest expanded set for callbacks/keyboard ──
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
        // Collapse the whole subtree too, so re-expanding this node reveals only
        // its immediate children — not the deeper levels that were open before.
        const collapseDescendants = (
          node: NonNullable<ReturnType<typeof nodeMap.get>>
        ): void => {
          for (const child of node.children) {
            next.delete(child.id)
            collapseDescendants(child)
          }
        }
        const toggled = nodeMap.get(nodeId)
        if (toggled) collapseDescendants(toggled)
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

  return {
    expandedNodes,
    expandedNodesRef,
    anchorNodeRef,
    toggleExpand,
    expandAll,
    collapseAll,
  }
}
