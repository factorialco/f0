import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { ChatForwardedTag } from "../components/ChatForwardedTag"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatForwardedFrom, type F0ChatRuntime } from "../types"

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

const forwarded: F0ChatForwardedFrom = {
  id: "orig-1",
  author: { id: "ana", name: "Ana García" },
  body: "El deck de Q3 ya está listo",
}

const renderTag = (
  props: Partial<{
    forwarded: F0ChatForwardedFrom
    isMine: boolean
    isFirstOfRun: boolean
  }> = {}
): ReturnType<typeof render> =>
  render(
    <F0ChatProvider runtime={runtime}>
      <ChatForwardedTag forwarded={forwarded} {...props} />
    </F0ChatProvider>
  ) as ReturnType<typeof render>

const card = (container: HTMLElement): Element | null =>
  container.querySelector(".rounded-xl")

describe("ChatForwardedTag", () => {
  it("shows the Forwarded label with the original author's name", () => {
    renderTag()
    expect(screen.getByText("Forwarded")).toBeInTheDocument()
    expect(screen.getByText("Ana García")).toBeInTheDocument()
    expect(screen.getByText(forwarded.body)).toBeInTheDocument()
  })

  it("reads the author as 'You' when the original message was mine", () => {
    renderTag({
      forwarded: { ...forwarded, author: { id: "me", name: "Me" } },
    })
    expect(screen.getByText("You")).toBeInTheDocument()
  })

  it("is not interactive — no jump-to-source, unlike a reply quote", () => {
    renderTag()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("rounds the tail-side top corner to hug the bubble (others, run start)", () => {
    const { container } = renderTag({ isMine: false, isFirstOfRun: true })
    expect(card(container)).toHaveClass("rounded-tl-xl")
  })

  it("tucks the tail-side top corner when continuing a run (others)", () => {
    const { container } = renderTag({ isMine: false, isFirstOfRun: false })
    expect(card(container)).toHaveClass("rounded-tl-xs")
  })

  it("mirrors to the right for my own messages", () => {
    const start = renderTag({ isMine: true, isFirstOfRun: true })
    expect(card(start.container)).toHaveClass("rounded-tr-xl")

    const continued = renderTag({ isMine: true, isFirstOfRun: false })
    expect(card(continued.container)).toHaveClass("rounded-tr-xs")
  })
})
