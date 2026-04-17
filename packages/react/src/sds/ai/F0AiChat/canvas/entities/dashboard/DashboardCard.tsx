import { useSyncExternalStore } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { ChatDashboardConfig } from "./types"

import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"
import { savedDashboardConfigStore } from "./configStore"

export type DashboardCardProps = {
  /** The original dashboard config from the agent */
  config: ChatDashboardConfig
  /** API config for server-side dashboard computation */
  apiConfig: { baseUrl: string; headers: Record<string, string> }
  /** Present when the dashboard is a pre-saved dashboard */
  savedDashboardId?: string
  /** Category of the saved dashboard */
  savedDashboardCategory?: string
  /** Description of the saved dashboard */
  savedDashboardDescription?: string
  /** Whether the dashboard has unsaved changes */
  savedDashboardUnsaved?: boolean
}

/**
 * Dashboard-specific card that wraps CanvasCard with config-store
 * subscription logic. Re-renders when the user edits and saves
 * the dashboard layout.
 *
 * All saved-dashboard state (id, category, unsaved) is passed through
 * from the action arguments — no detection logic here.
 */
export function DashboardCard({
  config: originalConfig,
  apiConfig,
  savedDashboardId,
  savedDashboardCategory,
  savedDashboardDescription,
  savedDashboardUnsaved = false,
}: DashboardCardProps) {
  useSyncExternalStore(
    savedDashboardConfigStore.subscribe,
    savedDashboardConfigStore.getSnapshot
  )

  const translations = useI18n()
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const config =
    (toolCallId ? savedDashboardConfigStore.get(toolCallId) : undefined) ??
    originalConfig

  const isActive =
    canvasContent?.type === "dashboard" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  // Read the latest unsaved state from the canvas if this card is active.
  // handleSave sets savedDashboardUnsaved=false on the canvas content,
  // so re-opening after save correctly shows no pending changes.
  const unsaved = isActive
    ? (canvasContent.savedDashboardUnsaved ?? false)
    : savedDashboardUnsaved

  const handleOpen = () =>
    openCanvas({
      type: "dashboard",
      title: config.title,
      config,
      apiConfig,
      toolCallId,
      savedDashboardId,
      savedDashboardCategory,
      savedDashboardDescription,
      savedDashboardUnsaved: unsaved,
    })

  // Auto-open canvas the first time this card appears
  useAutoOpenCanvas(toolCallId, handleOpen)

  return (
    <CanvasCard
      module="analytics"
      title={config.title}
      description={translations.ai.reportCard.reportLabel}
      onOpen={handleOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
    />
  )
}

DashboardCard.displayName = "DashboardCard"
