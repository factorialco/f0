import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { MicrophoneNegative, PalmTree } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { SidebarChatList } from "../SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChatActions,
} from "../SidebarChatProvider"
import { SidebarChatGroup } from "../types"

const groups: SidebarChatGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    chats: [
      {
        id: "raul",
        label: "Raúl Sigüenza Sánchez",
        avatar: { type: "person", firstName: "Raúl", lastName: "Sigüenza" },
        unreadCount: 3,
        presence: "online",
      },
      {
        id: "roger",
        label: "Roger Campos",
        avatar: { type: "person", firstName: "Roger", lastName: "Campos" },
      },
    ],
  },
  {
    id: "groups",
    title: "Groups",
    chats: [
      {
        id: "general",
        label: "General",
        avatar: { type: "team", name: "General" },
      },
    ],
  },
]

const renderList = (initialActiveChatId?: string) =>
  render(
    <SidebarChatProvider
      initialGroups={groups}
      initialActiveChatId={initialActiveChatId}
    >
      <SidebarChatList />
    </SidebarChatProvider>
  )

describe("SidebarChatList", () => {
  it("shows a blank state when there are no chats", () => {
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList />
      </SidebarChatProvider>
    )
    expect(screen.getByText("No chats yet")).toBeInTheDocument()
  })

  it("shows a skeleton (not the blank state) while loading with no chats", () => {
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList loading />
      </SidebarChatProvider>
    )
    expect(screen.getByTestId("sidebar-chat-list-skeleton")).toBeInTheDocument()
    expect(screen.queryByText("No chats yet")).not.toBeInTheDocument()
  })

  it("ignores the loading flag once chats are known (cascade takes over)", () => {
    render(
      <SidebarChatProvider initialGroups={groups}>
        <SidebarChatList loading />
      </SidebarChatProvider>
    )
    expect(
      screen.queryByTestId("sidebar-chat-list-skeleton")
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Raúl Sigüenza Sánchez/ })
    ).toBeInTheDocument()
  })

  it("renders a loading chat as a skeleton row, keeping the others interactive", () => {
    render(
      <SidebarChatProvider
        initialGroups={[
          {
            id: "dms",
            title: "Direct messages",
            chats: [
              {
                id: "loading",
                label: "Loading One",
                avatar: { type: "person", firstName: "L", lastName: "O" },
                loading: true,
              },
              {
                id: "ready",
                label: "Ready One",
                avatar: { type: "person", firstName: "R", lastName: "O" },
              },
            ],
          },
        ]}
      >
        <SidebarChatList />
      </SidebarChatProvider>
    )
    // The loading chat is a skeleton — no interactive button with its name.
    expect(
      screen.queryByRole("button", { name: /Loading One/ })
    ).not.toBeInTheDocument()
    // The resolved chat renders normally.
    expect(
      screen.getByRole("button", { name: "Ready One" })
    ).toBeInTheDocument()
  })

  it("hides the blank state and lets the consumer override its copy", () => {
    // With chats present, the blank state is not rendered.
    renderList()
    expect(screen.queryByText("No chats yet")).not.toBeInTheDocument()

    // Custom copy is used when provided and there are no chats.
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList emptyState={{ title: "All quiet" }} />
      </SidebarChatProvider>
    )
    expect(screen.getByText("All quiet")).toBeInTheDocument()
  })

  it("shows a status icon for people but not for groups", () => {
    const { container } = render(
      <SidebarChatProvider
        initialGroups={[
          {
            id: "dms",
            title: "Direct messages",
            chats: [
              {
                id: "p",
                label: "Person",
                avatar: { type: "person", firstName: "P", lastName: "X" },
                status: { icon: PalmTree, label: "On holidays" },
              },
            ],
          },
          {
            id: "groups",
            title: "Groups",
            chats: [
              {
                id: "c",
                label: "Company",
                avatar: { type: "company", name: "Co" },
                status: { icon: MicrophoneNegative, label: "Muted" },
              },
            ],
          },
        ]}
      >
        <SidebarChatList />
      </SidebarChatProvider>
    )
    expect(
      container.querySelector('[aria-label="On holidays"]')
    ).toBeInTheDocument()
    // Groups never show the status, even if one is set.
    expect(container.querySelector('[aria-label="Muted"]')).toBeNull()
  })

  it("renders top actions as ghost buttons and fires their onClick", async () => {
    const onNewChat = vi.fn()
    render(
      <SidebarChatProvider initialGroups={groups}>
        <SidebarChatList
          actions={[
            { label: "New chat", onClick: onNewChat },
            { label: "New group", onClick: vi.fn() },
          ]}
        />
      </SidebarChatProvider>
    )
    expect(
      screen.getByRole("button", { name: "New group" })
    ).toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: "New chat" }))
    expect(onNewChat).toHaveBeenCalled()
  })

  it("renders chats in the order provided (no reordering by the list)", () => {
    render(
      <SidebarChatProvider
        initialGroups={[
          {
            id: "dms",
            title: "Direct messages",
            chats: [
              {
                id: "read",
                label: "Read One",
                avatar: { type: "person", firstName: "R", lastName: "O" },
              },
              {
                id: "unread",
                label: "Unread One",
                avatar: { type: "person", firstName: "U", lastName: "O" },
                unreadCount: 2,
              },
            ],
          },
        ]}
      >
        <SidebarChatList />
      </SidebarChatProvider>
    )
    const readBtn = screen.getByRole("button", { name: /Read One/ })
    const unreadBtn = screen.getByRole("button", { name: /Unread One/ })
    // Order is owned by the consumer: the list preserves it (read stays first).
    expect(
      readBtn.compareDocumentPosition(unreadBtn) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("shows the per-chat unread count as a badge", () => {
    renderList()
    // raul has unreadCount: 3
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  const unreadGroup: SidebarChatGroup[] = [
    {
      id: "dms",
      title: "Direct messages",
      chats: [
        {
          id: "a",
          label: "A",
          avatar: { type: "person", firstName: "A", lastName: "A" },
          unreadCount: 2,
        },
        {
          id: "b",
          label: "B",
          avatar: { type: "person", firstName: "B", lastName: "B" },
          unreadCount: 5,
        },
      ],
    },
  ]

  it("shows the group's total unread as a badge when collapsed", () => {
    render(
      <SidebarChatProvider
        initialGroups={unreadGroup.map((g) => ({ ...g, isOpen: false }))}
      >
        <SidebarChatList />
      </SidebarChatProvider>
    )
    // Collapsed: the header surfaces the combined unread (2 + 5).
    expect(screen.getByText("7")).toBeInTheDocument()
  })

  it("does not show the group total badge when expanded", () => {
    render(
      <SidebarChatProvider
        initialGroups={unreadGroup.map((g) => ({ ...g, isOpen: true }))}
      >
        <SidebarChatList />
      </SidebarChatProvider>
    )
    // Expanded: only the per-chat badges show, never the combined total.
    expect(screen.queryByText("7")).not.toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("renders group titles and chats as buttons", () => {
    renderList()
    expect(screen.getByText("Direct messages")).toBeInTheDocument()
    expect(screen.getByText("Groups")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Raúl Sigüenza Sánchez/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Roger Campos" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "General" })).toBeInTheDocument()
  })

  it("marks the active chat from the provider as pressed", () => {
    renderList("raul")
    expect(
      screen.getByRole("button", { name: /Raúl Sigüenza Sánchez/ })
    ).toHaveAttribute("aria-pressed", "true")
    expect(
      screen.getByRole("button", { name: "Roger Campos" })
    ).toHaveAttribute("aria-pressed", "false")
  })

  it("selecting a chat updates the active state", async () => {
    renderList()
    const roger = screen.getByRole("button", { name: "Roger Campos" })
    expect(roger).toHaveAttribute("aria-pressed", "false")
    await userEvent.click(roger)
    expect(
      screen.getByRole("button", { name: "Roger Campos" })
    ).toHaveAttribute("aria-pressed", "true")
  })

  it("reflects active changes pushed through the store actions", async () => {
    const Pusher = () => {
      const { setActiveChat } = useSidebarChatActions()
      return (
        <button type="button" onClick={() => setActiveChat("general")}>
          push
        </button>
      )
    }

    render(
      <SidebarChatProvider initialGroups={groups}>
        <Pusher />
        <SidebarChatList />
      </SidebarChatProvider>
    )

    expect(screen.getByRole("button", { name: "General" })).toHaveAttribute(
      "aria-pressed",
      "false"
    )
    await userEvent.click(screen.getByText("push"))
    expect(screen.getByRole("button", { name: "General" })).toHaveAttribute(
      "aria-pressed",
      "true"
    )
  })

  describe("pin affordance", () => {
    const pinGroups = (
      onTogglePin: () => void,
      pinned?: boolean
    ): SidebarChatGroup[] => [
      {
        id: "dms",
        title: "Direct messages",
        chats: [
          {
            id: "raul",
            label: "Raúl",
            avatar: { type: "person", firstName: "Raúl", lastName: "S" },
            unreadCount: 3,
            pinned,
            onTogglePin,
          },
        ],
      },
    ]

    it("toggles pin without selecting the chat", async () => {
      const onTogglePin = vi.fn()
      render(
        <SidebarChatProvider initialGroups={pinGroups(onTogglePin)}>
          <SidebarChatList />
        </SidebarChatProvider>
      )

      await userEvent.click(screen.getByRole("button", { name: "Pin" }))
      expect(onTogglePin).toHaveBeenCalledTimes(1)
      // Clicking the pin must not select the row (stopPropagation).
      expect(screen.getByRole("button", { name: /Raúl/ })).toHaveAttribute(
        "aria-pressed",
        "false"
      )
    })

    it("labels the button 'Unpin' when the chat is pinned", () => {
      render(
        <SidebarChatProvider initialGroups={pinGroups(vi.fn(), true)}>
          <SidebarChatList />
        </SidebarChatProvider>
      )
      expect(screen.getByRole("button", { name: "Unpin" })).toBeInTheDocument()
    })

    it("shows no pin button when onTogglePin is omitted", () => {
      renderList()
      expect(
        screen.queryByRole("button", { name: "Pin" })
      ).not.toBeInTheDocument()
    })
  })

  describe("search", () => {
    it("always shows the search box at the top, even with no chats", () => {
      const { unmount } = render(
        <SidebarChatProvider initialGroups={[]}>
          <SidebarChatList />
        </SidebarChatProvider>
      )
      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      unmount()

      renderList()
      expect(screen.getByRole("searchbox")).toBeInTheDocument()
    })

    it("fuzzy-filters chats by name and hides groups left with no matches", async () => {
      renderList()
      await userEvent.type(screen.getByRole("searchbox"), "roger")

      // Only the matching chat survives.
      expect(
        await screen.findByRole("button", { name: "Roger Campos" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /Raúl Sigüenza Sánchez/ })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "General" })
      ).not.toBeInTheDocument()

      // The "Groups" group has no matches, so its title disappears too; the
      // group that still has a match keeps its title.
      expect(screen.queryByText("Groups")).not.toBeInTheDocument()
      expect(screen.getByText("Direct messages")).toBeInTheDocument()
    })

    it("matches non-contiguously and ignores accents", async () => {
      renderList()
      // "raul" (no accent) matches "Raúl Sigüenza Sánchez".
      await userEvent.type(screen.getByRole("searchbox"), "raul")
      expect(
        await screen.findByRole("button", { name: /Raúl Sigüenza Sánchez/ })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Roger Campos" })
      ).not.toBeInTheDocument()
    })

    it("shows a no-results message when nothing matches", async () => {
      renderList()
      await userEvent.type(screen.getByRole("searchbox"), "zzz")

      expect(await screen.findByText("No chats found")).toBeInTheDocument()
      expect(screen.queryByText("Direct messages")).not.toBeInTheDocument()
      expect(screen.queryByText("Groups")).not.toBeInTheDocument()
    })
  })
})
