import { ReactNode, RefObject } from 'react';
export interface SidebarCollapsibleSectionProps {
    title: string;
    /** Initial open state. @default true */
    isOpen?: boolean;
    /** Root sections render their content without the collapsible header. */
    isRoot?: boolean;
    onCollapse?: (isOpen: boolean) => void;
    children?: ReactNode;
    /**
     * Emphasises the title (darker, bolder) while the section is collapsed —
     * Slack-style hint that hidden items need attention (e.g. unread chats).
     */
    highlightWhenCollapsed?: boolean;
    /**
     * Content shown at the end of the header only while collapsed (e.g. a total
     * unread badge) — surfaces what's hidden inside without expanding.
     */
    collapsedBadge?: ReactNode;
    /** Drag-aware guards used by the sortable Menu; safe to omit elsewhere. */
    isDragging?: boolean;
    wasDragging?: RefObject<boolean>;
}
/**
 * Collapsible titled section used across the Sidebar (navigation categories,
 * chat groups). Title + rotating chevron + animated height.
 */
export declare const SidebarCollapsibleSection: ({ title, isOpen: initialIsOpen, isRoot, onCollapse, children, highlightWhenCollapsed, collapsedBadge, isDragging, wasDragging, }: SidebarCollapsibleSectionProps) => import("react").JSX.Element;
