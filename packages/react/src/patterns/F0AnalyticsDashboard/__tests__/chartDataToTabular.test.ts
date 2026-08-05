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
