import { IconType } from '../../../../components/F0Icon';
export type SidebarTab = {
    id: string;
    label: string;
    icon: IconType;
    /** Unread counter shown next to the tab. */
    badge?: number;
    /**
     * Visual variant. "ai" renders the tab as an AI-variant button — the animated
     * gradient shimmer on hover — e.g. the "One" tab. Defaults to the plain ghost
     * tab (transparent background; the icon darkens on hover).
     */
    variant?: "default" | "ai";
};
export type SidebarTabsProps = {
    tabs: SidebarTab[];
    activeTab: string;
    onTabChange: (id: string) => void;
    /**
     * Remember the active tab across reloads under this key (namespaced as
     * `f0-sidebar-tab:<persistKey>` in localStorage). On mount, a stored tab
     * that still exists in `tabs` is restored via `onTabChange`; unknown ids
     * (e.g. a tab that no longer ships) are ignored. Omit for session-only tabs.
     */
    persistKey?: string;
};
/**
 * Tab switcher that replaces the `SearchBar` row when the Sidebar gains tabs.
 * The active tab always shows icon + label (animated in); inactive tabs show
 * theirs too when every label fits in the row, and fall back to icon-only
 * when space is tight. Search becomes an icon button on the right.
 *
 * When no tabs are needed, keep composing the Sidebar header with `SearchBar`
 * instead — that path is unchanged.
 */
export declare const SidebarTabs: ({ tabs, activeTab, onTabChange, persistKey, }: SidebarTabsProps) => import("react").JSX.Element;
