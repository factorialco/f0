import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { F0AiMessagesContainer } from "../F0AiMessagesContainer"

describe("F0AiMessagesContainer", () => {
  it("forwards the caption and subtitle to the welcome screen", () => {
    zeroRender(
      <F0AiMessagesContainer
        turns={[]}
        initialMessage="Ask a data question."
        initialMessageCaption="Analytics mode:"
        initialMessageSubtitle="Ask about employees, contracts, absences, and presence."
      />
    )

    expect(screen.getByText("Analytics mode:")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Ask about employees, contracts, absences, and presence."
      )
    ).toBeInTheDocument()
    expect(screen.getByText("Ask a data question.")).toBeInTheDocument()
  })

  it("renders the welcome CTA and fires its onClick", async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    zeroRender(
      <F0AiMessagesContainer
        turns={[]}
        initialMessage="Ask a data question."
        initialMessageCta={{ label: "How to use One", onClick }}
      />
    )

    const cta = screen.getByRole("button", { name: "How to use One" })
    await user.click(cta)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
