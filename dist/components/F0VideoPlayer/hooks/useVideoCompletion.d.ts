export interface UseVideoCompletionOptions {
    /** The media element to observe (null before mount). */
    video: HTMLVideoElement | null;
    /** Called once when the video is "watched enough". */
    onComplete?: (video: HTMLVideoElement) => void;
    /** Resets the fired flag whenever this value changes (e.g. `src`). */
    resetKey?: unknown;
}
/** Time (seconds) at/after which the video counts as completed. */
export declare function completionThreshold(duration: number): number;
/**
 * Fires `onComplete` once when the remaining time drops to
 * `min(10s, 3% of duration)` — the later of "last 10s" and "97%". Short videos
 * complete at 97%; long videos complete in their final 10 seconds.
 */
export declare function useVideoCompletion({ video, onComplete, resetKey, }: UseVideoCompletionOptions): void;
