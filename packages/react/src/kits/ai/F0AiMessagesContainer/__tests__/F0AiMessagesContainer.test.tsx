import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

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
})
