import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Reaction pills under a bubble. Once a message has at
 * least one reaction, an inline "add reaction" picker sits next to the pills so
 * more can be added without opening the message menu.
 */
export declare const ChatMessageReactions: ({ message, isMine, }: {
    message: F0ChatMessage;
    isMine: boolean;
}) => ReactNode;
