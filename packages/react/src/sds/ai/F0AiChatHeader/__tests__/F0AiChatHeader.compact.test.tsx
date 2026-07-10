import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import React from "react"

import { F0AiChatHeader } from "../F0AiChatHeader"

describe("F0AiChatHeader compact", () => {
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
})
