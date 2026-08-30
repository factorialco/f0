import { ReactNode } from 'react';
import { F0AiChatHeaderProps } from './types';
/**
 * The AI chat credits / settings popover button, on its own. Use it to surface
 * the popover outside the chat header — e.g. from a sidebar that already owns
 * the chat navigation (history, new chat), leaving the header minimal.
 */
export declare const F0AiChatCreditsButton: ({ credits, employeeCredits, trigger, }: Pick<F0AiChatHeaderProps, "credits" | "employeeCredits"> & {
    /** Custom popover trigger (asChild). Defaults to the Sliders icon button. */
    trigger?: ReactNode;
}) => import("react").JSX.Element | null;
/**
 * Headless chat header. Renders a top bar with title (or thread selector),
 * credits popover, fullscreen toggle and close button. Has two visual
 * variants:
 * - with-history: title acts as a thread selector (clickable) — the host
 *   wires `onOpenHistory` to mount its own history dialog.
 * - legacy: title is static; a "new chat" button is shown when `hasMessages`.
 * Hosts can add header actions that F0 renders alongside the built-in controls.
 *
 * Decoupled from CopilotKit and `useAiChat()` — everything via props.
 */
export declare const F0AiChatHeader: ({ historyEnabled, title, currentThreadTitle, fullscreen, lockVisualizationMode, onToggleVisualizationMode, onClose, onNewChat, onOpenHistory, hasMessages, credits, employeeCredits, compact, actions, }: F0AiChatHeaderProps) => import("react").JSX.Element;
