import { createRef } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender as render } from "@/testing/test-utils"

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
    element: HTMLElement | undefined
    constructor(opts?: { element?: HTMLElement }) {
      this.element = opts?.element
      if (opts?.element) markerElements.push(opts.element)
    }
    setLngLat() {
      return this
    }
    addTo() {
      // Real MapLibre attaches the marker element to the map container. Do the
      // same so a pin click is reachable from a test - pins are `aria-hidden`,
      // so they never collide with the accessible list's buttons.
      if (this.element) document.body.appendChild(this.element)
      return this
    }
    remove() {
      this.element?.remove()
    }
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

  describe("viewportInset", () => {
    it("keeps the focus target clear of the covered region", () => {
      const ref = createRef<F0MapHandle>()
      render(
        <F0Map ref={ref} markers={POINTS} viewportInset={{ right: 360 }} />
      )
      ref.current?.focusMarker("hq")
      expect(mock.instances[0].calls.easeTo.at(-1)?.padding).toEqual({
        top: 0,
        right: 360,
        bottom: 0,
        left: 0,
      })
    })

    it("adds the covered region on top of the fit padding", () => {
      const ref = createRef<F0MapHandle>()
      render(
        <F0Map ref={ref} markers={POINTS} viewportInset={{ right: 360 }} />
      )
      ref.current?.fitToMarkers()
      const [, opts] = mock.instances[0].calls.fitBounds.at(-1) as [
        unknown,
        { padding: Record<string, number> },
      ]
      expect(opts.padding).toEqual({
        top: 64,
        right: 424,
        bottom: 64,
        left: 64,
      })
    })

    it("re-centres the current view when the covered region changes", () => {
      const { rerender } = render(<F0Map markers={POINTS} />)
      const before = mock.instances[0].calls.easeTo.length

      rerender(<F0Map markers={POINTS} viewportInset={{ right: 360 }} />)

      const easeTo = mock.instances[0].calls.easeTo
      expect(easeTo.length).toBe(before + 1)
      // No `center`: easing the padding alone slides the current view.
      expect(easeTo.at(-1)?.center).toBeUndefined()
      expect(easeTo.at(-1)?.padding).toEqual({
        top: 0,
        right: 360,
        bottom: 0,
        left: 0,
      })
    })

    it("re-centres on the selected marker when the inset changes", () => {
      const { rerender } = render(
        <F0Map markers={POINTS} selectedMarkerId="hq" />
      )
      rerender(
        <F0Map
          markers={POINTS}
          selectedMarkerId="hq"
          viewportInset={{ right: 360 }}
        />
      )

      const easeTo = mock.instances[0].calls.easeTo
      // The point of the inset is to keep *that* marker clear of the panel, so
      // the camera re-targets it instead of sliding the current view.
      expect(easeTo.at(-1)?.center).toEqual([2.19, 41.4])
      expect(easeTo.at(-1)?.padding).toEqual({
        top: 0,
        right: 360,
        bottom: 0,
        left: 0,
      })
    })

    it("carries a flight through to its zoom when a panel opens mid-way", () => {
      // The reveal flies to zoom 15; the panel then opens and re-centres the
      // selection. Without carrying the flight's target, that second move
      // targets whatever the zoom had reached and abandons the zoom-in.
      const ref = createRef<F0MapHandle>()
      const { rerender } = render(
        <F0Map ref={ref} markers={POINTS} selectedMarkerId="hq" />
      )
      ref.current?.focusMarker("hq")

      rerender(
        <F0Map
          ref={ref}
          markers={POINTS}
          selectedMarkerId="hq"
          viewportInset={{ right: 360 }}
        />
      )

      const easeTo = mock.instances[0].calls.easeTo
      expect(easeTo.at(-1)?.center).toEqual([2.19, 41.4])
      expect(easeTo.at(-1)?.zoom).toBe(15)
      expect(easeTo.at(-1)?.padding).toEqual({
        top: 0,
        right: 360,
        bottom: 0,
        left: 0,
      })
    })

    it("leaves the zoom alone when the panel opens over a clicked selection", () => {
      const { rerender } = render(
        <F0Map markers={POINTS} centerOnMarkerClick selectedMarkerId="hq" />
      )
      const pin = mock.markerElements[0]?.querySelector("button")
      if (!pin) throw new Error("no pin rendered")
      fireEvent.click(pin)

      rerender(
        <F0Map
          markers={POINTS}
          centerOnMarkerClick
          selectedMarkerId="hq"
          viewportInset={{ right: 360 }}
        />
      )

      // A click never zoomed, so the panel opening must not either.
      expect(mock.instances[0].calls.easeTo.at(-1)?.zoom).toBeUndefined()
    })

    it("re-fits when the covered region changes after a fit", () => {
      // Dismissing a panel drops the selection (which fits, zooming out) and
      // then frees the space, in that order. Sliding the padding for that second
      // step would freeze the camera mid-fit and abandon the zoom-out.
      const ref = createRef<F0MapHandle>()
      const { rerender } = render(
        <F0Map ref={ref} markers={POINTS} viewportInset={{ right: 360 }} />
      )
      ref.current?.fitToMarkers()
      const fitsBefore = mock.instances[0].calls.fitBounds.length

      rerender(<F0Map ref={ref} markers={POINTS} />)

      expect(mock.instances[0].calls.fitBounds.length).toBe(fitsBefore + 1)
      const [, opts] = mock.instances[0].calls.fitBounds.at(-1) as [
        unknown,
        { padding: Record<string, number> },
      ]
      // Re-framed with the space the panel gave back.
      expect(opts.padding.right).toBe(64)
    })

    it("slides the view when the padding changes with no camera intent", () => {
      const { rerender } = render(<F0Map markers={POINTS} />)
      const fitsBefore = mock.instances[0].calls.fitBounds.length
      const easesBefore = mock.instances[0].calls.easeTo.length

      rerender(<F0Map markers={POINTS} viewportInset={{ right: 360 }} />)

      expect(mock.instances[0].calls.fitBounds.length).toBe(fitsBefore)
      expect(mock.instances[0].calls.easeTo.length).toBe(easesBefore + 1)
    })

    it("stops carrying a flight once the camera has been fitted", () => {
      const ref = createRef<F0MapHandle>()
      const { rerender } = render(
        <F0Map ref={ref} markers={POINTS} selectedMarkerId="hq" />
      )
      ref.current?.focusMarker("hq")
      ref.current?.fitToMarkers()

      rerender(
        <F0Map
          ref={ref}
          markers={POINTS}
          selectedMarkerId="hq"
          viewportInset={{ right: 360 }}
        />
      )

      // The zoom-out already happened; re-applying the flight's zoom would
      // silently undo it.
      expect(mock.instances[0].calls.easeTo.at(-1)?.zoom).toBeUndefined()
    })

    it("does not re-ease when the inset is rebuilt with the same values", () => {
      const { rerender } = render(
        <F0Map markers={POINTS} viewportInset={{ right: 360 }} />
      )
      const before = mock.instances[0].calls.easeTo.length

      rerender(<F0Map markers={POINTS} viewportInset={{ right: 360 }} />)

      expect(mock.instances[0].calls.easeTo.length).toBe(before)
    })
  })

  describe("centerOnMarkerClick", () => {
    // Pins render into the marker elements MapLibre hosts, in `markers` order,
    // as `aria-hidden` buttons (keyboard users get `F0MapList` instead).
    const clickPin = (index: number) => {
      const pin = mock.markerElements[index]?.querySelector("button")
      if (!pin) throw new Error(`no pin rendered at index ${index}`)
      fireEvent.click(pin)
    }

    it("centres a clicked pin without touching the zoom", () => {
      render(<F0Map markers={POINTS} centerOnMarkerClick />)
      clickPin(0)

      const easeTo = mock.instances[0].calls.easeTo
      expect(easeTo.at(-1)?.center).toEqual([2.19, 41.4])
      // No `zoom`: a click shows the pin in context, it does not fly there.
      expect(easeTo.at(-1)?.zoom).toBeUndefined()
    })

    it("keeps the clicked pin clear of the covered region", () => {
      render(
        <F0Map
          markers={POINTS}
          centerOnMarkerClick
          viewportInset={{ right: 360 }}
        />
      )
      clickPin(0)

      expect(mock.instances[0].calls.easeTo.at(-1)?.padding).toEqual({
        top: 0,
        right: 360,
        bottom: 0,
        left: 0,
      })
    })

    it("still reports the selection", () => {
      const onMarkerSelect = vi.fn()
      render(
        <F0Map
          markers={POINTS}
          centerOnMarkerClick
          onMarkerSelect={onMarkerSelect}
        />
      )
      clickPin(0)

      expect(onMarkerSelect).toHaveBeenCalledWith("hq")
    })

    it("leaves the camera alone when it is off (the default)", () => {
      render(<F0Map markers={POINTS} />)
      const before = mock.instances[0].calls.easeTo.length
      clickPin(0)

      expect(mock.instances[0].calls.easeTo.length).toBe(before)
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
