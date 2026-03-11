import type { VariantProps } from "tailwind-variants"

import type { IconType } from "../primitives/F0Icon"

import {
  badgeSizeClasses,
  badgeVariantClasses,
  type badgeVariants,
} from "./F0Badge.styles"

export type F0BadgeVariant = keyof typeof badgeVariantClasses

export const F0_BADGE_VARIANTS = Object.keys(
  badgeVariantClasses
) as ReadonlyArray<F0BadgeVariant>

export type F0BadgeSize = keyof typeof badgeSizeClasses

export const F0_BADGE_SIZES = Object.keys(
  badgeSizeClasses
) as ReadonlyArray<F0BadgeSize>

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
