import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"

import { CalloutInternal, CalloutSkeleton } from "./CalloutInternal"
import { CalloutInternalProps, CalloutSkeletonProps } from "./types"

export type F0CalloutProps = CalloutInternalProps

const F0CalloutBase = forwardRef<HTMLDivElement, F0CalloutProps>(
  (props, ref) => {
    return <CalloutInternal ref={ref} {...props} />
  }
)

const F0CalloutSkeleton = ({ compact, variant }: CalloutSkeletonProps) => {
  return <CalloutSkeleton compact={compact} variant={variant} />
}

F0CalloutBase.displayName = "F0Callout"

export const F0Callout = withSkeleton(
  withDataTestId(F0CalloutBase),
  F0CalloutSkeleton
)
