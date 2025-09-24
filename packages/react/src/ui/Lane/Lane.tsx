import { Spinner } from "@/experimental/Information/Spinner"
import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/hooks/useInfiniteScrollPagination"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import type { RecordType } from "@/hooks/datasource"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { LaneHeader } from "./components/LaneHeader"
import { LoadingSkeleton } from "./components/LoadingSkeleton"
import { LaneProps } from "./types"

const DEFAULT_MAX_LANE_HEIGHT = 600

export function Lane<Record extends RecordType>({
  title,
  items,
  renderCard,
  getKey,
  emptyState,
  fetchMore,
  maxHeight = DEFAULT_MAX_LANE_HEIGHT,
  variant = "neutral",
  loading = false,
  hasMore = false,
  loadingMore = false,
  total,
}: LaneProps<Record>) {
  // Create pagination info for infinite scroll
  const paginationInfo = {
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore,
    total: items.length + (hasMore ? 1 : 0),
    perPage: 3,
  }

  // Use the infinite scroll hook
  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    loading,
    loadingMore,
    fetchMore ?? (() => {})
  )

  return (
    <div
      className={`shadow-sm flex w-[323.2px] flex-col`}
      style={{
        maxHeight: `${maxHeight}px`,
      }}
    >
      <LaneHeader
        label={title || "Lane"}
        variant={variant}
        count={total ?? items.length}
      />

      <div className="flex min-h-0 flex-1 flex-col px-1 pb-1">
        {loading ? (
          <ScrollArea
            className={cn(
              "relative h-auto flex-1 rounded-lg",
              loading && "select-none opacity-50 transition-opacity"
            )}
          >
            <LoadingSkeleton />
            <AnimatePresence>
              <motion.div
                className="absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Spinner />
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        ) : items.length === 0 ? (
          emptyState
        ) : (
          <>
            <ScrollArea className="h-auto flex-1">
              <div
                className={cn(
                  loadingMore && "select-none opacity-50 transition-opacity"
                )}
                aria-live={loadingMore ? "polite" : undefined}
                aria-busy={loadingMore ? "true" : undefined}
              >
                {items.map((record, index) => {
                  const key = getKey(record, index)
                  return (
                    <React.Fragment key={key}>
                      {renderCard(record, index)}
                    </React.Fragment>
                  )
                })}
                {(loadingMore || hasMore) && (
                  <LoadingSkeleton ref={loadingIndicatorRef} />
                )}
              </div>
            </ScrollArea>
            {loadingMore && (
              <AnimatePresence>
                <motion.div
                  className="absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Spinner />
                </motion.div>
              </AnimatePresence>
            )}
          </>
        )}
      </div>
    </div>
  )
}
