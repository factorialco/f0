import React from "react"
import { Text as RNText } from "react-native"

import { omitProps } from "../../../lib/utils"

import { textVariants } from "./F0Text.styles"
import { F0_TEXT_BANNED_PROPS, type F0TextProps } from "./F0Text.types"

/**
 * F0Text - Primitive Text component with semantic typography variants
 *
 * @example
 * <F0Text variant="heading-lg">Large Heading</F0Text>
 * <F0Text variant="body-sm-default" color="secondary">Secondary text</F0Text>
 * <F0Text variant="body-md-medium" numberOfLines={2}>Truncated text...</F0Text>
 */
const F0TextComponent = React.forwardRef<RNText, F0TextProps>(
  (
    {
      variant = "body-sm-default",
      color = "default",
      align = "left",
      decoration = "none",
      transform = "none",
      children,
      numberOfLines,
      ...rest
    },
    ref
  ) => {
    const textClassName = React.useMemo(
      () =>
        textVariants({
          variant,
          color,
          align,
          decoration,
          transform,
        }),
      [variant, color, align, decoration, transform]
    )

    return (
      <RNText
        ref={ref}
        {...omitProps(rest, F0_TEXT_BANNED_PROPS)}
        className={textClassName}
        numberOfLines={numberOfLines}
        ellipsizeMode={numberOfLines ? "tail" : undefined}
      >
        {children}
      </RNText>
    )
  }
)

F0TextComponent.displayName = "F0Text"

export const F0Text = React.memo(F0TextComponent)

// Export types
export type { F0TextProps }
export {
  TYPOGRAPHY_VARIANTS,
  TEXT_COLORS,
  TEXT_ALIGN,
  TEXT_DECORATIONS,
  TEXT_TRANSFORMS,
} from "./F0Text.types"
export type {
  TypographyVariant,
  TextColor,
  TextAlign,
  TextDecoration,
  TextTransform,
} from "./F0Text.types"
