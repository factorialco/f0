import { useState } from "react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import {
  AiChatStateProvider,
  useAiChat,
} from "../../F0AiChat/providers/AiChatStateProvider"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

const FocusHarness = () => {
  const [showInput, setShowInput] = useState(false)
  const [isClarifying, setIsClarifying] = useState(false)
  const { focusChatInput, setOpen } = useAiChat()

  return (
    <>
      <button type="button" onClick={focusChatInput}>
        Focus composer
      </button>
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          focusChatInput()
        }}
      >
        Open and focus composer
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        Close chat
      </button>
      <button type="button" onClick={() => setShowInput(true)}>
        Mount composer
      </button>
      <button type="button" onClick={() => setIsClarifying(true)}>
        Show clarifying panel
      </button>
      <button type="button" onClick={() => setIsClarifying(false)}>
        Restore composer
      </button>
      {showInput && (
        <F0AiChatTextArea
          onSubmit={vi.fn()}
          clarifyingUI={
            isClarifying ? <div>Choose a reporting period</div> : undefined
          }
        />
      )}
    </>
  )
}

describe("F0AiChatTextArea focus bridge", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "#focus-bridge-test")
  })

  afterEach(() => {
    window.history.replaceState(null, "", window.location.pathname)
  })

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
    expect(screen.getByRole("textbox")).not.toHaveFocus()

    const focusButton = screen.getByRole("button", { name: "Focus composer" })
    focusButton.focus()
    expect(focusButton).toHaveFocus()

    await user.click(focusButton)
    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus())
  })

  it("buffers focus while a clarifying panel replaces the composer", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <FocusHarness />
      </AiChatStateProvider>
    )

    await user.click(screen.getByRole("button", { name: "Mount composer" }))
    await user.click(
      screen.getByRole("button", { name: "Show clarifying panel" })
    )
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Focus composer" }))
    await user.click(screen.getByRole("button", { name: "Restore composer" }))

    await waitFor(() => expect(screen.getByRole("textbox")).toHaveFocus())
  })

  it("discards a buffered focus request when the chat closes", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <FocusHarness />
      </AiChatStateProvider>
    )

    await user.click(
      screen.getByRole("button", { name: "Open and focus composer" })
    )
    await user.click(screen.getByRole("button", { name: "Close chat" }))
    const mountButton = screen.getByRole("button", { name: "Mount composer" })
    await user.click(mountButton)

    expect(screen.getByRole("textbox")).not.toHaveFocus()
    expect(mountButton).toHaveFocus()
  })
})
