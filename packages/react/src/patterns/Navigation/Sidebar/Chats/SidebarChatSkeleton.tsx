import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

/**
 * A single chat row rendered as a skeleton. Matches `SidebarChatItem`'s layout
 * and height (36px: a 24px avatar + the row's vertical padding) so the row
 * doesn't shift when the real data resolves. Used for the "cascade" case — a
 * known conversation whose name/avatar is still loading (`SidebarChat.loading`).
 */
export const SidebarChatItemSkeleton = ({
  className,
}: {
  className?: string
}) => (
  <div
    aria-hidden="true"
    className={cn("flex h-9 w-full items-center gap-2 pl-1.5 pr-2", className)}
  >
    <Skeleton className="h-6 w-6 flex-shrink-0 rounded-full" />
    <Skeleton className="h-3.5 flex-1 rounded" />
  </div>
)

/** A group-title row rendered as a skeleton (32px tall, matching the real one). */
const SidebarChatGroupTitleSkeleton = () => (
  <div aria-hidden="true" className="flex h-8 items-center px-1.5">
    <Skeleton className="h-3 w-24 rounded" />
  </div>
)

/**
 * Full-list skeleton shown while the conversations are still loading and the
 * groups aren't known yet. A few placeholder groups, each with a 32px title row
 * and some 36px chat rows.
 */
export const SidebarChatListSkeleton = ({
  groups = 2,
  rowsPerGroup = 4,
}: {
  /** Number of placeholder groups. @default 2 */
  groups?: number
  /** Placeholder rows per group. @default 4 */
  rowsPerGroup?: number
}) => (
  <div
    data-testid="sidebar-chat-list-skeleton"
    className="flex w-full flex-col gap-2"
  >
    {Array.from({ length: groups }).map((_, groupIndex) => (
      <div key={groupIndex} className="flex flex-col gap-0.5">
        <SidebarChatGroupTitleSkeleton />
        {Array.from({ length: rowsPerGroup }).map((_, rowIndex) => (
          <SidebarChatItemSkeleton key={rowIndex} />
        ))}
      </div>
    ))}
  </div>
)
