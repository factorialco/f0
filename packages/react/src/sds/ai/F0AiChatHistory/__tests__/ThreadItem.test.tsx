import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { type ChatThread } from "../useChatHistory"

import { ThreadItem } from "../components/ThreadItem"

const thread: ChatThread = {
  id: "a",
  title: "Alpha",
  createdAt: "2026-01-01",
  updatedAt: "2026-01-01",
}

const handlers = {
  onSelect: vi.fn(),
  onPin: vi.fn(),
  onUnpin: vi.fn(),
  onDelete: vi.fn(),
}

describe("ThreadItem pending state", () => {
  it("renders the actions dropdown trigger when not pending", () => {
    zeroRender(<ThreadItem thread={thread} isPinned={false} {...handlers} />)

    expect(
      screen.getByRole("button", { name: "Thread options" })
    ).toBeInTheDocument()
  })

  it("replaces the actions trigger with a spinner while pending", () => {
    const { container } = zeroRender(
      <ThreadItem thread={thread} isPinned={false} isPending {...handlers} />
    )

    // No actions button while saving …
    expect(
      screen.queryByRole("button", { name: "Thread options" })
    ).not.toBeInTheDocument()
    // … but a busy spinner takes its place.
    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument()
  })
})

describe("ThreadItem badge", () => {
  it("shows the mode label when the thread carries a badge", () => {
    zeroRender(
      <ThreadItem
        thread={{ ...thread, badge: { label: "Analytics" } }}
        isPinned={false}
        {...handlers}
      />
    )

    expect(screen.getByText("Analytics")).toBeInTheDocument()
  })

  it("shows no mode label for an ordinary thread", () => {
    zeroRender(<ThreadItem thread={thread} isPinned={false} {...handlers} />)

    expect(screen.queryByText("Analytics")).not.toBeInTheDocument()
  })
})
