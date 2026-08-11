import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"

/** One stretch of the day, ready to draw: its share, its colour, what it was. */
export type ClockInSegment = {
  value: number
  color: string
  /**
   * The entry's own `label`, when it carried one — which break this was, which
   * task. Carried through `normalizeData` so a geometry can surface it.
   */
  label?: string
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
 * A segment that carries a `label` becomes hoverable and says what it was — the
 * only place a PAST stretch of the day is named ("Lunch break", once you're back
 * at work). Those segments are in the accessibility tree as labelled images, and
 * the rail as a whole is `aria-hidden` only while none of them is: with no labels
 * every number it encodes is already text in the rows around it, so announcing it
 * would just repeat them.
 */
export function HorizontalBar({ segments }: { segments: ClockInSegment[] }) {
  const hasLabels = segments.some((segment) => !!segment.label)

  return (
    <div
      aria-hidden={hasLabels ? undefined : true}
      className="flex h-1.5 w-full flex-row items-stretch gap-0.5"
    >
      {segments.map((segment, index) => {
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
              // INVISIBLE hit area, because a 6px rail is nothing to aim at
              // (`::after` reaches 8px above and below — the gap the rail already
              // has to its neighbouring rows, so it steals no hover from them —
              // and 1px into each side gap, which is what makes a thin overtime
              // tail hittable), and a subtle grow on hover so it reads as one.
              // Both are free of layout: a pseudo-element hit-tests as its host,
              // and `scaleY` doesn't touch the row's height — the tile's
              // placeholder is measured against that.
              segment.label &&
                "relative origin-center after:absolute after:-inset-x-px after:-inset-y-2 after:content-[''] motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out motion-safe:hover:scale-y-150"
            )}
            style={{
              // `flex-basis: 0` so the share is decided by `value` alone rather
              // than by the segment's (zero) content.
              flex: `${segment.value} 1 0%`,
              backgroundColor: segment.color,
            }}
            role={segment.label ? "img" : undefined}
            aria-label={segment.label}
          />
        )

        return segment.label ? (
          // Quicker than the default: a 6px rail is a deliberate hover, and a
          // 700ms wait on a target that thin reads as nothing happening.
          <TooltipInternal key={index} label={segment.label} delay={200}>
            {bar}
          </TooltipInternal>
        ) : (
          bar
        )
      })}
    </div>
  )
}
