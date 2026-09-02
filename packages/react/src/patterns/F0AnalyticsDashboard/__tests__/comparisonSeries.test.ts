import { describe, expect, it } from "vitest"

import type {
  F0DataChartBarProps,
  F0DataChartLineProps,
} from "@/kits/F0DataChart"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../types"

import { buildChartProps } from "../components/ChartItem/ChartItem"

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

describe("comparisonSeriesNames", () => {
  it("mutes and dashes the named series on a line chart", () => {
    const props = buildChartProps(
      chartItem({
        type: "line",
        comparisonSeriesNames: ["Previous period"],
      }),
      seriesData
    ) as F0DataChartLineProps

    expect(props.series).toEqual([
      { name: "This period", data: [10, 12] },
      { name: "Previous period", data: [8, 9], muted: true, dashed: true },
    ])
  })

  it("mutes the named series on a bar chart without dashing it", () => {
    const props = buildChartProps(
      chartItem({ type: "bar", comparisonSeriesNames: ["Previous period"] }),
      seriesData
    ) as F0DataChartBarProps

    expect(props.series).toEqual([
      { name: "This period", data: [10, 12] },
      { name: "Previous period", data: [8, 9], muted: true },
    ])
  })

  it("leaves series untouched when the config names none", () => {
    const props = buildChartProps(
      chartItem({ type: "line" }),
      seriesData
    ) as F0DataChartLineProps

    expect(props.series).toEqual(seriesData.series)
  })

  it("ignores a name that matches no series", () => {
    const props = buildChartProps(
      chartItem({ type: "line", comparisonSeriesNames: ["Last year"] }),
      seriesData
    ) as F0DataChartLineProps

    expect(props.series).toEqual(seriesData.series)
  })
})
