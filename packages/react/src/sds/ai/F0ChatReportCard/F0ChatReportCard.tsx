import { useSyncExternalStore } from "react"

import { F0Card } from "@/components/F0Card"
import { BarGraph } from "@/icons/app"

import { savedDashboardConfigStore } from "../F0AiChat/providers/savedDashboardConfigStore"
import type { ChatDashboardConfig } from "../F0ChatDashboard/types"

import type { F0ChatReportCardProps } from "./types"

function countItemsByType(items: ChatDashboardConfig["items"]): string {
  const counts: Record<string, number> = {}
  for (const item of items) {
    counts[item.type] = (counts[item.type] ?? 0) + 1
  }

  const parts: string[] = []
  if (counts.chart)
    parts.push(`${counts.chart} chart${counts.chart > 1 ? "s" : ""}`)
  if (counts.metric)
    parts.push(`${counts.metric} metric${counts.metric > 1 ? "s" : ""}`)
  if (counts.collection)
    parts.push(`${counts.collection} table${counts.collection > 1 ? "s" : ""}`)
  return parts.join(", ")
}

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

  const config =
    (toolCallId ? savedDashboardConfigStore.get(toolCallId) : undefined) ??
    originalConfig

  const { title, description, items } = config
  const summary = countItemsByType(items)

  return (
    <F0Card
      avatar={{ type: "icon", icon: BarGraph }}
      title={title}
      description={description}
      metadata={
        summary
          ? [
              {
                icon: BarGraph,
                property: { type: "text" as const, value: summary },
              },
            ]
          : undefined
      }
      onClick={() => onView(config)}
    />
  )
}

F0ChatReportCard.displayName = "F0ChatReportCard"
