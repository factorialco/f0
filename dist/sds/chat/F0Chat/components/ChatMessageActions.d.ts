import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Per-message actions, collapsed behind an ellipsis so the bubble keeps its
 * width. The dropdown holds a quick-reaction row (+ the full emoji picker) and
 * the reply / copy / info / delete menu. "Info" swaps the popover content in
 * place for an info panel (with a back arrow), keeping the same width. Open
 * state is owned by the parent so the trigger stays pressed/visible while open.
 */
export declare const ChatMessageActions: ({ message, isMine, open, onOpenChange, }: {
    message: F0ChatMessage;
    isMine: boolean;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => ReactNode;
