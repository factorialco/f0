import { F0Button, F0Icon, F0TagStatus } from "@factorialco/f0-react"
import { Check } from "@factorialco/f0-react/icons/app"

import type { Insight } from "./insights"

/**
 * One of One's insight cards (Figma 2760:589016 / 589110 / 589165 — one
 * node per tone, identical apart from the tag and the copy).
 *
 * Anatomy: the TITLE then the tag on the top row (Oskar inverted the
 * frame's order, which put the tag first — this way it matches the run
 * cards, where the title leads and the tag qualifies it),
 * a full-width hairline in an 8px box, the detail, then the actions. The
 * card's own `py-1` plus each row's `p-2` is why the rows look inset —
 * that is the frame's structure, not padding added on top of it.
 *
 * The buttons are the SAME pair the run log uses, which is not a
 * coincidence worth hiding: the frame's primary is `px-[12px] py-[6px]`
 * at 14/20 on a 10px radius, i.e. exactly f0's `md`, and its secondary
 * carries `background/inverse/secondary` with an inset ring, i.e. exactly
 * f0's `outline`. So the black-then-outline, left-aligned order Oskar
 * asked for is what both surfaces now render.
 *
 * The primary is hand-rolled for the reason recorded in `RunAction`: f0
 * has no dark-solid variant and `F0Button` takes no `className`. It uses
 * `bg-f1-foreground` / `text-f1-background` rather than the frame's
 * `background/inverse/*` pair, which is a deliberate one-token deviation
 * — the inverse pair does not flip together (`--white-100` is white in
 * BOTH themes while `--neutral-*` flips), so it lands white-on-white in
 * dark. In light the two are a shade apart and indistinguishable.
 *
 * NOT reproduced: the frame's "Select all / Clear" bar. These cards were
 * built out of f0's "View drawer", so they inherit its bottom bar
 * absolutely positioned at `top-487px` — a leftover of the component they
 * came from, clipped by the card's own overflow anyway.
 */

const TONE_VARIANT: Record<
  Insight["tone"],
  "critical" | "warning" | "neutral"
> = {
  critical: "critical",
  warning: "warning",
  neutral: "neutral",
}

export function InsightCard({
  insight,
  onAct,
  acted,
  index = 0,
}: {
  insight: Insight
  onAct: (insight: Insight, actionIndex: number) => void
  /** The label you already picked — the actions give way to it. */
  acted?: string
  /** Position in the reading — drives the staggered entrance. */
  index?: number
}) {
  const [primary, secondary] = insight.actions
  // COLLAPSED once acted (per Oskar's tree: "la tarjeta colapsa"): the
  // detail and the buttons go and the row keeps only what it is and what
  // you chose. One's answer is in the thread below, so repeating the
  // detail here would say it twice.
  if (acted) {
    return (
      <div className="f0c-card-in flex w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5">
        <span className="min-w-0 text-base font-medium text-f1-foreground-secondary">
          {insight.title}
        </span>
        <F0Icon icon={Check} size="sm" color="positive" />
        <span className="min-w-0 truncate text-base text-f1-foreground-secondary">
          {acted}
        </span>
      </div>
    )
  }
  return (
    /* They arrive one after another rather than all at once — the same
       4px/200ms entrance the Needs-you rows use, on a 60ms stagger. The
       cards cannot stream (see `deliverInsightReading`), so this is what
       stops three of them landing in a single frame. */
    <div
      className="f0c-card-in flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background py-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex w-full flex-wrap items-center gap-x-2 gap-y-1 px-2 py-1.5">
        <span className="min-w-0 text-base font-medium text-f1-foreground">
          {insight.title}
        </span>
        <F0TagStatus
          text={insight.status}
          variant={TONE_VARIANT[insight.tone]}
        />
      </div>
      <div className="flex h-2 w-full items-center">
        <span className="h-px w-full bg-f1-border-secondary" />
      </div>
      <div className="w-full px-1">
        <p className="m-0 p-2 text-base text-f1-foreground-secondary">
          {insight.detail}
        </p>
      </div>
      <div className="w-full px-1">
        {/* Left-aligned, black first (per Oskar). The frame's own row is
            full width with no justify, so the pair sits against the left
            edge rather than being pushed to the far side. */}
        <div className="flex flex-wrap items-center gap-2 p-2">
          <button
            type="button"
            onClick={() => onAct(insight, 0)}
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center rounded border-none bg-f1-foreground px-3 text-base font-medium text-f1-background shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] transition-opacity duration-150 hover:opacity-90 active:translate-y-px"
          >
            {primary.label}
          </button>
          <F0Button
            variant="outline"
            size="md"
            label={secondary.label}
            onClick={() => onAct(insight, 1)}
          />
        </div>
      </div>
    </div>
  )
}
