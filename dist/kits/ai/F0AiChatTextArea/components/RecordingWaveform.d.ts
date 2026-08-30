type RecordingWaveformProps = {
    /** Live mic stream. Drives the timeline via a Web Audio analyser. */
    stream: MediaStream | null;
    className?: string;
    /**
     * Which edge the newest sample sits at, so the timeline grows away from the
     * recording controls: "right" in the chat textarea (controls on the right),
     * "left" in the rich text editor footer (controls on the left).
     */
    anchor?: "left" | "right";
};
/**
 * Scrolling amplitude timeline (à la Claude/voice memos): every `SAMPLE_MS` a
 * new bar is appended whose height is the current mic loudness. Bars are
 * anchored to one edge (`anchor`), so the newest sample sits at that edge and
 * the line builds up away from it as seconds pass, scrolling once it fills
 * the width. Degrades to an empty track where Web Audio is missing
 * (SSR / tests).
 */
export declare const RecordingWaveform: ({ stream, className, anchor, }: RecordingWaveformProps) => import("react").JSX.Element;
export {};
