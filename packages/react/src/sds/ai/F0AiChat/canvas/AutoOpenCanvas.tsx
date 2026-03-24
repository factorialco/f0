import type { CanvasContent } from "../types"
import { useAutoOpenCanvas } from "../hooks/useAutoOpenCanvas"

/**
 * Render-only component that auto-opens the canvas panel once on mount.
 * Drop this into a copilot action's `render` callback alongside the inline card.
 */
export function AutoOpenCanvas({ content }: { content: CanvasContent }) {
  useAutoOpenCanvas(content)
  return null
}
