"use client"

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react"

import {
  type F0ChatCapabilities,
  type F0ChatEditInput,
  type F0ChatRuntime,
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
  capabilities?: F0ChatCapabilities
  editWindowMs?: number
  toggleReaction: (messageId: string, emoji: string) => void
  retryMessage: (id: string) => void
  deleteMessage: (id: string) => void
  deleteFailedMessage?: (id: string) => void
  editMessage?: (id: string, input: F0ChatEditInput) => void
}

const F0ChatStableContext = createContext<F0ChatStable | null>(null)

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
      previous.canReact === capabilities.canReact &&
      previous.canUpload === capabilities.canUpload &&
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
  children,
}: {
  runtime: F0ChatRuntime
  children: ReactNode
}): ReactNode => {
  const runtimeRef = useRef(runtime)
  runtimeRef.current = runtime

  // Identity-stable delegates: always call into the LATEST runtime, so hosts
  // that rebuild their callbacks per render don't churn the stable context.
  const delegates = useMemo(
    () => ({
      toggleReaction: (messageId: string, emoji: string) =>
        void runtimeRef.current.toggleReaction(messageId, emoji),
      retryMessage: (id: string) => void runtimeRef.current.retryMessage(id),
      deleteMessage: (id: string) => void runtimeRef.current.deleteMessage(id),
      deleteFailedMessage: (id: string) =>
        void runtimeRef.current.deleteFailedMessage?.(id),
      editMessage: (id: string, input: F0ChatEditInput) =>
        void runtimeRef.current.editMessage?.(id, input),
    }),
    []
  )

  const capabilities = useStableCapabilities(runtime.capabilities)
  // Optional callbacks gate UI affordances by PRESENCE — reflect presence, not
  // identity, in the memo.
  const hasEditMessage = !!runtime.editMessage
  const hasDeleteFailedMessage = !!runtime.deleteFailedMessage

  const stable = useMemo<F0ChatStable>(
    () => ({
      currentUserId: runtime.currentUserId,
      capabilities,
      editWindowMs: runtime.editWindowMs,
      toggleReaction: delegates.toggleReaction,
      retryMessage: delegates.retryMessage,
      deleteMessage: delegates.deleteMessage,
      deleteFailedMessage: hasDeleteFailedMessage
        ? delegates.deleteFailedMessage
        : undefined,
      editMessage: hasEditMessage ? delegates.editMessage : undefined,
    }),
    [
      runtime.currentUserId,
      capabilities,
      runtime.editWindowMs,
      hasEditMessage,
      hasDeleteFailedMessage,
      delegates,
    ]
  )

  return (
    <F0ChatContext.Provider value={runtime}>
      <F0ChatStableContext.Provider value={stable}>
        {children}
      </F0ChatStableContext.Provider>
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
