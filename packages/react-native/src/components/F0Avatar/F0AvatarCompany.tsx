import React from "react"

import { type F0AvatarCompanyProps, type F0AvatarSize } from "./F0Avatar.types"
import { BaseAvatar, type BaseAvatarProps } from "./F0AvatarBase"

const sizeMap: Record<F0AvatarSize, NonNullable<BaseAvatarProps["size"]>> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
  lg: "lg",
  xl: "large",
  "2xl": "xlarge",
}

export const F0AvatarCompany = React.memo(function F0AvatarCompany({
  name,
  src,
  size = "xs",
  badge,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarCompanyProps) {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={sizeMap[size]}
      color="viridian"
      badge={badge}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
})
