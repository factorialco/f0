import { describe, expect, it, vi } from "vitest"
import {
  act,
  fireEvent,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea submission snapshot", () => {
  it("sends the accepted draft once and retains edits made during acceptance", async () => {
    let accept!: () => void
    const onSubmit = vi.fn(
      () => new Promise<void>((resolve) => (accept = resolve))
    )
    render(<F0AiChatTextArea onSubmit={onSubmit} />)

    const textarea = screen.getByRole("textbox")
    fireEvent.change(textarea, { target: { value: "first" } })
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))

    fireEvent.change(textarea, { target: { value: "second" } })
    await act(async () => accept())

    expect(onSubmit.mock.calls[0]?.[0].text).toBe("first")
    expect(textarea).toHaveValue("second")
  })
})
