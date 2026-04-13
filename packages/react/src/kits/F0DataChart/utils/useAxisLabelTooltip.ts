import type * as echarts from "echarts"
import { type RefObject, useEffect } from "react"

import type { ChartTheme } from "./theme"

// Shared offscreen canvas used to measure label text widths. Created lazily
// the first time `isLabelTruncated` runs so SSR doesn't trip on `document`.
let measureCtx: CanvasRenderingContext2D | null | undefined

function getMeasureContext(): CanvasRenderingContext2D | null {
  if (measureCtx !== undefined) return measureCtx
  if (typeof document === "undefined") {
    measureCtx = null
    return null
  }
  measureCtx = document.createElement("canvas").getContext("2d")
  return measureCtx
}

/**
 * `measureText` is approximate: web-font load timing, sub-pixel rounding and
 * the difference between Canvas and ECharts' own SVG/Canvas text shapers can
 * easily disagree by a few pixels. Without this margin we miss tooltips on
 * labels that ECharts truncated to e.g. "Janua…" but that we measured as
 * fitting by 2px.
 */
const TRUNCATION_SAFETY_PX = 4

/**
 * Returns true when `text` would be wider than `maxWidth` if rendered with the
 * given font. Used to skip the axis-label tooltip when the label is fully
 * visible on screen — there's nothing to reveal in that case.
 *
 * Measurement is done against two fonts (the chart theme font + a generic
 * `sans-serif` fallback) and the larger result wins. This protects us when
 * the configured font (e.g. Inter) hasn't finished loading and the canvas
 * silently falls back to the system font.
 */
function isLabelTruncated(
  text: string,
  maxWidth: number,
  font: string,
  fallbackFont: string
): boolean {
  const ctx = getMeasureContext()
  if (!ctx) return false
  ctx.font = font
  const primary = ctx.measureText(text).width
  ctx.font = fallbackFont
  const fallback = ctx.measureText(text).width
  const measured = Math.max(primary, fallback)
  return measured > maxWidth - TRUNCATION_SAFETY_PX
}

/**
 * Shows a styled tooltip overlay when hovering over truncated axis labels.
 *
 * ECharts axis labels rendered on canvas don't support native HTML tooltips,
 * so this hook listens for axis label mouse events (requires `triggerEvent: true`
 * on the axis) and positions a floating `<div>` with the full label text.
 *
 * The tooltip only opens when the label is **actually truncated** — labels
 * that fit within their max width get no tooltip, since there's nothing more
 * to show.
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

    const labelFont = `${theme.textStyle.fontWeight} ${theme.textStyle.fontSize}px ${theme.textStyle.fontFamily}`
    const labelFontFallback = `${theme.textStyle.fontWeight} ${theme.textStyle.fontSize}px sans-serif`

    let overlay: HTMLDivElement | null = null

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
      container!.style.position = "relative"
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
        params.componentType !== "xAxis" &&
        params.componentType !== "yAxis"
      ) {
        return
      }

      // Mark the container as "axis label hovered" so the wrapper's Tailwind
      // arbitrary variant (`data-[axis-hover=true]:[&_canvas]:!cursor-default`)
      // overrides zrender's `cursor: pointer` for the duration of the hover.
      // This fires for *every* axis label, even ones that won't show a tooltip,
      // so the cursor is always the default arrow over any axis label.
      container!.dataset.axisHover = "true"

      // Look up this axis's `axisLabel.width` in the live chart options. If
      // there's no width set, no truncation is possible → skip the tooltip.
      const option = chart!.getOption() as {
        xAxis?: unknown
        yAxis?: unknown
      }
      const axes =
        params.componentType === "xAxis" ? option.xAxis : option.yAxis
      const axisIndex = (params.componentIndex as number | undefined) ?? 0
      const axis = (Array.isArray(axes) ? axes[axisIndex] : axes) as
        | {
            axisLabel?: {
              width?: number
              formatter?: (value: string | number, index?: number) => string
            }
          }
        | undefined
      const maxWidth = axis?.axisLabel?.width
      if (typeof maxWidth !== "number") return

      // Apply the axis formatter (if any) so we measure the text the user
      // actually sees, not the raw category value.
      const rawValue = String(params.value)
      const formatter = axis?.axisLabel?.formatter
      const displayed =
        typeof formatter === "function" ? formatter(rawValue) : rawValue

      if (!isLabelTruncated(displayed, maxWidth, labelFont, labelFontFallback))
        return

      showTooltip({
        value: displayed,
        event: (params as { event: { offsetX: number; offsetY: number } })
          .event,
      })
    }

    function onMouseOut(params: Record<string, unknown>) {
      if (
        params.componentType === "xAxis" ||
        params.componentType === "yAxis"
      ) {
        container!.dataset.axisHover = "false"
        hideTooltip()
      }
    }

    if (typeof chart.on !== "function") return

    chart.on("mouseover", onMouseOver)
    chart.on("mouseout", onMouseOut)

    return () => {
      chart.off("mouseover", onMouseOver)
      chart.off("mouseout", onMouseOut)
      // Reset the cursor scope in case we tear down mid-hover.
      container.dataset.axisHover = "false"
      if (overlay && container.contains(overlay)) {
        container.removeChild(overlay)
      }
    }
  }, [chartRef, containerRef, theme])
}
