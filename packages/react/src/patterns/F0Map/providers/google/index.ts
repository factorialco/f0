import { baseColors } from "@factorialco/f0-core"
import type { MapProviderConfig } from "../config"
import type {
  CameraTarget,
  LngLat,
  MapAdapter,
  MapAdapterFactory,
  MapCapabilities,
  MapEvent,
} from "../types"
import { createLines } from "./lines"
import { loadGoogleMapsApi } from "./loader"
import { createOverlay } from "./overlay"

const CAPABILITIES: MapCapabilities = {
  globeProjection: false,
  /**
   * `panTo` / `moveCamera` / `setZoom` all report the destination in the same
   * tick - measured - and the API exposes no duration or easing, so a flight
   * cannot be read or interrupted from the model even though the renderer does
   * glide.
   */
  observableFlight: false,
}

const asGoogleStyles = (style: unknown) =>
  style as google.maps.MapTypeStyle[] | undefined

const literal = ([lng, lat]: LngLat) => ({ lat, lng })

/** Port event -> Google's own signal. */
const EVENTS: Partial<Record<MapEvent, string>> = {
  move: "bounds_changed",
  zoom: "zoom_changed",
  click: "click",
  styled: "idle",
}

const DOT_R = 5.3
const DOT_HALO = 11 - DOT_R

