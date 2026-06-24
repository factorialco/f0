"use client"

import { useCallback, useMemo, type ReactNode } from "react"

import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { MicrophoneNegative, PalmTree } from "@/icons/app"
import { type SidebarChatGroup } from "@/patterns/Navigation/Sidebar/Chats/types"

import {
  type F0ChatAttachment,
  type F0ChatRuntime,
  type F0ChatSearchResult,
  type F0ChatSendInput,
} from "../types"
import {
  type Seed,
  ME,
  SEED_BY_ID,
  SEEDS,
  resolveUser,
  unreadCountOf,
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
        .filter((m) => !m.deleted && m.body.toLowerCase().includes(needle))
        .map((m): F0ChatSearchResult => ({ id: m.id }))
      return Promise.resolve(hits)
    },
    [app.states, convId]
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
    searchMessages,
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
      const dmPerson = seed.type === "dm" ? seed.participants[0] : undefined
      return {
        id: seed.id,
        label: seed.title,
        avatar: seed.avatar,
        onClick: () => onSelect(seed.id),
        unreadCount: unreadCount || undefined,
        // Live "Writing…" while the other side is typing in this conversation.
        typing: (state?.typingIds.length ?? 0) > 0,
        presence: seed.type === "dm" ? seed.presence : undefined,
        // On-vacation takes precedence over the mute icon.
        status: dmPerson?.vacation
          ? { icon: PalmTree, label: "On vacation" }
          : seed.muted
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
