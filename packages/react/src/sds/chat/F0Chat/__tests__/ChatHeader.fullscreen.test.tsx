import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import { F0AiChatProvider } from "@/kits/ai/F0AiChat"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatRuntime } from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

/** Answer every media query with `matches`. */
const setSmallScreen = (matches: boolean) =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

const makeRuntime = (): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
    presence: "online",
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
  markRead: vi.fn(),
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  // Restore the setup default (desktop) so other tests are unaffected.
  setSmallScreen(false)
})

describe("F0Chat fullscreen toggle", () => {
  it("shows the fullscreen toggle on desktop", () => {
    setSmallScreen(false)
    render(
      <F0ChatProvider runtime={makeRuntime()}>
        <F0Chat onToggleFullscreen={vi.fn()} />
      </F0ChatProvider>
    )
    expect(screen.getByRole("button", { name: /expand/i })).toBeInTheDocument()
  })

  it("hides it when the panel is already covering the frame", () => {
    // A touch device on a compact viewport: the panel is a full-screen drawer,
    // so expanding would toggle nothing.
    setSmallScreen(true)
    render(
      <F0AiChatProvider enabled>
        <F0ChatProvider runtime={makeRuntime()}>
          <F0Chat onToggleFullscreen={vi.fn()} />
        </F0ChatProvider>
      </F0AiChatProvider>
    )
    expect(
      screen.queryByRole("button", { name: /expand/i })
    ).not.toBeInTheDocument()
  })

  it("keeps it on a narrow window where the panel still splits", () => {
    // The regression this guards: the button used to be hidden on viewport
    // width alone, which took it away from a half-screen laptop window — a
    // panel sitting beside content, with somewhere real to expand into.
    setSmallScreen(false)
    render(
      <F0AiChatProvider enabled>
        <F0ChatProvider runtime={makeRuntime()}>
          <F0Chat onToggleFullscreen={vi.fn()} />
        </F0ChatProvider>
      </F0AiChatProvider>
    )
    expect(screen.getByRole("button", { name: /expand/i })).toBeInTheDocument()
  })

  it("shows it for a chat mounted outside any panel", () => {
    // Standalone hosts have their own chrome; F0 should not second-guess them.
    setSmallScreen(true)
    render(
      <F0ChatProvider runtime={makeRuntime()}>
        <F0Chat onToggleFullscreen={vi.fn()} />
      </F0ChatProvider>
    )
    expect(screen.getByRole("button", { name: /expand/i })).toBeInTheDocument()
  })
})
