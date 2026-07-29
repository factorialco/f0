import { RefObject, useEffect, useState } from "react"

// Text-track kinds that can carry a spoken-word transcription. Both in-band
// tracks (embedded in the audio file, surfaced by the browser on
// `audio.textTracks`) and out-of-band `<track>` children appear here.
const TRANSCRIPT_TRACK_KINDS: ReadonlySet<TextTrackKind> = new Set([
  "captions",
  "subtitles",
  "descriptions",
  "metadata",
])

const isTranscriptKind = (kind: TextTrackKind): boolean =>
  TRANSCRIPT_TRACK_KINDS.has(kind)

// A track is "in-band" (embedded in the file) when no `<track>` child element
// backs it. We prefer those over out-of-band `<track>` children, matching the
// intended precedence: derive from the file first, fall back to attached
// tracks.
const isInBand = (audio: HTMLAudioElement, track: TextTrack): boolean => {
  const trackEls = audio.querySelectorAll("track")
  for (const el of Array.from(trackEls)) {
    if ((el as HTMLTrackElement).track === track) return false
  }
  return true
}

const readCueText = (track: TextTrack): string => {
  const cues = track.cues
  if (!cues || cues.length === 0) return ""
  const lines: string[] = []
  for (let i = 0; i < cues.length; i++) {
    // `VTTCue` exposes `text`; a generic `TextTrackCue` may not.
    const text = (cues[i] as VTTCue).text
    if (typeof text === "string" && text.trim()) lines.push(text.trim())
  }
  return lines.join("\n")
}

/**
 * Derives a transcription from the audio element's text tracks, so a recording
 * that ships its own transcript surfaces one even when the consumer doesn't
 * pass `content.transcription`.
 *
 * Tracks are read in-band-first (embedded in the file), then from out-of-band
 * `<track>` children as a fallback — both live on `audio.textTracks`. Cues load
 * asynchronously, so the hook watches for tracks and cue changes and re-reads
 * until it finds text.
 *
 * @param audioRef   ref to the player's `<audio>` element
 * @param currentSrc the resolved source URL; derivation restarts when it
 *                   changes so a new file's tracks replace the old ones
 * @param enabled    when `false`, derivation is skipped (e.g. a transcription
 *                   was already passed explicitly) and the hook returns
 *                   `undefined`
 * @returns the joined cue text, or `undefined` while none is available
 */
export const useDerivedTranscription = (
  audioRef: RefObject<HTMLAudioElement>,
  currentSrc: string | undefined,
  enabled: boolean
): string | undefined => {
  const [transcription, setTranscription] = useState<string>()

  useEffect(() => {
    if (!enabled) {
      setTranscription(undefined)
      return
    }
    const audio = audioRef.current
    if (!audio) return

    const tracks = audio.textTracks

    const pick = () => {
      const candidates = Array.from(tracks).filter((t) =>
        isTranscriptKind(t.kind)
      )
      // In-band tracks first, out-of-band `<track>` children as fallback.
      candidates.sort(
        (a, b) => Number(isInBand(audio, b)) - Number(isInBand(audio, a))
      )
      for (const track of candidates) {
        // Force the browser to parse cues without displaying them.
        if (track.mode === "disabled") track.mode = "hidden"
        const text = readCueText(track)
        if (text) {
          setTranscription(text)
          return
        }
      }
    }

    pick()

    const trackCleanups: Array<() => void> = []
    const watch = (track: TextTrack) => {
      if (typeof track.addEventListener !== "function") return
      const onCueChange = () => pick()
      track.addEventListener("cuechange", onCueChange)
      trackCleanups.push(() =>
        track.removeEventListener("cuechange", onCueChange)
      )
    }
    Array.from(tracks).forEach(watch)

    // `TextTrackList` exposes `addtrack` in the browser, but not in every test
    // environment (jsdom) or older engine — guard before subscribing.
    const onAddTrack = (event: TrackEvent) => {
      if (event.track) watch(event.track)
      pick()
    }
    const canWatchList = typeof tracks.addEventListener === "function"
    if (canWatchList) tracks.addEventListener("addtrack", onAddTrack)

    return () => {
      if (canWatchList) tracks.removeEventListener("addtrack", onAddTrack)
      trackCleanups.forEach((cleanup) => cleanup())
    }
  }, [audioRef, enabled, currentSrc])

  return transcription
}
