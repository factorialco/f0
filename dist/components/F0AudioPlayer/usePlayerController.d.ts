import { RefObject } from 'react';
import { F0AudioPlayerProps } from './types';
import { AudioPlayerControls } from './useAudioPlayer';
export interface PlayerController extends Omit<AudioPlayerControls, "play" | "pause"> {
    audioRef: RefObject<HTMLAudioElement>;
    currentSrc: string | undefined;
    playbackRates: number[];
    /**
     * Where playback will resume when a seek made before the recording loaded is
     * applied, or `null`. Unlike `currentTime` it is reported whether or not a
     * duration is known yet, so a caller can reflect the position it asked for.
     */
    pendingTime: number | null;
}
/**
 * The controller drives a single `<audio>` element, so it takes an already
 * language-resolved source (a URL or a lazy resolver) — not the localizable
 * `Localized<...>` shape. Callers resolve the active language first (see
 * {@link useAudioLanguage}).
 */
type ControllerProps = Omit<F0AudioPlayerProps, "src"> & {
    src: string | (() => Promise<string>);
};
export declare const usePlayerController: (props: ControllerProps) => PlayerController;
export {};
