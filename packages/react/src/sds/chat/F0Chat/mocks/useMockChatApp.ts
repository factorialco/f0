"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import {
  isUserMessage,
  type F0ChatEditInput,
  type F0ChatItem,
  type F0ChatMessage,
  type F0ChatSendInput,
} from "../types"
import {
  type ConvState,
  ME,
  REPLIES,
  SEED_BY_ID,
  SEEDS,
  initialConvState,
  nextId,
  pickRandomTypers,
  restingTypingIds,
} from "./mockSeeds"

export type MockChatAppValue = {
  states: Record<string, ConvState>
  send: (convId: string, input: F0ChatSendInput) => void
  /** Re-send a failed message (same id) — flips back to sending, then sent. */
  retry: (convId: string, messageId: string) => void
  markRead: (convId: string) => void
  toggleReaction: (convId: string, messageId: string, emoji: string) => void
  deleteMessage: (convId: string, messageId: string) => void
  /** Discard a failed local echo — purely local, mirrors `deleteFailedMessage`. */
  discardFailed: (convId: string, messageId: string) => void
  editMessage: (
    convId: string,
    messageId: string,
    input: F0ChatEditInput
  ) => void
  loadOlder: (convId: string) => void
  loadingOlder: Record<string, boolean>
  hasMoreOlder: (convId: string) => boolean
  /** Pinned (favourite) state per conversation, toggled from the header. */
  pinned: Record<string, boolean>
  togglePin: (convId: string) => void
  /** Muted state per conversation, toggled from the header overflow menu. */
  muted: Record<string, boolean>
  toggleMute: (convId: string) => void
  /** Load state per conversation — `failsToLoad` seeds start in "error" and
   * recover via `reconnect` (drives the error state's Retry button). */
  loadState: Record<string, "ready" | "connecting" | "error">
  reconnect: (convId: string) => void
}

const MockChatAppContext = createContext<MockChatAppValue | null>(null)

export const useMockChatApp = (): MockChatAppValue => {
  const ctx = useContext(MockChatAppContext)
  if (!ctx) throw new Error("useMockChatApp requires MockChatAppProvider")
  return ctx
}

/**
 * Shared mock chat store: every conversation's messages, typing and read state
 * live here so the sidebar and the open panel stay in sync. Backs
 * `useConversationRuntime` and `useMockChatGroups`.
 */
