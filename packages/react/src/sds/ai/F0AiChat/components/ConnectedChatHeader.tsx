import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { useCallback, useMemo, useState } from "react"

import { F0AiChatHeader } from "../../F0AiChatHeader"

import { filterNonRenderableMessages } from "../internal-types"
import { useAiChat } from "../providers/AiChatStateProvider"

import { ConnectedChatHistory } from "./ConnectedChatHistory"

/**
 * Internal wrapper mounted as the CopilotSidebar `Header` slot. Bridges
 * `useAiChat()` + CopilotKit context to the headless F0AiChatHeader and
 * mounts the ConnectedChatHistory dialog when the user opens it.
 *
 * Accepts CopilotKit's `HeaderProps` to keep the slot contract intact;
 * the headless component itself never sees them.
 */
export const ConnectedChatHeader = (_props: HeaderProps) => {
  const { labels } = useChatContext()
  const { messages } = useCopilotChatInternal()
  const {
    historyEnabled,
    setOpen,
    clear,
    loadThread,
    currentThreadTitle,
    visualizationMode,
    setVisualizationMode,
    lockVisualizationMode,
    tracking,
    credits,
  } = useAiChat()
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const fullscreen = visualizationMode === "fullscreen"

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const hasMessages = filteredMessages.length > 0
  // CopilotKit defaults `labels.title` to "CopilotKit" when no host title
  // is provided. Treat that as "no title" to avoid leaking the upstream
  // placeholder into our header.
  const title = labels.title === "CopilotKit" ? undefined : labels.title

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

  const handleSelectThread = useCallback(
    (threadId: string, title: string) => {
      loadThread(threadId, title)
    },
    [loadThread]
  )

  const handleHistoryNewChat = useCallback(() => {
    tracking?.onNewChat?.()
    clear()
  }, [tracking, clear])

  return (
    <>
      <F0AiChatHeader
        historyEnabled={historyEnabled}
        title={title}
        currentThreadTitle={currentThreadTitle}
        fullscreen={fullscreen}
        lockVisualizationMode={lockVisualizationMode}
        onToggleVisualizationMode={handleToggleVisualizationMode}
        onClose={handleClose}
        onNewChat={handleNewChat}
        onOpenHistory={() => setIsHistoryOpen(true)}
        hasMessages={hasMessages}
        credits={credits}
      />
      {isHistoryOpen && historyEnabled && (
        <ConnectedChatHistory
          onClose={() => setIsHistoryOpen(false)}
          onSelectThread={handleSelectThread}
          onNewChat={handleHistoryNewChat}
        />
      )}
    </>
  )
}
