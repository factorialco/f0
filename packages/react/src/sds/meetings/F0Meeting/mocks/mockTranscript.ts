import { type F0MeetingTranscriptSegment } from "../types"
import { mulberry32 } from "./rng"

/**
 * Sentences the mock speakers "say" when nothing scripts them. Deliberately
 * mundane work talk: the point is to exercise wrapping, long and short lines
 * and the interim→final swap, not to be read.
 *
 * A seed carrying a script uses {@link createScriptedTranscriptDriver} instead,
 * where the words are the ones actually being "spoken".
 */
const PHRASES = [
  "So that lands in next week's sprint, then.",
  "Can everyone see my screen now?",
  "I think the case you mentioned earlier already covers that.",
  "Sorry, you cut out for a second — can you repeat the last part?",
  "I'll note it down and go through it with platform this afternoon.",
  "Yes, exactly, that is what was happening with the side panel.",
  "Fine by me, but I'd want to measure it before we commit.",
  "I'll drop the link in the chat when we're done.",
  "Does anyone have context on why it was built that way?",
  "I think that's enough for us to get started.",
] as const

export type TranscriptDriver = {
  /**
   * Someone took the floor: opens an interim segment that grows word by word.
   *
   * `text` is what they are actually saying. Omit it and a phrase is drawn from
   * {@link PHRASES} — which is the unscripted mode, where the words are filler
   * and only the shape of the stream matters.
   */
  start: (participantId: string, text?: string) => void
  /** They stopped: the segment lands as final. */
  stop: (participantId: string) => void
  dispose: () => void
}

/**
 * Produces transcript segments the way LiveKit delivers them: an interim
 * segment that is revised in place under a stable id, replaced by a final one
 * when the utterance ends.
 *
 * Emitting each revision as a NEW line is the mistake this shape exists to
 * prevent — it turns a transcript into the same sentence repeated, one word
 * longer each time.
 */
export const createTranscriptDriver = (
  onSegment: (segment: F0MeetingTranscriptSegment) => void,
  seed = 11
): TranscriptDriver => {
  const random = mulberry32(seed)
  const open = new Map<
    string,
    { id: string; words: string[]; spoken: number; timer: number }
  >()
  let counter = 0
  let disposed = false

  const emit = (participantId: string, isFinal: boolean) => {
    const utterance = open.get(participantId)
    if (!utterance) return
    const words = utterance.words.slice(0, utterance.spoken)
    if (words.length === 0 && !isFinal) return
    onSegment({
      id: utterance.id,
      participantId,
      text: words.join(" "),
      at: new Date().toISOString(),
      isFinal,
    })
  }

  const start = (participantId: string, text?: string) => {
    if (disposed || open.has(participantId)) return
    const phrase =
      text ?? (PHRASES[Math.floor(random() * PHRASES.length)] as string)
    const utterance = {
      id: `seg-${counter++}`,
      words: phrase.split(" "),
      spoken: 0,
      timer: 0,
    }
    open.set(participantId, utterance)

    const tick = () => {
      if (disposed) return
      const current = open.get(participantId)
      if (!current) return
      current.spoken = Math.min(current.words.length, current.spoken + 2)
      emit(participantId, false)
      if (current.spoken < current.words.length) {
        current.timer = window.setTimeout(tick, 260 + random() * 220)
      }
    }
    utterance.timer = window.setTimeout(tick, 200)
  }

  const stop = (participantId: string) => {
    const utterance = open.get(participantId)
    if (!utterance) return
    window.clearTimeout(utterance.timer)
    // Whatever was said lands whole: a turn that ends early still produces a
    // complete sentence rather than a truncated one.
    utterance.spoken = utterance.words.length
    emit(participantId, true)
    open.delete(participantId)
  }

  return {
    start,
    stop,
    dispose: () => {
      disposed = true
      open.forEach((utterance) => window.clearTimeout(utterance.timer))
      open.clear()
    },
  }
}

/**
 * Applies a segment to the list the way a client must: replace by id, append
 * when new. Exported so the rule is unit-tested rather than living inside a
 * reducer in a hook.
 */
export const applyTranscriptSegment = (
  segments: F0MeetingTranscriptSegment[],
  segment: F0MeetingTranscriptSegment
): F0MeetingTranscriptSegment[] => {
  const index = segments.findIndex((existing) => existing.id === segment.id)
  if (index === -1) return [...segments, segment]
  const next = [...segments]
  next[index] = segment
  return next
}
