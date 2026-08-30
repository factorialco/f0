import { RefObject } from 'react';
interface UseAudioPlayerCallbacks {
    onPlay?: () => void;
    onPause?: () => void;
    onSeek?: (seconds: number) => void;
    onTimeUpdate?: (seconds: number) => void;
    onEnded?: () => void;
    onError?: (error: MediaError | null) => void;
}
export interface AudioPlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    buffered: number;
    playbackRate: number;
    isLoading: boolean;
    error: MediaError | null;
}
export interface AudioPlayerControls extends AudioPlayerState {
    play: () => void;
    pause: () => void;
    toggle: () => void;
    seek: (seconds: number) => void;
    setPlaybackRate: (rate: number) => void;
}
export declare const useAudioPlayer: (audioRef: RefObject<HTMLAudioElement>, callbacks?: UseAudioPlayerCallbacks, initialDuration?: number) => AudioPlayerControls;
export {};
