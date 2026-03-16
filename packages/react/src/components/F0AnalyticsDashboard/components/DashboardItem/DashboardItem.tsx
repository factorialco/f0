import type { ReactNode } from "react"

import { OneEllipsis } from "@/components/OneEllipsis"
import { OneEmptyState } from "@/experimental/OneEmptyState"

interface DashboardItemProps {
  title: string
  description?: string
  isLoading: boolean
  error?: Error
  onRetry?: () => void
  /** Content-area skeleton shown while loading. Each item type provides its own. */
  skeleton?: ReactNode
  children: ReactNode
}

/**
 * Visual wrapper for a single dashboard widget.
 *
 * Always renders the real header (title + description) since those are
 * known from config. When loading, the content area shows the `skeleton`
 * prop instead of `children`. This eliminates layout shift and lets each
 * item type provide a skeleton that matches its content shape.
 */
export function DashboardItem({
  title,
  description,
  isLoading,
  error,
  onRetry,
  skeleton,
  children,
}: DashboardItemProps) {
  if (error) {
    return (
      <div className="flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary">
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-semibold text-f1-foreground">{title}</h3>
          {description && (
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          )}
        </div>
        <OneEmptyState
          variant="critical"
          title="Error loading data"
          description={error.message}
          actions={
            onRetry
              ? [{ type: "default", label: "Retry", onClick: onRetry }]
              : []
          }
        />
      </div>
    )
  }

  return (
    <div
      className="flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary"
      aria-busy={isLoading ? "true" : undefined}
      aria-live={isLoading ? "polite" : undefined}
    >
      <div className="flex flex-col p-4">
        <OneEllipsis
          tag="h3"
          className="text-lg font-semibold text-f1-foreground"
        >
          {title}
        </OneEllipsis>
        {description && (
          <OneEllipsis className="text-base text-f1-foreground-secondary">
            {description}
          </OneEllipsis>
        )}
      </div>
      <div className="min-h-0 flex-1">{isLoading ? skeleton : children}</div>
    </div>
  )
}
