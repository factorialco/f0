import { ReactNode } from 'react';
import { AiChatProviderProps, WelcomeScreenSuggestion } from './types';
/**
 * Slot composition for the F0 AI chat shell. F0 ships the shell + UI
 * primitives; the consumer (factorial in production, the mock runtime
 * in stories) supplies the connected slot components that wire data
 * through whatever runtime they choose (CopilotKit, Mastra, mock, …).
 *
 * Slots are optional so the shell renders cleanly even when no runtime
 * is mounted (the chat just stays empty).
 */
export interface F0AiChatProps {
    /** Header slot rendered at the top of the chat window. */
    header?: ReactNode;
    /** Messages slot rendered inside the scrollable area. */
    messages?: ReactNode;
    /** Input slot rendered at the bottom (textarea + suggestions + disclaimer). */
    input?: ReactNode;
    /**
     * Host-provided content rendered above the complete chat surface. F0
     * supplies the scoped backdrop and makes the chat beneath it inert.
     */
    overlay?: ReactNode;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChat: ({ header: headerProp, messages: messagesProp, input: inputProp, overlay: overlayProp, }: F0AiChatProps) => import("react").JSX.Element | null;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChatProvider: ({ enabled, side, panelContentSide, initialMessage, chatHeader, chatMessages, chatInput, chatOverlay, welcomeScreenSuggestions, welcomeScreenCards, disclaimer, resizable, defaultVisualizationMode, lockVisualizationMode, historyEnabled, footer, VoiceMode, entityRefs, canvasActions, canvasEntities, credits, employeeCredits, creditWarning, fileAttachments, onTranscribe, onThumbsUp, onThumbsDown, children, agent, tracking, }: AiChatProviderProps) => import("react").JSX.Element;
export type { WelcomeScreenSuggestion };
