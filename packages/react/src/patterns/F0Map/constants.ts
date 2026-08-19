/**
 * Shared `flyTo` tuning. The flight couples pan and zoom at a constant screen
 * speed, so the camera heads straight to the target instead of the zoom
 * outrunning the pan (which `easeTo` does - it interpolates them
 * independently). Zoom-in flights don't arc, so the path stays direct.
 */
export const FLY_OPTS = {
  curve: 1.42,
  speed: 0.8,
  maxDuration: 1400,
} as const

/**
 * Soft ceiling for marker count. Markers are DOM elements (one
 * `maplibregl.Marker` each) with JS screen-space clustering - designed for
 * workplace-scale datasets. Beyond this, pan/zoom starts to stutter; thousands
 * of points need a GL-native clustering path instead.
 */
export const RECOMMENDED_MAX_MARKERS = 200
