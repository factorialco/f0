import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { formatTime24Hours } from "@/lib/date"
import { cn } from "@/lib/utils"

/** What separates the parts of a segment's tooltip. */
const DETAIL_SEPARATOR = " • "

/** One stretch of the day, ready to draw: its share, its colour, what it was. */
export type ClockInSegment = {
  value: number
  color: string
  /**
   * When this stretch ran. Present on every segment cut from a clock-in entry,
   * absent on the neutral remainder — which is the rest of the day, not a stretch
   * of it, and so has nothing to say on hover.
   */
  from?: Date
  to?: Date
  /**
   * The entry's own `label`, when it carried one — which break this was, which
   * task. Appended to the time range rather than replacing it.
   */
  label?: string
}

/**
 * How long a stretch lasted, read the way people say it: "2h 34min", "32min",
 * "2h" on the hour — hours only once there is one, and no zero minutes to read
 * past.
 *
 * The units are literals, like the 24-hour clock `formatTime24Hours` already
 * imposes on this family. Both would need to move to `labels` together the day
 * this has to speak another language.
 */
const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60

  if (!hours) return `${rest}min`
  return rest ? `${hours}h ${rest}min` : `${hours}h`
}

/**
 * A segment's hover text: WHEN it ran and HOW LONG it lasted, then whatever the
 * entry added after that.
 *
 * The range and its duration are the minimum worth saying about a stretch of the
 * day and they need nothing from the consumer, so every real segment gets a
 * tooltip — `label` only adds to it.
 */
export const segmentTooltip = (segment: ClockInSegment): string | undefined => {
  if (!segment.from || !segment.to) return undefined

  const minutes = Math.round(
    (segment.to.getTime() - segment.from.getTime()) / 60_000
  )
  const range = `${formatTime24Hours(segment.from)} – ${formatTime24Hours(segment.to)} (${formatDuration(minutes)})`

  return [range, segment.label].filter(Boolean).join(DETAIL_SEPARATOR)
}

/**
 * The day as a thin horizontal rail — `ClockInGraph`'s `horizontal-bar`
 * geometry.
 *
 * It draws the SAME segments the ring does: `ClockInGraph` normalizes the day
 * once and hands the result to whichever geometry is asked for, so the two can't
 * disagree about the fill. Each segment takes its share of the WIDTH instead of
 * the sweep, and the 2px gap between them is the ring's `paddingAngle` in the
 * units a rail has.
 *
 * It draws NO text, unlike the ring: a 6px line has no hole to put the running
 * total in, so in this geometry the numbers belong to the layout around it (see
 * `ClockInControls`' own `horizontal-bar` variant).
 *
 * Every stretch of the day is HOVERABLE and says when it ran — the only place a
 * past stretch is accounted for once you've moved on from it — plus whatever its
 * entry labelled it. Those segments are in the accessibility tree as labelled
 * images; the rail as a whole is `aria-hidden` only when nothing in it has
 * anything to say (an empty day), since the totals it encodes are already text in
 * the rows around it.
 */
export function HorizontalBar({ segments }: { segments: ClockInSegment[] }) {
  const tooltips = segments.map(segmentTooltip)

  return (
    <div
      aria-hidden={tooltips.some(Boolean) ? undefined : true}
      className="flex h-1.5 w-full flex-row items-stretch gap-0.5"
    >
      {segments.map((segment, index) => {
        const tooltip = tooltips[index]

        // The segments are a positional series with no identity of their own —
        // `normalizeData` returns shares and colours, not the entries. The bar
        // itself stays the flex item either way: `TooltipInternal` renders its
        // child directly (`asChild`), so wrapping adds no box to lay out.
        const bar = (
          <div
            key={index}
            className={cn(
              "min-w-0 rounded-full",
              // Only a segment with something to say behaves like a target: an
              // INVISIBLE hit area, because a 6px rail is nothing to aim at, and
              // a subtle grow on hover so it reads as one.
              //
              // The area grows VERTICALLY only — 8px each way, into the gap the
              // rail already has to its neighbouring rows, so it steals no hover
              // from them and turns a 6px target into a 22px one. It deliberately
              // does not reach sideways: 1px past the last segment was 1px of
              // horizontal overflow on the whole tile, which is how a rail earns
              // a stray scrollbar.
              //
              // Neither costs layout: a pseudo-element hit-tests as its host, and
              // `scaleY` doesn't touch the row's height — the tile's placeholder
              // is measured against that.
              tooltip &&
                "relative origin-center after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out motion-safe:hover:scale-y-150"
            )}
            style={{
              // `flex-basis: 0` so the share is decided by `value` alone rather
              // than by the segment's (zero) content.
              flex: `${segment.value} 1 0%`,
              backgroundColor: segment.color,
            }}
            role={tooltip ? "img" : undefined}
            aria-label={tooltip}
          />
        )

        return tooltip ? (
          // Quicker than the default: a 6px rail is a deliberate hover, and a
          // 700ms wait on a target that thin reads as nothing happening.
          <TooltipInternal key={index} label={tooltip} delay={200}>
            {bar}
          </TooltipInternal>
        ) : (
          bar
        )
      })}
    </div>
  )
}
