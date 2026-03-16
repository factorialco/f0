import React from "react"

import { PersonNegative } from "../../icons/app"

import { F0_AVATAR_SIZE_TO_INTERNAL_SIZE } from "./F0Avatar.constants"
import { type F0AvatarPersonProps } from "./F0Avatar.types"
import { BaseAvatar } from "./F0AvatarBase"

export const F0AvatarPerson = React.memo(function F0AvatarPerson({
  firstName,
  lastName,
  src,
  size = "xs",
  badge,
  deactivated,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarPersonProps) {
  return (
    <BaseAvatar
      type="rounded"
      name={[firstName, lastName]}
      src={src}
      size={F0_AVATAR_SIZE_TO_INTERNAL_SIZE[size]}
      color="random"
      badge={badge}
      icon={
        deactivated ? { icon: PersonNegative, color: "secondary" } : undefined
      }
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
})
