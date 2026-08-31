import { describe, expect, it } from "vitest"

import {
  buildCueTimeline,
  findActiveCueIndex,
  formatPlaybackTime,
} from "../utils"

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

describe("buildCueTimeline", () => {
  it("keeps only timed cues, ordered by start, pointing at their render index", () => {
    expect(
      buildCueTimeline([
        { text: "first", startTime: 0 },
        { text: "untimed" },
        { text: "third", startTime: 8 },
      ])
    ).toEqual([
      { start: 0, cueIndex: 0 },
      { start: 8, cueIndex: 2 },
    ])
  })

  it("orders a list that arrives out of order without moving the cues", () => {
    expect(
      buildCueTimeline([
        { text: "interruption", startTime: 8 },
        { text: "interrupted", startTime: 6 },
      ])
    ).toEqual([
      { start: 6, cueIndex: 1 },
      { start: 8, cueIndex: 0 },
    ])
  })

  it("ignores timestamps that are not finite numbers", () => {
    expect(
      buildCueTimeline([
        { text: "nan", startTime: Number.NaN },
        { text: "ok", startTime: 3 },
      ])
    ).toEqual([{ start: 3, cueIndex: 1 }])
  })

  it("is empty for a transcript with no timings at all", () => {
    expect(buildCueTimeline([{ text: "a" }, { text: "b" }])).toEqual([])
  })
})

describe("findActiveCueIndex", () => {
  const timeline = buildCueTimeline([
    { text: "a", startTime: 0 },
    { text: "b", startTime: 10 },
    { text: "c", startTime: 20 },
  ])

  it("returns the last cue that has started", () => {
    expect(findActiveCueIndex(timeline, 0)).toBe(0)
    expect(findActiveCueIndex(timeline, 9.9)).toBe(0)
    expect(findActiveCueIndex(timeline, 10)).toBe(1)
    expect(findActiveCueIndex(timeline, 999)).toBe(2)
  })

  it("returns -1 before the first cue starts", () => {
    expect(
      findActiveCueIndex(buildCueTimeline([{ text: "a", startTime: 5 }]), 4)
    ).toBe(-1)
    expect(findActiveCueIndex([], 12)).toBe(-1)
  })

  it("marks the interrupting cue as soon as it starts, not the one it cuts into", () => {
    const overlapping = buildCueTimeline([
      { text: "candidate, still talking", startTime: 6 },
      { text: "recruiter, interrupting", startTime: 7 },
    ])

    expect(findActiveCueIndex(overlapping, 6.5)).toBe(0)
    expect(findActiveCueIndex(overlapping, 7)).toBe(1)
  })

  it("keeps the previous cue marked through a silence", () => {
    expect(findActiveCueIndex(timeline, 15)).toBe(1)
  })
})
