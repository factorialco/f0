import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

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

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

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
  markRead: vi.fn(),
}

const renderChat = () =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

const composer = () =>
  screen.getByRole("combobox", { name: /write something here/i })

describe("ChatComposer emoji autocomplete", () => {
  it("comes back when the composer is focused again mid-token", async () => {
    const user = userEvent.setup()
    renderChat()

    await user.type(composer(), ":")
    expect(
      await screen.findByRole("listbox", { name: "Add emoji" })
    ).toBeVisible()

    // Anything can take focus away mid-token — clicking a header action, the
    // window going to the background, a re-render that recreates the textarea.
    // The token under the caret survives it, so the list has to as well.
    await user.click(screen.getByRole("button", { name: "Add emoji" }))
    await waitFor(() =>
      expect(
        screen.queryByRole("listbox", { name: "Add emoji" })
      ).not.toBeInTheDocument()
    )

    await user.type(composer(), "smil")
    expect(composer()).toHaveValue(":smil")
    expect(
      await screen.findByRole("listbox", { name: "Add emoji" })
    ).toBeVisible()
    expect(composer()).toHaveAttribute("aria-expanded", "true")
  })

  it("keeps Escape's dismissal sticky for the token it dismissed", async () => {
    const user = userEvent.setup()
    renderChat()

    await user.type(composer(), ":smil")
    expect(
      await screen.findByRole("listbox", { name: "Add emoji" })
    ).toBeVisible()

    // Escape is a deliberate "not now": unlike a blur it must not come back
    // for this token, however much more of it you type.
    await user.keyboard("{Escape}")
    await waitFor(() =>
      expect(
        screen.queryByRole("listbox", { name: "Add emoji" })
      ).not.toBeInTheDocument()
    )

    await user.type(composer(), "e")
    expect(composer()).toHaveValue(":smile")
    expect(
      screen.queryByRole("listbox", { name: "Add emoji" })
    ).not.toBeInTheDocument()

    // A new token is a new question — that one opens.
    await user.type(composer(), " :joy")
    expect(
      await screen.findByRole("listbox", { name: "Add emoji" })
    ).toBeVisible()
  })
})
