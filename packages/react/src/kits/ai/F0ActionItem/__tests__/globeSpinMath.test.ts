import { describe, expect, it } from "vitest"

import {
  buildFrameInto,
  createGlobeSpinState,
  spinEase,
} from "../components/globeSpinMath"

// The One mark, in units of its own radius, read off the official artwork.
// These are the numbers the resting spinner has to reproduce.
const LOGO = {
  outer: 1, // lens tips and outer arc sit on the mark circle
  inner: 0.5525, // deepest point of the lens, towards the centre
  halfWidth: 0.6285, // transverse half-extent, at the tips
}
const R_FACTOR = 0.392 // buildFrameInto: R = size * 0.392

type Vertex = { x: number; y: number }

/** Every polygon vertex of a rest frame, centred on the mark and in units of R. */
const restVertices = (size: number): Vertex[] => {
  const state = createGlobeSpinState()
  const count = buildFrameInto(state, 0, size, 0)
  const c = size / 2
  const r = size * R_FACTOR
  const out: Vertex[] = []
  for (let i = 0; i < count; i++) {
    const nums = state.quads[i].points.split(/[ ,]/).map(Number)
    for (let j = 0; j < nums.length; j += 2) {
      out.push({ x: (nums[j] - c) / r, y: (nums[j + 1] - c) / r })
    }
  }
  return out
}

/**
 * Metrics of the lens pointing along +x, which by symmetry describes all four.
 * The four lenses overlap in bounding box near the diagonals, so they can only
 * be told apart by sector: each spans ±39° about its own axis, leaving a clear
 * gap either side of 45°.
 */
const rightLens = (size: number) => {
  const vs = restVertices(size)
  const sector = vs.filter(
    (v) => Math.abs(Math.atan2(v.y, v.x)) <= Math.PI / 4 && v.x > 0.3
  )
  return {
    inner: Math.min(
      ...sector.filter((v) => Math.abs(v.y) < 0.03).map((v) => v.x)
    ),
    outer: Math.max(...vs.map((v) => Math.hypot(v.x, v.y))),
    halfWidth: Math.max(...sector.map((v) => Math.abs(v.y))),
  }
}

describe("spinEase", () => {
  it("maps the endpoints exactly", () => {
    expect(spinEase(0)).toBe(0)
    expect(spinEase(1)).toBe(1)
  })

  // The ramp is quadratic, so an unclamped negative t returns POSITIVE — a
  // clock that runs backwards would jump the mark most of a turn.
  it("holds at the endpoints outside 0..1", () => {
    for (const t of [-2, -0.5, -0.001]) expect(spinEase(t)).toBe(0)
    for (const t of [1.001, 1.5, 3]) expect(spinEase(t)).toBe(1)
  })

  it("never goes backwards", () => {
    let prev = -Infinity
    for (let i = 0; i <= 1000; i++) {
      const v = spinEase(i / 1000)
      expect(v).toBeGreaterThanOrEqual(prev)
      prev = v
    }
  })

  it("is symmetric about the midpoint", () => {
    for (let i = 0; i <= 100; i++) {
      const t = i / 100
      expect(spinEase(t)).toBeCloseTo(1 - spinEase(1 - t), 12)
    }
  })

  // The reason this curve exists: a symmetric cubic ease left ~380ms either
  // side of the pause moving too slowly to see, so the spinner read as stalled
  // for 35% of its cycle. Guard the property, not the implementation.
  it("spends almost no time below the perceptible rate", () => {
    const SPIN_MS = 2000
    const TOTAL_DEG = 720
    const PERCEPTIBLE_DEG_PER_S = 40
    let slowMs = 0
    for (let t = 0; t < SPIN_MS; t++) {
      const degPerS =
        (spinEase((t + 1) / SPIN_MS) - spinEase(t / SPIN_MS)) * TOTAL_DEG * 1000
      if (degPerS < PERCEPTIBLE_DEG_PER_S) slowMs++
    }
    expect(slowMs).toBeLessThan(100)
  })
})

describe("resting frame", () => {
  it("reproduces the One mark's lens proportions", () => {
    const { inner, outer, halfWidth } = rightLens(400)
    expect(inner).toBeCloseTo(LOGO.inner, 1)
    expect(outer).toBeCloseTo(LOGO.outer, 1)
    expect(halfWidth).toBeCloseTo(LOGO.halfWidth, 1)
  })

  // The quad dilation used to be an absolute offset in user units, so it was
  // ~5% of the mark at size 20 and ~0.7% at size 120: the small spinner came
  // out fatter and with a sawtooth edge. Shape must not depend on size.
  it("has the same proportions at every size", () => {
    const small = rightLens(20)
    const large = rightLens(120)
    expect(small.inner).toBeCloseTo(large.inner, 2)
    expect(small.outer).toBeCloseTo(large.outer, 2)
    expect(small.halfWidth).toBeCloseTo(large.halfWidth, 2)
  })
})

describe("full-turn wrap", () => {
  // The "continuous" variant rotates forward forever and relies on progress 1
  // being the same orientation as progress 0. If TOTAL_ANGLE stopped being a
  // whole number of turns, every wrap would jump.
  it("puts progress 1 and progress 0 in the same orientation", () => {
    const frame = (progress: number) => {
      const state = createGlobeSpinState()
      const count = buildFrameInto(state, progress, 400, 0)
      // Quads are z-sorted and the resting mark is four-fold symmetric, so ties
      // can be ordered differently between the two calls: compare as sets.
      return state.quads.slice(0, count).map((q) =>
        q.points
          .split(" ")
          .map((pt) =>
            pt
              .split(",")
              .map((n) => Number(n).toFixed(3))
              .join(",")
          )
          .join(" ")
      )
    }
    const atZero = new Set(frame(0))
    const atOne = frame(1)
    expect(atOne).toHaveLength(atZero.size)
    expect(atOne.filter((k) => !atZero.has(k))).toEqual([])
  })
})
