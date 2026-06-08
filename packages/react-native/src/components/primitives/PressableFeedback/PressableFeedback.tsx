import { forwardRef, useCallback, useMemo } from "react"
import { Pressable, View, type PressableProps } from "react-native"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type WithTimingConfig,
} from "react-native-reanimated"

import { cn } from "../../../lib/utils"

import type { PressableFeedbackProps } from "./PressableFeedback.types"

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const DEFAULT_TIMING_CONFIG: WithTimingConfig = {
  duration: 150,
  easing: Easing.out(Easing.ease),
}

/**
 * PressableFeedback - Internal pressable primitive with animated feedback
 *
 * Wraps React Native's Pressable with Reanimated scale and highlight
 * animations. Used internally by F0 components.
 *
 * @internal
 *
 * @example
 * <PressableFeedback variant="both" onPress={handlePress}>
 *   <View><F0Text>Press me</F0Text></View>
 * </PressableFeedback>
 */
export const PressableFeedback = forwardRef<View, PressableFeedbackProps>(
  function PressableFeedback(
    {
      variant = "both",
      scaleAnimation,
      highlightAnimation,
      className,
      style,
      children,
      disableAnimation = false,
      onPressIn,
      onPressOut,
      disabled,
      ...restProps
    },
    ref
  ) {
    const scale = useSharedValue(1)
    const highlightOpacity = useSharedValue(0)

    const scaleValue = scaleAnimation?.value ?? 0.98
    const scaleTimingConfig = useMemo(
      () => ({
        ...DEFAULT_TIMING_CONFIG,
        ...scaleAnimation?.timingConfig,
      }),
      [scaleAnimation]
    )

    const highlightOpacityValues = useMemo(
      () => highlightAnimation?.opacity ?? [0, 0.15],
      [highlightAnimation]
    )
    const highlightTimingConfig = useMemo(
      () => ({
        ...DEFAULT_TIMING_CONFIG,
        ...highlightAnimation?.timingConfig,
      }),
      [highlightAnimation]
    )
    const highlightColor =
      highlightAnimation?.backgroundColor ?? "rgba(0, 0, 0, 1)"

    const shouldScale =
      !disableAnimation && (variant === "scale" || variant === "both")
    const shouldHighlight =
      !disableAnimation && (variant === "highlight" || variant === "both")

    const handlePressIn = useCallback(
      (event: Parameters<NonNullable<PressableProps["onPressIn"]>>[0]) => {
        if (shouldScale) {
          scale.value = withTiming(scaleValue, scaleTimingConfig)
        }
        if (shouldHighlight) {
          highlightOpacity.value = withTiming(
            highlightOpacityValues[1],
            highlightTimingConfig
          )
        }
        onPressIn?.(event)
      },
      [
        shouldScale,
        shouldHighlight,
        scale,
        highlightOpacity,
        scaleValue,
        scaleTimingConfig,
        highlightOpacityValues,
        highlightTimingConfig,
        onPressIn,
      ]
    )

    const handlePressOut = useCallback(
      (event: Parameters<NonNullable<PressableProps["onPressOut"]>>[0]) => {
        if (shouldScale) {
          scale.value = withTiming(1, scaleTimingConfig)
        }
        if (shouldHighlight) {
          highlightOpacity.value = withTiming(
            highlightOpacityValues[0],
            highlightTimingConfig
          )
        }
        onPressOut?.(event)
      },
      [
        shouldScale,
        shouldHighlight,
        scale,
        highlightOpacity,
        scaleTimingConfig,
        highlightOpacityValues,
        highlightTimingConfig,
        onPressOut,
      ]
    )

    const animatedContainerStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],
      }
    })

    const animatedHighlightStyle = useAnimatedStyle(() => {
      return {
        opacity: highlightOpacity.value,
      }
    })

    return (
      <AnimatedPressable
        ref={ref}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className={cn("overflow-hidden", className)}
        style={[animatedContainerStyle, style]}
        {...restProps}
      >
        {shouldHighlight && (
          <Animated.View
            pointerEvents="none"
            className="absolute inset-0"
            style={[
              animatedHighlightStyle,
              { backgroundColor: highlightColor },
            ]}
          />
        )}
        {children}
      </AnimatedPressable>
    )
  }
)

PressableFeedback.displayName = "PressableFeedback"

export default PressableFeedback
