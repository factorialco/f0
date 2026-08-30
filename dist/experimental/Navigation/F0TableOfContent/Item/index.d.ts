import { ReactNode } from 'react';
import { TOCItem } from '../types';
interface TOCItemProps {
    item: TOCItem;
    counter?: number;
    isActive?: boolean;
    sortable: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    children?: ReactNode;
    onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void;
    onDragLeave?: () => void;
    onDrop?: (itemId: string, position: "before" | "after" | "inside") => void;
    canDropInside?: boolean;
    currentParentId?: string | null;
    draggedItemId?: string | null;
    justDropped?: boolean;
}
export declare function Item({ item, counter, isActive, collapsible, isExpanded, onToggleExpanded, sortable, children, onDragOver, onDragLeave, onDrop, canDropInside, currentParentId, justDropped, }: TOCItemProps): import("react").JSX.Element;
export {};
