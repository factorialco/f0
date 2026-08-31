import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  within,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import {
  type F0ChatChannelType,
  type F0ChatMessage,
  type F0ChatRuntime,
} from "../types"

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

const FACTORIAL = { id: "factorial", name: "Factorial" }

const welcome: F0ChatMessage = {
  id: "m1",
  author: FACTORIAL,
  body: "Hi Jordan. This is your team's chat.",
  createdAt: "2026-06-21T22:14:00",
  isMine: false,
}

const cardMessage = (onClick?: () => void): F0ChatMessage => ({
  id: "m2",
  author: FACTORIAL,
  body: "",
  createdAt: "2026-06-21T22:15:00",
  isMine: false,
  attachments: [
    {
      kind: "card",
      title: "Give your team access",
      description: "One step.",
      action: {
        label: "Give your team access",
        onClick: onClick ?? (() => {}),
      },
    },
  ],
})

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {},
  type: F0ChatChannelType = "announcement"
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "dm-factorial",
    type,
    title: "Factorial",
    avatar: { type: "company", name: "Factorial" },
    readOnlyNotice: "Only Factorial can send messages",
  },
  status: "ready",
  messages: [welcome, cardMessage()],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 2,
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

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat onClose={vi.fn()} />
    </F0ChatProvider>
  )

describe("announcement channel", () => {
  it("reads the whole transcript without any way to write in it", () => {
    renderChat(makeRuntime())

    // The messages are there…
    expect(
      screen.getByText("Hi Jordan. This is your team's chat.")
    ).toBeInTheDocument()
    // …and nothing to answer them with.
    expect(
      screen.queryByPlaceholderText("Write something here..")
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Attach file" })
    ).not.toBeInTheDocument()
  })

  it("says who can post, where the composer would be", () => {
    renderChat(makeRuntime())
    expect(screen.getByTestId("chat-read-only-notice")).toHaveTextContent(
      "Only Factorial can send messages"
    )
  })

  // The whole hover affordance, not just its contents: an ellipsis that opens
  // an empty popover is worse than no ellipsis.
  it("offers no per-message actions at all", () => {
    renderChat(makeRuntime())
    expect(
      screen.queryByRole("button", { name: "Message actions" })
    ).not.toBeInTheDocument()
  })

  it("strips the header down to the identity and the close button", () => {
    renderChat(makeRuntime())
    expect(
      screen.queryByRole("button", { name: "Options" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  // The posts are seeded client-side, so their minute is invented. The day
  // separator still carries the time.
  it("hides the per-message clock but keeps the day separator", () => {
    renderChat(makeRuntime())
    expect(screen.queryByTestId("chat-message-time")).not.toBeInTheDocument()
    expect(
      screen.queryByTestId("chat-message-time-reserve")
    ).not.toBeInTheDocument()
    expect(screen.getByTestId("chat-date-separator")).toBeInTheDocument()
  })

  it("renders the card and lets it act — the one interactive thing here", async () => {
    const onClick = vi.fn()
    renderChat(makeRuntime({ messages: [welcome, cardMessage(onClick)] }))

    const card = screen.getByTestId("chat-card-attachment")
    expect(within(card).getByText("One step.")).toBeInTheDocument()

    await userEvent.click(
      within(card).getByRole("button", { name: "Give your team access" })
    )
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("leaves an ordinary channel exactly as it was", () => {
    renderChat(makeRuntime({}, "dm"))
    expect(
      screen.getByPlaceholderText("Write something here..")
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Options" })).toBeInTheDocument()
    expect(
      screen.getAllByRole("button", { name: "Message actions" }).length
    ).toBeGreaterThan(0)
    expect(screen.getAllByTestId("chat-message-time").length).toBeGreaterThan(0)
  })
})
