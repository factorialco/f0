import { useSyncExternalStore } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { ChatDashboardConfig } from "./types"

import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"
import {
  savedDashboardConfigStore,
  savedDashboardMetaStore,
} from "./configStore"

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
 * from the action arguments. The meta store overrides props after
 * save/create operations so close/re-open preserves the latest state.
 */
export function DashboardCard({
  config: originalConfig,
  apiConfig,
  savedDashboardId: propSavedId,
  savedDashboardCategory: propSavedCategory,
  savedDashboardDescription: propSavedDescription,
  savedDashboardUnsaved: propSavedUnsaved = false,
}: DashboardCardProps) {
  useSyncExternalStore(
    savedDashboardConfigStore.subscribe,
    savedDashboardConfigStore.getSnapshot
  )
  useSyncExternalStore(
    savedDashboardMetaStore.subscribe,
    savedDashboardMetaStore.getSnapshot
  )

  const translations = useI18n()
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const config =
    (toolCallId ? savedDashboardConfigStore.get(toolCallId) : undefined) ??
    originalConfig

  // Read saved metadata from the meta store (updated by handleSave/handleSaveAs),
  // falling back to the props from the original action render.
  const meta = toolCallId ? savedDashboardMetaStore.get(toolCallId) : undefined
  const savedDashboardId = meta?.savedDashboardId ?? propSavedId
  const savedDashboardCategory =
    meta?.savedDashboardCategory ?? propSavedCategory
  const savedDashboardDescription =
    meta?.savedDashboardDescription ?? propSavedDescription
  const savedDashboardUnsaved = meta?.savedDashboardUnsaved ?? propSavedUnsaved

  const isActive =
    canvasContent?.type === "dashboard" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

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
      savedDashboardUnsaved,
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
