import { PlaybackRate } from '../utils';
export interface PlaybackRateMenuProps {
    value: PlaybackRate;
    onChange: (rate: PlaybackRate) => void;
    /**
     * Element the menu portals into. Set to the player wrapper so the menu stays
     * inside the fullscreened element (Radix portals to `document.body` by
     * default, which is outside the fullscreen target).
     */
    containerRef: React.RefObject<HTMLElement | null>;
}
/** Playback-speed menu: F0Button trigger + f0 Popover content, fullscreen-safe. */
export declare function PlaybackRateMenu({ value, onChange, containerRef, }: PlaybackRateMenuProps): import("react").JSX.Element;
