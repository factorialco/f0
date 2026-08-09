import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { BellOff, Clock, PalmTree } from "@/icons/app"
import {
  act,
  waitFor,
  zeroRender as render,
  screen,
} from "@/testing/test-utils"

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

/** Minimal blank-state copy for tests that don't exercise the empty state. */
const defaultEmptyState = { title: "No chats yet" }

const renderList = (initialActiveChatId?: string) =>
  render(
    <SidebarChatProvider
      initialGroups={groups}
      initialActiveChatId={initialActiveChatId}
    >
      <SidebarChatList emptyState={defaultEmptyState} />
    </SidebarChatProvider>
  )

describe("SidebarChatList", () => {
  it("uses a hash glyph for a group without an emoji or custom image", () => {
    renderList()

    expect(
      screen.getByTestId("sidebar-group-avatar-fallback")
    ).toHaveTextContent("＃")
    expect(screen.queryByRole("img", { name: "General" })).toBeNull()
  })

  it("keeps explicit group emoji and custom images", () => {
    const { container } = render(
      <SidebarChatProvider
        initialGroups={[
          {
            id: "groups",
            title: "Groups",
            chats: [
              {
                id: "emoji",
                label: "Product",
                avatar: { type: "emoji", emoji: "🧭" },
              },
              {
                id: "image",
                label: "Design",
                avatar: {
                  type: "team",
                  name: "Design",
                  src: "/design.png",
                },
              },
            ],
          },
        ]}
      >
        <SidebarChatList emptyState={defaultEmptyState} />
      </SidebarChatProvider>
    )

    expect(
      screen.queryByTestId("sidebar-group-avatar-fallback")
    ).not.toBeInTheDocument()
    expect(screen.getByRole("img", { name: "🧭" })).toBeInTheDocument()
    expect(
      container.querySelector('[role="img"][aria-hidden="true"]')
    ).toBeInTheDocument()
  })

  it("shows a blank state when there are no chats", () => {
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList emptyState={defaultEmptyState} />
      </SidebarChatProvider>
    )
    expect(screen.getByText("No chats yet")).toBeInTheDocument()
  })

  it("shows a skeleton (not the blank state) while loading with no chats", () => {
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList emptyState={defaultEmptyState} loading />
      </SidebarChatProvider>
    )
    expect(screen.getByTestId("sidebar-chat-list-skeleton")).toBeInTheDocument()
    expect(screen.queryByText("No chats yet")).not.toBeInTheDocument()
  })

  it("ignores the loading flag once chats are known (cascade takes over)", () => {
    render(
      <SidebarChatProvider initialGroups={groups}>
        <SidebarChatList emptyState={defaultEmptyState} loading />
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
        <SidebarChatList emptyState={defaultEmptyState} />
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

  it("renders the blank-state CTA and fires its onClick", async () => {
    const onStart = vi.fn()
    render(
      <SidebarChatProvider initialGroups={[]}>
        <SidebarChatList
          emptyState={{
            title: "No conversations yet",
            actions: [{ label: "Start a conversation", onClick: onStart }],
          }}
        />
      </SidebarChatProvider>
    )
    expect(screen.getByText("No conversations yet")).toBeInTheDocument()
    await userEvent.click(
      screen.getByRole("button", { name: /Start a conversation/i })
    )
    expect(onStart).toHaveBeenCalledTimes(1)
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

  it("shows multiple consumer-provided status icons on the same chat", () => {
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
                presence: "online",
                unreadCount: 4,
                status: { icon: Clock, label: "Ignored fallback" },
                statuses: [
                  { icon: PalmTree, label: "On holidays" },
                  { icon: BellOff, label: "Muted" },
                ],
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
                status: { icon: Clock, label: "Away" },
              },
            ],
          },
        ]}
      >
        <SidebarChatList emptyState={defaultEmptyState} />
      </SidebarChatProvider>
    )
    expect(
      container.querySelector('[aria-label="On holidays"]')
    ).toBeInTheDocument()
    expect(container.querySelector('[aria-label="Muted"]')).toBeInTheDocument()
    expect(container.querySelector('[aria-label="Online"]')).toBeInTheDocument()
    expect(
      container.querySelector('[aria-label="4 unread"]')
    ).toBeInTheDocument()
    expect(container.querySelector('[aria-label="Away"]')).toBeInTheDocument()
    expect(
      container.querySelector('[aria-label="Ignored fallback"]')
    ).not.toBeInTheDocument()
  })

  it("renders top actions as ghost buttons and fires their onClick", async () => {
    const onNewChat = vi.fn()
    render(
      <SidebarChatProvider initialGroups={groups}>
        <SidebarChatList
          emptyState={defaultEmptyState}
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
        <SidebarChatList emptyState={defaultEmptyState} />
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
        <SidebarChatList emptyState={defaultEmptyState} />
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
        <SidebarChatList emptyState={defaultEmptyState} />
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
        <SidebarChatList emptyState={defaultEmptyState} />
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
          <SidebarChatList emptyState={defaultEmptyState} />
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
          <SidebarChatList emptyState={defaultEmptyState} />
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
          <SidebarChatList emptyState={defaultEmptyState} />
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

type MockIntersection = {
  target: Element
  isIntersecting: boolean
  top: number
  bottom: number
}

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = []

  readonly root: Element | Document | null
  readonly rootMargin = "0px"
  readonly scrollMargin = "0px"
  readonly thresholds = [0]
  readonly observed = new Set<Element>()

  constructor(
    private readonly callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.root = options?.root ?? null
    MockIntersectionObserver.instances.push(this)
  }

  observe = (target: Element) => {
    this.observed.add(target)
  }

  unobserve = (target: Element) => {
    this.observed.delete(target)
  }

  disconnect = () => {
    this.observed.clear()
  }

  takeRecords = () => []

  emit(entries: MockIntersection[]) {
    const rootBounds = {
      top: 0,
      bottom: 100,
      left: 0,
      right: 300,
      width: 300,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    }
    this.callback(
      entries.map(({ target, isIntersecting, top, bottom }) => ({
        target,
        isIntersecting,
        intersectionRatio: isIntersecting ? 0.5 : 0,
        boundingClientRect: {
          ...rootBounds,
          top,
          bottom,
          height: bottom - top,
          y: top,
        },
        intersectionRect: isIntersecting
          ? {
              ...rootBounds,
              top: Math.max(top, 0),
              bottom: Math.min(bottom, 100),
            }
          : {
              ...rootBounds,
              top: 0,
              bottom: 0,
              height: 0,
              y: 0,
            },
        rootBounds,
        time: 0,
      })),
      this
    )
  }
}

const unreadNavigationGroups: SidebarChatGroup[] = [
  {
    id: "navigation",
    title: "Navigation",
    chats: ["a", "b", "c", "d", "e"].map((id) => ({
      id,
      label: `Chat ${id.toUpperCase()}`,
      unreadCount: 3,
      onClick: vi.fn(),
    })),
  },
]

const renderInScrollViewport = (
  testGroups: SidebarChatGroup[] = unreadNavigationGroups
) =>
  render(
    <div data-testid="scroll-area-root">
      <div data-scroll-container>
        <SidebarChatProvider initialGroups={testGroups}>
          <SidebarChatList emptyState={defaultEmptyState} />
        </SidebarChatProvider>
      </div>
    </div>
  )

const latestObserver = () =>
  MockIntersectionObserver.instances[
    MockIntersectionObserver.instances.length - 1
  ]

const waitForInitialObserver = async () => {
  await waitFor(() => {
    expect(MockIntersectionObserver.instances.length).toBeGreaterThan(0)
  })
  return latestObserver()
}

const observedChat = (observer: MockIntersectionObserver, id: string) => {
  const target = Array.from(observer.observed).find(
    (element) => (element as HTMLElement).dataset.sidebarChatId === id
  )
  if (!target) throw new Error(`Chat ${id} is not observed`)
  return target
}

describe("SidebarChatList unread navigation", () => {
  const originalIntersectionObserver = Object.getOwnPropertyDescriptor(
    globalThis,
    "IntersectionObserver"
  )
  const originalScrollIntoView = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "scrollIntoView"
  )

  beforeEach(() => {
    MockIntersectionObserver.instances = []
    Object.defineProperty(globalThis, "IntersectionObserver", {
      configurable: true,
      value: MockIntersectionObserver,
    })
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: vi.fn(),
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    if (originalIntersectionObserver) {
      Object.defineProperty(
        globalThis,
        "IntersectionObserver",
        originalIntersectionObserver
      )
    } else {
      delete globalThis.IntersectionObserver
    }
    if (originalScrollIntoView) {
      Object.defineProperty(
        HTMLElement.prototype,
        "scrollIntoView",
        originalScrollIntoView
      )
    } else {
      delete HTMLElement.prototype.scrollIntoView
    }
  })

  it("counts hidden unread chats independently and jumps to the nearest one", async () => {
    renderInScrollViewport()
    const observer = await waitForInitialObserver()
    const geometryReads = Array.from(observer.observed).map((target) =>
      vi.spyOn(target, "getBoundingClientRect")
    )

    act(() => {
      observer.emit([
        {
          target: observedChat(observer, "a"),
          isIntersecting: false,
          top: -60,
          bottom: -40,
        },
        {
          target: observedChat(observer, "b"),
          isIntersecting: false,
          top: -20,
          bottom: -2,
        },
        {
          // Any intersection, including a partial one, makes the row visible.
          target: observedChat(observer, "c"),
          isIntersecting: true,
          top: 90,
          bottom: 110,
        },
        {
          target: observedChat(observer, "d"),
          isIntersecting: false,
          top: 120,
          bottom: 140,
        },
        {
          target: observedChat(observer, "e"),
          isIntersecting: false,
          top: 160,
          bottom: 180,
        },
      ])
    })

    expect(
      screen.getByRole("button", { name: "2 unread chats above" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "2 unread chats below" })
    ).toBeInTheDocument()
    expect(
      screen
        .getByRole("button", { name: "2 unread chats above" })
        .closest('[data-testid="scroll-area-root"]')
    ).toBe(screen.getByTestId("scroll-area-root"))
    geometryReads.forEach((readGeometry) => {
      expect(readGeometry).not.toHaveBeenCalled()
    })

    await userEvent.click(
      screen.getByRole("button", { name: "2 unread chats above" })
    )
    const nearestAbove = observedChat(observer, "b") as HTMLElement
    expect(nearestAbove.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    })
    act(() => {
      observer.emit([
        {
          target: nearestAbove,
          isIntersecting: true,
          top: 40,
          bottom: 60,
        },
      ])
    })
    expect(screen.getByRole("button", { name: /Chat B/ })).toHaveFocus()
    expect(unreadNavigationGroups[0].chats[1].onClick).not.toHaveBeenCalled()
    expect(screen.getByRole("button", { name: /Chat B/ })).toHaveAttribute(
      "aria-pressed",
      "false"
    )

    await userEvent.click(
      screen.getByRole("button", { name: "2 unread chats below" })
    )
    const nearestBelow = observedChat(observer, "d") as HTMLElement
    expect(nearestBelow.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    })
    act(() => {
      observer.emit([
        {
          target: nearestBelow,
          isIntersecting: true,
          top: 40,
          bottom: 60,
        },
      ])
    })
    expect(screen.getByRole("button", { name: /Chat D/ })).toHaveFocus()
  })

  it("represents every unread chat in a collapsed group with its header", async () => {
    renderInScrollViewport([
      {
        id: "dms",
        title: "Direct messages",
        isOpen: false,
        chats: [
          { id: "a", label: "A", unreadCount: 2 },
          { id: "b", label: "B", unreadCount: 5 },
        ],
      },
    ])
    const observer = await waitForInitialObserver()
    const groupTarget = Array.from(observer.observed).find(
      (element) =>
        (element as HTMLElement).dataset.sidebarPanelGroupId === "dms"
    )
    if (!groupTarget) throw new Error("Collapsed group is not observed")
    expect(observer.observed.size).toBe(1)

    act(() => {
      observer.emit([
        {
          target: groupTarget,
          isIntersecting: false,
          top: 120,
          bottom: 150,
        },
      ])
    })

    await userEvent.click(
      screen.getByRole("button", { name: "2 unread chats below" })
    )
    expect(groupTarget.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    })
    act(() => {
      observer.emit([
        {
          target: groupTarget,
          isIntersecting: true,
          top: 20,
          bottom: 50,
        },
      ])
    })
    const groupHeader = screen
      .getByText("Direct messages")
      .closest("[tabindex='0']")
    expect(groupHeader).toHaveFocus()
    expect(groupHeader?.tagName).toBe("BUTTON")
    expect(groupHeader).toHaveAttribute("aria-expanded", "false")
    expect(
      groupTarget.querySelector("[data-sidebar-collapsible-open='false']")
    ).toBeInTheDocument()

    expect(
      screen.queryByRole("button", { name: "2 unread chats below" })
    ).not.toBeInTheDocument()
  })

  it("switches observation between unread rows and the header as a group collapses", async () => {
    renderInScrollViewport([
      {
        id: "dms",
        title: "Direct messages",
        isOpen: true,
        chats: [
          { id: "a", label: "A", unreadCount: 2 },
          { id: "b", label: "B", unreadCount: 5 },
        ],
      },
    ])
    let observer = await waitForInitialObserver()
    expect(Array.from(observer.observed)).toEqual(
      expect.arrayContaining([
        observedChat(observer, "a"),
        observedChat(observer, "b"),
      ])
    )

    const header = screen
      .getByText("Direct messages")
      .closest<HTMLElement>("[tabindex='0']")
    if (!header) throw new Error("Group header is not focusable")
    const observersBeforeCollapse = MockIntersectionObserver.instances.length
    await userEvent.click(header)
    await waitFor(() => {
      expect(MockIntersectionObserver.instances.length).toBeGreaterThan(
        observersBeforeCollapse
      )
    })

    observer = latestObserver()
    expect(observer.observed.size).toBe(1)
    const collapsedTarget = Array.from(observer.observed)[0]
    expect((collapsedTarget as HTMLElement).dataset.sidebarPanelGroupId).toBe(
      "dms"
    )
    act(() => {
      observer.emit([
        {
          target: collapsedTarget,
          isIntersecting: false,
          top: 120,
          bottom: 150,
        },
      ])
    })
    expect(
      screen.getByRole("button", { name: "2 unread chats below" })
    ).toBeInTheDocument()

    const observersBeforeExpand = MockIntersectionObserver.instances.length
    await userEvent.click(header)
    await waitFor(() => {
      expect(MockIntersectionObserver.instances.length).toBeGreaterThan(
        observersBeforeExpand
      )
    })
    observer = latestObserver()
    expect(Array.from(observer.observed)).toEqual(
      expect.arrayContaining([
        observedChat(observer, "a"),
        observedChat(observer, "b"),
      ])
    )
  })

  it("waits for unread loading rows to resolve before making them targets", async () => {
    renderInScrollViewport([
      {
        id: "dms",
        title: "Direct messages",
        chats: [
          { id: "loading", label: "Loading", unreadCount: 1, loading: true },
          { id: "ready", label: "Ready", unreadCount: 1 },
        ],
      },
    ])
    const observer = await waitForInitialObserver()
    expect(
      Array.from(observer.observed).some(
        (element) =>
          (element as HTMLElement).dataset.sidebarChatId === "loading"
      )
    ).toBe(false)
    expect(observedChat(observer, "ready")).toBeInTheDocument()
  })

  it("hides the controls while searching and outside a scroll viewport", async () => {
    renderInScrollViewport()
    const observer = await waitForInitialObserver()
    act(() => {
      observer.emit([
        {
          target: observedChat(observer, "a"),
          isIntersecting: false,
          top: 120,
          bottom: 140,
        },
      ])
    })
    expect(
      screen.getByRole("button", { name: "1 unread chat below" })
    ).toBeInTheDocument()

    await userEvent.type(screen.getByRole("searchbox"), "chat")
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: /unread chats? below/ })
      ).not.toBeInTheDocument()
    })

    const observersBeforeClear = MockIntersectionObserver.instances.length
    await userEvent.clear(screen.getByRole("searchbox"))
    await waitFor(() => {
      expect(MockIntersectionObserver.instances.length).toBeGreaterThan(
        observersBeforeClear
      )
    })
    const reboundObserver = latestObserver()
    act(() => {
      reboundObserver.emit([
        {
          target: observedChat(reboundObserver, "a"),
          isIntersecting: false,
          top: 120,
          bottom: 140,
        },
      ])
    })
    expect(
      screen.getByRole("button", { name: "1 unread chat below" })
    ).toBeInTheDocument()

    const observersBeforeStandalone = MockIntersectionObserver.instances.length
    render(
      <SidebarChatProvider initialGroups={unreadNavigationGroups}>
        <SidebarChatList emptyState={defaultEmptyState} />
      </SidebarChatProvider>
    )
    expect(
      screen.queryByRole("button", { name: /unread chats? above/ })
    ).not.toBeInTheDocument()
    expect(MockIntersectionObserver.instances.length).toBe(
      observersBeforeStandalone
    )
  })

  it("rebinds targets when unread state and pinned ordering change", async () => {
    const initialGroups: SidebarChatGroup[] = [
      {
        id: "conversations",
        title: "Conversations",
        chats: [
          { id: "a", label: "Chat A", unreadCount: 1 },
          { id: "b", label: "Chat B" },
        ],
      },
    ]
    const StoreControls = () => {
      const { setUnread, setGroups } = useSidebarChatActions()
      return (
        <>
          <button type="button" onClick={() => setUnread("a", 0)}>
            Mark A read
          </button>
          <button
            type="button"
            onClick={() =>
              setGroups([
                {
                  id: "pinned",
                  title: "Pinned",
                  chats: [
                    { id: "b", label: "Chat B", unreadCount: 1, pinned: true },
                  ],
                },
                {
                  id: "conversations",
                  title: "Conversations",
                  chats: [{ id: "a", label: "Chat A" }],
                },
              ])
            }
          >
            Pin B with unread
          </button>
        </>
      )
    }

    render(
      <div>
        <div data-scroll-container>
          <SidebarChatProvider initialGroups={initialGroups}>
            <StoreControls />
            <SidebarChatList emptyState={defaultEmptyState} />
          </SidebarChatProvider>
        </div>
      </div>
    )
    let observer = await waitForInitialObserver()
    act(() => {
      observer.emit([
        {
          target: observedChat(observer, "a"),
          isIntersecting: false,
          top: 120,
          bottom: 140,
        },
      ])
    })
    expect(
      screen.getByRole("button", { name: "1 unread chat below" })
    ).toBeInTheDocument()

    const observerCountBeforeRead = MockIntersectionObserver.instances.length
    await userEvent.click(screen.getByRole("button", { name: "Mark A read" }))
    await waitFor(() => {
      expect(MockIntersectionObserver.instances.length).toBeGreaterThan(
        observerCountBeforeRead
      )
      expect(
        screen.queryByRole("button", { name: "1 unread chat below" })
      ).not.toBeInTheDocument()
    })

    const observerCountBeforePin = MockIntersectionObserver.instances.length
    await userEvent.click(
      screen.getByRole("button", { name: "Pin B with unread" })
    )
    await waitFor(() => {
      expect(MockIntersectionObserver.instances.length).toBeGreaterThan(
        observerCountBeforePin
      )
    })
    observer = latestObserver()
    act(() => {
      observer.emit([
        {
          target: observedChat(observer, "b"),
          isIntersecting: false,
          top: -30,
          bottom: -10,
        },
      ])
    })
    expect(
      screen.getByRole("button", { name: "1 unread chat above" })
    ).toBeInTheDocument()
  })

  it("scrolls immediately when reduced motion is active", async () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    renderInScrollViewport()
    const observer = await waitForInitialObserver()
    const target = observedChat(observer, "e") as HTMLElement
    act(() => {
      observer.emit([{ target, isIntersecting: false, top: 120, bottom: 140 }])
    })

    await userEvent.click(
      screen.getByRole("button", { name: "1 unread chat below" })
    )
    expect(target.scrollIntoView).toHaveBeenCalledWith({
      behavior: "auto",
      block: "center",
    })
  })

  it("does not steal focus after the user interrupts a smooth jump", async () => {
    renderInScrollViewport()
    const observer = await waitForInitialObserver()
    const target = observedChat(observer, "e") as HTMLElement
    act(() => {
      observer.emit([{ target, isIntersecting: false, top: 120, bottom: 140 }])
    })

    await userEvent.click(
      screen.getByRole("button", { name: "1 unread chat below" })
    )
    const search = screen.getByRole("searchbox")
    act(() => search.focus())
    act(() => {
      observer.emit([{ target, isIntersecting: true, top: 40, bottom: 60 }])
    })

    expect(search).toHaveFocus()
  })
})
