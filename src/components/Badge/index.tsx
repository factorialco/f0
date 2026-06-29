import { F0Badge } from "../F0Badge"
import type { IconType } from "../primitives/F0Icon"

/**
 * @deprecated Use `F0_BADGE_VARIANTS` from `../F0Badge` instead.
 */
export const BADGE_TYPES = [
  "neutral",
  "highlight",
  "positive",
  "critical",
  "warning",
] as const

/**
 * @deprecated Use `F0BadgeVariant` from `../F0Badge` instead.
 */
export type BadgeType = (typeof BADGE_TYPES)[number]

/**
 * @deprecated Use `F0BadgeSize` from `../F0Badge` instead.
 */
export const BADGE_SIZES = ["xs", "sm", "md", "lg"] as const

/**
 * @deprecated Use `F0BadgeSize` from `../F0Badge` instead.
 */
export type BadgeSize = (typeof BADGE_SIZES)[number]

/**
 * @deprecated Use `F0BadgeProps` from `../F0Badge` instead.
 * Migration: replace `type` with `variant`.
 */
export interface BadgeProps {
  icon: IconType
  type?: BadgeType
  size?: BadgeSize
}

/**
 * @deprecated Use `F0Badge` from `../F0Badge` instead.
 * Migration: replace `type` with `variant`.
 */
export const Badge = ({ type = "neutral", size = "md", icon }: BadgeProps) => {
  return <F0Badge icon={icon} variant={type} size={size} />
}
