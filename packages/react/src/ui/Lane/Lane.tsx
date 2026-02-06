import { AnimatePresence, motion } from "motion/react";
import React from "react";

import type { RecordType } from "@/hooks/datasource";

import { ButtonInternal } from "@/components/F0Button/internal";
import { F0Card } from "@/components/F0Card";
import { Spinner } from "@/ui/Spinner";
import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/hooks/useInfiniteScrollPagination";
import { ScrollArea } from "@/experimental/Utilities/ScrollArea";
import { Plus } from "@/icons/app";
import { cn } from "@/lib/utils";

import { LaneHeader } from "./components/LaneHeader";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { LaneProps } from "./types";

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
  dropPlaceholderIndex,
}: LaneProps<Record>) {
  // Create pagination info for infinite scroll
  const paginationInfo = {
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore,
    total: items.length + (hasMore ? 1 : 0),
    perPage: 3,
  };

  // Use the infinite scroll hook
  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    loading,
    loadingMore,
    fetchMore ?? (() => {}),
  );

  const showFooterAction = Boolean(onFooterAction);

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
          (showFooterAction || items.length === 0) && "pb-11",
          !showFooterAction &&
            items.length === 0 &&
            dropPlaceholderIndex !== undefined &&
            "pb-1",
        )}
      >
        {loading ? (
          <ScrollArea
            className={cn(
              "relative h-full flex-1 rounded-lg",
              loading && "select-none opacity-50 transition-opacity",
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
        ) : items.length === 0 && dropPlaceholderIndex === undefined ? (
          emptyState
        ) : (
          <>
            <ScrollArea className="relative h-full flex-1">
              <div
                className={cn(
                  "relative",
                  loadingMore && "select-none opacity-50 transition-opacity",
                )}
                aria-live={loadingMore ? "polite" : undefined}
                aria-busy={loadingMore ? "true" : undefined}
              >
                {items.length === 0 && dropPlaceholderIndex !== undefined ? (
                  <div className="relative my-1 mt-1.5">
                    <F0Card.Skeleton compact />
                  </div>
                ) : (
                  items.map((record, index) => {
                    const key = getKey(record, index);
                    return (
                      <React.Fragment key={key}>
                        {renderCard(record, index)}
                      </React.Fragment>
                    );
                  })
                )}
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
  );
}
