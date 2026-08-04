import { describe, expect, it } from "vitest"

import { collapseProgress, fade, isScrollLinked, lerp, px } from "../collapse"

describe("collapseProgress", () => {
  it("passes a number through", () => {
    expect(collapseProgress(0.5)).toBe(0.5)
  })

  it("reads a boolean as either end", () => {
    expect(collapseProgress(true)).toBe(1)
    expect(collapseProgress(false)).toBe(0)
  })

  it("clamps out of range", () => {
    expect(collapseProgress(-1)).toBe(0)
    expect(collapseProgress(2)).toBe(1)
  })
})

describe("isScrollLinked", () => {
  it("is true for any number, including zero", () => {
    // A page sitting at the top is still scroll-linked. Reading `0` as the
    // discrete case would tween the first pixels of every scroll.
    expect(isScrollLinked(0)).toBe(true)
    expect(isScrollLinked(1)).toBe(true)
  })

  it("is false for either boolean", () => {
    expect(isScrollLinked(true)).toBe(false)
    expect(isScrollLinked(false)).toBe(false)
  })
})

describe("lerp", () => {
  it("hits both ends and the middle", () => {
    expect(lerp(56, 32, 0)).toBe(56)
    expect(lerp(56, 32, 1)).toBe(32)
    expect(lerp(56, 32, 0.5)).toBe(44)
  })
})

describe("px", () => {
  it("rounds to hundredths and appends the unit", () => {
    expect(px(44)).toBe("44px")
    expect(px(43.999)).toBe("44px")
    expect(px(43.994)).toBe("43.99px")
  })
})

describe("fade", () => {
  it("is fully opaque when open", () => {
    expect(fade(0)).toBe(1)
  })

  it("reaches nothing before the collapse finishes", () => {
    // The row is blank before it has finished closing, so the last pixels read
    // as empty space rather than as text sliced off.
    expect(fade(0.625)).toBe(0)
    expect(fade(1)).toBe(0)
  })

  it("never goes negative", () => {
    expect(fade(2)).toBe(0)
  })
})
