import { F0AudioPlayerSize } from '../types';
interface PlayPauseButtonProps {
    isPlaying: boolean;
    disabled?: boolean;
    size?: F0AudioPlayerSize;
    onToggle: () => void;
}
export declare const PlayPauseButton: ({ isPlaying, disabled, size, onToggle, }: PlayPauseButtonProps) => import("react").JSX.Element;
export {};
