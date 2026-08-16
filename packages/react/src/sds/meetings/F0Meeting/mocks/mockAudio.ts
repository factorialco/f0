import { type MeetingSignalStore } from "../providers/MeetingSignalStore"
import { hashId, mulberry32 } from "./rng"

type Voice = {
  gain: GainNode
  analyser: AnalyserNode
  destination: MediaStreamAudioDestinationNode
  buffer: Uint8Array<ArrayBuffer>
  muted: boolean
}

export type MockAudioEngine = {
  /** The stream to publish as that participant's microphone track. */
  streamFor: (participantId: string) => MediaStream | undefined
  add: (participantId: string, index: number) => MediaStream | undefined
  remove: (participantId: string) => void
  setMuted: (participantId: string, muted: boolean) => void
  /**
   * Starts the turn-taking director. It runs on plain timers, so `setSpeaking`
   * stays demonstrable even where WebAudio is unavailable (jsdom).
   */
  runDirector: (getCandidateIds: () => string[]) => void
  /**
   * Meters a REAL stream (your microphone) into the same signals, so your own
   * waveform moves when you actually speak. Never routed to the speakers: that
   * would echo you back to yourself.
   */
  monitor: (participantId: string, stream: MediaStream) => void
  unmonitor: (participantId: string) => void
  /** Browsers start suspended until a gesture — this is `audioBlocked`. */
  blocked: () => boolean
  unlock: () => Promise<void>
  dispose: () => void
}

type AudioContextConstructor = new () => AudioContext

const getAudioContext = (): AudioContext | null => {
  if (typeof window === "undefined") return null
  const candidate =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: AudioContextConstructor })
      .webkitAudioContext
  if (!candidate) return null
  try {
    return new candidate()
  } catch {
    return null
  }
}

const createNoiseBuffer = (context: AudioContext): AudioBuffer => {
  const length = context.sampleRate * 2
  const buffer = context.createBuffer(1, length, context.sampleRate)
  const data = buffer.getChannelData(0)
  // Pink-ish noise: a plain white source sounds like static, not like a person.
  let previous = 0
  for (let index = 0; index < length; index++) {
    const white = Math.random() * 2 - 1
    previous = (previous + 0.02 * white) / 1.02
    data[index] = previous * 3.5
  }
  return buffer
}

/**
 * Synthesizes something that reads as speech and — crucially — MEASURES it.
 *
 * The audio levels the UI draws come from an `AnalyserNode` on the same signal
 * that is published, not from a timer. That is what makes the waveform and the
 * speaking glow behave with real latency, which is the only way to tell whether
 * the context partitioning actually holds up.
 */
