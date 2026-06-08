import { ComponentProps } from "react"
import { View } from "react-native"

import { F0Icon, type F0IconProps, type IconType } from "../primitives/F0Icon"

import {
  F0_AVATAR_INTERNAL_SIZE_TO_BADGE_SIZE,
  F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE,
} from "./F0Avatar.constants"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "./F0Avatar.primitives"
import { type AvatarBadge } from "./F0Avatar.types"
import {
  getAvatarBadgeContainerClassName,
  renderAvatarBadge,
} from "./internal/badge"
import { getAvatarColorByText, getAvatarInitials } from "./internal/name"

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

export type BaseAvatarProps = {
  type: ShadAvatarProps["type"]
  name: string | string[]
  src?: string
  size?: ShadAvatarProps["size"]
  color?: ShadAvatarProps["color"] | "random"
  badge?: AvatarBadge
  icon?: {
    icon: IconType
    color?: F0IconProps["color"]
  }
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">

const iconSizeMap: Record<
  NonNullable<ShadAvatarProps["size"]>,
  F0IconProps["size"]
> = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  lg: "lg",
  large: "lg",
  xlarge: "xl",
}

export const BaseAvatar = ({
  src,
  name,
  size,
  type = "base",
  color = "random",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
  icon,
}: BaseAvatarProps) => {
  const internalSize = size ?? "medium"
  const initials = getAvatarInitials(name, internalSize)
  const avatarColor =
    color === "random"
      ? getAvatarColorByText(Array.isArray(name) ? name.join("") : name)
      : color

  const hasAria = Boolean(ariaLabel || ariaLabelledby)
  const badgeSize = F0_AVATAR_INTERNAL_SIZE_TO_BADGE_SIZE[internalSize]
  const moduleAvatarSize = F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE[internalSize]
  const badgeContent = badge
    ? renderAvatarBadge({
        badge,
        badgeSize,
        moduleSize: moduleAvatarSize,
      })
    : null

  return (
    <View className={getAvatarBadgeContainerClassName(badge)}>
      <View className="h-fit w-fit">
        <AvatarComponent
          size={size}
          type={type}
          color={avatarColor}
          role="img"
          aria-hidden={!hasAria}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          data-a11y-color-contrast-ignore
          className={
            icon
              ? "bg-f0-background-secondary"
              : src
                ? "bg-f0-background dark:bg-f0-background-inverse-secondary"
                : ""
          }
        >
          {icon ? (
            <F0Icon
              icon={icon.icon}
              color={icon.color}
              size={iconSizeMap[size ?? "medium"]}
            />
          ) : src ? (
            <AvatarImage src={src} alt={initials} />
          ) : (
            <AvatarFallback size={size} data-a11y-color-contrast-ignore>
              {initials}
            </AvatarFallback>
          )}
        </AvatarComponent>
      </View>
      {badge && (
        <View className="absolute -right-0.5 -bottom-0.5">{badgeContent}</View>
      )}
    </View>
  )
}

BaseAvatar.displayName = "BaseAvatar"
