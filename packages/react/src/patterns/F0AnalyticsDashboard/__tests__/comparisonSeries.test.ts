import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "@/kits/F0DataChart"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../types"

import { buildChartProps } from "../components/ChartItem/chartProps"

const seriesData: DashboardChartData = {
  categories: ["Jan", "Feb"],
  series: [
    { name: "This period", data: [10, 12] },
    { name: "Previous period", data: [8, 9] },
  ],
}

function chartItem(chart: DashboardChartConfig): DashboardChartItem {
  return {
    id: "item",
    title: "Item",
    type: "chart",
    chart,
    fetchData: () => Promise.resolve(seriesData),
  }
}

function assertChartType<T extends F0DataChartProps["type"]>(
  props: F0DataChartProps,
  type: T
): asserts props is Extract<F0DataChartProps, { type: T }> {
  if (props.type !== type) {
    throw new Error(`Expected a ${type} chart, got ${props.type}`)
  }
}

describe("comparisonSeriesNames", () => {
  it("mutes and dashes the named series on a line chart", () => {
    const props = buildChartProps(
      chartItem({
        type: "line",
        comparisonSeriesNames: ["Previous period"],
      }),
      seriesData
    )
    assertChartType(props, "line")

    expect(props.series).toEqual([
      { name: "This period", data: [10, 12] },
      { name: "Previous period", data: [8, 9], muted: true, dashed: true },
    ])
  })

  it("mutes the named series on a bar chart without dashing it", () => {
    const props = buildChartProps(
      chartItem({ type: "bar", comparisonSeriesNames: ["Previous period"] }),
      seriesData
    )
    assertChartType(props, "bar")

    expect(props.series).toEqual([
      { name: "This period", data: [10, 12] },
      { name: "Previous period", data: [8, 9], muted: true },
    ])
  })

  it("keeps the names out of the chart props", () => {
    const props = buildChartProps(
      chartItem({ type: "line", comparisonSeriesNames: ["Previous period"] }),
      seriesData
    )

    expect(props).not.toHaveProperty("comparisonSeriesNames")
  })

  it("leaves series untouched when the config names none", () => {
    const props = buildChartProps(chartItem({ type: "line" }), seriesData)
    assertChartType(props, "line")

    expect(props.series).toEqual(seriesData.series)
  })

  it("ignores a name that matches no series", () => {
    const props = buildChartProps(
      chartItem({ type: "line", comparisonSeriesNames: ["Last year"] }),
      seriesData
    )
    assertChartType(props, "line")

    expect(props.series).toEqual(seriesData.series)
  })
})
