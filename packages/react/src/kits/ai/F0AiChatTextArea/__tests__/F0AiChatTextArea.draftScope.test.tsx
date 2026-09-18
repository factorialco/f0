import { describe, expect, it, vi } from "vitest"
import {
  act,
  fireEvent,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

describe("F0AiChatTextArea draft scope", () => {
  it("parks a draft while another conversation is active", () => {
    const onSubmit = vi.fn()
    const { rerender } = render(
      <F0AiChatTextArea draftKey="first" onSubmit={onSubmit} />
    )
    const textarea = screen.getByRole("textbox")
    fireEvent.change(textarea, { target: { value: "first draft" } })

    rerender(<F0AiChatTextArea draftKey="second" onSubmit={onSubmit} />)
    expect(textarea).toHaveValue("")
    fireEvent.change(textarea, { target: { value: "second draft" } })

    rerender(<F0AiChatTextArea draftKey="first" onSubmit={onSubmit} />)
    expect(textarea).toHaveValue("first draft")
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("keeps a queued upload send in its original conversation", async () => {
    let finishUpload!: (
      files: { url: string; filename: string; mimetype: string }[]
    ) => void
    const onUploadFiles = vi.fn(
      () =>
        new Promise<{ url: string; filename: string; mimetype: string }[]>(
          (resolve) => {
            finishUpload = resolve
          }
        )
    )
    const onSubmit = vi.fn()
    const fileAttachments = { onUploadFiles }
    const { rerender } = render(
      <F0AiChatTextArea
        draftKey="first"
        onSubmit={onSubmit}
        fileAttachments={fileAttachments}
      />
    )
    const textarea = screen.getByRole("textbox")
    const file = new File(["image"], "screenshot.png", { type: "image/png" })
    fireEvent.change(textarea, { target: { value: "first request" } })
    fireEvent.paste(textarea, {
      clipboardData: { files: [file], getData: () => "" },
    })
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))

    rerender(
      <F0AiChatTextArea
        draftKey="second"
        onSubmit={onSubmit}
        fileAttachments={fileAttachments}
      />
    )
    fireEvent.change(textarea, { target: { value: "second request" } })
    await act(async () =>
      finishUpload([
        {
          url: "https://example.com/screenshot.png",
          filename: "screenshot.png",
          mimetype: "image/png",
        },
      ])
    )
    expect(onSubmit).not.toHaveBeenCalled()
    expect(textarea).toHaveValue("second request")

    rerender(
      <F0AiChatTextArea
        draftKey="first"
        onSubmit={onSubmit}
        fileAttachments={fileAttachments}
      />
    )
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0]?.[0]).toMatchObject({
      text: "first request",
      files: [{ filename: "screenshot.png" }],
    })
  })
})
