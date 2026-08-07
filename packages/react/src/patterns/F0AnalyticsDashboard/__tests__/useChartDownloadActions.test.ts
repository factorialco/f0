import { createElement, type ReactNode } from "react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRenderHook } from "@/testing/test-utils"

import type { DashboardChartConfig, DashboardChartData } from "../types"

import { useChartDownloadActions } from "../hooks/useChartDownloadActions"
import * as downloadHelpers from "../utils/downloadHelpers"

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

  it("passes stable keys for duplicate combo labels to Excel export", () => {
    const download = vi
      .spyOn(downloadHelpers, "downloadAsExcel")
      .mockImplementation(() => {})
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>
    const { result } = zeroRenderHook(() =>
      useChartDownloadActions({
        chartContainerRef: ref,
        chartConfig: {
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Percent",
        },
        data: {
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [10] }],
          lineSeries: [{ name: "Revenue", data: [5] }],
        },
        title: "Revenue",
      })
    )
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    )

    if (!excelAction || !("onClick" in excelAction)) {
      throw new Error("Excel action was not available")
    }
    excelAction.onClick?.()

    expect(download).toHaveBeenCalledWith(
      ["Category", "Revenue · Amount", "Revenue · Percent"],
      [{ category: "Jan", "bar-0": 10, "line-0": 5 }],
      "Revenue",
      ["category", "bar-0", "line-0"]
    )
  })

  it("passes stable keys for duplicate combo labels to CSV export", () => {
    const download = vi
      .spyOn(downloadHelpers, "downloadAsCsv")
      .mockImplementation(() => {})
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>
    const { result } = zeroRenderHook(() =>
      useChartDownloadActions({
        chartContainerRef: ref,
        chartConfig: {
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Percent",
        },
        data: {
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [10] }],
          lineSeries: [{ name: "Revenue", data: [5] }],
        },
        title: "Revenue",
      })
    )
    const csvAction = result.current.find(
      (item) => "label" in item && item.label === "Download CSV"
    )

    if (!csvAction || !("onClick" in csvAction)) {
      throw new Error("CSV action was not available")
    }
    csvAction.onClick?.()

    expect(download).toHaveBeenCalledWith(
      ["Category", "Revenue · Amount", "Revenue · Percent"],
      [{ category: "Jan", "bar-0": 10, "line-0": 5 }],
      "Revenue",
      ["category", "bar-0", "line-0"]
    )
  })

  it("uses provider translations for blank combo labels and targets", () => {
    const download = vi
      .spyOn(downloadHelpers, "downloadAsExcel")
      .mockImplementation(() => {})
    const translations = {
      ...defaultTranslations,
      dataChart: {
        ...defaultTranslations.dataChart,
        comboAxis: {
          primaryMeasure: "Medida principal",
          secondaryMeasure: "Medida secundaria",
          target: "Objetivo",
        },
      },
    }
    const wrapper = ({ children }: { children: ReactNode }) =>
      createElement(I18nProvider, { translations }, children)
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>
    const { result } = zeroRenderHook(
      () =>
        useChartDownloadActions({
          chartContainerRef: ref,
          chartConfig: {
            type: "combo",
            primaryAxisLabel: " ",
            secondaryAxisLabel: "",
          },
          data: {
            categories: ["Jan"],
            barSeries: [{ name: "Revenue", data: [{ value: 10, target: 12 }] }],
            lineSeries: [{ name: "Margin", data: [5] }],
          },
          title: "Revenue",
        }),
      { wrapper }
    )
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    )

    if (!excelAction || !("onClick" in excelAction)) {
      throw new Error("Excel action was not available")
    }
    excelAction.onClick?.()

    expect(download).toHaveBeenCalledWith(
      [
        "Category",
        "Revenue · Medida principal",
        "Revenue · Medida principal Objetivo",
        "Margin · Medida secundaria",
      ],
      [
        {
          category: "Jan",
          "bar-0": 10,
          "bar-0-target": 12,
          "line-0": 5,
        },
      ],
      "Revenue",
      ["category", "bar-0", "bar-0-target", "line-0"]
    )
  })
})
