import type { RefObject } from "react"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import { useCallback, useMemo } from "react"
import * as echarts from "echarts"

import { Download, Image } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { DashboardChartConfig, DashboardChartData } from "../types"

import { chartDataToTabular } from "../utils/chartDataToTabular"
import {
  downloadAsCsv,
  downloadAsExcel,
  downloadAsImage,
} from "../utils/downloadHelpers"

function getEChartsInstance(
  containerRef: RefObject<HTMLDivElement | null>
): echarts.ECharts | null {
  const el = containerRef.current?.querySelector<HTMLDivElement>(":scope > div")
  return el ? (echarts.getInstanceByDom(el) ?? null) : null
}

interface UseChartDownloadActionsOptions {
  chartContainerRef: RefObject<HTMLDivElement | null>
  chartConfig: DashboardChartConfig
  data: DashboardChartData | undefined
  title: string
}

export function useChartDownloadActions({
  chartContainerRef,
  chartConfig,
  data,
  title,
}: UseChartDownloadActionsOptions): DropdownItem[] {
  const { t } = useI18n()

  const handleImage = useCallback(
    (type: "png" | "jpg") => {
      const instance = getEChartsInstance(chartContainerRef)
      if (!instance) return
      const echartsType = type === "jpg" ? "jpeg" : "png"
      const dataUrl = instance.getDataURL({
        type: echartsType,
        pixelRatio: 2,
        ...(type === "jpg" ? { backgroundColor: "#fff" } : {}),
      })
      downloadAsImage(dataUrl, title, type)
    },
    [chartContainerRef, title]
  )

  const handleExcel = useCallback(() => {
    if (!data) return
    const tabular = chartDataToTabular(chartConfig, data)
    downloadAsExcel(tabular.columns, tabular.rows, title)
  }, [chartConfig, data, title])

  const handleCsv = useCallback(() => {
    if (!data) return
    const tabular = chartDataToTabular(chartConfig, data)
    downloadAsCsv(tabular.columns, tabular.rows, title)
  }, [chartConfig, data, title])

  return useMemo(() => {
    if (!data) return []
    return [
      {
        label: t("actions.downloadAsPng"),
        icon: Image,
        onClick: () => handleImage("png"),
      },
      {
        label: t("actions.downloadAsJpg"),
        icon: Image,
        onClick: () => handleImage("jpg"),
      },
      {
        label: t("actions.downloadAsExcel"),
        icon: Download,
        onClick: handleExcel,
      },
      {
        label: t("actions.downloadAsCsv"),
        icon: Download,
        onClick: handleCsv,
      },
    ]
  }, [data, t, handleImage, handleExcel, handleCsv])
}
