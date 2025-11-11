import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { useEffect, useMemo, useRef } from "react"
import "./themes/f0.light"

// @ts-expect-error - Duplicate echarts types in dependency tree
echarts.use(AriaComponent)

interface F0ChartProps {
  showLegend?: boolean
  options?: Partial<Omit<echarts.EChartsOption, "grid" | "emphasis">>
}

export const F0Chart = ({
  showLegend = true,
  options: customOptions = {},
}: F0ChartProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const chart = useRef<echarts.ECharts | null>(null)
  useEffect(() => {
    if (ref.current) {
      chart.current = echarts.init(ref.current)
    }
  }, [ref])

  const optionsWithDefaults = useMemo(() => {
    const baseOptions: echarts.EChartsOption = {
      legend: showLegend
        ? {
            show: true,
            bottom: "5%",
            left: "center",
          }
        : undefined,
      grid: {
        bottom: showLegend ? 70 : 10,
      },
      emphasis: {
        label: {
          show: false,
        },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
        },
      },
      tooltip: {
        trigger:
          Array.isArray(customOptions.series) &&
          (customOptions.series[0]?.type === "pie" ||
            customOptions.series[0]?.type === "radar")
            ? "item"
            : "axis",
      },
    }

    return Object.assign({}, baseOptions, customOptions)
  }, [showLegend, customOptions])

  useEffect(() => {
    chart.current?.setOption(optionsWithDefaults)
  }, [optionsWithDefaults, chart])

  // Set theme
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  function updateDarkMode() {
    const isDarkMode = darkModeMediaQuery.matches
    console.log("isDarkMode", isDarkMode)
    chart.current?.setTheme("f0.light")
    //isDarkMode ? "f0.dark" : "f0.light")
  }

  darkModeMediaQuery.addEventListener("change", () => {
    updateDarkMode()
  })
  updateDarkMode()

  return <div ref={ref} className="h-full w-full" />
}
