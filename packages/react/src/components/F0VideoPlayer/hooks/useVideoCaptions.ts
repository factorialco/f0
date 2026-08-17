import { useEffect, useMemo, useState } from "react"

import { useVttSource } from "./useVttSource"

// Text-track kinds that count as captions for display and for the a11y check.
const CAPTION_TRACK_KINDS: ReadonlySet<TextTrackKind> = new Set([
  "captions",
  "subtitles",
])

// HTMLTrackElement.readyState values (not always exposed as constants in every
// engine, so we compare the numbers directly).
const TRACK_LOADED = 2
const TRACK_ERROR = 3

export interface VideoCaptions {
  /** `src` for the rendered <track>, or `undefined` when captions come from the file. */
  trackSrc: string | undefined
  /**
   * Whether the <video> needs `crossOrigin` for the caption resource to load
   * (true only for a remote caption URL — raw VTT is served from a same-origin
   * blob).
   */
  needsCrossOrigin: boolean
  /**
   * Whether usable captions are actually present. A passed `<track>` is
   * optimistic while it loads, but a load error or an empty (zero-cue) track
   * flips this to `false`, so the a11y signal isn't a false positive. Captions
   * embedded in the file count once their cues have parsed.
   */
  available: boolean
  /** Whether captions are currently displayed. */
  showing: boolean
  /** Show/hide captions. No-op when none are available. */
  toggle: () => void
}

/**
 * Resolves and controls the video's captions.
 *
 * A passed `captions` string is rendered as a `<track>` — a URL directly, raw
 * WebVTT via a same-origin blob. When nothing is passed, captions embedded in
 * the file (in-band text tracks the browser exposes on `video.textTracks`) are
 * used instead. Either way a single "CC" toggle drives the caption tracks'
 * `mode` between `"showing"` and `"hidden"`.
 *
 * `available` reflects real loadability, not just that a source was supplied:
 * the passed `<track>`'s load/error and every caption track's cue count are
 * watched, so an unreachable URL, a CORS failure, or an empty file reads as
 * unavailable rather than passing the accessibility check on trust.
 *
 * @param video    the media element (from `useVideoState`), or `null` before mount
 * @param captions the `content.captions` string, or `undefined`
 */
export function useVideoCaptions(
  video: HTMLVideoElement | null,
  captions: string | undefined
): VideoCaptions {
  const { trackSrc, needsCrossOrigin } = useVttSource(captions)

  const [showing, setShowing] = useState(false)
  // At least one caption track has parsed, non-empty cues (passed or in-band).
  const [hasCues, setHasCues] = useState(false)
  // The passed <track> failed to load or loaded empty — a definitive negative
  // that overrides the optimistic "a source was supplied" state.
  const [passedFailed, setPassedFailed] = useState(false)

  const expectingPassed = captions !== undefined
  // Optimistic while a passed track is still loading; confirmed once any track
  // has cues; false once the passed track errors or turns out empty.
  const available = hasCues || (expectingPassed && !passedFailed)

  // A new source resets the verdict to optimistic before it re-resolves.
  useEffect(() => {
    setPassedFailed(false)
    setHasCues(false)
  }, [trackSrc])

  useEffect(() => {
    if (!video) return
    const tracks = video.textTracks
    const captionEl = video.querySelector<HTMLTrackElement>(
      'track[kind="captions"]'
    )

    // Sync display modes and re-derive availability from the current cue state
    // and the passed <track>'s readyState.
    const evaluate = () => {
      let cues = false
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]
        if (!CAPTION_TRACK_KINDS.has(track.kind)) continue
        // `hidden` still loads/parses cues (needed to judge availability even
        // when captions are toggled off); `showing` also displays them.
        track.mode = showing ? "showing" : "hidden"
        if (track.cues && track.cues.length > 0) cues = true
      }
      setHasCues(cues)

      // The passed <track>: an error, or a finished load with no cues, is a
      // definitive "no usable captions". While loading, stay optimistic.
      if (captionEl) {
        if (captionEl.readyState === TRACK_ERROR) {
          setPassedFailed(true)
        } else if (captionEl.readyState === TRACK_LOADED) {
          const trackCues = captionEl.track?.cues
          setPassedFailed(!trackCues || trackCues.length === 0)
        }
      }
    }

    evaluate()

    const cleanups: Array<() => void> = []
    // The <track> element reports load success/failure of a passed URL or blob.
    if (captionEl) {
      const onLoad = () => evaluate()
      const onError = () => setPassedFailed(true)
      captionEl.addEventListener("load", onLoad)
      captionEl.addEventListener("error", onError)
      cleanups.push(() => {
        captionEl.removeEventListener("load", onLoad)
        captionEl.removeEventListener("error", onError)
      })
    }
    // Re-evaluate as cues parse/activate and as tracks come and go.
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i]
      if (!CAPTION_TRACK_KINDS.has(track.kind)) continue
      if (typeof track.addEventListener !== "function") continue
      const onCueChange = () => evaluate()
      track.addEventListener("cuechange", onCueChange)
      cleanups.push(() => track.removeEventListener("cuechange", onCueChange))
    }
    const canWatch = typeof tracks.addEventListener === "function"
    const onListChange = () => evaluate()
    if (canWatch) {
      tracks.addEventListener("addtrack", onListChange)
      tracks.addEventListener("removetrack", onListChange)
    }
    // In-band cues finish parsing around metadata load.
    video.addEventListener("loadedmetadata", evaluate)

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      if (canWatch) {
        tracks.removeEventListener("addtrack", onListChange)
        tracks.removeEventListener("removetrack", onListChange)
      }
      video.removeEventListener("loadedmetadata", evaluate)
    }
  }, [video, captions, showing, trackSrc])

  return useMemo(
    () => ({
      trackSrc,
      needsCrossOrigin,
      available,
      showing,
      toggle: () => setShowing((s) => !s),
    }),
    [trackSrc, needsCrossOrigin, available, showing]
  )
}
