import { tv } from "tailwind-variants"

/**
 * F0Icon tailwind-variants configuration
 * Implements icon size variants from the design system
 */
export const iconVariants = tv({
  base: "shrink-0",

  variants: {
    // Icon size variants
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
