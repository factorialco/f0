"use client"

import { useCallback, useRef, useState } from "react"

import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"
import type { VisualizationMode } from "../types"

/**
 * Manages the canvas panel state: opening/closing the dashboard,
 * and saving/restoring the previous visualization mode.
 */
export function useCanvasState(
  visualizationMode: VisualizationMode,
  setVisualizationMode: React.Dispatch<React.SetStateAction<VisualizationMode>>,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [canvasDashboard, setCanvasDashboard] =
    useState<ChatDashboardConfig | null>(null)

  // Track the mode before canvas was opened so we can restore it on close
  const previousVisualizationModeRef = useRef<VisualizationMode>("sidepanel")

  // Open the canvas panel with a dashboard config.
  // Saves the current visualization mode so it can be restored on close.
  const openCanvas = useCallback(
    (config: ChatDashboardConfig) => {
      if (visualizationMode !== "canvas") {
        previousVisualizationModeRef.current = visualizationMode
      }
      setCanvasDashboard(config)
      setVisualizationMode("canvas")
      if (!open) {
        setOpen(true)
      }
    },
    [visualizationMode, open, setVisualizationMode, setOpen]
  )

  // Close the canvas panel and restore the previous visualization mode.
  const closeCanvas = useCallback(() => {
    setCanvasDashboard(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }, [visualizationMode, setVisualizationMode])

  /**
   * Reset the canvas (nullify dashboard) and restore the previous mode
   * if currently in canvas mode. Used by clear/loadThread.
   */
  const resetCanvas = useCallback(() => {
    setCanvasDashboard(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }, [visualizationMode, setVisualizationMode])

  return {
    canvasDashboard,
    setCanvasDashboard,
    openCanvas,
    closeCanvas,
    resetCanvas,
  }
}
