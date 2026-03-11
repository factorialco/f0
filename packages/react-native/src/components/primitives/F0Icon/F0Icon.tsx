import React, { useMemo } from "react"
import type { Svg } from "react-native-svg"
import { withUniwind } from "uniwind"

import { cn } from "../../../lib/utils"

import { iconVariants } from "./F0Icon.styles"
import type { F0IconProps, IconType } from "./F0Icon.types"

// Cache original icon -> wrapped icon so withUniwind is only applied once per icon type
const interopCache = new WeakMap<IconType, IconType>()

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
 * @example
 * import { Archive } from '@/icons/app';
 *
 * <F0Icon icon={Archive} size="lg" />
 * <F0Icon icon={Archive} color="critical" />
 * <F0Icon icon={Archive} size="sm" color="positive" />
 */
const F0Icon = React.memo(
  React.forwardRef<Svg, F0IconProps>(
    (
      { size = "md", color, icon, testID, className: customClassName, ...rest },
      ref
    ) => {
      const IconComponent = useMemo(
        () => (icon ? applyIconInterop(icon) : null),
        [icon]
      )

      const className = useMemo(
        () => cn(iconVariants({ size, color }), customClassName),
        [size, color, customClassName]
      )

      // Early return if no icon provided (after all hooks)
      if (!icon || !IconComponent) return null

      return (
        <IconComponent
          ref={ref}
          className={className}
          testID={testID}
          {...rest}
        />
      )
    }
  )
)

F0Icon.displayName = "F0Icon"

export default F0Icon
