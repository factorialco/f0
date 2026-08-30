import { ReactNode } from 'react';
interface DragContextType {
    isDragging: boolean;
    setIsDragging: (isDragging: boolean) => void;
    draggedItemId: string | null;
    setDraggedItemId: (id: string | null) => void;
    dragOverItemId: string | null;
    setDragOverItemId: (id: string | null) => void;
    dragOverPosition: "before" | "after" | "inside" | null;
    setDragOverPosition: (position: "before" | "after" | "inside" | null) => void;
}
export declare function DragProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useDragContext(): DragContextType;
export {};
