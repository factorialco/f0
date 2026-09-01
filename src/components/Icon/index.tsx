import React, { forwardRef } from "react"
import { Svg, SvgProps } from "react-native-svg"
import { tv, type VariantProps } from "tailwind-variants"

import { cn } from "../../lib/utils"
import { applyIconInterop, type IconType } from "../primitives/F0Icon"

const iconVariants = tv({
  base: "shrink-0",
  variants: {
    size: {
      xl: "w-8 h-8 stroke-xl",
      lg: "w-6 h-6 stroke-lg",
      md: "w-5 h-5 stroke-md",
      sm: "w-4 h-4 stroke-sm",
      xs: "w-3 h-3 stroke-xs",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

/**
 * @deprecated Use `F0IconProps` from `../primitives/F0Icon` instead.
 * Migration: Replace `IconProps` with `F0IconProps`.
 * `F0Icon` supports `icon`, `size`, `testID`, and `className`, and adds semantic `color` variants.
 */
export interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
  icon: IconType
  testID?: string
  className?: string
  variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote"
  isPressed?: boolean
}

/**
 * @deprecated Use F0Icon instead. This component will be removed in a future version.
 * Migration: Replace <Icon icon={X} /> with <F0Icon icon={X} />.
 * F0Icon supports the same `icon`, `size`, `testID`, and `className` props, plus semantic `color` variants.
 */
export const Icon = forwardRef<Svg, IconProps>(function Icon(
  { size = "md", icon, className, testID, ...props },
  ref
) {
  if (!icon) return null

  // Apply UniWind interop to the icon if not already applied
  const Component = applyIconInterop(icon)

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(iconVariants({ size }), className)}
      testID={testID}
    />
  )
})
