import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { ReplyQuote } from "../components/ReplyQuote"
import { ChatUIProvider } from "../providers/ChatUIProvider"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

const runtime: F0ChatRuntime = {
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
  },
  status: "ready",
  messages: [],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  retryMessage: vi.fn(),
  loadOlder: vi.fn(),
  toggleReaction: vi.fn(),
  deleteMessage: vi.fn(),
  onInputActivity: vi.fn(),
}

const reply: NonNullable<F0ChatMessage["replyTo"]> = {
  id: "r1",
  author: { id: "other", name: "María José" },
  body: "Hola!!!!",
}

const renderQuote = (props: {
  isMine?: boolean
  isFirstOfRun?: boolean
}): ReturnType<typeof render> =>
  render(
    <F0ChatProvider runtime={runtime}>
      <ChatUIProvider>
        <ReplyQuote reply={reply} {...props} />
      </ChatUIProvider>
    </F0ChatProvider>
  ) as ReturnType<typeof render>

const card = (container: HTMLElement): Element | null =>
  container.querySelector("button")

describe("ReplyQuote chained corner", () => {
  it("rounds the tail-side top corner to hug the bubble (others, run start)", () => {
    const { container } = renderQuote({ isMine: false, isFirstOfRun: true })
    expect(card(container)).toHaveClass("rounded-tl-xl")
  })

  it("tucks the tail-side top corner when continuing a run (others)", () => {
    const { container } = renderQuote({ isMine: false, isFirstOfRun: false })
    expect(card(container)).toHaveClass("rounded-tl-xs")
  })

  it("mirrors to the right for my own messages", () => {
    const start = renderQuote({ isMine: true, isFirstOfRun: true })
    expect(card(start.container)).toHaveClass("rounded-tr-xl")

    const continued = renderQuote({ isMine: true, isFirstOfRun: false })
    expect(card(continued.container)).toHaveClass("rounded-tr-xs")
  })
})
