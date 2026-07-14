import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatRuntime } from "../types"

// Same virtualizer pass-through as F0Chat.test: jsdom has no layout, so render
// all rows instead of windowing.
vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: ({ count }: { count: number }) => ({
    getVirtualItems: () =>
      Array.from({ length: count }, (_, index) => ({
        index,
        key: index,
        start: index * 40,
        size: 40,
        end: index * 40 + 40,
      })),
    getTotalSize: () => count * 40,
    measureElement: () => {},
    scrollToIndex: () => {},
    measure: () => {},
  }),
}))

/** Drive `useMediaQuery((max-width: …))` to a given match value. */
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

  it("hides the fullscreen toggle on mobile (it would do nothing)", () => {
    setSmallScreen(true)
    render(
      <F0ChatProvider runtime={makeRuntime()}>
        <F0Chat onToggleFullscreen={vi.fn()} />
      </F0ChatProvider>
    )
    expect(
      screen.queryByRole("button", { name: /expand/i })
    ).not.toBeInTheDocument()
  })
})
