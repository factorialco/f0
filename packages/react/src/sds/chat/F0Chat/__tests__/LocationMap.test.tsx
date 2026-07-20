import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, waitFor } from "@/testing/test-utils"

import LocationMap from "../components/LocationMap"

// maplibre-gl needs WebGL (absent in jsdom) — stub the Map class, recording
// the constructor style and setStyle calls so theme switching is observable.
const mock = vi.hoisted(() => {
  class MockMap {
    style: string
    styleCalls: string[] = []
    constructor(options: { style: string }) {
      this.style = options.style
    }
    setStyle(url: string) {
      this.styleCalls.push(url)
    }
    remove() {}
  }
  const instances: InstanceType<typeof MockMap>[] = []
  return {
    instances,
    Map: class extends MockMap {
      constructor(options: { style: string }) {
        super(options)
        instances.push(this)
      }
    },
  }
})

vi.mock("maplibre-gl", () => ({ default: { Map: mock.Map } }))

const LIGHT_URL = "https://tiles.openfreemap.org/styles/positron"
const DARK_URL = "https://tiles.openfreemap.org/styles/dark"

describe("LocationMap", () => {
  beforeEach(() => {
    mock.instances.length = 0
  })

  it("creates the map with the light style by default", () => {
    render(<LocationMap latitude={41.3894} longitude={2.1607} />)
    expect(mock.instances).toHaveLength(1)
    expect(mock.instances[0].style).toBe(LIGHT_URL)
  })

  it("switches to the dark style inside a `.dark` ancestor", async () => {
    render(
      <div className="dark">
        <LocationMap latitude={41.3894} longitude={2.1607} />
      </div>
    )
    await waitFor(() =>
      expect(mock.instances[0].styleCalls).toContain(DARK_URL)
    )
  })

  it("follows `.dark` toggles on an ancestor after mount", async () => {
    const { container } = render(
      <div>
        <LocationMap latitude={41.3894} longitude={2.1607} />
      </div>
    )
    const wrapper = container.firstElementChild as HTMLElement

    wrapper.classList.add("dark")
    await waitFor(() =>
      expect(mock.instances[0].styleCalls).toContain(DARK_URL)
    )

    wrapper.classList.remove("dark")
    await waitFor(() =>
      expect(mock.instances[0].styleCalls).toContain(LIGHT_URL)
    )
  })

  it("does not re-apply the style it was created with", () => {
    render(<LocationMap latitude={41.3894} longitude={2.1607} />)
    expect(mock.instances[0].styleCalls).toHaveLength(0)
  })
})
