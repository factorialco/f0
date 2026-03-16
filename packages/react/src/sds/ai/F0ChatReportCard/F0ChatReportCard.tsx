import { useSyncExternalStore } from "react"

import { F0AvatarModule } from "@/components/avatars/F0AvatarModule/F0AvatarModule"
import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

import type { F0ChatReportCardProps } from "./types"

import { savedDashboardConfigStore } from "../F0AiChat/providers/savedDashboardConfigStore"

/**
 * Compact card shown inline in the AI chat to represent a generated
 * dashboard report. Uses F0Card with an icon avatar, the dashboard
 * title/description, and an item summary in metadata. Clicking the
 * card triggers `onView` to open the canvas panel.
 *
 * Subscribes to the external `savedDashboardConfigStore` via
 * `useSyncExternalStore` so it re-renders when the user edits the
 * dashboard layout and saves — independently of React context.
 */
export function F0ChatReportCard({
  config: originalConfig,
  onView,
  toolCallId,
}: F0ChatReportCardProps) {
  // Subscribe to the external store — triggers re-render on every
  // savedDashboardConfigStore.set(), regardless of the React tree.
  useSyncExternalStore(
    savedDashboardConfigStore.subscribe,
    savedDashboardConfigStore.getSnapshot
  )

  const translations = useI18n()

  const config =
    (toolCallId ? savedDashboardConfigStore.get(toolCallId) : undefined) ??
    originalConfig

  const { title } = config
  return (
    <div className="flex flex-row items-center justify-between gap-3 rounded-lg border border-solid border-f1-border-secondary p-4">
      <div className="flex min-w-0 flex-row items-center gap-3">
        <F0AvatarModule module="analytics" size="lg" />
        <div className="flex min-w-0 flex-col">
          <OneEllipsis className="text-lg font-semibold text-f1-foreground">
            {title}
          </OneEllipsis>
          <OneEllipsis className="text-base text-f1-foreground-secondary">
            {translations.ai.reportCard.reportLabel}
          </OneEllipsis>
        </div>
      </div>
      <F0Button
        variant="neutral"
        size="md"
        label={translations.ai.reportCard.openButton}
        onClick={() => onView(config)}
      />
    </div>
  )
}

F0ChatReportCard.displayName = "F0ChatReportCard"
