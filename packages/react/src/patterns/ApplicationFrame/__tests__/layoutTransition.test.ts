import { motionTokens } from "@factorialco/f0-core"
import { describe, expect, it } from "vitest"

import {
  CONTENT_TRANSITION,
  INSTANT_TRANSITION,
  LAYOUT_SETTLE_MS,
  REVEAL_TRANSITION,
  resolveLayoutTransition,
  resolvePanelTransition,
  resolvePanelWidthTarget,
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

  it("does not animate when motion is reduced", () => {
    // `MotionConfig reducedMotion` covers transform and layout animations.
    // Everything the frame moves is padding, width, clipPath or an inset —
    // none of them are, so the honouring has to happen here.
    expect(resolveLayoutTransition(false, true)).toBe(INSTANT_TRANSITION)
    expect(resolvePanelTransition(false, false, true)).toBe(INSTANT_TRANSITION)
    expect(resolvePanelTransition(false, true, true)).toBe(INSTANT_TRANSITION)
  })
})

describe("resolvePanelTransition", () => {
  it("puts the panel on the same clock as the content beside it", () => {
    // The two are the two halves of one seam. When they carried different
    // durations, the content's edge arrived first and the frame showed
    // through the gap for the difference.
    expect(resolvePanelTransition(false, false)).toBe(CONTENT_TRANSITION)
  })

  it("gives the fullscreen toggle its own duration — the same one both ways", () => {
    // It used to be 150ms in and 400ms out, on two different curves: one
    // button that behaved like two.
    expect(resolvePanelTransition(false, true)).toBe(REVEAL_TRANSITION)
    expect(REVEAL_TRANSITION.duration).toBeGreaterThan(
      CONTENT_TRANSITION.duration as number
    )
  })

  it("never animates while the layout is tracking an input", () => {
    expect(resolvePanelTransition(true, false)).toBe(INSTANT_TRANSITION)
    expect(resolvePanelTransition(true, true)).toBe(INSTANT_TRANSITION)
  })

  it("returns stable references, never a fresh object", () => {
    expect(resolvePanelTransition(false, true)).toBe(
      resolvePanelTransition(false, true)
    )
  })
})

describe("resolvePanelWidthTarget", () => {
  const base = {
    coversFrame: false,
    isFullscreen: false,
    isClosingFromFullscreen: false,
    isActivePanel: true,
    reservedWidth: 360,
  }

  it("reserves the panel's own width when it sits beside the content", () => {
    expect(resolvePanelWidthTarget(base)).toBe(360)
  })

  it("fills the frame while fullscreen, and while covering a narrow frame", () => {
    expect(resolvePanelWidthTarget({ ...base, isFullscreen: true })).toBe(
      "100%"
    )
    expect(resolvePanelWidthTarget({ ...base, coversFrame: true })).toBe("100%")
  })

  it("keeps the whole frame on the way out when closed FROM fullscreen", () => {
    // The reported defect. `open` goes false and the provider resets the mode
    // to "sidepanel" a commit later, so by the time the exit is playing
    // `isFullscreen` is already false. Without this input the panel shrinks
    // from the whole frame to 360px — over a main content that has already
    // re-expanded behind it — and only then disappears.
    expect(
      resolvePanelWidthTarget({
        ...base,
        isFullscreen: false,
        isClosingFromFullscreen: true,
      })
    ).toBe("100%")
  })

  it("does not fill the frame for the window that is not showing", () => {
    // Split mode renders two windows; only the one the content has uncovered
    // is the one expanding.
    expect(
      resolvePanelWidthTarget({
        ...base,
        isFullscreen: true,
        isActivePanel: false,
      })
    ).toBe(360)
    expect(
      resolvePanelWidthTarget({
        ...base,
        isClosingFromFullscreen: true,
        isActivePanel: false,
      })
    ).toBe(360)
  })

  it("still covers an overlaying frame regardless of which window it is", () => {
    // Overlaying is about the frame having no room, not about which panel is
    // up: the inactive window is not rendered on top of anything anyway.
    expect(
      resolvePanelWidthTarget({
        ...base,
        coversFrame: true,
        isActivePanel: false,
      })
    ).toBe("100%")
  })
})

describe("the shared vocabulary", () => {
  it("takes its numbers from the token, not from a local copy", () => {
    // Load-bearing beyond tidiness: the swap's outgoing window waits exactly
    // `duration.base` before it leaves, so that it is covered by the main
    // content the whole time. That delay was written down as a literal once,
    // and stayed at 0.25 when this duration became 0.22 — which is how the
    // window ended up visibly fading in the middle of every swap.
    expect(CONTENT_TRANSITION.duration).toBe(motionTokens.duration.base)
    expect(REVEAL_TRANSITION.duration).toBe(motionTokens.duration.reveal)
    expect(CONTENT_TRANSITION.ease).toBe(motionTokens.ease.outSwift)
  })
})
