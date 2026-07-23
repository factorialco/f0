import type { ChartColorToken } from "@/kits/F0DataChart"

/**
 * Chart color helpers, formerly at `kits/Charts/utils/colors`.
 *
 * They resolve the `--chart-*` CSS custom properties from the F0 theme and
 * are used by non-chart components (segmented bars, progress bars, value
 * displays) as well as the deprecated Charts kit. Living here they survive
 * the Charts kit removal.
 */

export const getCategoricalColor = (index: number, opacity?: number) => {
  const categoricalColors = [
    "categorical-1",
    "categorical-2",
    "categorical-3",
    "categorical-4",
    "categorical-5",
    "categorical-6",
    "categorical-7",
    "categorical-8",
  ]
  return getColor(categoricalColors[index % categoricalColors.length], opacity)
}

export const getColor = (color: string, opacity?: number) => {
  const opacityString = opacity !== undefined ? ` / ${opacity}` : ""
  const chartColorName = `chart-${color}`

  return `hsl(var(--${chartColorName})${opacityString})`
}

/**
 * Legacy Charts categorical palette (`--chart-categorical-N`) mapped to the
 * closest F0 chart color token. Used by migration adapters so explicit
 * `color: "categorical-N"` configs keep roughly the same hue when a legacy
 * Charts consumer is re-rendered with F0DataChart.
 */
const categoricalToToken: Record<string, ChartColorToken> = {
  "categorical-1": "viridian",
  "categorical-2": "malibu",
  "categorical-3": "grass",
  "categorical-4": "barbie",
  "categorical-5": "orange",
  "categorical-6": "indigo",
  "categorical-7": "army",
  "categorical-8": "camel",
}

/**
 * Map a legacy Charts color string to an F0 chart color token, or
 * `undefined` when there is no meaningful equivalent (raw CSS strings,
 * unknown names) — callers fall back to the kit palette.
 */
export const legacyChartColorToToken = (
  color?: string
): ChartColorToken | undefined =>
  color ? categoricalToToken[color] : undefined
