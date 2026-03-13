import React from "react"

import { F0Icon } from "../primitives/F0Icon"

import { badgeVariants } from "./F0Badge.styles"
import { F0_BADGE_ICON_SIZES, type F0BadgeProps } from "./F0Badge.types"

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
