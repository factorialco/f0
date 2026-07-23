import { useEffect, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { PopoverContent } from "@/ui/popover"

import type { AudienceOptionItem } from "../internal-types"
import { AudienceOptionRow } from "./AudienceOptionRow"

type AudienceDropdownProps = {
  listboxId: string
  label: string
  items: AudienceOptionItem[]
  activeKey: string | null
  isLoading: boolean
  isLoadingMore: boolean
  hasMore: boolean
  loadMore: () => void
  emptyMessage: string
  onToggle: (item: AudienceOptionItem) => void
  onActivate: (item: AudienceOptionItem) => void
  onInteractOutside: React.ComponentProps<
    typeof PopoverContent
  >["onInteractOutside"]
}

export const AudienceDropdown = ({
  listboxId,
  label,
  items,
  activeKey,
  isLoading,
  isLoadingMore,
  hasMore,
  loadMore,
  emptyMessage,
  onToggle,
  onActivate,
  onInteractOutside,
}: AudienceDropdownProps) => {
  const i18n = useI18n()
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !isLoadingMore) {
        loadMore()
      }
    })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, isLoadingMore, loadMore])

  const showEmptyState = !isLoading && items.length === 0

  return (
    <PopoverContent
      align="start"
      sideOffset={4}
      className="max-h-80 w-[var(--radix-popover-trigger-width)] rounded-lg p-1 shadow-lg"
      // The input keeps focus: this is a combobox, not a menu
      onOpenAutoFocus={(event) => event.preventDefault()}
      onInteractOutside={onInteractOutside}
    >
      {/* Status messages live outside the listbox (which must contain only
          options) and in a live region so state changes are announced. */}
      <div role="status" aria-live="polite">
        {isLoading && items.length === 0 && (
          <div className="flex justify-center px-2 py-6 text-f1-foreground-secondary">
            {i18n.audience.selector.loading}
          </div>
        )}
        {showEmptyState && (
          <div className="flex justify-center px-2 py-6 text-f1-foreground-secondary">
            {emptyMessage}
          </div>
        )}
      </div>
      <div
        id={listboxId}
        role="listbox"
        aria-label={label}
        aria-multiselectable="true"
      >
        {items.map((item) => (
          <AudienceOptionRow
            key={item.key}
            item={item}
            active={item.key === activeKey}
            onToggle={onToggle}
            onActivate={onActivate}
          />
        ))}
      </div>
      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex justify-center px-2 py-2 text-f1-foreground-secondary"
        >
          {isLoadingMore ? i18n.audience.selector.loading : null}
        </div>
      )}
    </PopoverContent>
  )
}
