import { FC, PropsWithChildren } from 'react';
import { AiChatProviderReturnValue, AiChatState } from '../internal-types';
/**
 * Provider for the f0 AI chat UI state. Pure UI — message-runtime concerns
 * (sendMessage, threads, streaming, persistence) live in a separate adapter
 * (see `MockAiChatRuntime` in stories, factorial's `FactorialChatRuntime`
 * in production).
 */
export declare const AiChatStateProvider: FC<PropsWithChildren<AiChatState>>;
/**
 * Read the AiChat context. Returns an inert fallback when no provider
 * is mounted — that case is intentional in `ApplicationFrame`, which
 * renders chat-aware components in both the AI-enabled tree and the
 * promotion-chat tree.
 */
export declare function useAiChat(): AiChatProviderReturnValue;
