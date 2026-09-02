"use client"

import { useCallback, useMemo, useRef } from "react"

import {
  F0NotesTextEditor,
  type F0NotesTextEditorHandle,
} from "@/components/RichText/F0NotesTextEditor"
import { useF0MeetingRoster } from "@/sds/meetings/F0Meeting"
import { type F0MeetingTranscriptSegment } from "@/sds/meetings/F0Meeting/types"

/**
 * The call's notes, on the real editor rather than a `<textarea>`.
 *
 * Composed HERE and not inside `F0Meeting` on purpose. The side panel takes any
 * `ReactNode` as a tab's content, and Chat and Transcript are already assembled
 * by the host — so a meeting that wants tiptap can have it without the meeting
 * component itself growing a dependency on an editor. `MeetingNotes` stays as
 * the plain default for hosts that don't.
 *
 * Chrome is off by design: the editor only draws a header when given a
 * `primaryAction` / `metadata` / `status`, and only a title when given
 * `onTitleChange`. Passing `secondaryActions` is what turns the header on, and
 * it costs one row of a 420px panel — worth it for the transcript button.
 */
export const HuddleNotesTab = ({
  value,
  onChange,
  transcript,
  title,
}: {
  value: string
  /** Absent means read-only, the same convention as `MeetingNotes`. */
  onChange?: (value: string) => void
  transcript: readonly F0MeetingTranscriptSegment[]
  title: string
}) => {
  const editor = useRef<F0NotesTextEditorHandle>(null)
  const { participants } = useF0MeetingRoster()

  const nameOf = useCallback(
    (participantId: string) =>
      participants.find((participant) => participant.id === participantId)
        ?.name ?? participantId,
    [participants]
  )

  // The editor ships a real transcript extension, and the shapes line up almost
  // exactly — so dropping the call into the notes is a mapping, not a feature.
  const insertTranscript = useCallback(() => {
    const finals = transcript.filter((segment) => segment.isFinal)
    if (finals.length === 0) return

    const speakerIds = [...new Set(finals.map((s) => s.participantId))]
    editor.current?.insertTranscript(
      title,
      speakerIds.map((id) => {
        const participant = participants.find((p) => p.id === id)
        return {
          id,
          fullname: nameOf(id),
          imageUrl:
            participant?.avatar?.type === "person"
              ? (participant.avatar.src ?? "")
              : "",
        }
      }),
      finals.map((segment) => ({
        userId: segment.participantId,
        text: segment.text,
        dateTime: segment.at,
      }))
    )
  }, [transcript, title, participants, nameOf])

  const secondaryActions = useMemo(
    () =>
      onChange && transcript.some((segment) => segment.isFinal)
        ? [{ label: "Insert transcript", onClick: insertTranscript }]
        : undefined,
    [onChange, transcript, insertTranscript]
  )

  return (
    <div className="flex min-h-0 flex-1 flex-col" data-testid="huddle-notes">
      <F0NotesTextEditor
        ref={editor}
        // The runtime owns the value, so switching tabs (which unmounts the tab
        // that isn't showing) loses the cursor but never the content.
        initialEditorState={{ content: value }}
        placeholder="Notes for this call…"
        readonly={!onChange}
        onChange={({ html }) => onChange?.(html ?? "")}
        {...(secondaryActions ? { secondaryActions } : {})}
      />
    </div>
  )
}
