"use client"

import { useCallback, useMemo, type ReactNode } from "react"
import {
  BellOff,
  Delete,
  PalmTree,
  Pencil,
  PushPin,
  PushPinSolid,
  Megaphone,
} from "@/icons/app"
import { LinkProvider } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { type SidebarChatGroup } from "@/patterns/Navigation/Sidebar/Chats/types"
import {
  isPost,
  isUserMessage,
  type F0ChatComposableAttachment,
  type F0ChatCreatePostInput,
  type F0ChatEditInput,
  type F0ChatItem,
  type F0ChatPost,
  type F0ChatPinnedPost,
  type F0ChatPostAction,
  type F0ChatRuntime,
  type F0ChatShelfAction,
  type F0ChatScheduledPost,
  type F0ChatDraftPost,
  type F0ChatSearchResult,
  type F0ChatSendInput,
  type F0ChatUser,
} from "../types"
import { stripHtml } from "../utils/posts"
import { MOCK_MAX_FILE_SIZE_BYTES } from "./constants"
import {
  type Seed,
  ME,
  SEED_BY_ID,
  SEEDS,
  resolveUser,
  unreadCountOf,
  unreadMentionCountOf,
} from "./mockSeeds"
import {
  MockChatAppContext,
  useMockChatApp,
  useMockChatStore,
  type MockOpenSurface,
} from "./useMockChatApp"

/**
 * The URL the mock would be at. Opening a post, previewing a scheduled one and
 * writing a new one are ROUTES in the product — the three the surfaces are
 * named after — so the mock has to change its address when they open.
 *
 * It is not cosmetic. F0 collapses a fullscreen panel whenever the route
 * changes, because a fullscreen chat covers the very page the reader is being
 * sent to. Without a path that moves, opening a post from a fullscreen panel
 * puts it behind the chat and looks like nothing happened.
 *
 * `/dashboard` rather than `/` for the resting state: `/` is the demo menu's
 * Dashboard entry, and matching it would light that row up in every story.
 */
const mockPathFor = (surface: MockOpenSurface | null): string => {
  if (!surface) {
    return "/dashboard"
  }
  if (surface.kind === "post") {
    return `/communities/post/${surface.postId}`
  }
  if (surface.kind === "scheduled") {
    return `/communities/scheduled/${surface.postId}`
  }
  return surface.postId
    ? `/dashboard/post/${surface.postId}/edit`
    : "/dashboard/post/new"
}

export const MockChatAppProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  const value = useMockChatStore()
  return (
    <MockChatAppContext.Provider value={value}>
      {/* ABOVE whatever mounts the panel, so the AI chat state can see the
          path change. A `LinkProvider` deeper in the tree — the post header's,
          for instance — is invisible from up there. */}
      <LinkProvider currentPath={mockPathFor(value.openSurface)}>
        {children}
      </LinkProvider>
    </MockChatAppContext.Provider>
  )
}

export const resolveMockReactionUsers = (
  seed: Seed | undefined,
  messages: F0ChatItem[],
  messageId: string,
  emoji: string
): F0ChatUser[] => {
  const message = messages.find(
    (item) => isUserMessage(item) && item.id === messageId
  )
  if (!seed || !message || !isUserMessage(message)) {
    return []
  }

  const reaction = message.reactions?.find((item) => item.emoji === emoji)
  if (!reaction) {
    return []
  }
  if (reaction.users?.length === reaction.count) {
    return reaction.users
  }

  return seed.participants.slice(0, reaction.count)
}

/**
 * F0ChatRuntime for one conversation, backed by the shared store.
 *
 * A community's post surfaces are wired straight to that store rather than
 * handed in by the caller. They used to be props, and every story that forgot
 * them got a feed whose cards did nothing — a failure mode with no error and no
 * visible cause. There is exactly one mock host, so there is no reason for it
 * to be configurable.
 */
