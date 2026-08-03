import { describe, expect, it } from "vitest"

import { buildChartProps } from "../components/ChartItem/ChartItem"
import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../types"
import { defaultChartConfig } from "../utils/chartDataAdapter"

// ---------------------------------------------------------------------------
// Dashboard bar charts show value labels by default. These cover both routes
// into that default — the native pass-through and the cross-type transform —
// plus the rule that an explicitly-set `showLabels` always wins.
// ---------------------------------------------------------------------------

const barData: DashboardChartData = {
  categories: ["A", "B"],
  series: [{ name: "X", data: [1, 2] }],
}

function chartItem(chart: DashboardChartConfig): DashboardChartItem {
  return {
    id: "item",
    title: "Item",
    type: "chart",
    chart,
    fetchData: () => Promise.resolve(barData),
  }
}

/** `showLabels` as the built props expose it — `undefined` means "not set" */
function showLabelsOf(
  chart: DashboardChartConfig,
  overrideType?: DashboardChartConfig["type"]
) {
  const props = buildChartProps(chartItem(chart), barData, overrideType) as {
    showLabels?: boolean
  }
  return props.showLabels
}

describe("defaultChartConfig", () => {
  it("turns labels on for bar charts", () => {
    expect(defaultChartConfig("bar")).toMatchObject({
      type: "bar",
      showLabels: true,
    })
  })

  it("leaves other chart types' label defaults untouched", () => {
    expect(defaultChartConfig("line")).not.toHaveProperty("showLabels")
    expect(defaultChartConfig("heatmap")).not.toHaveProperty("showLabels")
  })
})

describe("buildChartProps — bar label default (native path)", () => {
  it("shows labels when the item config says nothing", () => {
    expect(showLabelsOf({ type: "bar" })).toBe(true)
  })

  it("lets an explicit false win over the default", () => {
    expect(showLabelsOf({ type: "bar", showLabels: false })).toBe(false)
  })

  it("treats an explicitly-undefined showLabels as unset, not as off", () => {
    // A caller spreading an optional value — `{ showLabels: cfg.showLabels }` —
    // hands us the key with an `undefined` value. It must not beat the default.
    expect(showLabelsOf({ type: "bar", showLabels: undefined })).toBe(true)
  })

  it("does not add labels to line charts", () => {
    expect(showLabelsOf({ type: "line" })).toBeUndefined()
  })
})

describe("buildChartProps — bar label default (transform path)", () => {
  it("shows labels when a line chart is transformed to bar", () => {
    expect(showLabelsOf({ type: "line" }, "bar")).toBe(true)
  })

  it("carries an explicit false from the source config into the bar target", () => {
    expect(showLabelsOf({ type: "line", showLabels: false }, "bar")).toBe(false)
  })

  it("ignores an explicitly-undefined showLabels on the source config", () => {
    expect(showLabelsOf({ type: "line", showLabels: undefined }, "bar")).toBe(
      true
    )
  })

  it("does not drag a source config's labels onto a non-bar target", () => {
    // Pie defaults `showLabels` to true. Transforming it to a line must use the
    // line default, not inherit the pie's.
    expect(
      showLabelsOf({ type: "pie", showLabels: true }, "line")
    ).toBeUndefined()
  })
})

// ---------------------------------------------------------------------------
// A dashboard chart can format its tooltip separately from its axis — the pair
// exists so the axis can compact ("€60K") while the tooltip stays exact
// ("€46,390.86"). Both routes into the props have to carry it.
// ---------------------------------------------------------------------------

describe("buildChartProps — tooltipValueFormatter", () => {
  const axis = (value: number) => `€${Math.round(value / 1000)}K`
  const exact = (value: number) => `€${value.toLocaleString("en-US")}`

  it("passes both formatters through on the native path", () => {
    const props = buildChartProps(
      chartItem({
        type: "bar",
        valueFormatter: axis,
        tooltipValueFormatter: exact,
      }),
      barData
    ) as {
      valueFormatter?: (value: number) => string
      tooltipValueFormatter?: (value: number) => string
    }

    expect(props.valueFormatter?.(60000)).toBe("€60K")
    expect(props.tooltipValueFormatter?.(46390.8632)).toBe("€46,390.863")
  })

  it("keeps both across a cross-type transform", () => {
    const props = buildChartProps(
      chartItem({
        type: "bar",
        valueFormatter: axis,
        tooltipValueFormatter: exact,
      }),
      barData,
      "line"
    ) as {
      valueFormatter?: (value: number) => string
      tooltipValueFormatter?: (value: number) => string
    }

    expect(props.valueFormatter?.(60000)).toBe("€60K")
    expect(props.tooltipValueFormatter?.(60000)).toBe("€60,000")
  })

  it("leaves the tooltip formatter unset when the config has none", () => {
    const props = buildChartProps(
      chartItem({ type: "bar", valueFormatter: axis }),
      barData,
      "line"
    ) as { tooltipValueFormatter?: (value: number) => string }

    // Unset means F0DataChart falls back to `valueFormatter` itself.
    expect(props.tooltipValueFormatter).toBeUndefined()
  })
})
