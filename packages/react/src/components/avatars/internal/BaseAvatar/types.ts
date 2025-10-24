import { F0IconProps, IconType } from "@/components/F0Icon"
import { AvatarBadge } from "@/components/avatars/F0Avatar/types"
import { InternalAvatarProps } from "@/ui/Avatar"
import { ReactElement } from "react"

export const avatarSizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const

export type AvatarSize = (typeof avatarSizes)[number]

export const sizesMapping: Record<
  NonNullable<InternalAvatarProps["size"]>,
  AvatarSize
> = {
  xxlarge: "2xl",
  xlarge: "xl",
  large: "lg",
  medium: "md",
  small: "sm",
  xsmall: "xs",
} as const

export type BaseAvatarProps = {
  /**
   * The type of the avatar.
   */
  type: InternalAvatarProps["type"]
  /**
   * The name of the avatar.
   */
  name: string | string[]
  /**
   * The source of the avatar's image.
   */
  src?: string
  /**
   * This is a workaround until we implement the ability to deal with images
   */
  flag?: ReactElement
  /**
   * Optional icon to display on the avatar. Will override the name or image if provided.
   */
  icon?: {
    icon: IconType
    color?: F0IconProps["color"]
  }
  /**
   * The color of the avatar.
   * @default "random"
   */
  color?: InternalAvatarProps["color"] | "random"
  /**
   * The badge to display on the avatar. Can be a module badge or a custom badge.
   */
  badge?: AvatarBadge
} & Partial<Pick<InternalAvatarProps, "aria-label" | "aria-labelledby">> &
  (
    | {
        size: AvatarSize
      }
    | {
        /**
         * @deprecated Use AvatarSize instead (xs, sm, md, lg, xl, 2xl)
         */
        size: InternalAvatarProps["size"]
      }
  )
