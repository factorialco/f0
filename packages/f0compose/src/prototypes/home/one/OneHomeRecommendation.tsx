import type { IconType } from "@factorialco/f0-react"

import { F0Icon } from "@factorialco/f0-react"

/**
 * A recommendation under the Home composer: an icon and a label, the
 * thing One suggests you do next (Angel, 2026-09-15).
 *
 * Two weights: `primary` is radical all the way round with a white glyph,
 * everything else is a ghost. It is hand-rolled rather than an `F0Button`
 * because the row needs to set each pill's opacity as it nears the
 * carousel's chevron, and because the blur has to sit on the pill itself.
 *
 * Acting on one does NOT change it: clock-in is the only thing on the row
 * that confirms, and that is its own component now (ClockInPill).
 */
export type OneHomeRecommendationVariant = "primary" | "outline" | "ghost"

const CHROME: Record<OneHomeRecommendationVariant, string> = {
  primary:
    "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
  outline: "bg-transparent text-f1-foreground hover:bg-f1-background-secondary",
  ghost: "bg-transparent text-f1-foreground hover:bg-f1-background-secondary",
}

const ICON: Record<OneHomeRecommendationVariant, string> = {
  primary: "text-f1-icon-inverse",
  outline: "text-f1-icon",
  ghost: "text-f1-icon",
}

export function OneHomeRecommendation({
  icon,
  label,
  variant = "ghost",
  onClick,
}: {
  icon: IconType
  label: string
  variant?: OneHomeRecommendationVariant
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      // 8px backdrop blur under every weight (Angel, 2026-09-15).
      className={`f0c-pressable inline-flex h-8 shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded border-none pl-2.5 pr-3.5 text-base font-medium backdrop-blur-[8px] ${CHROME[variant]}`}
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center ${ICON[variant]}`}
      >
        <F0Icon icon={icon} size="md" color="currentColor" />
      </span>
      <span>{label}</span>
    </button>
  )
}
