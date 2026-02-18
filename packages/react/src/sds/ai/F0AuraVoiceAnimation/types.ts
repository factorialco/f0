import type {
  AgentState,
  TrackReferenceOrPlaceholder,
} from "@livekit/components-react"
import type { LocalAudioTrack, RemoteAudioTrack } from "livekit-client"

export interface F0AuraVoiceAnimationProps {
  className?: string
  size?: "icon" | "sm" | "md" | "lg" | "xl"
  state?: AgentState
  color?: string
  colorShift?: number
  themeMode?: "dark" | "light"
  audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder
}
