import { F0AudioPlayerSize } from '../types';
interface PlaybackTimeProps {
    currentTime: number;
    duration: number;
    size?: F0AudioPlayerSize;
}
export declare const PlaybackTime: ({ currentTime, duration, size, }: PlaybackTimeProps) => import("react").JSX.Element;
export {};