export const useMockChatStore = (): MockChatAppValue => {
  const [states, setStates] = useState<Record<string, ConvState>>(() =>
    Object.fromEntries(SEEDS.map((s) => [s.id, initialConvState(s)]))
  )
  const [loadingOlder, setLoadingOlder] = useState<Record<string, boolean>>({})
  // Seed a couple as pinned so the "Pinned" sidebar group is populated on load.
  const [pinned, setPinned] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SEEDS.filter((s) => s.pinned).map((s) => [s.id, true]))
  )
  const togglePin = useCallback((convId: string) => {
    setPinned((prev) => ({ ...prev, [convId]: !prev[convId] }))
  }, [])
  // Live muted state (seeded from the seeds' static flag) so the header's
  // Mute/Unmute action updates the sidebar icon too.
  const [muted, setMuted] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SEEDS.filter((s) => s.muted).map((s) => [s.id, true]))
  )
  const toggleMute = useCallback((convId: string) => {
    setMuted((prev) => ({ ...prev, [convId]: !prev[convId] }))
  }, [])
  // `failsToLoad` seeds open in the error state until Retry "reconnects" them.
  const [loadState, setLoadState] = useState<
    Record<string, "ready" | "connecting" | "error">
  >(() =>
    Object.fromEntries(
      SEEDS.map((s) => [s.id, s.failsToLoad ? "error" : "ready"])
    )
  )
  const olderLeft = useRef<Record<string, number>>(
    Object.fromEntries(SEEDS.map((s) => [s.id, s.olderPages ?? 0]))
  )

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms))
  }, [])
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    },
    []
  )

  const patch = useCallback(
    (convId: string, fn: (s: ConvState) => ConvState) => {
      setStates((prev) => {
        const current = prev[convId]
        if (!current) return prev
        return { ...prev, [convId]: fn(current) }
      })
    },
    []
  )

  const markRead = useCallback(
    (convId: string) => {
      patch(convId, (s) => {
        const lastId = s.messages.at(-1)?.id ?? null
        return s.lastReadId === lastId ? s : { ...s, lastReadId: lastId }
      })
    },
    [patch]
  )

  const send = useCallback(
    (convId: string, input: F0ChatSendInput) => {
      const id = nextId()
      patch(convId, (s) => {
        const replyTo = input.replyToId
          ? s.messages
              .filter(isUserMessage)
              .find((m) => m.id === input.replyToId)
          : undefined
        const message: F0ChatMessage = {
          id,
          author: ME,
          body: input.body,
          createdAt: new Date().toISOString(),
          isMine: true,
          status: "sending",
          attachments: input.attachments,
          mentions: input.mentions,
          mentionedEveryone: input.mentionedEveryone,
          replyTo: replyTo
            ? {
                id: replyTo.id,
                author: replyTo.author,
                body: replyTo.body,
                attachments: replyTo.attachments,
              }
            : undefined,
        }
        return { ...s, messages: [...s.messages, message], lastReadId: id }
      })

      // Flaky network simulation: roughly 1 in 4 sends stalls long enough for
      // the delayed sending clock (>500ms) to appear, then FAILS — surfacing
      // the red "Not sent" indicator with its Retry/Delete menu (the tooltip
      // carries `failureReason`). The rest settle fast, so the clock never
      // shows on them.
      const flaky = Math.random() < 0.25
      if (flaky) {
        after(3000, () =>
          patch(convId, (s) => ({
            ...s,
            messages: s.messages.map((m) =>
              isUserMessage(m) && m.id === id
                ? {
                    ...m,
                    status: "failed",
                    failureReason: "Simulated network error",
                  }
                : m
            ),
          }))
        )
        // No reply: the message never reached the other side.
        return
      }

      after(400, () =>
        patch(convId, (s) => ({
          ...s,
          messages: s.messages.map((m) =>
            isUserMessage(m) && m.id === id ? { ...m, status: "sent" } : m
          ),
        }))
      )
      // A visible "delivered" stage before the reply reads it (backends that
      // distinguish delivery — the footer shows "Delivered" for a beat).
      after(1300, () =>
        patch(convId, (s) => ({
          ...s,
          messages: s.messages.map((m) =>
            isUserMessage(m) && m.id === id && m.status === "sent"
              ? { ...m, status: "delivered" }
              : m
          ),
        }))
      )

      // Replies happen only on the user's action (no ambient/background typing).
      // Online people reply; offline ones (incl. on vacation) never do. In a
      // `multiTyping` group, a random 1–3 people type — and each of them sends a
      // message once they all finish writing.
      const replySeed = SEED_BY_ID.get(convId)
      if (!replySeed) return
      const onlineParticipants = replySeed.participants.filter((p) => p.online)
      if (onlineParticipants.length === 0) return
      const typers =
        replySeed.type === "group" &&
        replySeed.multiTyping &&
        onlineParticipants.length > 1
          ? pickRandomTypers(onlineParticipants)
          : [onlineParticipants[0]]

      after(900, () =>
        patch(convId, (s) => ({ ...s, typingIds: typers.map((p) => p.id) }))
      )
      after(2200, () =>
        patch(convId, (s) => ({
          ...s,
          typingIds: restingTypingIds(replySeed),
          messages: [
            ...s.messages.map(
              (m): F0ChatItem =>
                isUserMessage(m) &&
                m.isMine &&
                (m.status === "sent" || m.status === "delivered")
                  ? { ...m, status: "read" }
                  : m
            ),
            ...typers.map(
              (responder, i): F0ChatMessage => ({
                id: nextId(),
                author: responder,
                body: REPLIES[(s.messages.length + i) % REPLIES.length],
                createdAt: new Date(Date.now() + i).toISOString(),
                isMine: false,
              })
            ),
          ],
        }))
      )
    },
    [after, patch]
  )

  // Retrying always succeeds (the "network" recovered) — same id, so the row
  // never remounts, mirroring the transport's server-side dedupe.
  const retry = useCallback(
    (convId: string, messageId: string) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((m) =>
          isUserMessage(m) && m.id === messageId
            ? { ...m, status: "sending", failureReason: undefined }
            : m
        ),
      }))
      after(900, () =>
        patch(convId, (s) => ({
          ...s,
          messages: s.messages.map((m) =>
            isUserMessage(m) && m.id === messageId
              ? { ...m, status: "sent" }
              : m
          ),
        }))
      )
    },
    [after, patch]
  )

  // Discard a failed local echo — mirrors `deleteFailedMessage`: purely local,
  // no tombstone (the message never existed "server-side").
  const discardFailed = useCallback(
    (convId: string, messageId: string) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.filter((m) => m.id !== messageId),
      }))
    },
    [patch]
  )

  // Retry a failed load: brief "connecting" (skeleton), then ready.
  const reconnect = useCallback(
    (convId: string) => {
      setLoadState((prev) => ({ ...prev, [convId]: "connecting" }))
      after(900, () => setLoadState((prev) => ({ ...prev, [convId]: "ready" })))
    },
    [after]
  )

  const toggleReaction = useCallback(
    (convId: string, messageId: string, emoji: string) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((m) => {
          if (!isUserMessage(m) || m.id !== messageId) return m
          const reactions = m.reactions ? [...m.reactions] : []
          const idx = reactions.findIndex((r) => r.emoji === emoji)
          if (idx === -1) reactions.push({ emoji, count: 1, reactedByMe: true })
          else {
            const r = reactions[idx]
            const count = r.count + (r.reactedByMe ? -1 : 1)
            if (count <= 0) reactions.splice(idx, 1)
            else reactions[idx] = { ...r, count, reactedByMe: !r.reactedByMe }
          }
          return { ...m, reactions }
        }),
      }))
    },
    [patch]
  )

  const deleteMessage = useCallback(
    (convId: string, messageId: string) => {
      patch(convId, (s) => {
        const target = s.messages
          .filter(isUserMessage)
          .find((m) => m.id === messageId)
        if (!target) return s
        const beyondWindow =
          Date.now() - new Date(target.createdAt).getTime() > 5 * 60_000
        return {
          ...s,
          messages: beyondWindow
            ? s.messages.map((m) =>
                isUserMessage(m) && m.id === messageId
                  ? { ...m, deleted: true, body: "", reactions: undefined }
                  : m
              )
            : s.messages.filter((m) => m.id !== messageId),
        }
      })
    },
    [patch]
  )

  const editMessage = useCallback(
    (convId: string, messageId: string, input: F0ChatEditInput) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((m) =>
          isUserMessage(m) && m.id === messageId
            ? {
                ...m,
                body: input.body,
                attachments: input.attachments,
                mentions: input.mentions,
                mentionedEveryone: input.mentionedEveryone,
                editedAt: new Date().toISOString(),
              }
            : m
        ),
      }))
    },
    [patch]
  )

  const loadOlder = useCallback(
    (convId: string) => {
      if (loadingOlder[convId] || (olderLeft.current[convId] ?? 0) <= 0) return
      setLoadingOlder((p) => ({ ...p, [convId]: true }))
      after(700, () => {
        patch(convId, (s) => {
          const oldest = s.messages[0]
          const base = oldest
            ? new Date(oldest.createdAt).getTime()
            : Date.now()
          const responder = SEED_BY_ID.get(convId)?.participants[0] ?? ME
          const page: F0ChatMessage[] = Array.from({ length: 12 }, (_, i) => {
            const author = i % 2 === 0 ? responder : ME
            const isMine = author.id === ME.id
            return {
              id: nextId(),
              author,
              body: "Earlier message",
              createdAt: new Date(base - (12 - i) * 5 * 60_000).toISOString(),
              isMine,
              status: isMine ? "read" : undefined,
            }
          })
          return { ...s, messages: [...page, ...s.messages] }
        })
        olderLeft.current[convId] = (olderLeft.current[convId] ?? 0) - 1
        setLoadingOlder((p) => ({ ...p, [convId]: false }))
      })
    },
    [after, loadingOlder, patch]
  )

  const hasMoreOlder = useCallback(
    (convId: string) => (olderLeft.current[convId] ?? 0) > 0,
    []
  )

  return useMemo<MockChatAppValue>(
    () => ({
      states,
      send,
      retry,
      markRead,
      toggleReaction,
      deleteMessage,
      discardFailed,
      editMessage,
      loadOlder,
      loadingOlder,
      hasMoreOlder,
      pinned,
      togglePin,
      muted,
      toggleMute,
      loadState,
      reconnect,
    }),
    [
      states,
      send,
      retry,
      markRead,
      toggleReaction,
      deleteMessage,
      discardFailed,
      editMessage,
      loadOlder,
      loadingOlder,
      hasMoreOlder,
      pinned,
      togglePin,
      muted,
      toggleMute,
      loadState,
      reconnect,
    ]
  )
}

export { MockChatAppContext }
