import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import {
  type F0ChatChannelType,
  type F0ChatMessage,
  type F0ChatPost,
  type F0ChatRuntime,
} from "../types"

vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

const NADIA = { id: "nadia", name: "Nadia Costa" }

const post = (id: string, title: string): F0ChatPost => ({
  type: "post",
  id,
  createdAt: `2026-06-2${id.at(-1)}T10:00:00`,
  author: NADIA,
  title,
  commentCount: 0,
})

const message = (id: string, body: string): F0ChatMessage => ({
  id,
  author: NADIA,
  body,
  createdAt: `2026-06-2${id.at(-1)}T10:00:00`,
  isMine: false,
})

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {},
  type: F0ChatChannelType = "community"
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "com-people-ops",
    type,
    title: "People Ops",
    avatar: { type: "emoji", emoji: "🌱" },
  },
  status: "ready",
  messages: [post("p1", "First"), post("p2", "Second"), post("p3", "Third")],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 2,
  firstUnreadId: "p2",
  sendMessage: () => {},
  retryMessage: () => {},
  loadOlder: () => {},
  toggleReaction: () => {},
  deleteMessage: () => {},
  onInputActivity: () => {},
  ...overrides,
})

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

describe("the new-posts divider", () => {
  it("names posts on a community channel", () => {
    renderChat(makeRuntime())

    expect(screen.getByText("New posts")).toBeVisible()
    expect(screen.queryByText("New messages")).toBeNull()
  })

  it("keeps naming messages everywhere else", () => {
    renderChat(
      makeRuntime(
        {
          messages: [message("m1", "one"), message("m2", "two")],
          firstUnreadId: "m2",
          channel: {
            id: "g-eng",
            type: "group",
            title: "Engineering",
            avatar: { type: "company", name: "Engineering" },
          },
        },
        "group"
      )
    )

    expect(screen.getByText("New messages")).toBeVisible()
    expect(screen.queryByText("New posts")).toBeNull()
  })

  it("draws no divider when nothing is unread", () => {
    renderChat(makeRuntime({ unreadCount: 0, firstUnreadId: null }))

    expect(screen.queryByText("New posts")).toBeNull()
  })
})

describe("marking posts read", () => {
  it("does not clear the feed just because the reader reached the bottom", () => {
    // The chat's all-or-nothing rule would fire here. A feed must not claim a
    // dozen screenfuls were read because someone flung past them.
    const markRead = vi.fn()
    renderChat(makeRuntime({ markRead }))

    expect(markRead).not.toHaveBeenCalled()
  })
})
