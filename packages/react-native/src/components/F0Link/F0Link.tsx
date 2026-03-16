import React, { useCallback, useMemo, useState } from "react"
import { Linking, View, type GestureResponderEvent } from "react-native"

import { AppIcons } from "../../icons"
import { cn, omitProps } from "../../lib/utils"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text } from "../primitives/F0Text"
import { PressableFeedback } from "../primitives/PressableFeedback"

import {
  f0LinkContainerVariants,
  f0LinkUnderlineVariants,
  F0_LINK_UNDERLINE_STYLE,
  F0_LINK_ICON_COLOR_BY_STATE,
  F0_LINK_ICON_SIZE_BY_SIZE,
  F0_LINK_TEXT_COLOR_BY_STATE,
  F0_LINK_TEXT_VARIANT_BY_SIZE,
} from "./F0Link.styles"
import { F0_LINK_BLOCKED_FORWARD_PROPS, type F0LinkProps } from "./F0Link.types"

const { ExternalLink } = AppIcons

function getStringContent(value: React.ReactNode): string | undefined {
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  if (Array.isArray(value)) {
    const content = value
      .map((item) => getStringContent(item))
      .filter((item): item is string => Boolean(item))
      .join(" ")
      .trim()

    return content || undefined
  }
  return undefined
}

const F0Link = React.memo(
  React.forwardRef<View, F0LinkProps>(function F0Link(
    {
      children,
      variant = "link",
      size = "md",
      href,
      target,
      external = false,
      stopPropagation = false,
      disabled = false,
      numberOfLines = 1,
      onPress,
      onFocus,
      onBlur,
      accessibilityLabel,
      testID,
      ...rest
    },
    ref
  ) {
    const [isPressed, setIsPressed] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const textContent = useMemo(() => getStringContent(children), [children])

    const resolvedExternal = target === "_blank" ? true : external
    const shouldShowExternalIcon = resolvedExternal && variant === "link"

    const handlePress = useCallback(
      async (event: GestureResponderEvent) => {
        if (disabled) return

        if (stopPropagation) {
          event.stopPropagation()
        }

        try {
          if (onPress) {
            const result = onPress(event)

            if (result && typeof result.then === "function") {
              await result
            }
            return
          }

          if (href) {
            await Linking.openURL(href)
          }
        } catch {
          // Avoid bubbling async/sync navigation exceptions from a design-system component.
        }
      },
      [disabled, stopPropagation, onPress, href]
    )

    const handlePressIn = useCallback(() => {
      if (!disabled) {
        setIsPressed(true)
      }
    }, [disabled])

    const handlePressOut = useCallback(() => {
      setIsPressed(false)
    }, [])

    const handleFocus = useCallback(
      (event: Parameters<NonNullable<typeof onFocus>>[0]) => {
        setIsFocused(true)
        onFocus?.(event)
      },
      [onFocus]
    )

    const handleBlur = useCallback(
      (event: Parameters<NonNullable<typeof onBlur>>[0]) => {
        setIsFocused(false)
        onBlur?.(event)
      },
      [onBlur]
    )

    const forwardedProps = omitProps(rest, F0_LINK_BLOCKED_FORWARD_PROPS)

    const className = useMemo(
      () =>
        cn(
          f0LinkContainerVariants({
            variant,
            size,
            disabled,
            pressed: isPressed,
            focused: isFocused,
          })
        ),
      [variant, size, disabled, isPressed, isFocused]
    )

    const textVariant = F0_LINK_TEXT_VARIANT_BY_SIZE[size]
    const textColor = F0_LINK_TEXT_COLOR_BY_STATE(disabled)
    const iconColor = F0_LINK_ICON_COLOR_BY_STATE(disabled)
    const iconSize = F0_LINK_ICON_SIZE_BY_SIZE[size]
    const underlineClassName = f0LinkUnderlineVariants({
      disabled,
      pressed: isPressed,
      focused: isFocused,
    })

    const resolvedAccessibilityLabel =
      accessibilityLabel ?? textContent ?? href ?? "Link"

    return (
      <PressableFeedback
        ref={ref}
        {...forwardedProps}
        variant="none"
        disableAnimation
        className={className}
        disabled={disabled}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
        accessibilityRole="link"
        accessibilityState={{ disabled }}
        accessibilityLabel={resolvedAccessibilityLabel}
        testID={testID}
      >
        {variant === "link" ? (
          <View className={underlineClassName} style={F0_LINK_UNDERLINE_STYLE}>
            <F0Text
              variant={textVariant}
              color={textColor}
              numberOfLines={numberOfLines}
            >
              {children}
            </F0Text>
          </View>
        ) : (
          <F0Text
            variant={textVariant}
            color={textColor}
            numberOfLines={numberOfLines}
          >
            {children}
          </F0Text>
        )}
        {shouldShowExternalIcon && (
          <F0Icon icon={ExternalLink} size={iconSize} color={iconColor} />
        )}
      </PressableFeedback>
    )
  })
)

F0Link.displayName = "F0Link"

export { F0Link }
