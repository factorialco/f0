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

// The transcript is virtualized with @tanstack/react-virtual, which windows the
// DOM based on the scroll viewport's measured size. jsdom has no layout, so the
// real virtualizer renders nothing — mock it to a pass-through (as in
// F0Chat.test.tsx).
vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: ({ count }: { count: number }) => {
    const ROW = 40
    const items = Array.from({ length: count }, (_, index) => ({
      index,
      key: index,
      start: index * ROW,
      size: ROW,
      end: index * ROW + ROW,
    }))
    return {
      getVirtualItems: () => items,
      getTotalSize: () => count * ROW,
      measureElement: () => {},
      scrollToIndex: () => {},
      scrollToOffset: () => {},
      getOffsetForIndex: (index: number) => [index * ROW, "start"],
      getVirtualItemForOffset: (offset: number) =>
        items[
          Math.min(items.length - 1, Math.max(0, Math.floor(offset / ROW)))
        ],
      scrollOffset: 0,
      measure: () => {},
    }
  },
}))

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
  it("can disable voice notes without disabling file uploads", () => {
    renderChat(
      makeRuntime({
        uploadFiles: vi.fn(),
        capabilities: { canSendVoiceNotes: false },
      })
    )

    expect(screen.getByRole("button", { name: "Attach file" })).toBeEnabled()
    expect(
      screen.queryByRole("button", { name: "Record audio" })
    ).not.toBeInTheDocument()
  })

  it("keeps voice dictation independent from the voice-note capability", async () => {
    const uploadFiles = vi.fn()
    const transcribe = vi.fn(async () => "Transcribed message")
    const user = userEvent.setup()
    renderChat(
      makeRuntime({
        uploadFiles,
        transcribe,
        capabilities: { canSendVoiceNotes: false },
      })
    )

    await user.click(screen.getByRole("button", { name: "Record audio" }))
    await user.click(
      await screen.findByRole("button", { name: "Stop and transcribe" })
    )

    expect(await screen.findByDisplayValue("Transcribed message")).toBeVisible()
    expect(transcribe).toHaveBeenCalledTimes(1)
    expect(uploadFiles).not.toHaveBeenCalled()
  })

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
