import { describe, expect, it } from "vitest"

import type { DashboardChartData } from "../types"

import {
  compatibleTargetTypes,
  defaultChartConfig,
  detectDataShape,
  toCanonical,
} from "../utils/chartDataAdapter"
import { chartDataToTabular } from "../utils/chartDataToTabular"

const comboData: DashboardChartData = {
  categories: ["Jan", "Feb", "Mar"],
  barSeries: [{ name: "Headcount", data: [120, 128, 131] }],
  lineSeries: [{ name: "Turnover rate", data: [4.1, 3.8, 5.2] }],
}

describe("detectDataShape — combo", () => {
  it("routes combo data to the combo renderer", () => {
    expect(detectDataShape(comboData)).toBe("combo")
  })

  it("routes on field presence, not length, so a half-fetched combo still renders", () => {
    expect(
      detectDataShape({ categories: [], barSeries: [], lineSeries: [] })
    ).toBe("combo")
  })

  it("treats data with only barSeries as combo, not bar", () => {
    // Without this, a combo whose line measure resolves second would render
    // once as a bar chart and then swap — and `series` is what the bar branch
    // reads, so the bars would come out empty.
    expect(
      detectDataShape({
        categories: ["Jan"],
        barSeries: [{ name: "Headcount", data: [1] }],
      })
    ).toBe("combo")
  })

  it("leaves plain bar/line data alone", () => {
    expect(
      detectDataShape({
        categories: ["Jan"],
        series: [{ name: "Headcount", data: [1] }],
      })
    ).toBe("bar")
  })
})

describe("compatibleTargetTypes — combo", () => {
  it("offers only the table view and itself", () => {
    // Flattening a rate onto a headcount axis draws an invisible line along
    // the baseline. No conversion beats a silently misleading one.
    expect([...compatibleTargetTypes("combo")].sort()).toEqual([
      "combo",
      "table",
    ])
  })

  it("is never offered as a target from another chart type", () => {
    for (const source of [
      "bar",
      "line",
      "funnel",
      "pie",
      "radar",
      "gauge",
      "heatmap",
    ] as const) {
      expect(compatibleTargetTypes(source).has("combo")).toBe(false)
    }
  })
})

describe("toCanonical — combo", () => {
  it("flattens both axes, bars first", () => {
    expect(toCanonical(comboData)).toEqual({
      categories: ["Jan", "Feb", "Mar"],
      series: [
        { name: "Headcount", data: [120, 128, 131] },
        { name: "Turnover rate", data: [4.1, 3.8, 5.2] },
      ],
    })
  })

  it("unwraps bar points that carry a target", () => {
    const canonical = toCanonical({
      categories: ["Jan"],
      barSeries: [{ name: "Headcount", data: [{ value: 120, target: 140 }] }],
      lineSeries: [],
    })

    expect(canonical.series).toEqual([{ name: "Headcount", data: [120] }])
  })
})

describe("chartDataToTabular — combo", () => {
  it("gives every series its own column", () => {
    expect(chartDataToTabular({ type: "combo" }, comboData)).toEqual({
      columns: ["Category", "Headcount", "Turnover rate"],
      rows: [
        { Category: "Jan", Headcount: 120, "Turnover rate": 4.1 },
        { Category: "Feb", Headcount: 128, "Turnover rate": 3.8 },
        { Category: "Mar", Headcount: 131, "Turnover rate": 5.2 },
      ],
    })
  })

  it("survives an axis with no series", () => {
    expect(
      chartDataToTabular(
        { type: "combo" },
        { categories: ["Jan"], barSeries: comboData.barSeries }
      )
    ).toEqual({
      columns: ["Category", "Headcount"],
      rows: [{ Category: "Jan", Headcount: 120 }],
    })
  })
})

describe("defaultChartConfig — combo", () => {
  it("returns a combo config", () => {
    expect(defaultChartConfig("combo")).toEqual({
      type: "combo",
      lineType: "linear",
    })
  })
})
