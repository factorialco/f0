import { describe, expect, it, vi } from "vitest"

import { GranularityDefinition } from "../granularities/types"
import { DateRangeComplete } from "../types"
import { isActiveDate } from "../utils"

describe("isActiveDate", () => {
  // Create a simpler mock that matches the expected interface
  const createMockGranularity = (): GranularityDefinition => {
    const mockToRange = vi.fn()

    return {
      calendarView: "day" as const,
      label: vi.fn(),
      toRangeString: vi.fn(),
      toRange: mockToRange,
      toString: vi.fn(),
      fromString: vi.fn(),
      navigateUIView: vi.fn(),
      navigate: vi.fn(),
      getViewDateFromDate: vi.fn(),
      render: vi.fn(),
      add: vi.fn(),
      getPrevNext: vi.fn(),
    }
  }

  it("should return true when date is undefined", () => {
    const mockGranularity = createMockGranularity()
    const result = isActiveDate(undefined, mockGranularity, {})

    expect(result).toBe(true)
  })

  it("should return true when date is null", () => {
    const mockGranularity = createMockGranularity()
    const result = isActiveDate(null, mockGranularity, {})

    expect(result).toBe(true)
  })

  it("should return true when date is valid and within constraints", () => {
    const testDate = new Date("2024-01-15")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(mockDateRange)

    const result = isActiveDate(testDate, mockGranularity, {
      minDate: new Date("2024-01-01"),
      maxDate: new Date("2024-12-31"),
    })

    expect(result).toBe(true)
    expect(mockGranularity.toRange).toHaveBeenCalledWith(testDate)
  })

  it("should return false when granularity returns null for date", () => {
    const testDate = new Date("2024-01-15")
    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(null)

    const result = isActiveDate(testDate, mockGranularity, {})

    expect(result).toBe(false)
  })

  it("should return false when date range from is invalid", () => {
    const testDate = new Date("2024-01-15")
    const mockDateRange: DateRangeComplete = {
      from: new Date("invalid"), // Invalid date
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(mockDateRange)

    const result = isActiveDate(testDate, mockGranularity, {})

    expect(result).toBe(false)
  })

  it("should return false when date is before minDate constraint", () => {
    const testDate = new Date("2024-01-10")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-10T00:00:00"),
      to: new Date("2024-01-10T23:59:59"),
    }
    const minDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange)
      .mockReturnValueOnce(mockDateRange) // For testDate
      .mockReturnValueOnce(minDateRange) // For minDate
      .mockReturnValueOnce(null) // For maxDate (undefined)

    const result = isActiveDate(testDate, mockGranularity, {
      minDate: new Date("2024-01-15"),
    })

    expect(result).toBe(false)
  })

  it("should return false when date is after maxDate constraint", () => {
    const testDate = new Date("2024-01-20")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-20T00:00:00"),
      to: new Date("2024-01-20T23:59:59"),
    }
    const maxDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange)
      .mockReturnValueOnce(mockDateRange) // For testDate
      .mockReturnValueOnce(null) // For minDate (undefined)
      .mockReturnValueOnce(maxDateRange) // For maxDate

    const result = isActiveDate(testDate, mockGranularity, {
      maxDate: new Date("2024-01-15"),
    })

    expect(result).toBe(false)
  })

  it("should return true when no constraints are provided", () => {
    const testDate = new Date("2024-01-15")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(mockDateRange)

    const result = isActiveDate(testDate, mockGranularity, {})

    expect(result).toBe(true)
  })

  it("should return true when date equals minDate constraint", () => {
    const testDate = new Date("2024-01-15")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(mockDateRange)

    const result = isActiveDate(testDate, mockGranularity, {
      minDate: new Date("2024-01-15"),
    })

    expect(result).toBe(true)
  })

  it("should return true when date equals maxDate constraint", () => {
    const testDate = new Date("2024-01-15")
    const mockDateRange: DateRangeComplete = {
      from: new Date("2024-01-15T00:00:00"),
      to: new Date("2024-01-15T23:59:59"),
    }

    const mockGranularity = createMockGranularity()
    vi.mocked(mockGranularity.toRange).mockReturnValue(mockDateRange)

    const result = isActiveDate(testDate, mockGranularity, {
      maxDate: new Date("2024-01-15"),
    })

    expect(result).toBe(true)
  })
})
