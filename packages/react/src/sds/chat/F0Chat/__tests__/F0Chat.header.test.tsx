import { beforeAll, describe, expect, it, vi } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatRuntime } from "../types"

beforeAll(() => {
  // jsdom doesn't implement scrollIntoView (used by the scroll hook).
  Element.prototype.scrollIntoView = vi.fn()
})

const runtime: F0ChatRuntime = {
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
    presence: "online",
  },
  status: "ready",
  messages: [
    {
      id: "m1",
      author: { id: "other", name: "María José" },
      body: "Hello there",
      createdAt: "2026-08-30T10:00:00.000Z",
      isMine: false,
    },
  ],
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
  markRead: vi.fn(),
}

const renderChat = (header?: React.ReactNode | null) =>
  zeroRender(
    <F0ChatProvider runtime={runtime}>
      <F0Chat header={header} />
    </F0ChatProvider>
  )

describe("F0Chat header slot", () => {
  it("keeps its own header when the prop is absent", () => {
    // Undefined must NOT mean "no header", or every existing usage loses one.
    renderChat()
    expect(screen.getByText("María José")).toBeInTheDocument()
  })

  it("removes the header entirely for null", () => {
    // What the in-call panel needs: its Chat / Transcript / Notes tabs sit
    // where this header would be.
    renderChat(null)
    expect(screen.queryByText("María José")).toBeNull()
  })

  it("renders a replacement in the header's place", () => {
    renderChat(<div>panel tabs</div>)
    expect(screen.getByText("panel tabs")).toBeInTheDocument()
    expect(screen.queryByText("María José")).toBeNull()
  })

  it("leaves the transcript and the composer alone", () => {
    // The viewport rather than a message: the transcript is virtualized and
    // jsdom gives it no height, so asserting on a row would be testing the
    // virtualizer's fallback, not the header slot.
    renderChat(null)
    expect(screen.getByTestId("chat-message-viewport")).toBeInTheDocument()
    // The composer is a combobox, not a textbox: it carries mention and emoji
    // autocomplete.
    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })
})
