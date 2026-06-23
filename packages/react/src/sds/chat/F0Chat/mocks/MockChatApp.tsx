"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { MicrophoneNegative } from "@/icons/app"
import { type SidebarChatGroup } from "@/patterns/Navigation/Sidebar/Chats/types"

import {
  type F0ChatAttachment,
  type F0ChatMessage,
  type F0ChatReadersPage,
  type F0ChatRuntime,
  type F0ChatSendInput,
  type F0ChatUser,
} from "../types"

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------

const person = (
  id: string,
  firstName: string,
  lastName: string,
  subtitle: string
): F0ChatUser & { avatar: AvatarVariant } => ({
  id,
  name: `${firstName} ${lastName}`,
  subtitle,
  avatar: { type: "person", firstName, lastName },
  profileHref: `/people/${id}`,
})

const ME = person("me", "Alicia", "Keys", "Product Manager")
const RAUL = person(
  "u_raul",
  "Raúl",
  "Sigüenza Sánchez",
  "Senior Product Designer"
)
const MARIA = person(
  "u_maria",
  "María José",
  "Fernández Angulo",
  "People Partner"
)
const ANDRES = person(
  "u_andres",
  "Andrés",
  "Palomo Rivas",
  "Engineering Manager"
)
const SOFIA = person("u_sofia", "Sofía", "Delgado Peña", "Account Executive")
const MIGUEL = person("u_miguel", "Miguel Ángel", "Serrano", "Backend Engineer")
const CLAUDIA = person("u_claudia", "Claudia", "Ortega Molina", "Recruiter")
const DANIEL = person("u_daniel", "Daniel", "Herrero Blanco", "Finance Analyst")
const VALERIA = person("u_valeria", "Valeria", "Yáñez", "Data Analyst")

// ---------------------------------------------------------------------------
// Seeds — every conversation is deliberately different (empty, short, long,
// DMs and multi-person groups with topical messages).
// ---------------------------------------------------------------------------

type Line = {
  from: F0ChatUser
  body: string
  min: number
  /** Index of an earlier line in the same seed this message replies to. */
  replyToIndex?: number
}

type Seed = {
  id: string
  type: "dm" | "group"
  title: string
  avatar: AvatarVariant
  presence?: "online" | "offline"
  muted?: boolean
  participants: F0ChatUser[]
  lines: Line[]
  /** Trailing incoming messages that start unread. */
  unread?: number
  olderPages?: number
}

const team = (name: string) => ({ type: "team" as const, name })

