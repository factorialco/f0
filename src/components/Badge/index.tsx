import { tv, type VariantProps } from "tailwind-variants"

import { F0Icon, type IconType } from "../primitives/Icon"

const badgeVariants = tv({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f0-icon",
      highlight: "text-f0-special-highlight",
      positive: "bg-f0-background-positive-bold text-f0-foreground-inverse",
      critical: "bg-f0-icon-critical text-f0-foreground-inverse",
      warning: "bg-f0-background-warning-bold text-f0-foreground-inverse",
    },
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    type: "neutral",
    size: "md",
  },
})

const iconSizes = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  icon: IconType
  size?: keyof typeof iconSizes
}

export const Badge = ({ type, size = "md", icon }: BadgeProps) => {
  return (
    <F0Icon
      className={badgeVariants({ type, size })}
      icon={icon}
      size={iconSizes[size]}
    />
  )
}
