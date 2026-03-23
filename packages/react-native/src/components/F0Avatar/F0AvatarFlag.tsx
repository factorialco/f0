import React from "react"
import { View } from "react-native"

import { F0Image } from "../primitives/F0Image"

import {
  F0_AVATAR_FLAG_SIZE_TO_BADGE_SIZE,
  F0_AVATAR_FLAG_SIZE_TO_MODULE_SIZE,
} from "./F0Avatar.constants"
import { f0AvatarFlagContainerVariants } from "./F0Avatar.styles"
import { type F0AvatarFlagProps } from "./F0Avatar.types"
import {
  getAvatarBadgeContainerClassName,
  renderAvatarBadge,
} from "./internal/badge"

const flagUrlBase = "https://flagcdn.com/w80"

export const F0AvatarFlag = React.memo(function F0AvatarFlag({
  flag,
  size = "xs",
  badge,
}: F0AvatarFlagProps) {
  const countryCode = flag.toLowerCase()
  const flagUrl = `${flagUrlBase}/${countryCode}.png`
  const badgeSize = F0_AVATAR_FLAG_SIZE_TO_BADGE_SIZE[size]
  const moduleAvatarSize = F0_AVATAR_FLAG_SIZE_TO_MODULE_SIZE[size]
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
        <View
          className={f0AvatarFlagContainerVariants({ size })}
          accessibilityRole="image"
          accessibilityLabel={`Flag of ${flag}`}
        >
          <F0Image
            source={{ uri: flagUrl }}
            className="h-full w-full"
            contentFit="cover"
          />
        </View>
      </View>
      {badge && (
        <View className="absolute -right-0.5 -bottom-0.5">{badgeContent}</View>
      )}
    </View>
  )
})
