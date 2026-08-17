import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"

import { AiBannerInternal, AiBannerSkeleton } from "./AiBannerInternal"
import { AiBannerInternalProps, AiBannerSkeletonProps } from "./types"

export type F0AiBannerProps = AiBannerInternalProps

const F0AiBannerBase = forwardRef<HTMLDivElement, F0AiBannerProps>(
  (props, ref) => {
    return <AiBannerInternal ref={ref} {...props} />
  }
)

const F0AiBannerSkeleton = ({ compact }: AiBannerSkeletonProps) => {
  return <AiBannerSkeleton compact={compact} />
}

F0AiBannerBase.displayName = "F0AiBanner"

export const F0AiBanner = withSkeleton(
  withDataTestId(F0AiBannerBase),
  F0AiBannerSkeleton
)
