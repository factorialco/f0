import { beforeAll, describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import {
  type F0ChatChannelType,
  type F0ChatMessage,
  type F0ChatPost,
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

const MARCUS = { id: "marcus", name: "Marcus Bennett" }

const post = (overrides: Partial<F0ChatPost> = {}): F0ChatPost => ({
  type: "post",
  id: "p1",
  createdAt: "2026-06-21T10:00:00",
  author: MARCUS,
  title: "Q3 results are in",
  description: "<p>Revenue closed above target.</p>",
  commentCount: 8,
  viewCount: 214,
  reactions: [{ emoji: "🎉", count: 24, reactedByMe: false }],
  ...overrides,
})

const message: F0ChatMessage = {
  id: "m1",
  author: MARCUS,
  body: "A plain chat message",
  createdAt: "2026-06-21T11:00:00",
  isMine: true,
  status: "read",
}

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {},
  type: F0ChatChannelType = "community"
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "com-company-news",
    type,
    title: "Company news",
    avatar: { type: "emoji", emoji: "📣" },
  },
  status: "ready",
  messages: [post()],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
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

describe("community channel — permissions", () => {
  it("hides the post composer when the host grants nothing", () => {
    renderChat(makeRuntime({ createPost: async () => {} }))

    expect(screen.queryByTestId("chat-post-composer")).toBeNull()
    expect(screen.queryByTestId("chat-composer-surface")).toBeNull()
  })

  it("says who can post, where the composer would be", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "com-company-news",
          type: "community",
          title: "Company news",
          avatar: { type: "emoji", emoji: "📣" },
          readOnlyNotice: "Only the Communications team can post here",
        },
      })
    )

    expect(screen.getByTestId("chat-read-only-notice")).toHaveTextContent(
      "Only the Communications team can post here"
    )
  })

  it("falls back to a notice about posting, not about messages", () => {
    renderChat(makeRuntime())

    expect(screen.getByTestId("chat-read-only-notice")).toHaveTextContent(
      /can't post in this community/i
    )
  })

  it("renders the post composer when the host grants canSend", () => {
    renderChat(
      makeRuntime({
        capabilities: { canSend: true },
        createPost: async () => {},
      })
    )

    expect(screen.getByTestId("chat-post-composer")).toBeVisible()
    // Still not the message composer: a post is not a message.
    expect(screen.queryByTestId("chat-composer-surface")).toBeNull()
  })

  it("shows no publish affordance without a way to publish", () => {
    // `canSend` on its own is not enough — with neither `createPost` nor
    // `composePost` there is nowhere for the post to go.
    renderChat(makeRuntime({ capabilities: { canSend: true } }))

    expect(screen.queryByTestId("chat-post-composer")).toBeNull()
  })

  it("hands off to the host's own flow when it has one", async () => {
    const composePost = vi.fn()
    renderChat(
      makeRuntime({
        capabilities: { canSend: true },
        createPost: async () => {},
        composePost,
      })
    )

    await userEvent.click(screen.getByTestId("chat-post-composer"))

    expect(composePost).toHaveBeenCalledOnce()
    expect(screen.queryByTestId("chat-post-composer-dialog")).toBeNull()
  })

  it("keeps reactions available to a reader who cannot post", () => {
    renderChat(makeRuntime())

    // The reaction pill is rendered and interactive even though the composer
    // is gone — reading and reacting are what a community is for.
    expect(screen.getByRole("button", { name: /: 24$/ })).toBeVisible()
  })
})

describe("community channel — post vs message rendering", () => {
  it("renders a post as a titled card, not a chat bubble", () => {
    renderChat(makeRuntime())

    expect(screen.getByText("Q3 results are in")).toBeVisible()
    expect(screen.getByText(/Revenue closed above target/)).toBeVisible()
  })

  it("names the community once, in the header — not on every card", () => {
    renderChat(makeRuntime())

    // `hideGroup`: the channel header already carries the name an inch above.
    expect(screen.getAllByText("Company news")).toHaveLength(1)
  })

  it("shows the post counters", () => {
    renderChat(makeRuntime())

    expect(screen.getByText(/214 views/)).toBeVisible()
    expect(screen.getByText(/8 comments/)).toBeVisible()
  })

  it("gives the post no click target when the host cannot open it", () => {
    const { container } = renderChat(makeRuntime())

    expect(container.querySelector("#community-post-p1")).not.toHaveClass(
      "cursor-pointer"
    )
  })

  it("reports which affordance opened the post", async () => {
    const openPost = vi.fn()
    renderChat(makeRuntime({ openPost }))

    await userEvent.click(screen.getByRole("button", { name: /comment/i }))

    expect(openPost).toHaveBeenCalledWith("p1", { source: "comment" })
  })

  it("toggles a reaction with the POST's id", async () => {
    const toggleReaction = vi.fn()
    renderChat(makeRuntime({ toggleReaction }))

    await userEvent.click(screen.getByRole("button", { name: /: 24$/ }))

    expect(toggleReaction).toHaveBeenCalledWith("p1", "🎉")
  })

  it("shows no delivery-status footer on a post", () => {
    // A post is published, not delivered. `isMine` must not summon the
    // Sent/Delivered/Read footer a message would get.
    renderChat(makeRuntime({ messages: [post({ isMine: true })] }))

    expect(screen.queryByText(/^(Sent|Delivered|Read)$/)).toBeNull()
  })

  it("still renders messages as messages in a mixed channel", () => {
    renderChat(makeRuntime({ messages: [post(), message] }))

    expect(screen.getByText("Q3 results are in")).toBeVisible()
    expect(screen.getByText("A plain chat message")).toBeVisible()
  })

  it("leaves a dm channel exactly as it was", () => {
    renderChat(
      makeRuntime(
        {
          messages: [message],
          channel: {
            id: "dm-ana",
            type: "dm",
            title: "Ana",
            avatar: { type: "person", firstName: "Ana", lastName: "T" },
          },
        },
        "dm"
      )
    )

    // The message composer, not the post one — and no read-only notice.
    expect(screen.getByTestId("chat-composer-surface")).toBeVisible()
    expect(screen.queryByTestId("chat-post-composer")).toBeNull()
    expect(screen.queryByTestId("chat-read-only-notice")).toBeNull()
  })
})

