import { useEffect, useMemo, useRef, useState } from "react"

import { useVttSource } from "./useVttSource"

const DESCRIPTION_TRACK_KIND: TextTrackKind = "descriptions"

export interface AudioDescription {
  /**
   * `src` for the descriptions `<track>` — only set for the WebVTT runtime path
   * (undefined when a described source is used, or when nothing is passed).
   */
  trackSrc: string | undefined
  needsCrossOrigin: boolean
  /**
   * True when audio description is offered: a described source, a passed
   * descriptions track, or a descriptions track embedded in the file.
   */
  available: boolean
}

export interface UseAudioDescriptionOptions {
  /** Whether audio description is currently on. */
  enabled: boolean
  /** A pre-produced described media source (takes precedence over `descriptions`). */
  describedSrc: string | undefined
  /** A WebVTT description script (URL or raw VTT), used when there's no described source. */
  descriptions: string | undefined
}

/**
 * Audio description for the video, complementary to captions.
 *
 * Two delivery paths:
 * - **Described source** (`describedSrc`): a pre-mixed audio/video rendition.
 *   The source swap is owned by the component; this hook just reports it as
 *   available.
 * - **Descriptions track** (`descriptions`): a WebVTT `kind="descriptions"`
 *   track delivered at runtime — on each cue the video is paused (extended
 *   audio description) and the cue is spoken via `speechSynthesis`, resuming
 *   when speech ends. The track stays `hidden`, so nothing renders visually.
 *
 * Captions are independent (a separate track/toggle), so both can be on at once.
 */
export function useAudioDescription(
  video: HTMLVideoElement | null,
  { enabled, describedSrc, descriptions }: UseAudioDescriptionOptions
): AudioDescription {
  const usingDescribedSrc = describedSrc !== undefined

  // A descriptions <track> only backs the runtime path (no described source).
  const { trackSrc, needsCrossOrigin } = useVttSource(
    usingDescribedSrc ? undefined : descriptions
  )

  const [hasInBandDescriptions, setHasInBandDescriptions] = useState(false)
  const available =
    usingDescribedSrc || descriptions !== undefined || hasInBandDescriptions

  // Whether *we* paused the video for a description, so we only auto-resume our
  // own pause (never override a pause the user made).
  const autoPausedRef = useRef(false)

  useEffect(() => {
    // Runtime delivery only applies to the descriptions text-track path.
    if (!video || usingDescribedSrc) return
    const tracks = video.textTracks
    const canSpeak =
      typeof window !== "undefined" && "speechSynthesis" in window

    const resume = () => {
      if (autoPausedRef.current) {
        autoPausedRef.current = false
        void video.play().catch(() => {})
      }
    }

    const speak = (text: string) => {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.onend = resume
      utterance.onerror = resume
      window.speechSynthesis.speak(utterance)
    }

    const subscribed = new WeakSet<TextTrack>()
    const cleanups: Array<() => void> = []

    const watch = (track: TextTrack) => {
      if (track.kind !== DESCRIPTION_TRACK_KIND) return
      // Hidden: cues parse and `cuechange` fires, but nothing renders visually.
      track.mode = "hidden"
      if (subscribed.has(track)) return
      if (typeof track.addEventListener !== "function") return
      subscribed.add(track)
      const onCueChange = () => {
        if (!enabled || !canSpeak) return
        const cue = track.activeCues?.[0] as VTTCue | undefined
        if (!cue || !cue.text) return
        // Extended audio description: pause so a long description can finish
        // before dialogue resumes; `resume` fires when speech ends.
        if (!video.paused) {
          video.pause()
          autoPausedRef.current = true
        }
        speak(cue.text)
      }
      track.addEventListener("cuechange", onCueChange)
      cleanups.push(() => track.removeEventListener("cuechange", onCueChange))
    }

    const refresh = () => {
      let inBand = false
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]
        if (track.kind !== DESCRIPTION_TRACK_KIND) continue
        // A track with no backing <track> element is embedded in the file.
        if (descriptions === undefined) inBand = true
        watch(track)
      }
      setHasInBandDescriptions(inBand)
    }

    refresh()

    const canWatch = typeof tracks.addEventListener === "function"
    const onListChange = () => refresh()
    if (canWatch) {
      tracks.addEventListener("addtrack", onListChange)
      tracks.addEventListener("removetrack", onListChange)
    }

    return () => {
      if (canWatch) {
        tracks.removeEventListener("addtrack", onListChange)
        tracks.removeEventListener("removetrack", onListChange)
      }
      cleanups.forEach((cleanup) => cleanup())
      // Leaving AD (toggle off / unmount): stop speaking and release our pause.
      if (canSpeak) window.speechSynthesis.cancel()
      resume()
    }
  }, [video, enabled, usingDescribedSrc, descriptions, trackSrc])

  return useMemo(
    () => ({ trackSrc, needsCrossOrigin, available }),
    [trackSrc, needsCrossOrigin, available]
  )
}
