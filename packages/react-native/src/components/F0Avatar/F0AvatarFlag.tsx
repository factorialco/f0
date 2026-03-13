import React, { useMemo } from "react"
import { View } from "react-native"

import { Badge, BadgeProps } from "../Badge"
import { F0Image } from "../primitives/F0Image"

import { f0AvatarFlagContainerVariants } from "./F0Avatar.styles"
import {
  type AvatarBadge,
  type F0AvatarFlagProps,
  type F0AvatarFlagSize,
  type F0AvatarModuleSize,
} from "./F0Avatar.types"
import { F0AvatarModule } from "./F0AvatarModule"

const flagUrlBase = "https://flagcdn.com/w80"

const getModuleAvatarSize = (size: F0AvatarFlagSize): F0AvatarModuleSize => {
  const map: Record<F0AvatarFlagSize, F0AvatarModuleSize> = {
    xs: "xs",
    sm: "sm",
    md: "sm",
    lg: "sm",
  }
  return map[size]
}

const getBadgeSize = (
  size: F0AvatarFlagSize
): NonNullable<BadgeProps["size"]> => {
  const map: Record<F0AvatarFlagSize, NonNullable<BadgeProps["size"]>> = {
    xs: "xs",
    sm: "sm",
    md: "sm",
    lg: "sm",
  }
  return map[size]
}

export const F0AvatarFlag = React.memo(function F0AvatarFlag({
  flag,
  size = "xs",
  badge,
}: F0AvatarFlagProps) {
  const countryCode = flag.toLowerCase()
  const flagUrl = `${flagUrlBase}/${countryCode}.png`
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
