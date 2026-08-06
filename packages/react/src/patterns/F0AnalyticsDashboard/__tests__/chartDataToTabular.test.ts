import { describe, expect, it } from "vitest"

import type { DashboardChartData, ScatterChartConfig } from "../types"

import { chartDataToTabular } from "../utils/chartDataToTabular"

const scatterConfig: ScatterChartConfig = {
  type: "scatter",
  xAxisName: "salary",
  yAxisName: "tenure",
}

const scatterData: DashboardChartData = {
  scatterSeries: [
    {
      name: "Engineering",
      data: [
        { x: 62000, y: 4.5, label: "Ana Ruiz" },
        { x: 78000, y: 7.2, label: "Marc Vidal" },
      ],
    },
    { name: "Sales", data: [[41000, 1.2]] },
  ],
}

describe("chartDataToTabular — numeric values", () => {
  it("exports numeric measure strings as spreadsheet numbers", () => {
    const data = {
      categories: ["2026-01-01"],
      series: [{ name: "Headcount", data: ["36"] }],
    } as unknown as DashboardChartData

    expect(chartDataToTabular({ type: "line" }, data).rows).toEqual([
      { Category: "2026-01-01", Headcount: 36 },
    ])
  })

  it.each([
    [
      { type: "funnel" } as const,
      { series: { data: [{ name: "Qualified", value: "12" }] } },
      [{ Stage: "Qualified", Value: 12 }],
    ],
    [
      { type: "pie" } as const,
      { series: { data: [{ name: "Permanent", value: "21" }] } },
      [{ Name: "Permanent", Value: 21 }],
    ],
    [
      { type: "radar" } as const,
      { indicators: ["Quality"], series: [{ name: "Score", data: ["8"] }] },
      [{ Indicator: "Quality", Score: 8 }],
    ],
    [
      { type: "gauge" } as const,
      { series: { name: "Progress", value: "75" } },
      [{ Name: "Progress", Value: 75 }],
    ],
    [
      { type: "heatmap" } as const,
      { xCategories: ["April"], yCategories: ["Madrid"], data: [[0, 0, "5"]] },
      [{ X: "April", Y: "Madrid", Value: 5 }],
    ],
  ])("normalizes numeric strings for $type charts", (config, data, rows) => {
    expect(
      chartDataToTabular(config, data as unknown as DashboardChartData).rows
    ).toEqual(rows)
  })

  it("uses null for non-finite and invalid measure values", () => {
    const data = {
      categories: ["Invalid", "Infinite"],
      series: [
        { name: "Value", data: ["not-a-number", Number.POSITIVE_INFINITY] },
      ],
    } as unknown as DashboardChartData

    expect(chartDataToTabular({ type: "bar" }, data).rows).toEqual([
      { Category: "Invalid", Value: null },
      { Category: "Infinite", Value: null },
    ])
  })
})

describe("chartDataToTabular — scatter", () => {
  it("emits one row per point across every series", () => {
    const { rows } = chartDataToTabular(scatterConfig, scatterData)

    expect(rows).toEqual([
      { series: "Engineering", label: "Ana Ruiz", x: 62000, y: 4.5 },
      { series: "Engineering", label: "Marc Vidal", x: 78000, y: 7.2 },
      { series: "Sales", label: "", x: 41000, y: 1.2 },
    ])
  })

  it("names the value columns after the axes", () => {
    const { columns } = chartDataToTabular(scatterConfig, scatterData)

    expect(columns).toEqual(["Series", "Label", "salary", "tenure"])
  })

  it("keys rows independently of the header labels", () => {
    const { keys } = chartDataToTabular(scatterConfig, scatterData)

    expect(keys).toEqual(["series", "label", "x", "y"])
  })

  it("falls back to X and Y when the axes are unnamed", () => {
    const { columns } = chartDataToTabular({ type: "scatter" }, scatterData)

    expect(columns).toEqual(["Series", "Label", "X", "Y"])
  })

  it("returns no rows for an empty scatter", () => {
    const { rows, columns } = chartDataToTabular(scatterConfig, {
      scatterSeries: [],
    })

    // Columns stay stable so an empty export still has a usable header.
    expect(rows).toEqual([])
    expect(columns).toEqual(["Series", "Label", "salary", "tenure"])
  })

  // Axis names are user-controlled — LLM-generated on the chat path — so
  // duplicates are ordinary. Before rows were keyed separately, the later
  // computed key silently overwrote the earlier one and a column's data
  // disappeared from the table and every export.
  it("keeps both measures when the axes share a name", () => {
    const { columns, keys, rows } = chartDataToTabular(
      { type: "scatter", xAxisName: "Amount", yAxisName: "Amount" },
      { scatterSeries: [{ name: "Eng", data: [{ x: 111, y: 999 }] }] }
    )

    expect(columns).toEqual(["Series", "Label", "Amount", "Amount"])
    expect(keys).toEqual(["series", "label", "x", "y"])
    expect(rows[0]).toMatchObject({ x: 111, y: 999 })
  })

  it("keeps the series name when an axis is called Series", () => {
    const { rows } = chartDataToTabular(
      { type: "scatter", xAxisName: "Series", yAxisName: "tenure" },
      { scatterSeries: [{ name: "Eng", data: [{ x: 111, y: 9 }] }] }
    )

    expect(rows[0]).toMatchObject({ series: "Eng", x: 111, y: 9 })
  })
})
