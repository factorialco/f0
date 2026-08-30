export declare const playbackRates: readonly [0.5, 0.75, 1, 1.25, 1.5];
export type PlaybackRate = (typeof playbackRates)[number];
export declare const DEFAULT_PLAYBACK_RATE: PlaybackRate;
/** Tolerance (seconds) used when comparing playhead positions. */
export declare const SEEK_EPSILON = 0.25;
/** Step (seconds) applied by the ← / → keyboard shortcuts. */
export declare const SEEK_STEP_SECONDS = 5;
/** Step (0–1) applied by the ↑ / ↓ keyboard shortcuts. */
export declare const VOLUME_STEP = 0.1;
/** Diameter (px) of the volume slider thumb. Used to keep the thumb within the slider rect. */
export declare const VOLUME_SLIDER_THUMB_SIZE = 12;
/** Maximum forward delta (seconds) we consider "natural playback progress". */
export declare const NATURAL_PROGRESS_DELTA = 1;
/** Throttle (ms) for `setCurrentTime` updates driven by `timeupdate`. */
export declare const CURRENT_TIME_THROTTLE_MS = 250;
/** Watched-percentage milestones reported through `onMilestone`. */
export declare const DEFAULT_MILESTONES: readonly number[];
/** Default tracking heartbeat interval (ms) during continuous playback. */
export declare const TRACKING_INTERVAL_MS: number;
/**
 * Completion threshold. The video counts as "watched enough" once the remaining
 * time is ≤ `min(COMPLETION_TAIL_SECONDS, duration * COMPLETION_TAIL_RATIO)` —
 * i.e. the later of "last 10s" and "97%". Short videos complete at 97%; long
 * videos complete in their final 10 seconds.
 */
export declare const COMPLETION_TAIL_SECONDS = 10;
export declare const COMPLETION_TAIL_RATIO = 0.03;
export declare function formatTime(seconds: number): string;
export declare function formatPlaybackRate(rate: number): string;
/** Runtime guard that narrows an arbitrary number to a supported `PlaybackRate`. */
export declare function isPlaybackRate(value: number): value is PlaybackRate;
