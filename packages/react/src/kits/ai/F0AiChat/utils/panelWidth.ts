/**
 * Moved to `@/patterns/ApplicationFrame/SidePanel` once the panel stopped
 * belonging to the AI chat. Re-exported so the kit's own imports (and anything
 * pointing at this path) keep working.
 */
export {
  clampPanelWidth,
  panelBoundsFor,
  resolvePanelWidth,
  SPLIT_MIN_FRAME,
  type PanelBounds,
} from "@/patterns/ApplicationFrame/SidePanel/panelWidth"
