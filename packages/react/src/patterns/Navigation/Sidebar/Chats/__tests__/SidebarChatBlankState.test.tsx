import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { New } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { SidebarChatBlankState } from "../SidebarChatBlankState"

describe("SidebarChatBlankState", () => {
  it("renders the title", () => {
    render(<SidebarChatBlankState title="No chats yet" />)
    expect(screen.getByText("No chats yet")).toBeInTheDocument()
  })

  it("renders an optional description", () => {
    render(
      <SidebarChatBlankState
        title="No AI conversations yet"
        description="Ask One anything to start."
      />
    )
    expect(screen.getByText("Ask One anything to start.")).toBeInTheDocument()
  })

  it("omits the description when not provided", () => {
    const { container } = render(<SidebarChatBlankState title="Empty" />)
    // Only the title paragraph is present (no secondary description line).
    expect(container.querySelectorAll("p")).toHaveLength(1)
  })

  it("renders no CTA when no actions are given", () => {
    render(<SidebarChatBlankState title="Empty" />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("renders the CTA and fires its onClick", async () => {
    const onClick = vi.fn()
    render(
      <SidebarChatBlankState
        title="Empty"
        actions={[{ label: "Start a conversation", icon: New, onClick }]}
      />
    )
    await userEvent.click(
      screen.getByRole("button", { name: /Start a conversation/i })
    )
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
