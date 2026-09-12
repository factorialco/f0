import type { ComponentProps } from "react"

import { F0Button } from "@factorialco/f0-react"

/** Shared suggestion appearance for the Home composer and agent welcome. */
export function HomeSuggestion({
  label,
  onClick,
  size = "sm",
  variant = "outline",
}: {
  variant?: ComponentProps<typeof F0Button>["variant"]
  label: string
  size?: ComponentProps<typeof F0Button>["size"]
  onClick: () => void
}) {
  return (
    <F0Button
      label={label}
      variant={variant}
      size={size}
      onClick={onClick}
    />
  )
}
