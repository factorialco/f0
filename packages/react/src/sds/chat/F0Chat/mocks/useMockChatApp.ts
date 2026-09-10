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
import { BellOff } from "@/icons/app"
import {
  isPost,
  isUserMessage,
  type F0ChatCreatePostInput,
  type F0ChatEditInput,
  type F0ChatItem,
  type F0ChatMessage,
  type F0ChatPost,
  type F0ChatPostComment,
  type F0ChatPostEvent,
  type F0ChatPostRequiredAction,
  type F0ChatReaction,
  type F0ChatPostVisit,
  type F0ChatSendInput,
  type F0ChatUser,
} from "../types"
import {
  type ConvState,
  ME,
  REPLIES,
  SEED_BY_ID,
  SEEDS,
  groupReadersFor,
  initialConvState,
  nextId,
  pickRandomTypers,
  restingTypingIds,
} from "./mockSeeds"

/**
 * The page a community channel sends the reader to: a post, or the form for a
 * new one. In the product these are the routes `/communities/post/:id` and
 * `/dashboard/post/new` — pages, not overlays — so here they take over the main
 * content and the conversation stays open on its edge.
 */
export type MockOpenSurface =
  | { kind: "post"; convId: string; postId: string; focusComment: boolean }
  /** `postId` present ⇒ editing that post rather than writing a new one. */
  | { kind: "composer"; convId: string; postId?: string }
  /**
   * A scheduled post, PREVIEWED: the page it will be once it goes out. Its own
   * kind rather than `post`, because it isn't one yet — there is no id in the
   * transcript to look up, and nothing to comment on.
   */
  | { kind: "scheduled"; convId: string; postId: string }

export type MockChatAppValue = {
  states: Record<string, ConvState>
  send: (convId: string, input: F0ChatSendInput) => void
  /** Re-send a failed message (same id) — flips back to sending, then sent. */
  retry: (convId: string, messageId: string) => void
  markRead: (convId: string, untilId?: string) => void
  /** Publish a post into a community (the `createPost` side of the runtime). */
  publishPost: (convId: string, input: F0ChatCreatePostInput) => Promise<void>
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

  // ── The post detail's own state ──────────────────────────────────────────
  // Threads are MATERIALISED ON FIRST OPEN rather than seeded: a post carries
  // its counts, and the bodies behind them only matter once someone looks. It
  // also keeps the seeds readable — nobody wants twelve invented comments in a
  // fixture file.
  /** postId → its comments, oldest first. */
  postComments: Record<string, F0ChatPostComment[]>
  /** postId → who has opened it. */
  postVisits: Record<string, F0ChatPostVisit[]>
  /** Fill in a post's thread if it hasn't been already, and record MY visit. */
  visitPost: (convId: string, postId: string) => void

  // ── What the main content is showing ─────────────────────────────────────
  // In THIS store rather than a provider of its own, because the two things
  // that have to agree — the chat panel and the page beside it — already share
  // this one. The panel isn't a child of the story's tree: it is stashed as an
  // element in `setPanelContent` and rendered by `HostedPanelWindow` deep
  // inside `ApplicationFrame`, so a second context reached it as `null` and
  // every post handler silently arrived undefined.
  /** The open surface, or `null` for whatever the page normally shows. */
  openSurface: MockOpenSurface | null
  openPostSurface: (
    convId: string,
    postId: string,
    focusComment: boolean
  ) => void
  openComposerSurface: (convId: string, postId?: string) => void
  openScheduledSurface: (convId: string, postId: string) => void
  closeSurface: () => void
  createComment: (convId: string, postId: string, text: string) => void
  editComment: (postId: string, commentId: string, text: string) => void
  deleteComment: (convId: string, postId: string, commentId: string) => void
  acknowledgePost: (convId: string, postId: string) => Promise<void>
  updatePost: (convId: string, postId: string, change: MockPostEdit) => void
  deletePost: (convId: string, postId: string) => void
  togglePostInteractions: (convId: string, postId: string) => void

  // ── Pinned and scheduled ─────────────────────────────────────────────────
  /** convId → the ids pinned there, newest pin first. */
  pinnedPostIds: Record<string, string[]>
  togglePostPin: (convId: string, postId: string) => void
  /** convId → the posts written but not yet visible to anyone. */
  scheduled: Record<string, MockScheduledPost[]>
  /** Publish one now: it leaves the list and joins the transcript. */
  publishScheduledNow: (convId: string, id: string) => void
  cancelScheduled: (convId: string, id: string) => void
  updateScheduled: (
    convId: string,
    id: string,
    input: F0ChatCreatePostInput
  ) => void
}

