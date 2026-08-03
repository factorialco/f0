import { useCallback, useMemo, useState } from "react"

import { F0AiChatHeader } from "../../../F0AiChatHeader"
import { F0AiChatHistory, useChatHistory } from "../../../F0AiChatHistory"
import { useAiChat } from "../../providers/AiChatStateProvider"

import { useMockAiChatRuntime } from "./MockAiChatRuntime"
import { filterNonRenderableMessages } from "./turn-utils"

/**
 * Storybook-only Connected chat header. Wires `F0AiChatHeader` to the
 * mock runtime (clear, history load) and to the f0 UI provider (open /
 * visualization mode toggles).
 *
 * When `historyEnabled` is true on the provider, mounts the
 * `F0AiChatHistory` dialog backed by the mock runtime's in-memory
 * threads. Selecting a thread swaps the message list to that thread's
 * canned snapshot (`mock.loadThread(id, title)`).
 */
export const MockConnectedChatHeader = ({
  compact = false,
}: {
  /** Minimal header (expand + close only) — used when a sidebar owns chat nav. */
  compact?: boolean
} = {}) => {
  const {
    messages,
    clear,
    currentThreadTitle,
    fetchThreads,
    deleteThread,
    loadThread,
    runBeforeClose,
  } = useMockAiChatRuntime()
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
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const fullscreen = visualizationMode === "fullscreen"

  const filteredMessages = useMemo(
    () => filterNonRenderableMessages(messages),
    [messages]
  )
  const hasMessages = filteredMessages.length > 0

  const handleClose = useCallback(async () => {
    // Let a registered guard veto the close BEFORE any docking animation runs,
    // so e.g. a "Leave creation?" confirmation can gate it (see `setBeforeClose`).
    const proceed = await runBeforeClose()
    if (!proceed) return
    if (fullscreen) {
      setVisualizationMode("sidepanel")
      setTimeout(() => setOpen(false), 200)
    } else {
      setOpen(false)
    }
    tracking?.onClose?.()
  }, [fullscreen, setVisualizationMode, setOpen, tracking, runBeforeClose])

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
    (threadId: string, threadTitle: string) => {
      loadThread(threadId, threadTitle)
    },
    [loadThread]
  )

  return (
    <>
      <F0AiChatHeader
        compact={compact}
        historyEnabled={historyEnabled}
        currentThreadTitle={currentThreadTitle}
        fullscreen={fullscreen}
        lockVisualizationMode={lockVisualizationMode}
        onToggleVisualizationMode={handleToggleVisualizationMode}
        onClose={handleClose}
        onNewChat={handleNewChat}
        onOpenHistory={() => setIsHistoryOpen(true)}
        hasMessages={hasMessages}
        credits={credits}
        employeeCredits={employeeCredits}
      />
      {isHistoryOpen && historyEnabled && (
        <MockChatHistoryDialog
          fetchThreads={fetchThreads}
          deleteThread={deleteThread}
          onClose={() => setIsHistoryOpen(false)}
          onSelectThread={handleSelectThread}
          onNewChat={handleNewChat}
        />
      )}
    </>
  )
}

type MockChatHistoryDialogProps = {
  fetchThreads: ReturnType<typeof useMockAiChatRuntime>["fetchThreads"]
  deleteThread: ReturnType<typeof useMockAiChatRuntime>["deleteThread"]
  onClose: () => void
  onSelectThread: (id: string, title: string) => void
  onNewChat: () => void
}

const MockChatHistoryDialog = ({
  fetchThreads,
  deleteThread,
  onClose,
  onSelectThread,
  onNewChat,
}: MockChatHistoryDialogProps) => {
  const {
    threads,
    isLoading,
    error,
    pinnedIds,
    pinThread,
    unpinThread,
    deleteThread: handleDeleteThread,
  } = useChatHistory({ enabled: true, fetchThreads, deleteThread })

  const handleSelectThread = useCallback(
    (id: string, title: string) => {
      onSelectThread(id, title)
      onClose()
    },
    [onSelectThread, onClose]
  )

  const handleNewChat = useCallback(() => {
    onNewChat()
    onClose()
  }, [onNewChat, onClose])

  return (
    <F0AiChatHistory
      onClose={onClose}
      onSelectThread={handleSelectThread}
      onNewChat={handleNewChat}
      threads={threads}
      isLoading={isLoading}
      error={error}
      pinnedIds={pinnedIds}
      onPinThread={pinThread}
      onUnpinThread={unpinThread}
      onDeleteThread={handleDeleteThread}
    />
  )
}
