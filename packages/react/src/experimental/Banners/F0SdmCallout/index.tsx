import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { SdmCalloutInternal, SdmCalloutSkeleton } from "./SdmCalloutInternal"
import { SdmCalloutInternalProps, SdmCalloutSkeletonProps } from "./types"

export type F0SdmCalloutProps = SdmCalloutInternalProps

const F0SdmCalloutBase = forwardRef<HTMLDivElement, F0SdmCalloutProps>(
  (props, ref) => {
    return <SdmCalloutInternal ref={ref} {...props} />
  }
)

const F0SdmCalloutSkeleton = ({
  compact,
  variant,
}: SdmCalloutSkeletonProps) => {
  return <SdmCalloutSkeleton compact={compact} variant={variant} />
}

F0SdmCalloutBase.displayName = "F0SdmCallout"

export const F0SdmCallout = withSkeleton(F0SdmCalloutBase, F0SdmCalloutSkeleton)
