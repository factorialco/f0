import { BaseAvatar } from "../internal/BaseAvatar"
import { F0AvatarCompanyProps } from "./types"

export const F0AvatarCompany = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: F0AvatarCompanyProps) => {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={size}
      color="viridian"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarCompany.displayName = "CompanyAvatar"
