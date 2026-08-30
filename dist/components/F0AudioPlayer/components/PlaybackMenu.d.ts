import { LanguageOption } from '../../../lib/localized';
import { AudioPlayerMenuAction } from '../types';
interface PlaybackMenuProps {
    playbackRate: number;
    playbackRates: number[];
    onRateChange: (rate: number) => void;
    disabled?: boolean;
    extraItems?: AudioPlayerMenuAction[];
    /** Dubbed-audio languages (empty / single = no language section). */
    audioLanguages?: LanguageOption[];
    audioLanguage?: string;
    onAudioLanguageChange?: (locale: string) => void;
}
export declare const PlaybackMenu: ({ playbackRate, playbackRates, onRateChange, disabled, extraItems, audioLanguages, audioLanguage, onAudioLanguageChange, }: PlaybackMenuProps) => import("react").JSX.Element;
export {};
