import { createContext, useContext } from "react"

import type { ZoomLevel } from "./types"

export interface F0GraphContextValue {
  zoomLevel: ZoomLevel
  currentZoom: number
  expandedNodes: Set<string>
  selectedNodes: Set<string>
  highlightedNodes: Set<string>
  toggleExpand: (nodeId: string) => void
  selectNode: (nodeId: string) => void
}

/**
 * Legacy composite context — kept for backward compatibility.
 * Internal wrappers should use the split contexts directly for performance.
 */
export const F0GraphContext = createContext<F0GraphContextValue | null>(null)

/**
 * Public hook — returns the unified context value.
 * Reads from the legacy composite context (provider wraps all split providers).
 */
export function useF0GraphContext(): F0GraphContextValue {
  const ctx = useContext(F0GraphContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphContext must be used within an <F0Graph> component"
    )
  }
  return ctx
}

// Re-export split context hooks for external consumers who want performance
export {
  useF0GraphZoom,
  useF0GraphExpand,
  useF0GraphSelection,
  useF0GraphActions,
} from "./context/index"

export type {
  F0GraphZoomContextValue,
  F0GraphExpandContextValue,
  F0GraphSelectionContextValue,
  F0GraphActionsContextValue,
} from "./context/index"
