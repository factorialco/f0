import { useEffect, useMemo, useRef } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { type F0MeetingTranscriptSegment } from "../../types"

export type MeetingTranscriptProps = {
  segments: F0MeetingTranscriptSegment[]
}

/**
 * No explicit locale, the same convention the chat's clock follows: the reader
 * gets their own runtime locale rather than one threaded down from the host.
 */
const timeOf = (iso: string) => {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

/**
 * Live transcription, newest at the bottom.
 *
 * Interim segments render at reduced emphasis and are REPLACED by their final
 * version under the same id — appending both is what turns a transcript into
 * the same sentence three times, each a word longer.
 */
export const MeetingTranscript = ({ segments }: MeetingTranscriptProps) => {
  const i18n = useI18n()
  const { participants } = useF0MeetingRoster()
  const scrollRef = useRef<HTMLDivElement>(null)
  const pinnedToBottom = useRef(true)

  const byId = useMemo(
    () => new Map(participants.map((person) => [person.id, person])),
    [participants]
  )

  // Follow the tail only while the reader is already there. Yanking them back
  // down while they are reading earlier lines is the classic transcript bug.
  useEffect(() => {
    const element = scrollRef.current
    if (!element || !pinnedToBottom.current) return
    element.scrollTop = element.scrollHeight
  }, [segments])

  if (segments.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8 text-center text-base text-f1-foreground-secondary">
        {i18n.meeting.transcriptEmpty}
      </div>
    )
  }

  return (
    <div
      ref={scrollRef}
      onScroll={(event) => {
        const element = event.currentTarget
        pinnedToBottom.current =
          element.scrollHeight - element.scrollTop - element.clientHeight < 48
      }}
      className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4"
      data-testid="meeting-transcript"
    >
      {segments.map((segment) => {
        const speaker = byId.get(segment.participantId)
        return (
          <div key={segment.id} className="flex gap-2">
            <span className="mt-0.5 shrink-0">
              {speaker?.avatar ? (
                <F0Avatar avatar={speaker.avatar} size="xs" />
              ) : null}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="truncate text-sm font-medium text-f1-foreground">
                  {speaker?.name ?? segment.participantId}
                </span>
                <span className="shrink-0 text-sm text-f1-foreground-tertiary tabular-nums">
                  {timeOf(segment.at)}
                </span>
              </div>
              <p
                className={cn(
                  "text-base",
                  segment.isFinal
                    ? "text-f1-foreground"
                    : "text-f1-foreground-secondary"
                )}
              >
                {segment.text}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
