import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardChartData } from "../types"

import { canRenderChart, hasChartDataPoints } from "../utils/chartRenderability"

describe("hasChartDataPoints", () => {
  it.each<[string, DashboardChartData]>([
    [
      "bar/line series",
      { categories: ["Q1"], series: [{ name: "A", data: [1] }] },
    ],
    [
      "a zero-valued series (zero is a value)",
      { categories: ["Q1"], series: [{ name: "A", data: [0] }] },
    ],
    [
      "funnel/pie series",
      { series: { name: "Pipeline", data: [{ name: "Lead", value: 3 }] } },
    ],
    [
      "radar series",
      {
        indicators: [{ name: "Speed", max: 10 }],
        series: [{ name: "A", data: [4] }],
      },
    ],
    ["a gauge value", { series: { value: 12 } }],
    ["a zero gauge value", { series: { value: 0 } }],
    [
      "heatmap points",
      { xCategories: ["Mon"], yCategories: ["AM"], data: [[0, 0, 5]] },
    ],
  ])("reports data points for %s", (_label, data) => {
    expect(hasChartDataPoints(data)).toBe(true)
  })

  it.each<[string, DashboardChartData]>([
    ["nothing at all", {}],
    ["no series", { categories: ["Q1", "Q2"] }],
    ["an empty series list", { categories: ["Q1"], series: [] }],
    [
      "series that carry no points",
      { categories: ["Q1"], series: [{ name: "A", data: [] }] },
    ],
    ["an empty funnel series", { series: { name: "Pipeline", data: [] } }],
    [
      "a heatmap with axes but no points",
      { xCategories: ["Mon"], yCategories: ["AM"], data: [] },
    ],
  ])("reports no data points for %s", (_label, data) => {
    expect(hasChartDataPoints(data)).toBe(false)
  })
})

describe("canRenderChart", () => {
  it("accepts a chart that has both points and somewhere to put them", () => {
    expect(
      canRenderChart({
        type: "bar",
        categories: ["Q1"],
        series: [{ name: "A", data: [1] }],
      })
    ).toBe(true)
  })

  it.each<[string, F0DataChartProps]>([
    ["bar", { type: "bar", categories: [], series: [] }],
    ["line", { type: "line", categories: [], series: [] }],
    ["pie", { type: "pie", series: { name: "", data: [] } }],
    ["funnel", { type: "funnel", series: { name: "", data: [] } }],
    ["radar", { type: "radar", indicators: [], series: [] }],
    ["gauge", { type: "gauge" } as F0DataChartProps],
    [
      "heatmap",
      { type: "heatmap", xCategories: [], yCategories: [], data: [] },
    ],
  ])("rejects an empty %s chart", (_label, props) => {
    expect(canRenderChart(props)).toBe(false)
  })

  it("rejects bar/line data with no category axis to place it on", () => {
    expect(
      canRenderChart({
        type: "bar",
        categories: [],
        series: [{ name: "A", data: [1, 2, 3] }],
      })
    ).toBe(false)
  })

  it("rejects radar data with no indicators", () => {
    expect(
      canRenderChart({
        type: "radar",
        indicators: [],
        series: [{ name: "A", data: [1, 2, 3] }],
      })
    ).toBe(false)
  })

  it("rejects a heatmap missing either axis", () => {
    expect(
      canRenderChart({
        type: "heatmap",
        xCategories: ["Mon"],
        yCategories: [],
        data: [[0, 0, 5]],
      })
    ).toBe(false)
    expect(
      canRenderChart({
        type: "heatmap",
        xCategories: [],
        yCategories: ["AM"],
        data: [[0, 0, 5]],
      })
    ).toBe(false)
  })

  it("accepts funnel, pie and gauge without any axis — they label themselves", () => {
    expect(
      canRenderChart({
        type: "pie",
        series: { name: "Split", data: [{ name: "A", value: 1 }] },
      })
    ).toBe(true)
    expect(
      canRenderChart({
        type: "funnel",
        series: { name: "Pipeline", data: [{ name: "Lead", value: 1 }] },
      })
    ).toBe(true)
    expect(canRenderChart({ type: "gauge", value: 0 })).toBe(true)
  })
})
