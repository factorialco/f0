import { Person } from "@/icons/app"
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
  terminated,
}: F0AvatarPersonProps) => {
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
      icon={terminated ? { icon: Person, color: "secondary" } : undefined}
    />
  )
}

F0AvatarPerson.displayName = "PersonAvatar"
