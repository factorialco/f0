import { PersonNegative, SearchPerson } from "@/icons/app"

import { BaseAvatar } from "../internal/BaseAvatar"
import { F0AvatarPersonProps } from "./types"

export const F0AvatarPerson = ({
  firstName,
  lastName,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
  tooltip,
  deactivated,
  pending,
}: F0AvatarPersonProps) => {
  const stateIcon = deactivated
    ? PersonNegative
    : pending
      ? SearchPerson
      : undefined

  return (
    <BaseAvatar
      type="rounded"
      name={[firstName, lastName]}
      src={src}
      size={size}
      color="random"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
      tooltip={tooltip}
      icon={stateIcon ? { icon: stateIcon, color: "secondary" } : undefined}
    />
  )
}

F0AvatarPerson.displayName = "PersonAvatar"
