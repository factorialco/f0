import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

export type MeetingNotesProps = {
  value: string
  /** Absent means read-only: the notes exist but this person cannot edit them. */
  onChange?: (value: string) => void
}

/**
 * Shared notes for the room.
 *
 * Uncontrolled-looking but fully controlled: the value comes from the host, so
 * whatever it syncs the notes through — a data channel, a document, a poll —
 * arrives here as a re-render rather than as a second source of truth.
 */
export const MeetingNotes = ({ value, onChange }: MeetingNotesProps) => {
  const i18n = useI18n()
  const readOnly = !onChange

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 p-4">
      <textarea
        value={value}
        readOnly={readOnly}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={i18n.meeting.notesPlaceholder}
        aria-label={i18n.meeting.notesPanel}
        data-testid="meeting-notes"
        className={cn(
          "min-h-0 flex-1 resize-none rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-3 text-base text-f1-foreground placeholder:text-f1-foreground-tertiary",
          readOnly && "cursor-default bg-f1-background-secondary",
          focusRing()
        )}
      />
      {readOnly && (
        <p className="text-sm text-f1-foreground-secondary">
          {i18n.meeting.notesReadOnly}
        </p>
      )}
    </div>
  )
}
