"use client"

import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react"

import {
  type F0ChatCapabilities,
  type F0ChatChannelType,
  type F0ChatEditInput,
  type F0ChatEmit,
  type F0ChatEvents,
  type F0ChatRuntime,
  type F0ChatUser,
} from "../types"

const F0ChatContext = createContext<F0ChatRuntime | null>(null)

/**
 * The slow-moving slice of the runtime, behind a SEPARATE context with a
 * stable value. The full runtime object is rebuilt by the host on every
 * transport event (each websocket packet re-renders the adapter), so anything
 * mounted per-message that reads `useF0Chat()` re-renders on every event —
 * reads, typing, presence — defeating the row memoization. Per-row components
 * read THIS context instead: its identity only changes when the user,
 * capabilities or edit window actually change; the action callbacks are
 * identity-stable delegates into the latest runtime.
 */
export type F0ChatStable = {
  currentUserId: string
  /** The channel's type, not the channel: per-message components resolve
   * permissions with it (see `utils/capabilities.ts`) and it only changes when
   * the conversation does. */
  channelType: F0ChatChannelType
  capabilities?: F0ChatCapabilities
  editWindowMs?: number
  toggleReaction: (messageId: string, emoji: string) => void
  loadReactionUsers?: (
    messageId: string,
    emoji: string,
    count: number
  ) => Promise<F0ChatUser[]>
  retryMessage: (id: string) => void
  deleteMessage: (id: string) => void
  deleteFailedMessage?: (id: string) => void
  editMessage?: (id: string, input: F0ChatEditInput) => void
}

const F0ChatStableContext = createContext<F0ChatStable | null>(null)

/**
 * Always-callable mirror of {@link F0ChatEvents} — every handler present, each
 * one forwarding to the host's if it supplied that one. Call sites emit
 * unconditionally, with no optional chaining and no presence checks.
 */
const noop = (): void => {}

/**
 * The context default, so emitting works in the leaf components that are unit
 * tested on their own (voice attachment, link preview, location) with no
 * provider around them. A shared constant, so the no-provider case is
 * referentially stable too.
 */
const NO_EMIT: F0ChatEmit = {
  onMessageCopied: noop,
  onMessageInfoViewed: noop,
  onReplyStarted: noop,
  onReplyCancelled: noop,
  onEditStarted: noop,
  onEditCancelled: noop,
  onReactionAdded: noop,
  onReactionRemoved: noop,
  onFileAttached: noop,
  onAttachmentRemoved: noop,
  onEmojiInserted: noop,
  onMentionInserted: noop,
  onVoiceRecordingStarted: noop,
  onVoiceRecordingCancelled: noop,
  onVoiceNotePlayed: noop,
  onVoicePlaybackRateChanged: noop,
  onImageOpened: noop,
  onDocumentOpened: noop,
  onAttachmentDownloaded: noop,
  onLocationOpened: noop,
  onLinkPreviewClicked: noop,
  onCardActivated: noop,
  onSearchOpened: noop,
  onSearchResultNavigated: noop,
  onJumpedToQuotedMessage: noop,
  onJumpedToBottom: noop,
}

/**
 * SEPARATE from the stable context, and its value is built once and never
 * replaced. Emitting must be reachable from anywhere in the tree — including
 * inside the `memo`ed transcript rows — without giving those components a
 * subscription that can ever wake them. `F0ChatStable`'s identity legitimately
 * changes (user, capabilities, edit window); this one's never does.
 */
const F0ChatEmitContext = createContext<F0ChatEmit>(NO_EMIT)

/**
 * "Has this voice note already been reported as played?" — kept above the
 * transcript because Virtuoso unmounts offscreen rows, so a ref inside the
 * row would forget on every scroll and re-report the same note.
 */
export type F0ChatVoicePlayLog = {
  hasReported: (key: string) => boolean
  markReported: (key: string) => void
}

