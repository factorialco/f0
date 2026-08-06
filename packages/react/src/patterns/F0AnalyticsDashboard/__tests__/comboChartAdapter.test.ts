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

const comboConfig = {
  type: "combo" as const,
  primaryAxisLabel: "People",
  secondaryAxisLabel: "Percent",
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
    expect(chartDataToTabular(comboConfig, comboData)).toEqual({
      columns: ["Category", "Headcount · People", "Turnover rate · Percent"],
      keys: ["category", "bar-0", "line-0"],
      rows: [
        { category: "Jan", "bar-0": 120, "line-0": 4.1 },
        { category: "Feb", "bar-0": 128, "line-0": 3.8 },
        { category: "Mar", "bar-0": 131, "line-0": 5.2 },
      ],
    })
  })

  it("survives an axis with no series", () => {
    expect(
      chartDataToTabular(comboConfig, {
        categories: ["Jan"],
        barSeries: comboData.barSeries,
      })
    ).toEqual({
      columns: ["Category", "Headcount · People"],
      keys: ["category", "bar-0"],
      rows: [{ category: "Jan", "bar-0": 120 }],
    })
  })

  it("preserves duplicate labels and bar targets with stable row keys", () => {
    expect(
      chartDataToTabular(comboConfig, {
        categories: ["Jan"],
        barSeries: [{ name: "Revenue", data: [{ value: 10, target: 20 }] }],
        lineSeries: [{ name: "Revenue", data: [5] }],
      })
    ).toEqual({
      columns: [
        "Category",
        "Revenue · People",
        "Revenue · People Target",
        "Revenue · Percent",
      ],
      keys: ["category", "bar-0", "bar-0-target", "line-0"],
      rows: [
        {
          category: "Jan",
          "bar-0": 10,
          "bar-0-target": 20,
          "line-0": 5,
        },
      ],
    })
  })

  it("disambiguates repeated names within the same axis", () => {
    expect(
      chartDataToTabular(comboConfig, {
        categories: ["Jan"],
        barSeries: [
          { name: "Revenue", data: [10] },
          { name: "Revenue", data: [20] },
        ],
        lineSeries: [],
      })
    ).toEqual({
      columns: ["Category", "Revenue · People (1)", "Revenue · People (2)"],
      keys: ["category", "bar-0", "bar-1"],
      rows: [{ category: "Jan", "bar-0": 10, "bar-1": 20 }],
    })
  })

  it("keeps equal names distinct when both axis labels also match", () => {
    expect(
      chartDataToTabular(
        {
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Amount",
        },
        {
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [10] }],
          lineSeries: [{ name: "Revenue", data: [5] }],
        }
      ).columns
    ).toEqual(["Category", "Revenue · Amount (1)", "Revenue · Amount (2)"])
  })

  it("emits null targets for points without one in a mixed series", () => {
    expect(
      chartDataToTabular(comboConfig, {
        categories: ["Jan", "Feb", "Mar"],
        barSeries: [
          {
            name: "Revenue",
            data: [10, { value: 20, target: 25 }, { value: 30 }],
          },
        ],
        lineSeries: [],
      }).rows
    ).toEqual([
      { category: "Jan", "bar-0": 10, "bar-0-target": null },
      { category: "Feb", "bar-0": 20, "bar-0-target": 25 },
      { category: "Mar", "bar-0": 30, "bar-0-target": null },
    ])
  })

  it("uses the localized target column label supplied by the caller", () => {
    expect(
      chartDataToTabular(
        comboConfig,
        {
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [{ value: 10, target: 20 }] }],
          lineSeries: [],
        },
        {
          target: "Objetivo",
          primaryMeasure: "Medida principal",
          secondaryMeasure: "Medida secundaria",
        }
      ).columns
    ).toContain("Revenue · People Objetivo")
  })

  it("uses localized fallbacks for blank axis labels", () => {
    expect(
      chartDataToTabular(
        {
          type: "combo",
          primaryAxisLabel: " ",
          secondaryAxisLabel: "",
        },
        {
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [10] }],
          lineSeries: [{ name: "Margin", data: [5] }],
        },
        {
          target: "Objetivo",
          primaryMeasure: "Medida principal",
          secondaryMeasure: "Medida secundaria",
        }
      ).columns
    ).toEqual([
      "Category",
      "Revenue · Medida principal",
      "Margin · Medida secundaria",
    ])
  })

  it("omits empty placeholder series from table and export data", () => {
    expect(
      chartDataToTabular(comboConfig, {
        categories: ["Jan"],
        barSeries: [
          { name: "Revenue", data: [] },
          { name: "Revenue", data: [10] },
        ],
        lineSeries: [{ name: "Margin", data: [] }],
      })
    ).toEqual({
      columns: ["Category", "Revenue · People"],
      keys: ["category", "bar-0"],
      rows: [{ category: "Jan", "bar-0": 10 }],
    })
  })
})

describe("defaultChartConfig — combo", () => {
  it("returns a combo config", () => {
    expect(defaultChartConfig("combo")).toEqual({
      type: "combo",
      lineType: "linear",
      primaryAxisLabel: "Primary measure",
      secondaryAxisLabel: "Secondary measure",
    })
  })
})
