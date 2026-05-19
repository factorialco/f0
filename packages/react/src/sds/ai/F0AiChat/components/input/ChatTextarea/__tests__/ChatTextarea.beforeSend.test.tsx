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
  resolvedDefaultPlaceholder: string
}

vi.mock("../TextareaField", () => ({
  TextareaField: ({
    inputValue,
    onInputChange,
    resolvedDefaultPlaceholder,
  }: TextareaFieldMockProps) => (
    <>
      <textarea aria-label="Message" value={inputValue} readOnly />
      <span>{resolvedDefaultPlaceholder}</span>
      <button
        type="button"
        onClick={() => onInputChange("Show me my time off", 19)}
      >
        Fill message
      </button>
    </>
  ),
}))

const sendMessageMock = vi.fn()
const appendMessagesMock = vi.fn()
const setActiveToolHintMock = vi.fn()
const setPendingContextMock = vi.fn()
const setPendingQuoteMock = vi.fn()
const setProcessDroppedFilesFunctionMock = vi.fn()
const onBeforeSendMessageMock = vi.fn()

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    placeholders: ["Ask anything"],
    entityRefs: undefined,
    toolHints: undefined,
    activeToolHint: null,
    setActiveToolHint: setActiveToolHintMock,
    fileAttachments: undefined,
    sendMessage: sendMessageMock,
    appendMessages: appendMessagesMock,
    clarifyingQuestion: null,
    pendingContext: null,
    setPendingContext: setPendingContextMock,
    pendingQuote: null,
    setPendingQuote: setPendingQuoteMock,
    setProcessDroppedFilesFunction: setProcessDroppedFilesFunctionMock,
    onBeforeSendMessage: onBeforeSendMessageMock,
  }),
}))

import { ChatTextarea } from "../ChatTextarea"

describe("ChatTextarea before-send hook", () => {
  beforeEach(() => {
    sendMessageMock.mockClear()
    appendMessagesMock.mockClear()
    setActiveToolHintMock.mockClear()
    setPendingContextMock.mockClear()
    setPendingQuoteMock.mockClear()
    setProcessDroppedFilesFunctionMock.mockClear()
    onBeforeSendMessageMock.mockReset()
  })

  it("does not send a text message when the before-send hook blocks submission", async () => {
    onBeforeSendMessageMock.mockResolvedValue(false)
    const onSend = vi.fn()
    const user = userEvent.setup()

    render(<ChatTextarea submitLabel="Send" onSend={onSend} />)

    fireEvent.click(screen.getByRole("button", { name: "Fill message" }))
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "Show me my time off"
      )
    )
    await user.click(screen.getByRole("button", { name: "Send" }))

    await waitFor(() =>
      expect(onBeforeSendMessageMock).toHaveBeenCalledTimes(1)
    )
    expect(onSend).not.toHaveBeenCalled()
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
      "Show me my time off"
    )
  })

  it("passes uploaded attachments to onSend", async () => {
    const uploadedFile = {
      url: "https://example.com/report.pdf",
      filename: "report.pdf",
      mimetype: "application/pdf",
    }
    const onUploadFiles = vi.fn().mockResolvedValue([uploadedFile])
    const onSend = vi.fn()
    const user = userEvent.setup()
    const file = new File(["report"], "report.pdf", {
      type: "application/pdf",
    })

    render(
      <ChatTextarea
        submitLabel="Send"
        onSend={onSend}
        fileAttachments={{ onUploadFiles }}
      />
    )

    const input = document.querySelector("input[type='file']")
    expect(input).toBeInstanceOf(HTMLInputElement)
    await user.upload(input as HTMLInputElement, file)
    await waitFor(() => expect(onUploadFiles).toHaveBeenCalledWith([file]))
    fireEvent.click(screen.getByRole("button", { name: "Fill message" }))
    await user.click(screen.getByRole("button", { name: "Send" }))

    await waitFor(() => expect(onSend).toHaveBeenCalledTimes(1))
    expect(onSend).toHaveBeenCalledWith(
      "Show me my time off",
      expect.objectContaining({
        attachments: [uploadedFile],
        message: expect.objectContaining({
          role: "user",
          content: expect.arrayContaining([
            {
              type: "binary",
              url: uploadedFile.url,
              filename: uploadedFile.filename,
              mimeType: uploadedFile.mimetype,
            },
            { type: "text", text: "Show me my time off" },
          ]),
        }),
      })
    )
    expect(sendMessageMock).not.toHaveBeenCalled()
  })

  it("uses the custom placeholder", () => {
    render(
      <ChatTextarea
        submitLabel="Send"
        onSend={vi.fn()}
        placeholders={["Ask about documents"]}
      />
    )

    expect(screen.getByText("Ask about documents")).toBeInTheDocument()
  })
})
