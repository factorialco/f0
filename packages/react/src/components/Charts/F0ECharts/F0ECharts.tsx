import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { useEffect, useMemo, useRef } from "react"
import "./themes/f0.light"
echarts.use(AriaComponent)

export const F0ECharts = ({ options }: { options: echarts.EChartsOption }) => {
  const optionsDefaults = {
    aria: {
      role: "img",
      labelledby: "chart-title",
    },
  }

  const ref = useRef<HTMLDivElement>(null)

  const chart = useRef<echarts.ECharts | null>(null)
  useEffect(() => {
    if (ref.current) {
      chart.current = echarts.init(ref.current)
    }
  }, [ref])

  const optionsWithDefaults = useMemo(
    () => Object.assign({}, optionsDefaults, options),
    [options]
  )

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

  return (
    <div
      ref={ref}
      className="h-full w-full"
      style={{ border: "1px solid red" }}
    />
  )
}
