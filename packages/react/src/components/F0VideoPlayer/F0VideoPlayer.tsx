import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0VideoPlayerInternal } from "./internal"

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * Video player built on a native `<video>` element with f0-styled controls
 * (play/pause, seekbar, volume, playback speed, fullscreen) plus keyboard
 * shortcuts. Analytics, watch-% milestones, completion and forward-seek
 * restriction are built in and enabled via props (`onTrackAction`,
 * `onMilestone`, `onComplete`, `restrictForwardSeek`).
 */
export const F0VideoPlayer = withDataTestId(
  experimentalComponent("F0VideoPlayer", F0VideoPlayerInternal)
)
