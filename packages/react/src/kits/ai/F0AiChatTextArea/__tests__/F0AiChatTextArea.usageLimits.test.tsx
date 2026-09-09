import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

const DISCLAIMER = {
  text: "One works within your permissions.",
  link: "/permissions",
  linkText: "See more",
}

const USAGE_LIMITS = { usage: { usedPercentage: 30 } }

const getRing = () =>
  screen.getByRole("button", { name: /Personal allowance: 30% used/ })

describe("F0AiChatTextArea usageLimits", () => {
  it("pins the usage ring to the right end of the disclaimer row", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        disclaimer={DISCLAIMER}
        usageLimits={USAGE_LIMITS}
      />
    )

    const text = screen.getByText(DISCLAIMER.text)
    const ring = getRing()
    const row = text.closest("[class*='max-w-content']")

    expect(row).not.toBeNull()
    expect(row).toContainElement(ring)
    expect(row).toHaveClass("justify-between")
    expect(
      text.compareDocumentPosition(ring) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("keeps the disclaimer centered without usage limits", () => {
    render(<F0AiChatTextArea onSubmit={vi.fn()} disclaimer={DISCLAIMER} />)

    const row = screen
      .getByText(DISCLAIMER.text)
      .closest("[class*='max-w-content']")

    expect(row).toHaveClass("justify-center")
    expect(screen.queryByRole("button", { name: /allowance/ })).toBeNull()
  })

  it("renders the ring even without disclaimer text", () => {
    render(<F0AiChatTextArea onSubmit={vi.fn()} usageLimits={USAGE_LIMITS} />)

    expect(getRing()).toBeInTheDocument()
  })

  it("hides the row on the fullscreen welcome screen", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        disclaimer={DISCLAIMER}
        usageLimits={USAGE_LIMITS}
        isWelcomeScreen
        fullscreen
      />
    )

    expect(screen.queryByRole("button", { name: /allowance/ })).toBeNull()
  })
})
