import { describe, expect, it, vi } from "vitest"

import { ChartVerticalBars, File } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import {
  type F0AiChatWelcomeCard,
  type WelcomeScreenSuggestion,
} from "../../F0AiChat/types"

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

  it("renders the suggestions above the textarea in fullscreen mode", () => {
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
    // textarea follows the trigger in document order → suggestions are above.
    expect(
      trigger.compareDocumentPosition(textarea) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders welcome cards below the textarea on the fullscreen welcome screen", () => {
    const cards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        message: "Create an empty survey.",
      },
    ]
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        fullscreen
        isWelcomeScreen
        welcomeScreenCards={cards}
        onCardSelect={() => {}}
      />
    )

    const textarea = screen.getByRole("textbox", { name: "Message" })
    const card = screen.getByText("Empty survey")
    // card follows the textarea in document order → cards are below.
    expect(
      textarea.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders suggestions and cards together with independent counts", () => {
    // Two suggestion groups + three cards: the two features are optional and
    // independent, so their counts need not match.
    const twoSuggestions: WelcomeScreenSuggestion[] = [
      { icon: ChartVerticalBars, label: "Analyze", items: [{ title: "A" }] },
      { icon: ChartVerticalBars, label: "Summarize", items: [{ title: "B" }] },
    ]
    const threeCards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        message: "Create an empty survey.",
      },
      {
        id: "from-template",
        icon: File,
        title: "From template",
        message: "Use a template.",
      },
      {
        id: "import",
        icon: File,
        title: "Import",
        message: "Import an existing survey.",
      },
    ]
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        fullscreen
        isWelcomeScreen
        welcomeScreenSuggestions={twoSuggestions}
        onSuggestionClick={() => {}}
        welcomeScreenCards={threeCards}
        onCardSelect={() => {}}
      />
    )

    expect(screen.getByRole("button", { name: /analyze/i })).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /summarize/i })
    ).toBeInTheDocument()
    expect(screen.getByText("Empty survey")).toBeInTheDocument()
    expect(screen.getByText("From template")).toBeInTheDocument()
    expect(screen.getByText("Import")).toBeInTheDocument()
  })

  it("does not render welcome cards on the sidepanel welcome screen", () => {
    const cards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        message: "Create an empty survey.",
      },
    ]
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenCards={cards}
        onCardSelect={() => {}}
      />
    )

    expect(screen.queryByText("Empty survey")).not.toBeInTheDocument()
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
