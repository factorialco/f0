import type { DashboardItemBadge as DashboardItemBadgeMetadata } from "../../types"

import { cn, focusRing } from "@/lib/utils"

const badgeClassName =
  "inline-flex max-w-40 shrink-0 items-center truncate rounded-sm border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-0.5 text-sm font-medium text-f1-foreground-secondary"

export function DashboardItemBadge({
  badge,
}: {
  badge?: DashboardItemBadgeMetadata
}) {
  if (!badge) return null

  if (badge.onClick) {
    return (
      <button
        type="button"
        aria-label={badge.accessibilityLabel}
        className={cn(
          badgeClassName,
          "cursor-pointer hover:bg-f1-background-secondary-hover",
          focusRing()
        )}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={badge.onClick}
      >
        {badge.label}
      </button>
    )
  }

  const hasDistinctAccessibleLabel =
    badge.accessibilityLabel.trim() !== badge.label.trim()

  return (
    <span className={badgeClassName}>
      <span aria-hidden={hasDistinctAccessibleLabel || undefined}>
        {badge.label}
      </span>
      {hasDistinctAccessibleLabel && (
        <span className="sr-only">{badge.accessibilityLabel}</span>
      )}
    </span>
  )
}
