/// <reference types="google.maps" />
import type { LngLat } from "../../types"

/**
 * A stub of the Maps JavaScript API, installed as the global `google` - the
 * adapter reads the namespace off the window rather than importing it, so
 * there is no module to mock.
 *
 * It reproduces the three structural facts the contract depends on:
 *
 * - an `OverlayView` has no projection until it has been drawn, so "ready means
 *   projecting" is a real ordering rather than an assumption;
 * - the pane holding the markers is a sibling of the surface the map's own
 *   `click` is bound to, so a marker click never reaches the background;
 * - a camera move is a `panTo` optionally followed by a `setZoom`, which is how
 *   the API expresses one move and why the two collapse into one record.
 */
export interface CameraCall {
  zoom?: number
}

export interface StubMap {
  container: HTMLElement
  surface: HTMLElement
  panes: { overlayMouseTarget: HTMLElement }
  framed: LngLat[] | null
  cameraCalls: CameraCall[]
  styleCalls: unknown[]
  /** Draws every overlay, which is what makes projections available. */
  becomeReady(): void
}

const created: StubMap[] = []

export const lastMap = (): StubMap => {
  const map = created.at(-1)
  if (!map) {
    throw new Error("no stub map created")
  }
  return map
}

class StubLatLng {
  constructor(
    private readonly latitude: number,
    private readonly longitude: number
  ) {}
  lat() {
    return this.latitude
  }
  lng() {
    return this.longitude
  }
}

class StubPoint {
  constructor(
    public x: number,
    public y: number
  ) {}
}

class StubLatLngBounds {
  coordinates: LngLat[] = []
  extend(at: { lat: number; lng: number }) {
    this.coordinates.push([at.lng, at.lat])
    return this
  }
}

/** Whole degrees to whole pixels: enough for ordering, never for geometry. */
const PROJECTION = {
  fromLatLngToContainerPixel: (at: StubLatLng) =>
    new StubPoint(at.lng() * 10, at.lat() * 10),
  fromLatLngToDivPixel: (at: StubLatLng) =>
    new StubPoint(at.lng() * 10, at.lat() * 10),
  fromContainerPixelToLatLng: (point: StubPoint) =>
    new StubLatLng(point.y / 10, point.x / 10),
}

const overlays = new Set<StubOverlayView>()

class StubOverlayView {
  private map: StubMap | null = null
  private drawn = false

  setMap(map: StubMap | null) {
    this.map = map
    if (map) {
      overlays.add(this)
      this.onAdd()
      return
    }
    overlays.delete(this)
    this.onRemove()
  }
  getPanes() {
    return this.map?.panes
  }
  getProjection() {
    return this.drawn ? PROJECTION : undefined
  }
  /** Called by the map's `becomeReady`, never by the adapter. */
  render() {
    this.drawn = true
    this.draw()
  }
  onAdd() {}
  draw() {}
  onRemove() {}
}

class StubPolyline {
  static readonly instances: StubPolyline[] = []
  options: Record<string, unknown>
  constructor(options: Record<string, unknown>) {
    this.options = options
    StubPolyline.instances.push(this)
  }
  setOptions(options: Record<string, unknown>) {
    this.options = { ...this.options, ...options }
  }
  setMap() {}
  addListener() {
    return { remove: () => {} }
  }
}

class StubMapImpl implements StubMap {
  container: HTMLElement
  surface: HTMLElement
  panes: { overlayMouseTarget: HTMLElement }
  framed: LngLat[] | null = null
  cameraCalls: CameraCall[] = []
  styleCalls: unknown[] = []
  private zoom: number
  private centre: LngLat
  private listeners = new Map<string, (() => void)[]>()

  constructor(
    container: HTMLElement,
    options: { center: { lat: number; lng: number }; zoom: number }
  ) {
    this.container = container
    this.zoom = options.zoom
    this.centre = [options.center.lng, options.center.lat]
    // Two siblings, as the real API lays them out: the click surface and the
    // pane the markers live in.
    this.surface = document.createElement("div")
    const pane = document.createElement("div")
    container.append(this.surface, pane)
    this.panes = { overlayMouseTarget: pane }
    this.surface.addEventListener("click", () => this.fire("click"))
    created.push(this)
  }

  private fire(event: string) {
    this.listeners.get(event)?.forEach((handler) => handler())
  }
  addListener(event: string, handler: () => void) {
    const handlers = this.listeners.get(event) ?? []
    handlers.push(handler)
    this.listeners.set(event, handlers)
    return { remove: () => this.listeners.set(event, []) }
  }
  getZoom() {
    return this.zoom
  }
  getCenter() {
    return new StubLatLng(this.centre[1], this.centre[0])
  }
  panTo(at: { lat: number; lng: number }) {
    this.centre = [at.lng, at.lat]
    this.cameraCalls.push({})
    this.fire("bounds_changed")
  }
  setZoom(zoom: number) {
    this.zoom = zoom
    const last = this.cameraCalls.at(-1)
    if (last && last.zoom === undefined) {
      last.zoom = zoom
    } else {
      this.cameraCalls.push({ zoom })
    }
    this.fire("zoom_changed")
  }
  moveCamera(options: {
    center?: { lat: number; lng: number }
    zoom?: number
  }) {
    if (options.center) {
      this.centre = [options.center.lng, options.center.lat]
    }
    if (options.zoom !== undefined) {
      this.zoom = options.zoom
    }
    this.cameraCalls.push({ zoom: options.zoom })
  }
  fitBounds(bounds: StubLatLngBounds) {
    this.framed = bounds.coordinates
  }
  setOptions(options: Record<string, unknown>) {
    if ("styles" in options) {
      this.styleCalls.push(options.styles)
    }
  }
  becomeReady() {
    overlays.forEach((overlay) => overlay.render())
    this.fire("idle")
  }
}

export const maps = {
  Map: StubMapImpl,
  OverlayView: StubOverlayView,
  LatLng: StubLatLng,
  Point: StubPoint,
  LatLngBounds: StubLatLngBounds,
  Polyline: StubPolyline,
}

/** Installs the stub as the global namespace; returns the uninstall. */
export const installGoogleStub = () => {
  const globals = globalThis as unknown as Record<string, unknown>
  const previous = globals.google
  globals.google = { maps }
  overlays.clear()
  StubPolyline.instances.length = 0
  created.length = 0
  return () => {
    globals.google = previous
    created.length = 0
  }
}
