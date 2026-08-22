import { memo, useCallback, type RefObject } from "react"

import { F0Text } from "@/components/F0Text"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { TranscriptCue } from "../types"
import { formatPlaybackTime } from "../utils"

type CueRefs = RefObject<Array<HTMLLIElement | null>>

interface CueRowProps {
  cue: TranscriptCue
  index: number
  isActive: boolean
  /** Set only when the transcript is timed; a plain cue is not a control. */
  onSeek?: (seconds: number) => void
  cueRefs?: CueRefs
}

const rowClassName = (isActive: boolean) =>
  cn(
    "block w-full rounded px-2 py-1 text-left transition-colors",
    // The mark is not carried by colour alone: the active cue also reads at a
    // heavier weight, so it survives a monochrome or forced-colours rendering.
    isActive
      ? "bg-f1-background-selected-secondary font-medium"
      : "bg-transparent"
  )

const CueRow = memo(function CueRow({
  cue,
  index,
  isActive,
  onSeek,
  cueRefs,
}: CueRowProps) {
  const i18n = useI18n()
  const { startTime } = cue
  const seekable = onSeek && startTime !== undefined

  const setCueRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (cueRefs?.current) cueRefs.current[index] = node
    },
    [cueRefs, index]
  )

  const handleClick = useCallback(() => {
    if (startTime !== undefined) onSeek?.(startTime)
  }, [onSeek, startTime])

  return (
    <li ref={setCueRef}>
      {seekable ? (
        <button
          type="button"
          onClick={handleClick}
          aria-current={isActive || undefined}
          title={i18n.t("audioPlayer.jumpTo", {
            time: formatPlaybackTime(startTime),
          })}
          className={cn(
            rowClassName(isActive),
            focusRing(),
            // Hovering the active cue must not wash out its mark.
            !isActive && "hover:bg-f1-background-secondary"
          )}
        >
          <F0Text variant="body" content={cue.text} />
        </button>
      ) : (
        <div className={rowClassName(isActive)}>
          <F0Text variant="body" content={cue.text} />
        </div>
      )}
    </li>
  )
})

interface TranscriptCueListProps {
  cues: TranscriptCue[]
  /** Index of the cue being spoken, or `-1` while none is. */
  activeIndex: number
  /** Absent when no cue carries a `startTime` — the list is then plain text. */
  onSeek?: (seconds: number) => void
  cueRefs?: CueRefs
}

/**
 * The transcript as a list of utterances. A cue with a `startTime` is a real
 * control: reachable with the keyboard, and it moves playback to that moment.
 * The cue being spoken carries `aria-current`; the mark is not announced as it
 * moves, because at speech rate that would be unusable.
 */
export const TranscriptCueList = memo(function TranscriptCueList({
  cues,
  activeIndex,
  onSeek,
  cueRefs,
}: TranscriptCueListProps) {
  const i18n = useI18n()

  return (
    <>
      {onSeek && <p className="sr-only">{i18n.audioPlayer.transcriptHint}</p>}
      <ol className="flex list-none flex-col gap-1 p-0">
        {cues.map((cue, index) => (
          <CueRow
            key={index}
            cue={cue}
            index={index}
            isActive={index === activeIndex}
            onSeek={onSeek}
            cueRefs={cueRefs}
          />
        ))}
      </ol>
    </>
  )
})
