import { cva } from "cva"
import { useRef } from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { Placeholder } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import type { F0AlertProps } from "./types"

const alertVariants = cva({
  base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
  variants: {
    variant: {
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
      neutral: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const titleVariants = cva({
  base: "font-medium",
  variants: {
    variant: {
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      neutral: "text-f1-foreground",
      positive: "text-f1-foreground-positive",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const _F0Alert = ({
  title,
  description,
  action,
  link,
  icon,
  variant = "neutral",
}: F0AlertProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="@container">
      <div className={alertVariants({ variant })}>
        <div
          className={cn(
            "flex flex-col items-start gap-3 @sm:flex-row @sm:items-center @sm:justify-between"
          )}
        >
          <div className="flex flex-row gap-2">
            <div className="h-6 w-6 flex-shrink-0">
              {variant === "neutral" ? (
                <F0AvatarIcon icon={icon || Placeholder} size="sm" />
              ) : (
                <F0AvatarAlert type={variant} size="sm" />
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className={titleVariants({ variant })}>{title}</p>
              <p className="text-base text-f1-foreground-secondary">
                {description}
              </p>
            </div>
          </div>
          {(action || link) && (
            <div
              className={cn(
                "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @sm:pl-0"
              )}
            >
              {link && (
                <F0Link
                  href={link.href}
                  target="_blank"
                  variant="link"
                  size="sm"
                >
                  {link.label}
                </F0Link>
              )}
              {action && (
                <F0Button
                  label={action.label}
                  variant="outline"
                  onClick={action.onClick}
                  size="sm"
                  disabled={action.disabled}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const F0Alert = withDataTestId(_F0Alert)
