export interface UseVideoTrackingOptions {
    /** The media element to observe (null before mount). */
    video: HTMLVideoElement | null;
    /** Called on play, on pause and every `TRACKING_INTERVAL_MS` during playback. */
    onTrackAction?: () => void;
}
/**
 * Fires `onTrackAction` on play, on pause, and on a recurring interval while the
 * video keeps playing. Inert when no callback is provided.
 */
export declare function useVideoTracking({ video, onTrackAction, }: UseVideoTrackingOptions): void;
