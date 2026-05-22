import { describe, expect, it } from "vitest"

import type {
  ChatDashboardChartItem,
  ChatDashboardConfig,
  ChatDashboardMetricItem,
} from "../types"
import {
  computeDatasetFailures,
  type ComputeResponse,
} from "../useDashboardCompute"

const metricItem = (
  id: string,
  datasetId: string
): ChatDashboardMetricItem => ({
  id,
  type: "metric",
  title: id,
  computation: { datasetId, aggregation: "count" },
})

/**
 * Mirrors the agent's persisted shape for chart items: the `datasetId`
 * lives on `chart`, not on `computation`. The f0 type system declares
 * `computation` on every variant but live data violates that — see
 * `readItemDatasetId` in useDashboardCompute.ts.
 */
const chartItemAgentShape = (
  id: string,
  datasetId: string
): ChatDashboardChartItem =>
  ({
    id,
    type: "chart",
    title: id,
    chart: { type: "bar", datasetId },
  }) as unknown as ChatDashboardChartItem

const config = (items: ChatDashboardConfig["items"]): ChatDashboardConfig => ({
  title: "Test dashboard",
  items,
  fetchSpecs: {},
})

const response = (results: ComputeResponse["results"]): ComputeResponse => ({
  results,
})

describe("computeDatasetFailures", () => {
  it("returns undefined when there are no failures", () => {
    const result = computeDatasetFailures(
      response({
        m1: { metric: { value: 42 } },
      }),
      config([metricItem("m1", "ds1")])
    )
    expect(result).toBeUndefined()
  })

  it("excludes per-item errors that lack a structured reason", () => {
    // A local SQL / handler failure (no `reason`) must NOT become a banner —
    // it stays per-item so the user still sees a card with the message.
    const result = computeDatasetFailures(
      response({
        m1: { error: "SQL syntax near 'FORM'" },
      }),
      config([metricItem("m1", "ds1")])
    )
    expect(result).toBeUndefined()
  })

  it("groups dataset-level failures by datasetId", () => {
    const result = computeDatasetFailures(
      response({
        m1: { error: "Repair failed", reason: "dataset_failed" },
        m2: { error: "Unrepairable", reason: "unrepairable" },
      }),
      config([metricItem("m1", "dsA"), metricItem("m2", "dsB")])
    )
    expect(result).toEqual({
      dsA: { reason: "dataset_failed", message: "Repair failed" },
      dsB: { reason: "unrepairable", message: "Unrepairable" },
    })
  })

  it("collapses multiple failing items targeting the same dataset", () => {
    // Two items pointing at the same dataset both fail with the same payload
    // (agent contract). The banner only needs one entry per dataset.
    const result = computeDatasetFailures(
      response({
        m1: { error: "Repair failed", reason: "dataset_failed" },
        m2: { error: "Repair failed", reason: "dataset_failed" },
      }),
      config([metricItem("m1", "dsA"), metricItem("m2", "dsA")])
    )
    expect(result).toEqual({
      dsA: { reason: "dataset_failed", message: "Repair failed" },
    })
    expect(Object.keys(result ?? {})).toHaveLength(1)
  })

  it("keeps per-item errors out of the map even when a sibling has a dataset-level failure", () => {
    // Mixed case: one dataset truly failed (banner), another item on a
    // different dataset hit a local SQL error (stays per-item, no banner).
    const result = computeDatasetFailures(
      response({
        m1: { error: "Repair failed", reason: "dataset_failed" },
        m2: { error: "SQL syntax error" },
        m3: { metric: { value: 1 } },
      }),
      config([
        metricItem("m1", "dsA"),
        metricItem("m2", "dsB"),
        metricItem("m3", "dsC"),
      ])
    )
    expect(result).toEqual({
      dsA: { reason: "dataset_failed", message: "Repair failed" },
    })
  })

  it("ignores result entries whose itemId is not in the config", () => {
    // Defensive: the server should never return results for unknown items,
    // but if it does we must not crash and must not invent a datasetId.
    const result = computeDatasetFailures(
      response({
        ghost: { error: "boom", reason: "dataset_failed" },
      }),
      config([metricItem("m1", "dsA")])
    )
    expect(result).toBeUndefined()
  })

  it("reads datasetId from chart.datasetId when computation is absent (agent shape)", () => {
    // Regression: live chart items lack `computation` — the agent persists
    // chart datasetIds under `chart.datasetId`. The previous implementation
    // crashed with "Cannot read properties of undefined (reading
    // 'datasetId')" when filtering items.
    const result = computeDatasetFailures(
      response({
        ch1: { error: "Cannot heal", reason: "unrepairable" },
      }),
      config([chartItemAgentShape("ch1", "dsChart")])
    )
    expect(result).toEqual({
      dsChart: { reason: "unrepairable", message: "Cannot heal" },
    })
  })

  it("does not crash on items missing both computation and chart.datasetId", () => {
    // Worst-case malformed item: no resolvable datasetId at all. Must not
    // throw and must not contribute to the failure map.
    const malformed = {
      id: "junk",
      type: "metric",
      title: "junk",
    } as unknown as ChatDashboardMetricItem
    const result = computeDatasetFailures(
      response({
        junk: { error: "boom", reason: "dataset_failed" },
      }),
      config([malformed])
    )
    expect(result).toBeUndefined()
  })
})
