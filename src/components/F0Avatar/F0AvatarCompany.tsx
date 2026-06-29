import React from "react"

import { F0_AVATAR_SIZE_TO_INTERNAL_SIZE } from "./F0Avatar.constants"
import { type F0AvatarCompanyProps } from "./F0Avatar.types"
import { BaseAvatar } from "./F0AvatarBase"

/**
 * F0AvatarCompany - Company avatar variant.
 *
 * Uses the shared base avatar primitive with the company color treatment and
 * optional badge overlay support.
 *
 * @example
 * <F0AvatarCompany name="Acme" size="md" />
 * <F0AvatarCompany name="Acme" src={{ uri: logoUrl }} size="lg" />
 */
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
      size={F0_AVATAR_SIZE_TO_INTERNAL_SIZE[size]}
      color="viridian"
      badge={badge}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
})