const NO_VOICE_PLAY_LOG: F0ChatVoicePlayLog = {
  hasReported: () => false,
  markReported: () => {},
}

const F0ChatVoicePlayContext =
  createContext<F0ChatVoicePlayLog>(NO_VOICE_PLAY_LOG)

/** Keep the previous capabilities object while its fields are unchanged, so a
 * host rebuilding `{ canSend: false }` per render doesn't churn the context. */
const useStableCapabilities = (
  capabilities: F0ChatCapabilities | undefined
): F0ChatCapabilities | undefined => {
  const previousRef = useRef(capabilities)
  const previous = previousRef.current
  const same =
    previous === capabilities ||
    (previous != null &&
      capabilities != null &&
      previous.canSend === capabilities.canSend &&
      previous.canReply === capabilities.canReply &&
      previous.canReact === capabilities.canReact &&
      previous.canUpload === capabilities.canUpload &&
      previous.canCopy === capabilities.canCopy &&
      previous.canViewInfo === capabilities.canViewInfo &&
      previous.canEditMessage === capabilities.canEditMessage &&
      previous.canDeleteMessage === capabilities.canDeleteMessage)
  if (!same) previousRef.current = capabilities
  return same ? previous : capabilities
}

/**
 * Makes a chat {@link F0ChatRuntime} available to the F0Chat UI. The host owns
 * the runtime (mock in stories, GetStream adapter in factorial); F0 only reads it.
 */
