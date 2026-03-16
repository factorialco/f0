import { type ComponentProps } from "react"

import type { F0BadgeSize } from "../F0Badge"

import { Avatar } from "./F0Avatar.primitives"
import {
  type F0AvatarFlagSize,
  type F0AvatarModuleSize,
  type F0AvatarSize,
} from "./F0Avatar.types"
import { type AvatarListSize } from "./F0AvatarList.types"

export type F0AvatarInternalSize = NonNullable<
  ComponentProps<typeof Avatar>["size"]
>

export const F0_AVATAR_SIZE_TO_INTERNAL_SIZE: Record<
  F0AvatarSize,
  F0AvatarInternalSize
> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
  lg: "lg",
  xl: "large",
  "2xl": "xlarge",
}

export const F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE: Record<
  F0AvatarInternalSize,
  F0AvatarModuleSize
> = {
  xsmall: "xs",
  small: "sm",
  medium: "sm",
  lg: "sm",
  large: "md",
  xlarge: "lg",
}

export const F0_AVATAR_INTERNAL_SIZE_TO_BADGE_SIZE: Record<
  F0AvatarInternalSize,
  F0BadgeSize
> = {
  xsmall: "xs",
  small: "sm",
  medium: "sm",
  lg: "sm",
  large: "md",
  xlarge: "lg",
}

export const F0_AVATAR_FLAG_SIZE_TO_MODULE_SIZE: Record<
  F0AvatarFlagSize,
  F0AvatarModuleSize
> = {
  xs: "xs",
  sm: "sm",
  md: "sm",
  lg: "sm",
}

export const F0_AVATAR_FLAG_SIZE_TO_BADGE_SIZE: Record<
  F0AvatarFlagSize,
  F0BadgeSize
> = {
  xs: "xs",
  sm: "sm",
  md: "sm",
  lg: "sm",
}

export const F0_AVATAR_LIST_SIZE_TO_INTERNAL_SIZE: Record<
  AvatarListSize,
  Extract<F0AvatarInternalSize, "xsmall" | "small" | "medium">
> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
}
