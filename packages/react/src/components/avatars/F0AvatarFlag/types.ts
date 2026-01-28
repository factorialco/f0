import { CountryCode } from "@/lib/countries"

import { AvatarBadge } from "../F0Avatar/types"
import { BaseAvatarProps } from "../internal/BaseAvatar/types"

export type F0AvatarFlagProps = {
  flag: CountryCode | (string & {})
  size?: BaseAvatarProps["size"]
  badge?: AvatarBadge
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">
