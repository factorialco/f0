import { DataAttributes } from "@/global.types"

import type { TranscriptCue } from "./types"

export const getDataAttributes = <T extends object>(props: T): DataAttributes =>
  Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-"))
  ) as DataAttributes

export const formatPlaybackTime = (seconds: number): string => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    seconds = 0
  }

  const total = Math.floor(seconds)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const secs = total % 60

  const pad = (n: number) => String(n).padStart(2, "0")

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(secs)}`
  }

  return `${minutes}:${pad(secs)}`
}

/** A cue's start, paired with where that cue sits in the rendered list. */
export interface CueTimelineEntry {
  start: number
  cueIndex: number
}

/**
 * The searchable timeline of a transcript: the timed cues only, ordered by
 * start. Built as a side table rather than by sorting the cues themselves, so
 * the transcript renders in the order it was given — an untimed cue keeps its
 * place in the dialogue, and a list that arrives out of order still resolves
 * correctly instead of silently returning the wrong line.
 */
export const buildCueTimeline = (cues: TranscriptCue[]): CueTimelineEntry[] =>
  cues
    .map((cue, cueIndex) => ({ start: cue.startTime, cueIndex }))
    .filter(
      (entry): entry is CueTimelineEntry =>
        typeof entry.start === "number" && Number.isFinite(entry.start)
    )
    .sort((a, b) => a.start - b.start)

/**
 * The cue being spoken at `time`: the last one that has started. One rule, no
 * special cases — an interrupting cue takes over the moment it starts, and the
 * previous one stays marked through a silence, which reads better than nothing
 * being marked. Returns `-1` before the first cue starts.
 */
export const findActiveCueIndex = (
  timeline: CueTimelineEntry[],
  time: number
): number => {
  let low = 0
  let high = timeline.length - 1
  let active = -1

  while (low <= high) {
    const mid = (low + high) >> 1
    const entry = timeline[mid]
    if (entry === undefined) break
    if (entry.start <= time) {
      active = entry.cueIndex
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return active
}
