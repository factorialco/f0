import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { View } from "react-native"
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated"

import { cn, omitProps } from "../../lib/utils"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  buttonVariants,
  loadingContentVariants,
  loadingIndicatorVariants,
  pressedVariants,
  getButtonPadding,
  getIconColor,
  getIconOnlyColor,
  getTextColor,
} from "./F0Button.styles"
import {
  F0_BUTTON_BLOCKED_FORWARD_PROPS,
  type F0ButtonProps,
} from "./F0Button.types"

/**
 * F0Button - Semantic button primitive for the F0 React Native system.
 *
 * Supports loading, async press handlers, icon or emoji content, and semantic
 * variants and sizes. Controlled accessibility and interaction props always take
 * precedence over forwarded primitive props.
 *
 * @example
 * <F0Button label="Save" onPress={handleSave} />
 * <F0Button label="Delete" variant="destructive" icon={Trash} loading={isDeleting} onPress={handleDelete} />
 * <F0Button label="Add" variant="ghost" icon={Plus} hideLabel size="sm" />
 */
const F0Button = React.memo(
  forwardRef<View, F0ButtonProps>(function F0Button(
    {
      label,
      onPress,
      disabled = false,
      loading = false,
      icon,
      iconPosition = "left",
      emoji,
      hideLabel = false,
      variant = "default",
      size = "md",
      round = false,
      accessibilityHint,
      showBadge = false,
      fullWidth = false,
      isDark = false,
      testID,
      feedback = "both",
      ...rest
    },
    ref
  ) {
    const [isLoading, setIsLoading] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const spinnerRotation = useSharedValue(0)

    const isBusy = loading || isLoading
    const isDisabled = disabled || isBusy
    const isRound = hideLabel && round

    const handlePress = useCallback(async () => {
      if (!onPress || isDisabled) return

      try {
        const result = onPress()

        if (result && typeof result.then === "function") {
          setIsLoading(true)
          try {
            await result
          } catch {
            // Avoid bubbling async handler rejections from a design-system component.
          } finally {
            setIsLoading(false)
          }
        }
      } catch {
        // Avoid bubbling sync exceptions from a design-system component.
      }
    }, [onPress, isDisabled])

    useEffect(() => {
      if (!isBusy) {
        cancelAnimation(spinnerRotation)
        spinnerRotation.value = 0
        return
      }

      spinnerRotation.value = 0
      spinnerRotation.value = withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    }, [isBusy, spinnerRotation])

    const handlePressIn = useCallback(() => {
      if (!isDisabled) {
        setIsPressed(true)
      }
    }, [isDisabled])

    const handlePressOut = useCallback(() => {
      setIsPressed(false)
    }, [])

    const baseClassName = useMemo(
      () =>
        cn(
          buttonVariants({
            variant,
            size,
            disabled: isDisabled,
            round: isRound,
          }),
          getButtonPadding(size, !!icon, hideLabel, isRound, iconPosition)
        ),
      [variant, size, isDisabled, isRound, icon, hideLabel, iconPosition]
    )

    const accessibilityLabel = useMemo(() => {
      const parts = [label]
      if (isDisabled) parts.push("disabled")
      if (isBusy) parts.push("loading")
      return parts.join(", ")
    }, [label, isBusy, isDisabled])

    const shouldShowPressed = isPressed && !isDisabled

    const isDarkGhost = isDark && variant === "ghost"

    const className = shouldShowPressed
      ? cn(baseClassName, pressedVariants({ variant, isDark: isDarkGhost }))
      : baseClassName

    const iconIsOnly = isRound || (hideLabel && !emoji)
    const iconColor = icon
      ? iconIsOnly
        ? getIconOnlyColor(variant, shouldShowPressed, isDark)
        : getIconColor(variant, shouldShowPressed, isDark)
      : undefined
    const textColor = getTextColor(variant, shouldShowPressed, isDark)
    const forwardedProps = omitProps(rest, F0_BUTTON_BLOCKED_FORWARD_PROPS)
    const loadingIndicatorStyle = useAnimatedStyle(() => {
      return {
        borderTopColor: "transparent",
        transform: [{ rotateZ: `${spinnerRotation.value * 360}deg` }],
      }
    })

    return (
      <View className={`flex ${fullWidth ? "w-full" : "items-start"}`}>
        <PressableFeedback
          ref={ref}
          {...forwardedProps}
          disabled={isDisabled}
          variant={feedback}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="button"
          accessibilityState={{
            disabled: isDisabled,
            busy: isBusy,
          }}
          accessibilityHint={accessibilityHint}
          testID={testID}
        >
          <View className={cn("relative", className)}>
            <View
              testID="f0-button-content"
              className={loadingContentVariants({ loading: isBusy })}
            >
              <View className="flex-row items-center justify-center gap-1">
                {icon && iconPosition === "left" && (
                  <F0Icon icon={icon} size="lg" color={iconColor} />
                )}
                {emoji && (
                  <F0Text variant="body-md-medium" color={textColor}>
                    {emoji}
                  </F0Text>
                )}
                {!hideLabel && (
                  <F0Text variant="body-md-medium" color={textColor}>
                    {label}
                  </F0Text>
                )}
                {icon && iconPosition === "right" && (
                  <F0Icon icon={icon} size="lg" color={iconColor} />
                )}
              </View>
            </View>
            {isBusy && (
              <View
                pointerEvents="none"
                className="absolute inset-0 items-center justify-center"
              >
                <Animated.View
                  testID="f0-button-loading-indicator"
                  accessibilityLabel="Loading indicator"
                  className={loadingIndicatorVariants({
                    variant,
                    size,
                    isDark: isDarkGhost,
                  })}
                  style={loadingIndicatorStyle}
                />
              </View>
            )}
          </View>
        </PressableFeedback>
        {showBadge && variant === "outline" && (
          <View
            accessibilityLabel="Notification Badge"
            className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-f0-icon-accent"
          />
        )}
      </View>
    )
  })
)

F0Button.displayName = "F0Button"

export { F0Button }
