import { motionTokens } from "@factorialco/f0-core"
import { describe, expect, it } from "vitest"

import { resolveWindowExit } from "../ChatWindow"

const RIGHT_DOCKED = "inset(0 0 0 100%)"

describe("resolveWindowExit", () => {
  const base = {
    exitStyle: "shrink" as const,
    closedClipPath: RIGHT_DOCKED,
    reducedMotion: false,
  }

  it("takes the window off the screen when nothing else will", () => {
    // The close. The window collapses toward the edge it is docked to while it
    // fades — the same animation whether it is a 360px column or the whole
    // frame, which is the whole point: one button, one movement.
    expect(resolveWindowExit(base)).toEqual({
      opacity: 0,
      clipPath: RIGHT_DOCKED,
    })
  })

  it("holds still when the main content is sliding over it", () => {
    // The swap. Moving would be wrong here: the window is being covered, and
    // the delay is exactly how long that takes.
    const exit = resolveWindowExit({ ...base, exitStyle: "hold" })
    expect(exit).toEqual({
      opacity: 0,
      transition: { delay: motionTokens.duration.base, duration: 0 },
    })
    // No clip: a covered window that also wiped would be doing two things.
    expect(exit).not.toHaveProperty("clipPath")
  })

  it("never leaves a close with the swap's hard cut", () => {
    // THE regression. `hold` is "stay at full opacity and then vanish in a
    // single frame", which reads as a hard cut the moment nothing is covering
    // the window. It used to be chosen for closes too, because the `exitStyle`
    // prop is captured one render before the close — see `WindowExitCustom`.
    const closing = resolveWindowExit(base)
    expect(closing.transition).toBeUndefined()
    expect(closing).toHaveProperty("clipPath")
  })

  it("collapses toward whichever edge the window is docked to", () => {
    const left = resolveWindowExit({
      ...base,
      closedClipPath: "inset(0 100% 0 0)",
    })
    expect(left).toHaveProperty("clipPath", "inset(0 100% 0 0)")
  })

  it("does not animate when motion is reduced", () => {
    expect(
      resolveWindowExit({ ...base, reducedMotion: true }).transition
    ).toEqual({ duration: 0 })
    // Including the swap, whose whole value is a delay nobody asked to wait for.
    expect(
      resolveWindowExit({ ...base, exitStyle: "hold", reducedMotion: true })
        .transition
    ).toEqual({ duration: 0 })
  })
})
