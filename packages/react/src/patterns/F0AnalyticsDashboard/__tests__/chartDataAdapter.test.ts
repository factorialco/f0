import { describe, expect, it } from "vitest"

import type { DashboardChartConfig, DashboardChartData } from "../types"

import {
  compatibleTargetTypes,
  detectDataShape,
  fromCanonical,
  toCanonical,
} from "../utils/chartDataAdapter"

const CHART_TYPES: DashboardChartConfig["type"][] = [
  "bar",
  "line",
  "funnel",
  "pie",
  "radar",
  "gauge",
  "heatmap",
  "scatter",
]

const scatterData: DashboardChartData = {
  scatterSeries: [
    {
      name: "Engineering",
      data: [
        { x: 62000, y: 4.5, label: "Ana Ruiz" },
        { x: 78000, y: 7.2, label: "Marc Vidal" },
      ],
    },
  ],
}

describe("detectDataShape — scatter", () => {
  it("detects a scatter payload", () => {
    expect(detectDataShape(scatterData)).toBe("scatter")
  })

  it("detects an empty scatter by presence, not length", () => {
    // Otherwise an empty scatter falls through to "bar" and renders the wrong
    // empty state.
    expect(detectDataShape({ scatterSeries: [] })).toBe("scatter")
  })

  it("does not claim heatmap payloads", () => {
    const heatmap: DashboardChartData = {
      xCategories: ["Mon", "Tue"],
      yCategories: ["AM"],
      data: [
        [0, 0, 5],
        [1, 0, 8],
      ],
    }

    expect(detectDataShape(heatmap)).toBe("heatmap")
  })

  it("does not claim bar payloads", () => {
    const bar: DashboardChartData = {
      categories: ["A", "B"],
      series: [{ name: "Headcount", data: [1, 2] }],
    }

    expect(detectDataShape(bar)).toBe("bar")
  })

  it("is not itself mistaken for a heatmap or bar chart", () => {
    // The two shapes it could plausibly collide with: heatmap owns `data`
    // tuples, bar/line own a `series` array.
    expect(detectDataShape(scatterData)).not.toBe("heatmap")
    expect(detectDataShape(scatterData)).not.toBe("bar")
  })
})

describe("compatibleTargetTypes — scatter isolation", () => {
  it("offers no chart conversions for a scatter source", () => {
    const targets = compatibleTargetTypes("scatter")

    expect([...targets].sort()).toEqual(["scatter", "table"])
  })

  it.each(CHART_TYPES.filter((type) => type !== "scatter"))(
    "never offers scatter as a target for %s",
    (sourceType) => {
      expect(compatibleTargetTypes(sourceType).has("scatter")).toBe(false)
    }
  )
})

describe("canonical round trip — scatter", () => {
  it("keeps point labels and y values", () => {
    const canonical = toCanonical(scatterData)

    expect(canonical.categories).toEqual(["Ana Ruiz", "Marc Vidal"])
    expect(canonical.series).toEqual([
      { name: "Engineering", data: [4.5, 7.2] },
    ])
  })

  it("falls back to the x value when a point has no label", () => {
    const canonical = toCanonical({
      scatterSeries: [{ name: "Cost", data: [[12, 48]] }],
    })

    expect(canonical.categories).toEqual(["12"])
  })

  it("rebuilds a renderable scatter payload", () => {
    const canonical = toCanonical(scatterData)
    const rebuilt = fromCanonical(canonical, "scatter")

    // x is lost in the canonical form (there is only one shared axis there),
    // so it comes back as the category index — lossy but never blank.
    expect(rebuilt.scatterSeries).toEqual([
      {
        name: "Engineering",
        data: [
          { x: 0, y: 4.5, label: "Ana Ruiz" },
          { x: 1, y: 7.2, label: "Marc Vidal" },
        ],
      },
    ])
  })
})
