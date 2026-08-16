import { describe, expect, it } from "vitest"

import { type F0WindowPlacement } from "../types"
import {
  applyResize,
  isWindowPlacement,
  nearestCorner,
  placementFromRect,
  resolvePlacement,
  settlePlacement,
} from "../window/placement"
import {
  SNAP_THRESHOLD,
  WINDOW_MARGIN,
  WINDOW_MIN_HEIGHT,
  WINDOW_MIN_WIDTH,
} from "../window/window-constants"

const VIEWPORT = { width: 1440, height: 900 }

const placement = (
  overrides: Partial<F0WindowPlacement> = {}
): F0WindowPlacement => ({
  corner: "br",
  dx: 24,
  dy: 24,
  width: 360,
  height: 260,
  ...overrides,
})

describe("resolvePlacement", () => {
  it("anchors to the bottom right", () => {
    const rect = resolvePlacement(placement(), VIEWPORT)
    expect(rect.x).toBe(1440 - 24 - 360)
    expect(rect.y).toBe(900 - 24 - 260)
  })

  it("anchors to the top left", () => {
    const rect = resolvePlacement(placement({ corner: "tl" }), VIEWPORT)
    expect(rect.x).toBe(24)
    expect(rect.y).toBe(24)
  })

  it("keeps the window on screen when the viewport shrinks", () => {
    const rect = resolvePlacement(placement(), { width: 500, height: 400 })
    expect(rect.x).toBeGreaterThanOrEqual(0)
    expect(rect.y).toBeGreaterThanOrEqual(0)
    expect(rect.x + rect.width).toBeLessThanOrEqual(500)
    expect(rect.y + rect.height).toBeLessThanOrEqual(400)
  })

  it("clamps below the minimum size", () => {
    const rect = resolvePlacement(
      placement({ width: 10, height: 10 }),
      VIEWPORT
    )
    expect(rect.width).toBe(WINDOW_MIN_WIDTH)
    expect(rect.height).toBe(WINDOW_MIN_HEIGHT)
  })
})

describe("nearestCorner", () => {
  it.each([
    [{ x: 10, y: 10 }, "tl"],
    [{ x: 1200, y: 10 }, "tr"],
    [{ x: 10, y: 800 }, "bl"],
    [{ x: 1200, y: 800 }, "br"],
  ])("picks the quadrant of the centre", (position, expected) => {
    expect(
      nearestCorner({ ...position, width: 100, height: 60 }, VIEWPORT)
    ).toBe(expected)
  })
})

describe("settlePlacement", () => {
  it("snaps flush when dropped near a corner", () => {
    const settled = settlePlacement(
      { x: 20, y: 20, width: 300, height: 200 },
      VIEWPORT
    )
    expect(settled.corner).toBe("tl")
    expect(settled.dx).toBe(WINDOW_MARGIN)
    expect(settled.dy).toBe(WINDOW_MARGIN)
  })

  it("keeps the position when dropped away from any corner", () => {
    const rect = { x: 600, y: 400, width: 320, height: 240 }
    const settled = settlePlacement(rect, VIEWPORT)
    expect(settled.dx).toBeGreaterThan(SNAP_THRESHOLD)
    // Re-anchored, but resolving it returns the same place.
    const resolved = resolvePlacement(settled, VIEWPORT)
    expect(resolved.x).toBeCloseTo(rect.x, 5)
    expect(resolved.y).toBeCloseTo(rect.y, 5)
  })
})

describe("placementFromRect", () => {
  it("round-trips through resolvePlacement for every corner", () => {
    const rect = { x: 400, y: 300, width: 320, height: 240 }
    for (const corner of ["tl", "tr", "bl", "br"] as const) {
      const resolved = resolvePlacement(
        placementFromRect(rect, corner, VIEWPORT),
        VIEWPORT
      )
      expect(resolved.x).toBeCloseTo(rect.x, 5)
      expect(resolved.y).toBeCloseTo(rect.y, 5)
    }
  })
})

describe("applyResize", () => {
  const rect = { x: 400, y: 300, width: 400, height: 300 }

  it("grows from the south-east without moving the origin", () => {
    const next = applyResize(rect, "se", 50, 40, VIEWPORT)
    expect(next.x).toBe(rect.x)
    expect(next.y).toBe(rect.y)
    expect(next.width).toBe(450)
    expect(next.height).toBe(340)
  })

  it("moves the origin when dragging the north-west", () => {
    const next = applyResize(rect, "nw", -50, -40, VIEWPORT)
    expect(next.width).toBe(450)
    expect(next.height).toBe(340)
    expect(next.x).toBe(350)
    expect(next.y).toBe(260)
  })

  it("stops at the minimum instead of sliding the window", () => {
    const next = applyResize(rect, "nw", 5000, 5000, VIEWPORT)
    expect(next.width).toBe(WINDOW_MIN_WIDTH)
    expect(next.height).toBe(WINDOW_MIN_HEIGHT)
    expect(next.x + next.width).toBeCloseTo(rect.x + rect.width, 5)
  })
})

describe("isWindowPlacement", () => {
  it("accepts a valid placement", () => {
    expect(isWindowPlacement(placement())).toBe(true)
  })

  it.each([
    null,
    undefined,
    {},
    { corner: "xx", dx: 1, dy: 1, width: 1, height: 1 },
    { corner: "tl", dx: Number.NaN, dy: 1, width: 1, height: 1 },
  ])("rejects malformed stored values", (value) => {
    expect(isWindowPlacement(value)).toBe(false)
  })
})
