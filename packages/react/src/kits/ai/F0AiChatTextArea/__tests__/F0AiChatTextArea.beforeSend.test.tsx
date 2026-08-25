import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

interface TextareaFieldMockProps {
  inputValue: string
  onInputChange: (value: string, cursorPosition: number) => void
}

vi.mock("../components/TextareaField", () => ({
  TextareaField: ({ inputValue, onInputChange }: TextareaFieldMockProps) => (
    <>
      <textarea aria-label="Message" value={inputValue} readOnly />
      <button
        type="button"
        onClick={() => onInputChange("Show me my time off", 19)}
      >
        Fill message
      </button>
    </>
  ),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea before-submit hook", () => {
  beforeEach(() => {
    // nothing; each test owns its mocks
  })

  it("does not submit when the before-submit hook blocks submission", async () => {
    const onBeforeSubmit = vi.fn().mockResolvedValue(false)
    const onSubmit = vi.fn()
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea onSubmit={onSubmit} onBeforeSubmit={onBeforeSubmit} />
    )

    await user.click(screen.getByRole("button", { name: "Fill message" }))
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "Show me my time off"
      )
    )
    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => expect(onBeforeSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit).not.toHaveBeenCalled()
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "Show me my time off"
    )
  })

  it("submits the exact pending quote object before consuming it", async () => {
    const quote = { text: "Headcount by workplace — Barcelona office: 8" }
    const onSubmit = vi.fn()
    const onPendingQuoteChange = vi.fn()
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        pendingQuote={quote}
        onPendingQuoteChange={onPendingQuoteChange}
      />
    )

    await user.click(screen.getByRole("button", { name: "Fill message" }))
    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => expect(onSubmit).toHaveBeenCalledOnce())
    expect(onSubmit.mock.calls[0][0].quote).toBe(quote)
    expect(onPendingQuoteChange).toHaveBeenCalledWith(null)
  })
})