/**
 * What editing a post may change.
 *
 * Not `Partial<F0ChatPost>`: `undefined` there is ambiguous between "leave it
 * alone" and "take it away", and both are things the composer does — turning
 * an event back into an ordinary post, or dropping a cover. `null` REMOVES,
 * `undefined` leaves alone.
 */
export type MockPostEdit = {
  title?: string
  description?: string
  /** A `File` is newly picked; a string is one already uploaded. */
  cover?: File | string | null
  event?: F0ChatPostEvent | null
  allowCommentsAndReactions?: boolean
  requiredAction?: F0ChatPostRequiredAction["type"] | null
}

/**
 * A post that exists but nobody can read yet — scheduled for later, or kept as
 * a draft (`at: null`). It holds the whole create input so publishing it is the
 * same operation as publishing it was in the first place, minus the wait.
 */
export type MockScheduledPost = {
  id: string
  convId: string
  input: F0ChatCreatePostInput
  /** Already uploaded when it was written, so publishing doesn't re-upload. */
  coverUrl?: string
  /** ISO ⇒ scheduled; `null` ⇒ a draft with no date yet. */
  at: string | null
  /** ISO — when it was last written to. What a DRAFT is ordered and dated by,
   * having no date of its own to show. */
  savedAt: string
}

/**
 * The post a create input becomes. Pure and shared: publishing now and
 * publishing something that was scheduled must produce the SAME post, and two
 * copies of this drifted apart the moment one of them learned about events.
 */
const postFrom = (
  id: string,
  input: F0ChatCreatePostInput,
  coverUrl?: string
): F0ChatPost => ({
  type: "post",
  id,
  createdAt: new Date().toISOString(),
  author: ME,
  isMine: true,
  title: input.title,
  description: input.description,
  commentCount: 0,
  viewCount: 0,
  // An event draws its own card, so the cover goes ON the event rather than
  // beside it — the same either/or the card renders.
  ...(input.event
    ? { event: { ...input.event, mediaUrl: coverUrl } }
    : { mediaUrl: coverUrl }),
  // `!== false`, not `?? true`: the field is optional and its default is on, so
  // only an explicit `false` turns interactions off.
  allowCommentsAndReactions: input.allowCommentsAndReactions !== false,
  ...(input.requiredAction
    ? { requiredAction: { type: input.requiredAction } }
    : {}),
  // Your own post is yours to edit and delete from its own menu.
  canManage: true,
})

/**
 * One reaction toggled on or off, as a new list. Pure, and shared by messages
 * and posts — the two carry the same `F0ChatReaction[]`, so the arithmetic has
 * no business being written twice.
 */
const toggled = (
  current: F0ChatReaction[] | undefined,
  emoji: string
): F0ChatReaction[] => {
  const reactions = current ? [...current] : []
  const idx = reactions.findIndex((r) => r.emoji === emoji)
  if (idx === -1) {
    return [...reactions, { emoji, count: 1, reactedByMe: true }]
  }
  const reaction = reactions[idx]
  const count = reaction.count + (reaction.reactedByMe ? -1 : 1)
  // The last person removing theirs takes the pill with them.
  if (count <= 0) {
    return reactions.filter((_, i) => i !== idx)
  }
  reactions[idx] = { ...reaction, count, reactedByMe: !reaction.reactedByMe }
  return reactions
}

