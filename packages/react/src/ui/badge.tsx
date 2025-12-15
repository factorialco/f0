import { cva, type VariantProps } from "cva"
import * as React from "react"

import { cn, focusRing } from "../lib/utils"

const badgeVariants = cva({
  base: cn(
    "text inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-f1-special-ring focus:ring-offset-2",
    focusRing()
  ),
  variants: {
    variant: {
      default: "border-f1-border bg-transparent text-f1-foreground",
      neutral: "border-transparent bg-f1-background-secondary text-f1-foreground",
      critical: "border-transparent bg-f1-background-critical text-f1-foreground-critical",
      positive: "border-transparent bg-f1-background-positive text-f1-foreground-positive",
      warning: "border-transparent bg-f1-background-warning text-f1-foreground-warning",
      info: "border-transparent bg-f1-background-info text-f1-foreground-info",
      name: "border-f1-border bg-f1-background-secondary text-sm font-medium text-f1-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
} as const)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
