export type F0GraphControlLabels = {
  zoomIn?: string
  zoomOut?: string
  fitView?: string
  findMe?: string
}

export interface F0GraphControlsProps {
  /** Callback to zoom in */
  onZoomIn?: () => void
  /** Callback to zoom out */
  onZoomOut?: () => void
  /** Callback to fit all nodes in view */
  onFitView?: () => void
  /**
   * Callback to focus the "current user" node. When provided, a "Find me"
   * button is rendered as the first control. When omitted, the button is
   * hidden — consumers without a current-user concept get a clean toolbar.
   */
  onFocusUser?: () => void
  /** Override default English labels */
  labels?: F0GraphControlLabels
}
