import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { CheckDouble, Cross, InfoCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { cva } from "cva"
import { forwardRef } from "react"
import { CalloutInternalProps, CalloutSkeletonProps } from "./types"

const calloutVariants = cva({
  base: "flex w-full flex-col rounded-lg p-[1px]",
  variants: {
    variant: {
      ai: "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
      critical: "bg-f1-background-critical",
      positive: "bg-f1-background-positive",
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
    },
  },
  defaultVariants: {
    variant: "ai",
  },
})

const variantIcons: Record<string, IconType> = {
  positive: CheckDouble, // Using CheckDouble as the primary action icon for positive
  warning: Warning,
  info: InfoCircle,
}

const variantTitleColors: Record<string, string> = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium",
}

export const CalloutInternal = forwardRef<HTMLDivElement, CalloutInternalProps>(
  function CalloutInternal(
    { title, onClose, children, actions = [], variant },
    ref
  ) {
    // Validate actions limit
    if (actions.length > 2) {
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${actions.length} actions were provided.`
      )
    }

    const hasActions = actions.length > 0
    return (
      <div
        ref={ref}
        className={calloutVariants({ variant })}
        data-testid="sdm-callout"
      >
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div
            className={cn(
              "flex flex-row items-center gap-2",
              variantTitleColors[variant]
            )}
          >
            {variantIcons[variant] && (
              <F0Icon icon={variantIcons[variant]} size="sm" aria-hidden />
            )}
            <OneEllipsis
              className={variantTitleColors[variant] || "font-medium"}
            >
              {title}
            </OneEllipsis>
          </div>
          {onClose && (
            <F0Button
              variant="ghost"
              icon={Cross}
              size="sm"
              hideLabel
              onClick={onClose}
              label="Close"
            />
          )}
        </div>

        <div className="flex flex-col gap-[1px]">
          <div
            className={cn(
              "bg-f1-background px-4 py-3",
              hasActions ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
            )}
          >
            {children}
          </div>
          {hasActions && (
            <div className="flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3">
              {actions.map((action, index) => (
                <div key={index}>
                  <F0Button
                    label={action.label}
                    onClick={action.onClick}
                    variant="outline"
                    icon={action.icon}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)

export const CalloutSkeleton = ({
  compact,
  variant = "ai",
}: CalloutSkeletonProps) => {
  return (
    <div
      className={calloutVariants({ variant })}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <Skeleton className="h-5 w-32 rounded-md" />
      </div>

      <div className="flex flex-col gap-[1px]">
        <div
          className={cn(
            "rounded-t-[13.25px] bg-f1-background px-4 py-3",
            compact && "rounded-[13.25px]"
          )}
        >
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
          </div>
        </div>
        {!compact && (
          <div className="flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-28 rounded-md" />
          </div>
        )}
      </div>
    </div>
  )
}
