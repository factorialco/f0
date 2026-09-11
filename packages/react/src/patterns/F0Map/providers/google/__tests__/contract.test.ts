import { afterEach, beforeEach, describe, it } from "vitest"
import { createGoogleAdapter } from ".."
import {
  splitByCapabilities,
  type AdapterHarness,
} from "../../__tests__/adapterContract"
import { installGoogleStub, lastMap } from "./engineStub"

let uninstall: () => void

beforeEach(() => {
  uninstall = installGoogleStub()
})
afterEach(() => uninstall())

const mount = (): AdapterHarness => {
  const container = document.createElement("div")
  document.body.appendChild(container)
  const adapter = createGoogleAdapter({
    container,
    style: [],
    center: [2.19, 41.4],
    zoom: 11,
    interactive: true,
    cooperativeGestures: true,
  })
  const map = lastMap()

  return {
    adapter,
    container,
    becomeReady: () => map.becomeReady(),
    clickBackground: () => map.surface.click(),
    framedCoordinates: () => map.framed,
    cameraTargets: () => map.cameraCalls,
    projections: () => [],
  }
}

const unmount = ({ adapter, container }: AdapterHarness) => {
  if (adapter.isAlive()) {
    adapter.destroy()
  }
  container.remove()
}

describe("MapAdapter contract: google", () => {
  // Read off the adapter rather than restated, so a capability it drops shows
  // up as a skip instead of a green run of a dead case.
  const { supported, unsupported } = splitByCapabilities({
    globeProjection: false,
    observableFlight: false,
  })

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
