export interface UseFullscreenOptions {
    targetRef: React.RefObject<HTMLElement | null>;
}
export interface UseFullscreenResult {
    isFullscreen: boolean;
    toggleFullscreen: () => Promise<void>;
}
/**
 * Tracks fullscreen state and exposes a toggle. Fullscreens the target element
 * (the wrapper, not the `<video>`) so the controls and marker stay visible.
 */
export declare function useFullscreen({ targetRef, }: UseFullscreenOptions): UseFullscreenResult;
