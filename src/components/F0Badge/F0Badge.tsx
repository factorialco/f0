import React from "react"

import { F0Icon } from "../primitives/F0Icon"

import { badgeVariants } from "./F0Badge.styles"
import { F0_BADGE_ICON_SIZES, type F0BadgeProps } from "./F0Badge.types"

/**
 * F0Badge - Compact semantic icon badge.
 *
 * Used for small status and emphasis markers where color and size are driven by
 * semantic props instead of ad-hoc visual overrides.
 *
 * @example
 * <F0Badge icon={AlertCircle} variant="error" size="sm" />
 * <F0Badge icon={CheckCircle} variant="positive" size="md" />
 */
const F0Badge = React.memo(function F0Badge({
  variant = "neutral",
  size = "md",
  icon,
}: F0BadgeProps) {
  return (
    <F0Icon
      className={badgeVariants({ variant, size })}
      icon={icon}
      size={F0_BADGE_ICON_SIZES[size]}
    />
  )
})

F0Badge.displayName = "F0Badge"

export { F0Badge }
