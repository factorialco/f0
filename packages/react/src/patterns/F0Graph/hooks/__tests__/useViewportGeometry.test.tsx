import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

// Drive the React Flow store selector with a controllable transform/size so the
// screen→flow rect math and quantization are tested without a mounted canvas.
// (Name must start with `mock` so Vitest allows it inside the hoisted factory.)
let mockState = {
  transform: [0, 0, 1] as [number, number, number],
  width: 0,
  height: 0,
}
vi.mock("@xyflow/react", () => ({
  useStore: (selector: (s: typeof mockState) => unknown) => selector(mockState),
}))

import { useViewportGeometry } from "../useViewportGeometry"

// `+ 0` normalizes the harmless `-0` that `-tx / zoom` produces when tx is 0,
// so `toEqual` (which distinguishes -0 from +0) compares cleanly.
const rect = (enabled: boolean, padding?: number) => {
  const r = renderHook(() => useViewportGeometry({ enabled, padding })).result
    .current
  return (
    r && {
      minX: r.minX + 0,
      minY: r.minY + 0,
      maxX: r.maxX + 0,
      maxY: r.maxY + 0,
    }
  )
}

describe("useViewportGeometry", () => {
  it("returns null when disabled", () => {
    mockState = { transform: [0, 0, 1], width: 800, height: 600 }
    expect(rect(false)).toBeNull()
  })

  it("returns null before the pane is measured (width/height 0)", () => {
    mockState = { transform: [0, 0, 1], width: 0, height: 0 }
    expect(rect(true, 0)).toBeNull()
  })

  it("returns null when zoom is 0 (never divides by zero)", () => {
    mockState = { transform: [0, 0, 0], width: 800, height: 600 }
    expect(rect(true, 0)).toBeNull()
  })

  // The expectations below are tied to NODE_WINDOW_QUANTIZE_STEP (400). They are
  // deliberately spelled out rather than recomputed from the constant: retuning
  // the step should fail these and force a fresh look at the coverage invariant
  // asserted in the last test.

  it("maps the identity transform to the pane rect (padding 0)", () => {
    // 800×600 pane, grid 400: maxY snaps outward from 600 to 800.
    mockState = { transform: [0, 0, 1], width: 800, height: 600 }
    expect(rect(true, 0)).toEqual({ minX: 0, minY: 0, maxX: 800, maxY: 800 })
  })

  it("divides the pane size by zoom", () => {
    // Pane 800×400 at zoom 2 → 400×200 flow-space, then snapped outward.
    mockState = { transform: [0, 0, 2], width: 800, height: 400 }
    expect(rect(true, 0)).toEqual({ minX: 0, minY: 0, maxX: 400, maxY: 400 })
  })

  it("accounts for a panned camera (negative transform)", () => {
    // tx=-400 at zoom 1 → the visible flow region starts at x=400.
    mockState = { transform: [-400, 0, 1], width: 800, height: 600 }
    expect(rect(true, 0)).toEqual({ minX: 400, minY: 0, maxX: 1200, maxY: 800 })
  })

  it("grows by padding and snaps edges to the quantize grid", () => {
    // padding 100, identity, grid 400:
    //   minX: floor((-100)/400)*400 = -400 ; maxX: ceil(900/400)*400 = 1200
    //   minY: floor((-100)/400)*400 = -400 ; maxY: ceil(700/400)*400 = 800
    mockState = { transform: [0, 0, 1], width: 800, height: 600 }
    expect(rect(true, 100)).toEqual({
      minX: -400,
      minY: -400,
      maxX: 1200,
      maxY: 800,
    })
  })

  // The safety property the quantize step must never break, whatever its value:
  // the returned rect always CONTAINS the viewport grown by the padding. If it
  // ever did not, a node could be inside the padding band — the band that exists
  // so panning reveals already-materialized nodes — yet be windowed out, and pop
  // in at the viewport edge.
  it("always covers the viewport plus the padding, at any camera and padding", () => {
    const cameras: [number, number, number][] = [
      [0, 0, 1],
      [-400, -250, 1],
      [137, -913, 1],
      [-1234, 567, 0.35],
      [-1234, 567, 1.8],
    ]

    for (const transform of cameras) {
      for (const padding of [0, 1, 100, 600]) {
        mockState = { transform, width: 801, height: 599 }
        const r = rect(true, padding)
        expect(r).not.toBeNull()

        const [tx, ty, zoom] = transform
        // Screen point p maps to flow coordinate (p - t) / zoom.
        const wantMinX = -tx / zoom - padding
        const wantMinY = -ty / zoom - padding
        const wantMaxX = (-tx + 801) / zoom + padding
        const wantMaxY = (-ty + 599) / zoom + padding

        expect(r!.minX).toBeLessThanOrEqual(wantMinX)
        expect(r!.minY).toBeLessThanOrEqual(wantMinY)
        expect(r!.maxX).toBeGreaterThanOrEqual(wantMaxX)
        expect(r!.maxY).toBeGreaterThanOrEqual(wantMaxY)
      }
    }
  })
})