/** Enough different sentences that a thread doesn't read as one line repeated. */
const COMMENT_LINES = [
  "Great to see this — thanks for putting it together.",
  "Welcome everyone! 🎉",
  "Is there a recording for the people who couldn't make it?",
  "This answers a question I've been asking for weeks.",
  "Adding it to my calendar now.",
  "Congratulations to the whole team.",
  "Where can I find the full deck?",
  "Really clear write-up, thank you.",
]

/**
 * A post's comments, invented from its own count.
 *
 * Deterministic on purpose: the same post always produces the same thread, so
 * a story looks identical between reloads and a Chromatic snapshot doesn't
 * churn. Capped at eight so a post claiming 142 comments doesn't render 142 —
 * `hasMore` is what says the rest exist.
 */
const buildComments = (
  post: F0ChatPost,
  participants: F0ChatUser[]
): F0ChatPostComment[] => {
  const count = Math.min(post.commentCount, 8)
  const authors = participants.length > 0 ? participants : [ME]
  return Array.from({ length: count }, (_, i) => ({
    id: `${post.id}-c${i}`,
    author: authors[i % authors.length],
    text: `<p>${COMMENT_LINES[i % COMMENT_LINES.length]}</p>`,
    // Oldest first, an hour apart, all after the post itself.
    createdAt: new Date(
      new Date(post.createdAt).getTime() + (i + 1) * 3_600_000
    ).toISOString(),
    isMine: false,
  }))
}

/** Same idea for "who opened it", capped at twelve rows — the list scrolls,
 * it doesn't need to be exhaustive to look real. */
const buildVisits = (
  post: F0ChatPost,
  participants: F0ChatUser[]
): F0ChatPostVisit[] => {
  const count = Math.min(post.viewCount ?? 0, 12)
  const authors = participants.length > 0 ? participants : [ME]
  return Array.from({ length: count }, (_, i) => ({
    id: `${post.id}-v${i}`,
    // Every fifth one is anonymous, so the fallback is visible in the demo.
    author: i % 5 === 4 ? undefined : authors[i % authors.length],
    createdAt: new Date(
      new Date(post.createdAt).getTime() + (i + 1) * 1_800_000
    ).toISOString(),
  }))
}

const MockChatAppContext = createContext<MockChatAppValue | null>(null)

