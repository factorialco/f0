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

  it("maps the identity transform to the pane rect (padding 0)", () => {
    mockState = { transform: [0, 0, 1], width: 800, height: 600 }
    expect(rect(true, 0)).toEqual({ minX: 0, minY: 0, maxX: 800, maxY: 600 })
  })

  it("divides the pane size by zoom", () => {
    // Pane 800×400 at zoom 2 → 400×200 flow-space (both exact grid multiples).
    mockState = { transform: [0, 0, 2], width: 800, height: 400 }
    expect(rect(true, 0)).toEqual({ minX: 0, minY: 0, maxX: 400, maxY: 200 })
  })

  it("accounts for a panned camera (negative transform)", () => {
    // tx=-400 at zoom 1 → the visible flow region starts at x=400.
    mockState = { transform: [-400, 0, 1], width: 800, height: 600 }
    expect(rect(true, 0)).toEqual({ minX: 400, minY: 0, maxX: 1200, maxY: 600 })
  })

  it("grows by padding and snaps edges to the quantize grid", () => {
    // padding 100, identity, grid 200:
    //   minX: floor((-100)/200)*200 = -200 ; maxX: ceil(900/200)*200 = 1000
    //   minY: floor((-100)/200)*200 = -200 ; maxY: ceil(700/200)*200 = 800
    mockState = { transform: [0, 0, 1], width: 800, height: 600 }
    expect(rect(true, 100)).toEqual({
      minX: -200,
      minY: -200,
      maxX: 1000,
      maxY: 800,
    })
  })
})
