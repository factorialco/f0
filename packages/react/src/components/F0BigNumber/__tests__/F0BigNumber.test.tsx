import { screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { BigNumberProps } from "../types"

import { F0BigNumber } from "../F0BigNumber"

// Mock F0TagBalance component - use vi.hoisted to ensure proper hoisting
const MockF0TagBalance = vi.hoisted(() => {
  return vi.fn(({ percentage, amount, invertStatus, hint }) => (
    <div
      data-testid="tag-balance"
      data-percentage={percentage}
      data-amount={JSON.stringify(amount)}
      data-invert-status={invertStatus}
      data-hint={hint}
    >
      TagBalance Mock
    </div>
  ))
})

// Mock F0TagBalance - try both relative and absolute paths
vi.mock("../tags/F0TagBalance", () => ({
  F0TagBalance: MockF0TagBalance,
}))

vi.mock("@/components/tags/F0TagBalance", () => ({
  F0TagBalance: MockF0TagBalance,
}))

// Mock numeric utilities
const mockNormalizeFunction = vi.fn()
const mockNumericFormatter = vi.fn()
const mockNumericFinalValue = vi.fn()

vi.mock("@/lib/numeric", () => ({
  useNormalizeValueWithFormatter: () => mockNormalizeFunction,
}))

vi.mock("@/lib/numeric/utils/numericFormatter", () => ({
  numericFormatter: (...args: unknown[]) => mockNumericFormatter(...args),
}))

vi.mock("@/lib/numeric/utils/numericFinalValue", () => ({
  numericFinalValue: (...args: unknown[]) => mockNumericFinalValue(...args),
}))

// Mock Intl.NumberFormat
const mockFormat = vi.fn()
const OriginalIntl = global.Intl

// Helper function to create normalized numeric value with formatter
const createNormalizedNumeric = (
  numericValue: { value?: number },
  formatterOptions: Record<string, unknown> = {}
) => {
  const mockFormatter = vi.fn((val) => String(val?.value ?? val ?? ""))
  return {
    numericValue,
    formatter: mockFormatter,
    formatterOptions,
  }
}

describe("F0BigNumber", () => {
  beforeEach(() => {
    vi.clearAllMocks()

    // Setup default mocks for the hook
    // The hook returns a function, so we mock it to return a function that can be configured
    mockNormalizeFunction.mockImplementation((value, options) => {
      const mockFormatter = vi.fn((val) => String(val?.value ?? val ?? ""))

      if (value === null || value === undefined) {
        return createNormalizedNumeric(
          { value: undefined },
          options?.formatterOptions || {}
        )
      }
      if (typeof value === "number") {
        return createNormalizedNumeric(
          { value },
          options?.formatterOptions || {}
        )
      }
      if (typeof value === "object" && "numericValue" in value) {
        return {
          numericValue: value.numericValue || { value: value.value },
          formatter: value.formatter || mockFormatter,
          formatterOptions: {
            ...(options?.formatterOptions || {}),
            ...value.formatterOptions,
          },
        }
      }
      return createNormalizedNumeric(value, options?.formatterOptions || {})
    })

    mockNumericFormatter.mockImplementation((value, options) => {
      const numValue = typeof value === "number" ? value : value?.value
      if (numValue === undefined || numValue === null) {
        return options?.emptyPlaceholder || ""
      }
      return String(numValue)
    })

    mockNumericFinalValue.mockImplementation((numericValue) => {
      if (!numericValue || typeof numericValue !== "object") {
        return undefined
      }
      return numericValue.value
    })

    // Mock Intl.NumberFormat - use class syntax to ensure it works as a constructor
    class MockNumberFormat {
      format = mockFormat

      constructor() {
        // Constructor can be empty, format is set as instance property
      }

      static supportedLocalesOf = OriginalIntl.NumberFormat.supportedLocalesOf
    }

    global.Intl = {
      ...OriginalIntl,
      NumberFormat: MockNumberFormat as unknown as typeof Intl.NumberFormat,
    } as typeof Intl

    mockFormat.mockImplementation((value: number) => String(value))
  })

  afterEach(() => {
    global.Intl = OriginalIntl
  })

  describe("Basic rendering", () => {
    it("should render the component with a value", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      const { container } = zeroRender(<F0BigNumber {...props} />)

      expect(container).toBeInTheDocument()
      expect(screen.getByText("1000")).toBeInTheDocument()
    })

    it("should render with a label when provided", () => {
      const props: BigNumberProps = {
        value: 1000,
        label: "Total Revenue",
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("Total Revenue")).toBeInTheDocument()
    })

    it("should not render label when not provided", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      const { container } = zeroRender(<F0BigNumber {...props} />)

      const labelElements = container.querySelectorAll("div")
      const hasLabel = Array.from(labelElements).some(
        (el) => el.textContent === ""
      )
      expect(hasLabel).toBe(false)
    })
  })

  describe("Value formatting", () => {
    it("should format numeric value correctly", () => {
      const props: BigNumberProps = {
        value: 1234567.89,
        comparison: 1000000,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1234567.89 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000000 })
      )
      mockNumericFormatter.mockReturnValueOnce("1,234,567.89")
      mockNumericFinalValue.mockReturnValueOnce(1000000)
      mockNumericFinalValue.mockReturnValueOnce(1234567.89)

      zeroRender(<F0BigNumber {...props} />)

      expect(mockNumericFormatter).toHaveBeenCalledWith(
        { value: 1234567.89 },
        { decimalPlaces: 2 }
      )
      expect(screen.getByText("1,234,567.89")).toBeInTheDocument()
    })

    it("should handle Numeric object value", () => {
      const props: BigNumberProps = {
        value: { value: 5000, units: "$", unitsPosition: "prepend" },
        comparison: 4000,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric(
          { value: 5000, units: "$", unitsPosition: "prepend" },
          { decimalPlaces: 2 }
        )
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 4000 })
      )
      mockNumericFormatter.mockReturnValueOnce("$5,000")
      mockNumericFinalValue.mockReturnValueOnce(4000)
      mockNumericFinalValue.mockReturnValueOnce(5000)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("$5,000")).toBeInTheDocument()
    })

    it("should handle NumericWithFormatter object value", () => {
      const props: BigNumberProps = {
        value: {
          numericValue: { value: 7500, units: "€", unitsPosition: "append" },
          formatterOptions: { decimalPlaces: 0 },
        },
        comparison: 6000,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric(
          { value: 7500, units: "€", unitsPosition: "append" },
          { decimalPlaces: 0 }
        )
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 6000 })
      )
      mockNumericFormatter.mockReturnValueOnce("7,500€")
      mockNumericFinalValue.mockReturnValueOnce(6000)
      mockNumericFinalValue.mockReturnValueOnce(7500)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("7,500€")).toBeInTheDocument()
    })
  })

  describe("Comparison and trend", () => {
    it("should render F0TagBalance when comparison value exists", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      expect(screen.getByTestId("tag-balance")).toBeInTheDocument()
    })

    it("should not render F0TagBalance when comparison value is undefined", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: undefined as unknown as number,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: undefined })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(undefined)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.queryByTestId("tag-balance")).not.toBeInTheDocument()
    })

    it("should calculate trend percentage correctly for positive trend", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 800,
        trend: true,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 800 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(800)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeCloseTo(25, 1) // (1000 - 800) / 800 * 100 = 25%
    })

    it("should calculate trend percentage correctly for negative trend", () => {
      const props: BigNumberProps = {
        value: 800,
        comparison: 1000,
        trend: true,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 800 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 })
      )
      mockNumericFormatter.mockReturnValueOnce("800")
      mockNumericFinalValue.mockReturnValueOnce(1000)
      mockNumericFinalValue.mockReturnValueOnce(800)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeCloseTo(-20, 1) // (800 - 1000) / 1000 * 100 = -20%
    })

    it("should calculate trend percentage correctly for zero change", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 1000,
        trend: true,
      }

      mockNormalizeFunction.mockReturnValueOnce({
        numericValue: { value: 1000 },
        formatterOptions: { decimalPlaces: 2 },
      })
      mockNormalizeFunction.mockReturnValueOnce({
        numericValue: { value: 1000 },
        formatterOptions: {},
      })
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(1000)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeCloseTo(0, 1)
    })

    it("should pass comparisonHint to F0TagBalance", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        comparisonHint: "vs last month",
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.hint).toBe("vs last month")
    })
  })

  describe("Trend configuration", () => {
    it("should handle trend as boolean true", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: true,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.invertStatus).toBe(false)
    })

    it("should handle trend as boolean false", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: false,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      // When trend is false, percentage should be undefined because trendConfig.show is false
      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeUndefined()
    })

    it("should handle trend as TrendConfig object with show: true", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: { show: true, invertStatus: false },
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.invertStatus).toBe(false)
      expect(lastCall.percentage).toBeDefined()
    })

    it("should handle trend as TrendConfig object with invertStatus: true", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: { show: true, invertStatus: true },
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.invertStatus).toBe(true)
    })

    it("should handle trend as TrendConfig object with show: false", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: { show: false },
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeUndefined()
    })

    it("should handle trend as undefined", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: undefined,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeUndefined()
    })

    it("should handle trend as TrendConfig with default show value", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
        trend: { invertStatus: true },
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.invertStatus).toBe(true)
      expect(lastCall.percentage).toBeDefined()
    })
  })

  describe("Edge cases", () => {
    it("should handle zero value", () => {
      const props: BigNumberProps = {
        value: 0,
        comparison: 0,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 0 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 0 })
      )
      mockNumericFormatter.mockReturnValueOnce("0")
      mockNumericFinalValue.mockReturnValueOnce(0)
      mockNumericFinalValue.mockReturnValueOnce(0)

      zeroRender(<F0BigNumber {...props} />)

      // There might be multiple "0" elements (value and tag balance), so use getAllByText
      const zeroElements = screen.getAllByText("0")
      expect(zeroElements.length).toBeGreaterThan(0)
    })

    it("should handle negative values", () => {
      const props: BigNumberProps = {
        value: -1000,
        comparison: -800,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: -1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: -800 })
      )
      mockNumericFormatter.mockReturnValueOnce("-1000")
      mockNumericFinalValue.mockReturnValueOnce(-800)
      mockNumericFinalValue.mockReturnValueOnce(-1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("-1000")).toBeInTheDocument()
    })

    it("should handle null comparison value", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: null as unknown as number,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      // When comparison is null, normalizeNumericWithFormatter returns object with undefined value
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: undefined })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(undefined)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      // comparisonValue will be undefined, so tag should not render
      expect(screen.queryByTestId("tag-balance")).not.toBeInTheDocument()
    })

    it("should handle undefined comparison value", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: undefined as unknown as number,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: undefined })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(undefined)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.queryByTestId("tag-balance")).not.toBeInTheDocument()
    })

    it("should handle when comparisonValue is undefined but comparison object exists", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: { value: undefined } as unknown as number,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: undefined })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(undefined)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      // comparisonValue is undefined, so tag should not render
      expect(screen.queryByTestId("tag-balance")).not.toBeInTheDocument()
    })

    it("should handle when valueValue is undefined", () => {
      const props: BigNumberProps = {
        value: { value: undefined } as unknown as number,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: undefined }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(undefined)

      zeroRender(<F0BigNumber {...props} />)

      // Should still render but without trend percentage
      expect(MockF0TagBalance).toHaveBeenCalled()
      const lastCall =
        MockF0TagBalance.mock.calls[MockF0TagBalance.mock.calls.length - 1][0]
      expect(lastCall.percentage).toBeUndefined()
    })

    it("should handle very large numbers", () => {
      const props: BigNumberProps = {
        value: 999999999999,
        comparison: 888888888888,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 999999999999 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 888888888888 })
      )
      mockNumericFormatter.mockReturnValueOnce("999,999,999,999")
      mockNumericFinalValue.mockReturnValueOnce(888888888888)
      mockNumericFinalValue.mockReturnValueOnce(999999999999)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("999,999,999,999")).toBeInTheDocument()
    })

    it("should handle decimal values", () => {
      const props: BigNumberProps = {
        value: 1234.567,
        comparison: 1000.123,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1234.567 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000.123 })
      )
      mockNumericFormatter.mockReturnValueOnce("1,234.57")
      mockNumericFinalValue.mockReturnValueOnce(1000.123)
      mockNumericFinalValue.mockReturnValueOnce(1234.567)

      zeroRender(<F0BigNumber {...props} />)

      expect(screen.getByText("1,234.57")).toBeInTheDocument()
    })
  })

  describe("Skeleton", () => {
    it("should render skeleton component", () => {
      const { container } = zeroRender(<F0BigNumber.Skeleton />)

      expect(container).toBeInTheDocument()
      // Skeleton should have specific structure with multiple skeleton elements
      const skeletonElements = screen.getAllByTestId("skeleton")
      expect(skeletonElements.length).toBeGreaterThan(0)
    })

    it("should render skeleton with correct structure", () => {
      const { container } = zeroRender(<F0BigNumber.Skeleton />)

      // Check for the main container structure
      const mainContainer = container.querySelector(
        ".relative.flex.h-full.w-full.cursor-progress.flex-col.gap-2"
      )
      expect(mainContainer).toBeInTheDocument()

      // Check for skeleton elements using test ID
      const skeletonElements = screen.getAllByTestId("skeleton")
      expect(skeletonElements.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe("Component integration", () => {
    it("should call useNormalizeValueWithFormatter hook with correct parameters for value", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      // Should be called with value and default formatterOptions
      expect(mockNormalizeFunction).toHaveBeenCalledWith(1000, {
        formatterOptions: {
          decimalPlaces: 2,
        },
      })
    })

    it("should call useNormalizeValueWithFormatter hook with correct parameters for comparison", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 900,
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 900 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(900)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      // Should be called with comparison value
      expect(mockNormalizeFunction).toHaveBeenCalledWith(900)
    })

    it("should pass correct props to F0TagBalance", () => {
      const props: BigNumberProps = {
        value: 1000,
        comparison: 800,
        trend: { show: true, invertStatus: true },
        comparisonHint: "vs last period",
      }

      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 1000 }, { decimalPlaces: 2 })
      )
      mockNormalizeFunction.mockReturnValueOnce(
        createNormalizedNumeric({ value: 800 })
      )
      mockNumericFormatter.mockReturnValueOnce("1000")
      mockNumericFinalValue.mockReturnValueOnce(800)
      mockNumericFinalValue.mockReturnValueOnce(1000)

      zeroRender(<F0BigNumber {...props} />)

      expect(MockF0TagBalance).toHaveBeenCalledTimes(1)
      const callArgs = MockF0TagBalance.mock.calls[0][0]
      expect(callArgs.invertStatus).toBe(true)
      expect(callArgs.hint).toBe("vs last period")
      expect(callArgs.percentage).toBeCloseTo(25, 1) // (1000 - 800) / 800 * 100
      expect(callArgs.amount).toMatchObject({
        numericValue: { value: 800 },
      })
    })
  })
})
