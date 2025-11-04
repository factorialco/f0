import { AvatarBadge } from "../F0Avatar/types"
import { BaseAvatarProps } from "../internal/BaseAvatar/types"

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
  /**
   * Whether the person is deactivated. If true, the avatar will display an icon instead of the person's name or picture.
   */
  deactivated?: boolean
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
