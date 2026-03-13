import { type AvatarListSize } from "./F0AvatarList.types"

export const AVATAR_ITEM_WIDTHS: Record<AvatarListSize, number> = {
  xs: 20,
  sm: 24,
  md: 32,
}

export const RING_WIDTHS: Record<AvatarListSize, number> = {
  xs: 1.5,
  sm: 2,
  md: 2,
}

/**
 * Outer border radius for the ring wrapper (base shape).
 * Calculated as avatar border-radius + ring width:
 * rounded-xs=6 + 1.5, rounded-sm=8 + 2, rounded=10 + 2
 */
export const RING_BORDER_RADIUS: Record<AvatarListSize, number> = {
  xs: 7.5,
  sm: 10,
  md: 12,
}

export const AVATAR_LIST_GAPS: Record<AvatarListSize, number> = {
  xs: -5,
  sm: -7,
  md: -8,
}
