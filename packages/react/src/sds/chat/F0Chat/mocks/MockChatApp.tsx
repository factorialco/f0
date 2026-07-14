"use client"

import { useCallback, useMemo, type ReactNode } from "react"

import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { MicrophoneNegative, PalmTree } from "@/icons/app"
import { type SidebarChatGroup } from "@/patterns/Navigation/Sidebar/Chats/types"

import {
  isUserMessage,
  type F0ChatAttachment,
  type F0ChatEditInput,
  type F0ChatRuntime,
  type F0ChatSearchResult,
  type F0ChatSendInput,
  type F0ChatUser,
} from "../types"
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
} from "./useMockChatApp"

export const MockChatAppProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  const value = useMockChatStore()
  return (
    <MockChatAppContext.Provider value={value}>
      {children}
    </MockChatAppContext.Provider>
  )
}

/** F0ChatRuntime for one conversation, backed by the shared store. */
export const useConversationRuntime = (convId: string): F0ChatRuntime => {
  const app = useMockChatApp()
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
  const markRead = useCallback(() => app.markRead(convId), [app, convId])
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
    (files: File[]): Promise<F0ChatAttachment[]> =>
      // Simulate a real upload so the composer's uploading skeleton is visible.
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
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
      if (!seed) return Promise.resolve([])
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

  const messages = state?.messages ?? []
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
      muted: app.muted[convId] ?? false,
      pinned: app.pinned[convId] ?? false,
      // Surface the same states the sidebar shows (e.g. on vacation) in the header.
      statuses:
        seed?.type === "dm" && seed.participants[0]?.vacation
          ? [{ icon: PalmTree, label: "On vacation" }]
          : undefined,
      memberCount: seed ? seed.participants.length + 1 : undefined,
      // DMs expose the counterpart for the header identity hover card.
      user:
        seed?.type === "dm" ? (seed.participants[0] ?? undefined) : undefined,
    },
    status: app.loadState[convId] ?? "ready",
    messages,
    typingUsers,
    hasMoreOlder: app.hasMoreOlder(convId),
    loadingOlder: !!app.loadingOlder[convId],
    unreadCount: unread.length,
    firstUnreadId: unread[0]?.id ?? null,
    sendMessage,
    retryMessage,
    loadOlder,
    toggleReaction,
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
    maxFiles: 5,
    transcribe: mockTranscribe,
    markRead,
    searchMessages,
    togglePin,
    toggleMute,
    searchMembers: seed ? searchMembers : undefined,
    // Read-only channels (frozen / announcements): composer, reactions and
    // uploads disappear; existing pills stay visible.
    capabilities: seed?.readOnly
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
      return {
        id: seed.id,
        label: seed.title,
        avatar: seed.avatar,
        onClick: () => onSelect(seed.id),
        pinned: !!pinned[seed.id],
        onTogglePin: () => togglePin(seed.id),
        unreadCount: unreadCount || undefined,
        mentionCount: mentionCount || undefined,
        // Live "Writing…" while the other side is typing in this conversation.
        typing: (state?.typingIds.length ?? 0) > 0,
        presence: seed.type === "dm" ? seed.presence : undefined,
        // On-vacation takes precedence over the mute icon.
        status: dmPerson?.vacation
          ? { icon: PalmTree, label: "On vacation" }
          : muted[seed.id]
            ? { icon: MicrophoneNegative, label: "Muted" }
            : undefined,
      }
    }
    // Pinned (favourite) chats — both people and groups — surface in their own
    // group at the top and are removed from Direct messages / Groups below.
    const isPinned = (s: Seed) => !!pinned[s.id]
    const pinnedChats = SEEDS.filter(isPinned).map(toChat)
    const dms = SEEDS.filter((s) => s.type === "dm" && !isPinned(s)).map(toChat)
    const groups = SEEDS.filter((s) => s.type === "group" && !isPinned(s)).map(
      toChat
    )
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
    ]
  }, [states, pinned, togglePin, muted, onSelect])
}
