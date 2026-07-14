import { describe, expect, it } from "vitest"

import {
  calendarDaysApart,
  formatClock,
  formatRelativeDay,
  formatSeparator,
  formatStatusTime,
} from "../natural-time"

const LABELS = { today: "Today", yesterday: "Yesterday" }

describe("natural-time", () => {
  it("counts whole calendar days apart", () => {
    const a = new Date("2026-06-20T23:00:00")
    const b = new Date("2026-06-21T01:00:00")
    expect(calendarDaysApart(a, b)).toBe(1)
    expect(calendarDaysApart(a, a)).toBe(0)
  })

  it("formats a clock with hours and minutes", () => {
    expect(formatClock(new Date("2026-06-21T22:14:00"), "en-GB")).toContain(":")
  })

  it("labels today and yesterday", () => {
    const now = new Date("2026-06-21T12:00:00")
    expect(
      formatRelativeDay(new Date("2026-06-21T09:00:00"), now, LABELS)
    ).toBe("Today")
    expect(
      formatRelativeDay(new Date("2026-06-20T09:00:00"), now, LABELS)
    ).toBe("Yesterday")
  })

  it("builds a separator as day + clock", () => {
    const now = new Date("2026-06-21T12:00:00")
    const sep = formatSeparator(
      new Date("2026-06-20T22:14:00"),
      now,
      LABELS,
      "en-GB"
    )
    expect(sep.startsWith("Yesterday ")).toBe(true)
  })

  it("status time is clock-only today, day + clock otherwise", () => {
    const now = new Date("2026-06-21T12:00:00")
    expect(
      formatStatusTime(new Date("2026-06-21T10:00:00"), now, LABELS, "en-GB")
    ).not.toContain("Yesterday")
    expect(
      formatStatusTime(new Date("2026-06-20T10:00:00"), now, LABELS, "en-GB")
    ).toContain("Yesterday")
  })
})