export const useMockChatApp = (): MockChatAppValue => {
  const ctx = useContext(MockChatAppContext)
  if (!ctx) {
    throw new Error("useMockChatApp requires MockChatAppProvider")
  }
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
  // Live transport state seeded from the channel's generic statuses. The
  // public F0 shapes keep using statuses; this boolean only drives the mock's
  // interactive Mute/Unmute toggle.
  const [muted, setMuted] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      SEEDS.filter((seed) =>
        seed.statuses?.some((status) => status.icon === BellOff)
      ).map((seed) => [seed.id, true])
    )
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

  /**
   * A local URL for a file the composer handed over — what a real host gets
   * back from its upload. Kept so they can be revoked together: an object URL
   * pins its blob in memory until it is, and a story that publishes a dozen
   * covers would hold every one of them.
   */
  const objectUrls = useRef<string[]>([])
  const objectUrl = useCallback((file: File) => {
    const url = URL.createObjectURL(file)
    objectUrls.current.push(url)
    return url
  }, [])
  useEffect(
    () => () => {
      objectUrls.current.forEach(URL.revokeObjectURL)
      objectUrls.current = []
    },
    []
  )

  const patch = useCallback(
    (convId: string, fn: (s: ConvState) => ConvState) => {
      setStates((prev) => {
        const current = prev[convId]
        if (!current) {
          return prev
        }
        return { ...prev, [convId]: fn(current) }
      })
    },
    []
  )

  const markRead = useCallback(
    (convId: string, untilId?: string) => {
      patch(convId, (s) => {
        // `untilId` is the partial read a feed does: the pointer advances to
        // the post the reader actually reached, not to the end of the list.
        const lastId = untilId ?? s.messages.at(-1)?.id ?? null
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
      if (!replySeed) {
        return
      }
      // Nobody answers a community with a chat message. (Nothing sends one
      // there either — this is the belt to the composer's braces.)
      if (replySeed.type === "community") {
        return
      }
      const onlineParticipants = replySeed.participants.filter((p) => p.online)
      if (onlineParticipants.length === 0) {
        return
      }
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
                  ? {
                      ...m,
                      status: "read",
                      readBy: groupReadersFor(replySeed, m.author.id),
                    }
                  : m
            ),
            ...typers.map(
              (responder, i): F0ChatMessage => ({
                id: nextId(),
                author: responder,
                body: REPLIES[(s.messages.length + i) % REPLIES.length],
                createdAt: new Date(Date.now() + i).toISOString(),
                isMine: false,
                readBy: groupReadersFor(replySeed, responder.id),
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
          // MESSAGES **AND POSTS**. Both carry `reactions` in the same shape and
          // both go through the same runtime call with their own id — and a
          // post is not a "user message", so a guard that only let those
          // through computed the new list and threw it away, which is a
          // reaction button that visibly does nothing.
          if (!isUserMessage(m) && !isPost(m)) {
            return m
          }
          if (m.id !== messageId) {
            return m
          }
          return { ...m, reactions: toggled(m.reactions, emoji) }
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
        if (!target) {
          return s
        }
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
      if (loadingOlder[convId] || (olderLeft.current[convId] ?? 0) <= 0) {
        return
      }
      setLoadingOlder((p) => ({ ...p, [convId]: true }))
      after(700, () => {
        patch(convId, (s) => {
          const oldest = s.messages[0]
          const base = oldest
            ? new Date(oldest.createdAt).getTime()
            : Date.now()
          const responder = SEED_BY_ID.get(convId)?.participants[0] ?? ME
          const seed = SEED_BY_ID.get(convId)
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
              readBy: groupReadersFor(seed, author.id),
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

  // ── Post detail ───────────────────────────────────────────────────────────

  const [postComments, setPostComments] = useState<
    Record<string, F0ChatPostComment[]>
  >({})
  const [postVisits, setPostVisits] = useState<
    Record<string, F0ChatPostVisit[]>
  >({})

  /** Rewrites one post in place, leaving the rest of the transcript alone. */
  const patchPost = useCallback(
    (convId: string, postId: string, change: Partial<F0ChatPost>) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((item) =>
          isPost(item) && item.id === postId ? { ...item, ...change } : item
        ),
      }))
    },
    [patch]
  )

  /**
   * Opening a post is also READING it: the thread is materialised and the visit
   * recorded, once.
   *
   * Every decision is taken BEFORE any `setState`, and the three updates are
   * separate. Deciding inside an updater — which is what this used to do, with
   * a `patchPost` buried in `setPostVisits` — makes the updater impure: React
   * invokes it twice in StrictMode, so the id counter ran on, the view count
   * moved from a phase it has no business moving in, and a throw there took the
   * host's own `onOpenPost` down with it. Which is why clicking a post did
   * nothing at all.
   */
  const visitPost = useCallback(
    (convId: string, postId: string) => {
      const seed = SEED_BY_ID.get(convId)
      const post = states[convId]?.messages.find(
        (item): item is F0ChatPost => isPost(item) && item.id === postId
      )
      if (!seed || !post) {
        return
      }

      const knownVisits = postVisits[postId]
      const visits = knownVisits ?? buildVisits(post, seed.participants)
      const firstVisit = !visits.some((visit) => visit.author?.id === ME.id)

      if (!postComments[postId]) {
        setPostComments((prev) => ({
          ...prev,
          [postId]: buildComments(post, seed.participants),
        }))
      }

      if (!firstVisit) {
        if (!knownVisits) {
          setPostVisits((prev) => ({ ...prev, [postId]: visits }))
        }
        return
      }

      const mine: F0ChatPostVisit = {
        id: nextId(),
        author: ME,
        createdAt: new Date().toISOString(),
      }
      setPostVisits((prev) => ({ ...prev, [postId]: [mine, ...visits] }))
      patchPost(convId, postId, { viewCount: (post.viewCount ?? 0) + 1 })
    },
    [states, postVisits, postComments, patchPost]
  )

  const createComment = useCallback(
    (convId: string, postId: string, text: string) => {
      const comment: F0ChatPostComment = {
        id: nextId(),
        author: ME,
        text: `<p>${text}</p>`,
        createdAt: new Date().toISOString(),
        isMine: true,
      }
      setPostComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] ?? []), comment],
      }))
      // The counter on the feed card is the same number, so it moves too.
      setStates((prev) => {
        const current = prev[convId]
        if (!current) {
          return prev
        }
        return {
          ...prev,
          [convId]: {
            ...current,
            messages: current.messages.map((item) =>
              isPost(item) && item.id === postId
                ? { ...item, commentCount: item.commentCount + 1 }
                : item
            ),
          },
        }
      })
    },
    []
  )

  const editComment = useCallback(
    (postId: string, commentId: string, text: string) => {
      setPostComments((prev) => ({
        ...prev,
        [postId]: (prev[postId] ?? []).map((comment) =>
          comment.id === commentId
            ? { ...comment, text: `<p>${text}</p>` }
            : comment
        ),
      }))
    },
    []
  )

  const deleteComment = useCallback(
    (convId: string, postId: string, commentId: string) => {
      setPostComments((prev) => ({
        ...prev,
        [postId]: (prev[postId] ?? []).filter(
          (comment) => comment.id !== commentId
        ),
      }))
      setStates((prev) => {
        const current = prev[convId]
        if (!current) {
          return prev
        }
        return {
          ...prev,
          [convId]: {
            ...current,
            messages: current.messages.map((item) =>
              isPost(item) && item.id === postId
                ? {
                    ...item,
                    commentCount: Math.max(0, item.commentCount - 1),
                  }
                : item
            ),
          },
        }
      })
    },
    []
  )

  /** Awaited by the bar so its spinner is real rather than decorative. */
  const acknowledgePost = useCallback(
    (convId: string, postId: string): Promise<void> =>
      new Promise((resolve) =>
        after(600, () => {
          patchPost(convId, postId, {
            requiredAction: {
              type: "acknowledge",
              completedAt: new Date().toISOString(),
            },
          })
          resolve()
        })
      ),
    [after, patchPost]
  )

  const updatePost = useCallback(
    (convId: string, postId: string, change: MockPostEdit) => {
      // Uploaded once, outside the updater: `patch` runs its callback twice
      // under StrictMode, and an object URL created in there would leak one.
      const uploaded =
        change.cover instanceof File ? objectUrl(change.cover) : undefined
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.map((item) => {
          if (!isPost(item) || item.id !== postId) {
            return item
          }
          const next = { ...item }
          if (change.title !== undefined) {
            next.title = change.title
          }
          if (change.description !== undefined) {
            next.description = change.description
          }
          if (change.allowCommentsAndReactions !== undefined) {
            next.allowCommentsAndReactions = change.allowCommentsAndReactions
          }
          if (change.requiredAction !== undefined) {
            next.requiredAction = change.requiredAction
              ? // Editing must not un-acknowledge the people who already have.
                (item.requiredAction ?? { type: change.requiredAction })
              : undefined
          }
          // `undefined` cover means "unchanged", so fall back to whichever of
          // the two places the post currently keeps it.
          const cover =
            change.cover === undefined
              ? (item.event?.mediaUrl ?? item.mediaUrl)
              : change.cover === null
                ? undefined
                : (uploaded ?? (change.cover as string))
          if (change.event !== undefined) {
            // An event carries the cover itself; an ordinary post carries it
            // beside the body. Turning one into the other MOVES it.
            next.event = change.event
              ? { ...change.event, mediaUrl: cover }
              : undefined
            next.mediaUrl = change.event ? undefined : cover
          } else if (item.event) {
            next.event = { ...item.event, mediaUrl: cover }
          } else {
            next.mediaUrl = cover
          }
          return next
        }),
      }))
    },
    [patch, objectUrl]
  )

  const deletePost = useCallback(
    (convId: string, postId: string) => {
      patch(convId, (s) => ({
        ...s,
        messages: s.messages.filter(
          (item) => !(isPost(item) && item.id === postId)
        ),
      }))
    },
    [patch]
  )

  // ── Pinned posts ────────────────────────────────────────────────────────
  // Ids per community rather than a flag on the post: the ORDER is the state
  // (newest pin first), and a flag scattered across the transcript has no
  // order to it.
  //
  // Seeded from the posts themselves: ids are minted while the transcript is
  // built, so a seed can only SAY which line is pinned (`pinned: true`), not
  // name the id. Reading them back here is what turns that into an order.
  const [pinnedPostIds, setPinnedPostIds] = useState<Record<string, string[]>>(
    () =>
      Object.fromEntries(
        Object.entries(states)
          .map(([convId, state]) => [
            convId,
            state.messages
              .filter((item): item is F0ChatPost => isPost(item))
              .filter((post) => post.pinnedAt)
              .sort((a, b) => (a.pinnedAt! < b.pinnedAt! ? 1 : -1))
              .map((post) => post.id),
          ])
          .filter(([, ids]) => ids.length > 0)
      )
  )

  const togglePostPin = useCallback(
    (convId: string, postId: string) => {
      const at = new Date().toISOString()
      let nowPinned = false
      setPinnedPostIds((prev) => {
        const current = prev[convId] ?? []
        const isPinned = current.includes(postId)
        nowPinned = !isPinned
        return {
          ...prev,
          [convId]: isPinned
            ? current.filter((id) => id !== postId)
            : // Newest pin first, which is the order the bar cycles in.
              [postId, ...current],
        }
      })
      // The card's own badge. Decided outside the updater above, which is why
      // `nowPinned` is read after it: `setPinnedPostIds`'s callback must stay
      // pure (see `visitPost` for what happens when it doesn't).
      patchPost(convId, postId, { pinnedAt: nowPinned ? at : undefined })
    },
    [patchPost]
  )

  // ── Scheduled posts ─────────────────────────────────────────────────────
  const [scheduled, setScheduled] = useState<
    Record<string, MockScheduledPost[]>
  >(() =>
    Object.fromEntries(
      SEEDS.filter((s) => s.scheduledPosts?.length).map((s) => [
        s.id,
        (s.scheduledPosts ?? []).map((post) => ({
          id: post.id,
          convId: s.id,
          input: {
            title: post.title,
            description: post.description,
            event: post.event,
          } satisfies F0ChatCreatePostInput,
          coverUrl: post.coverUrl,
          at: post.at,
          savedAt:
            post.savedAt ?? new Date(Date.now() - 60_000 * 60).toISOString(),
        })),
      ])
    )
  )

  const publishScheduledNow = useCallback(
    (convId: string, id: string) => {
      const post = (scheduled[convId] ?? []).find((item) => item.id === id)
      if (!post) {
        return
      }
      setScheduled((prev) => ({
        ...prev,
        [convId]: (prev[convId] ?? []).filter((item) => item.id !== id),
      }))
      // A NEW id: the scheduled one was never a transcript item, and reusing it
      // would collide with nothing today but is a lie about what happened.
      const publishedId = nextId()
      patch(convId, (s) => ({
        ...s,
        messages: [
          ...s.messages,
          postFrom(publishedId, post.input, post.coverUrl),
        ],
        lastReadId: publishedId,
      }))
    },
    [scheduled, patch]
  )

  const cancelScheduled = useCallback((convId: string, id: string) => {
    setScheduled((prev) => ({
      ...prev,
      [convId]: (prev[convId] ?? []).filter((item) => item.id !== id),
    }))
  }, [])

  const updateScheduled = useCallback(
    (convId: string, id: string, input: F0ChatCreatePostInput) => {
      setScheduled((prev) => ({
        ...prev,
        [convId]: (prev[convId] ?? []).map((item) =>
          item.id === id
            ? {
                ...item,
                input,
                at: input.publishedAt ?? item.at,
                // Editing a draft is writing it: that is what dates it.
                savedAt: new Date().toISOString(),
              }
            : item
        ),
      }))
    },
    []
  )

  const [openSurface, setOpenSurface] = useState<MockOpenSurface | null>(null)

  const openPostSurface = useCallback(
    (convId: string, postId: string, focusComment: boolean) => {
      // Reading it is part of opening it.
      visitPost(convId, postId)
      setOpenSurface({ kind: "post", convId, postId, focusComment })
    },
    [visitPost]
  )

  const openComposerSurface = useCallback(
    (convId: string, postId?: string) =>
      setOpenSurface({ kind: "composer", convId, postId }),
    []
  )

  const openScheduledSurface = useCallback(
    (convId: string, postId: string) =>
      setOpenSurface({ kind: "scheduled", convId, postId }),
    []
  )

  const closeSurface = useCallback(() => setOpenSurface(null), [])

  const togglePostInteractions = useCallback(
    (convId: string, postId: string) => {
      const post = states[convId]?.messages.find(
        (item): item is F0ChatPost => isPost(item) && item.id === postId
      )
      if (!post) {
        return
      }
      patchPost(convId, postId, {
        allowCommentsAndReactions: post.allowCommentsAndReactions === false,
      })
    },
    [states, patchPost]
  )

  /**
   * Publish a post. Resolves AFTER the post lands, because the composer dialog
   * stays open until it knows — and it never fails: unlike `send`'s flaky
   * quarter, a post that doesn't publish is a form error the writer has to see
   * and retry, not a red echo sitting in a feed.
   */
  const publishPost = useCallback(
    (convId: string, input: F0ChatCreatePostInput): Promise<void> => {
      const id = nextId()
      // The cover arrives as a File. A real host uploads it and hands back a
      // URL; the mock makes a local one, which is the same thing to everything
      // downstream. Revoked when the store unmounts — see `objectUrls`.
      const coverUrl = input.cover ? objectUrl(input.cover) : undefined
      // Scheduled (an ISO string) or a draft (`null`) — neither is visible to
      // anyone yet, so neither joins the transcript. It is still a real post
      // though: it waits somewhere it can be seen, edited and published.
      if (input.publishedAt !== undefined) {
        setScheduled((prev) => ({
          ...prev,
          [convId]: [
            ...(prev[convId] ?? []),
            {
              id,
              convId,
              input,
              coverUrl,
              at: input.publishedAt ?? null,
              savedAt: new Date().toISOString(),
            },
          ],
        }))
        return new Promise((resolve) => after(600, resolve))
      }
      patch(convId, (s) => {
        const post = postFrom(id, input, coverUrl)
        // Your own post is read the moment you publish it.
        return { ...s, messages: [...s.messages, post], lastReadId: id }
      })
      return new Promise((resolve) => after(600, resolve))
    },
    [after, patch, objectUrl]
  )

  return useMemo<MockChatAppValue>(
    () => ({
      states,
      send,
      retry,
      markRead,
      publishPost,
      postComments,
      postVisits,
      visitPost,
      openSurface,
      openPostSurface,
      openComposerSurface,
      openScheduledSurface,
      closeSurface,
      createComment,
      editComment,
      deleteComment,
      acknowledgePost,
      updatePost,
      deletePost,
      togglePostInteractions,
      pinnedPostIds,
      togglePostPin,
      scheduled,
      publishScheduledNow,
      cancelScheduled,
      updateScheduled,
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
      publishPost,
      postComments,
      postVisits,
      visitPost,
      openSurface,
      openPostSurface,
      openComposerSurface,
      openScheduledSurface,
      closeSurface,
      createComment,
      editComment,
      deleteComment,
      acknowledgePost,
      updatePost,
      deletePost,
      togglePostInteractions,
      pinnedPostIds,
      togglePostPin,
      scheduled,
      publishScheduledNow,
      cancelScheduled,
      updateScheduled,
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
