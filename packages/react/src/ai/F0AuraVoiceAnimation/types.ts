import type {
  AgentState,
  TrackReferenceOrPlaceholder,
} from "@livekit/components-react"
import type { LocalAudioTrack, RemoteAudioTrack } from "livekit-client"

export interface F0AuraVoiceAnimationProps {
  className?: string
  state?: AgentState
  color?: string
  colorShift?: number
  themeMode?: "dark" | "light"
  audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder
}
