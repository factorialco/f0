import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"
import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"
import { type TranscribeFn } from "@/sds/ai/F0AiChat/types"

// TipTap's BubbleMenu relies on tippy, which doesn't work under jsdom: its
// plugin view throws on the first dictation transaction. Mock it out, same as
// the F0Form validation tests do.
vi.mock("@/components/RichText/internal/BubbleMenu", () => ({
  EditorBubbleMenu: () => null,
}))

import { F0RichTextEditor } from ".."

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

const fakeStream = () =>
  ({ getTracks: () => [{ stop: stopTrack }] }) as unknown as MediaStream

const installMediaMocks = (getUserMedia: () => Promise<MediaStream>) => {
  vi.stubGlobal("MediaRecorder", MockMediaRecorder)
  Object.defineProperty(navigator, "mediaDevices", {
    configurable: true,
    value: { getUserMedia: vi.fn(getUserMedia) },
  })
}

const renderEditor = (onTranscribe?: TranscribeFn, initialContent?: string) =>
  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          title="Title"
          placeholder="Placeholder..."
          onChange={vi.fn()}
          onTranscribe={onTranscribe}
          initialEditorState={
            initialContent ? { content: initialContent } : undefined
          }
        />
      </I18nProvider>
    </UserPlatformProvider>
  )

describe("F0RichTextEditor voice dictation", () => {
  beforeEach(() => {
    stopTrack.mockClear()
  })

  it("hides the microphone when onTranscribe is not provided", async () => {
    installMediaMocks(async () => fakeStream())
    renderEditor()

    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
    expect(
      screen.queryByRole("button", { name: /record audio/i })
    ).not.toBeInTheDocument()
  })

  it("inserts the transcript into the editor content", async () => {
    installMediaMocks(async () => fakeStream())
    const onTranscribe: TranscribeFn = vi.fn(async (_audio, { onPartial }) => {
      onPartial("How many")
      onPartial("How many vacation days")
      return "How many vacation days do I have left?"
    })
    const user = userEvent.setup()

    const { container } = renderEditor(onTranscribe)

    await user.click(
      await screen.findByRole("button", { name: /record audio/i })
    )

    // Recording UI: waveform row with cancel + stop&transcribe actions.
    const stopButton = await screen.findByRole("button", {
      name: /stop and transcribe/i,
    })
    expect(
      screen.getByRole("button", { name: /cancel recording/i })
    ).toBeInTheDocument()

    await user.click(stopButton)

    await waitFor(() => {
      expect(container.querySelector(".ProseMirror")?.textContent).toContain(
        "How many vacation days do I have left?"
      )
    })
    // Cumulative partials replaced each other instead of stacking.
    expect(container.querySelector(".ProseMirror")?.textContent).not.toContain(
      "How manyHow many"
    )
    expect(stopTrack).toHaveBeenCalled()
  })

  it("keeps existing content and inserts the transcript at the cursor", async () => {
    installMediaMocks(async () => fakeStream())
    const onTranscribe: TranscribeFn = vi.fn(async () => "dictated text")
    const user = userEvent.setup()

    const { container } = renderEditor(onTranscribe, "<p>Hello</p>")

    await user.click(screen.getByRole("button", { name: /record audio/i }))
    await user.click(
      await screen.findByRole("button", { name: /stop and transcribe/i })
    )

    await waitFor(() => {
      const text = container.querySelector(".ProseMirror")?.textContent ?? ""
      expect(text).toContain("Hello")
      expect(text).toContain("dictated text")
    })
  })

  it("shows a transient error when the microphone permission is denied", async () => {
    installMediaMocks(async () => {
      throw new DOMException("denied", "NotAllowedError")
    })
    const onTranscribe: TranscribeFn = vi.fn(async () => "")
    const user = userEvent.setup()

    renderEditor(onTranscribe)

    await user.click(
      await screen.findByRole("button", { name: /record audio/i })
    )

    // The dictation error reuses the enhance banner UI (its alert avatar also
    // has role="alert"), so locate the banner via its message and assert the
    // dismiss button within it.
    const message = await screen.findByText(
      defaultTranslations.ai.micPermissionDenied
    )
    const banner = message.closest("[role='alert']") as HTMLElement
    expect(banner).not.toBeNull()
    expect(
      within(banner).getByRole("button", {
        name: defaultTranslations.actions.close,
      })
    ).toBeInTheDocument()
  })
})
