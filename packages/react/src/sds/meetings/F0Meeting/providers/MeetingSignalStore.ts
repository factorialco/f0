import {
  type F0MeetingConnectionQuality,
  type F0MeetingSignal,
  type F0MeetingSignalStore,
} from "../types"

/**
 * Audio levels arrive ~10 times a second per participant. Quantising to 20
 * steps before comparing drops most notifications with no visible difference
 * in a five-bar waveform.
 */
const LEVEL_STEPS = 20

const quantize = (level: number): number =>
  Math.round(Math.max(0, Math.min(1, level)) * LEVEL_STEPS) / LEVEL_STEPS

const EMPTY_SIGNAL: F0MeetingSignal = {
  audioLevel: 0,
  isSpeaking: false,
  quality: "excellent",
}

const EMPTY_SPEAKERS: readonly string[] = []

export type MeetingSignalStore = F0MeetingSignalStore & {
  setAudioLevel: (participantId: string, level: number) => void
  setSpeaking: (participantIds: readonly string[]) => void
  setQuality: (
    participantId: string,
    quality: F0MeetingConnectionQuality
  ) => void
  remove: (participantId: string) => void
  reset: () => void
}

/**
 * External store for the volatile per-participant signals. These never go
 * through React context: with a dozen participants that would re-render the
 * whole room a hundred times a second. Only the leaf that draws the waveform
 * subscribes, so a burst of audio events repaints five `<div>`s.
 *
 * F0 ships the factory so hosts only have to call the setters from their
 * transport listeners — nobody should hand-roll subscribe/getSnapshot.
 */
export const createMeetingSignalStore = (): MeetingSignalStore => {
  const signals = new Map<string, F0MeetingSignal>()
  const listeners = new Map<string, Set<() => void>>()
  const speakerListeners = new Set<() => void>()
  let speakers: readonly string[] = EMPTY_SPEAKERS

  const notify = (participantId: string): void => {
    listeners.get(participantId)?.forEach((listener) => listener())
  }

  const update = (
    participantId: string,
    patch: Partial<F0MeetingSignal>
  ): void => {
    const current = signals.get(participantId) ?? EMPTY_SIGNAL
    const next = { ...current, ...patch }
    if (
      next.audioLevel === current.audioLevel &&
      next.isSpeaking === current.isSpeaking &&
      next.quality === current.quality
    ) {
      return
    }
    signals.set(participantId, next)
    notify(participantId)
  }

  return {
    subscribe: (participantId, listener) => {
      let set = listeners.get(participantId)
      if (!set) {
        set = new Set()
        listeners.set(participantId, set)
      }
      set.add(listener)
      return () => {
        set.delete(listener)
        if (set.size === 0) listeners.delete(participantId)
      }
    },

    // Returns the SAME object while nothing changed: `useSyncExternalStore`
    // loops forever otherwise.
    getSnapshot: (participantId) => signals.get(participantId) ?? EMPTY_SIGNAL,

    subscribeSpeakers: (listener) => {
      speakerListeners.add(listener)
      return () => {
        speakerListeners.delete(listener)
      }
    },

    getSpeakers: () => speakers,

    setAudioLevel: (participantId, level) => {
      update(participantId, { audioLevel: quantize(level) })
    },

    setQuality: (participantId, quality) => {
      update(participantId, { quality })
    },

    setSpeaking: (participantIds) => {
      const next = [...participantIds].sort()
      const changed =
        next.length !== speakers.length ||
        next.some((id, index) => id !== speakers[index])
      if (!changed) return

      const previous = new Set(speakers)
      const current = new Set(next)
      speakers = next

      for (const id of previous) {
        if (!current.has(id)) update(id, { isSpeaking: false })
      }
      for (const id of current) {
        if (!previous.has(id)) update(id, { isSpeaking: true })
      }

      speakerListeners.forEach((listener) => listener())
    },

    remove: (participantId) => {
      signals.delete(participantId)
      listeners.delete(participantId)
      if (speakers.includes(participantId)) {
        speakers = speakers.filter((id) => id !== participantId)
        speakerListeners.forEach((listener) => listener())
      }
    },

    reset: () => {
      signals.clear()
      speakers = EMPTY_SPEAKERS
      speakerListeners.forEach((listener) => listener())
    },
  }
}

export { EMPTY_SIGNAL }
