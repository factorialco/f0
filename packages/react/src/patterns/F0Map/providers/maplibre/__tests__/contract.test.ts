import { describe, it, vi } from "vitest"
import { createMaplibreAdapter } from ".."
import {
  splitByCapabilities,
  type AdapterHarness,
} from "../../__tests__/adapterContract"
import type { StubMap } from "./engineStub"

vi.mock("maplibre-gl", () => import("./engineStub"))

const mount = (): AdapterHarness => {
  const container = document.createElement("div")
  document.body.appendChild(container)
  const adapter = createMaplibreAdapter({
    container,
    style: { version: 8, sources: {}, layers: [] },
    center: [2.19, 41.4],
    zoom: 11,
    interactive: true,
    cooperativeGestures: false,
  })
  const map = adapter.native() as StubMap

  return {
    adapter,
    container,
    becomeReady: () => map.load(),
    clickBackground: () => map.canvas.click(),
    framedCoordinates: () => map.framed,
    cameraTargets: () => map.cameraCalls,
    projections: () => map.projectionCalls,
  }
}

const unmount = ({ adapter, container }: AdapterHarness) => {
  if (adapter.isAlive()) {
    adapter.destroy()
  }
  container.remove()
}

// Read off the adapter itself rather than restated here, so a capability the
// adapter drops shows up as a skip instead of a green run of a dead case.
const { supported, unsupported } = splitByCapabilities(
  createMaplibreAdapter({
    container: document.createElement("div"),
    style: {},
    center: [0, 0],
    zoom: 1,
    interactive: false,
    cooperativeGestures: false,
  }).capabilities
)

describe("MapAdapter contract: maplibre", () => {
  it.each(supported)("$name", (contractCase) => {
    const harness = mount()
    try {
      contractCase.run(harness)
    } finally {
      unmount(harness)
    }
  })

  it.skip.each(unsupported)("$name (capability not declared)", () => {})
})
