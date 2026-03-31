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
}

/**
 * Dashboard-specific card that wraps CanvasCard with config-store
 * subscription logic. Re-renders when the user edits and saves
 * the dashboard layout.
 *
 * Reads `toolCallId` from the ToolCallIdContext provided by
 * AssistantMessage — this is how cards identify themselves and
 * detect active state after CopilotKit v1.51+ stopped passing
 * toolCallId in render props.
 */
export function DashboardCard({
  config: originalConfig,
  apiConfig,
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

  const handleOpen = () =>
    openCanvas({
      type: "dashboard",
      title: config.title,
      config,
      apiConfig,
      toolCallId,
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
