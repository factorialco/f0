import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

const recorderState = vi.hoisted(() => ({
  status: "idle" as "idle" | "recording" | "transcribing",
}))

vi.mock("../useAudioRecorder", () => ({
  useAudioRecorder: () => ({
    status: recorderState.status,
    stream: null,
    isSupported: false,
    start: vi.fn(),
    stop: vi.fn(),
    cancel: vi.fn(),
  }),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea toolbarStart", () => {
  beforeEach(() => {
    recorderState.status = "idle"
  })

  it("renders host controls inside the form after the attachment action", () => {
    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        fileAttachments={{ onUploadFiles: vi.fn(async () => []) }}
        toolbarStart={<button type="button">Chat mode</button>}
      />
    )

    const attachmentButton = screen.getByRole("button", {
      name: /attach file/i,
    })
    const toolbarButton = screen.getByRole("button", { name: "Chat mode" })

    expect(toolbarButton.closest("form")).not.toBeNull()
    expect(toolbarButton).toHaveAttribute("type", "button")
    expect(toolbarButton.parentElement).toHaveClass("cursor-default")
    expect(
      attachmentButton.compareDocumentPosition(toolbarButton) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("does not submit or move focus away from an activated host control", async () => {
    const onSubmit = vi.fn()
    const onActivate = vi.fn()
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        toolbarStart={
          <button type="button" onClick={onActivate}>
            Analytics mode
          </button>
        }
      />
    )

    await user.type(screen.getByRole("textbox"), "Keep this draft")
    const toolbarButton = screen.getByRole("button", {
      name: "Analytics mode",
    })
    await user.click(toolbarButton)

    expect(onActivate).toHaveBeenCalledOnce()
    expect(onSubmit).not.toHaveBeenCalled()
    expect(toolbarButton).toHaveFocus()
  })

  it("renders only in the normal composer and returns after clarifying", async () => {
    const { rerender } = render(<F0AiChatTextArea onSubmit={vi.fn()} />)

    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: "Chat mode" })
      ).not.toBeInTheDocument()
    })

    rerender(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        toolbarStart={<button type="button">Chat mode</button>}
      />
    )

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Chat mode" })
      ).toBeInTheDocument()
    })

    rerender(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        toolbarStart={<button type="button">Chat mode</button>}
        clarifyingUI={<div>Choose a reporting period</div>}
      />
    )

    expect(screen.getByText("Choose a reporting period")).toBeInTheDocument()
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: "Chat mode" })
      ).not.toBeInTheDocument()
    })

    rerender(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        toolbarStart={<button type="button">Chat mode</button>}
      />
    )

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Chat mode" })
      ).toBeInTheDocument()
    })
  })

  it("hides while recording and returns while transcription uses the normal row", () => {
    recorderState.status = "recording"

    const { rerender } = render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        toolbarStart={<button type="button">Chat mode</button>}
      />
    )

    expect(
      screen.queryByRole("button", { name: "Chat mode" })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /cancel recording/i })
    ).toBeInTheDocument()

    recorderState.status = "transcribing"
    rerender(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        toolbarStart={<button type="button">Chat mode</button>}
      />
    )

    expect(
      screen.getByRole("button", { name: "Chat mode" })
    ).toBeInTheDocument()
  })
})
