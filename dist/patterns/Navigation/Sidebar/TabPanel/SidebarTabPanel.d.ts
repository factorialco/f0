import { SidebarTabPanelProps } from './types';
/**
 * Shared skeleton for a sidebar tab body: an optional search box pinned at the
 * top, optional actions, and collapsible groups of arbitrary item rows.
 *
 * The panel is agnostic about what a row is — it renders `item.content` — so it
 * backs the Messages (chats) and One (AI history) tabs from one place, keeping
 * paddings, search behaviour and the empty / no-results states consistent.
 */
export declare const SidebarTabPanel: ({ groups, actions, searchPlaceholder, loading, skeleton, emptyState, noResultsLabel, animateItems, className, }: SidebarTabPanelProps) => import("react").JSX.Element;
