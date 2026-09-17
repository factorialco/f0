import { describe, expect, it } from "vitest"
import { CONTROLS_HEIGHT, densityFor, HEADER_HEIGHT } from "../layout/density"
import {
  WINDOW_DEFAULT_HEIGHT,
  WINDOW_DEFAULT_WIDTH,
  WINDOW_MIN_HEIGHT,
  WINDOW_MIN_WIDTH,
} from "../window/window-constants"

/** What is left for the video once the chrome has taken its share. */
const videoHeight = (width: number, height: number): number =>
  height -
  HEADER_HEIGHT[densityFor({ width, height })] -
  CONTROLS_HEIGHT[densityFor({ width, height })]

describe("densityFor", () => {
  it("reads both axes and takes the tighter one", () => {
    // Plenty of width, no height: still a cramped room, because what starves
    // the video in a short window is the chrome's height.
    expect(densityFor({ width: 1400, height: 280 })).toBe("tight")
    expect(densityFor({ width: 300, height: 900 })).toBe("tight")
  })

  it("leaves the default floating window comfortable", () => {
    // The step down has to be something you ask for by dragging, not the state
    // the window opens in.
    expect(
      densityFor({ width: WINDOW_DEFAULT_WIDTH, height: WINDOW_DEFAULT_HEIGHT })
    ).toBe("compact")
  })

  it("only goes tight near the minimum", () => {
    expect(
      densityFor({ width: WINDOW_MIN_WIDTH, height: WINDOW_MIN_HEIGHT })
    ).toBe("tight")
  })

  it("gives a full-screen room the full chrome", () => {
    expect(densityFor({ width: 1440, height: 800 })).toBe("regular")
  })
})

describe("the chrome's share of the window", () => {
  /**
   * The point of the whole table. At the minimum size the fixed 60+80 chrome
   * took 140 of 282 — half the window — so the video got the other half. The
   * floor here is what says that can't come back.
   */
  it("never takes more than 40% of the smallest window", () => {
    const chrome = HEADER_HEIGHT.tight + CONTROLS_HEIGHT.tight
    expect(chrome / WINDOW_MIN_HEIGHT).toBeLessThan(0.4)
  })

  it("leaves the smallest window a full 16:9 slice", () => {
    // Which is what the minimum height is FOR: a window you can shrink to and
    // still see a whole frame rather than a letterboxed strip.
    expect(
      videoHeight(WINDOW_MIN_WIDTH, WINDOW_MIN_HEIGHT)
    ).toBeGreaterThanOrEqual(Math.round((WINDOW_MIN_WIDTH * 9) / 16))
  })

  it("gives the video more room at every size than the old fixed chrome did", () => {
    const OLD_CHROME = 60 + 80
    for (const [width, height] of [
      [WINDOW_MIN_WIDTH, 282],
      [WINDOW_DEFAULT_WIDTH, 340],
      [520, 400],
    ] as const) {
      expect(videoHeight(width, height)).toBeGreaterThan(height - OLD_CHROME)
    }
  })
})
