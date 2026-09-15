import type { IconType } from "@factorialco/f0-react"

import { F0Button } from "@factorialco/f0-react"

/**
 * A recommendation under the Home composer: an icon and a label, the
 * thing One suggests you do next (Angel, 2026-09-15).
 *
 * Three weights, so a row can lead with one and keep the rest quiet:
 * `primary` is the filled call to action, `outline` the bordered
 * alternative, `ghost` the bare one. They map onto f0's own button
 * variants rather than redrawing the chrome, so the paddings, the radius
 * and every state come from the design system.
 */
export type OneHomeRecommendationVariant = "primary" | "outline" | "ghost"

const BUTTON_VARIANT = {
  primary: "default",
  outline: "outline",
  ghost: "ghost",
} as const

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
  return (
    <F0Button
      variant={BUTTON_VARIANT[variant]}
      size="md"
      icon={icon}
      label={label}
      onClick={onClick}
    />
  )
}
