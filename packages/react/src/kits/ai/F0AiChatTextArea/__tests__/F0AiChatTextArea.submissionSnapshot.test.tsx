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

it.each(["clarification", "busy", "before-submit"])(
  "rechecks %s before accepting a queued upload",
  async (gate) => {
    let finish!: (
      files: { url: string; filename: string; mimetype: string }[]
    ) => void
    const upload = () =>
      new Promise<{ url: string; filename: string; mimetype: string }[]>(
        (resolve) => {
          finish = resolve
        }
      )
    const onSubmit = vi.fn()
    const props = { onSubmit, fileAttachments: { onUploadFiles: upload } }
    const { rerender } = render(<F0AiChatTextArea {...props} />)
    const textarea = screen.getByRole("textbox")
    fireEvent.change(textarea, { target: { value: "Summarize" } })
    const file = new File(["pdf"], "document.pdf", { type: "application/pdf" })
    fireEvent.paste(textarea, {
      clipboardData: { files: [file], getData: () => "" },
    })
    await waitFor(() => expect(finish).toBeDefined())
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    rerender(
      <F0AiChatTextArea
        {...props}
        clarifyingUI={
          gate === "clarification" ? <div>Clarifying</div> : undefined
        }
        inProgress={gate === "busy"}
        onBeforeSubmit={
          gate === "before-submit" ? async () => false : undefined
        }
      />
    )
    await act(async () => {
      finish([{ url: "prepared", filename: file.name, mimetype: file.type }])
    })
    expect(onSubmit).not.toHaveBeenCalled()
    rerender(<F0AiChatTextArea {...props} />)
    expect(screen.getByRole("textbox")).toHaveValue("Summarize")
  }
)

it("uses current context and quote when draining an upload", async () => {
  let finish!: (
    files: { url: string; filename: string; mimetype: string }[]
  ) => void
  const upload = () =>
    new Promise<{ url: string; filename: string; mimetype: string }[]>(
      (resolve) => {
        finish = resolve
      }
    )
  const onSubmit = vi.fn()
  const props = { onSubmit, fileAttachments: { onUploadFiles: upload } }
  const { rerender } = render(
    <F0AiChatTextArea
      {...props}
      pendingContext={{ label: "Old context", context: "old" }}
      pendingQuote={{ text: "Old quote" }}
    />
  )
  const textarea = screen.getByRole("textbox")
  fireEvent.change(textarea, { target: { value: "Summarize" } })
  const file = new File(["pdf"], "document.pdf", { type: "application/pdf" })
  fireEvent.paste(textarea, {
    clipboardData: { files: [file], getData: () => "" },
  })
  await waitFor(() => expect(finish).toBeDefined())
  fireEvent.click(screen.getByRole("button", { name: /send message/i }))
  rerender(<F0AiChatTextArea {...props} />)
  await act(async () => {
    finish([{ url: "prepared", filename: file.name, mimetype: file.type }])
  })
  expect(onSubmit).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({ text: "Summarize", context: null, quote: null })
  )
})
