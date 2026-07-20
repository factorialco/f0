import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatAttachment, type F0ChatRuntime } from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

// Minimal MediaRecorder stand-in: stop() emits one chunk then fires onstop
// (same as the dictation tests).
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

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

beforeEach(() => {
  vi.stubGlobal("MediaRecorder", MockMediaRecorder)
  Object.defineProperty(navigator, "mediaDevices", {
    configurable: true,
    value: {
      getUserMedia: vi.fn(
        async () =>
          ({ getTracks: () => [{ stop: vi.fn() }] }) as unknown as MediaStream
      ),
    },
  })
})

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {}
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
  },
  status: "ready",
  messages: [],
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  retryMessage: vi.fn(),
  loadOlder: vi.fn(),
  toggleReaction: vi.fn(),
  deleteMessage: vi.fn(),
  onInputActivity: vi.fn(),
  markRead: vi.fn(),
  ...overrides,
})

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

/** Record → confirm a voice note against the given runtime. */
const recordVoiceNote = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: "Record audio" }))
  await user.click(
    await screen.findByRole("button", { name: "Send voice note" })
  )
}

describe("ChatComposer voice notes", () => {
  it("shows the mic button loading while the note uploads, then sends it", async () => {
    let resolveUpload!: (attachments: F0ChatAttachment[]) => void
    const uploadFiles = vi.fn(
      () =>
        new Promise<F0ChatAttachment[]>((resolve) => {
          resolveUpload = resolve
        })
    )
    const sendMessage = vi.fn()
    const user = userEvent.setup()
    renderChat(makeRuntime({ uploadFiles, sendMessage }))

    await recordVoiceNote(user)

    // Uploading: the mic reads as a loading "sending" button; nothing sent yet.
    expect(
      await screen.findByRole("button", { name: "Sending voice note…" })
    ).toBeInTheDocument()
    expect(sendMessage).not.toHaveBeenCalled()

    resolveUpload([
      {
        kind: "file",
        url: "https://cdn.example.com/voice-note.webm",
        name: "voice-note.webm",
      },
    ])

    await waitFor(() => {
      expect(sendMessage).toHaveBeenCalledTimes(1)
    })
    expect(sendMessage.mock.calls[0][0].attachments).toEqual([
      expect.objectContaining({
        kind: "voice",
        url: "https://cdn.example.com/voice-note.webm",
      }),
    ])
    // Back to idle: the mic offers recording again.
    expect(
      await screen.findByRole("button", { name: "Record audio" })
    ).toBeInTheDocument()
  })

  it("flashes the upload error and resets when the upload fails", async () => {
    const uploadFiles = vi.fn(async () => {
      throw new Error("upload failed")
    })
    const sendMessage = vi.fn()
    const user = userEvent.setup()
    renderChat(makeRuntime({ uploadFiles, sendMessage }))

    await recordVoiceNote(user)

    expect(await screen.findByText("Upload failed")).toBeInTheDocument()
    expect(sendMessage).not.toHaveBeenCalled()
    expect(
      await screen.findByRole("button", { name: "Record audio" })
    ).toBeInTheDocument()
  })
})
