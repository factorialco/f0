import { F0AiChatHistoryProps } from './types';
/**
 * Headless chat-history dialog. Receives threads + handlers via props so
 * it can be wired against any backend or mocked in stories. No CopilotKit
 * or `useAiChat()` dependency.
 */
export declare const F0AiChatHistory: ({ onClose, onSelectThread, onNewChat, threads, isLoading, error, pinnedIds, onPinThread, onUnpinThread, onDeleteThread, }: F0AiChatHistoryProps) => import('react').ReactPortal;
