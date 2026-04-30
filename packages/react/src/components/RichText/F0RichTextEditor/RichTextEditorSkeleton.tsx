import { Skeleton } from "@/ui/skeleton"

import type { RichTextEditorSkeletonProps } from "./types"

const STATIC_WIDTH_PATTERN = ["75%", "100%", "60%", "85%", "70%"]

export const F0RichTextEditorSkeleton = ({
  rows = 2,
}: RichTextEditorSkeletonProps) => {
  const widths = Array.from(
    { length: rows },
    (_, i) => STATIC_WIDTH_PATTERN[i % STATIC_WIDTH_PATTERN.length]
  )

  return (
    <div className="relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background">
      <div className="relative w-full flex-grow overflow-hidden">
        <div className="h-auto w-full pl-3 pr-4 pt-3">
          <div className="flex flex-col gap-2">
            {widths.map((width, index) => (
              <Skeleton key={index} className="h-4" style={{ width }} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
