import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "../types"
import { isDataChartEmpty } from "../utils/isDataChartEmpty"

describe("isDataChartEmpty", () => {
  describe("bar / line", () => {
    it.each(["bar", "line"] as const)("%s — empty series array", (type) => {
      expect(
        isDataChartEmpty({
          type,
          categories: ["A"],
          series: [],
        } as F0DataChartProps)
      ).toBe(true)
    })

    it.each(["bar", "line"] as const)(
      "%s — empty data within all series",
      (type) => {
        expect(
          isDataChartEmpty({
            type,
            categories: ["A"],
            series: [{ name: "s1", data: [] }],
          } as F0DataChartProps)
        ).toBe(true)
      }
    )

    it.each(["bar", "line"] as const)(
      "%s — all-zero values are NOT empty (legitimate render)",
      (type) => {
        expect(
          isDataChartEmpty({
            type,
            categories: ["A", "B"],
            series: [{ name: "s1", data: [0, 0] }],
          } as F0DataChartProps)
        ).toBe(false)
      }
    )

    it.each(["bar", "line"] as const)("%s — single non-zero", (type) => {
      expect(
        isDataChartEmpty({
          type,
          categories: ["A", "B"],
          series: [{ name: "s1", data: [0, 1] }],
        } as F0DataChartProps)
      ).toBe(false)
    })

    it.each(["bar", "line"] as const)("%s — null-safe", (type) => {
      expect(
        isDataChartEmpty({
          type,
          categories: ["A"],
          // @ts-expect-error testing malformed input
          series: undefined,
        })
      ).toBe(true)
    })
  })

  describe("funnel / pie", () => {
    it.each(["funnel", "pie"] as const)("%s — empty data", (type) => {
      expect(
        isDataChartEmpty({
          type,
          series: { name: "s", data: [] },
        } as F0DataChartProps)
      ).toBe(true)
    })

    it.each(["funnel", "pie"] as const)(
      "%s — all-zero values are NOT empty",
      (type) => {
        expect(
          isDataChartEmpty({
            type,
            series: {
              name: "s",
              data: [
                { value: 0, name: "x" },
                { value: 0, name: "y" },
              ],
            },
          } as F0DataChartProps)
        ).toBe(false)
      }
    )

    it.each(["funnel", "pie"] as const)("%s — one non-zero value", (type) => {
      expect(
        isDataChartEmpty({
          type,
          series: {
            name: "s",
            data: [
              { value: 0, name: "x" },
              { value: 1, name: "y" },
            ],
          },
        } as F0DataChartProps)
      ).toBe(false)
    })
  })

  describe("radar", () => {
    it("empty series", () => {
      expect(
        isDataChartEmpty({
          type: "radar",
          indicators: [{ name: "a" }, { name: "b" }],
          series: [],
        })
      ).toBe(true)
    })

    it("all-zero data is NOT empty", () => {
      expect(
        isDataChartEmpty({
          type: "radar",
          indicators: [{ name: "a" }, { name: "b" }],
          series: [{ name: "s", data: [0, 0] }],
        })
      ).toBe(false)
    })

    it("single non-zero", () => {
      expect(
        isDataChartEmpty({
          type: "radar",
          indicators: [{ name: "a" }, { name: "b" }],
          series: [{ name: "s", data: [0, 1] }],
        })
      ).toBe(false)
    })
  })

  describe("gauge", () => {
    it("undefined value is empty", () => {
      expect(
        // @ts-expect-error testing missing required prop
        isDataChartEmpty({ type: "gauge" })
      ).toBe(true)
    })

    it("0 is NOT empty (legitimate state)", () => {
      expect(isDataChartEmpty({ type: "gauge", value: 0 })).toBe(false)
    })

    it("positive value is not empty", () => {
      expect(isDataChartEmpty({ type: "gauge", value: 42 })).toBe(false)
    })
  })

  describe("heatmap", () => {
    it("empty data", () => {
      expect(
        isDataChartEmpty({
          type: "heatmap",
          xCategories: ["a"],
          yCategories: ["b"],
          data: [],
        })
      ).toBe(true)
    })

    it("all-zero values are NOT empty", () => {
      expect(
        isDataChartEmpty({
          type: "heatmap",
          xCategories: ["a", "b"],
          yCategories: ["c", "d"],
          data: [
            [0, 0, 0],
            [1, 1, 0],
          ],
        })
      ).toBe(false)
    })

    it("one non-zero tuple is not empty", () => {
      expect(
        isDataChartEmpty({
          type: "heatmap",
          xCategories: ["a", "b"],
          yCategories: ["c", "d"],
          data: [
            [0, 0, 0],
            [1, 1, 5],
          ],
        })
      ).toBe(false)
    })
  })
})
