import type { F0MapProvider } from "../styles"

/** `[longitude, latitude]`. */
export type LngLat = [number, number]

/** Pixels relative to the map container. */
export interface ScreenPoint {
  x: number
  y: number
}

export interface CameraTarget {
  center: LngLat
  zoom?: number
}

export interface CameraOptions {
  /** Breathing room in screen px. Omit to leave the current framing alone. */
  gutter?: number
  animate?: boolean
}

/**
 * A line to draw under the markers. Colours are already resolved: the caller
 * owns the palette and the hover policy, the adapter owns the drawing.
 */
export interface MapLine {
  id: string
  coordinates: LngLat[]
  color: string
  width: number
  opacity: number
  dashed: boolean
  /** Applied while the pointer is over the line. */
  hover?: { color?: string; width?: number; opacity?: number }
}

/** A DOM element anchored to a coordinate by the engine. */
export interface DomMarkerHandle {
  setPosition(at: LngLat): void
  remove(): void
}

export type MapEvent =
  | "ready"
  | "move"
  | "zoom"
  | "resize"
  | "click"
  | "error"
  | "styled"

/** Declared rather than emulated, so F0Map degrades on purpose. */
export interface MapCapabilities extends Readonly<Record<string, boolean>> {
  globeProjection: boolean
  /** The camera's getters interpolate mid-animation, so a flight is readable. */
  observableFlight: boolean
}

export interface MapAdapterInit {
  container: HTMLElement
  style: unknown
  center: LngLat
  zoom: number
  minZoom?: number
  maxZoom?: number
  interactive: boolean
  /** Plain wheel scrolls the page; Ctrl/cmd + wheel or two fingers zoom. */
  cooperativeGestures: boolean
}

/**
 * One rendering engine behind one vocabulary, modelled on what F0Map needs
 * rather than on what an engine offers. Hence no `padding` (MapLibre's framing
 * mechanism, absent in Google) and no camera intent (the caller replays it;
 * adapters only execute single moves).
 */
export interface MapAdapter {
  readonly provider: F0MapProvider
  readonly capabilities: MapCapabilities

  /** Escape hatch for code not yet behind the port. */
  native(): unknown

  /** False once destroyed; a render can hand an effect a dead adapter. */
  isAlive(): boolean
  destroy(): void

  /** Returns the unsubscribe. `ready` means painting *and* projecting. */
  on(event: MapEvent, handler: () => void): () => void

  /** `null` before the engine can project (see `ready`). */
  project(at: LngLat): ScreenPoint | null
  unproject(point: ScreenPoint): LngLat | null

  getZoom(): number
  getCenter(): LngLat

  jumpTo(target: CameraTarget, options?: CameraOptions): void
  easeTo(target: CameraTarget, options?: CameraOptions): void
  /** One coupled pan+zoom arc. Falls back to `easeTo` where unsupported. */
  flyTo(target: CameraTarget, options?: CameraOptions): void
  /**
   * Coordinates rather than a box, because turning points into bounds is where
   * engines differ. Must become neutral maths before a second adapter ships:
   * MapLibre and Google disagree here by 0.082 deg of longitude.
   */
  fitCoordinates(
    coordinates: LngLat[],
    options?: CameraOptions & { maxZoom?: number }
  ): void

  /** Anchors an element at a coordinate, centred on it. */
  addDomMarker(element: HTMLElement, at: LngLat): DomMarkerHandle

  /**
   * Replaces every drawn line; `[]` clears them. The adapter owns hover state,
   * the cursor and re-drawing after a style swap. Beneath the markers, which
   * are DOM and always paint above the canvas.
   */
  setLines(lines: MapLine[], options?: { onClick?: (id: string) => void }): void

  /** The "you are here" dot, beneath the lines. `null` hides it. */
  setCurrentLocation(at: LngLat | null): void

  /** The camera `fitCoordinates` would apply, without applying it. */
  cameraForCoordinates(
    coordinates: LngLat[],
    options?: CameraOptions & { maxZoom?: number }
  ): CameraTarget | null

  zoomIn(): void
  zoomOut(): void
  resize(): void

  /** Swaps the style in place, keeping the camera. */
  applyStyle(style: unknown): void
  setGlobeProjection(enabled: boolean): void
}

/** Throws when the engine cannot start (no WebGL). */
export type MapAdapterFactory = (init: MapAdapterInit) => MapAdapter
