import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/** "Editing" preview above the composer. Mirrors {@link ChatReplyChip}, but the
 * header is a pencil + "Edit" pill in the mention-info style (it's always your
 * own message, so there's no author name to show). */
export declare const ChatEditChip: ({ message, onRemove, }: {
    message: F0ChatMessage;
    onRemove: () => void;
}) => ReactNode;