export const useConversationRuntime = (convId: string): F0ChatRuntime => {
  const app = useMockChatApp()
  const i18n = useI18n()
  const seed = SEED_BY_ID.get(convId)
  const state = app.states[convId]

  const sendMessage = useCallback(
    (input: F0ChatSendInput) => app.send(convId, input),
    [app, convId]
  )
  const retryMessage = useCallback(
    (messageId: string) => app.retry(convId, messageId),
    [app, convId]
  )
  const markRead = useCallback(
    (untilId?: string) => app.markRead(convId, untilId),
    [app, convId]
  )
  const createPost = useCallback(
    (input: F0ChatCreatePostInput) => app.publishPost(convId, input),
    [app, convId]
  )
  const togglePin = useCallback(() => app.togglePin(convId), [app, convId])
  const toggleMute = useCallback(() => app.toggleMute(convId), [app, convId])
  const reconnect = useCallback(() => app.reconnect(convId), [app, convId])
  const deleteFailedMessage = useCallback(
    (messageId: string) => app.discardFailed(convId, messageId),
    [app, convId]
  )
  const toggleReaction = useCallback(
    (messageId: string, emoji: string) =>
      app.toggleReaction(convId, messageId, emoji),
    [app, convId]
  )
  const loadReactionUsers = useCallback(
    async (messageId: string, emoji: string): Promise<F0ChatUser[]> =>
      resolveMockReactionUsers(
        seed,
        app.states[convId]?.messages ?? [],
        messageId,
        emoji
      ),
    [app.states, convId, seed]
  )
  const deleteMessage = useCallback(
    (messageId: string) => app.deleteMessage(convId, messageId),
    [app, convId]
  )
  const editMessage = useCallback(
    (messageId: string, input: F0ChatEditInput) =>
      app.editMessage(convId, messageId, input),
    [app, convId]
  )
  const loadOlder = useCallback(() => app.loadOlder(convId), [app, convId])
  const uploadFiles = useCallback(
    (files: File[]): Promise<F0ChatComposableAttachment[]> =>
      // Simulate a real upload so the composer's uploading skeleton is visible.
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              files.map((file): F0ChatComposableAttachment => {
                const url = URL.createObjectURL(file)
                return file.type.startsWith("image/")
                  ? { kind: "image", url, name: file.name, mimeType: file.type }
                  : {
                      kind: "file",
                      url,
                      name: file.name,
                      size: file.size,
                      mimeType: file.type,
                      thumbnailUrl: file.type.startsWith("video/")
                        ? "/video-poster.webp"
                        : undefined,
                    }
              })
            ),
          1200
        )
      ),
    []
  )

  // All seed messages are loaded in the mock, so this is a client-side scan —
  // the same shape the Stream adapter implements with `channel.search`.
  const searchMessages = useCallback(
    (query: string): Promise<F0ChatSearchResult[]> => {
      const needle = query.trim().toLowerCase()
      const hits = (app.states[convId]?.messages ?? [])
        .filter(isUserMessage)
        .filter((m) => !m.deleted && m.body.toLowerCase().includes(needle))
        .map((m): F0ChatSearchResult => ({ id: m.id }))
      return Promise.resolve(hits)
    },
    [app.states, convId]
  )

  // Member search for the mention popover — both DMs (the two people) and
  // groups. The current user is included (you can @-mention yourself).
  const searchMembers = useCallback(
    (query: string): Promise<F0ChatUser[]> => {
      if (!seed) {
        return Promise.resolve([])
      }
      const q = query.trim().toLowerCase()
      const matches = [...seed.participants, ME]
        .filter((p) =>
          q.length === 0 ? true : p.name.toLowerCase().includes(q)
        )
        .map(
          (p): F0ChatUser => ({
            id: p.id,
            name: p.name,
            avatar: p.avatar,
            // Carry the full profile so a sent mention's hover card is complete
            // (role line + "View profile"), like the sender avatar's card.
            subtitle: p.subtitle,
            profileHref: p.profileHref,
          })
        )
      return Promise.resolve(matches)
    },
    [seed]
  )

  const isCommunity = seed?.type === "community"

  const openPost = useCallback(
    (postId: string, context: { source: "card" | "comment" | "pinned" }) =>
      // Opening a post is also READING it — `openPostSurface` records the visit
      // and materialises the thread before the page mounts.
      app.openPostSurface(convId, postId, context.source === "comment"),
    [app, convId]
  )

  const composePost = useCallback(
    () => app.openComposerSurface(convId),
    [app, convId]
  )

  // The origin label on an aggregated feed's cards: leave the feed for the
  // community the post was published in. A channel switch, not a page — which
  // is why it is not `openPost` with a different argument.
  const openCommunity = useCallback(
    (communityId: string) => app.openConversation(communityId),
    [app]
  )

  const postActions = useCallback(
    (post: F0ChatPost): F0ChatPostAction[] => {
      // Pinning is a MODERATION verb, not an authorship one: whoever may post
      // here may decide what stays at the top, including someone else's post.
      // That is the host's call to make, which is exactly why F0 asks for the
      // menu instead of building it.
      const pin: F0ChatPostAction[] = seed?.canPost
        ? [
            {
              id: "pin",
              label: post.pinnedAt
                ? i18n.t("chat.community.unpinPost")
                : i18n.t("chat.community.pinPost"),
              icon: post.pinnedAt ? PushPinSolid : PushPin,
              onClick: () => app.togglePostPin(convId, post.id),
            },
          ]
        : []

      return post.isMine
        ? [
            ...pin,
            {
              id: "edit",
              label: i18n.t("communities.composer.editPost"),
              icon: Pencil,
              onClick: () => app.openComposerSurface(convId, post.id),
            },
            {
              id: "delete",
              label: i18n.t("communities.detail.delete"),
              icon: Delete,
              critical: true,
              onClick: () => app.deletePost(convId, post.id),
            },
          ]
        : [
            ...pin,
            // Reporting is the one thing a reader can do to someone else's
            // post, and the mock has nowhere to report it to — so it stays a
            // no-op with a real label rather than pretending to be more.
            { id: "report", label: "Report post", onClick: () => {} },
          ]
    },
    [app, convId, i18n, seed]
  )

  const unpinPost = useCallback(
    (postId: string) => app.togglePostPin(convId, postId),
    [app, convId]
  )

  const openScheduledPost = useCallback(
    (postId: string) => app.openScheduledSurface(convId, postId),
    [app, convId]
  )

  const scheduledActions = useCallback(
    (post: F0ChatScheduledPost): F0ChatShelfAction[] => [
      {
        id: "publish-now",
        label: i18n.t("chat.community.publishNow"),
        icon: Megaphone,
        onClick: () => app.publishScheduledNow(convId, post.id),
      },
      {
        id: "edit",
        label: i18n.t("communities.composer.editPost"),
        icon: Pencil,
        onClick: () => app.openComposerSurface(convId, post.id),
      },
      {
        id: "cancel",
        label: i18n.t("chat.community.cancelScheduled"),
        icon: Delete,
        critical: true,
        onClick: () => app.cancelScheduled(convId, post.id),
      },
    ],
    [app, convId, i18n]
  )

  const openDraftPost = useCallback(
    // Into the composer with it loaded, not into a preview: there is nothing
    // to preview about something half-written.
    (postId: string) => app.openComposerSurface(convId, postId),
    [app, convId]
  )

  const draftActions = useCallback(
    (post: F0ChatDraftPost): F0ChatShelfAction[] => [
      {
        id: "publish",
        // "Publish", not "Publish now": there is no later for it to be moved
        // forward from.
        label: i18n.t("chat.community.publishDraft"),
        icon: Megaphone,
        onClick: () => app.publishScheduledNow(convId, post.id),
      },
      {
        id: "delete",
        label: i18n.t("chat.community.deleteDraft"),
        icon: Delete,
        critical: true,
        onClick: () => app.cancelScheduled(convId, post.id),
      },
    ],
    [app, convId, i18n]
  )

  const messages = state?.messages ?? []

  // A pin whose post has since been deleted is dropped rather than left
  // pointing nowhere — the bar would name a post the jump could never reach.
  const pinnedPosts = useMemo<F0ChatPinnedPost[]>(
    () =>
      (app.pinnedPostIds[convId] ?? [])
        .map((id) =>
          (state?.messages ?? []).find(
            (item): item is F0ChatPost => isPost(item) && item.id === id
          )
        )
        .filter((post): post is F0ChatPost => !!post)
        .map((post) => ({
          id: post.id,
          title: post.title,
          pinnedAt: post.pinnedAt ?? post.createdAt,
          // Plain text: the row clamps it to two lines, and a preview is no
          // place to render (and then have to clamp) the post's markup.
          excerpt: post.description ? stripHtml(post.description) : undefined,
          // The cover, or an event's own image when it takes the cover's place.
          thumbnailUrl: post.mediaUrl ?? post.event?.mediaUrl,
        })),
    [app.pinnedPostIds, convId, state]
  )

  // The store keeps one list of "written but not visible", and `at` splits it:
  // an ISO string is scheduled, `null` is a draft. They part company HERE
  // rather than in the store, because it is the panel that shows them as two
  // different things — the store's job is only to remember them.
  const scheduledPosts = useMemo<F0ChatScheduledPost[]>(
    () =>
      (app.scheduled[convId] ?? [])
        .filter(
          (post): post is typeof post & { at: string } => post.at !== null
        )
        .map((post) => ({
          id: post.id,
          title: post.input.title,
          scheduledFor: post.at,
          event: post.input.event,
          excerpt: post.input.description
            ? stripHtml(post.input.description)
            : undefined,
          // `coverUrl` is the one already uploaded when it was written.
          thumbnailUrl: post.coverUrl ?? post.input.event?.mediaUrl,
        }))
        // Soonest first: the one about to go out is the one you may still want
        // to stop.
        .sort((a, b) => (a.scheduledFor < b.scheduledFor ? -1 : 1)),
    [app.scheduled, convId]
  )

  const draftPosts = useMemo<F0ChatDraftPost[]>(
    () =>
      (app.scheduled[convId] ?? [])
        .filter((post) => post.at === null)
        .map((post) => ({
          id: post.id,
          title: post.input.title,
          savedAt: post.savedAt,
          excerpt: post.input.description
            ? stripHtml(post.input.description)
            : undefined,
          thumbnailUrl: post.coverUrl ?? post.input.event?.mediaUrl,
        }))
        // NEWEST first, the opposite of scheduled: what you were writing last
        // is what you came back for.
        .sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1)),
    [app.scheduled, convId]
  )

  const typingUsers =
    seed && state ? state.typingIds.map((id) => resolveUser(seed, id)) : []
  const idx = state?.lastReadId
    ? messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  const unread = messages
    .slice(idx + 1)
    .filter((m) => isUserMessage(m) && !m.isMine)

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
      pinned: app.pinned[convId] ?? false,
      // Surface the same states the sidebar shows (e.g. on vacation) in the header.
      statuses: [
        ...(seed?.statuses?.filter((status) => status.icon !== BellOff) ?? []),
        ...(app.muted[convId]
          ? [{ icon: BellOff, label: i18n.chat.muted }]
          : []),
        ...(seed?.type === "dm" && seed.participants[0]?.vacation
          ? [{ icon: PalmTree, label: "On vacation" }]
          : []),
      ],
      memberCount: seed ? seed.participants.length + 1 : undefined,
      // DMs expose the counterpart for the header identity hover card.
      user:
        seed?.type === "dm" ? (seed.participants[0] ?? undefined) : undefined,
      readOnlyNotice: seed?.readOnlyNotice,
      // Summaries resolved from the store: the pin order lives there, and the
      // title comes from whichever post it names — so a pinned post that has
      // since been edited says what it says NOW.
      // Pins are for READING: they are the channel's own table of contents, and
      // everyone gets them. What is still unpublished is not — a reader has no
      // business seeing what the Communications team has queued for Monday.
      pinnedPosts: isCommunity ? pinnedPosts : undefined,
      scheduledPosts: isCommunity && seed?.canPost ? scheduledPosts : undefined,
      // Yours alone — and only where you may publish at all.
      draftPosts: isCommunity && seed?.canPost ? draftPosts : undefined,
    },
    status: app.loadState[convId] ?? "ready",
    messages,
    typingUsers,
    hasMoreOlder: app.hasMoreOlder(convId),
    loadingOlder: !!app.loadingOlder[convId],
    unreadCount: unread.length,
    // The badge and the in-transcript divider are separate on purpose: a
    // noticeboard keeps the badge (it's what makes anyone open it the first
    // time) but slicing a two-message welcome screen in half is just noise.
    firstUnreadId:
      seed?.type === "announcement" ? null : (unread[0]?.id ?? null),
    sendMessage,
    retryMessage,
    loadOlder,
    toggleReaction,
    loadReactionUsers,
    deleteMessage,
    deleteFailedMessage,
    editMessage,
    // Generous window so the seeded "mine" messages stay editable in the demo.
    editWindowMs: 24 * 60 * 60 * 1000,
    onInputActivity: () => {},
    // Nothing to visualize for OWN typing in the mock — wired so the composer's
    // send/clear/unmount calls are exercised.
    stopTyping: () => {},
    uploadFiles,
    // Demoes the "too many files" transient error (mirrors the AI chat).
    maxFiles: 8,
    // ApplicationFrame demonstrates a 100 MB per-file upload limit.
    maxFileSizeBytes: MOCK_MAX_FILE_SIZE_BYTES,
    transcribe: mockTranscribe,
    markRead,
    searchMessages,
    togglePin,
    toggleMute,
    // Nobody @-mentions anyone into a feed, and the post composer resolves its
    // own mentions through this same function — so it stays wired for
    // communities the user can post in, and off for the ones they can't.
    searchMembers:
      seed && (!isCommunity || seed.canPost) ? searchMembers : undefined,
    // Community wiring: publishing, opening a post, and the per-post menu.
    // `openPost` is only offered when the host has somewhere to open it —
    // otherwise the card correctly stops being clickable.
    createPost: isCommunity ? createPost : undefined,
    openPost: isCommunity ? openPost : undefined,
    // The mock owns the composer, so F0's built-in dialog never mounts: the
    // CTA opens the full `/dashboard/post/new` replica instead.
    composePost: isCommunity ? composePost : undefined,
    // Only an aggregated feed puts a community name on its cards, so only it
    // has anywhere for that link to go.
    openCommunity: seed?.aggregates ? openCommunity : undefined,
    postActions: isCommunity ? postActions : undefined,
    // Which card is drawn selected: the one whose PAGE is open, and only while
    // the page open is this community's post — the composer and a scheduled
    // preview are other surfaces, and neither is a post in this feed.
    activePostId:
      isCommunity &&
      app.openSurface?.kind === "post" &&
      app.openSurface.convId === convId
        ? app.openSurface.postId
        : undefined,
    // Unpinning from the pinned list. Only where the user may pin at all —
    // otherwise the list is a way to FIND them, and nothing more.
    unpinPost: isCommunity && seed?.canPost ? unpinPost : undefined,
    scheduledActions:
      isCommunity && seed?.canPost ? scheduledActions : undefined,
    // Opening one shows the PREVIEW — the page it will be — rather than the
    // editor. Seeing it as the community will is the point of having it.
    openScheduledPost:
      isCommunity && seed?.canPost ? openScheduledPost : undefined,
    draftActions: isCommunity && seed?.canPost ? draftActions : undefined,
    openDraftPost: isCommunity && seed?.canPost ? openDraftPost : undefined,
    // Read-only channels (frozen / announcements): composer, reactions and
    // uploads disappear; existing pills stay visible.
    //
    // A community expresses only the ONE verb its type doesn't already get
    // right: `canSend` is off by default there, and `canPost` turns it back on.
    capabilities: isCommunity
      ? { canSend: !!seed?.canPost, canUpload: !!seed?.canPost }
      : seed?.readOnly
        ? { canSend: false, canReact: false, canUpload: false }
        : undefined,
    // Failed-to-load conversations recover through the error state's Retry.
    reconnect: seed?.failsToLoad ? reconnect : undefined,
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
  const { states, pinned, togglePin, muted } = useMockChatApp()
  return useMemo(() => {
    const toChat = (seed: Seed) => {
      const state = states[seed.id]
      const unreadCount = state ? unreadCountOf(state) : 0
      // Groups can ping you (`@you` / `@here`) — surface an `@N` badge alongside
      // the unread count, cleared on read.
      const mentionCount =
        seed.type === "group" && state ? unreadMentionCountOf(state) : 0
      const dmPerson = seed.type === "dm" ? seed.participants[0] : undefined
      // The product's own noticeboard isn't a conversation you curate — no pin.
      const isAnnouncement = seed.type === "announcement"
      return {
        id: seed.id,
        label: seed.title,
        avatar: seed.avatar,
        onClick: () => onSelect(seed.id),
        pinned: !isAnnouncement && !!pinned[seed.id],
        onTogglePin: isAnnouncement ? undefined : () => togglePin(seed.id),
        unreadCount: unreadCount || undefined,
        mentionCount: mentionCount || undefined,
        // Live "Writing…" while the other side is typing in this conversation.
        typing: (state?.typingIds.length ?? 0) > 0,
        presence: seed.type === "dm" ? seed.presence : undefined,
        statuses: [
          ...(dmPerson?.vacation
            ? [{ icon: PalmTree, label: "On vacation" }]
            : []),
          ...(muted[seed.id] ? [{ icon: BellOff, label: "Muted" }] : []),
        ],
      }
    }
    /** A community row: no presence, no typing, no mention prefix — none of
     * those mean anything for a place rather than a person. It IS pinnable
     * though: you belong to a handful of communities and read two of them. */
    const toCommunity = (seed: Seed) => {
      const state = states[seed.id]
      return {
        id: seed.id,
        label: seed.title,
        avatar: seed.avatar,
        kind: "community" as const,
        onClick: () => onSelect(seed.id),
        unreadCount: (state ? unreadCountOf(state) : 0) || undefined,
        pinned: !!pinned[seed.id],
        onTogglePin: () => togglePin(seed.id),
      }
    }
    // Pinned (favourite) conversations — people, groups AND communities —
    // surface in their own group at the top and are removed from the groups
    // below. Only the product's own noticeboard is exempt: it isn't yours to
    // curate.
    const isPinned = (s: Seed) => s.type !== "announcement" && !!pinned[s.id]
    // The pinned group is MIXED, so each row keeps its own kind — a pinned
    // community still counts posts, while the group's collapsed total falls
    // back to the conversation wording (see `SidebarChatList`).
    const pinnedChats = SEEDS.filter(isPinned).map((seed) =>
      seed.type === "community" ? toCommunity(seed) : toChat(seed)
    )
    // Announcement channels live among the direct messages — they read as a
    // one-to-one conversation with the product, which is what they are.
    const dms = SEEDS.filter(
      (s) => (s.type === "dm" || s.type === "announcement") && !isPinned(s)
    ).map(toChat)
    const groups = SEEDS.filter((s) => s.type === "group" && !isPinned(s)).map(
      toChat
    )
    const communities = SEEDS.filter(
      (s) => s.type === "community" && !isPinned(s)
    ).map(toCommunity)
    return [
      ...(pinnedChats.length > 0
        ? [{ id: "pinned", title: "Pinned", chats: pinnedChats }]
        : []),
      ...(dms.length > 0
        ? [{ id: "direct-messages", title: "Direct messages", chats: dms }]
        : []),
      ...(groups.length > 0
        ? [{ id: "groups", title: "Groups", chats: groups }]
        : []),
      // LAST, under the conversations. A community is not a conversation of
      // yours — it is a place you go to read. The order is simply the array's:
      // `SidebarChatList` renders what it's given and never sorts.
      ...(communities.length > 0
        ? [{ id: "communities", title: "Communities", chats: communities }]
        : []),
    ]
  }, [states, pinned, togglePin, muted, onSelect])
}
