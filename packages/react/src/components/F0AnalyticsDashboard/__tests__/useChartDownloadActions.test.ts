import { describe, expect, it } from "vitest"
import { zeroRenderHook } from "@/testing/test-utils"

import type { DashboardChartConfig, DashboardChartData } from "../types"

import { useChartDownloadActions } from "../hooks/useChartDownloadActions"

const chartConfig: DashboardChartConfig = {
  type: "bar",
}

const chartData: DashboardChartData = {
  categories: ["Q1", "Q2"],
  series: [{ name: "Revenue", data: [100, 200] }],
}

function renderHookWithData(data: DashboardChartData | undefined) {
  const ref = { current: null } as React.RefObject<HTMLDivElement | null>
  return zeroRenderHook(() =>
    useChartDownloadActions({
      chartContainerRef: ref,
      chartConfig,
      data,
      title: "Test Chart",
    })
  )
}

describe("useChartDownloadActions", () => {
  it("returns empty array when data is undefined", () => {
    const { result } = renderHookWithData(undefined)
    expect(result.current).toEqual([])
  })

  it("returns download actions when data is provided", () => {
    const { result } = renderHookWithData(chartData)
    expect(result.current.length).toBeGreaterThan(0)
  })

  it("includes image and data format options", () => {
    const { result } = renderHookWithData(chartData)
    const labels = result.current
      .filter((item) => "label" in item)
      .map((item) => item.label)

    expect(labels).toContain("Download PNG")
    expect(labels).toContain("Download JPG")
    expect(labels).toContain("Download Excel")
    expect(labels).toContain("Download CSV")
  })

  it("includes a separator between image and data actions", () => {
    const { result } = renderHookWithData(chartData)
    const separators = result.current.filter(
      (item) => "type" in item && item.type === "separator"
    )

    expect(separators).toHaveLength(1)
  })
})
