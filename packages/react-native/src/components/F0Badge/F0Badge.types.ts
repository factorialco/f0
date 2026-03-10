import type { VariantProps } from "tailwind-variants"

import type { IconType } from "../primitives/F0Icon"

import type { badgeVariants } from "./F0Badge.styles"

export const F0_BADGE_VARIANTS = [
  "neutral",
  "highlight",
  "positive",
  "critical",
  "warning",
] as const

export type F0BadgeVariant = (typeof F0_BADGE_VARIANTS)[number]

export const F0_BADGE_SIZES = ["xs", "sm", "md", "lg"] as const

export type F0BadgeSize = (typeof F0_BADGE_SIZES)[number]

export const F0_BADGE_ICON_SIZES = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

export interface F0BadgeProps extends VariantProps<typeof badgeVariants> {
  icon: IconType
  variant?: F0BadgeVariant
  size?: F0BadgeSize
}