export const F0ChatProvider = ({
  runtime,
  events,
  children,
}: {
  runtime: F0ChatRuntime
  /** Observe interactions F0Chat resolves internally — see {@link F0ChatEvents}.
   * Rebuild it freely: it is read through a ref, never as a context value. */
  events?: F0ChatEvents
  children: ReactNode
}): ReactNode => {
  const runtimeRef = useRef(runtime)
  runtimeRef.current = runtime

  // Assigned after commit rather than during render, unlike `runtimeRef` above:
  // the runtime is READ during render so it has to be fresh synchronously,
  // while these are only ever read from user-interaction handlers, which cannot
  // fire before commit. So a render React discards can never leave its handlers
  // behind here. LAYOUT effect, not passive: passive effects flush from a
  // scheduler task after paint, leaving a window in which a click reads the
  // PREVIOUS commit's handlers.
  const eventsRef = useRef(events)
  useLayoutEffect(function syncEventHandlers() {
    eventsRef.current = events
  })

  const playedVoiceNotesRef = useRef(new Set<string>())
  const voicePlayLog = useMemo<F0ChatVoicePlayLog>(
    () => ({
      hasReported: (key) => playedVoiceNotesRef.current.has(key),
      markReported: (key) => playedVoiceNotesRef.current.add(key),
    }),
    []
  )

  const reactionUsersCacheRef = useRef(new Map<string, Promise<F0ChatUser[]>>())
  const reactionUsersCacheChannelRef = useRef(runtime.channel.id)

  if (reactionUsersCacheChannelRef.current !== runtime.channel.id) {
    reactionUsersCacheRef.current.clear()
    playedVoiceNotesRef.current.clear()
    reactionUsersCacheChannelRef.current = runtime.channel.id
  }

  // Identity-stable delegates: always call into the LATEST runtime, so hosts
  // that rebuild their callbacks per render don't churn the stable context.
  const delegates = useMemo(
    () => ({
      toggleReaction: (messageId: string, emoji: string) =>
        void runtimeRef.current.toggleReaction(messageId, emoji),
      loadReactionUsers: (
        messageId: string,
        emoji: string,
        count: number
      ): Promise<F0ChatUser[]> => {
        const currentRuntime = runtimeRef.current
        if (!currentRuntime.loadReactionUsers) return Promise.resolve([])

        const keyPrefix = `${currentRuntime.channel.id}\u0000${messageId}\u0000${emoji}\u0000`
        const key = `${keyPrefix}${count}`
        const cached = reactionUsersCacheRef.current.get(key)
        if (cached) return cached

        for (const cachedKey of reactionUsersCacheRef.current.keys()) {
          if (cachedKey.startsWith(keyPrefix)) {
            reactionUsersCacheRef.current.delete(cachedKey)
          }
        }

        const request = currentRuntime.loadReactionUsers(messageId, emoji)
        reactionUsersCacheRef.current.set(key, request)
        void request.catch(() => {
          if (reactionUsersCacheRef.current.get(key) === request) {
            reactionUsersCacheRef.current.delete(key)
          }
        })
        return request
      },
      retryMessage: (id: string) => void runtimeRef.current.retryMessage(id),
      deleteMessage: (id: string) => void runtimeRef.current.deleteMessage(id),
      deleteFailedMessage: (id: string) =>
        void runtimeRef.current.deleteFailedMessage?.(id),
      editMessage: (id: string, input: F0ChatEditInput) =>
        void runtimeRef.current.editMessage?.(id, input),
    }),
    []
  )

  // Built once, never rebuilt: the context value is referentially constant for
  // the provider's lifetime, so consuming it cannot re-render anything. Each
  // wrapper reads the LATEST handler from the ref, so the host is free to pass
  // a fresh inline object on every render.
  const emit = useMemo<F0ChatEmit>(() => {
    // A host's observer must never break the chat it observes. Without this,
    // a throwing handler propagates out of the DOM event and aborts the rest
    // of the click — at the recorder's cancel button that means `recorder.cancel()`
    // never runs and the microphone keeps recording.
    const call = (run: (events: F0ChatEvents) => void): void => {
      const events = eventsRef.current
      if (!events) return
      try {
        run(events)
      } catch (error) {
        console.error("F0Chat: an `events` handler threw", error)
      }
    }

    return {
      onMessageCopied: (p) => call((events) => events.onMessageCopied?.(p)),
      onMessageInfoViewed: (p) =>
        call((events) => events.onMessageInfoViewed?.(p)),
      onReplyStarted: (p) => call((events) => events.onReplyStarted?.(p)),
      onReplyCancelled: (p) => call((events) => events.onReplyCancelled?.(p)),
      onEditStarted: (p) => call((events) => events.onEditStarted?.(p)),
      onEditCancelled: (p) => call((events) => events.onEditCancelled?.(p)),
      onReactionAdded: (p) => call((events) => events.onReactionAdded?.(p)),
      onReactionRemoved: (p) => call((events) => events.onReactionRemoved?.(p)),
      onFileAttached: (p) => call((events) => events.onFileAttached?.(p)),
      onAttachmentRemoved: (p) =>
        call((events) => events.onAttachmentRemoved?.(p)),
      onEmojiInserted: (p) => call((events) => events.onEmojiInserted?.(p)),
      onMentionInserted: (p) => call((events) => events.onMentionInserted?.(p)),
      onVoiceRecordingStarted: () =>
        call((events) => events.onVoiceRecordingStarted?.()),
      onVoiceRecordingCancelled: () =>
        call((events) => events.onVoiceRecordingCancelled?.()),
      onVoiceNotePlayed: (p) => call((events) => events.onVoiceNotePlayed?.(p)),
      onVoicePlaybackRateChanged: (p) =>
        call((events) => events.onVoicePlaybackRateChanged?.(p)),
      onImageOpened: (p) => call((events) => events.onImageOpened?.(p)),
      onDocumentOpened: (p) => call((events) => events.onDocumentOpened?.(p)),
      onAttachmentDownloaded: (p) =>
        call((events) => events.onAttachmentDownloaded?.(p)),
      onLocationOpened: () => call((events) => events.onLocationOpened?.()),
      onLinkPreviewClicked: () =>
        call((events) => events.onLinkPreviewClicked?.()),
      onCardActivated: (p) => call((events) => events.onCardActivated?.(p)),
      onSearchOpened: () => call((events) => events.onSearchOpened?.()),
      onSearchResultNavigated: (p) =>
        call((events) => events.onSearchResultNavigated?.(p)),
      onJumpedToQuotedMessage: () =>
        call((events) => events.onJumpedToQuotedMessage?.()),
      onJumpedToBottom: () => call((events) => events.onJumpedToBottom?.()),
    }
  }, [])

  const capabilities = useStableCapabilities(runtime.capabilities)
  // Optional callbacks gate UI affordances by PRESENCE — reflect presence, not
  // identity, in the memo.
  const hasEditMessage = !!runtime.editMessage
  const hasDeleteFailedMessage = !!runtime.deleteFailedMessage
  const hasLoadReactionUsers = !!runtime.loadReactionUsers

  const stable = useMemo<F0ChatStable>(
    () => ({
      currentUserId: runtime.currentUserId,
      channelType: runtime.channel.type,
      capabilities,
      editWindowMs: runtime.editWindowMs,
      toggleReaction: delegates.toggleReaction,
      loadReactionUsers: hasLoadReactionUsers
        ? delegates.loadReactionUsers
        : undefined,
      retryMessage: delegates.retryMessage,
      deleteMessage: delegates.deleteMessage,
      deleteFailedMessage: hasDeleteFailedMessage
        ? delegates.deleteFailedMessage
        : undefined,
      editMessage: hasEditMessage ? delegates.editMessage : undefined,
    }),
    [
      runtime.currentUserId,
      runtime.channel.type,
      capabilities,
      runtime.editWindowMs,
      hasEditMessage,
      hasDeleteFailedMessage,
      hasLoadReactionUsers,
      delegates,
    ]
  )

  return (
    <F0ChatContext.Provider value={runtime}>
      <F0ChatEmitContext.Provider value={emit}>
        <F0ChatVoicePlayContext.Provider value={voicePlayLog}>
          <F0ChatStableContext.Provider value={stable}>
            {children}
          </F0ChatStableContext.Provider>
        </F0ChatVoicePlayContext.Provider>
      </F0ChatEmitContext.Provider>
    </F0ChatContext.Provider>
  )
}

