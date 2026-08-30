import { ReactNode } from 'react';
import { F0ChatChannel, F0ChatHeaderAction } from './types';
export type F0ChatProps = {
    /** Whether the hosting panel is in fullscreen (controls the header toggle icon). */
    isFullscreen?: boolean;
    /** Toggle the hosting panel's fullscreen. Hidden when omitted. */
    onToggleFullscreen?: () => void;
    /** Close the hosting panel. Hidden when omitted. */
    onClose?: () => void;
    /**
     * Host-provided header actions (pin, mute, edit group…). Search is the only
     * built-in one. The function form receives the current channel so each
     * channel offers exactly what the user's PERMISSIONS allow — return `[]`
     * where they can do nothing but search. For toggles (mute/unmute) rebuild
     * the array per render with the current label/icon.
     */
    headerActions?: F0ChatHeaderAction[] | ((channel: F0ChatChannel) => F0ChatHeaderAction[]);
};
/**
 * Headless chat surface — header, transcript and composer — driven entirely by
 * the {@link F0ChatRuntime} from a surrounding `F0ChatProvider`. Panel controls
 * (fullscreen / close) are wired by the host so F0Chat stays transport-agnostic.
 */
export declare const F0Chat: (props: F0ChatProps) => ReactNode;
