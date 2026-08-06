import type { NewColor } from "@/components/tags/F0TagDot"

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
  /**
   * The background color of the avatar, from the F0 color palette.
   * Only applies when no image (`src`) is provided.
   * @default "random"
   */
  bgColor?: NewColor | "random"
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const F0AvatarTeam = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
  bgColor = "random",
}: F0AvatarTeamProps) => {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={size}
      color={bgColor}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarTeam.displayName = "TeamAvatar"
