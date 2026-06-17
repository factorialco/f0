import { describe, expect, it } from "vitest"

import { formatPlaybackTime } from "../utils"

describe("formatPlaybackTime", () => {
  it("formats seconds as M:SS", () => {
    expect(formatPlaybackTime(0)).toBe("0:00")
    expect(formatPlaybackTime(5)).toBe("0:05")
    expect(formatPlaybackTime(65)).toBe("1:05")
    expect(formatPlaybackTime(482)).toBe("8:02")
  })

  it("formats durations of an hour or more as H:MM:SS", () => {
    expect(formatPlaybackTime(3600)).toBe("1:00:00")
    expect(formatPlaybackTime(3661)).toBe("1:01:01")
  })

  it("floors fractional seconds", () => {
    expect(formatPlaybackTime(8.9)).toBe("0:08")
  })

  it("clamps non-finite or negative values to 0:00", () => {
    expect(formatPlaybackTime(Number.NaN)).toBe("0:00")
    expect(formatPlaybackTime(Number.POSITIVE_INFINITY)).toBe("0:00")
    expect(formatPlaybackTime(-10)).toBe("0:00")
  })
})
