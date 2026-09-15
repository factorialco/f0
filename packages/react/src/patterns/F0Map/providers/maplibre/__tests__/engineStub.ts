import type { LngLat } from "../../types"

/**
 * MapLibre needs WebGL, absent in jsdom, so the contract suite runs the real
 * adapter against a stub of the engine. The stub reproduces the two structural
 * facts the contract depends on:
 *
 * - the canvas and the markers are siblings, so a click on a marker never
 *   reaches the canvas listener the engine's `click` is bound to;
 * - `project()` answers only once the map has loaded, so "ready means
 *   projecting" is a real ordering rather than an assumption.
 */

interface CameraCall {
  kind: "easeTo" | "flyTo" | "jumpTo"
  zoom?: number
  animate?: boolean
}

export class StubLngLatBounds {
  coordinates: LngLat[] = []
  extend(at: LngLat) {
    this.coordinates.push(at)
    return this
  }
}

export class StubMarker {
  private element?: HTMLElement
  private map?: StubMap

  constructor(options?: { element?: HTMLElement }) {
    this.element = options?.element
  }
  setLngLat(at: LngLat) {
    if (this.element) {
      this.element.dataset.lngLat = at.join(",")
    }
    return this
  }
  addTo(map: StubMap) {
    this.map = map
    if (this.element) {
      map.markerHost.appendChild(this.element)
      map.markerElements.add(this.element)
    }
    return this
  }
  remove() {
    if (this.element) {
      this.element.remove()
      this.map?.markerElements.delete(this.element)
    }
    return this
  }
}

export class StubMap {
  readonly container: HTMLElement
  /** Siblings, exactly as the engine arranges them. */
  readonly canvas: HTMLCanvasElement
  readonly markerHost: HTMLElement
  readonly markerElements = new Set<HTMLElement>()

  style: object | undefined = {}
  loaded = false
  cameraCalls: CameraCall[] = []
  framed: LngLat[] | null = null

  private sources: Record<
    string,
    { data: unknown; setData(d: unknown): void }
  > = {}
  private layers = new Set<string>()
  private loadHandlers: (() => void)[] = []

  scrollZoom = { setWheelZoomRate() {}, setZoomRate() {} }

  constructor(options: { container: HTMLElement }) {
    this.container = options.container
    this.canvas = document.createElement("canvas")
    this.markerHost = document.createElement("div")
    this.container.append(this.canvas, this.markerHost)
  }

  /** The engine finishing its first paint. */
  load() {
    this.loaded = true
    this.loadHandlers.forEach((handler) => handler())
  }

  on(type: string, a: string | (() => void), b?: () => void) {
    const handler = typeof a === "function" ? a : b
    if (!handler) {
      return this
    }
    if (type === "load") {
      this.loadHandlers.push(handler)
    } else if (type === "click") {
      this.canvas.addEventListener("click", handler)
    }
    return this
  }
  once(type: string, handler: () => void) {
    return this.on(type, handler)
  }
  off(type: string, handler: () => void) {
    if (type === "click") {
      this.canvas.removeEventListener("click", handler)
    }
    this.loadHandlers = this.loadHandlers.filter((h) => h !== handler)
    return this
  }

  project(): { x: number; y: number } | null {
    return this.loaded ? { x: 100, y: 50 } : null
  }
  unproject() {
    return { toArray: () => [0, 0] }
  }
  getZoom() {
    return 11
  }
  getMaxZoom() {
    return 18
  }
  getCenter() {
    return { lng: 0, lat: 0, toArray: () => [0, 0] }
  }
  getCanvas() {
    return this.canvas
  }
  getContainer() {
    return this.container
  }
  isStyleLoaded() {
    return this.loaded
  }

  easeTo(options: { zoom?: number; animate?: boolean }) {
    this.cameraCalls.push({ kind: "easeTo", ...options })
  }
  flyTo(options: { zoom?: number; animate?: boolean }) {
    this.cameraCalls.push({ kind: "flyTo", ...options })
  }
  jumpTo(options: { zoom?: number; animate?: boolean }) {
    this.cameraCalls.push({ kind: "jumpTo", ...options })
  }
  fitBounds(bounds: StubLngLatBounds) {
    this.framed = bounds.coordinates
  }
  cameraForBounds() {
    return { center: [0, 0], zoom: 12 }
  }

  addSource(id: string, spec: { data?: unknown }) {
    this.sources[id] = {
      data: spec?.data,
      setData: (data: unknown) => {
        this.sources[id].data = data
      },
    }
  }
  getSource(id: string) {
    return this.sources[id]
  }
  removeSource(id: string) {
    const { [id]: _removed, ...rest } = this.sources
    this.sources = rest
  }
  addLayer(spec: { id: string }) {
    this.layers.add(spec.id)
  }
  getLayer(id: string) {
    return this.layers.has(id) ? { id } : undefined
  }
  removeLayer(id: string) {
    this.layers.delete(id)
  }
  setFeatureState() {}
  getStyle() {
    return { sources: {}, layers: [] }
  }
  setStyle() {}
  projectionCalls: string[] = []
  setProjection(spec: { type: string }) {
    this.projectionCalls.push(spec.type)
  }
  addControl() {
    return this
  }
  resize() {}
  zoomIn() {}
  zoomOut() {}

  /** As the engine does: the map's DOM goes, markers included. */
  remove() {
    this.style = undefined
    this.loaded = false
    this.markerElements.forEach((element) => element.remove())
    this.markerElements.clear()
    this.canvas.remove()
    this.markerHost.remove()
  }
}

export default {
  Map: StubMap,
  Marker: StubMarker,
  LngLatBounds: StubLngLatBounds,
  getRTLTextPluginStatus: () => "loaded",
  setRTLTextPlugin: () => {},
}
