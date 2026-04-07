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
  it("raises chart rowSpan to at least 7 when missing", () => {
    const result = clampDashboardItemRowSpan(baseChart)
    expect(result.rowSpan).toBe(7)
  })

  it("raises chart rowSpan to at least 7 when too small", () => {
    const result = clampDashboardItemRowSpan({ ...baseChart, rowSpan: 1 })
    expect(result.rowSpan).toBe(7)
  })

  it("raises metric rowSpan to at least 3 when missing", () => {
    const result = clampDashboardItemRowSpan(baseMetric)
    expect(result.rowSpan).toBe(3)
  })

  it("raises metric rowSpan to at least 3 when too small", () => {
    const result = clampDashboardItemRowSpan({ ...baseMetric, rowSpan: 1 })
    expect(result.rowSpan).toBe(3)
  })

  it("raises collection rowSpan to at least 10 when missing", () => {
    const result = clampDashboardItemRowSpan(baseCollection)
    expect(result.rowSpan).toBe(10)
  })

  it("raises collection rowSpan to at least 10 when too small", () => {
    const result = clampDashboardItemRowSpan({ ...baseCollection, rowSpan: 2 })
    expect(result.rowSpan).toBe(10)
  })

  it("preserves rowSpan when agent sends a value above the minimum", () => {
    const result = clampDashboardItemRowSpan({ ...baseChart, rowSpan: 12 })
    expect(result.rowSpan).toBe(12)
  })

  it("returns the same item reference when no clamp is needed", () => {
    const item = { ...baseChart, rowSpan: 7 }
    expect(clampDashboardItemRowSpan(item)).toBe(item)
  })
})
