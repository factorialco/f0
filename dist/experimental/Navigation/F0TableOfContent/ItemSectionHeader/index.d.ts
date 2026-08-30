import { ReactNode } from 'react';
import { TOCItem } from '../types';
interface TOCItemSectionHeaderProps {
    item: TOCItem;
    children?: ReactNode;
    isActive?: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    sortable: boolean;
    hideChildrenCounter?: boolean;
    canDropInside?: boolean;
    onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void;
    onDragLeave?: () => void;
    onDrop?: (itemId: string, position: "before" | "after" | "inside") => void;
    currentParentId?: string | null;
    draggedItemId?: string | null;
}
export declare function ItemSectionHeader({ item, children, isActive, collapsible, isExpanded, onToggleExpanded, sortable, hideChildrenCounter, canDropInside, onDragOver, onDragLeave, onDrop, currentParentId, draggedItemId, }: TOCItemSectionHeaderProps): import("react").JSX.Element;
export {};
