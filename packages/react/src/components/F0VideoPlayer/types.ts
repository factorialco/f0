import { DataAttributes } from "@/global.types"
import { Localized } from "@/lib/localized"

/**
 * Structured content for the video player.
 *
 * Every field accepts either a single value or a localized list
 * (`[{ locale, label?, value }]`) — pass several languages and a language
 * selector appears in the controls. A single shared selection drives captions,
 * descriptions and the described source together (each falls back to its first
 * entry for languages it doesn't provide). See `F0VideoPlayerProps.defaultLanguage`.
 *
 * `captions` are timed text shown over the video during playback (WCAG 2.1
 * SC 1.2.2, Captions). Pass either a WebVTT resource URL or a raw WebVTT string
 * (the player turns raw VTT into a blob track, so no CORS setup is needed); a
 * remote URL requires the video host to allow cross-origin reads. When omitted,
 * the player uses any caption/subtitle track embedded in the video file. A
 * captions toggle in the controls shows/hides them (a filled glyph when on, a
 * line glyph when off).
 *
 * Audio description (WCAG 2.1 SC 1.2.5) conveys on-screen visual information as
 * audio, complementary to captions — both are independent and can be on at
 * once. Provide it in one of two ways, toggled with the audio-description
 * control (a filled "AD" badge when on, a line badge when off):
 * - `describedSrc`: a pre-produced media rendition with description mixed into
 *   the audio. Toggling swaps the source, preserving position and play state.
 *   Highest quality; assumed the same length as `src`.
 * - `descriptions`: a WebVTT `kind="descriptions"` script (URL or raw VTT),
 *   delivered at runtime — the video pauses on each cue so the description can
 *   be spoken (extended audio description), then resumes. Used only when
 *   `describedSrc` is absent.
 */
export interface VideoPlayerContent {
  /**
   * WebVTT URL, or raw WebVTT content, for captions shown during playback.
   * Localizable — pass a per-locale list to offer captions in several languages.
   */
  captions?: Localized<string>

  /**
   * A pre-produced described media source (description mixed into the audio),
   * swapped in when audio description is enabled. Takes precedence over
   * `descriptions`. Should match `src`'s duration so the position carries
   * across the swap. Localizable.
   */
  describedSrc?: Localized<string>

  /**
   * WebVTT URL, or raw WebVTT content, of a `kind="descriptions"` script.
   * Delivered at runtime with extended (pausing) audio description when no
   * `describedSrc` is provided. Localizable.
   */
  descriptions?: Localized<string>
}

export interface F0VideoPlayerProps extends DataAttributes {
  /**
   * Video source URL. Localizable — pass a per-locale list of dubbed renditions
   * to offer selectable audio languages; an "Audio" selector then appears,
   * independent of the subtitle/caption language.
   */
  src: Localized<string>

  /**
   * Initial language for localized content, matched against the provided
   * locales exactly or by primary subtag, then the viewer's browser language,
   * then the first provided. Applies to both the audio (`src`) and the text
   * (`content`) language selections. Only relevant when more than one language
   * is available.
   */
  defaultLanguage?: string

  /**
   * Image URL shown while the video loads and before playback starts (the
   * native `<video>` poster). Cleared by the browser once playback begins.
   */
  poster?: string

  /**
   * Marks the video as having no audio (video-only). Captions (WCAG 2.1
   * SC 1.2.2) don't apply to silent media, so this exempts the player from the
   * captions requirement — `data-video-captions` is set to `"no-audio"` instead
   * of `"missing"`. Note video-only content may still need a text/audio
   * alternative for its visual information (SC 1.2.1) — audio description still
   * works over a silent video (its description audio plays even though the video
   * itself is muted). Browsers can't reliably detect the absence of audio before
   * playback, so this is declared explicitly.
   * @default false
   */
  silent?: boolean

  /**
   * Structured content for the player. Currently carries `captions` (a WebVTT
   * URL or raw WebVTT string) shown over the video during playback and
   * toggled with the "CC" control. When `captions` is omitted, captions
   * embedded in the video file are used instead.
   */
  content?: VideoPlayerContent
  /**
   * Keep the controls bar visible during playback instead of auto-hiding it.
   * By default the controls show while the video is paused and auto-hide while
   * it plays (revealing on hover or keyboard focus); set this to keep them
   * visible the whole time. Default `false`.
   */
  persistControls?: boolean

  /** Start playing on mount. Default `false`. */
  autoPlay?: boolean
  /** Focus the player on mount so keyboard shortcuts work immediately. Default `false`. */
  autoFocus?: boolean
  /**
   * Prevent seeking past the furthest point already watched. Renders a marker at
   * that position and blocks the cursor beyond it. Default `false`.
   */
  restrictForwardSeek?: boolean

  /** Called on play, on pause and on a recurring heartbeat during playback. */
  onTrackAction?: () => void
  /**
   * Called once when each watched-% milestone (`25`, `50`, `75`) is first
   * reached. For progress analytics; completion is reported via `onComplete`.
   */
  onMilestone?: (milestone: number, video: HTMLVideoElement) => void
  /**
   * Called once when the video is "watched enough": the remaining time drops to
   * `min(10s, 3% of duration)` (the later of "last 10s" and "97%").
   */
  onComplete?: (video: HTMLVideoElement) => void
}
