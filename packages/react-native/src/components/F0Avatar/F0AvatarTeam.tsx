import React from "react"

import { F0_AVATAR_SIZE_TO_INTERNAL_SIZE } from "./F0Avatar.constants"
import { type F0AvatarTeamProps } from "./F0Avatar.types"
import { BaseAvatar } from "./F0AvatarBase"

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
      size={F0_AVATAR_SIZE_TO_INTERNAL_SIZE[size]}
      color="random"
      badge={badge}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
})
