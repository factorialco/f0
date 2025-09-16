import { AvatarBadge } from "../F0Avatar/types"
import { BaseAvatar, BaseAvatarProps } from "../internal/BaseAvatar"

export type F0AvatarTeamProps = {
  /**
   * The name of the team.
   */
  name: string
  /**
   * The source of the team's image.
   */
  src?: string
  /**
   * The size of the avatar.
   */
  size?: BaseAvatarProps["size"]
  /**
   * The badge to display on the avatar. Can be a module badge or a custom badge.
   */
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const F0AvatarTeam = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: F0AvatarTeamProps) => {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={size}
      color="random"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarTeam.displayName = "TeamAvatar"
