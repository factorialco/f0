import { useEffect, useMemo, useRef, useState } from "react"

import { useVttSource } from "./useVttSource"

const DESCRIPTION_TRACK_KIND: TextTrackKind = "descriptions"

export interface AudioDescription {
  /** `src` for the descriptions `<track>`, set whenever a script is provided. */
  trackSrc: string | undefined
  needsCrossOrigin: boolean
  /**
   * True when audio description is offered: a described source, a passed
   * descriptions track, or a descriptions track embedded in the file.
   */
  available: boolean
  /**
   * The active description cue's text (or `undefined`). Surfaced so the player
   * can display it as an on-screen caption for deaf/hard-of-hearing viewers
   * when captions are on — the visual counterpart of the spoken description.
   */
  activeCue: string | undefined
}

export interface UseAudioDescriptionOptions {
  /** Whether audio description is currently on. */
  enabled: boolean
  /** A pre-produced described media source (takes precedence over `descriptions`). */
  describedSrc: string | undefined
  /** A WebVTT description script (URL or raw VTT). */
  descriptions: string | undefined
}

/**
 * Audio description for the video, complementary to captions.
 *
 * Two delivery paths for the spoken description:
 * - **Described source** (`describedSrc`): a pre-mixed audio/video rendition.
 *   The source swap is owned by the component; this hook just reports it.
 * - **Descriptions track** (`descriptions`): a WebVTT `kind="descriptions"`
 *   track delivered at runtime — on each cue the video is paused (extended
 *   audio description) and the cue is spoken via `speechSynthesis`, resuming
 *   when speech ends.
 *
 * Independently of the spoken delivery, the active description cue text is
 * always tracked (`activeCue`) so the player can render it visually as a
 * caption when captions are on — making the description readable by
 * deaf/hard-of-hearing viewers too. This needs `descriptions` (the audio of
 * `describedSrc` has no text), so provide the script alongside a described
 * source to get both.
 *
 * The `<track>` stays `hidden`: browsers don't render `kind="descriptions"`
 * visually, so the player draws the text itself from `activeCue`.
 */
export function useAudioDescription(
  video: HTMLVideoElement | null,
  { enabled, describedSrc, descriptions }: UseAudioDescriptionOptions
): AudioDescription {
  const usingDescribedSrc = describedSrc !== undefined

  // The descriptions <track> is rendered whenever a script is provided — its
  // cues drive both the spoken delivery and the on-screen text.
  const { trackSrc, needsCrossOrigin } = useVttSource(descriptions)

  const [hasInBandDescriptions, setHasInBandDescriptions] = useState(false)
  const available =
    usingDescribedSrc || descriptions !== undefined || hasInBandDescriptions

  const [activeCue, setActiveCue] = useState<string>()

  // Whether *we* paused the video for a description, so we only auto-resume our
  // own pause (never override a pause the user made).
  const autoPausedRef = useRef(false)

  useEffect(() => {
    if (!video) return
    const tracks = video.textTracks
    const canSpeak =
      typeof window !== "undefined" && "speechSynthesis" in window
    // Spoken (pausing) delivery applies only to the runtime WebVTT path; a
    // described source already carries the description in its audio.
    const speakRuntime = enabled && !usingDescribedSrc && canSpeak

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
      // Hidden: cues parse and `cuechange` fires, but nothing renders natively
      // (browsers don't display descriptions tracks) — we draw the text.
      track.mode = "hidden"
      if (subscribed.has(track)) return
      if (typeof track.addEventListener !== "function") return
      subscribed.add(track)
      const onCueChange = () => {
        const cue = track.activeCues?.[0] as VTTCue | undefined
        const text = cue?.text || undefined
        setActiveCue(text)
        if (speakRuntime && text) {
          // Extended audio description: pause so a long description can finish
          // before dialogue resumes; `resume` fires when speech ends.
          if (!video.paused) {
            video.pause()
            autoPausedRef.current = true
          }
          speak(text)
        }
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
      // Leaving the runtime path (toggle off / unmount): stop speaking and
      // release any auto-pause.
      if (canSpeak) window.speechSynthesis.cancel()
      resume()
    }
  }, [video, enabled, usingDescribedSrc, descriptions, trackSrc])

  return useMemo(
    () => ({ trackSrc, needsCrossOrigin, available, activeCue }),
    [trackSrc, needsCrossOrigin, available, activeCue]
  )
}