/** Exported for the contract suite, which stubs the engine rather than loading it. */
export const createGoogleAdapter: MapAdapterFactory = (init): MapAdapter => {
  const map = new google.maps.Map(init.container, {
    center: literal(init.center),
    zoom: init.zoom,
    minZoom: init.minZoom,
    maxZoom: init.maxZoom,
    // No `mapId`, deliberately: with one, `styles` is ignored and the theme can
    // only change in the Cloud console - and it is immutable after the first
    // render, so a light/dark swap would mean destroying the map.
    styles: asGoogleStyles(init.style),
    disableDefaultUI: true,
    gestureHandling: !init.interactive
      ? "none"
      : init.cooperativeGestures
        ? "cooperative"
        : "greedy",
  })

  const overlay = createOverlay(map)
  const lines = createLines(map)

  let destroyed = false
  let dot: HTMLElement | undefined
  let dotHandle: { remove(): void; setPosition(at: LngLat): void } | undefined

  const camera = (target: CameraTarget) => {
    map.panTo(literal(target.center))
    if (target.zoom !== undefined) {
      map.setZoom(target.zoom)
    }
  }

  return {
    provider: "google",
    capabilities: CAPABILITIES,
    native: () => map,
    isAlive: () => !destroyed,

    destroy: () => {
      destroyed = true
      lines.destroy()
      dotHandle?.remove()
      overlay.destroy()
      // Google offers no teardown of its own; dropping the nodes it rendered is
      // what releases the map.
      init.container.replaceChildren()
    },

    on: (event, handler) => {
      if (event === "ready") {
        return overlay.onReady(handler)
      }
      if (event === "resize") {
        // No resize event exists; the container's own size is the signal.
        const observer = new ResizeObserver(() => handler())
        observer.observe(init.container)
        return () => observer.disconnect()
      }
      if (event === "error") {
        // The API reports a rejected key through this global and nothing else.
        const globals = window as unknown as Record<string, unknown>
        const previous = globals.gm_authFailure
        globals.gm_authFailure = handler
        return () => {
          globals.gm_authFailure = previous
        }
      }
      const listener = map.addListener(EVENTS[event] as string, handler)
      return () => listener.remove()
    },

    project: overlay.project,
    unproject: overlay.unproject,

    getZoom: () => map.getZoom() ?? init.zoom,
    getCenter: () => {
      const center = map.getCenter()
      return center ? [center.lng(), center.lat()] : init.center
    },

    jumpTo: (target) => {
      map.moveCamera({
        center: literal(target.center),
        ...(target.zoom === undefined ? {} : { zoom: target.zoom }),
      })
    },
    easeTo: camera,
    // No coupled pan+zoom arc exists here, and no duration or easing parameter
    // either; this is the same move, which the renderer glides on its own.
    flyTo: camera,

    fitCoordinates: (coordinates, options) => {
      const bounds = new google.maps.LatLngBounds()
      coordinates.forEach((at) => bounds.extend(literal(at)))
      const gutter = options?.gutter ?? 0
      map.fitBounds(bounds, {
        top: gutter,
        right: gutter,
        bottom: gutter,
        left: gutter,
      })
      if (options?.maxZoom !== undefined) {
        const fitted = map.getZoom()
        if (fitted !== undefined && fitted > options.maxZoom) {
          map.setZoom(options.maxZoom)
        }
      }
    },

    /**
     * Computed here rather than delegated: Google has no `cameraForBounds`. The
     * pixel box at the current zoom gives the scale change needed to fit, which
     * is a zoom delta - the same maths `fitCoordinates` should eventually share.
     */
    cameraForCoordinates: (coordinates, options) => {
      if (coordinates.length === 0) {
        return null
      }
      const points = coordinates.map((at) => overlay.project(at))
      if (points.some((point) => point === null)) {
        return null
      }
      const xs = points.map((point) => point!.x)
      const ys = points.map((point) => point!.y)
      const centre = overlay.unproject({
        x: (Math.min(...xs) + Math.max(...xs)) / 2,
        y: (Math.min(...ys) + Math.max(...ys)) / 2,
      })
      if (!centre) {
        return null
      }
      const gutter = options?.gutter ?? 0
      const width = Math.max(Math.max(...xs) - Math.min(...xs), 1)
      const height = Math.max(Math.max(...ys) - Math.min(...ys), 1)
      const free = {
        width: Math.max(init.container.clientWidth - gutter * 2, 1),
        height: Math.max(init.container.clientHeight - gutter * 2, 1),
      }
      const scale = Math.min(free.width / width, free.height / height)
      const zoom = Math.min(
        (map.getZoom() ?? init.zoom) + Math.log2(scale),
        options?.maxZoom ?? Infinity
      )
      return { center: centre, zoom }
    },

    addDomMarker: overlay.add,
    setLines: (next, options) => lines.set(next, options?.onClick),

    setCurrentLocation: (at) => {
      if (!at) {
        dotHandle?.remove()
        dotHandle = undefined
        dot = undefined
        return
      }
      if (!dot) {
        dot = document.createElement("div")
        // Fixed screen size, so a `Circle` (whose radius is in metres) is the
        // wrong primitive - it would grow and shrink with the zoom.
        dot.style.cssText = [
          `width:${DOT_R * 2}px`,
          `height:${DOT_R * 2}px`,
          "border-radius:50%",
          `background:hsl(${baseColors.malibu[60]})`,
          `box-shadow:0 0 0 ${DOT_HALO}px hsl(${baseColors.malibu[50]} / 0.3)`,
          "pointer-events:none",
        ].join(";")
        dotHandle = overlay.add(dot, at)
        return
      }
      dotHandle?.setPosition(at)
    },

    zoomIn: () => map.setZoom((map.getZoom() ?? init.zoom) + 1),
    zoomOut: () => map.setZoom((map.getZoom() ?? init.zoom) - 1),
    // Google re-reads its container on its own; there is nothing to poke.
    resize: () => {},

    applyStyle: (style) => map.setOptions({ styles: asGoogleStyles(style) }),
    // Declared unsupported; F0Map degrades rather than pretending.
    setGlobeProjection: () => {},
  }
}

/** Resolves once the API is in the page, which is what keeps the factory sync. */
export const loadGoogleAdapter = async (
  config?: MapProviderConfig
): Promise<MapAdapterFactory> => {
  if (!config?.apiKey) {
    throw new Error(
      "F0Map: the google provider needs an apiKey on <F0Provider map={{ ... }}>."
    )
  }
  await loadGoogleMapsApi(config.apiKey)
  return createGoogleAdapter
}
