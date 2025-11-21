import { flagsMap } from "@/flags/flagsMap"
import { AvatarBadge } from "../F0Avatar/types"
import { BaseAvatarProps } from "../internal/BaseAvatar/types"

export type F0AvatarFlagProps = {
  flag: keyof typeof flagsMap
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
