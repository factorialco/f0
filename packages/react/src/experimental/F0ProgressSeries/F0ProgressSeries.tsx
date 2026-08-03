import { forwardRef } from "react"

import { getColor } from "@/kits/Charts/utils/colors"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { TranslationsType } from "@/lib/providers/i18n/i18n-provider-defaults"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import {
  F0ProgressSeriesBar,
  F0ProgressSeriesColor,
  F0ProgressSeriesProps,
  F0ProgressSeriesSize,
} from "./types"

export type {
  F0ProgressSeriesBar,
  F0ProgressSeriesColor,
  F0ProgressSeriesOptions,
  F0ProgressSeriesProps,
  F0ProgressSeriesSize,
} from "./types"
export { f0ProgressSeriesColors, f0ProgressSeriesSizes } from "./types"

const DEFAULT_MAX_LABELS = 4
const DEFAULT_COLOR: F0ProgressSeriesColor = "categorical-1"
/** Opacity of the lighter "overachievement" shade drawn past the target. */
const OVERACHIEVEMENT_OPACITY = 0.5
/** Past this many bars the row switches to a tighter, squarer rhythm. */
const DENSE_FROM = 4

const HEIGHT_CLASS: Record<F0ProgressSeriesSize, string> = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
}

/** The label row scales with the bar, capped at `text-sm` (12px) — the size the
 * `progressBar` value display uses. A taller bar doesn't warrant bigger text. */
const LABEL_CLASS: Record<F0ProgressSeriesSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
}

const FILL_CLASS =
  "h-full transition-all duration-300 ease-in-out motion-reduce:transition-none"
/** Diagonal hatch so a cancelled bar reads as void, not merely empty. */
const CANCELED_STRIPES_CLASS =
  "[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.16)_3px,rgba(0,0,0,0.16)_6px)] dark:[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(255,255,255,0.2)_3px,rgba(255,255,255,0.2)_6px)]"

function formatPct(pct: number): string {
  return `${pct % 1 === 0 ? pct.toFixed(0) : pct.toFixed(1)}%`
}

const TRAILING_UNIT = /\D*$/

/**
 * `1.700 € / 3.400 €` repeats the unit; `1.700 / 3.400 €` reads better. So a
 * trailing unit shared by both sides is dropped from the first number. Prefixed
 * units (`$1,700`) are left alone — stripping those would read wrong.
 */
function formatPair(
  value: number,
  max: number,
  formatValue: (value: number) => string
): string {
  const from = formatValue(value)
  const to = formatValue(max)
  const unit = to.match(TRAILING_UNIT)?.[0] ?? ""
  const trimmed = unit && from.endsWith(unit) ? from.slice(0, -unit.length) : ""

  return `${trimmed || from} / ${to}`
}

/**
 * The coloured fill inside a bar.
 * - At/under 100%: a single segment `pct%` wide, in the base color.
 * - Over 100%: the bar is full and split at `100 / pct` (the "inverse
 *   percentage") — base color up to the target, then a lighter shade of the
 *   same color for the overachievement. E.g. 158% → ~63% solid + ~37% lighter.
 */
function BarFill({
  pct,
  color,
}: {
  pct: number
  color: F0ProgressSeriesColor
}) {
  const base = getColor(color)

  if (pct <= 100) {
    return (
      <div
        className={FILL_CLASS}
        style={{ width: `${Math.max(0, pct)}%`, backgroundColor: base }}
      />
    )
  }

  const baseWidth = (100 / pct) * 100
  return (
    <div className="flex h-full w-full">
      <div
        className={FILL_CLASS}
        style={{ width: `${baseWidth}%`, backgroundColor: base }}
      />
      <div
        className={FILL_CLASS}
        style={{
          width: `${100 - baseWidth}%`,
          backgroundColor: getColor(color, OVERACHIEVEMENT_OPACITY),
        }}
      />
    </div>
  )
}

interface ResolvedBar {
  bar: F0ProgressSeriesBar
  isEmpty: boolean
  pct: number
  caption: string
  /** Used both as the tooltip content and as the bar's accessible name, so the
   * tooltip detail is never sighted-only. */
  tooltip: string
}

function resolveBar(
  bar: F0ProgressSeriesBar,
  i18n: TranslationsType,
  formatValue: (value: number) => string
): ResolvedBar {
  const max = bar.max ?? 100
  const isEmpty =
    bar.value === undefined ||
    !Number.isFinite(bar.value) ||
    !Number.isFinite(max) ||
    max <= 0
  const pct = isEmpty ? 0 : ((bar.value as number) / max) * 100

  const detail = bar.canceled
    ? i18n.progressSeries.canceled
    : isEmpty
      ? i18n.progressSeries.noData
      : `${formatPair(bar.value as number, max, formatValue)} (${formatPct(pct)})`

  return {
    bar,
    isEmpty,
    pct,
    caption:
      bar.canceled || isEmpty
        ? (bar.caption ?? "")
        : (bar.caption ?? formatPct(pct)),
    tooltip: bar.tooltip ?? (bar.label ? `${bar.label} · ${detail}` : detail),
  }
}

