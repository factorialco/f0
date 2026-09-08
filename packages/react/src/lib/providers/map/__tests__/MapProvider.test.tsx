import { describe, expect, it } from "vitest"
import type { F0MapProvider } from "@/patterns/F0Map/providers/names"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { MapProvider, useMapProvider } from ".."

// The union has one member today, and one value cannot tell "reads the
// context" apart from "returns the constant".
const OTHER = "other-engine" as F0MapProvider

const Engine = ({ override }: { override?: F0MapProvider }) => (
  <span data-testid="engine">{useMapProvider(override)}</span>
)

const engineInUse = () => screen.getByTestId("engine").textContent

describe("useMapProvider", () => {
  it("falls back to the keyless engine when nothing is configured", () => {
    render(<Engine />)

    expect(engineInUse()).toBe("maplibre")
  })

  it("takes the app-level engine from the provider", () => {
    render(
      <MapProvider provider={OTHER}>
        <Engine />
      </MapProvider>
    )

    expect(engineInUse()).toBe(OTHER)
  })

  it("lets one map override the app-level engine", () => {
    render(
      <MapProvider provider={OTHER}>
        <Engine override="maplibre" />
      </MapProvider>
    )

    expect(engineInUse()).toBe("maplibre")
  })

  it("still falls back when the provider carries no engine", () => {
    render(
      <MapProvider>
        <Engine />
      </MapProvider>
    )

    expect(engineInUse()).toBe("maplibre")
  })
})
