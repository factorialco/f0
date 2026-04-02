import type * as echarts from "echarts"
import { type RefObject, useEffect, useRef } from "react"

/**
 * Implements Plotly-style legend interaction:
 *
 * - Click a legend item when all are visible → isolate it (hide all others)
 * - Click a hidden item → add it back (show it)
 * - Click the only visible item → show all again
 *
 * Requires `selectedMode: true` on the legend (set by `buildLegend`).
 * Does not need an explicit legend data list — it reads the full selected
 * state from ECharts' `legendselectchanged` event.
 */
export function useLegendInteraction(
  chartRef: RefObject<echarts.ECharts | null>
) {
  // Track the previous selected state so we know what changed
  const prevSelectedRef = useRef<Record<string, boolean> | null>(null)

  useEffect(() => {
    const chart = chartRef.current
    if (!chart || typeof chart.on !== "function") return

    function onLegendSelectChanged(params: {
      name: string
      selected: Record<string, boolean>
    }) {
      const clickedName = params.name as string
      // `selected` contains the state AFTER ECharts' default toggle
      const echartsSelected = params.selected as Record<string, boolean>
      const allNames = Object.keys(echartsSelected)

      // If we have no previous state, initialize it (all were visible)
      const prev =
        prevSelectedRef.current ??
        Object.fromEntries(allNames.map((n) => [n, true]))

      const prevVisibleCount = Object.values(prev).filter(Boolean).length
      const allWereVisible = prevVisibleCount === allNames.length
      const wasVisible = prev[clickedName]

      if (allWereVisible && wasVisible) {
        // Isolate: show only the clicked one
        const next: Record<string, boolean> = {}
        for (const name of allNames) {
          next[name] = name === clickedName
        }
        prevSelectedRef.current = next
        chart!.dispatchAction({ type: "legendSelect", name: clickedName })
        for (const name of allNames) {
          if (name !== clickedName) {
            chart!.dispatchAction({ type: "legendUnSelect", name })
          }
        }
        return
      }

      if (wasVisible && prevVisibleCount === 1) {
        // Last visible was clicked → show all
        const next: Record<string, boolean> = {}
        for (const name of allNames) {
          next[name] = true
          chart!.dispatchAction({ type: "legendSelect", name })
        }
        prevSelectedRef.current = next
        return
      }

      // Default: accept ECharts' toggle
      prevSelectedRef.current = { ...echartsSelected }
    }

    chart.on(
      "legendselectchanged",
      onLegendSelectChanged as (...args: unknown[]) => void
    )

    return () => {
      chart.off(
        "legendselectchanged",
        onLegendSelectChanged as (...args: unknown[]) => void
      )
    }
  }, [chartRef])
}
