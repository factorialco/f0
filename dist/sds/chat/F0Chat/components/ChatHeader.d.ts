import { ReactNode } from 'react';
import { F0ChatChannel, F0ChatHeaderAction } from '../types';
export type ChatHeaderProps = {
    channel: F0ChatChannel;
    isFullscreen?: boolean;
    onToggleFullscreen?: () => void;
    onClose?: () => void;
    /** Host-provided actions (pin, mute, edit group…), already resolved for this
     * channel by `F0Chat` — see {@link F0ChatHeaderAction}. */
    actions?: F0ChatHeaderAction[];
};
/** Top bar of the chat: avatar + presence + name + statuses and panel actions. */
export declare const ChatHeader: ({ channel, isFullscreen, onToggleFullscreen, onClose, actions, }: ChatHeaderProps) => ReactNode;
