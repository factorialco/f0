/**
 * Shared `flyTo` tuning. The flight couples pan and zoom into one arc, so the
 * zoom never outruns the pan the way `easeTo` does (it interpolates them
 * independently). `duration` bounds every flight however far the target -
 * never `maxDuration`, which drops the animation outright whenever the
 * computed flight would run longer, teleporting the camera instead.
 */
export const FLY_OPTS = {
  curve: 1.42,
  duration: 1400,
} as const

/**
 * Soft ceiling for marker count. Markers are DOM elements (one
 * `maplibregl.Marker` each) with JS screen-space clustering - designed for
 * workplace-scale datasets. Beyond this, pan/zoom starts to stutter; thousands
 * of points need a GL-native clustering path instead.
 */
export const RECOMMENDED_MAX_MARKERS = 200
