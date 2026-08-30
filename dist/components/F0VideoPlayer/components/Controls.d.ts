import { LanguageOption } from '../../../lib/localized';
import { PlaybackRate } from '../utils';
export interface ControlsProps {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    playbackRate: PlaybackRate;
    isFullscreen: boolean;
    markerTime?: number;
    blockSeekPastMarker: boolean;
    containerRef: React.RefObject<HTMLElement | null>;
    /** Whether captions can be shown (passed or embedded in the file). */
    captionsAvailable: boolean;
    /** Whether captions are currently displayed. */
    captionsOn: boolean;
    /** Whether audio description is offered (described source or descriptions track). */
    audioDescriptionAvailable: boolean;
    /** Whether audio description is currently on. */
    audioDescriptionOn: boolean;
    /** The video has no audio (declared `silent`) — show a muted, disabled volume cue. */
    silent: boolean;
    /** Keep the controls visible during playback instead of auto-hiding them. */
    persist: boolean;
    /**
     * Language dimensions. Each is offered as an on/off toggle in the bar when it
     * has a single language, or moved into the settings gear (with the others)
     * when it has several. The audio track has no on/off — only a language.
     */
    audioLanguages: LanguageOption[];
    audioLanguage: string | undefined;
    onAudioLanguageChange: (locale: string) => void;
    captionLanguages: LanguageOption[];
    captionLanguage: string | undefined;
    /** Select a caption language (also turns captions on) — used by the gear. */
    onCaptionLanguageChange: (locale: string) => void;
    /** Turn captions off — used by the gear's "Off" row. */
    onCaptionsOff: () => void;
    audioDescriptionLanguages: LanguageOption[];
    audioDescriptionLanguage: string | undefined;
    /** Select an audio-description language (also turns it on) — used by the gear. */
    onAudioDescriptionLanguageChange: (locale: string) => void;
    /** Turn audio description off — used by the gear's "Off" row. */
    onAudioDescriptionOff: () => void;
    onTogglePlay: () => void;
    onToggleMute: () => void;
    onVolumeChange: (value: number) => void;
    onPlaybackRateChange: (rate: PlaybackRate) => void;
    onToggleFullscreen: () => void;
    /** Toggle captions on/off — used by the bar toggle (single-language case). */
    onToggleCaptions: () => void;
    /** Toggle audio description on/off — used by the bar toggle (single-language case). */
    onToggleAudioDescription: () => void;
    onSeek: (time: number) => void;
    download?: {
        label: string;
        onClick: () => void;
    };
}
/** Bottom control bar. Pure presentation; every interaction is delegated up. */
export declare function Controls({ isPlaying, currentTime, duration, volume, isMuted, playbackRate, isFullscreen, markerTime, blockSeekPastMarker, containerRef, captionsAvailable, captionsOn, audioDescriptionAvailable, audioDescriptionOn, silent, persist, audioLanguages, audioLanguage, onAudioLanguageChange, captionLanguages, captionLanguage, onCaptionLanguageChange, onCaptionsOff, audioDescriptionLanguages, audioDescriptionLanguage, onAudioDescriptionLanguageChange, onAudioDescriptionOff, onTogglePlay, onToggleMute, onVolumeChange, onPlaybackRateChange, onToggleFullscreen, onToggleCaptions, onToggleAudioDescription, onSeek, download, }: ControlsProps): import("react").JSX.Element;
