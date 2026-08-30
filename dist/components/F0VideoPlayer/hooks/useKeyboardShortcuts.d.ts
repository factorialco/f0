export interface UseKeyboardShortcutsOptions {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    /** Seeks to an absolute time (seconds); already applies any clamp. */
    seek: (time: number) => void;
    togglePlay: () => void;
    toggleMute: () => void;
    toggleFullscreen: () => Promise<void> | void;
    setVolume: (value: number) => void;
}
/**
 * Player keyboard shortcuts (active while the wrapper or a non-interactive
 * descendant holds focus):
 *
 *   Space    → play/pause
 *   ← / →    → seek ±SEEK_STEP_SECONDS (forward seek runs through `seek`'s clamp)
 *   ↑ / ↓    → volume ±VOLUME_STEP
 *   M        → mute/unmute
 *   F        → toggle fullscreen
 */
export declare function useKeyboardShortcuts({ videoRef, seek, togglePlay, toggleMute, toggleFullscreen, setVolume, }: UseKeyboardShortcutsOptions): (event: React.KeyboardEvent<HTMLElement>) => void;
