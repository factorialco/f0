import { F0VideoPlayerProps } from './types';
/**
 * Video player built on a native `<video>` element.
 *
 *   useVideoState           → element ref, native listeners, derived state.
 *   useFullscreen           → toggles fullscreen on the wrapper (keeps controls visible).
 *   useKeyboardShortcuts    → Space, ←/→, ↑/↓, M, F.
 *   useVideoTracking        → analytics callback on play/pause + interval.
 *   useVideoMilestones      → watched-% milestone callbacks (25/50/75).
 *   useVideoCompletion      → "watched enough" callback (min(10s, 3%)).
 *   useRestrictForwardSeek  → blocks seeking past the furthest-watched point.
 *   <Controls>              → presentation only; interactions delegated back here.
 */
export declare function F0VideoPlayerInternal({ src, poster, ariaLabel, silent, persistControls, content, defaultLanguage, autoPlay, autoFocus, download, restrictForwardSeek, onTrackAction, onMilestone, onComplete, ...dataAttributes }: F0VideoPlayerProps): import("react").JSX.Element;
