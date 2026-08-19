import { type DragEvent, type ReactNode, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"

import { ChatComposer } from "./components/ChatComposer"
import { ChatDocumentPreview } from "./components/ChatDocumentPreview"
import { ChatDropOverlay } from "./components/ChatDropOverlay"
import { ChatHeader } from "./components/ChatHeader"
import { ChatImagePreview } from "./components/ChatImagePreview"
import { ChatMessagesContainer } from "./components/ChatMessagesContainer"
import {
  ChatConnecting,
  ChatEmptyState,
  ChatError,
} from "./components/ChatStates"
import { useComposerOverlayLayout } from "./hooks/useComposerOverlayLayout"
import { ChatRenderConfigProvider } from "./providers/ChatRenderConfigProvider"
import { ChatUIProvider, useChatDrop } from "./providers/ChatUIProvider"
import { useF0Chat } from "./providers/F0ChatProvider"
import { type F0ChatChannel, type F0ChatHeaderAction } from "./types"

export type F0ChatProps = {
  /** Whether the hosting panel is in fullscreen (controls the header toggle icon). */
  isFullscreen?: boolean
  /** Toggle the hosting panel's fullscreen. Hidden when omitted. */
  onToggleFullscreen?: () => void
  /** Close the hosting panel. Hidden when omitted. */
  onClose?: () => void
  /**
   * Host-provided header actions (pin, mute, edit group…). Search is the only
   * built-in one. The function form receives the current channel so each
   * channel offers exactly what the user's PERMISSIONS allow — return `[]`
   * where they can do nothing but search. For toggles (mute/unmute) rebuild
   * the array per render with the current label/icon.
   */
  headerActions?:
    | F0ChatHeaderAction[]
    | ((channel: F0ChatChannel) => F0ChatHeaderAction[])
}

const isFileDrag = (e: DragEvent) => e.dataTransfer?.types?.includes("Files")

const ChatShell = ({
  isFullscreen,
  onToggleFullscreen,
  onClose,
  headerActions,
}: F0ChatProps): ReactNode => {
  const { channel, status, messages, capabilities } = useF0Chat()
  const { dropFiles } = useChatDrop()
  const canSend = capabilities?.canSend !== false
  const { shellRef, composerOverlayRef } = useComposerOverlayLayout(canSend)

  // Whole-panel drag & drop, just like the AI chat: the overlay covers the
  // entire surface and a drop anywhere attaches to the composer. Stop file-drag
  // events so the AI chat's SidebarWindow (our host) doesn't hijack them.
  const dragDepth = useRef(0)
  const [dragging, setDragging] = useState(false)

  return (
    <div
      ref={shellRef}
      // Opts the transcript into the metric-adjusted font fallback (styles.css)
      // so rows measured before the Inter swap don't rewrap after it.
      data-f0-chat-shell=""
      className="relative flex h-full min-h-0 w-full flex-col overflow-x-hidden"
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
        actions={
          typeof headerActions === "function"
            ? headerActions(channel)
            : headerActions
        }
      />
      {status === "connecting" ? (
        <ChatConnecting />
      ) : status === "error" ? (
        <ChatError />
      ) : messages.length > 0 ? (
        // `reconnecting` / `offline` render the transcript exactly like
        // `ready` — per-message states communicate connectivity, no banner.
        <ChatMessagesContainer key={channel.id} />
      ) : status === "ready" ? (
        <ChatEmptyState />
      ) : (
        // reconnecting/offline with nothing loaded yet: can't tell "empty"
        // from "not loaded" — show the skeleton until the transport settles.
        <ChatConnecting />
      )}
      {/* A read-only channel (frozen, announcements…) hides the composer. */}
      {canSend && (
        <div
          ref={composerOverlayRef}
          data-testid="chat-composer-overlay"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        >
          <ChatComposer />
        </div>
      )}
      <ChatDropOverlay visible={dragging} />
      <ChatImagePreview />
      <ChatDocumentPreview />
    </div>
  )
}

/**
 * Headless chat surface — header, transcript and composer — driven entirely by
 * the {@link F0ChatRuntime} from a surrounding `F0ChatProvider`. Panel controls
 * (fullscreen / close) are wired by the host so F0Chat stays transport-agnostic.
 */
export const F0Chat = (props: F0ChatProps): ReactNode => {
  const reducedMotion = useReducedMotion()

  return (
    <ChatRenderConfigProvider reducedMotion={reducedMotion}>
      <ChatUIProvider>
        <ChatShell {...props} />
      </ChatUIProvider>
    </ChatRenderConfigProvider>
  )
}
