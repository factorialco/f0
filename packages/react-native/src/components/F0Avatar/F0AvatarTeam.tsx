import React from "react"

import { type F0AvatarTeamProps, type F0AvatarSize } from "./F0Avatar.types"
import { BaseAvatar, type BaseAvatarProps } from "./F0AvatarBase"

const sizeMap: Record<F0AvatarSize, NonNullable<BaseAvatarProps["size"]>> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
  lg: "lg",
  xl: "large",
  "2xl": "xlarge",
}

export const F0AvatarTeam = React.memo(function F0AvatarTeam({
  name,
  src,
  size = "xs",
  badge,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarTeamProps) {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={sizeMap[size]}
      color="random"
      badge={badge}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
})
