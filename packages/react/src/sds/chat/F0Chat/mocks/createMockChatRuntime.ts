import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"

import {
  type F0ChatAttachment,
  type F0ChatChannel,
  type F0ChatMessage,
  type F0ChatRuntime,
  type F0ChatSendInput,
  type F0ChatUser,
} from "../types"

/** Seed describing a fake conversation the mock runtime should simulate. */
export type MockChatSeed = {
  channel: F0ChatChannel
  me: F0ChatUser
  /** The other participant(s). DMs have one; groups have several. */
  others: F0ChatUser[]
  /** How many messages to seed initially. */
  initialCount?: number
  /** How many older pages `loadOlder` can yield before running dry. */
  olderPages?: number
  /** Ambient incoming-message cadence (ms). 0 disables it. */
  ambientEveryMs?: number
  /** Extra messages appended after the seeded ones (e.g. to demo mentions). */
  extraMessages?: F0ChatMessage[]
}

const SAMPLE_TEXTS = [
  "Hey! How's it going?",
  "Did you get a chance to look at the doc?",
  'If you ever watch someone "coding", you might see them spending far more time staring into space than typing on their keyboard',
  "Sounds good to me 👍",
  "Let's sync after lunch",
  "I pushed the changes, can you review?",
  "Thanks a lot, really appreciate it",
  "I'll be 5 minutes late to the call",
  "Perfect, talk soon",
  "Can you share the link again?",
]

let monotonic = 0
const nextId = (prefix: string): string => `${prefix}-${monotonic++}`

const buildMessages = (
  seed: MockChatSeed,
  count: number,
  newestTime: number,
  stepMs: number
): F0ChatMessage[] => {
  const authors = [seed.me, ...seed.others]
  const out: F0ChatMessage[] = []
  for (let i = 0; i < count; i++) {
    const author = authors[i % authors.length]
    const isMine = author.id === seed.me.id
    out.push({
      id: nextId("msg"),
      author,
      body: SAMPLE_TEXTS[i % SAMPLE_TEXTS.length],
      createdAt: new Date(newestTime - (count - 1 - i) * stepMs).toISOString(),
      isMine,
      status: isMine ? "read" : undefined,
    })
  }
  return out
}

/**
 * In-memory {@link F0ChatRuntime} for Storybook and tests. Simulates optimistic
 * send + the other side replying (with a typing pause first), read receipts,
 * unread tracking (derived from a read pointer), older-message pagination,
 * reactions, deletion, uploads, transcription and ambient incoming messages —
 * no backend. Re-created per conversation (mount it keyed by channel id).
 */
