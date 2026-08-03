import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AiProcessingOverlay } from "../F0AiProcessingOverlay"

describe("F0AiProcessingOverlay", () => {
  it("renders its children", () => {
    render(
      <F0AiProcessingOverlay active={false}>
        <div data-testid="panel">Panel content</div>
      </F0AiProcessingOverlay>
    )

    expect(screen.getByTestId("panel")).toBeInTheDocument()
  })

  it("announces the default status label while active", () => {
    render(
      <F0AiProcessingOverlay active>
        <div data-testid="panel">Panel content</div>
      </F0AiProcessingOverlay>
    )

    expect(screen.getByRole("status")).toHaveTextContent("Applying changes")
  })

  it("locks the wrapped content from pointer events while active", () => {
    render(
      <F0AiProcessingOverlay active>
        <div data-testid="panel">Panel content</div>
      </F0AiProcessingOverlay>
    )

    expect(screen.getByTestId("panel").parentElement).toHaveClass(
      "pointer-events-none"
    )
  })

  it("hides the status pill and keeps the content interactive when inactive", () => {
    render(
      <F0AiProcessingOverlay active={false}>
        <div data-testid="panel">Panel content</div>
      </F0AiProcessingOverlay>
    )

    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByTestId("panel").parentElement).not.toHaveClass(
      "pointer-events-none"
    )
  })

  it("renders a custom label instead of the default", () => {
    render(
      <F0AiProcessingOverlay active label="Regenerating survey">
        <div data-testid="panel">Panel content</div>
      </F0AiProcessingOverlay>
    )

    expect(screen.getByRole("status")).toHaveTextContent("Regenerating survey")
  })

  it("drops focus from the wrapped content when it becomes active", () => {
    const { rerender } = render(
      <F0AiProcessingOverlay active={false}>
        <input data-testid="field" />
      </F0AiProcessingOverlay>
    )

    const field = screen.getByTestId("field")
    field.focus()
    expect(field).toHaveFocus()

    rerender(
      <F0AiProcessingOverlay active>
        <input data-testid="field" />
      </F0AiProcessingOverlay>
    )

    expect(field).not.toHaveFocus()
  })

  it("keeps focus on the chat input while active so follow-ups can be typed", () => {
    const { rerender } = render(
      <F0AiProcessingOverlay active={false}>
        <input data-testid="chat" name="one-ai-input" />
      </F0AiProcessingOverlay>
    )

    const chat = screen.getByTestId("chat")
    chat.focus()
    expect(chat).toHaveFocus()

    rerender(
      <F0AiProcessingOverlay active>
        <input data-testid="chat" name="one-ai-input" />
      </F0AiProcessingOverlay>
    )

    expect(chat).toHaveFocus()
  })
})
