import { LanguageOption } from '../../../lib/localized';
export interface LanguageSelectProps {
    /** Active locale. */
    value: string;
    options: LanguageOption[];
    onChange: (locale: string) => void;
    /**
     * What this selector controls — e.g. "Language" (detail content) or "Audio"
     * (dubbed track). Shown as the tooltip and prefixed into the accessible name
     * (which still contains the visible language, so it stays label-in-name safe).
     */
    kind: string;
}
/**
 * Card-themed language dropdown — the trigger shows the active language name,
 * the menu lists all provided languages. Used for the detail content language
 * and the audio-track language.
 */
export declare function LanguageSelect({ value, options, onChange, kind, }: LanguageSelectProps): import("react").JSX.Element;
