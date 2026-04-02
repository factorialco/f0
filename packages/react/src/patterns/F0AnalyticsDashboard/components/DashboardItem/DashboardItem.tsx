import { useState, type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { OneEllipsis } from "@/lib/OneEllipsis"
import {
  Dropdown,
  type DropdownItem as DropdownItemType,
} from "@/experimental/Navigation/Dropdown"
import { OneEmptyState } from "@/experimental/OneEmptyState"
import { Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

interface DashboardItemProps {
  title: string
  description?: string
  isLoading: boolean
  error?: Error
  onRetry?: () => void
  /** Content-area skeleton shown while loading. Each item type provides its own. */
  skeleton?: ReactNode
  children: ReactNode
  /** Dropdown actions for edit capabilities (reorder, resize, delete) */
  actions?: DropdownItemType[]
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
  actions,
}: DashboardItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const translations = useI18n()
  if (error) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary">
        <div className="flex shrink-0 flex-col p-4">
          <h3 className="text-lg font-semibold text-f1-foreground">{title}</h3>
          {description && (
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          )}
        </div>
        <div className="min-h-0 flex-1 overflow-auto">
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
      </div>
    )
  }

  return (
    <div
      className="group/dashitem flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background"
      aria-busy={isLoading ? "true" : undefined}
      aria-live={isLoading ? "polite" : undefined}
    >
      <div className="flex items-start px-4 py-3">
        <div className="flex min-w-0 flex-1 flex-col">
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
        {actions && actions.length > 0 && (
          <div
            className={`flex-shrink-0 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover/dashitem:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover/dashitem:sm:opacity-100 ${isDropdownOpen ? "delay-0 sm:opacity-100" : ""}`}
          >
            <Dropdown
              items={actions}
              open={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
            >
              <ButtonInternal
                label={translations.actions.other}
                icon={Ellipsis}
                variant="ghost"
                size="md"
                hideLabel
                pressed={isDropdownOpen}
                compact
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              />
            </Dropdown>
          </div>
        )}
      </div>
      <div className="min-h-0 flex-1">{isLoading ? skeleton : children}</div>
    </div>
  )
}
