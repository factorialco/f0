import type * as echarts from "echarts"
import { type RefObject, useEffect } from "react"

import type { ChartTheme } from "./theme"

/**
 * Shows a styled tooltip overlay when hovering over truncated axis labels.
 *
 * ECharts axis labels rendered on canvas don't support native HTML tooltips,
 * so this hook listens for axis label mouse events (requires `triggerEvent: true`
 * on the axis) and positions a floating `<div>` with the full label text.
 */
export function useAxisLabelTooltip(
  chartRef: RefObject<echarts.ECharts | null>,
  containerRef: RefObject<HTMLDivElement | null>,
  theme: ChartTheme
) {
  useEffect(() => {
    const chart = chartRef.current
    const container = containerRef.current
    if (!chart || !container) return

    let overlay: HTMLDivElement | null = null
    // Save the prior inline position so we can restore it on cleanup
    const prevContainerPosition = container.style.position

    function getOverlay(): HTMLDivElement {
      if (overlay) return overlay
      overlay = document.createElement("div")
      overlay.style.cssText = [
        "position: absolute",
        "pointer-events: none",
        "z-index: 9999",
        "opacity: 0",
        "transition: opacity 0.15s",
        `padding: ${theme.tooltip.padding.map((p) => `${p}px`).join(" ")}`,
        `border-radius: ${theme.tooltip.borderRadius}px`,
        `border: 1px solid ${theme.colors.borderSecondary}`,
        `box-shadow: ${theme.tooltip.boxShadow}`,
        `background: ${theme.tooltip.background}`,
        "backdrop-filter: blur(30px)",
        "-webkit-backdrop-filter: blur(30px)",
        `color: ${theme.colors.foreground}`,
        `font-family: ${theme.textStyle.fontFamily}`,
        `font-size: ${theme.textStyle.fontSize}px`,
        `font-weight: ${theme.textStyle.fontWeight}`,
        "white-space: nowrap",
        "max-width: 300px",
        "overflow: hidden",
        "text-overflow: ellipsis",
      ].join("; ")
      // Only set positioning context if the container doesn't already have one
      if (!container!.style.position) {
        container!.style.position = "relative"
      }
      container!.appendChild(overlay)
      return overlay
    }

    function showTooltip(event: {
      value: string
      event: { offsetX: number; offsetY: number }
    }) {
      const el = getOverlay()
      el.textContent = String(event.value)
      el.style.left = `${event.event.offsetX + 8}px`
      el.style.top = `${event.event.offsetY - 8}px`
      el.style.opacity = "1"
    }

    function hideTooltip() {
      if (overlay) {
        overlay.style.opacity = "0"
      }
    }

    function onMouseOver(params: Record<string, unknown>) {
      if (
        params.componentType === "xAxis" ||
        params.componentType === "yAxis"
      ) {
        showTooltip(
          params as unknown as {
            value: string
            event: { offsetX: number; offsetY: number }
          }
        )
      }
    }

    function onMouseOut(params: Record<string, unknown>) {
      if (
        params.componentType === "xAxis" ||
        params.componentType === "yAxis"
      ) {
        hideTooltip()
      }
    }

    if (typeof chart.on !== "function") return

    chart.on("mouseover", onMouseOver)
    chart.on("mouseout", onMouseOut)

    return () => {
      chart.off("mouseover", onMouseOver)
      chart.off("mouseout", onMouseOut)
      if (overlay && container.contains(overlay)) {
        container.removeChild(overlay)
      }
      // Restore the container's original position value
      container.style.position = prevContainerPosition
    }
  }, [chartRef, containerRef, theme])
}
