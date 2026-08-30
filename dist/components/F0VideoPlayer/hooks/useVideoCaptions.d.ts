export interface VideoCaptions {
    /** `src` for the rendered <track>, or `undefined` when captions come from the file. */
    trackSrc: string | undefined;
    /**
     * Whether the <video> needs `crossOrigin` for the caption resource to load
     * (true only for a remote caption URL — raw VTT is served from a same-origin
     * blob).
     */
    needsCrossOrigin: boolean;
    /**
     * Whether usable captions are actually present. A passed `<track>` is
     * optimistic while it loads, but a load error or an empty (zero-cue) track
     * flips this to `false`, so the a11y signal isn't a false positive. Captions
     * embedded in the file count once their cues have parsed.
     */
    available: boolean;
    /** Whether captions are currently displayed. */
    showing: boolean;
    /** Show/hide captions. No-op when none are available. */
    toggle: () => void;
}
/**
 * Resolves and controls the video's captions.
 *
 * A passed `captions` string is rendered as a `<track>` — a URL directly, raw
 * WebVTT via a same-origin blob. When nothing is passed, captions embedded in
 * the file (in-band text tracks the browser exposes on `video.textTracks`) are
 * used instead. Either way a single "CC" toggle drives the caption tracks'
 * `mode` between `"showing"` and `"hidden"`.
 *
 * `available` reflects real loadability, not just that a source was supplied:
 * the passed `<track>`'s load/error and every caption track's cue count are
 * watched, so an unreachable URL, a CORS failure, or an empty file reads as
 * unavailable rather than passing the accessibility check on trust.
 *
 * @param video    the media element (from `useVideoState`), or `null` before mount
 * @param captions the `content.captions` string, or `undefined`
 */
export declare function useVideoCaptions(video: HTMLVideoElement | null, captions: string | undefined): VideoCaptions;
