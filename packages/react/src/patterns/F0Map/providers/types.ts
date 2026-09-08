import type { F0MapProvider } from "../styles"

/** `[longitude, latitude]`. */
export type LngLat = [number, number]

/** A point in the map container's own pixel space. */
export interface ScreenPoint {
  x: number
  y: number
}

export interface CameraTarget {
  center: LngLat
  zoom?: number
}

export interface CameraOptions {
  /**
   * Uniform breathing room around the target, in screen px. Omit to leave the
   * engine's current framing alone: engines that carry framing in the camera
   * transform would otherwise have it reset by a move that never mentioned it.
   */
  gutter?: number
  animate?: boolean
}

/** Normalised events. An engine's own names and readiness signals differ. */
export type MapEvent =
  | "ready"
  | "move"
  | "zoom"
  | "resize"
  | "click"
  | "error"
  | "styled"

/**
 * What an engine cannot do, declared rather than emulated, so `F0Map` degrades
 * on purpose instead of pretending every engine shares a denominator.
 */
export interface MapCapabilities extends Readonly<Record<string, boolean>> {
  /** Renders the world as a sphere at low zoom. */
  globeProjection: boolean
  /**
   * The camera's own getters interpolate while an animation runs, so a flight
   * can be read - and interrupted - from the model. False on engines that
   * report the destination in the same tick, where any logic reading the zoom
   * mid-flight silently becomes a no-op.
   */
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
 * One rendering engine behind a single vocabulary.
 *
 * Modelled on what `F0Map` needs, never on what an engine offers - an
 * abstraction shaped like one engine's API does not fit the next one. Two
 * consequences worth knowing before adding a member:
 *
 * - There is no `padding`. That is MapLibre's way of expressing framing, and
 *   Google has no camera padding at all - it reaches the same result from a
 *   pixel offset. The port asks for the outcome and each adapter picks its own
 *   mechanism.
 * - Camera intent lives above the adapter. A camera change landing mid-flight
 *   targets whatever the zoom happens to be at that instant, so the caller
 *   replays the intent; adapters only execute single moves.
 */
export interface MapAdapter {
  readonly provider: F0MapProvider
  readonly capabilities: MapCapabilities

  /**
   * The engine's own map object. An escape hatch for code not yet behind the
   * port; narrowing it is the caller's deliberate decision.
   */
  native(): unknown

  /**
   * False once the engine's map has been torn down. A React render can hand an
   * effect an adapter whose map was just destroyed (its replacement arrives on
   * the next render), and most engine accessors throw on it.
   */
  isAlive(): boolean
  destroy(): void

  /**
   * Subscribe; returns the unsubscribe. `"ready"` fires when the map can both
   * paint and project - not merely when it exists, which on some engines is
   * several frames earlier.
   */
  on(event: MapEvent, handler: () => void): () => void

  /** `null` before the engine can project (see `"ready"`). */
  project(at: LngLat): ScreenPoint | null
  unproject(point: ScreenPoint): LngLat | null

  getZoom(): number
  getCenter(): LngLat

  jumpTo(target: CameraTarget, options?: CameraOptions): void
  easeTo(target: CameraTarget, options?: CameraOptions): void
  /** One coupled pan+zoom arc. Falls back to `easeTo` where unsupported. */
  flyTo(target: CameraTarget, options?: CameraOptions): void
  /**
   * Frame every coordinate in view.
   *
   * Takes the coordinates, not a precomputed box, because turning points into
   * bounds is where engines quietly differ (antimeridian handling among them)
   * and this port promises no behaviour change yet.
   *
   * Still delegated, and it should not stay that way: measured, MapLibre and
   * Google disagree on the same coordinates by 0.082 deg of longitude (~6.8 km
   * at 41 deg N). Before a second adapter ships, this has to become a neutral
   * computation over `project`/`unproject` - which agree to the pixel - handed
   * down as a plain `easeTo`.
   */
  fitCoordinates(
    coordinates: LngLat[],
    options?: CameraOptions & { maxZoom?: number }
  ): void

  zoomIn(): void
  zoomOut(): void
  resize(): void

  /** Swap the light/dark style in place, keeping the camera. */
  applyStyle(style: unknown): void
  setGlobeProjection(enabled: boolean): void
}

/** Throws when the engine cannot start (no WebGL, context creation refused). */
export type MapAdapterFactory = (init: MapAdapterInit) => MapAdapter
