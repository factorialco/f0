import { type F0MeetingTranscriptSegment } from "../types"
import { mulberry32 } from "./rng"

/**
 * Sentences the mock speakers "say". Deliberately mundane work talk: the point
 * is to exercise wrapping, long and short lines and the interim→final swap,
 * not to be read.
 */
const PHRASES = [
  "Vale, entonces lo dejamos para el sprint que viene.",
  "¿Podéis verme la pantalla ahora?",
  "Yo creo que eso lo cubre el caso de uso que comentaba Marta.",
  "Perdona, se me ha cortado un momento, ¿puedes repetir la última parte?",
  "Lo apunto y lo reviso esta tarde con el equipo de plataforma.",
  "Sí, exacto, es justo lo que pasaba con el panel lateral.",
  "Me parece bien, pero habría que medirlo antes de decidir.",
  "Os paso el enlace por el chat cuando terminemos.",
  "¿Alguien tiene contexto de por qué se hizo así originalmente?",
  "Creo que con eso ya tenemos suficiente para empezar.",
] as const

export type TranscriptDriver = {
  /** Someone took the floor: opens an interim segment that grows word by word. */
  start: (participantId: string) => void
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

  const start = (participantId: string) => {
    if (disposed || open.has(participantId)) return
    const phrase = PHRASES[Math.floor(random() * PHRASES.length)] as string
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
