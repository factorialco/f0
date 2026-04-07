import { addDays, differenceInDays, endOfDay, startOfDay } from "date-fns"
import { describe, expect, it } from "vitest"

import { rangeGranularity } from "../index"

describe("rangeGranularity", () => {
  const baseDate = new Date(2024, 0, 15) // January 15, 2024
  const rangeDate = {
    from: baseDate,
    to: new Date(2024, 0, 17), // January 17, 2024 (3 days range)
  }

  describe("getPrevNext", () => {
    it("navigates by the range size", () => {
      const result = rangeGranularity.getPrevNext(rangeDate, {
        min: new Date(2024, 0, 1),
        max: new Date(2024, 0, 31),
      })

      const rangeSize = differenceInDays(rangeDate.to, rangeDate.from) + 1

      expect(result).toEqual({
        prev: {
          from: startOfDay(addDays(rangeDate.from, -rangeSize)),
          to: endOfDay(addDays(rangeDate.to, -rangeSize)),
        },
        next: {
          from: startOfDay(addDays(rangeDate.from, rangeSize)),
          to: endOfDay(addDays(rangeDate.to, rangeSize)),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = rangeGranularity.getPrevNext(
        {
          from: new Date(2024, 0, 1),
          to: new Date(2024, 0, 3),
        },
        {
          min: new Date(2024, 0, 1),
          max: new Date(2024, 0, 31),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = rangeGranularity.getPrevNext(
        {
          from: new Date(2024, 0, 29),
          to: new Date(2024, 0, 31),
        },
        {
          min: new Date(2024, 0, 1),
          max: new Date(2024, 0, 31),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })
})
