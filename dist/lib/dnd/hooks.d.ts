import { DragPayload } from './types';
export declare function useDraggable<T = unknown>(args: {
    ref: React.RefObject<HTMLElement>;
    payload: DragPayload<T>;
    disabled?: boolean;
    handleRef?: React.RefObject<HTMLElement | null>;
}): void;
export declare function useDroppableList(args?: {
    ref: React.RefObject<HTMLElement>;
    id: string;
    accepts: string[];
}): void;
export declare function useDndEvents(handler: (e: {
    phase: "start" | "over" | "drop" | "cancel";
    source: DragPayload;
}) => void): void;
