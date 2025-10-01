import { ButtonInternal } from "@/components/Actions/Button/internal"
import { Spinner } from "@/experimental/Information/Spinner"
import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/hooks/useInfiniteScrollPagination"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import type { RecordType } from "@/hooks/datasource"
import { Plus } from "@/icons/app"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { LaneHeader } from "./components/LaneHeader"
import { LoadingSkeleton } from "./components/LoadingSkeleton"
import { LaneProps } from "./types"

export function Lane<Record extends RecordType>({
  title,
  items,
  renderCard,
  getKey,
  emptyState,
  fetchMore,
  variant = "neutral",
  loading = false,
  hasMore = false,
  loadingMore = false,
  total,
  onPrimaryAction,
  onFooterAction,
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

  const showFooterAction = Boolean(onFooterAction)

  return (
    <div className="shadow-sm group relative flex h-full w-[323.2px] flex-col">
      <LaneHeader
        label={title || "Lane"}
        variant={variant}
        count={total ?? items.length}
        onPrimaryAction={onPrimaryAction}
      />

      <div
        className={cn(
          "relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1",
          showFooterAction && "pb-9"
        )}
      >
        {loading ? (
          <ScrollArea
            className={cn(
              "relative h-full flex-1 rounded-lg",
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
            <ScrollArea className="test12 relative h-full flex-1">
              <div
                className={cn(
                  "relative h-full",
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
      {showFooterAction && (
        <div className="pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          <ButtonInternal
            variant="ghost"
            size="md"
            className="w-full justify-center"
            icon={Plus}
            label="Add"
            hideLabel
            onClick={onFooterAction}
          />
        </div>
      )}
    </div>
  )
}
