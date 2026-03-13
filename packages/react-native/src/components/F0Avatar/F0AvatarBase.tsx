import { ComponentProps, useMemo } from "react"
import { View } from "react-native"

import { Badge, BadgeProps } from "../Badge"
import { F0Icon, type F0IconProps, type IconType } from "../primitives/F0Icon"

import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "./F0Avatar.primitives"
import { type AvatarBadge, type F0AvatarModuleSize } from "./F0Avatar.types"
import { getAvatarColor, getInitials } from "./F0Avatar.utils"
import { F0AvatarModule } from "./F0AvatarModule"

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

const getModuleAvatarSize = (
  size: ShadAvatarProps["size"]
): F0AvatarModuleSize => {
  const sizeMap: Record<
    NonNullable<ShadAvatarProps["size"]>,
    F0AvatarModuleSize
  > = {
    xsmall: "xs",
    small: "sm",
    medium: "sm",
    lg: "sm",
    large: "md",
    xlarge: "lg",
  }
  return sizeMap[size ?? "medium"]
}

const getBadgeSize = (
  size: ShadAvatarProps["size"]
): NonNullable<BadgeProps["size"]> => {
  const sizeMap: Record<
    NonNullable<ShadAvatarProps["size"]>,
    NonNullable<BadgeProps["size"]>
  > = {
    xsmall: "xs",
    small: "sm",
    medium: "sm",
    lg: "sm",
    large: "md",
    xlarge: "lg",
  }
  return sizeMap[size ?? "medium"]
}

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
  const initials = getInitials(name, size)
  const avatarColor =
    color === "random"
      ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
      : color

  const hasAria = Boolean(ariaLabel || ariaLabelledby)
  const badgeSize = getBadgeSize(size)
  const moduleAvatarSize = getModuleAvatarSize(size)

  const badgeContent = useMemo(
    () =>
      badge ? (
        <>
          {badge.type === "module" && (
            <F0AvatarModule module={badge.module} size={moduleAvatarSize} />
          )}
          {badge.type !== "module" && (
            <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
          )}
        </>
      ) : null,
    [badge, badgeSize, moduleAvatarSize]
  )

  return (
    <View
      className={`inline-flex ${badge && badge.type === "module" ? "p-[3px]" : ""}`}
    >
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
