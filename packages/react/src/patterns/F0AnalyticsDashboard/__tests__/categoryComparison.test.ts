import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardCategoryComparison } from "../types"

import { markCategoryComparison } from "../components/ChartItem/categoryComparison"

const comparison: DashboardCategoryComparison = {
  byCategory: {
    Sales: { direction: "up", label: "+4.2%" },
    Operations: { direction: "down", label: "−3.0%" },
    People: { direction: "flat", label: "0%" },
  },
  added: ["Legal"],
  removed: ["Support"],
}

const barProps: F0DataChartProps = {
  type: "bar",
  categories: ["Sales", "Operations", "People", "Legal", "Engineering"],
  series: [{ name: "This period", data: [58, 61, 33, 4, 96] }],
}

const pieProps: F0DataChartProps = {
  type: "pie",
  series: {
    name: "Headcount",
    data: [
      { name: "Sales", value: 58 },
      { name: "Legal", value: 4 },
      { name: "Engineering", value: 96 },
    ],
  },
}

/** The label a bar chart draws for `category`, formatter and all. */
function barLabel(props: F0DataChartProps, category: string): string {
  if (props.type !== "bar") throw new Error("not a bar chart")
  return props.categoryFormatter?.(category) ?? category
}

describe("markCategoryComparison", () => {
  it("appends the direction and label to a compared bar category", () => {
    const props = markCategoryComparison(barProps, comparison, "New")

    expect(barLabel(props, "Sales")).toBe("Sales ▲ +4.2%")
    expect(barLabel(props, "Operations")).toBe("Operations ▼ −3.0%")
    expect(barLabel(props, "People")).toBe("People = 0%")
  })

  it("marks an added category as new and leaves an uncompared one plain", () => {
    const props = markCategoryComparison(barProps, comparison, "New")

    expect(barLabel(props, "Legal")).toBe("Legal (New)")
    expect(barLabel(props, "Engineering")).toBe("Engineering")
  })

  it("marks on top of the host's own category formatter", () => {
    const props = markCategoryComparison(
      { ...barProps, categoryFormatter: (value) => value.toUpperCase() },
      comparison,
      "New"
    )

    expect(barLabel(props, "Sales")).toBe("SALES ▲ +4.2%")
  })

  it("marks a pie chart through its point names", () => {
    const props = markCategoryComparison(pieProps, comparison, "New")

    if (props.type !== "pie") throw new Error("not a pie chart")
    expect(props.series.data.map((point) => point.name)).toEqual([
      "Sales ▲ +4.2%",
      "Legal (New)",
      "Engineering",
    ])
    expect(props.series.data.map((point) => point.value)).toEqual([58, 4, 96])
  })

  it("returns the very same props when no comparison is given", () => {
    expect(markCategoryComparison(barProps, undefined, "New")).toBe(barProps)
    expect(markCategoryComparison(pieProps, undefined, "New")).toBe(pieProps)
  })

  it("leaves a time series alone — its baseline is a faded series", () => {
    const lineProps: F0DataChartProps = {
      type: "line",
      categories: ["Sales"],
      series: [{ name: "This period", data: [1] }],
    }

    expect(markCategoryComparison(lineProps, comparison, "New")).toBe(lineProps)
  })
})
