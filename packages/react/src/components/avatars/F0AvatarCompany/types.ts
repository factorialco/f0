import type { NewColor } from "@/components/tags/F0TagDot"

import { AvatarBadge } from "../F0Avatar/types"
import { BaseAvatarProps } from "../internal/BaseAvatar/types"

export type F0AvatarCompanyProps = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
  /**
   * The background color of the avatar, from the F0 color palette.
   * Only applies when no image (`src`) is provided.
   * @default "viridian"
   */
  bgColor?: NewColor | "random"
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
