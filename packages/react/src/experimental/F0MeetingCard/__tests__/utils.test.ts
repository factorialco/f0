import { describe, expect, it } from "vitest"

import {
  getDayKind,
  getDurationMinutes,
  getMinutesSinceStart,
  getMinutesUntilStart,
  hasStatusTag,
  isJoinRelevant,
  isWithinJoinWindow,
  normalizeAttendees,
  pluralize,
  resolveAttendeesDisplay,
  resolveRelevantCount,
  shouldShowCountdown,
} from "../utils"

const now = new Date("2026-03-12T09:00:00Z")

describe("getDayKind", () => {
  it("names the neighbouring days and falls back to other", () => {
    expect(getDayKind(new Date("2026-03-12T18:00:00Z"), now)).toBe("today")
    expect(getDayKind(new Date("2026-03-11T08:00:00Z"), now)).toBe("yesterday")
    expect(getDayKind(new Date("2026-03-13T08:00:00Z"), now)).toBe("tomorrow")
    expect(getDayKind(new Date("2026-03-20T08:00:00Z"), now)).toBe("other")
  })
})

describe("minute helpers", () => {
  it("counts minutes until the start, going negative once it passed", () => {
    expect(getMinutesUntilStart(new Date("2026-03-12T09:10:00Z"), now)).toBe(10)
    expect(getMinutesUntilStart(new Date("2026-03-12T08:55:00Z"), now)).toBe(-5)
  })

  it("never reports negative elapsed time", () => {
    expect(getMinutesSinceStart(new Date("2026-03-12T08:56:00Z"), now)).toBe(4)
    expect(getMinutesSinceStart(new Date("2026-03-12T09:30:00Z"), now)).toBe(0)
  })
})

describe("isWithinJoinWindow", () => {
  it("is always open while the meeting runs", () => {
    expect(
      isWithinJoinWindow({
        state: "inProgress",
        startsAt: new Date("2026-03-12T20:00:00Z"),
        now,
      })
    ).toBe(true)
  })

  it("opens the default 10 minutes before the start", () => {
    expect(
      isWithinJoinWindow({
        state: "scheduled",
        startsAt: new Date("2026-03-12T09:10:00Z"),
        now,
      })
    ).toBe(true)
    expect(
      isWithinJoinWindow({
        state: "scheduled",
        startsAt: new Date("2026-03-12T09:11:00Z"),
        now,
      })
    ).toBe(false)
  })

  it("honours a custom window", () => {
    expect(
      isWithinJoinWindow({
        state: "scheduled",
        startsAt: new Date("2026-03-12T09:25:00Z"),
        now,
        windowMinutes: 30,
      })
    ).toBe(true)
  })

  it("keeps a late attendee able to join", () => {
    expect(
      isWithinJoinWindow({
        state: "scheduled",
        startsAt: new Date("2026-03-12T08:40:00Z"),
        now,
      })
    ).toBe(true)
  })

  it("is closed once the meeting is over", () => {
    expect(
      isWithinJoinWindow({
        state: "finished",
        startsAt: new Date("2026-03-12T09:00:00Z"),
        now,
      })
    ).toBe(false)
  })
})

describe("isJoinRelevant", () => {
  it("only covers the states where joining is possible", () => {
    expect(isJoinRelevant("scheduled")).toBe(true)
    expect(isJoinRelevant("inProgress")).toBe(true)
    expect(isJoinRelevant("summarizing")).toBe(false)
    expect(isJoinRelevant("finished")).toBe(false)
    expect(isJoinRelevant("cancelled")).toBe(false)
  })
})

describe("shouldShowCountdown", () => {
  it("shows only for a scheduled meeting inside the window", () => {
    expect(
      shouldShowCountdown({
        state: "scheduled",
        startsAt: new Date("2026-03-12T09:08:00Z"),
        now,
      })
    ).toBe(true)
    expect(
      shouldShowCountdown({
        state: "scheduled",
        startsAt: new Date("2026-03-12T11:00:00Z"),
        now,
      })
    ).toBe(false)
    expect(
      shouldShowCountdown({
        state: "inProgress",
        startsAt: new Date("2026-03-12T08:58:00Z"),
        now,
      })
    ).toBe(false)
  })
})

