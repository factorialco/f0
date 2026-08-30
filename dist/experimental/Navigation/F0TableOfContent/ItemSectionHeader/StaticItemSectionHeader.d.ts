import { ReactNode } from 'react';
import { TOCItem } from '../types';
interface StaticItemSectionHeaderProps {
    item: TOCItem;
    children?: ReactNode;
    isActive?: boolean;
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
export declare function StaticItemSectionHeader({ item, children, isActive, sortable, hideChildrenCounter, canDropInside, onDragOver, onDragLeave, onDrop, currentParentId, draggedItemId, }: StaticItemSectionHeaderProps): import("react").JSX.Element;
export {};
