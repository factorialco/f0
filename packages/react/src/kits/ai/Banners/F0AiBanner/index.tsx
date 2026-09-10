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

/**
 * @deprecated Use `F0AiCallout` instead.
 *
 * It carries no status, so it cannot say how much a message matters, and it
 * signals "this came from AI" with a gradient instead — two signals for one
 * message, drawn from raw hex rather than tokens, so it cannot follow a theme.
 * Its two actions are both outlined, which reads as two peers where there is
 * really a recommendation and a way out of it.
 *
 * `F0AiCallout` says where the message came from in words, in every shape, and
 * `status="neutral"` is the rung for exactly this case: AI output with nothing
 * to decide.
 *
 * @removeIn 7.0.0
 * @migration `title` unchanged. `content` becomes `children` and takes nodes
 * rather than a string. Add `status="neutral"` with an `icon` that describes
 * the content (e.g. `Summary` from `@/icons/ai`) — `neutral` has no glyph of
 * its own. `primaryAction` becomes `action` and `secondaryAction` stays, but
 * only when it is the way out of the first rather than a second peer.
 * `F0AiBanner.Skeleton` becomes `F0AiCallout.Skeleton`.
 */
export const F0AiBanner = withSkeleton(
  withDataTestId(F0AiBannerBase),
  F0AiBannerSkeleton
)