const SEEDS: Seed[] = [
  {
    id: "dm-maria",
    type: "dm",
    title: MARIA.name,
    avatar: MARIA.avatar,
    presence: "online",
    participants: [MARIA],
    unread: 1,
    lines: [
      { from: ME, body: "Hi María! Do you have 10 min today?", min: 1450 },
      { from: MARIA, body: "Sure — after standup works for me", min: 1445 },
      {
        from: ME,
        body: "Perfect, I'll send an invite.",
        min: 1440,
        replyToIndex: 1,
      },
      {
        from: MARIA,
        body: "Just sent you the onboarding doc to review 🙌",
        min: 30,
      },
    ],
  },
  {
    id: "dm-andres",
    type: "dm",
    title: ANDRES.name,
    avatar: ANDRES.avatar,
    presence: "offline",
    participants: [ANDRES],
    unread: 3,
    olderPages: 2,
    lines: [
      { from: ANDRES, body: "Did the deploy go out?", min: 600 },
      { from: ME, body: "Yes, rolling out to 10% now", min: 595 },
      { from: ANDRES, body: "Nice. Error rate looks flat 👌", min: 590 },
      {
        from: ANDRES,
        body: "Can you take a look at the flaky test in CI?",
        min: 25,
      },
      { from: ANDRES, body: "It's the communications one again", min: 24 },
      { from: ANDRES, body: "No rush, just before EOD", min: 23 },
    ],
  },
  {
    id: "dm-sofia",
    type: "dm",
    title: SOFIA.name,
    avatar: SOFIA.avatar,
    presence: "offline",
    muted: true,
    participants: [SOFIA],
    unread: 4,
    lines: [
      { from: ME, body: "Renewal deck is ready whenever you are", min: 300 },
      { from: SOFIA, body: "Amazing, thank you!", min: 120 },
      { from: SOFIA, body: "Client pushed the call to Thursday", min: 40 },
      { from: SOFIA, body: "Can we add the pricing slide?", min: 38 },
      {
        from: SOFIA,
        body: "And maybe the case study from last quarter",
        min: 37,
      },
      { from: SOFIA, body: "🙏", min: 36 },
    ],
  },
  {
    id: "dm-miguel",
    type: "dm",
    title: MIGUEL.name,
    avatar: MIGUEL.avatar,
    presence: "online",
    participants: [MIGUEL],
    lines: [], // empty conversation — exercises the empty state
  },
  {
    id: "dm-claudia",
    type: "dm",
    title: CLAUDIA.name,
    avatar: CLAUDIA.avatar,
    presence: "offline",
    participants: [CLAUDIA],
    lines: [{ from: CLAUDIA, body: "Welcome aboard! 🎉", min: 2880 }],
  },
  {
    id: "dm-daniel",
    type: "dm",
    title: DANIEL.name,
    avatar: DANIEL.avatar,
    presence: "offline",
    participants: [DANIEL],
    lines: [
      { from: DANIEL, body: "Expense report approved.", min: 4320 },
      { from: ME, body: "Thanks Daniel!", min: 4315 },
    ],
  },
  {
    id: "grp-general",
    type: "group",
    title: "General",
    avatar: team("General"),
    participants: [RAUL, MARIA, ANDRES, VALERIA],
    unread: 2,
    olderPages: 2,
    lines: [
      { from: ME, body: "Morning everyone ☀️", min: 1500 },
      {
        from: RAUL,
        body: 'If you ever watch someone "coding", you might see them spending far more time staring into space than typing on their keyboard',
        min: 1495,
      },
      {
        from: VALERIA,
        body: "Haha so true. Debugging is 90% thinking.",
        min: 1490,
        replyToIndex: 1,
      },
      {
        from: ANDRES,
        body: "Reminder: we freeze deploys Friday afternoon for the release train. Please merge anything risky before Thursday EOD.",
        min: 200,
      },
      {
        from: MARIA,
        body: "Adding it to the team calendar 📆",
        min: 30,
        replyToIndex: 3,
      },
      {
        from: VALERIA,
        body: "I'll have the analytics dashboard ready for the demo on Monday.",
        min: 12,
      },
    ],
  },
  {
    id: "grp-marketing",
    type: "group",
    title: "Marketing",
    avatar: team("Marketing"),
    participants: [SOFIA, CLAUDIA],
    lines: [
      { from: SOFIA, body: "Campaign goes live tomorrow 🚀", min: 800 },
      { from: CLAUDIA, body: "Assets are in the shared drive", min: 795 },
      { from: ME, body: "Looks great, shipping it.", min: 790 },
    ],
  },
  {
    id: "grp-management",
    type: "group",
    title: "Management",
    avatar: team("Management"),
    participants: [ANDRES, DANIEL],
    lines: [], // empty group
  },
]

const SEED_BY_ID = new Map(SEEDS.map((s) => [s.id, s]))

const REPLIES = [
  "Got it 👍",
  "Makes sense to me",
  "On it!",
  "Thanks for the heads up",
  "Let's do it",
]

// Pool of names for the (synthetic) read-receipt list — a group message can be
// "Read by" hundreds, so the info panel paginates through these.
const READER_NAMES: [string, string][] = [
  ["Ana", "Torres"],
  ["Luis", "Gómez"],
  ["Marc", "Vidal"],
  ["Núria", "Roca"],
  ["Pau", "Serra"],
  ["Júlia", "Mas"],
  ["Carlos", "Ruiz"],
  ["Marta", "Lopez"],
  ["Iván", "Prieto"],
  ["Laura", "Bravo"],
  ["Sergio", "Cano"],
  ["Elena", "Gil"],
]

/** How many people "read" a message — large for groups to demo pagination. */
const readerTotalFor = (type: "dm" | "group", isMine: boolean): number =>
  !isMine ? 0 : type === "group" ? 247 : 1

