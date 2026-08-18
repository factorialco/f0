import { useState } from "react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import {
  AiChatStateProvider,
  useAiChat,
} from "../../F0AiChat/providers/AiChatStateProvider"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

const FocusHarness = () => {
  const [showInput, setShowInput] = useState(false)
  const { focusChatInput } = useAiChat()

  return (
    <>
      <button type="button" onClick={focusChatInput}>
        Focus composer
      </button>
      <button type="button" onClick={() => setShowInput(true)}>
        Mount composer
      </button>
      {showInput && <F0AiChatTextArea onSubmit={vi.fn()} />}
    </>
  )
}

describe("F0AiChatTextArea focus bridge", () => {
  it("buffers a focus request until the composer mounts", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <FocusHarness />
      </AiChatStateProvider>
    )

    await user.click(screen.getByRole("button", { name: "Focus composer" }))
    await user.click(screen.getByRole("button", { name: "Mount composer" }))

    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus())
  })

  it("focuses a composer that is already mounted", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <FocusHarness />
      </AiChatStateProvider>
    )

    await user.click(screen.getByRole("button", { name: "Mount composer" }))
    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus())

    const focusButton = screen.getByRole("button", { name: "Focus composer" })
    focusButton.focus()
    expect(focusButton).toHaveFocus()

    await user.click(focusButton)
    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus())
  })
})
