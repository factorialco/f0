import { ReactNode } from 'react';
import { Message } from '../types';
export type F0UserMessageExtraProps = {
    /** Called when the user selects text in this message and clicks Reply. */
    onReplyQuote?: (text: string) => void;
    /**
     * When true (default), the bubble auto-scrolls itself into view on mount.
     * Set to false in fullscreen layouts where the viewport handles scrolling.
     */
    autoScrollIntoView?: boolean;
    /**
     * Renders the user text content. The connected wrapper provides a
     * markdown-aware implementation; standalone consumers can omit it and a
     * plain whitespace-preserving fallback is used instead.
     */
    renderMarkdown?: (content: string) => ReactNode;
};
type UserMessageBaseProps = {
    /** The user message to render. */
    message?: Message;
};
export declare const UserMessage: ({ message, onReplyQuote, autoScrollIntoView, renderMarkdown, }: UserMessageBaseProps & F0UserMessageExtraProps) => import("react").JSX.Element;
export {};
