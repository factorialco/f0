import { describe, expect, it } from "vitest"

import {
  aabbOverlap,
  applyJumpPhysics,
  clamp,
  pixelsToMeters,
  spawnGapRange,
  speedAt,
} from "../DinoGame"

describe("One Run helpers", () => {
  describe("clamp", () => {
    it("returns the value when within range", () => {
      expect(clamp(5, 0, 10)).toBe(5)
    })
    it("clamps below the minimum", () => {
      expect(clamp(-1, 0, 10)).toBe(0)
    })
    it("clamps above the maximum", () => {
      expect(clamp(99, 0, 10)).toBe(10)
    })
  })

  describe("aabbOverlap", () => {
    const player = { x: 56, y: 100, w: 32, h: 32 }

    it("detects clear overlap", () => {
      const obstacle = { x: 60, y: 110, w: 24, h: 22 }
      expect(aabbOverlap(player, obstacle)).toBe(true)
    })

    it("returns false for disjoint rects", () => {
      const obstacle = { x: 200, y: 100, w: 20, h: 20 }
      expect(aabbOverlap(player, obstacle)).toBe(false)
    })

    it("ignores near-misses within the fairness inset", () => {
      // Obstacle just touching the player's edge — inset (3px) keeps it forgiving.
      const obstacle = { x: 56 + 32 - 1, y: 100, w: 3, h: 32 }
      expect(aabbOverlap(player, obstacle)).toBe(false)
    })
  })

  describe("applyJumpPhysics", () => {
    it("integrates velocity into position", () => {
      const next = applyJumpPhysics(100, -10, 1, false)
      expect(next.y).toBe(90)
    })

    it("accumulates gravity into velocity", () => {
      const next = applyJumpPhysics(100, 0, 1, false)
      expect(next.vy).toBeGreaterThan(0)
    })

    it("applies stronger gravity when fast-falling", () => {
      const normal = applyJumpPhysics(100, 0, 1, false)
      const fast = applyJumpPhysics(100, 0, 1, true)
      expect(fast.vy).toBeGreaterThan(normal.vy)
    })
  })

  describe("speedAt — difficulty curve", () => {
    it("starts at the easy base speed", () => {
      expect(speedAt(0)).toBeCloseTo(3.6)
    })

    it("ramps up over time", () => {
      const early = speedAt(5)
      const mid = speedAt(40)
      const late = speedAt(80)
      expect(mid).toBeGreaterThan(early)
      expect(late).toBeGreaterThan(mid)
    })

    it("caps at MAX_SPEED", () => {
      expect(speedAt(999)).toBeCloseTo(11)
    })
  })

  describe("pixelsToMeters — distance score", () => {
    it("returns 0 for zero pixels", () => {
      expect(pixelsToMeters(0)).toBe(0)
    })

    it("never goes negative", () => {
      expect(pixelsToMeters(-50)).toBe(0)
    })

    it("floors fractional meters", () => {
      // 18 px = 1 m at the current PIXELS_PER_METER constant.
      expect(pixelsToMeters(17)).toBe(0)
      expect(pixelsToMeters(18)).toBe(1)
      expect(pixelsToMeters(180)).toBe(10)
    })

    it("grows monotonically with distance", () => {
      const a = pixelsToMeters(500)
      const b = pixelsToMeters(1000)
      const c = pixelsToMeters(2000)
      expect(b).toBeGreaterThan(a)
      expect(c).toBeGreaterThan(b)
    })
  })

  describe("spawnGapRange — wider at start, tighter later", () => {
    it("starts with the easy gap range", () => {
      const [min, max] = spawnGapRange(0)
      expect(min).toBe(340)
      expect(max).toBe(520)
    })

    it("converges toward the hard range over time", () => {
      const [minLate, maxLate] = spawnGapRange(999)
      expect(minLate).toBe(180)
      expect(maxLate).toBe(320)
    })

    it("interpolates monotonically", () => {
      const [min0] = spawnGapRange(0)
      const [min30] = spawnGapRange(30)
      const [min60] = spawnGapRange(60)
      expect(min0).toBeGreaterThan(min30)
      expect(min30).toBeGreaterThan(min60)
    })
  })
})
