import { ReactNode } from 'react';
import { SidebarChatGroup } from '../../../../patterns/Navigation/Sidebar/Chats/types';
import { F0ChatItem, F0ChatRuntime, F0ChatUser } from '../types';
import { Seed } from './mockSeeds';
export declare const MockChatAppProvider: ({ children, }: {
    children: ReactNode;
}) => ReactNode;
export declare const resolveMockReactionUsers: (seed: Seed | undefined, messages: F0ChatItem[], messageId: string, emoji: string) => F0ChatUser[];
/** F0ChatRuntime for one conversation, backed by the shared store. */
export declare const useConversationRuntime: (convId: string) => F0ChatRuntime;
/**
 * Sidebar groups (Direct messages / Groups) derived from the store, so unread
 * badges, presence and mute reflect live state and clear as conversations are
 * read.
 */
export declare const useMockChatGroups: (onSelect: (convId: string) => void) => SidebarChatGroup[];
