import { RefObject } from 'react';
import { F0AudioPlayerProps } from './types';
import { AudioPlayerControls } from './useAudioPlayer';
export interface PlayerController extends Omit<AudioPlayerControls, "play" | "pause"> {
    audioRef: RefObject<HTMLAudioElement>;
    currentSrc: string | undefined;
    playbackRates: number[];
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
