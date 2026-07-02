import { baseColors } from "@factorialco/f0-core"

import { NewColor } from "@/components/tags/F0TagDot/types"
import { cn } from "@/lib/utils"

import { AvatarSize, BaseAvatarProps } from "../internal/BaseAvatar"

/**
 * A color-swatch avatar: a solid circle filled with an entity's color. Used to represent entities
 * whose identity is a color (e.g. a leave type). Mirrors `F0TagDot`'s color API — pass a named
 * design token via `color`, or an arbitrary CSS color (e.g. a hex) via `customColor`.
 */
export type F0AvatarColorProps = {
  size?: AvatarSize
} & ({ color: NewColor } | { customColor: string }) &
  Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>

// Dimensions mirror the underlying `@/ui/Avatar` size scale (size-5 … size-18).
const sizes: Record<AvatarSize, string> = {
  xs: "size-5",
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-14",
  "2xl": "size-18",
}

export const F0AvatarColor = (props: F0AvatarColorProps) => {
  const {
    size = "md",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
  } = props

  // Named tokens resolve to their shade-50 (as HSL), matching F0TagDot; custom colors pass through.
  const backgroundColor =
    "color" in props ? `hsl(${baseColors[props.color][50]})` : props.customColor

  const hasAria = Boolean(ariaLabel || ariaLabelledby)

  return (
    <div
      className={cn("aspect-square rounded-full", sizes[size])}
      style={{ backgroundColor }}
      role="img"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-hidden={!hasAria}
      // The color is the content; its contrast is intentional and not subject to a11y contrast rules.
      data-a11y-color-contrast-ignore
    />
  )
}

F0AvatarColor.displayName = "ColorAvatar"
