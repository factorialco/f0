import { describe, expect, it, vi } from "vitest"

import { ChartVerticalBars } from "@/icons/app"
import { userEvent, zeroRender as render, screen } from "@/testing/test-utils"

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

const sendButton = () => screen.getByRole("button", { name: /send/i })
const trigger = () => screen.getByRole("button", { name: /analyze/i })
const textarea = () => screen.getByRole("textbox", { name: "Message" })

describe("F0AiChatTextArea welcomeScreenSuggestionsPlacement='inside'", () => {
  it("renders the suggestions inside the form, below the textarea", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    const form = textarea().closest("form")
    // Enclosed by the field itself — its border and focus highlight are the form's.
    expect(form?.contains(trigger())).toBe(true)
    // …and after the textarea, so the row reads as the field's foot.
    expect(
      textarea().compareDocumentPosition(trigger()) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("keeps the suggestions outside the form with the default placement", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        onSuggestionClick={() => {}}
      />
    )

    expect(textarea().closest("form")?.contains(trigger())).toBe(false)
  })

  it("moves the send button onto the textarea's own band", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    // The band is the row wrapping the mocked TextareaField.
    const band = textarea().parentElement
    expect(band?.contains(sendButton())).toBe(true)
    // The chips are a separate band under it, not part of the text row.
    expect(band?.contains(trigger())).toBe(false)
  })

  it("renders exactly one send button (the action row gives its up)", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    expect(screen.getAllByRole("button", { name: /send/i })).toHaveLength(1)
  })

  it("drops the action row when it has no controls left to hold", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    // No attachments, no dictation, no toolbarStart: an action row would be
    // 24px of padding around nothing.
    expect(
      screen.queryByRole("button", { name: /attach/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /record/i })
    ).not.toBeInTheDocument()
    // The chips band is the last thing in the form — nothing follows it.
    const form = textarea().closest("form")!
    const chipsBand = trigger().closest("form > div > div")
    expect(form.contains(chipsBand)).toBe(true)
  })

  it("keeps the action row for the controls that stay in it", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
        toolbarStart={<button type="button">Pick a model</button>}
      />
    )

    expect(
      screen.getByRole("button", { name: "Pick a model" })
    ).toBeInTheDocument()
    // The send button did NOT come back with it.
    expect(screen.getAllByRole("button", { name: /send/i })).toHaveLength(1)
    expect(textarea().parentElement?.contains(sendButton())).toBe(true)
  })

  it("opens the group popover on click without submitting the form", async () => {
    // Inside the form a chip's implicit `type="submit"` submits it, and the
    // submit handler's textarea refocus reads to Radix as an outside
    // interaction — closing the popover in the same click that opened it.
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    const form = textarea().closest("form")!
    const onFormSubmit = vi.fn()
    form.addEventListener("submit", onFormSubmit)

    await user.click(trigger())

    expect(onFormSubmit).not.toHaveBeenCalled()
    expect(trigger()).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("April leave summary")).toBeInTheDocument()
  })

  it("keeps the send button inline once the welcome screen is gone", () => {
    // The suggestions are welcome-screen-only, but the bar must not change
    // shape under the reader when the first message lands.
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    expect(screen.queryByRole("button", { name: /analyze/i })).toBeNull()
    expect(textarea().parentElement?.contains(sendButton())).toBe(true)
  })
})
