import { ReactNode } from 'react';
import { TOCItem } from '../types';
interface PrimitiveItemProps {
    item: TOCItem;
    counter?: number;
    isActive?: boolean;
    sortable: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    children?: ReactNode;
    open: boolean;
    setOpen: (open: boolean) => void;
    isHovered: boolean;
    setIsHovered: (hovered: boolean) => void;
}
export declare function PrimitiveItem({ item, counter, isActive, sortable, collapsible, isExpanded, onToggleExpanded, children, open, setOpen, isHovered, setIsHovered, }: PrimitiveItemProps): import("react").JSX.Element;
export {};