export const createMockAudioEngine = (
  signals: MeetingSignalStore,
  seed = 7
): MockAudioEngine => {
  const context = getAudioContext()
  const voices = new Map<string, Voice>()
  const random = mulberry32(seed)
  let disposed = false

  const noise = context ? createNoiseBuffer(context) : null

  const add = (
    participantId: string,
    index: number
  ): MediaStream | undefined => {
    if (!context || !noise || voices.has(participantId)) {
      return voices.get(participantId)?.destination.stream
    }

    const source = context.createBufferSource()
    source.buffer = noise
    source.loop = true

    const formant = context.createBiquadFilter()
    formant.type = "bandpass"
    // A distinct timbre per person so overlapping voices stay distinguishable.
    formant.frequency.value = 320 + hashId(participantId) * 900
    formant.Q.value = 4

    const gain = context.createGain()
    gain.gain.value = 0

    const panner = context.createStereoPanner()
    panner.pan.value = Math.max(-0.8, Math.min(0.8, (index % 5) * 0.4 - 0.8))

    const analyser = context.createAnalyser()
    analyser.fftSize = 256

    const destination = context.createMediaStreamDestination()

    source.connect(formant)
    formant.connect(gain)
    gain.connect(panner)
    panner.connect(analyser)
    // Deliberately NOT connected to context.destination: the room mounts one
    // <audio> per remote track, so routing here as well would double the audio.
    analyser.connect(destination)
    source.start()

    voices.set(participantId, {
      gain,
      analyser,
      destination,
      buffer: new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount)),
      muted: false,
    })

    return destination.stream
  }

  /* --- envelope: syllables and phrase pauses --- */

  const speakers = new Set<string>()
  /** Real streams being metered, and who of them is currently above threshold. */
  const monitors = new Map<
    string,
    {
      source: MediaStreamAudioSourceNode
      analyser: AnalyserNode
      buffer: Uint8Array<ArrayBuffer>
    }
  >()
  const monitoredSpeaking = new Set<string>()
  let turnTimer: ReturnType<typeof setTimeout> | undefined
  let syllableTimer: ReturnType<typeof setInterval> | undefined
  let levelTimer: ReturnType<typeof setInterval> | undefined

  /** The synthesized floor plus whoever is really talking into a microphone. */
  const publishSpeakers = (): void =>
    signals.setSpeaking([...speakers, ...monitoredSpeaking])

  const rms = (analyser: AnalyserNode, buffer: Uint8Array<ArrayBuffer>) => {
    analyser.getByteTimeDomainData(buffer)
    let sum = 0
    for (let index = 0; index < buffer.length; index++) {
      const value = ((buffer[index] ?? 128) - 128) / 128
      sum += value * value
    }
    return Math.min(1, Math.sqrt(sum / buffer.length) * 3)
  }

  const scheduleSyllables = (): void => {
    syllableTimer = setInterval(() => {
      if (!context) return
      for (const [id, voice] of voices) {
        const active = speakers.has(id) && !voice.muted
        const target = active ? 0.25 + random() * 0.55 : 0
        voice.gain.gain.setTargetAtTime(target, context.currentTime, 0.045)
      }
    }, 140)
  }

  /** Above this a metered stream counts as speech rather than room noise. */
  const SPEECH_LEVEL = 0.08

  const measure = (): void => {
    levelTimer = setInterval(() => {
      for (const [id, voice] of voices) {
        signals.setAudioLevel(id, rms(voice.analyser, voice.buffer))
      }

      let changed = false
      for (const [id, monitored] of monitors) {
        const level = rms(monitored.analyser, monitored.buffer)
        signals.setAudioLevel(id, level)
        const talking = level > SPEECH_LEVEL
        if (talking === monitoredSpeaking.has(id)) continue
        if (talking) monitoredSpeaking.add(id)
        else monitoredSpeaking.delete(id)
        changed = true
      }
      if (changed) publishSpeakers()
    }, 50)
  }

  /**
   * Hands the floor around with realistic turn lengths, occasional overlap and
   * silences, so speaker promotion, the hold window and the two-person
   * auto-focus are all exercised without gathering six people.
   */
  const runDirector = (ids: () => string[]): void => {
    const next = (): void => {
      if (disposed) return
      const candidates = ids()
      if (candidates.length === 0) {
        turnTimer = setTimeout(next, 1000)
        return
      }

      speakers.clear()
      const primary = candidates[Math.floor(random() * candidates.length)]
      if (primary) speakers.add(primary)
      if (random() < 0.15 && candidates.length > 1) {
        const other = candidates[Math.floor(random() * candidates.length)]
        if (other) speakers.add(other)
      }
      publishSpeakers()

      const turnMs = 2000 + random() * 6000
      turnTimer = setTimeout(() => {
        speakers.clear()
        publishSpeakers()
        turnTimer = setTimeout(next, 500 + random() * 1500)
      }, turnMs)
    }
    next()
  }

  scheduleSyllables()
  measure()

  const unmonitor = (participantId: string): void => {
    monitors.get(participantId)?.source.disconnect()
    monitors.delete(participantId)
    if (monitoredSpeaking.delete(participantId)) publishSpeakers()
  }

  return {
    add,
    runDirector,
    monitor: (participantId, stream) => {
      if (!context || stream.getAudioTracks().length === 0) return
      unmonitor(participantId)
      const source = context.createMediaStreamSource(stream)
      const analyser = context.createAnalyser()
      analyser.fftSize = 256
      // Analyser only — connecting to the destination would play your own
      // microphone back at you.
      source.connect(analyser)
      monitors.set(participantId, {
        source,
        analyser,
        buffer: new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount)),
      })
    },
    unmonitor,
    streamFor: (participantId) => voices.get(participantId)?.destination.stream,
    remove: (participantId) => {
      voices.delete(participantId)
      speakers.delete(participantId)
      signals.remove(participantId)
    },
    setMuted: (participantId, muted) => {
      const voice = voices.get(participantId)
      if (voice) voice.muted = muted
    },
    blocked: () => context?.state === "suspended",
    unlock: async () => {
      await context?.resume()
    },
    dispose: () => {
      disposed = true
      if (turnTimer) clearTimeout(turnTimer)
      if (syllableTimer) clearInterval(syllableTimer)
      if (levelTimer) clearInterval(levelTimer)
      voices.clear()
      void context?.close()
    },
  }
}
