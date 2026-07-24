import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender as render, waitFor } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

const now = new Date().toISOString()

const makeMessages = (count: number): F0ChatMessage[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `m${i}`,
    author:
      i % 2 === 0 ? { id: "other", name: "Ana" } : { id: "me", name: "Me" },
    body: `Message ${i}`,
    createdAt: now,
    isMine: i % 2 !== 0,
  }))

const makeRuntime = (messages: F0ChatMessage[]): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "Ana",
    avatar: { type: "person", firstName: "Ana", lastName: "García" },
  },
  status: "ready",
  messages,
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  loadOlder: vi.fn(),
  markRead: vi.fn(),
})

/** The scrollbar measure strip inside the transcript scroller — the only
 * in-flow child of Radix's content wrapper (see ChatVirtuosoScroller). */
const findStrip = (container: HTMLElement) =>
  container.querySelector<HTMLElement>('div.w-0[aria-hidden="true"]')

describe("chat transcript scrollbar measure strip", () => {
  it("mirrors Virtuoso's total list height so Radix re-measures the thumb", async () => {
    const { container, rerender } = render(
      <F0ChatProvider runtime={makeRuntime(makeMessages(10))}>
        <F0Chat />
      </F0ChatProvider>
    )

    // The strip receives the virtual list height imperatively via
    // totalListHeightChanged — without it, Radix's ResizeObserver target
    // never resizes (Virtuoso's inner viewport is absolute) and the thumb
    // stays frozen with the sizes measured at mount.
    let initialHeight = 0
    await waitFor(() => {
      const strip = findStrip(container)
      expect(strip).not.toBeNull()
      initialHeight = parseFloat(strip!.style.height || "0")
      expect(initialHeight).toBeGreaterThan(0)
    })

    // More rows (an older page landing) → the strip must grow with the list.
    rerender(
      <F0ChatProvider runtime={makeRuntime(makeMessages(30))}>
        <F0Chat />
      </F0ChatProvider>
    )
    await waitFor(() => {
      const strip = findStrip(container)
      const grown = parseFloat(strip!.style.height || "0")
      expect(grown).toBeGreaterThan(initialHeight)
    })
  })
})