/** Reader page size — owned by the runtime/host, not the UI. */
const READERS_PAGE_SIZE = 25

const mockReader = (index: number) => {
  const [firstName, lastName] = READER_NAMES[index % READER_NAMES.length]
  const id = `reader-${index}`
  return {
    user: {
      id,
      name: `${firstName} ${lastName}`,
      avatar: { type: "person" as const, firstName, lastName },
      subtitle: "Teammate",
      profileHref: `/people/${id}`,
    },
    readAt: new Date(Date.now() - index * 37 * 60_000).toISOString(),
  }
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

type ConvState = {
  messages: F0ChatMessage[]
  lastReadId: string | null
  typingIds: string[]
}

let seq = 0
const nextId = () => `m-${seq++}`

const buildSeedMessages = (seed: Seed): F0ChatMessage[] => {
  const built = seed.lines.map((line): F0ChatMessage => {
    const isMine = line.from.id === ME.id
    const sentMs = Date.now() - line.min * 60_000
    return {
      id: nextId(),
      author: line.from,
      body: line.body,
      createdAt: new Date(sentMs).toISOString(),
      isMine,
      status: isMine ? "read" : undefined,
      // The other side read my messages shortly after they were sent (DM info).
      readAt: isMine ? new Date(sentMs + 60_000).toISOString() : undefined,
    }
  })
  // Second pass: resolve reply references now that every message has an id.
  seed.lines.forEach((line, i) => {
    if (line.replyToIndex == null) return
    const target = built[line.replyToIndex]
    if (target) {
      built[i] = {
        ...built[i],
        replyTo: {
          id: target.id,
          author: target.author,
          body: target.body,
          attachments: target.attachments,
        },
      }
    }
  })
  return built
}

const initialConvState = (seed: Seed): ConvState => {
  const messages = buildSeedMessages(seed)
  const unread = seed.unread ?? 0
  const lastReadId =
    unread > 0
      ? (messages[messages.length - 1 - unread]?.id ?? null)
      : (messages.at(-1)?.id ?? null)
  return { messages, lastReadId, typingIds: [] }
}

const unreadCountOf = (state: ConvState): number => {
  const idx = state.lastReadId
    ? state.messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  return state.messages.slice(idx + 1).filter((m) => !m.isMine).length
}

type MockChatAppValue = {
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

export const MockChatAppProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
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

      // Only the first participant "replies" — and only to this conversation,
      // on the user's action (no ambient/background typing anywhere).
      const responder = SEED_BY_ID.get(convId)?.participants[0]
      if (!responder) return
      after(900, () =>
        patch(convId, (s) => ({ ...s, typingIds: [responder.id] }))
      )
      after(2200, () =>
        patch(convId, (s) => ({
          ...s,
          typingIds: [],
          messages: [
            ...s.messages.map(
              (m): F0ChatMessage =>
                m.isMine && m.status === "sent" ? { ...m, status: "read" } : m
            ),
            {
              id: nextId(),
              author: responder,
              body: REPLIES[s.messages.length % REPLIES.length],
              createdAt: new Date().toISOString(),
              isMine: false,
            },
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

  const value = useMemo<MockChatAppValue>(
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

  return (
    <MockChatAppContext.Provider value={value}>
      {children}
    </MockChatAppContext.Provider>
  )
}

const useMockChatApp = (): MockChatAppValue => {
  const ctx = useContext(MockChatAppContext)
  if (!ctx) throw new Error("useMockChatApp requires MockChatAppProvider")
  return ctx
}

const resolveUser = (seed: Seed, id: string): F0ChatUser =>
  id === ME.id
    ? ME
    : (seed.participants.find((p) => p.id === id) ?? {
        id,
        name: id,
      })

/** F0ChatRuntime for one conversation, backed by the shared store. */
export const useConversationRuntime = (convId: string): F0ChatRuntime => {
  const app = useMockChatApp()
  const seed = SEED_BY_ID.get(convId)
  const state = app.states[convId]

  const sendMessage = useCallback(
    (input: F0ChatSendInput) => app.send(convId, input),
    [app, convId]
  )
  const markRead = useCallback(() => app.markRead(convId), [app, convId])
  const toggleReaction = useCallback(
    (messageId: string, emoji: string) =>
      app.toggleReaction(convId, messageId, emoji),
    [app, convId]
  )
  const deleteMessage = useCallback(
    (messageId: string) => app.deleteMessage(convId, messageId),
    [app, convId]
  )
  const loadOlder = useCallback(() => app.loadOlder(convId), [app, convId])
  const uploadFiles = useCallback(
    (files: File[]): Promise<F0ChatAttachment[]> =>
      Promise.resolve(
        files.map((file): F0ChatAttachment => {
          const url = URL.createObjectURL(file)
          return file.type.startsWith("image/")
            ? { kind: "image", url, name: file.name, mimeType: file.type }
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

  const getMessageReaders = useCallback(
    (
      messageId: string,
      { cursor }: { cursor?: string | null }
    ): Promise<F0ChatReadersPage> => {
      const msg = (app.states[convId]?.messages ?? []).find(
        (m) => m.id === messageId
      )
      const total = readerTotalFor(seed?.type ?? "dm", !!msg?.isMine)
      const start = cursor ? parseInt(cursor, 10) : 0
      // The runtime owns the page size (the UI doesn't pick it).
      const count = Math.max(0, Math.min(READERS_PAGE_SIZE, total - start))
      const readers = Array.from({ length: count }, (_, i) =>
        mockReader(start + i)
      )
      const nextStart = start + count
      return Promise.resolve({
        readers,
        total,
        nextCursor: nextStart < total ? String(nextStart) : null,
      })
    },
    [app.states, convId, seed?.type]
  )

  const messages = state?.messages ?? []
  const typingUsers =
    seed && state ? state.typingIds.map((id) => resolveUser(seed, id)) : []
  const idx = state?.lastReadId
    ? messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  const unread = messages.slice(idx + 1).filter((m) => !m.isMine)

  return {
    currentUserId: ME.id,
    channel: {
      id: convId,
      type: seed?.type ?? "dm",
      title: seed?.title ?? convId,
      avatar: seed?.avatar ?? {
        type: "person",
        firstName: convId,
        lastName: "",
      },
      presence: seed?.presence,
      muted: seed?.muted,
      memberCount: seed ? seed.participants.length + 1 : undefined,
      // DMs expose the counterpart for the header identity hover card.
      user:
        seed?.type === "dm" ? (seed.participants[0] ?? undefined) : undefined,
    },
    status: "ready",
    messages,
    typingUsers,
    hasMoreOlder: app.hasMoreOlder(convId),
    loadingOlder: !!app.loadingOlder[convId],
    unreadCount: unread.length,
    firstUnreadId: unread[0]?.id ?? null,
    sendMessage,
    retryMessage: () => {},
    loadOlder,
    toggleReaction,
    deleteMessage,
    onInputActivity: () => {},
    uploadFiles,
    transcribe: mockTranscribe,
    markRead,
    getMessageReaders,
  }
}

/**
 * Sidebar groups (Direct messages / Groups) derived from the store, so unread
 * badges, presence and mute reflect live state and clear as conversations are
 * read.
 */
export const useMockChatGroups = (
  onSelect: (convId: string) => void
): SidebarChatGroup[] => {
  const { states } = useMockChatApp()
  return useMemo(() => {
    const toChat = (seed: Seed) => {
      const state = states[seed.id]
      const unreadCount = state ? unreadCountOf(state) : 0
      return {
        id: seed.id,
        label: seed.title,
        avatar: seed.avatar,
        onClick: () => onSelect(seed.id),
        unreadCount: unreadCount || undefined,
        // Live "Writing…" while the other side is typing in this conversation.
        typing: (state?.typingIds.length ?? 0) > 0,
        presence: seed.type === "dm" ? seed.presence : undefined,
        status: seed.muted
          ? { icon: MicrophoneNegative, label: "Muted" }
          : undefined,
      }
    }
    const dms = SEEDS.filter((s) => s.type === "dm").map(toChat)
    const groups = SEEDS.filter((s) => s.type === "group").map(toChat)
    return [
      { id: "direct-messages", title: "Direct messages", chats: dms },
      { id: "groups", title: "Groups", chats: groups },
    ]
  }, [states, onSelect])
}
