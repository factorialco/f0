import { useCallback, useMemo } from "react"

import { F0AiChatHeader } from "../../../F0AiChatHeader"
import { filterNonRenderableMessages } from "../../internal-types"
import { useAiChat } from "../../providers/AiChatStateProvider"

import { useMockAiChatRuntime } from "./MockAiChatRuntime"

/**
 * Storybook-only Connected chat header. Wires `F0AiChatHeader` to the
 * mock runtime (for `clear()`) and to the f0 UI provider (for open /
 * visualization mode toggles).
 */
export const MockConnectedChatHeader = () => {
  const { messages, clear } = useMockAiChatRuntime()
  const {
    historyEnabled,
    setOpen,
    visualizationMode,
    setVisualizationMode,
    lockVisualizationMode,
    tracking,
    credits,
    employeeCredits,
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const hasMessages = filteredMessages.length > 0

  const handleClose = useCallback(() => {
    if (fullscreen) {
      setVisualizationMode("sidepanel")
      setTimeout(() => setOpen(false), 200)
    } else {
      setOpen(false)
    }
    tracking?.onClose?.()
  }, [fullscreen, setVisualizationMode, setOpen, tracking])

  const handleToggleVisualizationMode = useCallback(() => {
    setVisualizationMode((prev) =>
      prev === "fullscreen" ? "sidepanel" : "fullscreen"
    )
  }, [setVisualizationMode])

  const handleNewChat = useCallback(() => {
    tracking?.onNewChat?.()
    clear()
  }, [tracking, clear])

  return (
    <F0AiChatHeader
      historyEnabled={historyEnabled}
      fullscreen={fullscreen}
      lockVisualizationMode={lockVisualizationMode}
      onToggleVisualizationMode={handleToggleVisualizationMode}
      onClose={handleClose}
      onNewChat={handleNewChat}
      hasMessages={hasMessages}
      credits={credits}
      employeeCredits={employeeCredits}
    />
  )
}
