import { default as React } from 'react';
interface DragContextType {
    isDragging: boolean;
    setIsDragging: (isDragging: boolean) => void;
    draggedItemId: string | null;
    setDraggedItemId: (id: string | null) => void;
}
export declare function DragProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useDragContext(): DragContextType;
export {};
