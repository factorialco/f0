"use client"

import { useEffect, useState } from "react"

import type { VisualizationMode } from "../types"

/**
 * Manages the visualization mode (sidepanel | fullscreen | canvas),
 * the open/close state, and the entrance animation flag.
 *
 * Side-effects:
 * - Resets to "sidepanel" when the chat closes
 * - Auto-opens the chat when entering fullscreen mode
 * - Resets the entrance animation preference on close (respecting reduced-motion)
 */
export function useVisualizationState(
  defaultVisualizationMode: VisualizationMode = "sidepanel"
) {
  const [open, setOpen] = useState(defaultVisualizationMode === "fullscreen")
  const [visualizationMode, setVisualizationMode] = useState<VisualizationMode>(
    defaultVisualizationMode
  )
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(defaultVisualizationMode !== "fullscreen")

  // Reset visualization mode when chat closes
  useEffect(() => {
    if (!open) {
      setVisualizationMode("sidepanel")
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open])

  // Ensure chat is open when entering fullscreen
  useEffect(() => {
    if (visualizationMode === "fullscreen" && !open) {
      setOpen(true)
    }
  }, [visualizationMode, open])

  return {
    open,
    setOpen,
    visualizationMode,
    setVisualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
  }
}
