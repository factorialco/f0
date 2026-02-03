import { cva, type VariantProps } from "cva"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Icon, IconType } from "../../../components/F0Icon"

const badgeVariants = cva({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f1-icon",
      highlight: "text-f1-special-highlight",
      positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
      critical: "bg-f1-icon-critical text-f1-foreground-inverse",
      warning: "bg-f1-background-warning-bold text-f1-foreground-inverse",
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
  type?: VariantProps<typeof badgeVariants>["type"]
  size?: keyof typeof iconSizes
}

const _Badge = ({ type, size = "md", icon }: BadgeProps) => {
  return (
    <div className={badgeVariants({ type, size })}>
      <F0Icon icon={icon} size={iconSizes[size]} />
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Badge = withDataTestId(experimentalComponent("Badge", _Badge))
