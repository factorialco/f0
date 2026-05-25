import type { F0GraphNodeTagType } from "../F0GraphNode"

export type F0GraphControlLabels = {
  zoomIn?: string
  zoomOut?: string
  fitView?: string
  findMe?: string
  /** Aria label for the metadata-visibility popover trigger button. */
  metadataSettings?: string
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
  /**
   * Tag types to expose in the metadata-visibility popover. When omitted
   * (or empty), the popover button is not rendered.
   */
  tagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /** Currently visible tag types (set form). Required when `tagTypes` set. */
  visibleTagTypes?: ReadonlySet<F0GraphNodeTagType>
  /** Callback when the user toggles a tag type in the popover. */
  onToggleTagType?: (type: F0GraphNodeTagType) => void
  /** Friendly labels per tag type for the popover. */
  tagTypeLabels?: Partial<Record<F0GraphNodeTagType, string>>
  /** Override default English labels */
  labels?: F0GraphControlLabels
}
