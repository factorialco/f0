import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { type TranscribeFn } from "../../F0AiChat/types"

interface TextareaFieldMockProps {
  inputValue: string
}

// Reflect the controlled value so we can assert the live-filled transcript.
vi.mock("../components/TextareaField", () => ({
  TextareaField: ({ inputValue }: TextareaFieldMockProps) => (
    <textarea aria-label="Message" value={inputValue} readOnly />
  ),
}))

import { F0AiChatTextArea } from "../F0AiChatTextArea"

// Minimal MediaRecorder stand-in: stop() emits one chunk then fires onstop.
class MockMediaRecorder {
  state: "inactive" | "recording" = "inactive"
  ondataavailable: ((e: { data: Blob }) => void) | null = null
  onstop: (() => void) | null = null
  start() {
    this.state = "recording"
  }
  stop() {
    this.state = "inactive"
    this.ondataavailable?.({
      data: new Blob(["audio"], { type: "audio/webm" }),
    })
    this.onstop?.()
  }
}

const stopTrack = vi.fn()

const installMediaMocks = (getUserMedia: () => Promise<MediaStream>) => {
  vi.stubGlobal("MediaRecorder", MockMediaRecorder)
  Object.defineProperty(navigator, "mediaDevices", {
    configurable: true,
    value: { getUserMedia: vi.fn(getUserMedia) },
  })
}

const fakeStream = () =>
  ({ getTracks: () => [{ stop: stopTrack }] }) as unknown as MediaStream

describe("F0AiChatTextArea voice dictation", () => {
  beforeEach(() => {
    stopTrack.mockClear()
  })

  it("hides the microphone when onTranscribe is not provided", () => {
    installMediaMocks(async () => fakeStream())
    render(<F0AiChatTextArea onSubmit={vi.fn()} />)
    expect(
      screen.queryByRole("button", { name: /record audio/i })
    ).not.toBeInTheDocument()
  })

  it("fills the textarea with the transcript without auto-sending", async () => {
    installMediaMocks(async () => fakeStream())
    const onSubmit = vi.fn()
    const onTranscribe: TranscribeFn = vi.fn(async (_audio, { onPartial }) => {
      onPartial("How many")
      onPartial("How many vacation days")
      return "How many vacation days do I have left?"
    })
    const user = userEvent.setup()

    render(<F0AiChatTextArea onSubmit={onSubmit} onTranscribe={onTranscribe} />)

    await user.click(screen.getByRole("button", { name: /record audio/i }))

    // Recording UI: stop+transcribe button is shown.
    const stopButton = await screen.findByRole("button", {
      name: /stop and transcribe/i,
    })
    await user.click(stopButton)

    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "How many vacation days do I have left?"
      )
    )
    expect(onTranscribe).toHaveBeenCalledTimes(1)
    expect(onSubmit).not.toHaveBeenCalled()
    // Mic track released after recording.
    expect(stopTrack).toHaveBeenCalled()
  })

  it("appends the transcript to text already typed", async () => {
    installMediaMocks(async () => fakeStream())
    const onTranscribe: TranscribeFn = vi.fn(async () => "world")
    const user = userEvent.setup()

    render(
      <F0AiChatTextArea
        onSubmit={vi.fn()}
        onTranscribe={onTranscribe}
        // seed the textarea by faking a prior transcript run
      />
    )

    // First dictation produces "world"; second should append, not replace.
    await user.click(screen.getByRole("button", { name: /record audio/i }))
    await user.click(
      await screen.findByRole("button", { name: /stop and transcribe/i })
    )
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "world"
      )
    )

    await user.click(screen.getByRole("button", { name: /record audio/i }))
    await user.click(
      await screen.findByRole("button", { name: /stop and transcribe/i })
    )
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        "world world"
      )
    )
  })

  it("surfaces an error when microphone permission is denied", async () => {
    installMediaMocks(async () => {
      throw new DOMException("denied", "NotAllowedError")
    })
    const user = userEvent.setup()

    render(<F0AiChatTextArea onSubmit={vi.fn()} onTranscribe={vi.fn()} />)

    await user.click(screen.getByRole("button", { name: /record audio/i }))

    expect(
      await screen.findByText(/microphone access is blocked/i)
    ).toBeInTheDocument()
  })
})
