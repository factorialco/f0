import React from "react"

import { PersonNegative } from "../../icons/app"

import { type F0AvatarPersonProps, type F0AvatarSize } from "./F0Avatar.types"
import { BaseAvatar, type BaseAvatarProps } from "./F0AvatarBase"

const sizeMap: Record<F0AvatarSize, NonNullable<BaseAvatarProps["size"]>> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
  lg: "lg",
  xl: "large",
  "2xl": "xlarge",
}

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
      size={sizeMap[size]}
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
