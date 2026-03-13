import { type BadgeProps } from "../Badge"
import { type IconType } from "../primitives/F0Icon"

import { type FileLike } from "./F0Avatar.fileUtils"
import { type ModuleId } from "./F0Avatar.modules"

export type { ModuleId } from "./F0Avatar.modules"
export type { FileLike } from "./F0Avatar.fileUtils"

export type AvatarBadge = (
  | {
      type: "module"
      module: ModuleId
    }
  | {
      type: Exclude<BadgeProps["type"], undefined>
      icon: BadgeProps["icon"]
    }
) & {
  tooltip?: string
}

/**
 * Figma-aligned size scale for main avatars (Person, Company, Team, File).
 * Maps to internal ui/avatar sizes.
 */
export const F0_AVATAR_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const
export type F0AvatarSize = (typeof F0_AVATAR_SIZES)[number]

export const F0_AVATAR_UTILITY_SIZES = ["sm", "md", "lg"] as const
export type F0AvatarUtilitySize = (typeof F0_AVATAR_UTILITY_SIZES)[number]

export const F0_AVATAR_FLAG_SIZES = ["xs", "sm", "md", "lg"] as const
export type F0AvatarFlagSize = (typeof F0_AVATAR_FLAG_SIZES)[number]

export const F0_AVATAR_ALERT_TYPES = [
  "critical",
  "warning",
  "info",
  "positive",
] as const
export type F0AvatarAlertType = (typeof F0_AVATAR_ALERT_TYPES)[number]

export const F0_AVATAR_MODULE_SIZES = [
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const
export type F0AvatarModuleSize = (typeof F0_AVATAR_MODULE_SIZES)[number]

export type F0AvatarPersonProps = {
  firstName: string
  lastName: string
  src?: string
  size?: F0AvatarSize
  badge?: AvatarBadge
  deactivated?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
}

export type F0AvatarTeamProps = {
  name: string
  src?: string
  size?: F0AvatarSize
  badge?: AvatarBadge
  "aria-label"?: string
  "aria-labelledby"?: string
}

export type F0AvatarCompanyProps = {
  name: string
  src?: string
  size?: F0AvatarSize
  badge?: AvatarBadge
  "aria-label"?: string
  "aria-labelledby"?: string
}

export type F0AvatarEmojiProps = {
  emoji: string
  size?: F0AvatarUtilitySize
}

export type F0AvatarFileProps = {
  file: FileLike
  size?: F0AvatarSize
  badge?: AvatarBadge
}

export type F0AvatarIconProps = {
  icon: IconType
  size?: F0AvatarUtilitySize
}

export type F0AvatarFlagProps = {
  flag: string
  size?: F0AvatarFlagSize
  badge?: AvatarBadge
}

export type F0AvatarAlertProps = {
  alertType: F0AvatarAlertType
  size?: F0AvatarUtilitySize
}

export type F0AvatarDateProps = {
  date: Date
}

export type F0AvatarModuleProps = {
  module: ModuleId
  size?: F0AvatarModuleSize
}

export type F0AvatarVariant =
  | ({ type: "person" } & Omit<F0AvatarPersonProps, "size">)
  | ({ type: "team" } & Omit<F0AvatarTeamProps, "size">)
  | ({ type: "company" } & Omit<F0AvatarCompanyProps, "size">)
  | ({ type: "emoji" } & Omit<F0AvatarEmojiProps, "size">)
  | ({ type: "file" } & Omit<F0AvatarFileProps, "size">)
  | ({ type: "icon" } & Omit<F0AvatarIconProps, "size">)
  | ({ type: "flag" } & Omit<F0AvatarFlagProps, "size">)
  | ({ type: "alert" } & Omit<F0AvatarAlertProps, "size">)
  | ({ type: "date" } & Omit<F0AvatarDateProps, "size">)
  | ({ type: "module" } & Omit<F0AvatarModuleProps, "size">)

export type F0AvatarProps = {
  avatar: F0AvatarVariant
  size?: F0AvatarSize
}
