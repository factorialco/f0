import { LanguageOption, Localized } from '../../lib/localized';
type AudioSrc = string | (() => Promise<string>);
export interface AudioLanguage {
    /** Languages offered by a localized `src` (empty / single = no selector). */
    languages: LanguageOption[];
    /** Active audio language. */
    activeLocale: string | undefined;
    /** The resolved source for the active language (plain sources pass through). */
    resolvedSrc: AudioSrc;
    /** Set the active language. Pair with {@link preserveAudioPosition} to keep the playhead. */
    setLocale: (locale: string) => void;
}
/**
 * Resolves a (possibly localized) audio `src` to the source for the selected
 * language and manages that selection. Kept ref-free so it can run before the
 * player controller (which owns the `<audio>` element) is created.
 */
export declare function useAudioLanguage(src: Localized<AudioSrc>, defaultLanguage: string | undefined): AudioLanguage;
/**
 * Preserve the playhead across an audio-source swap: capture the current time
 * and play state, and restore them once the new source's metadata loads.
 * Call right before changing the language.
 */
export declare function preserveAudioPosition(audio: HTMLAudioElement | null | undefined): void;
export {};
