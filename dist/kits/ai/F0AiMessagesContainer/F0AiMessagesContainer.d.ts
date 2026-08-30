import { ComponentType, ReactNode } from 'react';
import { F0AssistantMessageExtraProps } from './components/AssistantMessage';
import { FeedbackConfig } from './components/feedback/FeedbackProvider';
import { WelcomeScreenCta } from './components/WelcomeScreen';
import { Message, RenderableTurn } from './types';
type MessageSlotComponent = ComponentType<any>;
export type F0AiMessagesContainerProps = {
    /** Optional override for the assistant bubble component. */
    AssistantMessage?: MessageSlotComponent;
    /** Optional override for the user bubble component. */
    UserMessage?: MessageSlotComponent;
    /** Called when the user triggers regeneration on an assistant message. */
    onRegenerate?: (messageId: string) => void;
    /** Called when the user copies an assistant message's content. */
    onCopy?: (content: string) => void;
    /** Pre-processed turns to render (assembled by the connected wrapper). */
    turns: RenderableTurn[];
    /** Show a skeleton in place of the turns while a thread is being fetched. */
    isLoadingThread?: boolean;
    /** Optional React node rendered inline at the end of the list (e.g. CopilotKit interrupt). */
    interrupt?: ReactNode;
    /** Welcome phrase shown centered when the chat is empty. Falls back to
     *  `translations.ai.defaultInitialMessage` if omitted. */
    initialMessage?: string | string[];
    /** Static line above the welcome phrase, same size but secondary color
     *  (e.g. "Analytics mode:"). */
    initialMessageCaption?: string;
    /** Smaller secondary line below the welcome phrase. */
    initialMessageSubtitle?: string;
    /** Optional call-to-action pill rendered above the welcome phrase (e.g. a
     *  "How to use One" shortcut). Only shown on the empty welcome screen. */
    initialMessageCta?: WelcomeScreenCta;
    /** Called when the user clicks the welcome phrase (used by F0AiChat to open
     *  the pong easter egg). When omitted the phrase is non-interactive. */
    onWelcomeClick?: () => void;
    /** Returns a React node for an assistant message's tool call, or null. */
    renderToolCall?: F0AssistantMessageExtraProps["renderToolCall"];
    /** Called when the user selects text and clicks Reply (user or assistant bubble). */
    onReplyQuote?: (text: string) => void;
    /** Called when an assistant message finishes generating — for analytics. */
    onAssistantMessageRendered?: (message: Message) => void;
    /** Disables auto-scrollIntoView on new user messages (fullscreen sets false). */
    autoScrollUserIntoView?: boolean;
    /** Fullscreen welcome layout: pushes the welcome phrase to the bottom of the
     *  top half so it meets the composer near the vertical center. */
    fullscreen?: boolean;
    /**
     * Renders the markdown content of user/assistant messages. The connected
     * wrapper provides a CopilotKit + f0-markdown-renderers implementation;
     * standalone consumers can omit it and a plain whitespace-preserving
     * fallback is used.
     */
    renderMarkdown?: (content: string) => ReactNode;
    /** When omitted, feedback (thumbs + modal) is hidden. */
    feedback?: FeedbackConfig;
    /** Pause turnMinHeight observer (e.g. while a clarifying panel is open). */
    freezeLayout?: boolean;
    /** Disable the top/bottom scroll shadows. */
    noShadows?: boolean;
    /** Passthrough children appended after the last turn (CopilotKit parity). */
    children?: ReactNode;
};
export declare const F0AiMessagesContainer: (props: F0AiMessagesContainerProps) => import("react").JSX.Element;
export {};
