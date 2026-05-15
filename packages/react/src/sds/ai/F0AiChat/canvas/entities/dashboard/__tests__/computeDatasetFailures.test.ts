import { describe, expect, it } from "vitest"

import type { ChatDashboardConfig, ChatDashboardMetricItem } from "../types"
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
})
