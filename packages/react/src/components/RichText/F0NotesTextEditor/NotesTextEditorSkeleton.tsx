import { ScrollArea } from "@/ui/scrollarea"
import { Skeleton } from "@/ui/skeleton"

import type { NotesTextEditorSkeletonProps } from "./types"

export const F0NotesTextEditorSkeleton = ({
  withHeader = false,
  withTitle = true,
  withToolbar = true,
}: NotesTextEditorSkeletonProps) => {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      aria-busy="true"
      aria-live="polite"
    >
      {withHeader && (
        <div className="flex items-center justify-between border-b border-f1-border px-6 py-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-16 rounded-md" />
            <Skeleton className="h-8 w-12 rounded-md" />
          </div>
        </div>
      )}

      {withToolbar && (
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md">
          <Skeleton className="h-8 w-8 rounded" />
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      )}
      <ScrollArea className="h-full gap-6">
        {withTitle && (
          <div className="mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5">
            <Skeleton className="h-8 w-80 rounded-md" />
          </div>
        )}

        <div className="h-full">
          <div className="pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-4/5 rounded-md" />
              <Skeleton className="h-5 w-3/5 rounded-md" />
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
