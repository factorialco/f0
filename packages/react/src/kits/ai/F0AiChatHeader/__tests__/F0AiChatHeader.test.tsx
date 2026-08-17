import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { Clock } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AiChatHeader } from "../F0AiChatHeader"
import type { F0AiChatHeaderProps } from "../types"

const modes: Array<[string, Partial<F0AiChatHeaderProps>]> = [
  ["compact", { compact: true }],
  ["history", { historyEnabled: true }],
  ["legacy", {}],
]

describe("F0AiChatHeader", () => {
  it("renders only the close control (no new chat) in compact mode", () => {
    render(
      <F0AiChatHeader
        compact
        hasMessages
        onClose={vi.fn()}
        onNewChat={vi.fn()}
        onToggleVisualizationMode={vi.fn()}
      />
    )
    expect(
      screen.getByRole("button", { name: /close chat/i })
    ).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /start new chat/i })).toBeNull()
  })

  it("shows the current thread title as plain text (not a button) in compact mode", () => {
    render(
      <F0AiChatHeader
        compact
        currentThreadTitle="Pending time-off requests"
        onClose={vi.fn()}
        onToggleVisualizationMode={vi.fn()}
      />
    )
    expect(screen.getByText("Pending time-off requests")).toBeInTheDocument()
    // The title is text, never a clickable thread selector in compact mode.
    expect(
      screen.queryByRole("button", { name: /pending time-off requests/i })
    ).toBeNull()
  })

  it("falls back to the new-conversation label when no thread is loaded", () => {
    render(
      <F0AiChatHeader
        compact
        currentThreadTitle={null}
        onClose={vi.fn()}
        onToggleVisualizationMode={vi.fn()}
      />
    )
    expect(screen.getByText(/new conversation/i)).toBeInTheDocument()
  })

  it("shows the new chat button in the legacy (non-compact) variant", () => {
    render(
      <F0AiChatHeader
        hasMessages
        onClose={vi.fn()}
        onNewChat={vi.fn()}
        onToggleVisualizationMode={vi.fn()}
      />
    )
    expect(
      screen.getByRole("button", { name: /start new chat/i })
    ).toBeInTheDocument()
  })

  it("renders additional actions using the built-in header controls", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <F0AiChatHeader
        historyEnabled
        actions={[
          {
            id: "routines",
            label: "Routines",
            icon: Clock,
            onClick,
          },
        ]}
        onClose={vi.fn()}
      />
    )

    const action = screen.getByRole("button", { name: "Routines" })
    await user.hover(action)

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Routines")

    await user.click(action)

    expect(onClick).toHaveBeenCalledOnce()
  })

  it.each(modes)("renders additional actions in %s mode", (_mode, props) => {
    render(
      <F0AiChatHeader
        {...props}
        actions={[
          {
            id: "routines",
            label: "Routines",
            icon: Clock,
            onClick: vi.fn(),
          },
        ]}
        onClose={vi.fn()}
      />
    )

    expect(screen.getByRole("button", { name: "Routines" })).toBeInTheDocument()
  })

  it("preserves the built-in controls when actions are omitted", () => {
    render(<F0AiChatHeader historyEnabled onClose={vi.fn()} />)

    expect(
      screen.getByRole("button", { name: /close chat/i })
    ).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Routines" })).toBeNull()
  })
})
