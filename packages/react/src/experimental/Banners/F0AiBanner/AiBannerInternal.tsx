import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { RichTextDisplay } from "@/experimental/RichText/RichTextDisplay"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef } from "react"
import { AiBannerInternalProps, AiBannerSkeletonProps } from "./types"

export const AiBannerInternal = forwardRef<HTMLDivElement, AiBannerInternalProps>(
  function AiBannerInternal({ title, onClose, content, primaryAction, secondaryAction }, ref) {
    return (
      <div
        ref={ref}
        className="flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]"
        data-testid="ai-banner"
      >
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <OneEllipsis className="font-medium">{title}</OneEllipsis>
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
              secondaryAction || primaryAction ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
            )}
          >
            <RichTextDisplay content={content} />
          </div>
          {(secondaryAction || primaryAction) && (
            <div className="flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3">
              <div>
                {secondaryAction && (
                  <F0Button
                    label={secondaryAction.label}
                    onClick={secondaryAction.onClick}
                    variant="outline"
                    icon={secondaryAction.icon}
                  />
                )}
              </div>
              <div>
                {primaryAction && (
                  <F0Button
                    label={primaryAction.label}
                    onClick={primaryAction.onClick}
                    variant="outline"
                    icon={primaryAction.icon}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

export const AiBannerSkeleton = ({ compact }: AiBannerSkeletonProps) => {
  return (
    <div
      className="flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]"
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
