export interface UseVideoMilestonesOptions {
    /** The media element to observe (null before mount). */
    video: HTMLVideoElement | null;
    /** Called once when each milestone (watched %) is first reached. */
    onMilestone?: (milestone: number, video: HTMLVideoElement) => void;
    /** Resets the fired-milestone set whenever this value changes (e.g. `src`). */
    resetKey?: unknown;
}
/**
 * Fires `onMilestone` each time the watched percentage first crosses a default
 * threshold (`25`, `50`, `75`). Inert when no callback is provided. Attaches its
 * own `timeupdate` listener so it runs on every tick.
 */
export declare function useVideoMilestones({ video, onMilestone, resetKey, }: UseVideoMilestonesOptions): void;
