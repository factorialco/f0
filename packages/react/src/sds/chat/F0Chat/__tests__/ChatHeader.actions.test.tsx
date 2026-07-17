import { beforeAll, describe, expect, it, vi } from "vitest"

import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { Pencil } from "@/icons/app"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatHeaderAction, type F0ChatRuntime } from "../types"

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

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {}
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "group",
    title: "Product Team",
    avatar: { type: "company", name: "Product Team" },
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
  ...overrides,
})

const renderChat = (
  runtime: F0ChatRuntime,
  headerActions?:
    | F0ChatHeaderAction[]
    | ((channel: F0ChatRuntime["channel"]) => F0ChatHeaderAction[])
) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat headerActions={headerActions} />
    </F0ChatProvider>
  )

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

describe("ChatHeader host actions", () => {
  it("renders an inline action as its own icon button and fires the callback", () => {
    const onClick = vi.fn()
    const runtime = makeRuntime()
    renderChat(runtime, [
      {
        id: "edit",
        label: "Edit group",
        icon: Pencil,
        placement: "inline",
        onClick,
      },
    ])
    const button = screen.getByRole("button", { name: "Edit group" })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledWith(runtime.channel)
  })

  it("falls an inline action without an icon back to the overflow menu", () => {
    renderChat(makeRuntime(), [
      {
        id: "edit",
        label: "Edit group",
        placement: "inline",
        onClick: vi.fn(),
      },
    ])
    // No standalone button — the action lives behind the ellipsis instead.
    expect(
      screen.queryByRole("button", { name: "Edit group" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Options" })).toBeInTheDocument()
  })

  it("shows a group-scoped action in a group channel", () => {
    renderChat(makeRuntime(), [
      {
        id: "edit",
        label: "Edit group",
        icon: Pencil,
        placement: "inline",
        channelTypes: ["group"],
        onClick: vi.fn(),
      },
    ])
    expect(
      screen.getByRole("button", { name: "Edit group" })
    ).toBeInTheDocument()
  })

  it("hides a group-scoped action in a DM channel", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "c2",
          type: "dm",
          title: "María José",
          avatar: { type: "person", firstName: "María", lastName: "José" },
        },
      }),
      [
        {
          id: "edit",
          label: "Edit group",
          icon: Pencil,
          placement: "inline",
          channelTypes: ["group"],
          onClick: vi.fn(),
        },
      ]
    )
    expect(
      screen.queryByRole("button", { name: "Edit group" })
    ).not.toBeInTheDocument()
  })

  it("lets the function form return different actions per channel (permissions)", () => {
    // A host with no permissions in this channel returns [] — only the
    // built-in search remains behind the ellipsis.
    renderChat(makeRuntime(), () => [])
    expect(screen.getByRole("button", { name: "Options" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Edit group" })
    ).not.toBeInTheDocument()
  })
})
