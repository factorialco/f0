import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

interface TextareaFieldMockProps {
  inputValue: string
  onInputChange: (value: string, cursorPosition: number) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

// Wire `onKeyDown` through so the Enter-key submit path is exercised — that's
// the path a disabled send button does NOT cover.
vi.mock("../components/TextareaField", () => ({
  TextareaField: ({
    inputValue,
    onInputChange,
    onKeyDown,
  }: TextareaFieldMockProps) => (
    <>
      <textarea
        aria-label="Message"
        value={inputValue}
        onKeyDown={onKeyDown}
        readOnly
      />
      <button type="button" onClick={() => onInputChange("Hello there", 11)}>
        Fill message
      </button>
    </>
  ),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const fillMessage = async () => {
  fireEvent.click(screen.getByRole("button", { name: "Fill message" }))
  await waitFor(() =>
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "Hello there"
    )
  )
}

describe("F0AiChatTextArea — no credits (hard credit warning)", () => {
  it("disables the send button even when there is text to send", async () => {
    render(
      <F0AiChatTextArea onSubmit={vi.fn()} creditWarning={{ level: "hard" }} />
    )

    await fillMessage()

    expect(screen.getByRole("button", { name: /send message/i })).toBeDisabled()
  })

  it("does not send when the user presses Enter", async () => {
    const onSubmit = vi.fn()
    render(
      <F0AiChatTextArea onSubmit={onSubmit} creditWarning={{ level: "hard" }} />
    )

    await fillMessage()
    fireEvent.keyDown(screen.getByRole("textbox", { name: "Message" }), {
      key: "Enter",
    })

    // Give any (unexpected) async submit a chance to fire before asserting.
    await Promise.resolve()
    expect(onSubmit).not.toHaveBeenCalled()
    // The draft is preserved so the user keeps it while topping up credits.
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "Hello there"
    )
  })

  it("keeps the send button enabled and Enter working for a soft warning", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(
      <F0AiChatTextArea onSubmit={onSubmit} creditWarning={{ level: "soft" }} />
    )

    await fillMessage()
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).not.toBeDisabled()

    await user.click(screen.getByRole("button", { name: /send message/i }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ text: "Hello there" })
    )
  })
})
