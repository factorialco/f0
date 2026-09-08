import React from "react"
import { Text as RNText } from "react-native"
import Animated from "react-native-reanimated"

import { cn } from "../../../../lib/utils"
import { textVariants } from "../F0Text/F0Text.styles"

import type { AnimatedF0TextProps } from "./AnimatedF0Text.types"

const AnimatedText = Animated.createAnimatedComponent(RNText)

/**
 * AnimatedF0Text - Animated text primitive with semantic typography variants
 *
 * Uses Reanimated's Animated.Text under the hood while sharing the same
 * typography system as F0Text. Supports `entering`, `exiting`, `layout`
 * animations and animated `style` props.
 *
 * Typography is controlled by semantic props and always takes precedence.
 * `className` is accepted for layout/positioning (margin, padding, flex, etc.).
 * `style` is accepted for Reanimated animated values.
 *
 * @example
 * <AnimatedF0Text variant="heading-xl" entering={FadeIn.duration(300)}>
 *   Welcome back
 * </AnimatedF0Text>
 * <AnimatedF0Text variant="body-sm-default" className="mt-4 flex-1" style={animatedStyle}>
 *   Positioned animated text
 * </AnimatedF0Text>
 */
const AnimatedF0TextComponent = React.forwardRef<
  React.ComponentRef<typeof AnimatedText>,
  AnimatedF0TextProps
>(
  (
    {
      variant = "body-sm-default",
      color = "default",
      align = "left",
      decoration = "none",
      transform = "none",
      className,
      children,
      numberOfLines,
      style,
      ...rest
    },
    ref
  ) => {
    const textClassName = React.useMemo(
      () =>
        cn(
          className,
          textVariants({
            variant,
            color,
            align,
            decoration,
            transform,
          })
        ),
      [variant, color, align, decoration, transform, className]
    )

    return (
      <AnimatedText
        ref={ref}
        {...rest}
        className={textClassName}
        style={style}
        numberOfLines={numberOfLines}
        ellipsizeMode={numberOfLines ? "tail" : undefined}
      >
        {children}
      </AnimatedText>
    )
  }
)

AnimatedF0TextComponent.displayName = "AnimatedF0Text"

export const AnimatedF0Text = React.memo(AnimatedF0TextComponent)

export type { AnimatedF0TextProps }
