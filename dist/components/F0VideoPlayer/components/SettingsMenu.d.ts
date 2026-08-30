import { LanguageOption } from '../../../lib/localized';
export interface SettingsMenuProps {
    /**
     * Element the menu portals into. Set to the player wrapper so the menu stays
     * inside the fullscreened element (the menu portals to `document.body`
     * otherwise, which is hidden while the player is fullscreen).
     */
    containerRef: React.RefObject<HTMLElement | null>;
    /** Audio (dubbed `src`) languages — a language-only choice, no "Off". */
    audioLanguages: LanguageOption[];
    audioLanguage: string | undefined;
    onAudioLanguageChange: (locale: string) => void;
    /** Caption/subtitle languages — languages plus an "Off" row. */
    captionLanguages: LanguageOption[];
    captionLanguage: string | undefined;
    captionsOn: boolean;
    onCaptionLanguageChange: (locale: string) => void;
    onCaptionsOff: () => void;
    /** Audio-description languages — languages plus an "Off" row. */
    audioDescriptionLanguages: LanguageOption[];
    audioDescriptionLanguage: string | undefined;
    audioDescriptionOn: boolean;
    onAudioDescriptionLanguageChange: (locale: string) => void;
    onAudioDescriptionOff: () => void;
}
/**
 * YouTube-style settings gear. Holds the language selection for every dimension
 * offered in more than one language — the audio track, the subtitles, and the
 * audio description — so those don't each need a control in the bar. The first
 * level lists the dimensions (with their current selection); each opens a
 * submenu of languages, and subtitles / audio description get an "Off" row
 * (picking a language enables the feature; "Off" disables it).
 *
 * Built on the shared `DropdownMenu` primitives (same submenu pattern as the
 * survey question menu) — Radix gives roving focus, typeahead, and Escape for
 * free. Render only when a section applies (see {@link hasSettingsMenu}).
 */
export declare function SettingsMenu({ containerRef, audioLanguages, audioLanguage, onAudioLanguageChange, captionLanguages, captionLanguage, captionsOn, onCaptionLanguageChange, onCaptionsOff, audioDescriptionLanguages, audioDescriptionLanguage, audioDescriptionOn, onAudioDescriptionLanguageChange, onAudioDescriptionOff, }: SettingsMenuProps): import("react").JSX.Element;
/**
 * Whether the settings gear has anything to show — true once any dimension
 * (audio track, subtitles, audio description) is offered in several languages.
 * Single-language features stay as their own on/off toggle in the bar instead.
 */
export declare function hasSettingsMenu(counts: {
    audioLanguages: number;
    captionLanguages: number;
    audioDescriptionLanguages: number;
}): boolean;
