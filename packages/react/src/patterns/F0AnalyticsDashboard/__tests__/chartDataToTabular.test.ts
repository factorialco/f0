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
      { Series: "Engineering", Label: "Ana Ruiz", salary: 62000, tenure: 4.5 },
      {
        Series: "Engineering",
        Label: "Marc Vidal",
        salary: 78000,
        tenure: 7.2,
      },
      { Series: "Sales", Label: "", salary: 41000, tenure: 1.2 },
    ])
  })

  it("names the value columns after the axes", () => {
    const { columns } = chartDataToTabular(scatterConfig, scatterData)

    expect(columns).toEqual(["Series", "Label", "salary", "tenure"])
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
})
