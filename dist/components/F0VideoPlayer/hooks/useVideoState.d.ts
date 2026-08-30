import { PlaybackRate } from '../utils';
export interface UseVideoStateResult {
    /** Stable ref to the media element (set synchronously during commit). */
    videoRef: React.RefObject<HTMLVideoElement | null>;
    /** The media element as state, so dependent effects re-run when it mounts. */
    videoElement: HTMLVideoElement | null;
    /** Callback ref to attach to the `<video>`; keeps `videoRef` and state in sync. */
    setVideoNode: (node: HTMLVideoElement | null) => void;
    videoLoaded: boolean;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    playbackRate: PlaybackRate;
    setVideoLoaded: (loaded: boolean) => void;
    togglePlay: () => void;
    toggleMute: () => void;
    setVolume: (value: number) => void;
    setPlaybackRate: (rate: PlaybackRate) => void;
    seekTo: (time: number) => void;
}
/**
 * Owns the `<video>` element, its native listeners and the derived player state.
 * The element is stored both in a ref (read synchronously) and in state (so the
 * tracking / milestone / completion effects re-run once the element mounts).
 */
export declare function useVideoState(src: string): UseVideoStateResult;
