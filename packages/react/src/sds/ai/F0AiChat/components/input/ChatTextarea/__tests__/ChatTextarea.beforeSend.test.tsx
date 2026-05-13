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

vi.mock("../TextareaField", () => ({
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

const sendMessageMock = vi.fn()
const appendMessagesMock = vi.fn()
const setPendingContextMock = vi.fn()
const setPendingQuoteMock = vi.fn()
const setProcessDroppedFilesFunctionMock = vi.fn()
const onBeforeSendMessageMock = vi.fn()

vi.mock("../../../../providers/AiChatStateProvider", () => ({
  useAiChat: () => ({
    placeholders: ["Ask anything"],
    entityRefs: undefined,
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
})
