import { type RefObject } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { ChartVerticalBars, Search } from "@/icons/app"
import {
  userEvent,
  waitFor,
  zeroRender as render,
  screen,
} from "@/testing/test-utils"

import { type WelcomeScreenSuggestion } from "../../F0AiChat/types"

// jsdom has no MediaRecorder, so dictation would report itself unsupported and
// the microphone would never render. `start` is a spy: whether pressing the
// microphone actually reaches it is the point of one of the tests below.
const recorder = vi.hoisted(() => ({
  start: vi.fn(),
  stop: vi.fn(),
  cancel: vi.fn(),
}))

vi.mock("../useAudioRecorder", () => ({
  useAudioRecorder: () => ({
    status: "idle",
    stream: null,
    isSupported: true,
    ...recorder,
  }),
}))

// A faithful-enough double: it keeps the props the composer own behavior depends
// on — the ref (so the mount autofocus can land) and the controlled value (so
// typing reaches `hasDataToSend`) — without the sizer, overlay and typewriter
// layers. Focus is tracked on the form, so nothing extra is needed for that.
vi.mock("../components/TextareaField", () => ({
  TextareaField: ({
    textareaRef,
    inputValue,
    onInputChange,
  }: {
    textareaRef: RefObject<HTMLTextAreaElement>
    inputValue: string
    onInputChange: (value: string, cursorPos: number) => void
  }) => (
    <textarea
      aria-label="Message"
      ref={textareaRef}
      value={inputValue}
      onChange={(e) =>
        onInputChange(e.target.value, e.target.selectionStart ?? 0)
      }
    />
  ),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const suggestions: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [{ title: "April leave summary" }],
  },
  {
    icon: Search,
    label: "Find",
    items: [{ title: "Who is out this week?" }],
  },
]

const sendButton = () => screen.getByRole("button", { name: /send/i })
const trigger = () => screen.getByRole("button", { name: /analyze/i })
const textarea = () => screen.getByRole("textbox", { name: "Message" })
/** The band the chips share with the buttons — the action row. */
const actionRow = () => trigger().closest("form > div > div")

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

  it("puts the chips and the send button on the same row", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    // One band holds both, so however many groups there are the field stays two
    // bands tall.
    expect(actionRow()?.contains(sendButton())).toBe(true)
    // …and the text band holds neither.
    expect(textarea().parentElement?.contains(sendButton())).toBe(false)
    expect(textarea().parentElement?.contains(trigger())).toBe(false)
  })

  it("renders exactly one send button", () => {
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

  it("keeps every control on that one row, dictation next to send", async () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
        fileAttachments={{ onUploadFiles: async () => [] }}
        onTranscribe={async () => "hola"}
        toolbarStart={<button type="button">Pick a model</button>}
      />
    )

    const row = actionRow()!
    const attach = screen.getByRole("button", { name: /attach/i })
    const model = screen.getByRole("button", { name: "Pick a model" })
    const mic = screen.getByRole("button", { name: /record/i })

    for (const control of [attach, model, mic, sendButton()]) {
      expect(row.contains(control)).toBe(true)
    }
    // The chips take the middle: host controls lead, dictation · send trail.
    expect(
      model.compareDocumentPosition(trigger()) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    expect(
      trigger().compareDocumentPosition(mic) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    // Dictation sits immediately before send, not at the other end of the row.
    expect(
      mic.compareDocumentPosition(sendButton()) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    expect(mic.parentElement).toBe(sendButton().parentElement)
  })

  it("scrolls the chips sideways instead of wrapping them", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    // A second line of chips would grow the field's whole bottom band, so the
    // row is one line that scrolls — and each chip holds its width.
    const row = trigger().parentElement!
    expect(row.className).toMatch(/overflow-x-auto/)
    expect(row.className).toMatch(/flex-nowrap/)
    expect(trigger().className).toMatch(/shrink-0/)
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

  it("keeps the bar's shape once the welcome screen is gone", () => {
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
    // Still one row with the send button in it, and still the text band above.
    expect(sendButton().closest("form > div > div")).not.toBe(
      textarea().parentElement
    )
    expect(screen.getAllByRole("button", { name: /send/i })).toHaveLength(1)
  })
})

describe("F0AiChatTextArea welcomeScreenSuggestionsCollapsedByDefault", () => {
  beforeEach(() => {
    recorder.start.mockClear()
  })

  const renderCollapsed = (placement: "above" | "inside" = "inside") =>
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement={placement}
        welcomeScreenSuggestionsCollapsedByDefault
        onSuggestionClick={() => {}}
        fileAttachments={{ onUploadFiles: async () => [] }}
        onTranscribe={async () => "hola"}
      />
    )

  it("collapses the bar to ONE line: no control row at all", () => {
    renderCollapsed()

    // Not just the chips — the whole row goes. A row emptied of its chips would
    // still be 56px of padding around two buttons, which is not a quiet bar.
    expect(screen.queryByRole("button", { name: /analyze/i })).toBeNull()
    expect(screen.queryByRole("button", { name: /attach/i })).toBeNull()
    // Send and dictation come along onto the text's own line: a bar you cannot
    // send from is not a composer, and one that hid the microphone would be
    // asking the reader to type first.
    const textBand = textarea().parentElement!
    expect(textBand.contains(sendButton())).toBe(true)
    expect(
      textBand.contains(screen.getByRole("button", { name: /record/i }))
    ).toBe(true)
    expect(screen.getAllByRole("button", { name: /send/i })).toHaveLength(1)
    expect(screen.getAllByRole("button", { name: /record/i })).toHaveLength(1)
  })

  it("opens the full control row on focus, send back among its peers", async () => {
    const user = userEvent.setup()
    renderCollapsed()

    await user.click(textarea())

    const trigger = await screen.findByRole("button", { name: /analyze/i })
    const row = trigger.closest("form > div > div")!
    for (const control of [
      screen.getByRole("button", { name: /attach/i }),
      screen.getByRole("button", { name: /record/i }),
      sendButton(),
    ]) {
      expect(row.contains(control)).toBe(true)
    }
    // …and the inline one is gone with the collapsed line it belonged to.
    expect(screen.getAllByRole("button", { name: /send/i })).toHaveLength(1)
    expect(textarea().parentElement?.contains(sendButton())).toBe(false)
  })

  it("does not focus itself on mount, which would open the bar at once", () => {
    renderCollapsed()

    expect(textarea()).not.toHaveFocus()
    expect(screen.queryByRole("button", { name: /analyze/i })).toBeNull()
  })

  it("starts dictation from the collapsed line", async () => {
    // Regression: taking focus is mousedown's default action, focus opens the
    // bar, and opening the bar unmounts this line — so the microphone was
    // destroyed between mousedown and mouseup and its click never fired.
    // Pressing it did nothing at all.
    const user = userEvent.setup()
    renderCollapsed()

    await user.click(screen.getByRole("button", { name: /record/i }))

    expect(recorder.start).toHaveBeenCalledOnce()
    // …and the bar opened around it, so the recording has controls to end it.
    expect(
      await screen.findByRole("button", { name: /analyze/i })
    ).toBeVisible()
  })

  it("collapses again when focus leaves the composer", async () => {
    const user = userEvent.setup()
    render(
      <>
        <F0AiChatTextArea
          onSubmit={() => {}}
          isWelcomeScreen
          welcomeScreenSuggestions={suggestions}
          welcomeScreenSuggestionsPlacement="inside"
          welcomeScreenSuggestionsCollapsedByDefault
          onSuggestionClick={() => {}}
        />
        <button type="button">Somewhere else</button>
      </>
    )

    await user.click(textarea())
    expect(
      await screen.findByRole("button", { name: /analyze/i })
    ).toBeVisible()

    await user.click(screen.getByRole("button", { name: "Somewhere else" }))

    await waitFor(() =>
      expect(screen.queryByRole("button", { name: /analyze/i })).toBeNull()
    )
  })

  it("stays open while focus moves onto its own chips", async () => {
    const user = userEvent.setup()
    renderCollapsed()

    await user.click(textarea())
    const chip = await screen.findByRole("button", { name: /analyze/i })

    // Every way of picking a chip takes focus off the textarea, so closing on
    // the textarea's own blur would close the row on its way to being used.
    await user.click(chip)

    expect(textarea()).not.toHaveFocus()
    expect(screen.getByRole("button", { name: /analyze/i })).toBeVisible()
    expect(screen.getByText("April leave summary")).toBeInTheDocument()
  })

  it("stays open with something already typed, focus or not", async () => {
    const user = userEvent.setup()
    render(
      <>
        <F0AiChatTextArea
          onSubmit={() => {}}
          isWelcomeScreen
          welcomeScreenSuggestions={suggestions}
          welcomeScreenSuggestionsPlacement="inside"
          welcomeScreenSuggestionsCollapsedByDefault
          onSuggestionClick={() => {}}
        />
        <button type="button">Somewhere else</button>
      </>
    )

    await user.click(textarea())
    await user.type(textarea(), "How much leave do I have left?")
    await user.click(screen.getByRole("button", { name: "Somewhere else" }))

    // A half-typed prompt with no visible way to send it would be a trap.
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /analyze/i })).toBeVisible()
    )
  })

  it("collapses the row above the composer too", async () => {
    const user = userEvent.setup()
    renderCollapsed("above")

    expect(screen.queryByRole("button", { name: /analyze/i })).toBeNull()
    await user.click(textarea())
    expect(
      await screen.findByRole("button", { name: /analyze/i })
    ).toBeVisible()
  })

  it("renders the chips from the start without the prop", () => {
    render(
      <F0AiChatTextArea
        onSubmit={() => {}}
        isWelcomeScreen
        welcomeScreenSuggestions={suggestions}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={() => {}}
      />
    )

    expect(screen.getByRole("button", { name: /analyze/i })).toBeVisible()
  })
})
