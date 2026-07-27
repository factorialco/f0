import { useEffect, useMemo, useState } from "react"

import { useVttSource } from "./useVttSource"

// Text-track kinds that count as captions for display and for the a11y check.
const CAPTION_TRACK_KINDS: ReadonlySet<TextTrackKind> = new Set([
  "captions",
  "subtitles",
])

export interface VideoCaptions {
  /** `src` for the rendered <track>, or `undefined` when captions come from the file. */
  trackSrc: string | undefined
  /**
   * Whether the <video> needs `crossOrigin` for the caption resource to load
   * (true only for a remote caption URL — raw VTT is served from a same-origin
   * blob).
   */
  needsCrossOrigin: boolean
  /** True when captions are passed or embedded in the video file. */
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
 * @param video    the media element (from `useVideoState`), or `null` before mount
 * @param captions the `content.captions` string, or `undefined`
 */
export function useVideoCaptions(
  video: HTMLVideoElement | null,
  captions: string | undefined
): VideoCaptions {
  const { trackSrc, needsCrossOrigin } = useVttSource(captions)

  const [showing, setShowing] = useState(false)
  // Availability from the file's own tracks. Passed captions are always
  // available (we render the <track>); this covers the derive-from-file case.
  const [hasInBandCaptions, setHasInBandCaptions] = useState(false)
  const available = captions !== undefined || hasInBandCaptions

  // Keep every caption track's display mode in sync with `showing`, and track
  // whether the file exposes captions of its own. Re-runs when tracks load.
  useEffect(() => {
    if (!video) return
    const tracks = video.textTracks

    // Set each caption track's display mode, and report whether any captions
    // are embedded in the file (the derive-from-file case). Caption placement
    // (clear of the controls bar) is handled in CSS on the <video> element.
    const sync = () => {
      let inBand = false
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]
        if (!CAPTION_TRACK_KINDS.has(track.kind)) continue
        // A track with no backing <track> element is embedded in the file.
        if (captions === undefined) inBand = true
        track.mode = showing ? "showing" : "hidden"
      }
      setHasInBandCaptions(inBand)
    }

    sync()

    const canWatch = typeof tracks.addEventListener === "function"
    if (!canWatch) return
    tracks.addEventListener("addtrack", sync)
    tracks.addEventListener("removetrack", sync)
    return () => {
      tracks.removeEventListener("addtrack", sync)
      tracks.removeEventListener("removetrack", sync)
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
