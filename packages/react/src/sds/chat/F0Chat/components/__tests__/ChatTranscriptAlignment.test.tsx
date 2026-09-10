import { beforeAll, describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0Chat } from "../../F0Chat"
import { F0ChatProvider } from "../../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../../types"

vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

const message: F0ChatMessage = {
  id: "m1",
  author: { id: "factorial", name: "Factorial" },
  body: "Hello",
  createdAt: "2026-06-21T22:14:00",
  isMine: false,
}

const runtime = (overrides: Partial<F0ChatRuntime> = {}): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "announcement",
    title: "Factorial",
    avatar: { type: "company", name: "Factorial" },
  },
  status: "ready",
  messages: [message],
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
  ...overrides,
})

/** jsdom has no layout, so the class that stretches the viewport IS what there
 * is to check. */
const stretchedViewport = () =>
  document.querySelector('[class*="[data-viewport-type]]:min-h-full"]')

describe("a read-only channel with room to spare", () => {
  it("keeps the messages at the top and drops the notice to the bottom", () => {
    // Not `alignToBottom`: that glues the whole transcript down, messages and
    // all. The messages stay where they were written; only the notice moves.
    render(
      <F0ChatProvider runtime={runtime()}>
        <F0Chat />
      </F0ChatProvider>
    )

    const notice = screen.getByTestId("chat-read-only-notice")
    // The notice takes the leftover room…
    expect(notice.parentElement?.className).toMatch(/mt-auto/)
    // …inside a viewport stretched to the panel for it to take.
    expect(stretchedViewport()).not.toBeNull()
  })

  it("leaves a channel with a composer alone", () => {
    // There is no notice there, and stretching the viewport would be a change
    // to every conversation in the product for nothing.
    render(
      <F0ChatProvider
        runtime={runtime({
          channel: {
            id: "c2",
            type: "dm",
            title: "Ana",
            avatar: { type: "person", firstName: "Ana", lastName: "Gil" },
          },
        })}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(screen.queryByTestId("chat-read-only-notice")).toBeNull()
    expect(stretchedViewport()).toBeNull()
  })
})
