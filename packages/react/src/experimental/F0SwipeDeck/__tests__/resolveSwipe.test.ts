import { describe, expect, it } from "vitest"
import { resolveSwipe } from "../resolveSwipe"

const thresholds = { offsetThreshold: 96, velocityThreshold: 500 }

describe("resolveSwipe", () => {
  it("snaps back when the card barely moved", () => {
    expect(resolveSwipe(40, 120, thresholds)).toBeUndefined()
    expect(resolveSwipe(-40, -120, thresholds)).toBeUndefined()
  })

  it("commits once the card travelled past the threshold", () => {
    expect(resolveSwipe(120, 0, thresholds)).toBe("right")
    expect(resolveSwipe(-120, 0, thresholds)).toBe("left")
  })

  it("commits a fast flick that barely travelled", () => {
    expect(resolveSwipe(20, 900, thresholds)).toBe("right")
    expect(resolveSwipe(-20, -900, thresholds)).toBe("left")
  })

  it("snaps back when the flick contradicts the drag", () => {
    expect(resolveSwipe(120, -900, thresholds)).toBeUndefined()
    expect(resolveSwipe(-120, 900, thresholds)).toBeUndefined()
  })

  it("treats the threshold itself as committed", () => {
    expect(resolveSwipe(96, 0, thresholds)).toBe("right")
    expect(resolveSwipe(0, 500, thresholds)).toBe("right")
  })
})
