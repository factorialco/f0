import type { ComponentProps } from "react"

import { F0Button } from "@factorialco/f0-react"
import { Sparkles } from "@factorialco/f0-react/icons/app"

/** Shared suggestion appearance for the Home composer and agent welcome. */
export function HomeSuggestion({
  label,
  onClick,
  icon = Sparkles,
  size = "sm",
  variant = "outline",
}: {
  variant?: ComponentProps<typeof F0Button>["variant"]
  label: string
  icon?: ComponentProps<typeof F0Button>["icon"]
  size?: ComponentProps<typeof F0Button>["size"]
  onClick: () => void
}) {
  return (
    <F0Button
      label={label}
      icon={icon}
      variant={variant}
      size={size}
      onClick={onClick}
    />
  )
}
