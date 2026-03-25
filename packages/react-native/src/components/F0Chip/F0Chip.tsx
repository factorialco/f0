import React from "react"
import { View } from "react-native"

import { CrossedCircle } from "../../icons/app"
import { F0Avatar } from "../F0Avatar"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  f0ChipCloseButtonVariants,
  f0ChipContainerVariants,
  f0ChipContentVariants,
  f0ChipTextVariants,
} from "./F0Chip.styles"
import type { F0ChipProps, F0ChipVariant } from "./F0Chip.types"

const getContainerShape = (avatar: F0ChipProps["avatar"]) => {
  if (avatar && avatar.type !== "person") {
    return "square" as const
  }

  return "pill" as const
}

const getLeadingVisual = (
  avatar: F0ChipProps["avatar"],
  icon: F0ChipProps["icon"]
) => {
  if (avatar) return "avatar" as const
  if (icon) return "icon" as const
  return "none" as const
}

const getLabelColor = (variant: F0ChipVariant) => {
  return variant === "selected" ? "selected" : "default"
}

const F0Chip = React.memo(function F0Chip({
  label,
  variant = "default",
  onPress,
  onClose,
  deactivated = false,
  avatar,
  icon,
  testID,
}: F0ChipProps) {
  const chipClassName = f0ChipContainerVariants({
    variant,
    leading: getLeadingVisual(avatar, icon),
    hasClose: Boolean(onClose),
    shape: getContainerShape(avatar),
  })

  const content = (
    <>
      {avatar && <F0Avatar avatar={avatar} size="xs" />}

      <View className={f0ChipContentVariants()}>
        {icon && (
          <F0Icon
            icon={icon}
            size="sm"
            className={f0ChipTextVariants({ variant })}
          />
        )}

        <F0Text
          variant="body-sm-medium"
          color={getLabelColor(variant)}
          className={f0ChipTextVariants({ variant, deactivated })}
          numberOfLines={1}
        >
          {label}
        </F0Text>
      </View>

      {onClose && (
        <PressableFeedback
          onPress={(event) => {
            event.stopPropagation()
            onClose()
          }}
          variant="both"
          className={f0ChipCloseButtonVariants()}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <F0Icon
            icon={CrossedCircle}
            size="sm"
            className={f0ChipTextVariants({ variant })}
          />
        </PressableFeedback>
      )}
    </>
  )

  return (
    <View className="flex items-start">
      {onPress ? (
        <PressableFeedback
          testID={testID}
          variant="both"
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={label}
          accessibilityState={{ selected: variant === "selected" }}
          className={chipClassName}
        >
          {content}
        </PressableFeedback>
      ) : (
        <View testID={testID} className={chipClassName}>
          {content}
        </View>
      )}
    </View>
  )
})

F0Chip.displayName = "F0Chip"

export { F0Chip }
