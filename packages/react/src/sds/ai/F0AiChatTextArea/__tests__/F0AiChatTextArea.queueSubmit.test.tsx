import { act } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

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
        onClick={() => onInputChange("Fill the emails", 15)}
      >
        Fill message
      </button>
    </>
  ),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea queued submit while uploading", () => {
  beforeEach(() => vi.clearAllMocks())

  it("waits for the upload to finish, then submits WITH the file", async () => {
    const onSubmit = vi.fn()
    let resolveUpload: (
      v: Array<{ url: string; filename: string; mimetype: string }>
    ) => void = () => {}
    const onUploadFiles = vi.fn(
      () =>
        new Promise<Array<{ url: string; filename: string; mimetype: string }>>(
          (res) => {
            resolveUpload = res
          }
        )
    )

    let dropFiles: ((files: File[]) => void) | null = null
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        fileAttachments={{ onUploadFiles }}
        onProcessFilesRef={(fn) => {
          dropFiles = fn
        }}
      />
    )

    // Attach a file — it stays "uploading" until we resolve the promise.
    await act(async () => {
      dropFiles?.([new File(["x"], "people.csv", { type: "text/csv" })])
    })
    await waitFor(() => expect(onUploadFiles).toHaveBeenCalledTimes(1))

    // Type text and hit send while still uploading → queued, not sent yet.
    fireEvent.click(screen.getByRole("button", { name: "Fill message" }))
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "Fill the emails"
      )
    )
    await user.click(screen.getByRole("button", { name: /send message/i }))
    expect(onSubmit).not.toHaveBeenCalled()

    // Upload finishes → the queued submit fires WITH the resolved file.
    await act(async () => {
      resolveUpload([
        { url: "u1", filename: "people.csv", mimetype: "text/csv" },
      ])
    })

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0][0].files).toEqual([
      { url: "u1", filename: "people.csv", mimetype: "text/csv" },
    ])
  })

  it("surfaces a transient error when a queued submit is cancelled by a failed upload", async () => {
    const onSubmit = vi.fn()
    let rejectUpload: (e: Error) => void = () => {}
    const onUploadFiles = vi.fn(
      () =>
        new Promise<Array<{ url: string; filename: string; mimetype: string }>>(
          (_, rej) => {
            rejectUpload = rej
          }
        )
    )

    let dropFiles: ((files: File[]) => void) | null = null
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea
        onSubmit={onSubmit}
        fileAttachments={{ onUploadFiles }}
        onProcessFilesRef={(fn) => {
          dropFiles = fn
        }}
      />
    )

    await act(async () => {
      dropFiles?.([new File(["x"], "broken.csv", { type: "text/csv" })])
    })
    await waitFor(() => expect(onUploadFiles).toHaveBeenCalledTimes(1))

    fireEvent.click(screen.getByRole("button", { name: "Fill message" }))
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "Fill the emails"
      )
    )
    await user.click(screen.getByRole("button", { name: /send message/i }))
    expect(onSubmit).not.toHaveBeenCalled()

    // Upload fails → the queued submit is cancelled; the user gets a banner
    // explaining why instead of the click being silently swallowed.
    await act(async () => {
      rejectUpload(new Error("network down"))
    })

    await waitFor(() =>
      expect(
        screen.getByText(/attachments failed to upload/i)
      ).toBeInTheDocument()
    )
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
