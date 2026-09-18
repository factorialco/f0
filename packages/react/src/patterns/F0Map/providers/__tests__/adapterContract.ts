import { expect, vi } from "vitest"
import type { LngLat, MapAdapter, MapCapabilities } from "../types"

/** The engine acting, so the cases can assert what the adapter does in response. */
export interface AdapterHarness {
  adapter: MapAdapter
  container: HTMLElement

  becomeReady(): void
  /** A click on the engine's surface, not on a marker. */
  clickBackground(): void

  framedCoordinates(): LngLat[] | null

  cameraTargets(): { zoom?: number }[]

  projections(): string[]
}

export interface ContractCase {
  name: string

  requires?: keyof MapCapabilities
  run(harness: AdapterHarness): void
}

const BARCELONA: LngLat = [2.19, 41.4]
const PARIS: LngLat = [2.35, 48.86]

const marker = (label: string) => {
  const element = document.createElement("div")
  element.textContent = label
  return element
}

/**
 * A new engine means a new harness, not a new battery of cases.
 *
 * Absent on purpose: pixel stability, asymmetric framing and a mid-flight
 * camera read need a real engine - against a harness they cannot fail.
 */
export const mapAdapterContractCases: ContractCase[] = [
  {
    name: "does not announce ready before it can project",
    run: ({ adapter, becomeReady }) => {
      const projectableAtReady: boolean[] = []
      adapter.on("ready", () => {
        projectableAtReady.push(adapter.project(BARCELONA) !== null)
      })

      expect(adapter.project(BARCELONA)).toBeNull()

      becomeReady()

      expect(projectableAtReady).toEqual([true])
    },
  },
  {
    name: "routes a marker click to the marker, not to the map background",
    run: ({ adapter, becomeReady, clickBackground }) => {
      becomeReady()
      const onBackground = vi.fn()
      const onMarker = vi.fn()
      adapter.on("click", onBackground)

      const element = marker("HQ")
      element.addEventListener("click", onMarker)
      adapter.addDomMarker(element, BARCELONA)

      expect(element.isConnected).toBe(true)

      element.click()

      expect(onMarker).toHaveBeenCalledTimes(1)
      expect(onBackground).not.toHaveBeenCalled()

      clickBackground()

      expect(onBackground).toHaveBeenCalledTimes(1)
      expect(onMarker).toHaveBeenCalledTimes(1)
    },
  },
  {
    name: "keeps every marker mounted across a style swap",
    run: ({ adapter, becomeReady }) => {
      becomeReady()
      const first = marker("HQ")
      const second = marker("Office")
      const handle = adapter.addDomMarker(first, BARCELONA)
      adapter.addDomMarker(second, PARIS)

      adapter.applyStyle({ version: 8, sources: {}, layers: [] })

      expect(first.isConnected).toBe(true)
      expect(second.isConnected).toBe(true)

      handle.setPosition(PARIS)

      expect(first.isConnected).toBe(true)
    },
  },
  {
    name: "removes every node it added on destroy",
    run: ({ adapter, becomeReady }) => {
      becomeReady()
      const element = marker("HQ")
      adapter.addDomMarker(element, BARCELONA)
      adapter.setCurrentLocation(BARCELONA)
      expect(element.isConnected).toBe(true)

      adapter.destroy()

      expect(element.isConnected).toBe(false)
      expect(adapter.isAlive()).toBe(false)
      expect(adapter.project(BARCELONA)).toBeNull()
    },
  },
  {
    name: "leaves the container's other children alone on destroy",
    run: ({ adapter, container, becomeReady }) => {
      becomeReady()
      // The container is the consumer's, not the engine's: it holds the skip
      // link, the live region, the controls and the list. An engine with no
      // teardown API of its own must still not take them with it.
      const sibling = document.createElement("p")
      sibling.textContent = "not the engine's"
      container.appendChild(sibling)

      const element = marker("HQ")
      adapter.addDomMarker(element, BARCELONA)

      adapter.destroy()

      expect(sibling.isConnected).toBe(true)
      expect(element.isConnected).toBe(false)
    },
  },
  {
    name: "frames every coordinate it is given, losing no vertex",
    run: ({ adapter, becomeReady, framedCoordinates }) => {
      becomeReady()
      const vertices: LngLat[] = [BARCELONA, [2.17, 41.39], PARIS]

      adapter.fitCoordinates(vertices, { gutter: 64, maxZoom: 15 })

      expect(framedCoordinates()).toEqual(vertices)
    },
  },
  {
    name: "reframes to the coordinates it is given next, not the earlier ones",
    run: ({ adapter, becomeReady, framedCoordinates }) => {
      becomeReady()
      adapter.fitCoordinates([BARCELONA, PARIS])

      adapter.fitCoordinates([BARCELONA])

      expect(framedCoordinates()).toEqual([BARCELONA])
    },
  },
  {
    name: "ends a camera change at the requested zoom, not at an earlier one",
    run: ({ adapter, becomeReady, cameraTargets }) => {
      becomeReady()
      adapter.flyTo({ center: PARIS, zoom: 14 })

      adapter.easeTo({ center: BARCELONA, zoom: 9 })

      expect(cameraTargets().map((target) => target.zoom)).toEqual([14, 9])
    },
  },
  {
    name: "switches to the globe projection it declares",
    requires: "globeProjection",
    run: ({ adapter, becomeReady, projections }) => {
      becomeReady()

      adapter.setGlobeProjection(true)
      adapter.setGlobeProjection(false)

      expect(projections()).toEqual(["globe", "mercator"])
    },
  },
  {
    name: "reports its own provider and capability set",
    run: ({ adapter }) => {
      const capabilities: MapCapabilities = adapter.capabilities
      expect(adapter.provider).toBeTruthy()
      expect(typeof capabilities.globeProjection).toBe("boolean")
      expect(typeof capabilities.observableFlight).toBe("boolean")
    },
  },
]

/** Skips an unsupported case by name rather than dropping it silently. */
export const splitByCapabilities = (capabilities: MapCapabilities) => ({
  supported: mapAdapterContractCases.filter(
    (contractCase) =>
      !contractCase.requires || capabilities[contractCase.requires]
  ),
  unsupported: mapAdapterContractCases.filter(
    (contractCase) =>
      contractCase.requires && !capabilities[contractCase.requires]
  ),
})
