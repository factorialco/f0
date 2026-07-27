import { DataAttributes } from "@/global.types"

/**
 * Structured content for the video player.
 *
 * `captions` are timed text shown over the video during playback (WCAG 2.1
 * SC 1.2.2, Captions). Pass either a WebVTT resource URL or a raw WebVTT string
 * (the player turns raw VTT into a blob track, so no CORS setup is needed); a
 * remote URL requires the video host to allow cross-origin reads. When omitted,
 * the player uses any caption/subtitle track embedded in the video file. A "CC"
 * toggle in the controls shows/hides them.
 */
export interface VideoPlayerContent {
  /** WebVTT URL, or raw WebVTT content, for captions shown during playback. */
  captions?: string
}

export interface F0VideoPlayerProps extends DataAttributes {
  /** Video source URL. */
  src: string

  /**
   * Structured content for the player. Currently carries `captions` (a WebVTT
   * URL or raw WebVTT string) shown over the video during playback and
   * toggled with the "CC" control. When `captions` is omitted, captions
   * embedded in the video file are used instead.
   */
  content?: VideoPlayerContent
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
