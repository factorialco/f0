import { RefObject } from 'react';
/**
 * Derives a transcription from the audio element's text tracks, so a recording
 * that ships its own transcript surfaces one even when the consumer doesn't
 * pass `content.transcription`.
 *
 * Tracks are read in-band-first (embedded in the file), then from out-of-band
 * `<track>` children as a fallback — both live on `audio.textTracks`. Cues load
 * asynchronously, so the hook watches for tracks and cue changes and re-reads
 * until it finds text.
 *
 * @param audioRef   ref to the player's `<audio>` element
 * @param currentSrc the resolved source URL; derivation restarts when it
 *                   changes so a new file's tracks replace the old ones
 * @param enabled    when `false`, derivation is skipped (e.g. a transcription
 *                   was already passed explicitly) and the hook returns
 *                   `undefined`
 * @returns the joined cue text, or `undefined` while none is available
 */
export declare const useDerivedTranscription: (audioRef: RefObject<HTMLAudioElement>, currentSrc: string | undefined, enabled: boolean) => string | undefined;
