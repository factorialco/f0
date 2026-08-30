import { ReactNode } from 'react';
import { Message } from '../types';
/** Read the tool call ID injected by AssistantMessage. */
export declare const useToolCallId: () => string | undefined;
export type F0AssistantMessageExtraProps = {
    /**
     * Returns a React node for the message's tool call, or null when there is
     * nothing to render. The container's connected wrapper closes over the
     * full message list to call CopilotKit's lazy tool renderer; standalone
     * consumers can omit it.
     */
    renderToolCall?: (message: Message) => ReactNode | null;
    /** Called when the user selects text in this message and clicks Reply. */
    onReplyQuote?: (text: string) => void;
    /** Called once the assistant message has finished generating — for analytics. */
    onRendered?: (message: Message) => void;
    /**
     * Renders the assistant text content. The connected wrapper provides a
     * markdown-aware implementation; standalone consumers can omit it and a
     * plain whitespace-preserving fallback is used instead.
     */
    renderMarkdown?: (content: string) => ReactNode;
};
type AssistantMessageBaseProps = {
    /** Whether the agent is still streaming new content for this message. */
    isGenerating?: boolean;
    /** Whether the message bubble is in its initial loading state. */
    isLoading?: boolean;
    /** The message to render. */
    message?: Message;
};
export declare const AssistantMessage: ({ isGenerating, isLoading, message, renderToolCall, onReplyQuote, onRendered, renderMarkdown, }: AssistantMessageBaseProps & F0AssistantMessageExtraProps) => import("react").JSX.Element | null;
export {};
