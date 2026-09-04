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
  const markerElements: HTMLElement[] = []
  const state = { throwOnCreate: false }

  class MockMap {
    opts: Record<string, unknown>
    handlers: Record<string, Array<(e?: unknown) => void>> = {}
    calls = {
      easeTo: [] as Array<Record<string, unknown>>,
      flyTo: [] as Array<Record<string, unknown>>,
      jumpTo: [] as Array<Record<string, unknown>>,
      fitBounds: [] as unknown[],
      setStyle: [] as unknown[],
      setProjection: [] as unknown[],
      resize: 0,
      zoomIn: 0,
      zoomOut: 0,
    }
    scrollZoom = { setWheelZoomRate() {}, setZoomRate() {} }
    // GL source/layer registry, so the vector-line layer is observable.
    sources: Record<string, { data: unknown; setData(d: unknown): void }> = {}
    layers = new Set<string>()
    // A live map exposes its Style instance; the GL layers use its presence as
    // the "map not yet destroyed" guard, so the mock must carry one.
    style = {}

    constructor(opts: Record<string, unknown>) {
      if (state.throwOnCreate) throw new Error("WebGL not supported")
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
      if (cb) (this.handlers[type] ??= []).push(cb)
      return this
    }
    once(type: string, cb: (e?: unknown) => void) {
      // Fire `load` on a microtask so the component's handler is registered.
      if (type === "load") void Promise.resolve().then(() => cb())
      return this
    }
    off() {
      return this
    }
    addControl() {
      return this
    }
    remove() {}
    resize() {
      this.calls.resize++
    }
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
      delete this.sources[id]
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
    getCenter() {
      return { lng: 0, lat: 0, toArray: () => [0, 0] }
    }
    getStyle() {
      return { sources: {}, layers: [] }
    }
  }
  class MockMarker {
    constructor({ element }: { element: HTMLElement }) {
      // Match the accessibility attributes MapLibre adds to custom marker
      // wrappers so the component has to remove them in this test too.
      element.setAttribute("role", "button")
      element.setAttribute("tabindex", "0")
      element.setAttribute("aria-label", "Map marker")
      markerElements.push(element)
    }
    setLngLat() {
      return this
    }
    addTo() {
      return this
    }
    remove() {}
  }
  class MockLngLatBounds {
    extend() {
      return this
    }
  }
  class MockAttributionControl {}

  return {
    instances,
    markerElements,
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

describe("F0Map", () => {
  beforeEach(() => {
    mock.instances.length = 0
    mock.markerElements.length = 0
    mock.state.throwOnCreate = false
  })

  describe("accessibility", () => {
    it("exposes a labelled region", () => {
      render(<F0Map markers={POINTS} ariaLabel="Offices map" />)
      expect(
        screen.getByRole("region", { name: "Offices map" })
      ).toBeInTheDocument()
    })

    it("renders every marker in the operable list (text alternative)", () => {
      render(<F0Map markers={POINTS} />)
      const list = screen.getByRole("navigation", { name: "Locations" })
      expect(list).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "HQ" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Office" })).toBeInTheDocument()
    })

    it("removes MapLibre button semantics from visual marker wrappers", async () => {
      render(<F0Map markers={POINTS} />)

      await waitFor(() => expect(mock.markerElements).toHaveLength(2))
      for (const marker of mock.markerElements) {
        expect(marker).toHaveAttribute("aria-hidden", "true")
        expect(marker).not.toHaveAttribute("role")
        expect(marker).not.toHaveAttribute("tabindex")
        expect(marker).not.toHaveAttribute("aria-label")
      }
    })

    it("normalizes an unlabeled density marker in the accessible list", () => {
      render(
        <F0Map
          markers={[
            {
              id: "density",
              coordinates: [2.19, 41.4],
              variant: "density",
              value: 128.4,
              level: "high",
            },
          ]}
        />
      )

      expect(
        screen.getByRole("button", { name: "Location · 99+" })
      ).toBeInTheDocument()
    })

    it("keeps a concise map label while exposing richer list context", () => {
      render(
        <F0Map
          markers={[
            {
              id: "density",
              coordinates: [2.19, 41.4],
              variant: "density",
              value: 42,
              level: "high",
              label: "Barcelona HQ",
              ariaLabel: "Barcelona HQ · Density: 42",
            },
          ]}
        />
      )

      expect(
        screen.getByRole("button", { name: "Barcelona HQ · Density: 42" })
      ).toBeInTheDocument()
    })

    it("announces the marker count in a live region", () => {
      render(<F0Map markers={POINTS} />)
      expect(screen.getByRole("status")).toHaveTextContent("2 locations")
    })

    it("offers a skip-to-list link targeting the list", () => {
      render(<F0Map markers={POINTS} />)
      const skip = screen.getByRole("link", { name: /skip to location list/i })
      const list = screen.getByRole("navigation", { name: "Locations" })
      expect(skip.getAttribute("href")).toBe(`#${list.id}`)
    })

    it("removes the skip link when the visible fallback already owns focus", () => {
      mock.state.throwOnCreate = true
      render(<F0Map markers={POINTS} />)

      expect(
        screen.queryByRole("link", { name: /skip to location list/i })
      ).not.toBeInTheDocument()
      expect(
        screen.getByRole("navigation", { name: "Locations" })
      ).toBeVisible()
    })
  })

  describe("imperative handle", () => {
    it("focusMarker flies the camera to the point", () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      ref.current?.focusMarker("hq")
      const easeTo = mock.instances[0].calls.easeTo
      expect(easeTo.at(-1)?.center).toEqual([2.19, 41.4])
      expect(easeTo.at(-1)?.zoom).toBe(15) // max(getZoom()=11, 15)
    })

    it("fitToMarkers frames the points", () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      ref.current?.fitToMarkers()
      expect(mock.instances[0].calls.fitBounds.length).toBeGreaterThan(0)
    })

    it("clearSelection fires the selection callback with null", () => {
      const ref = createRef<F0MapHandle>()
      const onMarkerSelect = vi.fn()
      render(
        <F0Map ref={ref} markers={POINTS} onMarkerSelect={onMarkerSelect} />
      )
      ref.current?.clearSelection()
      expect(onMarkerSelect).toHaveBeenCalledWith(null)
    })

    it("getMap returns the underlying instance", () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} markers={POINTS} />)
      expect(ref.current?.getMap()).toBe(mock.instances[0])
    })
  })

  describe("container resizing", () => {
    it("resizes the map and disconnects its observer on unmount", () => {
      const observe = vi.fn()
      const disconnect = vi.fn()
      let resizeCallback: ResizeObserverCallback | undefined
      const originalResizeObserver = Object.getOwnPropertyDescriptor(
        globalThis,
        "ResizeObserver"
      )

      class TestResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          resizeCallback = callback
        }

        observe = observe
        unobserve = vi.fn()
        disconnect = disconnect
      }

      Object.defineProperty(globalThis, "ResizeObserver", {
        configurable: true,
        writable: true,
        value: TestResizeObserver,
      })

      try {
        const { unmount } = render(<F0Map markers={POINTS} />)
        const map = mock.instances[0]
        const resizeCallsBeforeObserver = map.calls.resize

        resizeCallback?.([], {} as ResizeObserver)

        expect(observe).toHaveBeenCalledOnce()
        expect(map.calls.resize).toBe(resizeCallsBeforeObserver + 1)
        unmount()
        expect(disconnect).toHaveBeenCalledOnce()
      } finally {
        if (originalResizeObserver) {
          Object.defineProperty(
            globalThis,
            "ResizeObserver",
            originalResizeObserver
          )
        } else {
          Reflect.deleteProperty(globalThis, "ResizeObserver")
        }
      }
    })
  })

  describe("list interaction", () => {
    it("activating a list item selects that marker", () => {
      const onMarkerSelect = vi.fn()
      render(<F0Map markers={POINTS} onMarkerSelect={onMarkerSelect} />)
      fireEvent.click(screen.getByRole("button", { name: "Office" }))
      expect(onMarkerSelect).toHaveBeenCalledWith("office")
    })
  })

  describe("WebGL fallback", () => {
    it("shows the list as a visible fallback when the map can't be created", () => {
      mock.state.throwOnCreate = true
      render(<F0Map markers={POINTS} />)
      // No map instance was created...
      expect(mock.instances).toHaveLength(0)
      // ...but the list is still there and operable (now the visible fallback).
      const list = screen.getByRole("navigation", { name: "Locations" })
      expect(list).not.toHaveClass("sr-only")
      expect(screen.getByRole("button", { name: "HQ" })).toBeInTheDocument()
    })

    it("reports when the visible fallback replaces the map", async () => {
      const onFallbackChange = vi.fn()
      mock.state.throwOnCreate = true

      const result = render(
        <F0Map markers={POINTS} onFallbackChange={onFallbackChange} />
      )

      await waitFor(() =>
        expect(onFallbackChange).toHaveBeenLastCalledWith(true)
      )

      result.rerender(
        <F0Map markers={POINTS} loading onFallbackChange={onFallbackChange} />
      )
      await waitFor(() =>
        expect(onFallbackChange).toHaveBeenLastCalledWith(false)
      )

      mock.state.throwOnCreate = false
      result.rerender(
        <F0Map markers={POINTS} onFallbackChange={onFallbackChange} />
      )
      await waitFor(() => expect(mock.instances).toHaveLength(1))
      expect(onFallbackChange).toHaveBeenLastCalledWith(false)
    })
  })

  describe("routes & arcs", () => {
    it("draws them as a GL line source with solid/dashed layers", () => {
      render(<F0Map markers={POINTS} routes={ROUTES} arcs={ARCS} />)
      const map = mock.instances[0]
      expect(map.sources["f0-map-lines"]).toBeDefined()
      expect([...map.layers]).toEqual(expect.arrayContaining(LINE_LAYERS))
    })

    it("re-adds the line layers after a style swap wipes them", () => {
      render(<F0Map markers={POINTS} routes={ROUTES} />)
      const map = mock.instances[0]
      // Simulate `setStyle` clearing every custom source and layer.
      delete map.sources["f0-map-lines"]
      map.layers.clear()
      // `styledata` fires once the swapped style has loaded.
      map.handlers["styledata"]?.forEach((cb) => cb())
      expect(map.sources["f0-map-lines"]).toBeDefined()
      expect([...map.layers]).toEqual(expect.arrayContaining(LINE_LAYERS))
    })

    it("fits the camera over line coordinates even without markers", () => {
      const ref = createRef<F0MapHandle>()
      render(<F0Map ref={ref} routes={ROUTES} />)
      ref.current?.fitToMarkers()
      expect(mock.instances[0].calls.fitBounds.length).toBeGreaterThan(0)
    })

    it("fires onRouteClick when a route line is clicked", () => {
      const onRouteClick = vi.fn()
      render(
        <F0Map markers={POINTS} routes={ROUTES} onRouteClick={onRouteClick} />
      )
      mock.instances[0].handlers["click"]?.forEach((cb) =>
        cb({ features: [{ properties: { id: "commute", kind: "route" } }] })
      )
      expect(onRouteClick).toHaveBeenCalledWith("commute")
    })
  })

  describe("projection", () => {
    it("applies the globe projection when requested", () => {
      render(<F0Map markers={POINTS} projection="globe" />)
      expect(mock.instances[0].calls.setProjection).toContainEqual({
        type: "globe",
      })
    })
  })

  describe("cooperative gestures", () => {
    it("enables cooperative gestures by default", () => {
      render(<F0Map markers={POINTS} />)
      expect(mock.instances[0].opts.cooperativeGestures).toBe(true)
    })
    it("disables them in greedy mode", () => {
      render(<F0Map markers={POINTS} gestureHandling="greedy" />)
      expect(mock.instances[0].opts.cooperativeGestures).toBe(false)
    })
  })
})
