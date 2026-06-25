import { type ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

/** One placeholder run: incoming rows show an avatar, mine align right. */
const SkeletonRun = ({
  mine,
  widths,
}: {
  mine: boolean
  widths: string[]
}): ReactNode => (
  <div
    className={cn("flex w-full items-end gap-2", mine && "flex-row-reverse")}
  >
    {!mine && <Skeleton className="size-6 shrink-0 rounded-full" />}
    <div
      className={cn("flex flex-col gap-1", mine ? "items-end" : "items-start")}
    >
      {widths.map((w, i) => (
        <Skeleton key={i} className={cn("h-8 rounded-2xl", w)} />
      ))}
    </div>
  </div>
)

/**
 * First-load placeholder for the transcript — bubble-shaped, alternating
 * sides, with avatars on incoming rows. Replaces the connecting spinner; on
 * re-entry the runtime is cached so this never shows.
 */
export const ChatMessageSkeleton = (): ReactNode => (
  <div
    aria-hidden
    className="mx-auto flex w-full max-w-content flex-col gap-6 px-4 pt-4"
  >
    <SkeletonRun mine={false} widths={["w-48", "w-32"]} />
    <SkeletonRun mine widths={["w-56"]} />
    <SkeletonRun mine={false} widths={["w-40"]} />
    <SkeletonRun mine widths={["w-44", "w-28"]} />
    <SkeletonRun mine={false} widths={["w-52", "w-36"]} />
    <SkeletonRun mine widths={["w-36"]} />
    <SkeletonRun mine={false} widths={["w-44"]} />
  </div>
)