/** Read the chat runtime. Throws when used outside an {@link F0ChatProvider}. */
export function useF0Chat(): F0ChatRuntime {
  const ctx = useContext(F0ChatContext)
  if (!ctx) {
    throw new Error("useF0Chat must be used within an F0ChatProvider")
  }
  return ctx
}

/**
 * Read the slow-moving runtime slice (identity, capabilities, per-message
 * actions). Per-message components use this instead of {@link useF0Chat} so a
 * transport event doesn't re-render every mounted row.
 */
export function useF0ChatStable(): F0ChatStable {
  const ctx = useContext(F0ChatStableContext)
  if (!ctx) {
    throw new Error("useF0ChatStable must be used within an F0ChatProvider")
  }
  return ctx
}

/**
 * The current channel's type, or `"dm"` outside a provider.
 *
 * Non-throwing on purpose, like the emit context's `NO_EMIT`: leaf components
 * that read it (the message meta, the media cards) are unit-tested on their own
 * with no runtime around them, and `"dm"` is the neutral shape.
 */
export function useF0ChatChannelType(): F0ChatChannelType {
  return useContext(F0ChatStableContext)?.channelType ?? "dm"
}

/**
 * Report an interaction to the host (see {@link F0ChatEvents}). Every handler
 * is always present — no optional chaining at the call site — and the value
 * never changes identity, so reading it costs a `memo`ed row nothing. Outside a
 * provider every handler is a no-op.
 */
export function useF0ChatEmit(): F0ChatEmit {
  return useContext(F0ChatEmitContext)
}

/** See {@link F0ChatVoicePlayLog}. Constant identity, like the emit context. */
export function useF0ChatVoicePlayLog(): F0ChatVoicePlayLog {
  return useContext(F0ChatVoicePlayContext)
}
