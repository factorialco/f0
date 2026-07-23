import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

/** Cycled row widths so the placeholder titles look like natural conversations. */
const ROW_WIDTHS = ["w-3/5", "w-4/5", "w-2/5", "w-3/4", "w-1/2", "w-2/3"]

/**
 * A single title-only row, matching `ThreadItem`'s height and paddings. Off
 * hover the real row shows just its title (date + actions are hover-only), so
 * the skeleton is a single bar with no trailing element.
 */
const SkeletonRow = ({ width }: { width: string }) => (
  <div className="flex items-center py-1.5 pl-1.5 pr-2">
    <Skeleton className={cn("h-4 rounded", width)} />
  </div>
)

/** A group: a short collapsible-section title + a few rows. */
const SkeletonGroup = ({
  titleWidth,
  rows,
}: {
  titleWidth: string
  rows: string[]
}) => (
  <div className="flex flex-col gap-0.5">
    <div className="flex items-center p-1.5">
      <Skeleton className={cn("h-3 rounded", titleWidth)} />
    </div>
    {rows.map((width, index) => (
      <SkeletonRow key={index} width={width} />
    ))}
  </div>
)

/**
 * Loading placeholder for the chat-history thread list. Mirrors the real
 * layout: a couple of collapsible groups, each with a short title and a few
 * title-only rows of varying width (no avatar or trailing actions — those only
 * appear on hover).
 */
export function ThreadListSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      <SkeletonGroup titleWidth="w-12" rows={ROW_WIDTHS.slice(0, 2)} />
      <SkeletonGroup titleWidth="w-24" rows={ROW_WIDTHS} />
    </div>
  )
}
