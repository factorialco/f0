import { F0Button } from "@factorialco/f0-react"
import { Timer } from "@factorialco/f0-react/icons/app"

import { useClockInPending } from "./clockInStore"

/**
 * Clock in's own navbar control, beside the widgets "⋮" (per Oskar,
 * 2026-08-31). It had been folded into the widgets menu on 2026-08-30 and
 * is now back out: time tracking is glanceable and reached far more often
 * than the other widgets, so it earns a dedicated button rather than two
 * clicks through a list.
 *
 * Clicking toggles the widget open in the column. With its own entry
 * point it stays out of the "⋮" list, and the pending dot lives here.
 *
 * OPEN state is the glyph turning viridian, not the button held pressed
 * (per Oskar, 2026-09-02) — a pressed ghost button reads as "you are
 * hovering this", while a tinted glyph reads as "this thing is on". The
 * tint is `--selected-60`, which IS viridian in f0: core's palette has
 * `viridian.60 = 184 92% 28%` and `--selected-60` is the same triple. It
 * is applied from FULL_BLEED_CSS via `[data-open]`, because F0Button
 * gives no way to colour its icon (see the rule in Home.tsx).
 */
export function ClockInButton({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  const pending = useClockInPending()
  return (
    <div
      data-home-clockin-button
      data-icon-motion="timer"
      data-open={open || undefined}
      className="relative"
    >
      <F0Button
        variant="ghost"
        size="md"
        icon={Timer}
        hideLabel
        label={pending ? "Clock in — pending" : "Clock in"}
        onClick={onToggle}
      />
      {/* Hidden while the widget is open: the card itself is on screen and
          says the same thing, so the badge would be repeating it — the
          same handoff the "⋮" dot makes when its menu opens. */}
      {pending && !open && (
        <span className="pointer-events-none absolute right-0 top-0 size-2 shrink-0 rounded-full border border-solid border-f1-background bg-f1-special-highlight" />
      )}
    </div>
  )
}
