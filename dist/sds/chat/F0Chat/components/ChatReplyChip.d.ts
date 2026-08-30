import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/** Compact "replying to" preview above the composer (quotes the whole message). */
export declare const ChatReplyChip: ({ message, onRemove, }: {
    message: F0ChatMessage;
    onRemove: () => void;
}) => ReactNode;
