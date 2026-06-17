import { useReactFlow } from "@xyflow/react"
import {
  type KeyboardEvent,
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
} from "react"

import { FIT_VIEW_PADDING_LOOSE, FIT_VIEW_PADDING_TIGHT } from "../constants"
import type { TreeNode } from "../types"

interface UseGraphKeyboardOptions<T> {
  nodeMap: Map<string, TreeNode<T>>
  clearSelection: () => void
  toggleExpand: (nodeId: string) => void
  selectNode: (nodeId: string) => void
  focusedNodeIdRef: MutableRefObject<string | null>
  setFocusedNodeId: (id: string | null) => void
  flatVisibleOrderRef: MutableRefObject<string[]>
  expandedNodesRef: MutableRefObject<Set<string>>
  nodeRefsMapRef: MutableRefObject<Map<string, HTMLElement>>
}

export interface UseGraphKeyboardResult {
  handleTreeKeyDown: (e: KeyboardEvent) => void
  handleCanvasKeyDown: (e: KeyboardEvent) => void
}

/**
 * Keyboard handlers for the graph: tree navigation (arrows, Home/End,
 * expand/collapse, select) when a node is focused, and canvas pan/zoom when the
 * canvas wrapper itself has focus.
 */
export function useGraphKeyboard<T>({
  nodeMap,
  clearSelection,
  toggleExpand,
  selectNode,
  focusedNodeIdRef,
  setFocusedNodeId,
  flatVisibleOrderRef,
  expandedNodesRef,
  nodeRefsMapRef,
}: UseGraphKeyboardOptions<T>): UseGraphKeyboardResult {
  const reactFlow = useReactFlow()

  // Ref for nodeMap (used in keyboard handler without re-creating it).
  const nodeMapRef = useRef(nodeMap)
  useEffect(() => {
    nodeMapRef.current = nodeMap
  }, [nodeMap])

  const handleTreeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        clearSelection()
        return
      }

      // Zoom shortcuts work even when a node is focused
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      switch (e.key) {
        case "+":
        case "=":
          e.preventDefault()
          reactFlow.zoomIn({ duration: reducedMotion ? 0 : 300 })
          return
        case "-":
          e.preventDefault()
          reactFlow.zoomOut({ duration: reducedMotion ? 0 : 300 })
          return
        case "0":
          e.preventDefault()
          reactFlow.fitView({
            duration: reducedMotion ? 0 : 400,
            padding: FIT_VIEW_PADDING_TIGHT,
          })
          return
      }

      const currentId = focusedNodeIdRef.current
      if (!currentId) return

      const order = flatVisibleOrderRef.current
      const currentIndex = order.indexOf(currentId)
      if (currentIndex === -1) return

      let targetId: string | null = null

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          e.stopPropagation()
          if (currentIndex < order.length - 1) {
            targetId = order[currentIndex + 1]
          }
          break
        case "ArrowUp":
          e.preventDefault()
          e.stopPropagation()
          if (currentIndex > 0) {
            targetId = order[currentIndex - 1]
          }
          break
        case "ArrowRight": {
          e.preventDefault()
          e.stopPropagation()
          const node = nodeMapRef.current.get(currentId)
          const hasKids =
            node !== undefined &&
            (node.children.length > 0 || node.childrenCount > 0)
          if (hasKids) {
            if (!expandedNodesRef.current.has(currentId)) {
              toggleExpand(currentId)
            } else if (currentIndex < order.length - 1) {
              targetId = order[currentIndex + 1]
            }
          }
          break
        }
        case "ArrowLeft": {
          e.preventDefault()
          e.stopPropagation()
          const node = nodeMapRef.current.get(currentId)
          const hasKidsL =
            node !== undefined &&
            (node.children.length > 0 || node.childrenCount > 0)
          if (node && expandedNodesRef.current.has(currentId) && hasKidsL) {
            toggleExpand(currentId)
          } else if (node?.parentId) {
            targetId = node.parentId
          }
          break
        }
        case "Home":
          e.preventDefault()
          e.stopPropagation()
          if (order.length > 0) {
            targetId = order[0]
          }
          break
        case "End":
          e.preventDefault()
          e.stopPropagation()
          if (order.length > 0) {
            targetId = order[order.length - 1]
          }
          break
        case "Enter":
        case " ":
          e.preventDefault()
          e.stopPropagation()
          if (
            currentId.startsWith("expander-") ||
            currentId.startsWith("collapser-")
          ) {
            toggleExpand(currentId.replace(/^(expander|collapser)-/, ""))
          } else {
            selectNode(currentId)
          }
          break
        default:
          return
      }

      if (targetId) {
        focusedNodeIdRef.current = targetId
        setFocusedNodeId(targetId)
        const targetEl = nodeRefsMapRef.current.get(targetId)
        if (targetEl) {
          targetEl.focus()
          // Fly-to focused node respecting reduced motion
          const rm = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
          reactFlow.fitView({
            nodes: [{ id: targetId.replace(/^(expander|collapser)-/, "") }],
            duration: rm ? 0 : 300,
            padding: FIT_VIEW_PADDING_LOOSE,
          })
        }
      }
    },
    [
      clearSelection,
      toggleExpand,
      selectNode,
      reactFlow,
      focusedNodeIdRef,
      flatVisibleOrderRef,
      expandedNodesRef,
      nodeRefsMapRef,
      setFocusedNodeId,
    ]
  )

  const handleCanvasKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Only handle when the canvas wrapper itself has focus
      if (e.target !== e.currentTarget) return

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      const duration = reducedMotion ? 0 : 200
      const PAN_STEP = e.shiftKey ? 200 : 50

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x, y: vp.y + PAN_STEP, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowDown":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x, y: vp.y - PAN_STEP, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowLeft":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x + PAN_STEP, y: vp.y, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "ArrowRight":
          e.preventDefault()
          {
            const vp = reactFlow.getViewport()
            reactFlow.setViewport(
              { x: vp.x - PAN_STEP, y: vp.y, zoom: vp.zoom },
              { duration }
            )
          }
          break
        case "+":
        case "=":
          e.preventDefault()
          reactFlow.zoomIn({ duration: reducedMotion ? 0 : 300 })
          break
        case "-":
          e.preventDefault()
          reactFlow.zoomOut({ duration: reducedMotion ? 0 : 300 })
          break
        case "0":
          e.preventDefault()
          reactFlow.fitView({
            duration: reducedMotion ? 0 : 400,
            padding: FIT_VIEW_PADDING_TIGHT,
          })
          break
        default:
          return
      }
    },
    [reactFlow]
  )

  return { handleTreeKeyDown, handleCanvasKeyDown }
}
