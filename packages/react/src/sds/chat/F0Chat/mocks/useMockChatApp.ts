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

import { type F0ChatMessage, type F0ChatSendInput } from "../types"
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
  markRead: (convId: string) => void
  toggleReaction: (convId: string, messageId: string, emoji: string) => void
  deleteMessage: (convId: string, messageId: string) => void
  loadOlder: (convId: string) => void
  loadingOlder: Record<string, boolean>
  hasMoreOlder: (convId: string) => boolean
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
          ? s.messages.find((m) => m.id === input.replyToId)
          : undefined
        const message: F0ChatMessage = {
          id,
          author: ME,
          body: input.body,
          createdAt: new Date().toISOString(),
          isMine: true,
          status: "sending",
          attachments: input.attachments,
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

      after(400, () =>
        patch(convId, (s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === id ? { ...m, status: "sent" } : m
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
              (m): F0ChatMessage =>
                m.isMine && m.status === "sent" ? { ...m, status: "read" } : m
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

  const toggleReaction = useCallback(
    (convId: string, messageId: string, emoji: string) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((m) => {
          if (m.id !== messageId) return m
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
        const target = s.messages.find((m) => m.id === messageId)
        if (!target) return s
        const beyondWindow =
          Date.now() - new Date(target.createdAt).getTime() > 5 * 60_000
        return {
          ...s,
          messages: beyondWindow
            ? s.messages.map((m) =>
                m.id === messageId
                  ? { ...m, deleted: true, body: "", reactions: undefined }
                  : m
              )
            : s.messages.filter((m) => m.id !== messageId),
        }
      })
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
      markRead,
      toggleReaction,
      deleteMessage,
      loadOlder,
      loadingOlder,
      hasMoreOlder,
    }),
    [
      states,
      send,
      markRead,
      toggleReaction,
      deleteMessage,
      loadOlder,
      loadingOlder,
      hasMoreOlder,
    ]
  )
}

export { MockChatAppContext }
