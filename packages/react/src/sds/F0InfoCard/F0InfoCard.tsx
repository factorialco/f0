import { cva } from "cva"

import { F0Icon } from "@/components/F0Icon"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import type { F0InfoCardProps } from "./types"

const cardVariants = cva({
  base: "w-full rounded-md p-3 text-f1-foreground",
  variants: {
    variant: {
      neutral: "bg-f1-background-tertiary",
      info: "bg-f1-background-info",
      positive: "bg-f1-background-positive",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const iconVariants = cva({
  base: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm",
  variants: {
    variant: {
      neutral: "bg-f1-background text-f1-icon",
      info: "bg-f1-background text-f1-icon-info",
      positive: "bg-f1-background text-f1-icon-positive",
      warning: "bg-f1-background text-f1-icon-warning",
      critical: "bg-f1-background text-f1-icon-critical",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const primaryTextVariants = cva({
  base: "font-medium",
  variants: {
    variant: {
      neutral: "text-f1-foreground",
      info: "text-f1-foreground-info",
      positive: "text-f1-foreground-positive",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const _F0InfoCard = ({ title, body, variant = "neutral" }: F0InfoCardProps) => {
  return (
    <div className={cardVariants({ variant })} role="group">
      <div className="flex flex-row items-start gap-2">
        <div className={iconVariants({ variant })}>
          <F0Icon icon={title.icon} size="sm" aria-hidden />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className={primaryTextVariants({ variant })}>{title.primary}</p>
          {title.secondary && (
            <p className="text-base text-f1-foreground-secondary">
              {title.secondary}
            </p>
          )}
        </div>
      </div>
      {body !== undefined && body !== null && (
        <div className={cn("mt-3 overflow-hidden rounded-sm bg-f1-background")}>
          {body}
        </div>
      )}
    </div>
  )
}

export const F0InfoCard = withDataTestId(_F0InfoCard)
