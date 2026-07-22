import type { F0MapMarkerVariantProps } from "./components/F0MapMarker"

/** Initial camera position for the map. */
export interface F0MapViewport {
  /** `[longitude, latitude]`. */
  center: [number, number]
  /** Zoom level (`0` world, higher = closer). Defaults to a city-level view. */
  zoom?: number
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