describe("opening a post from the feed", () => {
  it("makes the card itself clickable when the host can open it", async () => {
    const openPost = vi.fn()
    const { container } = renderChat(makeRuntime({ openPost }))

    const card = container.querySelector("#community-post-p1")
    expect(card).not.toBeNull()
    expect(card).toHaveClass("cursor-pointer")

    await userEvent.click(card as HTMLElement)

    expect(openPost).toHaveBeenCalledWith("p1", { source: "card" })
  })
})

describe("a feed reads as one column, not a stack of cards", () => {
  const threeDays = [
    post({ id: "p1", title: "Monday", createdAt: "2026-06-15T10:00:00" }),
    post({ id: "p2", title: "Wednesday", createdAt: "2026-06-17T10:00:00" }),
    post({
      id: "p3",
      title: "The Tuesday after",
      createdAt: "2026-06-23T10:00:00",
    }),
  ]

  it("never breaks a community by day", () => {
    // Posts arrive days apart by nature. Slicing them into "Monday /
    // Wednesday / last Tuesday" turns a column of three posts into a column of
    // three posts and three headings.
    renderChat(makeRuntime({ messages: threeDays }))

    expect(screen.getAllByTestId("chat-post-row")).toHaveLength(3)
    expect(screen.queryByTestId("chat-date-separator")).toBeNull()
  })

  it("still breaks a conversation by day", () => {
    // The rule is about feeds, not about turning day separators off.
    renderChat(
      makeRuntime(
        {
          messages: [
            { ...message, id: "m1", createdAt: "2026-06-15T10:00:00" },
            { ...message, id: "m2", createdAt: "2026-06-17T10:00:00" },
          ],
        },
        "dm"
      )
    )

    expect(screen.getAllByTestId("chat-date-separator").length).toBeGreaterThan(
      0
    )
  })

  it("divides posts with a hairline and no card of their own", () => {
    renderChat(makeRuntime({ messages: threeDays }))

    const rows = screen.getAllByTestId("chat-post-row")
    for (const row of rows) {
      // Edge to edge, so the divider and the hover tint both reach the panel's
      // sides. Any padding here would frame a hovered post in untinted row.
      expect(row.className).toMatch(/-mx-4/)
      expect(row.className).not.toMatch(/\bpx-\d/)
      // And none of the boxed card it used to be.
      expect(row.className).not.toMatch(/rounded-2xl/)
    }
    // A line under each…
    for (const row of rows.slice(0, -1)) {
      expect(row.className).toMatch(/border-b/)
    }
    // …except the last: it would divide the feed from the composer, and there
    // is nothing under it to divide.
    expect(rows.at(-1)?.className).not.toMatch(/border-b/)
  })

  it("moves the last-post rule along when a post arrives", () => {
    // The row cache reuses a post's row while the post object is unchanged, so
    // the flag has to be part of what makes two rows equivalent — otherwise
    // the old last post keeps it and the feed loses a divider in the middle.
    const { rerender } = renderChat(makeRuntime({ messages: threeDays }))

    const withOneMore = makeRuntime({
      messages: [...threeDays, post({ id: "p4", title: "Newest" })],
    })
    rerender(
      <F0ChatProvider runtime={withOneMore}>
        <F0Chat />
      </F0ChatProvider>
    )

    const rows = screen.getAllByTestId("chat-post-row")
    expect(rows).toHaveLength(4)
    expect(rows[2].className).toMatch(/border-b/)
    expect(rows[3].className).not.toMatch(/border-b/)
  })

  it("dates a post by how fresh it is, not to the minute", () => {
    // "2 days ago", not "June 21st, 2026 at 10:00 AM" — the question a date
    // answers in a feed.
    renderChat(
      makeRuntime({
        messages: [post({ createdAt: new Date().toISOString() })],
      })
    )

    expect(screen.getByText(/ago|less than/i)).toBeVisible()
  })
})
