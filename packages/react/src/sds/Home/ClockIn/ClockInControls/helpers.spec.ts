import { describe, expect, it } from "vitest"

import { CLOCK_IN_COLORS, ClockInStatus } from "../ClockInGraph"
import { getInfo } from "./helpers"

describe("ClockInControls helpers", () => {
  const mockLabels = {
    clockedIn: "Clocked In",
    clockedOut: "Clocked Out",
    onBreak: "On Break",
    remainingTime: "Remaining:",
    overtime: "Overtime:",
    clockIn: "Clock In",
    clockOut: "Clock Out",
    break: "Break",
    resume: "Resume",
    selectLocation: "Select location",
    selectProject: "Select project",
    paid: "Paid",
    unpaid: "Unpaid",
  }

  const createEntry = (variant: ClockInStatus) => ({
    from: new Date(),
    to: new Date(),
    variant,
  })

  describe("getInfo", () => {
    it("should return clocked-out status when no data provided", () => {
      const result = getInfo({
        data: [],
        trackedMinutes: 0,
        labels: mockLabels,
        remainingMinutes: undefined,
      })

      expect(result).toEqual({
        statusText: "Clocked Out",
        subtitle: undefined,
        statusColor: CLOCK_IN_COLORS["clocked-out"],
        status: "clocked-out",
      })
    })

    it("should return correct status for clocked-in entry", () => {
      const mockData = [createEntry("clocked-in")]

      const result = getInfo({
        data: mockData,
        trackedMinutes: 0,
        labels: mockLabels,
        remainingMinutes: undefined,
      })

      expect(result).toEqual({
        statusText: "Clocked In",
        subtitle: undefined,
        statusColor: CLOCK_IN_COLORS["clocked-in"],
        status: "clocked-in",
      })
    })

    it("should return correct status for break entry", () => {
      const mockData = [createEntry("break")]

      const result = getInfo({
        data: mockData,
        labels: mockLabels,
        remainingMinutes: undefined,
        trackedMinutes: 0,
      })

      expect(result).toEqual({
        statusText: "On Break",
        subtitle: undefined,
        statusColor: CLOCK_IN_COLORS.break,
        status: "break",
      })
    })

    it("should format remaining time correctly when positive", () => {
      const result = getInfo({
        data: [],
        labels: mockLabels,
        remainingMinutes: 90, // 1 hour 30 minutes
        trackedMinutes: 0,
      })

      expect(result.subtitle).toBe("Remaining: 01:30")
      expect(result.status).toBe("clocked-out")
    })

    it("should format overtime correctly when negative", () => {
      const result = getInfo({
        data: [
          {
            from: new Date("2024-03-20T12:00:00"),
            to: new Date("2024-03-20T12:45:00"),
            variant: "clocked-in",
          },
          {
            from: new Date("2024-03-20T12:45:00"),
            to: new Date("2024-03-20T12:45:00"),
            variant: "clocked-out",
          },
        ],
        labels: mockLabels,
        remainingMinutes: -45, // 45 minutes overtime
        trackedMinutes: 45,
      })

      expect(result.subtitle).toBe("Overtime: 00:45")
      expect(result.status).toBe("clocked-out")
    })

    it("should handle zero remaining minutes", () => {
      const result = getInfo({
        data: [],
        labels: mockLabels,
        remainingMinutes: 0,
        trackedMinutes: 0,
      })

      expect(result.subtitle).toBe("Remaining: 00:00")
      expect(result.status).toBe("clocked-out")
    })

    it("should use last entry status when multiple entries exist", () => {
      const mockData = [createEntry("clocked-in"), createEntry("break")]

      const result = getInfo({
        data: mockData,
        labels: mockLabels,
        remainingMinutes: undefined,
        trackedMinutes: 0,
      })

      expect(result.status).toBe("break")
      expect(result.statusText).toBe("On Break")
      expect(result.statusColor).toBe(CLOCK_IN_COLORS.break)
    })

    it("should handle undefined remainingMinutes", () => {
      const mockData = [createEntry("clocked-in")]

      const result = getInfo({
        data: mockData,
        labels: mockLabels,
        remainingMinutes: undefined,
        trackedMinutes: 0,
      })

      expect(result.subtitle).toBeUndefined()
    })

    it("should handle empty data with remaining minutes", () => {
      const result = getInfo({
        data: [],
        labels: mockLabels,
        remainingMinutes: 120, // 2 hours
        trackedMinutes: 0,
      })

      expect(result).toEqual({
        status: "clocked-out",
        statusText: "Clocked Out",
        subtitle: "Remaining: 02:00",
        statusColor: CLOCK_IN_COLORS["clocked-out"],
      })
    })
  })
})
