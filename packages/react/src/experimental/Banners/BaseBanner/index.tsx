import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import CrossIcon from "@/icons/app/Cross"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef, useState } from "react"

export type BannerAction = {
  label: string
  onClick: () => void
  variant?: "default" | "outline" | "ghost"
  icon?: IconType
}

export type BaseBannerProps = {
  title: string
  subtitle?: string
  mediaUrl: string
  primaryAction?: BannerAction
  secondaryAction?: BannerAction
  onClose?: () => void
  isLoading?: boolean
  children?: React.ReactNode
  variant?: "default" | "full-width"
}

const BaseBannerComponent = forwardRef<HTMLDivElement, BaseBannerProps>(
  function BaseBanner(
    {
      title,
      subtitle,
      mediaUrl,
      primaryAction,
      secondaryAction,
      onClose,
      isLoading = false,
      children,
      variant = "default",
    },
    ref
  ) {
    const isVideo = mediaUrl?.includes(".mp4")
    const [isDismissed, setIsDismissed] = useState(false)

    const handleClose = () => {
      if (onClose) {
        onClose()
      }
      setIsDismissed(true)
    }

    if (isLoading) {
      return <BaseBannerSkeleton ref={ref} />
    }

    return !isDismissed ? (
      <div
        ref={ref}
        className="bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5"
      >
        {/* Media 16:9 */}
        <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1">
          {isVideo ? (
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <img
              src={mediaUrl}
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3">
          <div
            className={cn(
              "flex w-full flex-col gap-1",
              variant === "default" ? "sm:max-w-lg" : undefined
            )}
          >
            <h3 className="font-bold text-xl text-f1-foreground">{title}</h3>
            {subtitle && (
              <p className="text-base text-f1-foreground-secondary">
                {subtitle}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {primaryAction && (
              <Button
                onClick={primaryAction.onClick}
                label={primaryAction.label}
                variant={primaryAction.variant || "default"}
                size="md"
                icon={primaryAction.icon}
              />
            )}
            {secondaryAction && (
              <Button
                onClick={secondaryAction.onClick}
                label={secondaryAction.label}
                variant={secondaryAction.variant || "outline"}
                size="md"
                icon={secondaryAction.icon}
              />
            )}
            {children}
          </div>
        </div>

        {/* Close button */}
        {onClose && (
          <div className="absolute right-2 top-2 z-10">
            <Button
              variant="ghost"
              icon={CrossIcon}
              size="sm"
              hideLabel
              onClick={handleClose}
              label="Close"
            />
          </div>
        )}
      </div>
    ) : null
  }
)

const BaseBannerSkeleton = forwardRef<HTMLDivElement>(
  function BaseBannerSkeleton(props, ref) {
    return (
      <div
        ref={ref}
        className="bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5"
        role="status"
        aria-busy="true"
        aria-live="polite"
        {...props}
      >
        <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>

        <div className="flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3">
          <div className="flex w-full flex-col gap-1 sm:max-w-lg">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
        <div className="absolute right-2 top-2 z-10">
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
    )
  }
)

export const BaseBanner = withSkeleton(BaseBannerComponent, BaseBannerSkeleton)

BaseBanner.displayName = "BaseBanner"
