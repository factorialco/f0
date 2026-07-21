import { type Viewport, useReactFlow } from "@xyflow/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { FIT_VIEW_PADDING_LOOSE, FIT_VIEW_PADDING_TIGHT } from "../constants"
import type {
  PositionedNode,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
} from "../types"
import { useGraphZoomLevel } from "./useGraphZoomLevel"

interface UseGraphViewportOptions {
  defaultZoom: number
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  currentUserNodeId?: string
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
  /**
   * When node-array windowing is active, off-screen nodes aren't in React
   * Flow's store, so id-based `fitView` can't target them. These let navigation
   * fall back to the full layout: `fitBounds` for fit-all, `setCenter` for
   * fly-to. Omitted (windowing off) → the plain React Flow paths are used.
   */
  nodeWindowingActive?: boolean
  getContentBounds?: () => {
    x: number
    y: number
    width: number
    height: number
  } | null
  getNodePosition?: (id: string) => PositionedNode | undefined
}

export interface UseGraphViewportResult {
  currentZoom: number
  zoomLevel: ZoomLevel
  /**
   * True once React Flow has emitted its first viewport update (i.e. the
   * initial `fitView` has settled). Node-array windowing waits for this so the
   * mount-time fit sees every node and frames the whole graph before the
   * camera starts driving which nodes are materialized.
   */
  viewportReady: boolean
  handleViewportChange: (vp: Viewport) => void
  handleZoomIn: () => void
  handleZoomOut: () => void
  handleFitView: () => void
  handleFocusUser: () => void
  /**
   * Fly to a node using its full-layout position, so it works even when the
   * node is windowed out of React Flow's store. Returns false if the position
   * is unknown (caller should fall back to an id-based fit).
   */
  centerOnNode: (nodeId: string, duration: number) => boolean
}

/**
 * Tracks the viewport zoom (and derived discrete `zoomLevel`), fires the
 * zoom-level / viewport change callbacks, and exposes the control-bar handlers
 * (zoom in/out, fit, find-me).
 */
export function useGraphViewport({
  defaultZoom,
  zoomPreset,
  zoomThresholds,
  currentUserNodeId,
  onZoomLevelChange,
  onViewportChange,
  nodeWindowingActive = false,
  getContentBounds,
  getNodePosition,
}: UseGraphViewportOptions): UseGraphViewportResult {
  const reactFlow = useReactFlow()

  // Viewport zoom (tracked via onViewportChange to avoid useViewport churn).
  const [currentZoom, setCurrentZoom] = useState(defaultZoom)

  const zoomLevel = useGraphZoomLevel(currentZoom, {
    preset: zoomPreset,
    thresholds: zoomThresholds,
  })

  const prevZoomLevel = useRef(zoomLevel)
  useEffect(() => {
    if (prevZoomLevel.current !== zoomLevel) {
      prevZoomLevel.current = zoomLevel
      onZoomLevelChange?.(zoomLevel)
    }
  }, [zoomLevel, onZoomLevelChange])

  const [viewportReady, setViewportReady] = useState(false)

  const handleViewportChange = useCallback(
    (vp: Viewport) => {
      setViewportReady(true)
      setCurrentZoom(vp.zoom)
      onViewportChange?.({ x: vp.x, y: vp.y, zoom: vp.zoom })
    },
    [onViewportChange]
  )

  const handleZoomIn = useCallback(() => {
    reactFlow.zoomIn({ duration: 300 })
  }, [reactFlow])

  const handleZoomOut = useCallback(() => {
    reactFlow.zoomOut({ duration: 300 })
  }, [reactFlow])

  const handleFitView = useCallback(() => {
    // Windowing: the store only holds on-screen nodes, so id-less fitView would
    // fit the window, not the graph. Fit the full layout bounds instead.
    const bounds = nodeWindowingActive ? getContentBounds?.() : null
    if (bounds) {
      reactFlow.fitBounds(bounds, {
        duration: 400,
        padding: FIT_VIEW_PADDING_TIGHT,
      })
      return
    }
    reactFlow.fitView({ duration: 400, padding: FIT_VIEW_PADDING_TIGHT })
  }, [reactFlow, nodeWindowingActive, getContentBounds])

  // Fly to a node by its full-layout position (works even when windowing has
  // dropped it from React Flow's store). Returns false when the position is
  // unknown so callers can fall back to an id-based fitView.
  //
  // Resets the zoom to `defaultZoom` (the graph's initial zoom) rather than
  // keeping whatever the user had panned/zoomed to: navigating to a person
  // ("Find me" / search reveal) should land on the initial org-chart zoom state,
  // not stay stuck at an arbitrary deep zoom.
  const centerOnNode = useCallback(
    (nodeId: string, duration: number): boolean => {
      const pos = getNodePosition?.(nodeId)
      if (!pos) return false
      reactFlow.setCenter(pos.x + pos.width / 2, pos.y + pos.height / 2, {
        duration,
        zoom: defaultZoom,
      })
      return true
    },
    [reactFlow, getNodePosition, defaultZoom]
  )

  const handleFocusUser = useCallback(() => {
    if (!currentUserNodeId) return
    // Windowing: the target may be off-screen and absent from the store, so
    // center on its layout position instead of an id-based fitView.
    if (nodeWindowingActive && centerOnNode(currentUserNodeId, 400)) return
    reactFlow.fitView({
      nodes: [{ id: currentUserNodeId }],
      duration: 400,
      padding: FIT_VIEW_PADDING_LOOSE,
    })
  }, [currentUserNodeId, reactFlow, nodeWindowingActive, centerOnNode])

  return {
    currentZoom,
    zoomLevel,
    viewportReady,
    handleViewportChange,
    handleZoomIn,
    handleZoomOut,
    handleFitView,
    handleFocusUser,
    centerOnNode,
  }
}
