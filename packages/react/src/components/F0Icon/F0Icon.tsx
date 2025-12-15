import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { f1Colors } from "@factorialco/f0-core"
import { cva, type VariantProps } from "cva"
import { forwardRef, ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"

const iconVariants = cva({
  base: "inline-block shrink-0",
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
      xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

/**
 * Utility type to extract all possible paths from nested object.
 * Generates hyphenated paths from nested object structure
 * Only includes parent key if it has a DEFAULT property
 */
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? K extends "DEFAULT"
      ? never
      : T[K] extends { DEFAULT: string }
        ? `${K}` | `${K}-${NestedKeyOf<T[K]>}`
        : `${K}-${NestedKeyOf<T[K]>}`
    : K extends "DEFAULT"
      ? never
      : `${K}`
}[keyof T & string]

export interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
  icon: IconType
  tooltip?: string
  size?: "lg" | "md" | "sm" | "xs"
  state?: "normal" | "animate"
  color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> &
    RefAttributes<SVGSVGElement> & {
      animate?: "normal" | "animate"
    }
>

const TooltipWrapper: React.FC<{
  tooltip?: string
  children: React.ReactNode
}> = ({ tooltip, children }) => {
  if (tooltip) {
    return (
      <TooltipInternal label={tooltip} instant>
        {children}
      </TooltipInternal>
    )
  }
  return children
}

export const F0Icon = forwardRef<SVGSVGElement, F0IconProps>(function F0Icon(
  { size, icon, state = "normal", color = "currentColor", tooltip, ...props },
  ref
) {
  if (!icon) return null
  const Component = icon
  const isAnimated = icon.displayName?.includes("Animated")

  const isHexColor = color.startsWith("#")

  const getColorClass = (colorValue: string) => {
    if (colorValue === "currentColor") return "text-current"
    if (colorValue === "default") return "text-f1-icon"
    if (colorValue.startsWith("#")) return ""
    return `text-f1-icon-${colorValue}`
  }

  const colorClass = getColorClass(color)
  const colorStyle = isHexColor ? { color } : undefined

  if (isAnimated) {
    return (
      <TooltipWrapper tooltip={tooltip}>
        <Component
          ref={ref}
          {...props}
          animate={state}
          className={cn(iconVariants({ size }), "select-none", colorClass)}
          style={colorStyle}
          data-has-color={color !== "currentColor" ? "true" : undefined}
        />
      </TooltipWrapper>
    )
  }

  return (
    <TooltipWrapper tooltip={tooltip}>
      <Component
        ref={ref}
        {...props}
        className={cn("aspect-square", iconVariants({ size }), colorClass)}
        style={colorStyle}
        data-has-color={color !== "currentColor" ? "true" : undefined}
      />
    </TooltipWrapper>
  )
})
