import { ReactNode } from 'react';
import { SidebarChatActions, SidebarChatGroup, SidebarChatStore } from './types';
export type SidebarChatProviderProps = {
    children: ReactNode;
    /** Initial chat groups. Live updates are applied through the store actions. */
    initialGroups?: SidebarChatGroup[];
    /** Initially active chat id. Chats are not navigation links (see store). */
    initialActiveChatId?: string;
};
export declare const SidebarChatProvider: ({ children, initialGroups, initialActiveChatId, }: SidebarChatProviderProps) => import("react").JSX.Element;
/** Read the chat state (groups, active chat) and the imperative store API. */
export declare const useSidebarChats: () => SidebarChatStore;
/**
 * Access only the mutation actions, without subscribing to state changes.
 * Use this from code that pushes updates (e.g. websocket handlers) so it
 * doesn't re-render on every chat change.
 */
export declare const useSidebarChatActions: () => SidebarChatActions;
