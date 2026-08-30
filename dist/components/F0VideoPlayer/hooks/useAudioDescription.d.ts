export interface AudioDescription {
    /** `src` for the descriptions `<track>`, set whenever a script is provided. */
    trackSrc: string | undefined;
    needsCrossOrigin: boolean;
    /**
     * True when audio description is offered: a described source, a passed
     * descriptions track, or a descriptions track embedded in the file.
     */
    available: boolean;
    /**
     * The active description cue's text (or `undefined`). Surfaced so the player
     * can display it as an on-screen caption for deaf/hard-of-hearing viewers
     * when captions are on — the visual counterpart of the spoken description.
     */
    activeCue: string | undefined;
}
export interface UseAudioDescriptionOptions {
    /** Whether audio description is currently on. */
    enabled: boolean;
    /** A pre-produced described media source (takes precedence over `descriptions`). */
    describedSrc: string | undefined;
    /** A WebVTT description script (URL or raw VTT). */
    descriptions: string | undefined;
}
/**
 * Audio description for the video, complementary to captions.
 *
 * Two delivery paths for the spoken description:
 * - **Described source** (`describedSrc`): a pre-mixed audio/video rendition.
 *   The source swap is owned by the component; this hook just reports it.
 * - **Descriptions track** (`descriptions`): a WebVTT `kind="descriptions"`
 *   track delivered at runtime — on each cue the video is paused (extended
 *   audio description) and the cue is spoken via `speechSynthesis`, resuming
 *   when speech ends.
 *
 * Independently of the spoken delivery, the active description cue text is
 * always tracked (`activeCue`) so the player can render it visually as a
 * caption when captions are on — making the description readable by
 * deaf/hard-of-hearing viewers too. This needs `descriptions` (the audio of
 * `describedSrc` has no text), so provide the script alongside a described
 * source to get both.
 *
 * The `<track>` stays `hidden`: browsers don't render `kind="descriptions"`
 * visually, so the player draws the text itself from `activeCue`.
 */
export declare function useAudioDescription(video: HTMLVideoElement | null, { enabled, describedSrc, descriptions }: UseAudioDescriptionOptions): AudioDescription;
