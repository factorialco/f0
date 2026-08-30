export declare const ResizeHandle: ({ onResize, onReset, isResizing, setIsResizing, isCanvasMode, side, }: {
    onResize: (deltaX: number) => void;
    onReset: () => void;
    isResizing: boolean;
    setIsResizing: (value: boolean) => void;
    isCanvasMode?: boolean;
    /** Edge the panel docks to. Determines which drag direction widens it. */
    side?: "left" | "right";
}) => import("react").JSX.Element;
