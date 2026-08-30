interface DropOverlayProps {
    visible: boolean;
    /**
     * Handles a native file drop. Omit for `mode="discuss"`, where the drag is a
     * pointer gesture and carries no `dataTransfer`.
     */
    onFilesDropped?: (files: File[]) => void;
    /** Which drop the overlay is inviting. */
    mode?: "files" | "discuss";
}
export declare const DropOverlay: ({ visible, onFilesDropped, mode, }: DropOverlayProps) => import("react").JSX.Element;
export {};
