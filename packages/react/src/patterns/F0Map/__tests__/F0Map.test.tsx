import { createRef } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import {
  fireEvent,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0Map, type F0MapHandle } from "../F0Map"
import type { F0MapArc, F0MapPoint, F0MapRoute } from "../types"

// maplibre-gl needs WebGL (absent in jsdom). Stub the classes F0Map touches,
// recording camera calls so behaviour is observable. `throwOnCreate` simulates
// a machine without WebGL (the map constructor throwing).
const mock = vi.hoisted(() => {
  const instances: MockMap[] = []
  const markers: {
    element?: HTMLElement
    position: [number, number] | null
    added: boolean
  }[] = []
  const state = { throwOnCreate: false }

  class MockMap {
    opts: Record<string, unknown>
    handlers: Record<string, ((e?: unknown) => void)[]> = {}
    calls = {
      easeTo: [] as Record<string, unknown>[],
      flyTo: [] as Record<string, unknown>[],
      jumpTo: [] as Record<string, unknown>[],
      fitBounds: [] as unknown[],
      setStyle: [] as unknown[],
      setProjection: [] as unknown[],
      zoomIn: 0,
      zoomOut: 0,
    }
    scrollZoom = { setWheelZoomRate() {}, setZoomRate() {} }
    // GL source/layer registry, so the vector-line layer is observable.
    sources: Record<string, { data: unknown; setData(d: unknown): void }> = {}
    layers = new Set<string>()
    layerInsertions: [string, string | undefined][] = []
    // A live map exposes its Style instance; the GL layers use its presence as
    // the "map not yet destroyed" guard, so the mock must carry one.
    style = {}

    constructor(opts: Record<string, unknown>) {
      if (state.throwOnCreate) {
        throw new Error("WebGL not supported")
      }
      this.opts = opts
      instances.push(this)
    }
    // Accepts both `on(type, cb)` and the layer-scoped `on(type, layerId, cb)`.
    on(
      type: string,
      a: string | ((e?: unknown) => void),
      b?: (e?: unknown) => void
    ) {
      const cb = typeof a === "function" ? a : b
      if (cb) {
        this.handlers[type] ??= []
        this.handlers[type].push(cb)
        // A real map fires `load` at whoever is subscribed, `on` and `once`
        // alike - and the adapter subscribes with `on`. Deferred to a microtask
        // so the subscription is in place first.
        if (type === "load") {
          void Promise.resolve().then(() => cb())
        }
      }
      return this
    }
    once(type: string, cb: (e?: unknown) => void) {
      if (type === "load") {
        void Promise.resolve().then(() => cb())
      }
      return this
    }
    off() {
      return this
    }
    addControl() {
      return this
    }
    remove() {}
    resize() {}
    setStyle(s: unknown) {
      this.calls.setStyle.push(s)
    }
    setProjection(p: unknown) {
      this.calls.setProjection.push(p)
    }
    easeTo(o: Record<string, unknown>) {
      this.calls.easeTo.push(o)
    }
    flyTo(o: Record<string, unknown>) {
      this.calls.flyTo.push(o)
    }
    jumpTo(o: Record<string, unknown>) {
      this.calls.jumpTo.push(o)
    }
    fitBounds(...a: unknown[]) {
      this.calls.fitBounds.push(a)
    }
    cameraForBounds() {
      return { center: [0, 0], zoom: 12 }
    }
    getZoom() {
      return 11
    }
    getMaxZoom() {
      return 18
    }
    zoomIn() {
      this.calls.zoomIn++
    }
    zoomOut() {
      this.calls.zoomOut++
    }
    project() {
      return { x: 0, y: 0 }
    }
    getCanvas() {
      return document.createElement("canvas")
    }
    getContainer() {
      return document.createElement("div")
    }
    isStyleLoaded() {
      return true
    }
    addSource(id: string, spec: { data?: unknown }) {
      this.sources[id] = {
        data: spec?.data,
        setData: (d: unknown) => {
          this.sources[id].data = d
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
    addLayer(spec: { id: string }, before?: string) {
      this.layers.add(spec.id)
      this.layerInsertions.push([spec.id, before])
    }
    getLayer(id: string) {
      return this.layers.has(id) ? { id } : undefined
    }
    removeLayer(id: string) {
      this.layers.delete(id)
    }
    setFeatureState() {}
    getCenter() {
      return { lng: 0, lat: 0, toArray: () => [0, 0] }
    }
    getStyle() {
      return { sources: {}, layers: [] }
    }
  }
  class MockMarker {
    // Held by reference, not by index: a removal used to shift every later
    // marker's position out from under it.
    entry: {
      element?: HTMLElement
      position: [number, number] | null
      added: boolean
    }
    constructor(opts?: { element?: HTMLElement }) {
      this.entry = { element: opts?.element, position: null, added: false }
      markers.push(this.entry)
    }
    setLngLat(at: [number, number]) {
      this.entry.position = at
      return this
    }
    addTo() {
      this.entry.added = true
      return this
    }
    remove() {
      const at = markers.indexOf(this.entry)
      if (at >= 0) {
        markers.splice(at, 1)
      }
      return this
    }
  }
  class MockLngLatBounds {
    extend() {
      return this
    }
  }
  class MockAttributionControl {
    opts: Record<string, unknown> | undefined
    constructor(opts?: Record<string, unknown>) {
      this.opts = opts
    }
  }

  return {
    instances,
    markers,
    state,
    Map: MockMap,
    Marker: MockMarker,
    LngLatBounds: MockLngLatBounds,
    AttributionControl: MockAttributionControl,
  }
})

vi.mock("maplibre-gl", () => ({
  default: {
    Map: mock.Map,
    Marker: mock.Marker,
    LngLatBounds: mock.LngLatBounds,
    AttributionControl: mock.AttributionControl,
  },
}))

const POINTS: F0MapPoint[] = [
  { id: "hq", coordinates: [2.19, 41.4], variant: "workplace", label: "HQ" },
  {
    id: "office",
    coordinates: [2.15, 41.41],
    variant: "default",
    label: "Office",
  },
]

const ROUTES: F0MapRoute[] = [
  {
    id: "commute",
    coordinates: [
      [2.19, 41.4],
      [2.17, 41.39],
      [2.15, 41.41],
    ],
    variant: "malibu",
  },
]
const ARCS: F0MapArc[] = [
  { id: "bcn-par", from: [2.19, 41.4], to: [2.35, 48.86], dashed: true },
]
const LINE_LAYERS = ["f0-map-lines-solid", "f0-map-lines-dashed"]

// The engine is behind a dynamic import, so it lands a microtask after render
// rather than during it.
const engine = async () => {
  await waitFor(() => expect(mock.instances.length).toBeGreaterThan(0))
  return mock.instances[0]
}

describe("F0Map", () => {
  beforeEach(() => {
    mock.instances.length = 0
    mock.markers.length = 0
    mock.state.throwOnCreate = false
  })

  describe("accessibility", () => {
    it("exposes a labelled region", async () => {
      render(<F0Map markers={POINTS} ariaLabel="Offices map" />)
      expect(
        screen.getByRole("region", { name: "Offices map" })
      ).toBeInTheDocument()
    })

    it("renders every marker in the operable list (text alternative)", async () => {
      render(<F0Map markers={POINTS} />)
      const list = screen.getByRole("navigation", { name: "Locations" })
      expect(list).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "HQ" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Office" })).toBeInTheDocument()
    })

    it("announces the marker count in a live region", async () => {
      render(<F0Map markers={POINTS} />)
      expect(screen.getByRole("status")).toHaveTextContent("2 locations")
    })

    it("offers a skip-to-list link targeting the list", async () => {
      render(<F0Map markers={POINTS} />)
      const skip = screen.getByRole("link", { name: /skip to location list/i })
      const list = screen.getByRole("navigation", { name: "Locations" })
      expect(skip.getAttribute("href")).toBe(`#${list.id}`)
    })
  })

  describe("imperative handle", () => {
    it("focusMarker flies the camera to the point", async () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      const easeTo = (await engine()).calls.easeTo
      ref.current?.focusMarker("hq")
      expect(easeTo.at(-1)?.center).toEqual([2.19, 41.4])
      expect(easeTo.at(-1)?.zoom).toBe(15) // max(getZoom()=11, 15)
    })

    it("fitToMarkers frames the points", async () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      ref.current?.fitToMarkers()
      expect((await engine()).calls.fitBounds.length).toBeGreaterThan(0)
    })

    it("clearSelection fires the selection callback with null", async () => {
      const ref = createRef<F0MapHandle>()
      const onMarkerSelect = vi.fn()
      render(
        <F0Map ref={ref} markers={POINTS} onMarkerSelect={onMarkerSelect} />
      )
      ref.current?.clearSelection()
      expect(onMarkerSelect).toHaveBeenCalledWith(null)
    })

    it("getNativeMap returns the engine's own instance", async () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      const map = await engine()
      await waitFor(() => expect(ref.current?.getNativeMap()).toBe(map))
    })
  })

  describe("list interaction", () => {
    it("activating a list item selects that marker", async () => {
      const onMarkerSelect = vi.fn()
      render(<F0Map markers={POINTS} onMarkerSelect={onMarkerSelect} />)
      fireEvent.click(screen.getByRole("button", { name: "Office" }))
      expect(onMarkerSelect).toHaveBeenCalledWith("office")
    })
  })

  describe("WebGL fallback", () => {
    it("shows the list as a visible fallback when the map can't be created", async () => {
      mock.state.throwOnCreate = true
      render(<F0Map markers={POINTS} />)
      // No map instance was created...
      expect(mock.instances).toHaveLength(0)
      // ...but the list is still there and operable (now the visible fallback).
      const list = screen.getByRole("navigation", { name: "Locations" })
      await waitFor(() => expect(list).not.toHaveClass("sr-only"))
      expect(screen.getByRole("button", { name: "HQ" })).toBeInTheDocument()
    })
  })

  describe("routes & arcs", () => {
    it("draws them as a GL line source with solid/dashed layers", async () => {
      render(<F0Map markers={POINTS} routes={ROUTES} arcs={ARCS} />)
      const map = await engine()
      expect(map.sources["f0-map-lines"]).toBeDefined()
      expect([...map.layers]).toEqual(expect.arrayContaining(LINE_LAYERS))
    })

    it("re-adds the line layers after a style swap wipes them", async () => {
      render(<F0Map markers={POINTS} routes={ROUTES} />)
      const map = await engine()
      // Simulate `setStyle` clearing every custom source and layer.
      delete map.sources["f0-map-lines"]
      map.layers.clear()
      // `styledata` fires once the swapped style has loaded.
      map.handlers["styledata"]?.forEach((cb) => cb())
      expect(map.sources["f0-map-lines"]).toBeDefined()
      expect([...map.layers]).toEqual(expect.arrayContaining(LINE_LAYERS))
    })

    it("fits the camera over line coordinates even without markers", async () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} routes={ROUTES} />)
      const map = await engine()
      ref.current?.fitToMarkers()
      expect(map.calls.fitBounds.length).toBeGreaterThan(0)
    })

    it("fires onRouteClick when a route line is clicked", async () => {
      const onRouteClick = vi.fn()
      render(
        <F0Map markers={POINTS} routes={ROUTES} onRouteClick={onRouteClick} />
      )
      const map = await engine()
      map.handlers["click"]?.forEach((cb) =>
        cb({ features: [{ properties: { id: "commute", kind: "route" } }] })
      )
      expect(onRouteClick).toHaveBeenCalledWith("commute")
    })
  })

  describe("current location", () => {
    const grantLocation = () => {
      Object.defineProperty(navigator, "geolocation", {
        configurable: true,
        value: {
          getCurrentPosition: (success: PositionCallback) =>
            success({
              coords: { longitude: 2.16, latitude: 41.4 },
            } as GeolocationPosition),
        },
      })
      Object.defineProperty(navigator, "permissions", {
        configurable: true,
        value: {
          query: async () => ({ state: "granted" }) as PermissionStatus,
        },
      })
    }

    it("draws the dot beneath the lines once located", async () => {
      grantLocation()
      render(<F0Map markers={POINTS} routes={ROUTES} showCurrentLocation />)
      const map = await engine()
      await waitFor(() =>
        expect(map.layers.has("f0-current-location")).toBe(true)
      )
      expect(map.sources["f0-current-location"]).toBeDefined()
      // Below the lines either way: anchored under the bottom line layer when
      // that layer is already there, and otherwise simply added before it -
      // which one applies depends on whether the located dot or the lines win
      // the race, and both orders keep the dot beneath.
      const inserted = map.layerInsertions.map(([id]) => id)
      const [, anchor] =
        map.layerInsertions[inserted.indexOf("f0-current-location")]
      expect(
        anchor === "f0-map-lines-solid" ||
          inserted.indexOf("f0-current-location") <
            inserted.indexOf("f0-map-lines-solid")
      ).toBe(true)
    })
  })

  describe("markers", () => {
    it("anchors one engine marker per point, at its coordinates", async () => {
      render(<F0Map markers={POINTS} />)
      await engine()
      await waitFor(() => expect(mock.markers).toHaveLength(POINTS.length))
      expect(mock.markers.map((m) => m.position)).toEqual(
        POINTS.map((p) => p.coordinates)
      )
      // Anchored to the map, with the element the content is portalled into.
      expect(mock.markers.every((m) => m.added)).toBe(true)
      expect(mock.markers.every((m) => m.element instanceof HTMLElement)).toBe(
        true
      )
    })
  })

  describe("style", () => {
    it("ignores a style meant for another engine, and says so", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
      render(
        <F0Map
          markers={POINTS}
          mapStyle={{
            provider: "google",
            light: ["a google style"],
            dark: ["a google style"],
          }}
        />
      )
      const map = await engine()

      // Handing an engine another engine's style renders nothing and explains
      // nothing, so the tag is enforced rather than merely carried.
      expect(map.opts.style).toBeUndefined()
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('ignoring a "google" mapStyle')
      )
      warn.mockRestore()
    })
  })

  describe("engine readiness", () => {
    it("frames the markers and applies the projection once ready", async () => {
      render(<F0Map markers={POINTS} />)
      // The readiness handler does this, not the imperative handle: nothing
      // here calls fitToMarkers.
      const map = await engine()
      await waitFor(() => expect(map.calls.fitBounds.length).toBeGreaterThan(0))
      expect(map.calls.setProjection.at(-1)).toEqual({
        type: "mercator",
      })
    })
  })

  describe("style", () => {
    it("hands the engine the matching half of the style pair", async () => {
      // The pair is opaque to F0Map (its shape belongs to the engine), so the
      // only thing worth asserting is that the right half reaches the map
      // unchanged - jsdom has no `.dark` ancestor, so that is `light`.
      const light = { version: 8, name: "light" }
      const dark = { version: 8, name: "dark" }
      render(
        <F0Map
          markers={POINTS}
          mapStyle={{ provider: "maplibre", light, dark }}
        />
      )
      expect((await engine()).opts.style).toBe(light)
    })
  })

  describe("projection", () => {
    it("applies the globe projection when requested", async () => {
      render(<F0Map markers={POINTS} projection="globe" />)
      expect((await engine()).calls.setProjection).toContainEqual({
        type: "globe",
      })
    })
  })

  describe("cooperative gestures", () => {
    it("enables cooperative gestures by default", async () => {
      render(<F0Map markers={POINTS} />)
      expect((await engine()).opts.cooperativeGestures).toBe(true)
    })
    it("disables them in greedy mode", async () => {
      render(<F0Map markers={POINTS} gestureHandling="greedy" />)
      expect((await engine()).opts.cooperativeGestures).toBe(false)
    })
  })
})
