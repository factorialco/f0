import React from "react"
import { View } from "react-native"

import { cn } from "../../lib/utils"
import { F0Icon, type IconType } from "../primitives/F0Icon"

import {
  type F0AvatarIconProps,
  type F0AvatarUtilitySize,
} from "./F0Avatar.types"

const containerSizes: Record<F0AvatarUtilitySize, string> = {
  sm: "h-6 w-6 rounded-sm",
  md: "h-8 w-8 rounded",
  lg: "h-10 w-10 rounded-lg",
}

/**
 * F0AvatarIcon - Icon avatar variant.
 *
 * Wraps a semantic icon in the shared utility avatar container for system-facing
 * and utility use cases.
 *
 * @example
 * <F0AvatarIcon icon={Settings} size="md" />
 */
export const F0AvatarIcon = React.memo(function F0AvatarIcon({
  icon,
  size = "sm",
}: F0AvatarIconProps) {
  return (
    <View
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f0-border-secondary",
        containerSizes[size]
      )}
    >
      <F0Icon
        icon={icon}
        size={size}
        className="text-f0-foreground-secondary"
      />
    </View>
  )
})
