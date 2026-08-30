import { F0AiChatTextAreaProps } from './types';
/**
 * Headless chat composer.
 *
 * Owns local UI state (text, cursor, attached files, mention popover) and
 * emits a structured payload via `onSubmit`. The consumer decides what to
 * do with it (forward to CopilotKit, log it, mock it…). It carries no
 * coupling to `useAiChat()` or CopilotKit — wrappers like F0AiChat
 * provide the wiring.
 */
export declare const F0AiChatTextArea: ({ onSubmit, onStop, inProgress, onBeforeSubmit, placeholders, creditWarning, clarifyingUI, pendingContext, onPendingContextChange, pendingQuote, onPendingQuoteChange, fileAttachments, toolbarStart, onTranscribe, searchPersons, onProcessFilesRef, disclaimer, footer, isWelcomeScreen, fullscreen, welcomeScreenSuggestions, onSuggestionClick, welcomeScreenSuggestionsPlacement, welcomeScreenSuggestionsCollapsedByDefault, welcomeScreenCards, padding, ref, }: F0AiChatTextAreaProps) => import("react").JSX.Element;
