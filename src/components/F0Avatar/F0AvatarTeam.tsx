import React from "react"

import { F0_AVATAR_SIZE_TO_INTERNAL_SIZE } from "./F0Avatar.constants"
import { type F0AvatarTeamProps } from "./F0Avatar.types"
import { BaseAvatar } from "./F0AvatarBase"

/**
 * F0AvatarTeam - Team avatar variant.
 *
 * Uses the shared base avatar primitive with random color assignment and optional
 * badge overlay support for team identities.
 *
 * @example
 * <F0AvatarTeam name="Design" size="md" />
 * <F0AvatarTeam name="Engineering" src={{ uri: teamLogoUrl }} size="lg" />
 */
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
