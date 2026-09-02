import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { F0MeetingProvider } from "@/sds/meetings/F0Meeting"
import {
  type F0MeetingRuntime,
  type F0MeetingTranscriptSegment,
} from "@/sds/meetings/F0Meeting/types"
import { render } from "@/testing/test-utils"

import { HuddleNotesTab } from "../mocks/HuddleNotesTab"

const insertTranscript = vi.fn()

// The editor drags in tiptap, a drag handle and a bubble menu — none of which
// this is about. What matters here is the mapping into `insertTranscript` and
// the read-only rule.
vi.mock("@/components/RichText/F0NotesTextEditor", async () => {
  const { forwardRef, useImperativeHandle } = await import("react")
  return {
    F0NotesTextEditor: forwardRef<
      { insertTranscript: typeof insertTranscript },
      {
        readonly?: boolean
        secondaryActions?: { label: string; onClick: () => void }[]
        initialEditorState?: { content?: string }
      }
    >(function MockEditor(
      { readonly, secondaryActions, initialEditorState },
      ref
    ) {
      useImperativeHandle(ref, () => ({ insertTranscript }), [])
      return (
        <div>
          <span data-testid="readonly">{String(Boolean(readonly))}</span>
          <span data-testid="content">{initialEditorState?.content ?? ""}</span>
          {secondaryActions?.map((action) => (
            <button key={action.label} type="button" onClick={action.onClick}>
              {action.label}
            </button>
          ))}
        </div>
      )
    }),
  }
})

const runtime: F0MeetingRuntime = {
  room: { id: "room-1", title: "Huddle · Design" },
  status: "connected",
  localParticipantId: "me",
  participants: [
    { id: "me", name: "Jordan Avery", isLocal: true, tracks: [] },
    { id: "u_eleanor", name: "Eleanor Whitfield", isLocal: false, tracks: [] },
  ],
  localMedia: { microphone: { enabled: true }, camera: { enabled: true } },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
}

const segment = (
  overrides: Partial<F0MeetingTranscriptSegment> = {}
): F0MeetingTranscriptSegment => ({
  id: "seg-0",
  participantId: "u_eleanor",
  text: "Ship it behind a flag.",
  at: "2026-03-12T09:00:00.000Z",
  isFinal: true,
  ...overrides,
})

const setup = (props: Partial<Parameters<typeof HuddleNotesTab>[0]> = {}) =>
  render(
    <F0MeetingProvider runtime={runtime}>
      <HuddleNotesTab
        value=""
        onChange={vi.fn()}
        transcript={[segment()]}
        title="Huddle · Design"
        {...props}
      />
    </F0MeetingProvider>
  )

describe("HuddleNotesTab", () => {
  beforeEach(() => insertTranscript.mockClear())

  it("takes its content from the runtime, so a tab switch cannot lose it", () => {
    // The panel mounts only the active tab, so this remounts every time you
    // come back. The cursor is gone; the words are not, because the runtime
    // owns them.
    setup({ value: "<p>already written</p>" })
    expect(screen.getByTestId("content")).toHaveTextContent("already written")
  })

  it("is read-only when the host cannot edit", () => {
    setup({ onChange: undefined })
    expect(screen.getByTestId("readonly")).toHaveTextContent("true")
  })

  it("offers no transcript button with nothing to insert", () => {
    setup({ transcript: [] })
    expect(
      screen.queryByRole("button", { name: "Insert transcript" })
    ).not.toBeInTheDocument()
  })

  it("ignores interim segments, which are still being said", () => {
    setup({ transcript: [segment({ isFinal: false })] })
    expect(
      screen.queryByRole("button", { name: "Insert transcript" })
    ).not.toBeInTheDocument()
  })

  it("maps the call onto the shapes the editor's extension wants", async () => {
    setup({
      transcript: [
        segment(),
        segment({ id: "seg-1", participantId: "me", text: "Agreed." }),
      ],
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Insert transcript" })
    )

    expect(insertTranscript).toHaveBeenCalledTimes(1)
    const [title, users, messages] = insertTranscript.mock.calls[0]
    expect(title).toBe("Huddle · Design")
    // One entry per speaker, named from the roster rather than left as an id.
    expect(users).toEqual([
      { id: "u_eleanor", fullname: "Eleanor Whitfield", imageUrl: "" },
      { id: "me", fullname: "Jordan Avery", imageUrl: "" },
    ])
    expect(messages).toEqual([
      {
        userId: "u_eleanor",
        text: "Ship it behind a flag.",
        dateTime: "2026-03-12T09:00:00.000Z",
      },
      {
        userId: "me",
        text: "Agreed.",
        dateTime: "2026-03-12T09:00:00.000Z",
      },
    ])
  })

  it("cannot insert a transcript into notes you may not edit", () => {
    setup({ onChange: undefined })
    expect(
      screen.queryByRole("button", { name: "Insert transcript" })
    ).not.toBeInTheDocument()
  })
})
