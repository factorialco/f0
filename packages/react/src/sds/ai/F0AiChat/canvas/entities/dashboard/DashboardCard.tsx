import { useSyncExternalStore } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { ChatDashboardConfig } from "../../../../F0ChatDashboard/types"

import { CanvasCard } from "../../components/CanvasCard"
import { savedDashboardConfigStore } from "./configStore"

export type DashboardCardProps = {
  /** The original dashboard config from the agent */
  config: ChatDashboardConfig
  /** Callback when the user clicks the card to view the report */
  onView: (config: ChatDashboardConfig) => void
  /** Tool call ID used to look up saved (edited) dashboard configs */
  toolCallId?: string
}

/**
 * Dashboard-specific card that wraps CanvasCard with config-store
 * subscription logic. Re-renders when the user edits and saves
 * the dashboard layout.
 */
export function DashboardCard({
  config: originalConfig,
  onView,
  toolCallId,
}: DashboardCardProps) {
  useSyncExternalStore(
    savedDashboardConfigStore.subscribe,
    savedDashboardConfigStore.getSnapshot
  )

  const translations = useI18n()

  const config =
    (toolCallId ? savedDashboardConfigStore.get(toolCallId) : undefined) ??
    originalConfig

  return (
    <CanvasCard
      module="analytics"
      title={config.title}
      description={translations.ai.reportCard.reportLabel}
      onOpen={() => onView(config)}
    />
  )
}

DashboardCard.displayName = "DashboardCard"
