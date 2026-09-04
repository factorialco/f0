import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "@/kits/F0DataChart"
import type { I18nContextType } from "@/lib/providers/i18n/i18n-provider"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import type { DashboardCategoryComparison } from "../types"

import {
  categoryValues,
  withTooltipComparison,
} from "../components/ChartItem/categoryComparison"

/** The default dictionary with the one interpolating key the module reads. */
const i18n: I18nContextType = {
  ...defaultTranslations,
  t: (key, args = {}) =>
    Object.entries(args).reduce(
      (text, [name, value]) => text.replace(`{{${name}}}`, String(value)),
      key === "ai.dashboardItem.comparison.previous"
        ? defaultTranslations.ai.dashboardItem.comparison.previous
        : key
    ),
}

const comparison: DashboardCategoryComparison = {
  byCategory: {
    Sales: { direction: "up", label: "+4.2%", delta: 4 },
    Operations: { direction: "down", label: "−3.0%", sentiment: "positive" },
    People: { direction: "flat", label: "0%" },
    Quiet: { direction: "up", label: "" },
  },
  added: ["Legal"],
  removed: ["Support"],
}

const barProps: F0DataChartProps = {
  type: "bar",
  categories: ["Sales", "Operations", "People", "Legal", "Engineering"],
  series: [
    { name: "Previous period", data: [54, 63, 33, 0, 96], muted: true },
    { name: "This period", data: [58, 61, 33, 4, 96] },
  ],
}

const points = [
  { name: "Sales", value: 58 },
  { name: "Legal", value: 4 },
  { name: "Engineering", value: 96 },
]
const pieProps: F0DataChartProps = {
  type: "pie",
  series: { name: "Headcount", data: points },
}
const funnelProps: F0DataChartProps = {
  type: "funnel",
  series: { name: "Pipeline", data: points },
}

function comparisonOf(props: F0DataChartProps) {
  if (!("categoryComparison" in props)) throw new Error("not a category chart")
  return props.categoryComparison
}

describe("withTooltipComparison", () => {
  it("hands a bar chart one tooltip line per compared category, labels untouched", () => {
    const props = withTooltipComparison(barProps, comparison, i18n)

    expect(comparisonOf(props)).toEqual({
      Sales: { label: "+4.2%", tone: "positive", description: "Previous: 54" },
      Operations: { label: "−3.0%", tone: "positive" },
      People: { label: "0%", tone: "neutral" },
      Legal: { label: "New this period" },
    })
    if (props.type !== "bar") throw new Error("not a bar chart")
    expect(props.categories).toBe(barProps.categories)
    expect(props.series).toBe(barProps.series)
    expect(props.categoryFormatter).toBeUndefined()
  })

  it("states the baseline in the chart's own value format", () => {
    const props = withTooltipComparison(
      { ...barProps, valueFormatter: (value) => `${value} FTE` },
      comparison,
      i18n
    )

    expect(comparisonOf(props)?.Sales.description).toBe("Previous: 54 FTE")
  })

  it("reads pie and funnel values off their points", () => {
    for (const chart of [pieProps, funnelProps]) {
      const props = withTooltipComparison(chart, comparison, i18n)

      expect(comparisonOf(props)?.Sales).toEqual({
        label: "+4.2%",
        tone: "positive",
        description: "Previous: 54",
      })
      expect(comparisonOf(props)?.Legal).toEqual({ label: "New this period" })
      expect(comparisonOf(props)?.Engineering).toBeUndefined()
    }
  })

  it("returns the very same props when no comparison is given", () => {
    expect(withTooltipComparison(barProps, undefined, i18n)).toBe(barProps)
    expect(withTooltipComparison(pieProps, undefined, i18n)).toBe(pieProps)
  })

  it("leaves a time series alone — its baseline is a faded series", () => {
    const lineProps: F0DataChartProps = {
      type: "line",
      categories: ["Sales"],
      series: [{ name: "This period", data: [1] }],
    }

    expect(withTooltipComparison(lineProps, comparison, i18n)).toBe(lineProps)
  })
})

describe("categoryValues", () => {
  it("reads the first drawn series of a bar chart, skipping the muted baseline", () => {
    if (barProps.type !== "bar") throw new Error("not a bar chart")
    expect(categoryValues(barProps).get("Sales")).toBe(58)
    expect(
      categoryValues({
        ...barProps,
        series: [{ name: "Only", data: [{ value: 7, target: 9 }] }],
      }).get("Sales")
    ).toBe(7)
  })
})
