import { F0Card } from "@/components/F0Card"
import { BarGraph } from "@/icons/app"

import type { F0ChatReportCardProps } from "./types"

function countItemsByType(
  items: F0ChatReportCardProps["config"]["items"]
): string {
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
 * title/description, an item summary in metadata, and a "View report"
 * primary action that opens the canvas panel.
 */
export function F0ChatReportCard({ config, onView }: F0ChatReportCardProps) {
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
