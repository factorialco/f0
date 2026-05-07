import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import { useGraphZoomLevel } from "../useGraphZoomLevel"

function renderZoomLevel(
  zoomFactor: number,
  options?: Parameters<typeof useGraphZoomLevel>[1]
) {
  return zeroRenderHook(() => useGraphZoomLevel(zoomFactor, options))
}

describe("useGraphZoomLevel", () => {
  it("returns 'detail' for zoom factor 1.0", () => {
    const { result } = renderZoomLevel(1.0)
    expect(result.current).toBe("detail")
  })

  it("returns 'compact' for zoom factor 0.5", () => {
    const { result } = renderZoomLevel(0.5)
    expect(result.current).toBe("compact")
  })

  it("returns 'dot' for zoom factor 0.2", () => {
    const { result } = renderZoomLevel(0.2)
    expect(result.current).toBe("dot")
  })

  it("returns 'dot' for zoom factor 0.05", () => {
    const { result } = renderZoomLevel(0.05)
    expect(result.current).toBe("dot")
  })

  it("hysteresis prevents flicker at threshold boundaries", () => {
    // Default thresholds: detail=0.7, compact=0.3, dot=0.1
    // Default hysteresis: 0.05
    // Start at detail (zoom=0.8), then move to just below threshold
    const { result, rerender } = zeroRenderHook(
      ({ zoom }: { zoom: number }) => useGraphZoomLevel(zoom),
      { initialProps: { zoom: 0.8 } }
    )
    expect(result.current).toBe("detail")

    // At 0.68 — below 0.7 but within hysteresis band (0.7 - 0.05 = 0.65)
    // Should stay "detail" due to hysteresis
    rerender({ zoom: 0.68 })
    expect(result.current).toBe("detail")

    // At 0.64 — below hysteresis band, should transition to "compact"
    rerender({ zoom: 0.64 })
    expect(result.current).toBe("compact")
  })

  it("custom thresholds work", () => {
    const thresholds = { detail: 0.9, compact: 0.5, dot: 0.2 }
    const { result } = renderZoomLevel(0.6, { thresholds })
    expect(result.current).toBe("compact")
  })

  it("named presets work — dense", () => {
    // Dense: detail=0.5, compact=0.2, dot=0.08
    const { result } = renderZoomLevel(0.6, { preset: "dense" })
    expect(result.current).toBe("detail")
  })

  it("named presets work — sparse", () => {
    // Sparse: detail=0.85, compact=0.45, dot=0.15
    const { result } = renderZoomLevel(0.5, { preset: "sparse" })
    expect(result.current).toBe("compact")
  })

  it("edge case: zoom factor 0 returns 'dot'", () => {
    const { result } = renderZoomLevel(0)
    expect(result.current).toBe("dot")
  })

  it("edge case: zoom factor > 1 returns 'detail'", () => {
    const { result } = renderZoomLevel(2.0)
    expect(result.current).toBe("detail")
  })

  it("custom thresholds override preset", () => {
    const thresholds = { detail: 0.9, compact: 0.5, dot: 0.2 }
    // Even though preset is "dense", custom thresholds take precedence
    const { result } = renderZoomLevel(0.6, {
      preset: "dense",
      thresholds,
    })
    expect(result.current).toBe("compact")
  })
})
