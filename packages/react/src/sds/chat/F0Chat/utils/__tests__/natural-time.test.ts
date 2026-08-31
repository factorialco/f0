import { describe, expect, it } from "vitest"

import {
  calendarDaysApart,
  formatClock,
  formatRelativeDay,
  formatSeparator,
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

  // The locale owns the whole shape of the clock, padding included: asking for
  // a 2-digit hour produced "01:53 PM", which no US reader writes.
  it("writes the clock the way the reader's locale does", () => {
    const afternoon = new Date("2026-06-21T13:53:00")
    expect(formatClock(afternoon, "es-ES")).toBe("13:53")
    expect(formatClock(afternoon, "en-US")).toBe("1:53 PM")
    expect(formatClock(new Date("2026-06-21T07:29:00"), "en-US")).toBe(
      "7:29 AM"
    )
  })

  // No locale means the runtime's — the browser's — which is what every caller
  // in the transcript passes (there is no app-level locale to thread).
  it("defaults to the reader's own runtime locale", () => {
    const date = new Date("2026-06-21T13:53:00")
    const runtimeLocale = new Intl.DateTimeFormat().resolvedOptions().locale
    expect(formatClock(date)).toBe(formatClock(date, runtimeLocale))
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
})
