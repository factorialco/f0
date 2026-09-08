import { forwardRef } from "react"
import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"
import { AiCalloutInternal } from "./AiCalloutInternal"
import { AiCalloutSkeleton } from "./AiCalloutSkeleton"
import type { AiCalloutSkeletonProps, F0AiCalloutProps } from "./types"

const F0AiCalloutBase = forwardRef<HTMLDivElement, F0AiCalloutProps>(
  (props, ref) => {
    return <AiCalloutInternal ref={ref} {...props} />
  }
)

const F0AiCalloutSkeleton = ({ status, compact }: AiCalloutSkeletonProps) => {
  return <AiCalloutSkeleton status={status} compact={compact} />
}

F0AiCalloutBase.displayName = "F0AiCallout"

export const F0AiCallout = withSkeleton(
  withDataTestId(F0AiCalloutBase),
  F0AiCalloutSkeleton
)

export type { F0AiCalloutProps }
export {
  aiCalloutStatuses,
  type AiCalloutAction,
  type AiCalloutFinding,
  type AiCalloutStatus,
} from "./types"
