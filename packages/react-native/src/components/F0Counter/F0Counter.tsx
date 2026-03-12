import React from "react"
import { View } from "react-native"

import { cn } from "../../lib/utils"
import { F0Text, type TextColor } from "../primitives/F0Text"

import { f0CounterContainerVariants } from "./F0Counter.styles"
import type { F0CounterProps, F0CounterType } from "./F0Counter.types"

const textColorByType: Record<F0CounterType, TextColor> = {
  default: "default",
  primary: "inverse",
  selected: "inverse",
  notification: "inverse",
}

/**
 * F0Counter — Numeric counter pill with size and type variants.
 *
 * Displays a numeric value inside a rounded pill. When `value` exceeds
 * `maxValue`, the display changes to `+maxValue`.
 *
 * Figma spec: 12px / 16px Inter Medium (body-xs-medium).
 *
 * @example
 * <F0Counter value={42} />
 * <F0Counter value={150} maxValue={99} type="notification" />
 * <F0Counter value={3} size="sm" type="selected" />
 * <F0Counter value={7} type="primary" />
 */
const F0Counter = React.memo(function F0Counter({
  value,
  maxValue,
  size = "md",
  type = "default",
  className,
}: F0CounterProps) {
  const displayValue = maxValue && value > maxValue ? `+${maxValue}` : value

  return (
    <View className={cn(f0CounterContainerVariants({ size, type }), className)}>
      <F0Text
        variant="body-xs-medium"
        color={textColorByType[type]}
        align="center"
        className="tabular-nums"
      >
        {displayValue}
      </F0Text>
    </View>
  )
})

F0Counter.displayName = "F0Counter"

export { F0Counter }
