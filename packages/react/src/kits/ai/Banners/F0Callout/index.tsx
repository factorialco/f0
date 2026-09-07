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

/**
 * @deprecated Use `F0AiCallout` instead.
 *
 * `F0AiCallout` is the same construction — tinted container, white card, action
 * row — brought in line with the design, and it fixes two things this one gets
 * wrong: `critical` renders with no icon and an uncoloured title (the strongest
 * status is the only one that isn't signalled), and the `ai` variant stacks a
 * gradient on top of a semantic colour, which is two signals for one message.
 * It also makes attribution structural: the byline is always rendered, so the
 * callout can never fail to say where it came from.
 *
 * Migration:
 * - `variant` → `status`; `variant="ai"` becomes `status="neutral"`, which
 *   requires an `icon` because `neutral` has no glyph of its own
 * - `children` unchanged
 * - `actions: [a, b]` → `action` plus `secondaryAction`, and only when the
 *   second is the way out of the first rather than a third path
 * - the byline is not a prop: every `F0AiCallout` renders it
 */
export const F0Callout = withSkeleton(
  withDataTestId(F0CalloutBase),
  F0CalloutSkeleton
)
