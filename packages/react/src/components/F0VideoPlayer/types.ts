import { DataAttributes } from "@/global.types"

export interface F0VideoPlayerProps extends DataAttributes {
  /** Video source URL. */
  src: string
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
