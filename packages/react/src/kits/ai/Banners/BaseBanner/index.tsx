import { forwardRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import CrossIcon from "@/icons/app/Cross"
import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"

import {
  actionsVariants,
  bannerVariants,
  contentVariants,
  mediaVariants,
  subtitleVariants,
  textWrapperVariants,
  titleVariants,
  type BaseBannerVariant,
} from "./variants"

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
  variant?: BaseBannerVariant
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
      <div ref={ref} className={bannerVariants({ variant })}>
        {/* Media 16:9 */}
        <div className={mediaVariants({ variant })}>
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
        <div className={contentVariants({ variant })}>
          <div className={textWrapperVariants({ variant })}>
            <h3 className={titleVariants({ variant })}>{title}</h3>
            {subtitle && (
              <p className={subtitleVariants({ variant })}>{subtitle}</p>
            )}
          </div>

          {/* Actions */}
          <div className={actionsVariants({ variant })}>
            {primaryAction && (
              <F0Button
                onClick={primaryAction.onClick}
                label={primaryAction.label}
                variant={primaryAction.variant || "default"}
                size="md"
                icon={primaryAction.icon}
              />
            )}
            {secondaryAction && (
              <F0Button
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
            <F0Button
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

// Built from the same slots as the banner itself, so the two cannot drift. The
// variant is pinned to `default` for now, which is what the hard-coded classes
// resolved to — making it follow the banner's own variant is a behaviour change,
// not part of this refactor.
const SKELETON_VARIANT = "default" satisfies BaseBannerVariant

const BaseBannerSkeleton = forwardRef<HTMLDivElement>(
  function BaseBannerSkeleton(props, ref) {
    return (
      <div
        ref={ref}
        className={bannerVariants({ variant: SKELETON_VARIANT })}
        role="status"
        aria-busy="true"
        aria-live="polite"
        {...props}
      >
        <div className={mediaVariants({ variant: SKELETON_VARIANT })}>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>

        <div className={contentVariants({ variant: SKELETON_VARIANT })}>
          <div className={textWrapperVariants({ variant: SKELETON_VARIANT })}>
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className={actionsVariants({ variant: SKELETON_VARIANT })}>
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

export const BaseBanner = withDataTestId(
  withSkeleton(BaseBannerComponent, BaseBannerSkeleton)
)

BaseBanner.displayName = "BaseBanner"
