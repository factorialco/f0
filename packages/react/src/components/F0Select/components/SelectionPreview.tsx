"use client"

import { useEffect, useRef } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { CrossedCircle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { Spinner } from "@/ui/Spinner"

import type { F0SelectItemObject } from "../types"

interface SelectionPreviewProps<T extends string> {
  items: F0SelectItemObject<T>[]
  onDeselect: (value: string) => void
  allSelected?: boolean | "indeterminate"
  onLoadMore?: () => void
  isLoadingMore?: boolean
}

const SCROLL_BOTTOM_MARGIN = 10

function PreviewItem<T extends string>({
  item,
  onDeselect,
}: {
  item: F0SelectItemObject<T>
  onDeselect: (value: string) => void
}) {
  return (
    <div className="flex w-fit max-w-full min-w-0 items-center justify-between gap-1.5 rounded-md border border-solid border-f1-border-secondary p-1">
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
        {item.icon && (
          <F0Icon
            icon={item.icon}
            size="sm"
            className="shrink-0 text-f1-icon"
          />
        )}
        <OneEllipsis className="text-sm">{item.label}</OneEllipsis>
      </div>
      <button
        className={cn(
          "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0",
          focusRing()
        )}
        aria-label={`Remove ${item.label}`}
        type="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onDeselect(String(item.value))
        }}
      >
        <F0Icon icon={CrossedCircle} color="default" size="md" />
      </button>
    </div>
  )
}

export function SelectionPreview<T extends string>({
  items,
  onDeselect,
  allSelected,
  onLoadMore,
  isLoadingMore,
}: SelectionPreviewProps<T>) {
  const i18n = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)

  const needsPagination =
    (allSelected === true || allSelected === "indeterminate") && !!onLoadMore

  const isEmpty = items.length === 0

  const handleScrollBottom = () => {
    if (needsPagination && !isLoadingMore) {
      onLoadMore?.()
    }
  }

  // Radix Select may intercept wheel/touch events on its Content.
  // We use bubble-phase native listeners on this container so the event
  // first reaches the ScrollArea Viewport (enabling scroll), then we
  // stop propagation on the way back up to prevent the Select from
  // interfering.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const stop = (e: Event) => e.stopPropagation()

    el.addEventListener("wheel", stop)
    el.addEventListener("touchmove", stop)

    return () => {
      el.removeEventListener("wheel", stop)
      el.removeEventListener("touchmove", stop)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex w-48 shrink-0 flex-col overflow-hidden border-0 border-l border-solid border-f1-border-secondary"
    >
      {isEmpty ? (
        <div className="flex flex-1 items-center justify-center p-4">
          <span className="text-sm text-f1-foreground-secondary">
            {i18n.status.noItemsSelected}
          </span>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <ScrollArea
            className="flex h-full flex-col"
            onScrollBottom={handleScrollBottom}
            scrollMargin={SCROLL_BOTTOM_MARGIN}
          >
            <div className="flex flex-col gap-1 p-2">
              {items.map((item) => (
                <PreviewItem
                  key={String(item.value)}
                  item={item}
                  onDeselect={onDeselect}
                />
              ))}
              {isLoadingMore && (
                <div className="flex items-center justify-center py-2">
                  <Spinner size="small" />
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  )
}
