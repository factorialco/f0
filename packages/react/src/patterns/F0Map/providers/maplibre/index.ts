import maplibregl from "maplibre-gl"

import { FLY_OPTS } from "../../constants"
import type {
  CameraOptions,
  CameraTarget,
  Inset,
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

/**
 * MapLibre expresses "chrome covers this strip" as camera padding, and passing
 * it on every move is also what keeps a still camera shifted while a panel is
 * open.
 */
const toPadding = (inset: Inset | undefined, gutter: number) => ({
  top: gutter + (inset?.top ?? 0),
  right: gutter + (inset?.right ?? 0),
  bottom: gutter + (inset?.bottom ?? 0),
  left: gutter + (inset?.left ?? 0),
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

  const camera = (
    target: CameraTarget,
    options: CameraOptions | undefined
  ) => ({
    center: target.center,
    ...(target.zoom === undefined ? {} : { zoom: target.zoom }),
    padding: toPadding(options?.inset, options?.gutter ?? 0),
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

    centerInFreeRegion: (at, options) =>
      map.easeTo({
        center: at,
        padding: toPadding(options?.inset, options?.gutter ?? 0),
        animate: options?.animate ?? true,
      }),

    setFreeRegion: (options) =>
      map.easeTo({
        padding: toPadding(options?.inset, options?.gutter ?? 0),
        animate: options?.animate ?? true,
      }),

    fitCoordinates: (coordinates, options) => {
      const bounds = new maplibregl.LngLatBounds()
      coordinates.forEach((c) => bounds.extend(c))
      map.fitBounds(bounds, {
        padding: toPadding(options?.inset, options?.gutter ?? 0),
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