describe("resolveAttendeesDisplay", () => {
  it("shows faces while the meeting runs and a count otherwise", () => {
    expect(resolveAttendeesDisplay("auto", "inProgress")).toBe("avatars")
    expect(resolveAttendeesDisplay("auto", "scheduled")).toBe("count")
    expect(resolveAttendeesDisplay("auto", "finished")).toBe("count")
  })

  it("respects an explicit override", () => {
    expect(resolveAttendeesDisplay("count", "inProgress")).toBe("count")
    expect(resolveAttendeesDisplay("avatars", "finished")).toBe("avatars")
  })
})

describe("resolveRelevantCount", () => {
  const attendees = [
    { type: "internal" as const, firstName: "Ada", lastName: "Lovelace" },
  ]

  it("prefers who is inside while the meeting runs", () => {
    expect(
      resolveRelevantCount({
        state: "inProgress",
        attendees,
        invitedCount: 12,
        presentCount: 8,
      })
    ).toBe(8)
  })

  it("falls back to the invited total, then to the list length", () => {
    expect(
      resolveRelevantCount({ state: "scheduled", attendees, invitedCount: 12 })
    ).toBe(12)
    expect(resolveRelevantCount({ state: "scheduled", attendees })).toBe(1)
  })
})

describe("normalizeAttendees", () => {
  it("keeps internal attendees as they are and exposes the email as tooltip", () => {
    expect(
      normalizeAttendees([
        {
          type: "internal",
          firstName: "Ada",
          lastName: "Lovelace",
          src: "ada.jpg",
          email: "ada@factorial.co",
        },
      ])
    ).toEqual([
      {
        firstName: "Ada",
        lastName: "Lovelace",
        src: "ada.jpg",
        tooltipDescription: "ada@factorial.co",
      },
    ])
  })

  it("splits an external display name so initials still work", () => {
    expect(
      normalizeAttendees([{ type: "external", name: "Grace Brewster Hopper" }])
    ).toEqual([
      {
        firstName: "Grace",
        lastName: "Brewster Hopper",
        tooltipDescription: undefined,
      },
    ])
  })

  it("derives a name from the email when that is all there is", () => {
    expect(
      normalizeAttendees([{ type: "external", email: "grace@example.com" }])
    ).toEqual([
      {
        firstName: "grace",
        lastName: "",
        tooltipDescription: "grace@example.com",
      },
    ])
  })
})

describe("hasStatusTag", () => {
  it("names every state except a scheduled meeting still far out", () => {
    expect(hasStatusTag({ state: "finished", hasCountdown: false })).toBe(true)
    expect(hasStatusTag({ state: "scheduled", hasCountdown: false })).toBe(
      false
    )
    expect(hasStatusTag({ state: "scheduled", hasCountdown: true })).toBe(true)
    expect(hasStatusTag({ state: "inProgress", hasCountdown: false })).toBe(
      true
    )
    expect(hasStatusTag({ state: "summarizing", hasCountdown: false })).toBe(
      true
    )
    expect(hasStatusTag({ state: "cancelled", hasCountdown: false })).toBe(true)
  })
})

describe("getDurationMinutes", () => {
  it("returns whole minutes, or nothing when unknown or non-positive", () => {
    expect(
      getDurationMinutes(
        new Date("2026-03-12T09:00:00Z"),
        new Date("2026-03-12T09:23:00Z")
      )
    ).toBe(23)
    expect(
      getDurationMinutes(new Date("2026-03-12T09:00:00Z"), undefined)
    ).toBe(undefined)
    expect(
      getDurationMinutes(
        new Date("2026-03-12T09:00:00Z"),
        new Date("2026-03-12T09:00:00Z")
      )
    ).toBe(undefined)
  })
})

describe("pluralize", () => {
  it("picks the form and interpolates the count", () => {
    const forms = { one: "{{count}} guest", other: "{{count}} guests" }
    expect(pluralize(forms, 1)).toBe("1 guest")
    expect(pluralize(forms, 12)).toBe("12 guests")
  })
})
