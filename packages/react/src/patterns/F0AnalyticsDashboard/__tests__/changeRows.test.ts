import { describe, expect, it } from "vitest"

import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardCategoryComparison } from "../types"

import {
  CHANGE_VIEW_ROWS,
  changeChartProps,
  changeRows,
  type ChangeViewCopy,
} from "../components/ChartItem/changeRows"

const copy: ChangeViewCopy = {
  change: "Change",
  newCategory: "New",
  goneCategory: "Gone",
  more: (count) => `+${count} more`,
}
const format = (value: number) => String(value)

const chart: F0DataChartProps = {
  type: "bar",
  categories: ["Sales", "Operations", "People", "Attrition", "Legal"],
  series: [{ name: "This period", data: [58, 61, 33, 12, 4] }],
}

const comparison: DashboardCategoryComparison = {
  byCategory: {
    Sales: { direction: "up", label: "+4", delta: 4 },
    Operations: { direction: "down", label: "−3", delta: 3 },
    People: { direction: "flat", label: "0", delta: 0 },
    Attrition: {
      direction: "down",
      label: "−9",
      delta: -9,
      sentiment: "positive",
    },
    Support: { direction: "down", label: "−5", delta: -5 },
  },
  added: ["Legal"],
  removed: ["Support"],
}

describe("changeRows", () => {
  it("pins new first at full value, ranks moves by size, pins gone last, drops flat", () => {
    const { rows, more } = changeRows(chart, comparison, format)

    expect(rows.map((row) => [row.name, row.kind, row.delta])).toEqual([
      ["Legal", "added", 4],
      ["Attrition", "changed", -9],
      ["Sales", "changed", 4],
      ["Operations", "changed", -3],
      ["Support", "removed", -5],
    ])
    expect(more).toBe(0)
  })

  it("takes the side from the direction, whatever sign the delta carries", () => {
    const { rows } = changeRows(chart, comparison, format)

    expect(rows.find((row) => row.name === "Operations")?.delta).toBe(-3)
    expect(rows.find((row) => row.name === "Attrition")?.delta).toBe(-9)
  })

  it("folds everything past the cap into a count", () => {
    const byCategory = Object.fromEntries(
      Array.from({ length: 14 }, (_, i) => [
        `C${i}`,
        { direction: "up" as const, label: `+${i}`, delta: i + 1 },
      ])
    )

    const { rows, more } = changeRows(chart, { byCategory }, format)

    expect(rows).toHaveLength(CHANGE_VIEW_ROWS)
    expect(rows[0].name).toBe("C13")
    expect(more).toBe(4)
  })

  it("orders by label when no trend carries a number", () => {
    const { rows } = changeRows(
      chart,
      {
        byCategory: {
          Sales: { direction: "up", label: "+4.2%" },
          Operations: { direction: "down", label: "−3.0%" },
          People: { direction: "up", label: "+1.8%" },
        },
      },
      format
    )

    expect(rows.map((row) => row.label)).toEqual(["+1.8%", "+4.2%", "−3.0%"])
    expect(rows.every((row) => row.delta === undefined)).toBe(true)
  })
})

describe("changeChartProps", () => {
  it("draws one diverging bar per row, coloured by sentiment, gone and folded rows barless", () => {
    const { rows } = changeRows(chart, comparison, format)
    const props = changeChartProps(rows, 3, copy, format)

    expect(props.orientation).toBe("horizontal")
    expect(props.categories).toEqual([
      "Legal (New)",
      "Attrition",
      "Sales",
      "Operations",
      "Support (Gone)",
      "+3 more",
    ])
    expect(props.series[0].data).toEqual([
      { value: 4, color: "grass" },
      // Down, but good news: the bar goes left in the positive colour.
      { value: -9, color: "grass" },
      { value: 4, color: "grass" },
      { value: -3, color: "red" },
      { value: -5, color: "red" },
      { value: 0, color: "smoke" },
    ])
    expect(props.valueFormatter?.(4)).toBe("+4")
    expect(props.valueFormatter?.(-3)).toBe("-3")
    expect(props.valueFormatter?.(0)).toBe("")
  })
})
