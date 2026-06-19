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

  it("shows the per-chat unread count as a badge", () => {
    renderList()
    // raul has unreadCount: 3
    expect(screen.getByText("3")).toBeInTheDocument()
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
})
