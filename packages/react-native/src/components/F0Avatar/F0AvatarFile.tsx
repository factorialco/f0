import React, { useMemo } from "react"
import { View } from "react-native"

import { Badge, BadgeProps } from "../Badge"
import { F0Text, type TypographyVariant } from "../primitives/F0Text"

import { getFileTypeInfo } from "./F0Avatar.fileUtils"
import { Avatar } from "./F0Avatar.primitives"
import {
  type F0AvatarFileProps,
  type F0AvatarModuleSize,
  type F0AvatarSize,
} from "./F0Avatar.types"
import { F0AvatarModule } from "./F0AvatarModule"

type InternalSize = NonNullable<React.ComponentProps<typeof Avatar>["size"]>

const sizeMap: Record<F0AvatarSize, InternalSize> = {
  xs: "xsmall",
  sm: "small",
  md: "medium",
  lg: "lg",
  xl: "large",
  "2xl": "xlarge",
}

const textVariantMap: Record<InternalSize, TypographyVariant> = {
  xsmall: "body-xs-medium",
  small: "body-xs-medium",
  medium: "body-xs-medium",
  lg: "body-sm-semibold",
  large: "body-md-semibold",
  xlarge: "heading-lg",
}

const getModuleAvatarSize = (size: InternalSize): F0AvatarModuleSize => {
  const map: Record<InternalSize, F0AvatarModuleSize> = {
    xsmall: "xs",
    small: "sm",
    medium: "sm",
    lg: "sm",
    large: "md",
    xlarge: "lg",
  }
  return map[size]
}

const getBadgeSize = (size: InternalSize): NonNullable<BadgeProps["size"]> => {
  const map: Record<InternalSize, NonNullable<BadgeProps["size"]>> = {
    xsmall: "xs",
    small: "sm",
    medium: "sm",
    lg: "sm",
    large: "md",
    xlarge: "lg",
  }
  return map[size]
}

export const F0AvatarFile = React.memo(function F0AvatarFile({
  file,
  size = "md",
  badge,
}: F0AvatarFileProps) {
  const internalSize = sizeMap[size]
  const { type: fileType, color: fileColor } = getFileTypeInfo(file)
  const isSmall = internalSize === "xsmall" || internalSize === "small"
  const label = isSmall ? fileType[0] : fileType
  const badgeSize = getBadgeSize(internalSize)
  const moduleAvatarSize = getModuleAvatarSize(internalSize)

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
        <Avatar
          size={internalSize}
          className="overflow-visible border border-solid border-f0-border-secondary bg-f0-background"
        >
          <F0Text
            variant={textVariantMap[internalSize]}
            color={fileColor}
            numberOfLines={1}
          >
            {label}
          </F0Text>
        </Avatar>
      </View>
      {badge && (
        <View className="absolute -right-0.5 -bottom-0.5">{badgeContent}</View>
      )}
    </View>
  )
})
