import type { IconType } from "@factorialco/f0-react"

import { F0Icon } from "@factorialco/f0-react"
import { CheckCircle } from "@factorialco/f0-react/icons/app"
import { useLayoutEffect, useRef, useState } from "react"

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
 * where the pill was. It is hand-rolled rather than an `F0Button` because
 * the button gives no way in to either half of that (Angel, 2026-09-15).
 * The chrome still quotes f0's own variants, token for token.
 */
export type OneHomeRecommendationVariant = "primary" | "outline" | "ghost"

const CHROME: Record<OneHomeRecommendationVariant, string> = {
  primary:
    "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)]",
  outline:
    "bg-f1-background text-f1-foreground ring-1 ring-inset ring-f1-border hover:bg-f1-background-tertiary hover:ring-f1-border-hover",
  ghost: "bg-transparent text-f1-foreground hover:bg-f1-background-secondary",
}

/** Long enough to read as a turn rather than a blink. */
const MORPH_MS = 320

export function OneHomeRecommendation({
  icon,
  label,
  variant = "outline",
  onClick,
}: {
  icon: IconType
  label: string
  variant?: OneHomeRecommendationVariant
  onClick?: () => void
}) {
  const [done, setDone] = useState(false)
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

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        setDone(true)
        onClick?.()
      }}
      // 400px backdrop blur under every weight (Angel, 2026-09-15).
      className={`f0c-pressable inline-flex h-8 shrink-0 cursor-pointer items-center gap-1 overflow-hidden whitespace-nowrap rounded border-none px-2.5 text-base font-medium backdrop-blur-[400px] transition-colors ${CHROME[variant]}`}
    >
      {/* Both glyphs live in the same 20px box and cross-fade, so the
          pill's left edge never shifts as they swap. */}
      <span className="relative flex size-5 shrink-0 items-center justify-center">
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
        className="inline-block overflow-hidden text-left"
        style={{
          maxWidth: done ? 0 : labelWidth,
          opacity: done ? 0 : 1,
          transition: `max-width ${MORPH_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 160ms ease`,
        }}
      >
        {label}
      </span>
    </button>
  )
}
