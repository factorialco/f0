import "maplibre-gl/dist/maplibre-gl.css"
import "./maplibre.css"
// Bundled with the package as a same-origin URL asset (not a runtime CDN
// fetch), so it works offline and adds no third-party dependency.
import rtlTextPluginUrl from "@mapbox/mapbox-gl-rtl-text/mapbox-gl-rtl-text.js?url"
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
import { createCurrentLocation } from "./currentLocation"
import { createLines } from "./lines"

// Arabic / Hebrew labels need the RTL text plugin to shape and order glyphs
// correctly. Registered once, lazily - MapLibre only pulls it in when RTL text
// actually appears. Guarded for SSR and for the mocked map in tests.
if (
  typeof window !== "undefined" &&
  typeof maplibregl.getRTLTextPluginStatus === "function" &&
  maplibregl.getRTLTextPluginStatus() === "unavailable"
) {
  try {
    maplibregl.setRTLTextPlugin(rtlTextPluginUrl, true)
  } catch {
    // Already registered (HMR / multiple entrypoints) - safe to ignore.
  }
}

/** Midpoint of MapLibre's wheel (1/90) and pinch (1/40) rates, so both
 * gestures feel alike; its 1/450 wheel default feels sluggish. */
const ZOOM_RATE = (1 / 90 + 1 / 40) / 2

/** The engine's own style shape, from the port's opaque one. */
const asEngineStyle = (style: unknown) =>
  style as maplibregl.StyleSpecification | string

const toBounds = (coordinates: LngLat[]) => {
  const bounds = new maplibregl.LngLatBounds()
  coordinates.forEach((c) => bounds.extend(c))
  return bounds
}

/** MapLibre expresses framing as camera padding. */
const toPadding = (gutter: number) => ({
  top: gutter,
  right: gutter,
  bottom: gutter,
  left: gutter,
})

/** `ready` is `load`: MapLibre paints and projects at the same moment. */
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
    // The hint overlay MapLibre adds for this is hidden in maplibre.css.
    cooperativeGestures: init.cooperativeGestures,
    renderWorldCopies: false,
    attributionControl: { compact: true },
  })
  map.scrollZoom.setWheelZoomRate(ZOOM_RATE)
  map.scrollZoom.setZoomRate(ZOOM_RATE)

  const lines = createLines(map)
  const currentLocation = createCurrentLocation(map)

  let destroyed = false
  // Every style accessor dereferences `map.style`, gone after `remove()`.
  const alive = () => !destroyed && Boolean(map.style)

  // Only when asked: MapLibre keeps its current padding when the option is
  // absent, so a blanket zero would reset framing.
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
      lines.destroy()
      currentLocation.destroy()
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
      map.fitBounds(toBounds(coordinates), {
        padding: toPadding(options?.gutter ?? 0),
        maxZoom: options?.maxZoom,
        animate: options?.animate ?? true,
      })
    },

    addDomMarker: (element, at) => {
      const marker = new maplibregl.Marker({ element, anchor: "center" })
        .setLngLat(at)
        .addTo(map)
      return {
        setPosition: (next) => marker.setLngLat(next),
        remove: () => marker.remove(),
      }
    },

    cameraForCoordinates: (coordinates, options) => {
      const cam = map.cameraForBounds(toBounds(coordinates), {
        padding: toPadding(options?.gutter ?? 0),
        maxZoom: options?.maxZoom,
      })
      if (!cam?.center) {
        return null
      }
      // `cameraForBounds` hands back whatever LngLatLike it likes.
      const c = cam.center as { lng: number; lat: number } | [number, number]
      const center: LngLat = Array.isArray(c) ? [c[0], c[1]] : [c.lng, c.lat]
      return { center, zoom: cam.zoom }
    },

    setLines: (next, options) => lines.set(next, options?.onClick),
    setCurrentLocation: (at) => currentLocation.set(at),

    zoomIn: () => map.zoomIn(),
    zoomOut: () => map.zoomOut(),
    resize: () => map.resize(),

    applyStyle: (style) => map.setStyle(asEngineStyle(style)),

    setGlobeProjection: (enabled) => {
      try {
        map.setProjection({ type: enabled ? "globe" : "mercator" })
      } catch {
        // Throws on a style still finalising; the ready handlers re-apply it.
      }
    },
  }
}
