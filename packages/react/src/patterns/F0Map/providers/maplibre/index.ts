import maplibregl from "maplibre-gl"
import { FLY_OPTS } from "../../constants"
import type {
  CameraOptions,
  CameraTarget,
  LngLat,
  MapAdapter,
  MapAdapterFactory,
  MapCapabilities,
  MapEvent,
  ScreenPoint,
} from "../types"

/**
 * Unify mouse-wheel and trackpad-pinch zoom at the midpoint of their defaults
 * (wheel 1/90, pinch 1/40) so both gestures feel the same - neither
 * exaggerated. MapLibre's own wheel default (1/450) feels sluggish.
 */
const ZOOM_RATE = (1 / 90 + 1 / 40) / 2

/** The engine's own style shape, from the port's opaque one. */
const asEngineStyle = (style: unknown) =>
  style as maplibregl.StyleSpecification | string

/** MapLibre expresses framing as camera padding. */
const toPadding = (gutter: number) => ({
  top: gutter,
  right: gutter,
  bottom: gutter,
  left: gutter,
})

/** Port event -> MapLibre event. `ready` is `load`: painting and projecting. */
const EVENTS: Record<MapEvent, string> = {
  ready: "load",
  move: "move",
  zoom: "zoom",
  resize: "resize",
  click: "click",
  error: "error",
  styled: "style.load",
}

const CAPABILITIES: MapCapabilities = {
  globeProjection: true,
  observableFlight: true,
}

export const createMaplibreAdapter: MapAdapterFactory = (init): MapAdapter => {
  // Throws without WebGL; the caller turns that into the list fallback.
  const map = new maplibregl.Map({
    container: init.container,
    style: asEngineStyle(init.style),
    center: init.center,
    zoom: init.zoom,
    minZoom: init.minZoom,
    maxZoom: init.maxZoom,
    interactive: init.interactive,
    // The hint overlay MapLibre adds for this is hidden in F0Map.css.
    cooperativeGestures: init.cooperativeGestures,
    renderWorldCopies: false,
    attributionControl: { compact: true },
  })
  map.scrollZoom.setWheelZoomRate(ZOOM_RATE)
  map.scrollZoom.setZoomRate(ZOOM_RATE)

  let destroyed = false
  // Every style accessor dereferences `map.style`, which is gone after
  // `remove()`, so liveness is what guards each of them.
  const alive = () => !destroyed && Boolean(map.style)

  // Padding only when the caller asked to reframe: MapLibre keeps its current
  // padding when the option is absent, so always sending a zero would reset
  // framing out from under a move that never mentioned it.
  const camera = (
    target: CameraTarget,
    options: CameraOptions | undefined
  ) => ({
    center: target.center,
    ...(target.zoom === undefined ? {} : { zoom: target.zoom }),
    ...(options?.gutter === undefined
      ? {}
      : { padding: toPadding(options.gutter) }),
    animate: options?.animate ?? true,
  })

  return {
    provider: "maplibre",
    capabilities: CAPABILITIES,
    native: () => map,
    isAlive: alive,
    destroy: () => {
      destroyed = true
      map.remove()
    },

    on: (event, handler) => {
      const name = EVENTS[event]
      map.on(name, handler)
      return () => {
        map.off(name, handler)
      }
    },

    project: (at: LngLat) => (alive() ? map.project(at) : null),
    unproject: (point: ScreenPoint) =>
      alive() ? (map.unproject([point.x, point.y]).toArray() as LngLat) : null,

    getZoom: () => map.getZoom(),
    getCenter: () => map.getCenter().toArray() as LngLat,

    jumpTo: (target, options) => map.jumpTo(camera(target, options)),
    easeTo: (target, options) => map.easeTo(camera(target, options)),
    flyTo: (target, options) =>
      map.flyTo({ ...FLY_OPTS, ...camera(target, options) }),

    fitCoordinates: (coordinates, options) => {
      const bounds = new maplibregl.LngLatBounds()
      coordinates.forEach((c) => bounds.extend(c))
      map.fitBounds(bounds, {
        padding: toPadding(options?.gutter ?? 0),
        maxZoom: options?.maxZoom,
        animate: options?.animate ?? true,
      })
    },

    zoomIn: () => map.zoomIn(),
    zoomOut: () => map.zoomOut(),
    resize: () => map.resize(),

    applyStyle: (style) => map.setStyle(asEngineStyle(style)),

    setGlobeProjection: (enabled) => {
      // `isStyleLoaded()` can report true while the style is still finalising,
      // and `setProjection` hard-throws on one that is. Dropping the failure is
      // safe: the pending `load` / `style.load` handlers re-apply it.
      try {
        map.setProjection({ type: enabled ? "globe" : "mercator" })
      } catch {
        // Style mid-load.
      }
    },
  }
}
