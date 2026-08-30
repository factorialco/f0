import { CardInternal } from '../../../components/F0Card/CardInternal';
export type DragConfig<T = unknown> = {
    id: string;
    type?: string;
    data?: T;
};
export declare function KanbanCard<T = unknown>({ drag, id, index, total, laneId, draggable, showIndicator, disabledEdges, forcedEdge, ...props }: {
    drag: DragConfig<T>;
    id: string;
    index: number;
    total: number;
    laneId?: string;
    draggable?: boolean;
    showIndicator?: boolean;
    disabledEdges?: Array<"top" | "bottom">;
    forcedEdge?: "top" | "bottom" | null;
} & React.ComponentProps<typeof CardInternal>): import("react").JSX.Element;
