import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0MeetingTranscriptSegment } from "../types"
import { createTranscriptDriver } from "../mocks/mockTranscript"

describe("createTranscriptDriver, scripted", () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  const collect = () => {
    const segments: F0MeetingTranscriptSegment[] = []
    const driver = createTranscriptDriver((segment) => segments.push(segment))
    return { segments, driver }
  }

  it("says the words it was given, not one from the bag", () => {
    const { segments, driver } = collect()
    driver.start("a", "Ship it behind a flag for the first week.")
    vi.advanceTimersByTime(5000)
    driver.stop("a")

    const last = segments.at(-1)
    expect(last?.isFinal).toBe(true)
    expect(last?.text).toBe("Ship it behind a flag for the first week.")
  })

  it("reveals it progressively under ONE id", () => {
    // Emitting each revision as a new line is the mistake the id exists to
    // prevent — it turns a transcript into the same sentence repeated, one word
    // longer each time.
    const { segments, driver } = collect()
    driver.start("a", "one two three four five six")
    vi.advanceTimersByTime(2000)

    expect(segments.length).toBeGreaterThan(1)
    expect(new Set(segments.map((segment) => segment.id)).size).toBe(1)

    const interim = segments.filter((segment) => !segment.isFinal)
    expect(interim.length).toBeGreaterThan(0)
    // Monotonic: each revision is at least as long as the one before it.
    interim.forEach((segment, index) => {
      const previous = interim[index - 1]
      if (!previous) return
      expect(segment.text.length).toBeGreaterThanOrEqual(previous.text.length)
    })
  })

  it("lands the whole line even when the turn is cut short", () => {
    const { segments, driver } = collect()
    driver.start("a", "a fairly long sentence that never finishes out loud")
    vi.advanceTimersByTime(300)
    driver.stop("a")

    expect(segments.at(-1)?.text).toBe(
      "a fairly long sentence that never finishes out loud"
    )
  })

  it("still draws from the bag when nothing scripts it", () => {
    const { segments, driver } = collect()
    driver.start("a")
    vi.advanceTimersByTime(4000)
    driver.stop("a")

    expect(segments.at(-1)?.text.length).toBeGreaterThan(0)
  })

  it("keeps two speakers on separate segments", () => {
    const { segments, driver } = collect()
    driver.start("a", "first person talking")
    driver.start("b", "second person talking")
    vi.advanceTimersByTime(3000)
    driver.stop("a")
    driver.stop("b")

    const finals = segments.filter((segment) => segment.isFinal)
    expect(finals).toHaveLength(2)
    expect(new Set(finals.map((segment) => segment.id)).size).toBe(2)
    expect(finals.find((s) => s.participantId === "a")?.text).toBe(
      "first person talking"
    )
    expect(finals.find((s) => s.participantId === "b")?.text).toBe(
      "second person talking"
    )
  })
})
