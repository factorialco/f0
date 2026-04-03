import React from "react"
import { View } from "react-native"

import { F0Text, type TypographyVariant } from "../primitives/F0Text"

import {
  F0_AVATAR_INTERNAL_SIZE_TO_BADGE_SIZE,
  F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE,
  F0_AVATAR_SIZE_TO_INTERNAL_SIZE,
} from "./F0Avatar.constants"
import { Avatar } from "./F0Avatar.primitives"
import { type F0AvatarFileProps } from "./F0Avatar.types"
import {
  getAvatarBadgeContainerClassName,
  renderAvatarBadge,
} from "./internal/badge"
import { getFileTypeInfo } from "./internal/file-type"

const textVariantMap: Record<
  NonNullable<React.ComponentProps<typeof Avatar>["size"]>,
  TypographyVariant
> = {
  xsmall: "body-xs-medium",
  small: "body-xs-medium",
  medium: "body-xs-medium",
  lg: "body-sm-semibold",
  large: "body-md-semibold",
  xlarge: "heading-lg",
}

/**
 * F0AvatarFile - File avatar variant.
 *
 * Derives its short label and semantic color from the file type while preserving
 * the shared avatar sizing and optional badge overlay behavior.
 *
 * @example
 * <F0AvatarFile file="document.pdf" size="md" />
 * <F0AvatarFile file="photo.png" size="lg" />
 */
export const F0AvatarFile = React.memo(function F0AvatarFile({
  file,
  size = "md",
  badge,
}: F0AvatarFileProps) {
  const internalSize = F0_AVATAR_SIZE_TO_INTERNAL_SIZE[size]
  const { type: fileType, color: fileColor } = getFileTypeInfo(file)
  const isSmall = internalSize === "xsmall" || internalSize === "small"
  const label = isSmall ? fileType[0] : fileType
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
