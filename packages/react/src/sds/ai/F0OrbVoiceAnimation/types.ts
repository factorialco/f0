import type {
  AgentState,
  TrackReferenceOrPlaceholder,
} from "@livekit/components-react"
import type { LocalAudioTrack, RemoteAudioTrack } from "livekit-client"

export interface F0OrbVoiceAnimationColors {
  colorA: string
  colorB: string
  colorC: string
  colorD: string
}

export interface F0OrbVoiceAnimationProps {
  className?: string
  state?: AgentState
  audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder
  colors?: F0OrbVoiceAnimationColors
}
