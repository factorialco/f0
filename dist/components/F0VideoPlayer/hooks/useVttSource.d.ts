export interface VttSource {
    /** `src` for a `<track>` element, or `undefined` when nothing is passed. */
    trackSrc: string | undefined;
    /**
     * Whether the media element needs `crossOrigin` for the resource to load
     * (true only for a remote URL — raw VTT is served from a same-origin blob).
     */
    needsCrossOrigin: boolean;
}
/**
 * Resolves a WebVTT string into a `<track>` src: a URL is used directly; raw
 * WebVTT (starting with "WEBVTT") is served from a same-origin blob so no CORS
 * setup is needed. Shared by the captions and audio-description tracks.
 */
export declare function useVttSource(value: string | undefined): VttSource;
