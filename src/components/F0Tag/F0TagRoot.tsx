import React from "react"
import { View } from "react-native"

import { InfoCircleLine } from "../../icons/app"
import { cn } from "../../lib/utils"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  f0TagContainerVariants,
  f0TagHintVariants,
  f0TagRootVariants,
  f0TagTextVariants,
} from "./F0Tag.styles"
import type { F0TagProps } from "./F0Tag.types"

/**
 * Low-level primitive used by all `F0Tag.*` variants.
 */
const F0TagRoot = React.memo(function F0Tag({
  left,
  text,
  right,
  additionalAccessibleText,
  info,
  onPress,
  className,
  textClassName,
  textColor,
  hint,
  shape = "rounded",
}: F0TagProps) {
  return (
    <View className={f0TagRootVariants()}>
      <PressableFeedback
        className={cn(
          f0TagContainerVariants({
            hasText: Boolean(text),
            hasLeft: Boolean(left),
            pressable: Boolean(onPress),
            shape,
          }),
          className
        )}
        onPress={onPress}
        variant={onPress ? "both" : "none"}
        disabled={!onPress}
      >
        {left}
        {!!text && (
          <F0Text
            className={cn(f0TagTextVariants(), textClassName)}
            variant="body-md-medium"
            color={textColor ?? "default"}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {text}
          </F0Text>
        )}
        {additionalAccessibleText && (
          <F0Text className="sr-only" variant="body-md-medium">
            {additionalAccessibleText}
          </F0Text>
        )}
        {right}
      </PressableFeedback>
      {hint && (
        <F0Text
          className={f0TagHintVariants()}
          variant="body-md-medium"
          color="secondary"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {hint}
        </F0Text>
      )}
      {info && (
        <>
          <F0Icon icon={InfoCircleLine} size="md" aria-hidden />
          <F0Text className="sr-only" variant="body-md-medium">
            {info}
          </F0Text>
        </>
      )}
    </View>
  )
})

F0TagRoot.displayName = "F0Tag"

export { F0TagRoot }
