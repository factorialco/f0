export interface SeekbarProps {
    currentTime: number;
    duration: number;
    /** Optional marker position (seconds). Pure presentation. */
    markerTime?: number;
    /** When true, shows a "blocked" cursor when hovering past `markerTime`. */
    blockSeekPastMarker?: boolean;
    onSeek: (time: number) => void;
}
/**
 * Interactive seekbar. Reports pointer events; any clamp lives upstream (wired
 * through `onSeek`). `markerTime` is used only for presentation (marker
 * visibility, blocked-cursor hint).
 */
export declare function Seekbar({ currentTime, duration, markerTime, blockSeekPastMarker, onSeek, }: SeekbarProps): import("react").JSX.Element;
