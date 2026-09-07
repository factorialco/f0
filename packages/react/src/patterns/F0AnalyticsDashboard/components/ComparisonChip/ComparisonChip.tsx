import type { TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"

import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { useI18n } from "@/lib/providers/i18n"

import type { DashboardCategoryComparison } from "../../types"

/** Category names by what happened to them; a category counts once. */
export interface ComparisonSummary {
  up: string[]
  down: string[]
  added: string[]
  removed: string[]
}

const GROUPS: (keyof ComparisonSummary)[] = ["up", "down", "added", "removed"]

const COUNT_KEYS: Record<keyof ComparisonSummary, TranslationKey> = {
  up: "ai.dashboardItem.comparison.countUp",
  down: "ai.dashboardItem.comparison.countDown",
  added: "ai.dashboardItem.comparison.countNew",
  removed: "ai.dashboardItem.comparison.countGone",
}

export function comparisonSummary(
  comparison: DashboardCategoryComparison | undefined
): ComparisonSummary | undefined {
  if (!comparison) return undefined
  const added = comparison.added ?? []
  const removed = comparison.removed ?? []
  const moved = Object.entries(comparison.byCategory).filter(
    ([name]) => !added.includes(name) && !removed.includes(name)
  )
  const summary = {
    up: moved.filter(([, t]) => t.direction === "up").map(([name]) => name),
    down: moved.filter(([, t]) => t.direction === "down").map(([name]) => name),
    added,
    removed,
  }
  return Object.values(summary).some((names) => names.length > 0)
    ? summary
    : undefined
}

/**
 * "3 up · 1 down · 2 new · 1 gone", the empty parts left out, with the names
 * behind each count on hover. A collection's rows are keyed by id rather than
 * name, so it turns the hover off and shows the counts alone.
 */
export function ComparisonChip({
  summary,
  names = true,
}: {
  summary?: ComparisonSummary
  names?: boolean
}) {
  const translations = useI18n()
  if (!summary) return null

  const parts = GROUPS.filter((key) => summary[key].length > 0).map((key) => ({
    title: translations.t(COUNT_KEYS[key], { count: summary[key].length }),
    description: summary[key].join(", "),
  }))

  const chip = (
    <span className="shrink-0 whitespace-nowrap rounded-xs bg-f1-background-secondary px-1.5 py-0.5 text-sm font-medium text-f1-foreground-secondary">
      {parts.map((part) => part.title).join(" · ")}
    </span>
  )

  return names ? <Tooltip items={parts}>{chip}</Tooltip> : chip
}
