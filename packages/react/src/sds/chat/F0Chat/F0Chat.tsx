import { type DragEvent, type ReactNode, useRef, useState } from "react"

import { ChatComposer } from "./components/ChatComposer"
import { ChatDropOverlay } from "./components/ChatDropOverlay"
import { ChatHeader } from "./components/ChatHeader"
import { ChatImagePreview } from "./components/ChatImagePreview"
import { ChatMessagesContainer } from "./components/ChatMessagesContainer"
import {
  ChatConnecting,
  ChatEmptyState,
  ChatError,
} from "./components/ChatStates"
import { ChatUIProvider, useChatUI } from "./providers/ChatUIProvider"
import { useF0Chat } from "./providers/F0ChatProvider"

export type F0ChatProps = {
  /** Whether the hosting panel is in fullscreen (controls the header toggle icon). */
  isFullscreen?: boolean
  /** Toggle the hosting panel's fullscreen. Hidden when omitted. */
  onToggleFullscreen?: () => void
  /** Close the hosting panel. Hidden when omitted. */
  onClose?: () => void
}

const isFileDrag = (e: DragEvent) => e.dataTransfer?.types?.includes("Files")

const ChatShell = ({
  isFullscreen,
  onToggleFullscreen,
  onClose,
}: F0ChatProps): ReactNode => {
  const { channel, status, messages } = useF0Chat()
  const { dropFiles } = useChatUI()

  // Whole-panel drag & drop, just like the AI chat: the overlay covers the
  // entire surface and a drop anywhere attaches to the composer. Stop file-drag
  // events so the AI chat's SidebarWindow (our host) doesn't hijack them.
  const dragDepth = useRef(0)
  const [dragging, setDragging] = useState(false)

  return (
    <div
      className="relative flex h-full min-h-0 w-full flex-col"
      onDragEnter={(e) => {
        if (!isFileDrag(e)) return
        e.preventDefault()
        e.stopPropagation()
        dragDepth.current++
        setDragging(true)
      }}
      onDragOver={(e) => {
        if (!isFileDrag(e)) return
        e.preventDefault()
        e.stopPropagation()
      }}
      onDragLeave={(e) => {
        if (!isFileDrag(e)) return
        e.preventDefault()
        e.stopPropagation()
        dragDepth.current--
        if (dragDepth.current <= 0) {
          dragDepth.current = 0
          setDragging(false)
        }
      }}
      onDrop={(e) => {
        if (!isFileDrag(e)) return
        e.preventDefault()
        e.stopPropagation()
        dragDepth.current = 0
        setDragging(false)
        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) dropFiles(files)
      }}
    >
      <ChatHeader
        channel={channel}
        isFullscreen={isFullscreen}
        onToggleFullscreen={onToggleFullscreen}
        onClose={onClose}
      />
      {status === "connecting" ? (
        <ChatConnecting />
      ) : status === "error" ? (
        <ChatError />
      ) : messages.length === 0 ? (
        <ChatEmptyState />
      ) : (
        <ChatMessagesContainer />
      )}
      <ChatComposer />
      <ChatDropOverlay visible={dragging} />
      <ChatImagePreview />
    </div>
  )
}

/**
 * Headless chat surface — header, transcript and composer — driven entirely by
 * the {@link F0ChatRuntime} from a surrounding `F0ChatProvider`. Panel controls
 * (fullscreen / close) are wired by the host so F0Chat stays transport-agnostic.
 */
export const F0Chat = (props: F0ChatProps): ReactNode => (
  <ChatUIProvider>
    <ChatShell {...props} />
  </ChatUIProvider>
)
