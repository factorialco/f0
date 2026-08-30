import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Message-info panel shown in place of the actions menu (a back arrow returns to
 * it). Shows delivered + read times for DMs and the reader identities for group
 * messages when the host provides them.
 */
export declare const ChatMessageInfoView: ({ message, onBack, }: {
    message: F0ChatMessage;
    onBack: () => void;
}) => ReactNode;
