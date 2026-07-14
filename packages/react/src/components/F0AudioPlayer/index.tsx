import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0AudioPlayerBase } from "./F0AudioPlayer"
import { F0AudioPlayerCardBase } from "./F0AudioPlayerCard"

export type {
  AudioPlayerMenuAction,
  AudioPlayerDetailTab,
  F0AudioPlayerProps,
  F0AudioPlayerCardProps,
  F0AudioPlayerSize,
} from "./types"
export { audioPlayerSizes } from "./types"
export { formatPlaybackTime } from "./utils"
export { useAudioPlayer } from "./useAudioPlayer"
export type { AudioPlayerState, AudioPlayerControls } from "./useAudioPlayer"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0AudioPlayer = experimentalComponent(
  "F0AudioPlayer",
  withDataTestId(F0AudioPlayerBase)
)

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0AudioPlayerCard = experimentalComponent(
  "F0AudioPlayerCard",
  withDataTestId(F0AudioPlayerCardBase)
)
