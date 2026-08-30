import { ReactNode } from 'react';
import { TOCItem } from '../types';
interface CollapsibleItemSectionHeaderProps {
    item: TOCItem;
    children?: ReactNode;
    isActive?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    sortable: boolean;
    hideChildrenCounter?: boolean;
    isDragOver?: boolean;
    dragOverPosition?: "before" | "after" | "inside" | null;
    canDropInside?: boolean;
    onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void;
    onDragLeave?: () => void;
    onDrop?: (itemId: string, position: "before" | "after" | "inside") => void;
    currentParentId?: string | null;
    draggedItemId?: string | null;
}
export declare function CollapsibleItemSectionHeader({ item, children, isActive, isExpanded, onToggleExpanded, sortable, hideChildrenCounter, canDropInside, onDragOver, onDragLeave, onDrop, currentParentId, draggedItemId, }: CollapsibleItemSectionHeaderProps): import("react").JSX.Element;
export {};
