export type InteractionMode = "select" | "pan"

export interface F0GraphControlsProps {
  /** Current interaction mode */
  mode?: InteractionMode
  /** Callback when interaction mode changes */
  onModeChange?: (mode: InteractionMode) => void
  /** Callback to zoom in */
  onZoomIn?: () => void
  /** Callback to zoom out */
  onZoomOut?: () => void
  /** Callback to fit all nodes in view */
  onFitView?: () => void
  /** Show minimap toggle */
  showMinimap?: boolean
  /** Whether minimap is visible */
  minimapVisible?: boolean
  /** Callback to toggle minimap */
  onMinimapToggle?: () => void
  /** Show keyboard shortcut help panel */
  showKeyboardHelp?: boolean
  /** Direction toggle: TB or LR */
  direction?: "TB" | "LR"
  /** Callback to toggle direction */
  onDirectionToggle?: () => void
}
