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

describe("chartDataToTabular — segment context", () => {
  const barConfig = { type: "bar" } as const

  const withContext: DashboardChartData = {
    categories: ["Engineering", "Sales"],
    series: [{ name: "Average salary", data: [52400, 41000] }],
    context: [{ name: "Active headcount", data: [1204, 380] }],
  }

  it("adds the count as its own column", () => {
    const { columns, rows } = chartDataToTabular(barConfig, withContext)

    expect(columns).toEqual(["Category", "Average salary", "Active headcount"])
    expect(rows).toEqual([
      {
        Category: "Engineering",
        "Average salary": 52400,
        context_0: 1204,
      },
      { Category: "Sales", "Average salary": 41000, context_0: 380 },
    ])
  })

  // The label is data — on the chat path the series name is LLM-generated, so
  // one colliding with the measure title is an ordinary outcome, not a bug.
  it("keys the count column independently of its label", () => {
    const { keys } = chartDataToTabular(barConfig, {
      ...withContext,
      series: [{ name: "Active headcount", data: [1, 2] }],
    })

    expect(keys).toEqual(["Category", "Active headcount", "context_0"])
  })

  it("names one column per series when the chart is split", () => {
    const { columns, rows } = chartDataToTabular(barConfig, {
      categories: ["Engineering"],
      series: [
        { name: "Female", data: [48900] },
        { name: "Male", data: [55100] },
      ],
      context: [
        { name: "Active headcount", data: [612] },
        { name: "Active headcount", data: [592] },
      ],
    })

    expect(columns).toEqual([
      "Category",
      "Female",
      "Male",
      "Active headcount (Female)",
      "Active headcount (Male)",
    ])
    expect(rows[0]).toMatchObject({ context_0: 612, context_1: 592 })
  })

  it("leaves the table untouched when no context is present", () => {
    const { columns, keys } = chartDataToTabular(barConfig, {
      categories: ["Engineering"],
      series: [{ name: "Average salary", data: [52400] }],
    })

    expect(columns).toEqual(["Category", "Average salary"])
    expect(keys).toBeUndefined()
  })
})

describe("chartDataToTabular — pie segment context", () => {
  const pieConfig = { type: "pie" } as const

  it("adds the count as its own column, keyed independently of its label", () => {
    const { columns, keys, rows } = chartDataToTabular(pieConfig, {
      series: {
        name: "Average salary",
        data: [
          { name: "Engineering", value: 52400 },
          { name: "Sales", value: 41000 },
        ],
      },
      context: [{ name: "Active headcount", data: [1204, 380] }],
    })

    expect(columns).toEqual(["Name", "Value", "Active headcount"])
    expect(keys).toEqual(["Name", "Value", "context_0"])
    expect(rows[0]).toMatchObject({ Name: "Engineering", context_0: 1204 })
    expect(rows[1]).toMatchObject({ Name: "Sales", context_0: 380 })
  })

  it("leaves the table untouched when no context is present", () => {
    const { columns, keys } = chartDataToTabular(pieConfig, {
      series: { name: "Average salary", data: [{ name: "Eng", value: 52400 }] },
    })

    expect(columns).toEqual(["Name", "Value"])
    expect(keys).toBeUndefined()
  })
})
