import { AgentState, TrackReferenceOrPlaceholder } from '@livekit/components-react';
import { LocalAudioTrack, RemoteAudioTrack } from 'livekit-client';
export declare function useAuraVoiceAnimation(state: AgentState | undefined, audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder): {
    speed: number;
    scale: number;
    amplitude: number;
    frequency: number;
    brightness: number;
};
