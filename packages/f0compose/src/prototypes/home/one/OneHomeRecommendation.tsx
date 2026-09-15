import type { IconType } from "@factorialco/f0-react"

import { F0Icon } from "@factorialco/f0-react"
import { CheckCircle } from "@factorialco/f0-react/icons/app"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * A recommendation under the Home composer: an icon and a label, the
 * thing One suggests you do next (Angel, 2026-09-15).
 *
 * Three weights, so a row can lead with one and keep the rest quiet:
 * `primary` is the filled call to action, `outline` the bordered
 * alternative, `ghost` the bare one.
 *
 * ACTING ON ONE IS THE ANIMATION: the glyph turns over into a success
 * mark and the label collapses out sideways, leaving a round confirmation
 * where the pill was. With `dismissOnClick` that confirmation holds for a
 * second and then leaves to the left, and `onDismissed` lets the row
 * promote whatever is behind it. It is hand-rolled rather than an
 * `F0Button` because the button gives no way in to either half of that
 * (Angel, 2026-09-15). The chrome still quotes f0's own variants, token
 * for token.
 */
export type OneHomeRecommendationVariant = "primary" | "outline" | "ghost"

/**
 * All three weights wear the ghost chrome (Angel, 2026-09-15): what says
 * "this is the one" is the GLYPH turning radical, not a filled pill. So
 * the promotion of a secondary recommendation is a colour change on its
 * icon, which is why the difference lives in `ICON` rather than here.
 */
const CHROME =
  "bg-transparent text-f1-foreground hover:bg-f1-background-secondary"

const ICON: Record<OneHomeRecommendationVariant, string> = {
  // `accent`, not `critical`: radical IS f0's accent (--accent-50 is
  // radical.50), while critical is the coral red of error states.
  primary: "text-f1-icon-accent",
  outline: "text-f1-icon",
  ghost: "text-f1-icon",
}

/** Long enough to read as a turn rather than a blink. */
const MORPH_MS = 320
/** How long the check holds before the pill leaves. */
const HOLD_MS = 1000
/** The exit itself: out to the left, fading. */
const EXIT_MS = 260

export function OneHomeRecommendation({
  icon,
  label,
  variant = "outline",
  onClick,
  dismissOnClick = false,
  onDismissed,
}: {
  icon: IconType
  label: string
  variant?: OneHomeRecommendationVariant
  onClick?: () => void
  /** Leave once the check has been read, instead of staying confirmed. */
  dismissOnClick?: boolean
  /** Fired when the exit has finished, so the row can close the gap. */
  onDismissed?: () => void
}) {
  const [done, setDone] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [labelWidth, setLabelWidth] = useState<number>()

  // The label collapses to zero, so its open width has to be a NUMBER:
  // `auto` does not animate. Measured while it is still unconstrained,
  // and again once the webfont lands, since the first pass measures
  // fallback metrics and a pixel short clips the last letter.
  useLayoutEffect(() => {
    const el = labelRef.current
    if (!el) return
    // scrollWidth, not the rect: the rect is already clamped by the
    // max-width this sets, so a second pass would lock in the first
    // pass's value.
    const measure = () => setLabelWidth(el.scrollWidth + 1)
    measure()
    document.fonts?.ready.then(measure)
  }, [label])

  useEffect(() => {
    if (!done || !dismissOnClick) return
    const hold = window.setTimeout(() => setLeaving(true), HOLD_MS)
    const gone = window.setTimeout(() => onDismissed?.(), HOLD_MS + EXIT_MS)
    return () => {
      window.clearTimeout(hold)
      window.clearTimeout(gone)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, dismissOnClick])

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        if (done) return
        setDone(true)
        onClick?.()
      }}
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateX(-12px)" : "none",
        transition: `opacity ${EXIT_MS}ms ease-out, transform ${EXIT_MS}ms ease-out, background-color 300ms ease-out, box-shadow 300ms ease-out, color 300ms ease-out`,
      }}
      // 400px backdrop blur under every weight (Angel, 2026-09-15).
      className={`f0c-pressable inline-flex h-8 shrink-0 cursor-pointer items-center overflow-hidden whitespace-nowrap rounded border-none text-base font-medium backdrop-blur-[400px] ${done ? "px-1.5" : "pl-2.5 pr-3.5"} ${CHROME}`}
    >
      {/* Both glyphs live in the same 20px box and cross-fade, so the
          pill's left edge never shifts as they swap. */}
      <span
        className={`relative flex size-5 shrink-0 items-center justify-center transition-colors duration-300 ease-out ${ICON[variant]}`}
      >
        <span
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
          style={{
            opacity: done ? 0 : 1,
            transform: done ? "scale(0.6) rotate(-90deg)" : "none",
          }}
        >
          <F0Icon icon={icon} size="md" color="currentColor" />
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
          style={{
            opacity: done ? 1 : 0,
            transform: done ? "none" : "scale(0.6) rotate(90deg)",
          }}
        >
          <F0Icon icon={CheckCircle} size="md" color="currentColor" />
        </span>
      </span>
      <span
        ref={labelRef}
        aria-hidden={done}
        className="inline-block overflow-hidden pl-1 text-left"
        style={{
          maxWidth: done ? 0 : labelWidth,
          paddingLeft: done ? 0 : undefined,
          opacity: done ? 0 : 1,
          transition: `max-width ${MORPH_MS}ms cubic-bezier(0.22, 1, 0.36, 1), padding-left ${MORPH_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 160ms ease`,
        }}
      >
        {label}
      </span>
    </button>
  )
}
