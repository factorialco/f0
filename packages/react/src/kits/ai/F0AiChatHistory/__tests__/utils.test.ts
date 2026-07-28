import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { formatThreadDate, getDateGroup } from "../utils"

const labels = { today: "Today", yesterday: "Yesterday" }

describe("formatThreadDate", () => {
  beforeEach(() => {
    // Pin "now" to a known weekday/time so all branches are deterministic
    // regardless of when CI runs. 2026-04-28 14:00 (a Tuesday).
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2026-04-28T14:00:00Z"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("formats today timestamps with the today label", () => {
    const result = formatThreadDate("2026-04-28T11:51:00Z", labels)
    expect(result.startsWith("Today, ")).toBe(true)
  })

  it("formats yesterday timestamps with the yesterday label", () => {
    const result = formatThreadDate("2026-04-27T07:59:00Z", labels)
    expect(result.startsWith("Yesterday, ")).toBe(true)
  })

  it("formats current-year timestamps as month + day, no year", () => {
    const result = formatThreadDate("2026-04-23T11:51:00Z", labels)
    // No year segment for the current year
    expect(result).not.toMatch(/\b\d{4}\b/)
    // Includes the month abbreviation and day
    expect(result).toMatch(/Apr\s+23/)
    expect(result).toContain(", ")
  })

  it("formats older timestamps with year included", () => {
    const result = formatThreadDate("2025-04-06T11:51:00Z", labels)
    expect(result).toContain("2025")
    expect(result).toMatch(/Apr\s+6\s+2025/)
    expect(result).toContain(", ")
  })
})

describe("getDateGroup", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2026-04-28T14:00:00Z"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("returns 'today' for today's date", () => {
    expect(getDateGroup("2026-04-28T09:00:00Z")).toBe("today")
  })

  it("returns 'yesterday' for yesterday's date", () => {
    expect(getDateGroup("2026-04-27T09:00:00Z")).toBe("yesterday")
  })

  it("returns 'thisMonth' for an earlier date in the same month", () => {
    expect(getDateGroup("2026-04-10T09:00:00Z")).toBe("thisMonth")
  })

  it("returns 'older' for previous months", () => {
    expect(getDateGroup("2026-02-15T09:00:00Z")).toBe("older")
  })
})
