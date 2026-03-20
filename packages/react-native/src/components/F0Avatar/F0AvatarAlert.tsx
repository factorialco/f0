import React from "react"
import { View } from "react-native"

import { AlertCircle, Warning, InfoCircle, CheckCircle } from "../../icons/app"
import { F0Icon, type IconType } from "../primitives/F0Icon"

import { f0AvatarAlertContainerVariants } from "./F0Avatar.styles"
import {
  type F0AvatarAlertProps,
  type F0AvatarAlertType,
  type F0AvatarUtilitySize,
} from "./F0Avatar.types"

const alertIconMap: Record<F0AvatarAlertType, IconType> = {
  critical: AlertCircle,
  warning: Warning,
  info: InfoCircle,
  positive: CheckCircle,
}

const alertIconColorMap: Record<
  F0AvatarAlertType,
  React.ComponentProps<typeof F0Icon>["color"]
> = {
  critical: "critical",
  warning: "warning",
  info: "info",
  positive: "positive",
}

const iconSizeMap: Record<
  F0AvatarUtilitySize,
  React.ComponentProps<typeof F0Icon>["size"]
> = {
  sm: "sm",
  md: "md",
  lg: "lg",
}

export const F0AvatarAlert = React.memo(function F0AvatarAlert({
  alertType,
  size = "sm",
}: F0AvatarAlertProps) {
  return (
    <View
      className={f0AvatarAlertContainerVariants({ size, alertType })}
      accessibilityRole="image"
      accessibilityLabel={`${alertType} alert`}
    >
      <F0Icon
        icon={alertIconMap[alertType]}
        size={iconSizeMap[size]}
        color={alertIconColorMap[alertType]}
      />
    </View>
  )
})
