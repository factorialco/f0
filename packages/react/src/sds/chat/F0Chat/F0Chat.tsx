import { type ReactNode } from "react"
import { useReducedMotion } from "@/lib/a11y"
import { ChatCommunityShelf } from "./components/ChatCommunityShelf"
import { ChatComposer } from "./components/ChatComposer"
import { ChatDocumentPreview } from "./components/ChatDocumentPreview"
import { ChatDropOverlay } from "./components/ChatDropOverlay"
import { ChatHeader } from "./components/ChatHeader"
import { ChatImagePreview } from "./components/ChatImagePreview"
import { ChatMessagesContainer } from "./components/ChatMessagesContainer"
import { ChatPostComposer } from "./components/ChatPostComposer"
import { ChatReadOnlyNotice } from "./components/ChatReadOnlyNotice"
import {
  ChatConnecting,
  ChatEmptyState,
  ChatError,
} from "./components/ChatStates"
import { useChatFileDropZone } from "./hooks/useChatFileDropZone"
import { useComposerOverlayLayout } from "./hooks/useComposerOverlayLayout"
import { ChatRenderConfigProvider } from "./providers/ChatRenderConfigProvider"
import { ChatUIProvider } from "./providers/ChatUIProvider"
import { useF0Chat } from "./providers/F0ChatProvider"
import {
  type F0ChatChannel,
  type F0ChatHeaderAction,
  type F0ChatStatus,
} from "./types"
import { chatPermission } from "./utils/capabilities"

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
  /**
   * Replaces the built-in header. `null` removes it entirely, for hosts that
   * already frame the chat with their own chrome — the in-call panel puts its
   * Chat / Transcript / Notes tabs where this header would be.
   *
   * Undefined keeps the default header, so no existing usage changes.
   */
  header?: ReactNode | null
}

/**
 * What sits between the header and the composer: the transcript, or whichever
 * state stands in for it.
 *
 * `reconnecting` / `offline` render the transcript exactly like `ready` —
 * per-message states communicate connectivity, no banner. With nothing loaded
 * yet they show the skeleton instead, because "empty" and "not loaded" are
 * indistinguishable at that point and claiming the former is the worse guess.
 */
const ChatBody = ({
  status,
  hasTranscript,
  channelId,
}: {
  status: F0ChatStatus
  hasTranscript: boolean
  channelId: string
}): ReactNode => {
  if (status === "connecting") {
    return <ChatConnecting />
  }
  if (status === "error") {
    return <ChatError />
  }
  if (hasTranscript) {
    return <ChatMessagesContainer key={channelId} />
  }
  if (status === "ready") {
    return <ChatEmptyState />
  }
  return <ChatConnecting />
}

/**
 * The composer, or the read-only notice standing in for it.
 *
 * With a transcript the notice rides INSIDE it, as the last thing in the scroll
 * (see `ChatBottomGap`) — it is worth reading once, and a fixed strip charged
 * every screen for it. With no transcript to end, there is nowhere to put it
 * but here.
 */
const ChatFooter = ({
  canSend,
  hasTranscript,
  isCommunity,
  channel,
  overlayRef,
}: {
  canSend: boolean
  hasTranscript: boolean
  isCommunity: boolean
  channel: F0ChatChannel
  overlayRef: React.Ref<HTMLDivElement>
}): ReactNode => {
  if (!canSend) {
    return hasTranscript ? null : <ChatReadOnlyNotice channel={channel} />
  }

  return (
    <div
      ref={overlayRef}
      data-testid="chat-composer-overlay"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
    >
      {/* Publishing is not sending: a post has a title, a body with formatting
          and media, and it is written somewhere the size of what is being
          written. The bar that replaces the composer takes the SAME floating
          slot, so `useComposerOverlayLayout` keeps publishing its height and
          the transcript's bottom gap keeps adding up. */}
      {isCommunity ? <ChatPostComposer /> : <ChatComposer />}
    </div>
  )
}

const ChatShell = ({
  isFullscreen,
  onToggleFullscreen,
  onClose,
  headerActions,
  header,
}: F0ChatProps): ReactNode => {
  const { channel, status, messages, capabilities } = useF0Chat()
  const canSend = chatPermission("canSend", channel.type, capabilities)
  const isCommunity = channel.type === "community"
  const hasTranscript =
    status !== "connecting" && status !== "error" && messages.length > 0
  const { shellRef, composerOverlayRef } = useComposerOverlayLayout(canSend)
  const { dragging, dropZoneProps } = useChatFileDropZone()

  return (
    <div
      ref={shellRef}
      // Opts the transcript into the metric-adjusted font fallback (styles.css)
      // so rows measured before the Inter swap don't rewrap after it.
      data-f0-chat-shell=""
      className="relative flex h-full min-h-0 w-full flex-col overflow-x-hidden"
      {...dropZoneProps}
    >
      {header === undefined ? (
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
      ) : (
        header
      )}
      {/* Under the header and OUTSIDE the transcript: chrome, not a row, and
          the virtualizer must not have to measure around it. Its sheet opens
          OVER the transcript for the same reason. */}
      {isCommunity ? <ChatCommunityShelf /> : null}
      <ChatBody
        status={status}
        hasTranscript={hasTranscript}
        channelId={channel.id}
      />

      {/* A read-only channel (frozen, announcements…) hides the composer and
          says so in its place, so the surface doesn't just end in nothing. */}
      <ChatFooter
        canSend={canSend}
        hasTranscript={hasTranscript}
        isCommunity={isCommunity}
        channel={channel}
        overlayRef={composerOverlayRef}
      />
      {/* Without a composer the drop handler was never registered, so the
          affordance promised something the panel could not do. The post
          composer is a button, not a drop target — a post's cover belongs in
          its dialog, not in the transcript. */}
      <ChatDropOverlay visible={dragging && canSend && !isCommunity} />
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