function BarTrack({
  resolved,
  rounded,
  hideTooltip,
}: {
  resolved: ResolvedBar
  rounded: string
  hideTooltip?: boolean
}) {
  const { bar, isEmpty, pct, tooltip } = resolved

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          role="img"
          aria-label={tooltip}
          tabIndex={0}
          className={cn(
            "pointer-events-auto relative h-full min-w-[3px] flex-1 cursor-default overflow-hidden",
            focusRing(),
            rounded,
            bar.canceled
              ? cn("bg-f1-foreground-disabled", CANCELED_STRIPES_CLASS)
              : "bg-f1-background-secondary"
          )}
        >
          {!isEmpty && !bar.canceled && (
            <BarFill pct={pct} color={bar.color ?? DEFAULT_COLOR} />
          )}
        </div>
      </TooltipTrigger>
      {!hideTooltip && (
        <TooltipContent className="text-sm">{tooltip}</TooltipContent>
      )}
    </Tooltip>
  )
}

/** Label + caption under a bar. Hidden from screen readers: the bar's own
 * `aria-label` already announces both. */
function BarLabel({
  label,
  caption,
  textClass,
}: {
  label?: string
  caption: string
  textClass: string
}) {
  if (!label && !caption) return null

  return (
    <div className={cn("flex items-center gap-1 truncate", textClass)}>
      {label && <span className="text-f1-foreground">{label}</span>}
      {caption && (
        <span className="text-f1-foreground-secondary">{caption}</span>
      )}
    </div>
  )
}

/**
 * Which bars carry a label: all of them when `count <= maxLabels`, otherwise
 * `maxLabels` evenly-spread indices — `floor(i * count / maxLabels)` — e.g.
 * 12 bars → 0, 3, 6, 9 (Jan, Apr, Jul, Oct).
 */
function labelIndices(count: number, maxLabels: number): number[] {
  if (count <= 0 || maxLabels <= 0) return []
  if (count <= maxLabels) return Array.from({ length: count }, (_, i) => i)
  return Array.from({ length: maxLabels }, (_, i) =>
    Math.floor((i * count) / maxLabels)
  )
}

const F0ProgressSeriesBase = forwardRef<HTMLDivElement, F0ProgressSeriesProps>(
  (
    {
      bars,
      maxLabels = DEFAULT_MAX_LABELS,
      hideTooltip,
      formatValue = String,
      size = "md",
      loading,
    },
    ref
  ) => {
    const i18n = useI18n()

    if (loading) {
      return (
        <div ref={ref} className="w-full" aria-busy="true" aria-live="polite">
          <Skeleton className={cn("w-full rounded-2xs", HEIGHT_CLASS[size])} />
        </div>
      )
    }

    const dense = bars.length > DENSE_FROM
    const gapClass = dense ? "gap-0.5" : "gap-1"
    const rounded = dense ? "rounded-2xs" : "rounded-full"
    const shown = new Set(labelIndices(bars.length, maxLabels))

    const resolved = bars.map((bar) => resolveBar(bar, i18n, formatValue))
    const showLabelRow = resolved.some(
      (r, index) => shown.has(index) && (r.bar.label || r.caption)
    )

    return (
      <div ref={ref} className="flex w-full flex-col gap-1">
        <TooltipProvider>
          <div className={cn("flex w-full", HEIGHT_CLASS[size], gapClass)}>
            {resolved.map((r, index) => (
              <BarTrack
                key={`${r.bar.label}-${index}`}
                resolved={r}
                rounded={rounded}
                hideTooltip={hideTooltip}
              />
            ))}
          </div>

          {showLabelRow && (
            <div className={cn("flex w-full", gapClass)} aria-hidden="true">
              {resolved.map((r, index) => (
                <div
                  key={`${r.bar.label}-${index}`}
                  className="min-w-[3px] flex-1 overflow-hidden"
                >
                  {shown.has(index) && (
                    <BarLabel
                      label={r.bar.label}
                      caption={r.caption}
                      textClass={LABEL_CLASS[size]}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </TooltipProvider>
      </div>
    )
  }
)

F0ProgressSeriesBase.displayName = "F0ProgressSeries"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0ProgressSeries = withDataTestId(
  experimentalComponent("F0ProgressSeries", F0ProgressSeriesBase)
)
