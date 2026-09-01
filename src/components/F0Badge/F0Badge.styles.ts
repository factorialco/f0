import { tv } from "tailwind-variants"

export const badgeVariantClasses = {
  neutral: "bg-transparent text-f0-icon",
  highlight: "text-f0-special-highlight",
  positive: "bg-f0-background-positive-bold text-f0-foreground-inverse",
  critical: "bg-f0-icon-critical text-f0-foreground-inverse",
  warning: "bg-f0-background-warning-bold text-f0-foreground-inverse",
} as const

export const badgeSizeClasses = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const

export const badgeVariants = tv({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    variant: badgeVariantClasses,
    size: badgeSizeClasses,
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
  },
})