export function useMockChatRuntime(seed: MockChatSeed): F0ChatRuntime {
  const initialCount = seed.initialCount ?? 24
  const olderPagesTotal = seed.olderPages ?? 2
  const ambientEveryMs = seed.ambientEveryMs ?? 16000

  const [messages, setMessages] = useState<F0ChatMessage[]>(() => [
    ...buildMessages(
      seed,
      initialCount,
      Date.now() - 18 * 60 * 60 * 1000,
      7 * 60 * 1000
    ),
    ...(seed.extraMessages ?? []),
  ])
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  // Read pointer: everything up to and including this id is read. Starts at the
  // last seeded message (opening a conversation reads its history).
  const [lastReadId, setLastReadId] = useState<string | null>(
    () => messagesRef.current.at(-1)?.id ?? null
  )

  const [typingUsers, setTypingUsers] = useState<F0ChatUser[]>([])
  const [loadingOlder, setLoadingOlder] = useState(false)
  const olderPagesLeft = useRef(olderPagesTotal)
  const [hasMoreOlder, setHasMoreOlder] = useState(olderPagesTotal > 0)

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

  const markMineRead = useCallback(() => {
    setMessages((prev) =>
      prev.map((m) =>
        m.isMine && m.status === "sent" ? { ...m, status: "read" } : m
      )
    )
  }, [])

  const receiveFrom = useCallback(
    (responder: F0ChatUser) => {
      setTypingUsers([responder])
      after(1400, () => {
        setTypingUsers([])
        setMessages((prev) => [
          ...prev,
          {
            id: nextId("msg"),
            author: responder,
            body: SAMPLE_TEXTS[(prev.length + 3) % SAMPLE_TEXTS.length],
            createdAt: new Date().toISOString(),
            isMine: false,
          },
        ])
      })
    },
    [after]
  )

  // Ambient activity: the other side occasionally writes, so typing + unread +
  // the read divider are demonstrable without the user doing anything.
  useEffect(() => {
    const responder = seed.others[0]
    if (!responder || ambientEveryMs <= 0) return
    const interval = setInterval(() => receiveFrom(responder), ambientEveryMs)
    return () => clearInterval(interval)
  }, [ambientEveryMs, receiveFrom, seed.others])

  const sendMessage = useCallback(
    (input: F0ChatSendInput) => {
      const id = nextId("msg")
      const replyTarget = input.replyToId
      setMessages((prev) => {
        const replyTo = replyTarget
          ? prev.find((m) => m.id === replyTarget)
          : undefined
        return [
          ...prev,
          {
            id,
            author: seed.me,
            body: input.body,
            createdAt: new Date().toISOString(),
            isMine: true,
            status: "sending",
            attachments: input.attachments,
            mentions: input.mentions,
            mentionedEveryone: input.mentionedEveryone,
            replyTo: replyTo
              ? { id: replyTo.id, author: replyTo.author, body: replyTo.body }
              : undefined,
          },
        ]
      })
      // Sending my own message reads everything before it.
      setLastReadId(id)

      after(400, () =>
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: "sent" } : m))
        )
      )

      const responder = seed.others[0]
      if (responder) {
        after(900, () => setTypingUsers([responder]))
        after(2200, () => {
          setTypingUsers([])
          setMessages((prev) => [
            ...prev,
            {
              id: nextId("msg"),
              author: responder,
              body: SAMPLE_TEXTS[(prev.length + 3) % SAMPLE_TEXTS.length],
              createdAt: new Date().toISOString(),
              isMine: false,
            },
          ])
          markMineRead()
        })
      }
    },
    [after, markMineRead, seed.me, seed.others]
  )

  const retryMessage = useCallback((id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "sending" } : m))
    )
    setTimeout(
      () =>
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: "sent" } : m))
        ),
      400
    )
  }, [])

  const loadOlder = useCallback(() => {
    if (loadingOlder || olderPagesLeft.current <= 0) return
    setLoadingOlder(true)
    after(700, () => {
      setMessages((prev) => {
        const oldest = prev[0]
        const newestTime = oldest
          ? new Date(oldest.createdAt).getTime() - 7 * 60 * 1000
          : Date.now()
        const page = buildMessages(seed, 20, newestTime, 7 * 60 * 1000)
        return [...page, ...prev]
      })
      olderPagesLeft.current -= 1
      setHasMoreOlder(olderPagesLeft.current > 0)
      setLoadingOlder(false)
    })
  }, [after, loadingOlder, seed])

  const markRead = useCallback(() => {
    setLastReadId(messagesRef.current.at(-1)?.id ?? null)
  }, [])

  const toggleReaction = useCallback((messageId: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((m) => {
        if (m.id !== messageId) return m
        const reactions = m.reactions ? [...m.reactions] : []
        const idx = reactions.findIndex((r) => r.emoji === emoji)
        if (idx === -1) {
          reactions.push({ emoji, count: 1, reactedByMe: true })
        } else {
          const r = reactions[idx]
          const count = r.count + (r.reactedByMe ? -1 : 1)
          if (count <= 0) reactions.splice(idx, 1)
          else reactions[idx] = { ...r, count, reactedByMe: !r.reactedByMe }
        }
        return { ...m, reactions }
      })
    )
  }, [])

  // Within the unsend window the message is removed entirely; after it, we leave
  // a tombstone — same split Stream's hard vs soft delete would produce.
  const UNSEND_WINDOW_MS = 5 * 60 * 1000
  const deleteMessage = useCallback((id: string) => {
    setMessages((prev) => {
      const target = prev.find((m) => m.id === id)
      if (!target) return prev
      const beyondWindow =
        Date.now() - new Date(target.createdAt).getTime() > UNSEND_WINDOW_MS
      return beyondWindow
        ? prev.map((m) =>
            m.id === id
              ? {
                  ...m,
                  deleted: true,
                  body: "",
                  reactions: undefined,
                  attachments: undefined,
                  replyTo: undefined,
                }
              : m
          )
        : prev.filter((m) => m.id !== id)
    })
  }, [])

  const uploadFiles = useCallback(
    (files: File[]): Promise<F0ChatAttachment[]> =>
      Promise.resolve(
        files.map((file): F0ChatAttachment => {
          const url = URL.createObjectURL(file)
          return file.type.startsWith("image/")
            ? { kind: "image", url, name: file.name }
            : {
                kind: "file",
                url,
                name: file.name,
                size: file.size,
                mimeType: file.type,
              }
        })
      ),
    []
  )

  // Pinned (favourite) state — toggled from the header overflow menu.
  const [pinned, setPinned] = useState(seed.channel.pinned ?? false)
  const togglePin = useCallback(() => setPinned((value) => !value), [])

  // Mention autocomplete source: filter the members by query. The current user
  // is included (you can @-mention yourself).
  const searchMembers = useCallback(
    (query: string): Promise<F0ChatUser[]> => {
      const q = query.trim().toLowerCase()
      const matches = [...seed.others, seed.me].filter((u) =>
        q.length === 0 ? true : u.name.toLowerCase().includes(q)
      )
      return Promise.resolve(matches)
    },
    [seed.others, seed.me]
  )

  // Unread is derived from the read pointer (matches how a real backend would
  // compute it from the last-read message).
  const { unreadCount, firstUnreadId } = useMemo(() => {
    const idx = lastReadId ? messages.findIndex((m) => m.id === lastReadId) : -1
    const unread = messages.slice(idx + 1).filter((m) => !m.isMine)
    return { unreadCount: unread.length, firstUnreadId: unread[0]?.id ?? null }
  }, [messages, lastReadId])

  return {
    currentUserId: seed.me.id,
    channel: { ...seed.channel, pinned },
    status: "ready",
    messages,
    typingUsers,
    hasMoreOlder,
    loadingOlder,
    unreadCount,
    firstUnreadId,
    sendMessage,
    retryMessage,
    loadOlder,
    toggleReaction,
    deleteMessage,
    onInputActivity: () => {},
    uploadFiles,
    // Demoes the "too many files" transient error (mirrors the AI chat).
    maxFiles: 5,
    // Same streaming dictation mock the AI chat / RichText stories use.
    transcribe: mockTranscribe,
    markRead,
    togglePin,
    // Only meaningful for groups; the composer suppresses mentions in DMs.
    searchMembers,
  }
}
