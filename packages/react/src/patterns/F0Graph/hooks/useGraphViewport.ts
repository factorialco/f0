import { type Viewport, useReactFlow } from "@xyflow/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { FIT_VIEW_PADDING_LOOSE, FIT_VIEW_PADDING_TIGHT } from "../constants"
import type { ZoomLevel, ZoomPreset, ZoomThresholds } from "../types"
import { useGraphZoomLevel } from "./useGraphZoomLevel"

interface UseGraphViewportOptions {
  defaultZoom: number
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  currentUserNodeId?: string
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
}

export interface UseGraphViewportResult {
  currentZoom: number
  zoomLevel: ZoomLevel
  handleViewportChange: (vp: Viewport) => void
  handleZoomIn: () => void
  handleZoomOut: () => void
  handleFitView: () => void
  handleFocusUser: () => void
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

  const handleViewportChange = useCallback(
    (vp: Viewport) => {
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
    reactFlow.fitView({ duration: 400, padding: FIT_VIEW_PADDING_TIGHT })
  }, [reactFlow])

  const handleFocusUser = useCallback(() => {
    if (!currentUserNodeId) return
    reactFlow.fitView({
      nodes: [{ id: currentUserNodeId }],
      duration: 400,
      padding: FIT_VIEW_PADDING_LOOSE,
    })
  }, [currentUserNodeId, reactFlow])

  return {
    currentZoom,
    zoomLevel,
    handleViewportChange,
    handleZoomIn,
    handleZoomOut,
    handleFitView,
    handleFocusUser,
  }
}
