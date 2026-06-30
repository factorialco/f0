import React, { useMemo } from "react"
import type { Svg } from "react-native-svg"
import { withUniwind } from "uniwind"

import { cn, omitProps } from "../../../lib/utils"

import { iconVariants } from "./F0Icon.styles"
import {
  F0_ICON_BLOCKED_FORWARD_PROPS,
  type F0IconProps,
  type IconType,
} from "./F0Icon.types"

// Cache original icon -> wrapped icon so withUniwind is only applied once per icon type
const interopCache = new WeakMap<IconType, IconType>()

function stripTextClasses(className?: string): string | undefined {
  if (!className) return className

  const filteredClassName = className
    .split(/\s+/)
    .filter(Boolean)
    .filter((classToken) => !classToken.startsWith("text-"))
    .join(" ")

  return filteredClassName || undefined
}

/**
 * Applies UniWind interop to an icon component
 * Ensures withUniwind is only applied once per icon type
 * @internal
 */
export function applyIconInterop(icon: IconType): IconType {
  let wrapped = interopCache.get(icon)
  if (!wrapped) {
    wrapped = withUniwind(icon) as IconType
    interopCache.set(icon, wrapped)
  }
  return wrapped
}

/**
 * F0Icon - Icon component for the F0 Design System
 *
 * Renders SVG icons with consistent sizing and semantic colors.
 * Icons are automatically wrapped with UniWind for className support.
 *
 * Prefer the semantic `color` prop for design-system colors.
 * Use `tintColor` only when the color is determined at runtime
 * (e.g. backend-driven widget colors).
 *
 * @example
 * import { Archive } from '@/icons/app';
 *
 * <F0Icon icon={Archive} size="lg" />
 * <F0Icon icon={Archive} color="critical" />
 * <F0Icon icon={Archive} tintColor="#FF355E" />
 */
const F0Icon = React.memo(
  React.forwardRef<Svg, F0IconProps>(
    (
      {
        size = "md",
        color,
        tintColor,
        icon,
        testID,
        className: customClassName,
        ...rest
      },
      ref
    ) => {
      const IconComponent = useMemo(
        () => (icon ? applyIconInterop(icon) : null),
        [icon]
      )

      // When tintColor is set, skip the semantic color variant so it doesn't
      // compete with the native SVG color prop.
      const className = useMemo(
        () =>
          cn(
            iconVariants({
              size,
              color: tintColor != null ? undefined : color,
            }),
            tintColor != null
              ? stripTextClasses(customClassName)
              : customClassName
          ),
        [size, color, tintColor, customClassName]
      )

      const forwardedProps = omitProps(rest, F0_ICON_BLOCKED_FORWARD_PROPS)

      // Early return if no icon provided (after all hooks)
      if (!icon || !IconComponent) return null

      return (
        <IconComponent
          ref={ref}
          {...forwardedProps}
          className={className}
          testID={testID}
          // tintColor sets the native SVG `color` prop, which react-native-svg
          // uses as the resolved value for `currentColor` in fill/stroke attrs.
          {...(tintColor != null ? { color: tintColor } : {})}
        />
      )
    }
  )
)

F0Icon.displayName = "F0Icon"

export default F0Icon
