import type { WithDataTestIdProps } from "@/lib/data-testid"

export type F0MapControlLabels = {
  zoomIn?: string
  zoomOut?: string
  fit?: string
  locate?: string
}

export interface F0MapControlsProps extends WithDataTestIdProps {
  /** Callback to zoom in. */
  onZoomIn?: () => void
  /** Callback to zoom out. */
  onZoomOut?: () => void
  /**
   * Fit all markers in view. When omitted (e.g. no markers), the button is
   * hidden.
   */
  onFit?: () => void
  /**
   * Recenter on the user's location. When provided, a "locate" button renders
   * as the first control; omit it (e.g. no geolocation) for a clean toolbar.
   * Returning a promise drives the button's loading spinner while it resolves.
   */
  onLocate?: () => void | Promise<void>
  /** Override the i18n control labels (tooltips / accessible names). */
  labels?: F0MapControlLabels
}
