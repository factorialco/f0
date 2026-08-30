/**
 * Reveals the transcript only after Virtuoso has finished its provisional
 * entry window and the viewport has held the same size for two paint frames.
 */
export declare const useTranscriptReadiness: (resetKey: string | number) => {
    ready: boolean;
    setViewport: (element: HTMLElement | null) => void;
    setListVisible: (visible: boolean) => void;
};
