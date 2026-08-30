import { SidebarChatBlankStateAction } from './SidebarChatBlankState';
import { SidebarChatAction } from './types';
/**
 * Copy shown when there are no chats at all. Override via the `emptyState` prop.
 * Rendered through the shared `OneEmptyState`, so the AI history list and this
 * one read identically — the host (factorial) just supplies the copy + actions.
 */
export type SidebarChatEmptyState = {
    title: string;
    description?: string;
    /** Optional CTA(s) shown under the copy — e.g. "Start a conversation". */
    actions?: SidebarChatBlankStateAction[];
};
/**
 * Body of the "Messages" tab: chat groups read from `SidebarChatProvider`,
 * rendered through the shared `SidebarTabPanel` (search + actions + collapsible
 * groups). This stays a thin adapter — it maps the chat store onto the panel
 * and owns only chat-specific bits (unread badges, the blank state copy).
 */
export declare const SidebarChatList: ({ actions, emptyState, loading, }: {
    /** Ghost actions rendered at the very top (e.g. New chat, New group). */
    actions?: SidebarChatAction[];
    /** Copy for the blank state shown when there are no chats. */
    emptyState: SidebarChatEmptyState;
    /**
     * Whole-list loading: the conversations aren't known yet. Renders a generic
     * skeleton instead of the blank state. Once any chats are known, pass them
     * (with `loading` on the individual chats whose name is still resolving) and
     * set this back to false — the per-chat skeletons take over (cascade).
     */
    loading?: boolean;
}) => import("react").JSX.Element;
