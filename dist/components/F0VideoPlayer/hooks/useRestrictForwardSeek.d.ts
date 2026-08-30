export interface UseRestrictForwardSeekOptions {
    /** The media element to observe (null before mount). */
    video: HTMLVideoElement | null;
    /** Whether the restriction is active. */
    enabled: boolean;
    /** Max-watched is cleared whenever this value changes (e.g. `src`). */
    resetKey?: unknown;
}
export interface UseRestrictForwardSeekResult {
    /** Furthest position reached during natural playback (seconds). */
    maxWatchedTime: number;
    /** Clamps a target time to the allowed range; identity when disabled. */
    clampSeek: (target: number) => number;
}
/**
 * Tracks the furthest naturally-watched position and (when `enabled`) prevents
 * seeking past it. The clamp is enforced both proactively (via `clampSeek`) and
 * reactively (via native `seeking`/`seeked` listeners). Internal building block
 * of `F0VideoPlayer`.
 */
export declare function useRestrictForwardSeek({ video, enabled, resetKey, }: UseRestrictForwardSeekOptions): UseRestrictForwardSeekResult;
