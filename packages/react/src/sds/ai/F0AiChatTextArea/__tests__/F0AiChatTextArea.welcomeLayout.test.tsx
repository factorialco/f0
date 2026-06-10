import { describe, expect, it, vi } from "vitest"

import { ChartVerticalBars } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { type WelcomeScreenSuggestion } from "../../F0AiChat/types"

vi.mock("../components/TextareaField", () => ({
  TextareaField: () => <textarea aria-label="Message" readOnly />,
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const suggestions: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [{ title: "April leave summary" }],
  },
]

describe("F0AiChatTextArea welcome suggestions placement", () => {
  it("renders the suggestions above the textarea in sidepanel mode", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        onSuggestionClick={() => {}}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    const textarea = screen.getByRole("textbox", { name: "Message" })
    // textarea follows the trigger in document order → suggestions are above.
    expect(
      trigger.compareDocumentPosition(textarea) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders the suggestions below the textarea in fullscreen mode", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        fullscreen
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        onSuggestionClick={() => {}}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    const textarea = screen.getByRole("textbox", { name: "Message" })
    // trigger follows the textarea in document order → suggestions are below.
    expect(
      textarea.compareDocumentPosition(trigger) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("hides the footer on the sidepanel welcome screen", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        footer={<div>start from a template</div>}
      />
    )

    expect(screen.queryByText("start from a template")).not.toBeInTheDocument()
  })

  it("shows the footer only on the fullscreen welcome screen", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        fullscreen
        isWelcomeScreen
        footer={<div>start from a template</div>}
      />
    )

    expect(screen.getByText("start from a template")).toBeInTheDocument()
  })
})
