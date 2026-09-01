import { describe, expect, it } from "vitest"

import {
  CONTENT_TRANSITION,
  INSTANT_TRANSITION,
  LAYOUT_SETTLE_MS,
  resolveLayoutTransition,
} from "../layoutTransition"

describe("resolveLayoutTransition", () => {
  it("does not animate while the layout is tracking an input", () => {
    // A drag or a window resize is direct manipulation: every eased frame is a
    // frame of lag, because the tween restarts toward a new target before the
    // previous one has landed.
    expect(resolveLayoutTransition(true)).toBe(INSTANT_TRANSITION)
    expect(resolveLayoutTransition(true).duration).toBe(0)
  })

  it("animates a discrete change", () => {
    expect(resolveLayoutTransition(false)).toBe(CONTENT_TRANSITION)
    expect(resolveLayoutTransition(false).duration).toBeGreaterThan(0)
  })

  it("returns stable references, never a fresh object", () => {
    // Motion cancels an in-flight animation when it sees a different
    // `transition` and does not restart it. Handing it a new literal each
    // render is how an animation gets stranded part-way.
    expect(resolveLayoutTransition(true)).toBe(resolveLayoutTransition(true))
    expect(resolveLayoutTransition(false)).toBe(resolveLayoutTransition(false))
  })

  it("keeps the discrete animation short enough to feel like a response", () => {
    // Long enough to read as movement, short enough not to be waited on.
    expect(CONTENT_TRANSITION.duration).toBeLessThanOrEqual(0.25)
  })

  it("settles at the same pace as the transcript below it", () => {
    // The chat's own resize anchor uses 120ms; a different number here would
    // mean the frame and the transcript disagree about when a gesture ended.
    expect(LAYOUT_SETTLE_MS).toBe(120)
  })
})
