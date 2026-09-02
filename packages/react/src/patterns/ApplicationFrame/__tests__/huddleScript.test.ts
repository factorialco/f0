import { describe, expect, it } from "vitest"

import {
  HUDDLE_SCRIPT,
  resolveScript,
  resolveSummary,
  scriptDurationMs,
  speechDurationMs,
} from "../mocks/huddleScript"

describe("huddleScript", () => {
  it("runs in order", () => {
    const ats = HUDDLE_SCRIPT.lines.map((line) => line.at)
    expect([...ats].sort((a, b) => a - b)).toEqual(ats)
  })

  it("never has two people talking over each other", () => {
    // Overlap is what a random director produces and what makes a transcript
    // read as noise. A written conversation takes turns.
    const spoken = HUDDLE_SCRIPT.lines.filter((line) => line.say)
    spoken.forEach((line, index) => {
      const next = spoken[index + 1]
      if (!next) return
      const ends = line.at + speechDurationMs(line.say as string)
      expect(next.at).toBeGreaterThanOrEqual(ends)
    })
  })

  it("gives every line a speaking window as long as its words", () => {
    const lines = resolveScript(HUDDLE_SCRIPT, "me", ["a", "b"])
    const spoken = lines.filter((line) => line.say)
    expect(spoken.length).toBeGreaterThan(0)
    spoken.forEach((line) => {
      expect(line.durationMs).toBe(speechDurationMs(line.say as string))
    })
    // A typed line takes no floor at all.
    lines
      .filter((line) => line.chat)
      .forEach((line) => expect(line.durationMs).toBe(0))
  })

  it("wraps roles so one script fits a 1:1 and a group alike", () => {
    const dm = resolveScript(HUDDLE_SCRIPT, "me", ["solo"])
    expect(new Set(dm.map((line) => line.participantId))).toEqual(
      new Set(["me", "solo"])
    )

    const group = resolveScript(HUDDLE_SCRIPT, "me", ["a", "b", "c"])
    expect(new Set(group.map((line) => line.participantId))).toEqual(
      new Set(["me", "a", "b", "c"])
    )
  })

  it("drops everyone else's lines when you are alone in the room", () => {
    const alone = resolveScript(HUDDLE_SCRIPT, "me", [])
    expect(alone.length).toBeGreaterThan(0)
    expect(alone.every((line) => line.participantId === "me")).toBe(true)
  })

  it("ends when its last line does", () => {
    const lines = resolveScript(HUDDLE_SCRIPT, "me", ["a"])
    const last = lines[lines.length - 1]
    expect(scriptDurationMs(lines)).toBeGreaterThanOrEqual(
      (last?.at ?? 0) + (last?.durationMs ?? 0)
    )
  })

  it("names real people in the summary", () => {
    const summary = resolveSummary(HUDDLE_SCRIPT.summary, "Jordan Avery", [
      "Eleanor Whitfield",
      "Marcus Bennett",
    ])
    expect(summary).toContain("Eleanor")
    expect(summary).toContain("Jordan")
    // First names only — a recap does not read like a directory.
    expect(summary).not.toContain("Whitfield")
    // And no placeholder survives to be seen by anybody.
    expect(summary).not.toMatch(/\{(me|\d+)\}/)
  })

  it("falls back to you when there is nobody else to name", () => {
    const summary = resolveSummary("{0} and {me}", "Jordan Avery", [])
    expect(summary).toBe("Jordan and Jordan")
  })
})
