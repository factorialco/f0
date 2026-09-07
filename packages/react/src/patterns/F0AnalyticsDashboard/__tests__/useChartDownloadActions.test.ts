import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRenderHook } from "@/testing/test-utils"
import * as echarts from "echarts"

import type { DashboardChartConfig, DashboardChartData } from "../types"

import { useChartDownloadActions } from "../hooks/useChartDownloadActions"
import * as downloadHelpers from "../utils/downloadHelpers"

const { toastOpen } = vi.hoisted(() => ({ toastOpen: vi.fn() }))

vi.mock("echarts", () => ({ getInstanceByDom: vi.fn() }))

vi.mock("@/hooks/toast", () => ({
  toasts: { open: toastOpen },
}))

const chartConfig: DashboardChartConfig = {
  type: "bar",
}

const chartData: DashboardChartData = {
  categories: ["Q1", "Q2"],
  series: [{ name: "Revenue", data: [100, 200] }],
}

function renderHookWithData(
  data: DashboardChartData | undefined,
  ref = { current: null } as React.RefObject<HTMLDivElement | null>
) {
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
  beforeEach(() => {
    toastOpen.mockReset()
    toastOpen.mockReturnValue("chart-export")
    vi.spyOn(downloadHelpers, "downloadAsExcel").mockImplementation(() => {})
    vi.spyOn(downloadHelpers, "downloadAsCsv").mockImplementation(() => {})
    vi.spyOn(downloadHelpers, "downloadAsImage").mockImplementation(() => {})
    vi.mocked(echarts.getInstanceByDom).mockReset()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it("reports success after downloading chart data", () => {
    const { result } = renderHookWithData(chartData)
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => void }

    excelAction.onClick()

    expect(downloadHelpers.downloadAsExcel).toHaveBeenCalledTimes(1)
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "chart-export",
      variant: "success",
      title: "Download started",
    })
  })

  it("downloads chart data as CSV and reports success", () => {
    const { result } = renderHookWithData(chartData)
    const csvAction = result.current.find(
      (item) => "label" in item && item.label === "Download CSV"
    ) as { onClick: () => void }

    csvAction.onClick()

    expect(downloadHelpers.downloadAsCsv).toHaveBeenCalledWith(
      ["Category", "Revenue"],
      [
        { Category: "Q1", Revenue: 100 },
        { Category: "Q2", Revenue: 200 },
      ],
      "Test Chart",
      undefined
    )
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "chart-export",
      variant: "success",
      title: "Download started",
    })
  })

  it("reports failure when chart serialization fails", () => {
    vi.mocked(downloadHelpers.downloadAsExcel).mockImplementation(() => {
      throw new Error("Download failed")
    })
    const { result } = renderHookWithData(chartData)
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => void }

    excelAction.onClick()

    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "chart-export",
      variant: "error",
      title: "Couldn't export data",
      description: "Try again",
    })
  })

  it.each([
    ["PNG", "png", "png", undefined],
    ["JPG", "jpg", "jpeg", "#fff"],
  ] as const)(
    "downloads %s images and reports success",
    (label, extension, echartsType, backgroundColor) => {
      const inner = document.createElement("div")
      const container = document.createElement("div")
      container.appendChild(inner)
      const getDataURL = vi.fn().mockReturnValue("data:image/test")
      vi.mocked(echarts.getInstanceByDom).mockReturnValue({
        getDataURL,
      } as unknown as echarts.ECharts)
      const { result } = renderHookWithData(chartData, {
        current: container,
      })
      const imageAction = result.current.find(
        (item) => "label" in item && item.label === `Download ${label}`
      ) as { onClick: () => void }

      imageAction.onClick()

      expect(getDataURL).toHaveBeenCalledWith({
        type: echartsType,
        pixelRatio: 2,
        ...(backgroundColor ? { backgroundColor } : {}),
      })
      expect(downloadHelpers.downloadAsImage).toHaveBeenCalledWith(
        "data:image/test",
        "Test Chart",
        extension
      )
      expect(toastOpen).toHaveBeenLastCalledWith({
        id: "chart-export",
        variant: "success",
        title: "Download started",
      })
    }
  )

  it("reports failure when the chart instance is not ready", () => {
    const container = document.createElement("div")
    container.appendChild(document.createElement("div"))
    vi.mocked(echarts.getInstanceByDom).mockReturnValue(undefined)
    const { result } = renderHookWithData(chartData, { current: container })
    const pngAction = result.current.find(
      (item) => "label" in item && item.label === "Download PNG"
    ) as { onClick: () => void }

    pngAction.onClick()

    expect(downloadHelpers.downloadAsImage).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "chart-export",
      variant: "error",
      title: "Couldn't export data",
      description: "Try again",
    })
  })
})
