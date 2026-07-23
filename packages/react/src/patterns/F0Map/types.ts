import type { BaseMapMarkerColor } from "./components/internal/BaseMapMarker"
import type { F0MapMarkerVariantProps } from "./components/F0MapMarker"

/** Initial camera position for the map. */
export interface F0MapViewport {
  /** `[longitude, latitude]`. */
  center: [number, number]
  /** Zoom level (`0` world, higher = closer). Defaults to a city-level view. */
  zoom?: number
}

/**
 * Palette hue for a drawn line (route or arc). Reuses the marker categorical
 * palette so lines and pins share one set of on-brand colors.
 */
export type F0MapLineColor = BaseMapMarkerColor

/** Styling shared by both line kinds (routes and arcs). */
export interface F0MapLineStyle {
  /** Palette hue. Defaults to `radical`. Ignored when `color` is set. */
  variant?: F0MapLineColor
  /** Escape-hatch CSS color string; overrides `variant`. */
  color?: string
  /** Line width in px. Defaults to `3`. */
  width?: number
  /** Render as a dashed line. Defaults to `false`. */
  dashed?: boolean
  /** Line opacity, `0`-`1`. Defaults to `1`. */
  opacity?: number
}

/**
 * A route: a polyline drawn through the given coordinates exactly as provided.
 * `F0Map` renders the path; it does not compute routing - fetch that
 * server-side (or from a routing engine) and pass the resulting vertices.
 */
export interface F0MapRoute extends F0MapLineStyle {
  id: string
  /** Ordered `[lng, lat]` vertices the line passes through. */
  coordinates: [number, number][]
}

/**
 * An arc: a curved connection between two coordinates (the flight-path /
 * connection look). `F0Map` computes the curve; you give the endpoints.
 */
export interface F0MapArc extends F0MapLineStyle {
  id: string
  /** `[lng, lat]` origin. */
  from: [number, number]
  /** `[lng, lat]` destination. */
  to: [number, number]
  /** Bow height as a fraction of the endpoint distance. Defaults to `0.3`. */
  curvature?: number
}

/**
 * A point on the map: its coordinate plus the semantic marker variant and its
 * data. `F0Map` owns everything about how the marker looks and behaves - color,
 * size, label placement (collision-aware), selection and the pin indicator - so
 * a map's markers stay uniform. Callers pick a variant and pass its data.
 */
export type F0MapPoint = {
  id: string
  /** `[longitude, latitude]`. */
  coordinates: [number, number]
  label?: string
} & F0MapMarkerVariantProps
