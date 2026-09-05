"use client"

import { F0Drawer } from "@/components/dialog-alike/F0Drawer"
import { type F0MeetingTranscriptSegment } from "@/sds/meetings/F0Meeting/types"

/**
 * Where the ended card's Transcript action goes.
 *
 * The card deliberately has no transcript viewer — a transcript is long, and
 * where it opens is a product decision, so `F0MeetingCard` documents it as the
 * consumer's job. This is the consumer doing that job. Nothing here belongs in
 * the design system.
 */
export const HuddleTranscriptDrawer = ({
  isOpen,
  onClose,
  title,
  summary,
  segments,
  nameOf,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  summary: string | null
  segments: readonly F0MeetingTranscriptSegment[]
  nameOf: (participantId: string) => string
}) => {
  const finals = segments.filter((segment) => segment.isFinal)
  const time = (at: string) => {
    const date = new Date(at)
    return Number.isNaN(date.getTime())
      ? ""
      : new Intl.DateTimeFormat(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        }).format(date)
  }

  return (
    <F0Drawer isOpen={isOpen} onClose={onClose} title={title}>
      <div
        className="flex flex-col gap-5"
        data-testid="huddle-transcript-drawer"
      >
        {summary && (
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-medium text-f1-foreground-secondary">
              Summary
            </p>
            <p className="text-base text-f1-foreground">{summary}</p>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-medium text-f1-foreground-secondary">
            Transcript
          </p>
          {finals.length === 0 ? (
            <p className="text-base text-f1-foreground-secondary">
              Nothing was transcribed for this call.
            </p>
          ) : (
            <ol className="flex flex-col gap-3">
              {finals.map((segment) => (
                <li key={segment.id} className="flex flex-col gap-0.5">
                  <span className="flex items-baseline gap-2">
                    <span className="text-base font-medium text-f1-foreground">
                      {nameOf(segment.participantId)}
                    </span>
                    <span className="text-sm tabular-nums text-f1-foreground-tertiary">
                      {time(segment.at)}
                    </span>
                  </span>
                  <span className="text-base text-f1-foreground">
                    {segment.text}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </F0Drawer>
  )
}
