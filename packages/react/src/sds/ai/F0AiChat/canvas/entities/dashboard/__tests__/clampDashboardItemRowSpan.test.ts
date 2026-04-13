import { describe, expect, it } from "vitest"

import { clampDashboardItemRowSpan } from "../DashboardContent"
import type {
  ChatDashboardChartItem,
  ChatDashboardCollectionItem,
  ChatDashboardMetricItem,
} from "../types"

const baseChart: ChatDashboardChartItem = {
  id: "c1",
  type: "chart",
  title: "Chart",
  chart: { type: "bar" },
  computation: {
    datasetId: "ds1",
    xAxis: "x",
    yAxis: "y",
    aggregation: "sum",
  },
}

const baseMetric: ChatDashboardMetricItem = {
  id: "m1",
  type: "metric",
  title: "Metric",
  computation: { datasetId: "ds1", aggregation: "count" },
}

const baseCollection: ChatDashboardCollectionItem = {
  id: "col1",
  type: "collection",
  title: "Collection",
  columns: [{ id: "name", label: "Name" }],
  computation: { datasetId: "ds1" },
}

describe("clampDashboardItemRowSpan", () => {
  it("raises chart itemHeight to at least 336 when missing", () => {
    const result = clampDashboardItemRowSpan(baseChart)
    expect(result.itemHeight).toBe(336)
  })

  it("raises chart itemHeight to at least 336 when too small", () => {
    const result = clampDashboardItemRowSpan({
      ...baseChart,
      itemHeight: 100,
    })
    expect(result.itemHeight).toBe(336)
  })

  it("raises metric itemHeight to at least 144 when missing", () => {
    const result = clampDashboardItemRowSpan(baseMetric)
    expect(result.itemHeight).toBe(144)
  })

  it("raises metric itemHeight to at least 144 when too small", () => {
    const result = clampDashboardItemRowSpan({
      ...baseMetric,
      itemHeight: 50,
    })
    expect(result.itemHeight).toBe(144)
  })

  it("raises collection itemHeight to at least 480 when missing", () => {
    const result = clampDashboardItemRowSpan(baseCollection)
    expect(result.itemHeight).toBe(480)
  })

  it("raises collection itemHeight to at least 480 when too small", () => {
    const result = clampDashboardItemRowSpan({
      ...baseCollection,
      itemHeight: 200,
    })
    expect(result.itemHeight).toBe(480)
  })

  it("preserves itemHeight when agent sends a value above the minimum", () => {
    const result = clampDashboardItemRowSpan({
      ...baseChart,
      itemHeight: 528,
    })
    expect(result.itemHeight).toBe(528)
  })

  it("returns the same item reference when itemHeight is already at or above the minimum", () => {
    const item = { ...baseChart, itemHeight: 336 }
    expect(clampDashboardItemRowSpan(item)).toBe(item)
  })

  it("backwards compat: reads legacy `rowSpan * 48` when `itemHeight` is unset", () => {
    const result = clampDashboardItemRowSpan({ ...baseChart, rowSpan: 9 })
    // 9 * 48 = 432 > min 336, so the fallback rowSpan height is preserved
    // and migrated into the canonical itemHeight field.
    expect(result.itemHeight).toBe(432)
  })

  it("backwards compat: clamps legacy `rowSpan` below the per-type minimum", () => {
    const result = clampDashboardItemRowSpan({ ...baseChart, rowSpan: 2 })
    // 2 * 48 = 96 < 336, so it gets clamped to 336.
    expect(result.itemHeight).toBe(336)
  })
})
