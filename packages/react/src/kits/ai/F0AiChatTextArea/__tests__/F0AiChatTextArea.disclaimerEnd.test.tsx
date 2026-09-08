import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

const DISCLAIMER = {
  text: "One works within your permissions.",
  link: "/permissions",
  linkText: "See more",
}

describe("F0AiChatTextArea disclaimerEnd", () => {
  it("pins the host control to the right end of the disclaimer row", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        disclaimer={DISCLAIMER}
        disclaimerEnd={<button type="button">Usage</button>}
      />
    )

    const text = screen.getByText(DISCLAIMER.text)
    const control = screen.getByRole("button", { name: "Usage" })
    const row = text.closest("[class*='max-w-content']")

    expect(row).not.toBeNull()
    expect(row).toContainElement(control)
    expect(row).toHaveClass("justify-between")
    expect(
      text.compareDocumentPosition(control) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("keeps the disclaimer centered when no control is passed", () => {
    render(<F0AiChatTextArea onSubmit={vi.fn()} disclaimer={DISCLAIMER} />)

    const row = screen
      .getByText(DISCLAIMER.text)
      .closest("[class*='max-w-content']")

    expect(row).toHaveClass("justify-center")
  })

  it("renders the control even without disclaimer text", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        disclaimerEnd={<button type="button">Usage</button>}
      />
    )

    expect(screen.getByRole("button", { name: "Usage" })).toBeInTheDocument()
  })

  it("hides the row on the fullscreen welcome screen", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        disclaimer={DISCLAIMER}
        disclaimerEnd={<button type="button">Usage</button>}
        isWelcomeScreen
        fullscreen
      />
    )

    expect(
      screen.queryByRole("button", { name: "Usage" })
    ).not.toBeInTheDocument()
  })
})
