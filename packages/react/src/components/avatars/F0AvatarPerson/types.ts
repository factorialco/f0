import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"
import { AvatarBadge } from "../F0Avatar/types"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

export type F0AvatarPersonProps = {
  /**
   * The first name of the person.
   */
  firstName: string
  /**
   * The last name of the person.
   */
  lastName: string
  /**
   * The source of the person's image.
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
