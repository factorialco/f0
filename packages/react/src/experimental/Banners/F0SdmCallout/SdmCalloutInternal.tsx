import { Button } from "@/components/Actions/Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { RichTextDisplay } from "@/experimental/RichText/RichTextDisplay"
import { CheckDouble, Cross, InfoCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { cva } from "cva"
import { forwardRef } from "react"
import { SdmCalloutInternalProps, SdmCalloutSkeletonProps } from "./types"

const sdmCalloutVariants = cva({
  base: "flex w-full flex-col rounded-lg p-[1px]",
  variants: {
    variant: {
      default:
        "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
      critical: "bg-f1-background-critical",
      positive: "bg-f1-background-positive",
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const variantIcons: Record<string, IconType> = {
  positive: CheckDouble, // Using CheckDouble as the primary action icon for positive
  warning: Warning,
  info: InfoCircle,
}

const variantIconColors: Record<string, string> = {
  positive: "hsl(var(--positive-70))",
  warning: "hsl(var(--warning-70))",
  info: "hsl(var(--info-70))",
}

const variantTitleColors: Record<string, string> = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium",
}

export const SdmCalloutInternal = forwardRef<
  HTMLDivElement,
  SdmCalloutInternalProps
>(function SdmCalloutInternal(
  {
    title,
    onClose,
    content,
    primaryAction,
    secondaryAction,
    variant = "default",
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={sdmCalloutVariants({ variant })}
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
          <OneEllipsis className={variantTitleColors[variant] || "font-medium"}>
            {title}
          </OneEllipsis>
        </div>
        {onClose && (
          <Button
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
            secondaryAction || primaryAction
              ? "rounded-t-[13.25px]"
              : "rounded-[13.25px]"
          )}
        >
          <RichTextDisplay content={content} />
        </div>
        {(secondaryAction || primaryAction) && (
          <div className="flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3">
            <div>
              {secondaryAction && (
                <Button
                  label={secondaryAction.label}
                  onClick={secondaryAction.onClick}
                  variant="outline"
                  icon={secondaryAction.icon}
                />
              )}
            </div>
            <div>
              {primaryAction && (
                <Button
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
})

export const SdmCalloutSkeleton = ({
  compact,
  variant = "default",
}: SdmCalloutSkeletonProps) => {
  return (
    <div
      className={sdmCalloutVariants({ variant })}
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
