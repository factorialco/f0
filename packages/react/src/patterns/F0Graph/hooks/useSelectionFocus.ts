import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import type { TreeNode } from "../types"
import { collectVisibleNodes } from "../utils"

interface UseSelectionFocusOptions<T> {
  roots: TreeNode<T>[]
  expandedNodes: Set<string>
  selectionMode: "single" | "multi" | "none"
  controlledSelected?: Set<string>
  onNodeSelect?: (nodeId: string, selected: boolean) => void
  onSelectedNodesChange?: (next: Set<string>) => void
  /** Focused on Escape / clear, so keyboard control returns to the canvas. */
  canvasRef: MutableRefObject<HTMLDivElement | null>
}

export interface UseSelectionFocusResult {
  selectedNodes: Set<string>
  focusedNodeId: string | null
  setFocusedNodeId: (id: string | null) => void
  focusedNodeIdRef: MutableRefObject<string | null>
  registerNodeRef: (nodeId: string, el: HTMLElement | null) => void
  nodeRefsMapRef: MutableRefObject<Map<string, HTMLElement>>
  /** DFS order of visible node + expander/collapser ids, for keyboard nav. */
  flatVisibleOrderRef: MutableRefObject<string[]>
  selectNode: (nodeId: string) => void
  clearSelection: () => void
}

/**
 * Owns selection (controlled/uncontrolled) and roving-tabindex focus: the
 * focused node id, the DFS visible order used by keyboard navigation, the
 * imperative node-ref map, and the `selectNode` / `clearSelection` actions.
 */
export function useSelectionFocus<T>({
  roots,
  expandedNodes,
  selectionMode,
  controlledSelected,
  onNodeSelect,
  onSelectedNodesChange,
  canvasRef,
}: UseSelectionFocusOptions<T>): UseSelectionFocusResult {
  // ── Selected state (controlled / uncontrolled) ──
  const [internalSelected, setInternalSelected] = useState<Set<string>>(
    new Set()
  )
  const selectedNodes = controlledSelected ?? internalSelected
  const selectedNodesRef = useRef(selectedNodes)
  useEffect(() => {
    selectedNodesRef.current = selectedNodes
  }, [selectedNodes])

  // ── Focus state (roving tabindex) ──
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(() => {
    const visible = collectVisibleNodes(roots, expandedNodes)
    return visible.length > 0 ? visible[0].id : null
  })
  const focusedNodeIdRef = useRef(focusedNodeId)
  useEffect(() => {
    focusedNodeIdRef.current = focusedNodeId
  }, [focusedNodeId])

  // Node ref map for imperative .focus() calls
  const nodeRefsMapRef = useRef(new Map<string, HTMLElement>())
  const registerNodeRef = useCallback(
    (nodeId: string, el: HTMLElement | null) => {
      if (el) {
        nodeRefsMapRef.current.set(nodeId, el)
      } else {
        nodeRefsMapRef.current.delete(nodeId)
      }
    },
    []
  )

  // ── Flat visible order (DFS) for keyboard navigation ──
  // Includes expander/collapser pseudo-node IDs for roving tabindex
  const flatVisibleOrder = useMemo(() => {
    const order: string[] = []

    function walk(nodes: TreeNode<unknown>[]): void {
      for (const node of nodes) {
        order.push(node.id)
        if (expandedNodes.has(node.id) && node.children.length > 0) {
          walk(node.children)
          order.push(`collapser-${node.id}`)
        } else if (node.childrenCount > 0) {
          order.push(`expander-${node.id}`)
        }
      }
    }

    for (const root of roots) {
      walk([root])
    }
    return order
  }, [roots, expandedNodes])
  const flatVisibleOrderSet = useMemo(
    () => new Set(flatVisibleOrder),
    [flatVisibleOrder]
  )
  const flatVisibleOrderRef = useRef(flatVisibleOrder)
  useEffect(() => {
    flatVisibleOrderRef.current = flatVisibleOrder
  }, [flatVisibleOrder])

  // ── Initialize / repair focused node ──
  useEffect(() => {
    if (flatVisibleOrder.length === 0) return
    if (focusedNodeId === null || !flatVisibleOrderSet.has(focusedNodeId)) {
      // On initial mount, prefer first selected node if any are visible
      const firstSelected =
        focusedNodeId === null
          ? flatVisibleOrder.find((id) => selectedNodes.has(id))
          : undefined
      setFocusedNodeId(firstSelected ?? flatVisibleOrder[0])
    }
  }, [flatVisibleOrder, focusedNodeId, selectedNodes, flatVisibleOrderSet])

  const selectNode = useCallback(
    (nodeId: string) => {
      // Update roving tabindex focus (sync ref for immediate reads)
      focusedNodeIdRef.current = nodeId
      setFocusedNodeId(nodeId)

      if (selectionMode !== "none") {
        const current = selectedNodesRef.current
        const wasSelected = current.has(nodeId)

        if (!wasSelected) {
          const next =
            selectionMode === "single"
              ? new Set([nodeId])
              : new Set([...current, nodeId])

          if (!controlledSelected) {
            setInternalSelected(next)
          }
          onNodeSelect?.(nodeId, true)
          onSelectedNodesChange?.(next)
        }
      }
    },
    [selectionMode, controlledSelected, onNodeSelect, onSelectedNodesChange]
  )

  const clearSelection = useCallback(() => {
    const current = selectedNodesRef.current
    if (!controlledSelected) {
      setInternalSelected(new Set())
    }
    if (current.size > 0) {
      onSelectedNodesChange?.(new Set())
    }
    setFocusedNodeId(null)
    canvasRef.current?.focus()
  }, [controlledSelected, onSelectedNodesChange, canvasRef])

  return {
    selectedNodes,
    focusedNodeId,
    setFocusedNodeId,
    focusedNodeIdRef,
    registerNodeRef,
    nodeRefsMapRef,
    flatVisibleOrderRef,
    selectNode,
    clearSelection,
  }
}
